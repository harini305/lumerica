"""Extract event page bodies from the Phase 1 raw HTML into data/event-content.json.

The audit's content/*.md files drop some widget text (toggle/accordion titles,
custom HTML widgets), so event bodies are rebuilt from docs/source-audit/raw/html.
Widgets hidden on desktop are skipped: the desktop layout is the canonical copy,
and the mobile-only variants on these pages duplicate it.

    python scripts/extract_events.py
"""
import csv
import json
import re
from pathlib import Path

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parent.parent
AUDIT = ROOT / "docs" / "source-audit"
OUT = ROOT / "data" / "event-content.json"

HIDDEN = "elementor-hidden-desktop"
HEADING_TAGS = ["h1", "h2", "h3", "h4", "h5", "h6"]


def clean(text):
    text = text.replace("​", "").replace("\xa0", " ")
    return re.sub(r"[ \t\r\f\v]+", " ", re.sub(r"\s*\n\s*", "\n", text)).strip()


def hidden(el):
    while el is not None and getattr(el, "attrs", None) is not None:
        if HIDDEN in (el.get("class") or []):
            return True
        el = el.parent
    return False


def img_src(img):
    return img.get("data-src") or img.get("src") or ""


def text_blocks(container):
    """Paragraphs, lists and headings inside a rich-text container, in order."""
    blocks = []
    for el in container.find_all(["p", "ul", "ol", *HEADING_TAGS]):
        if el.find_parent(["ul", "ol"]) is not None and el.name in ("p", *HEADING_TAGS):
            continue
        if el.name in ("ul", "ol"):
            if el.find_parent(["ul", "ol"]) is not None:
                continue
            items = [clean(li.get_text(" ")) for li in el.find_all("li", recursive=False)]
            items = [i for i in items if i]
            if items:
                blocks.append({"t": "ul", "items": items})
        elif el.name in HEADING_TAGS:
            t = clean(el.get_text(" "))
            if t:
                blocks.append({"t": "h", "l": int(el.name[1]), "text": t})
        else:
            t = clean(el.get_text("\n") if el.find("br") else el.get_text(" "))
            if t:
                blocks.append({"t": "p", "text": t})
    if not blocks:
        t = clean(container.get_text(" "))
        if t:
            blocks.append({"t": "p", "text": t})
    return blocks


def widget_blocks(w):
    kind = w.get("data-widget_type", "")
    body = w.find(class_="elementor-widget-container") or w
    if kind in ("heading.default", "hub_fancy_heading.default"):
        h = body.find(HEADING_TAGS)
        if h is not None:
            t = clean(h.get_text(" "))
            return [{"t": "h", "l": int(h.name[1]), "text": t}] if t else []
        return text_blocks(body)
    if kind == "text-editor.default":
        return text_blocks(body)
    if kind == "icon-list.default":
        items = [clean(li.get_text(" ")) for li in body.find_all("li")]
        items = [i for i in items if i]
        return [{"t": "ul", "items": items}] if items else []
    if kind in ("image.default", "ld_fancy_image.default"):
        img = body.find("img")
        return [{"t": "img", "src": img_src(img), "alt": img.get("alt", "")}] if img else []
    if kind in ("ld_button.default", "button.default"):
        a = body.find("a")
        if a is None:
            return []
        return [{"t": "btn", "text": clean(a.get_text(" ")), "href": a.get("href", "")}]
    if kind in ("toggle.default", "nested-accordion.default"):
        items = []
        if kind == "toggle.default":
            for item in body.select(".elementor-toggle-item"):
                q = item.select_one(".elementor-toggle-title")
                a = item.select_one(".elementor-tab-content")
                if q and a:
                    items.append({"q": clean(q.get_text(" ")), "a": text_blocks(a)})
        else:
            for item in body.select("details"):
                q = item.find("summary")
                if q:
                    q_text = clean(q.get_text(" "))
                    q.extract()
                    items.append({"q": q_text, "a": text_blocks(item)})
        return [{"t": "faq", "items": items}] if items else []
    if kind in ("ld_table.default", "Table.default"):
        rows = []
        for tr in body.find_all("tr"):
            cells = [clean(c.get_text(" ")) for c in tr.find_all(["td", "th"])]
            if any(cells):
                rows.append(cells)
        return [{"t": "table", "rows": rows}] if rows else []
    if kind == "image-box.default":
        out = []
        img = body.find("img")
        if img:
            out.append({"t": "img", "src": img_src(img), "alt": img.get("alt", "")})
        out += text_blocks(body)
        return out
    if kind == "html.default":
        out = text_blocks(body)
        for a in body.find_all("a"):
            t = clean(a.get_text(" "))
            if t and a.get("href"):
                out.append({"t": "btn", "text": t, "href": a["href"]})
        return out
    return []


def extract(slug):
    soup = BeautifulSoup((AUDIT / "raw" / "html" / f"{slug}.html").read_text(encoding="utf8"), "html.parser")
    page = soup.find(attrs={"data-elementor-type": "wp-page"})
    sections = []
    tops = page.find_all(
        lambda el: el.name in ("section", "div")
        and ("elementor-top-section" in (el.get("class") or []) or "e-parent" in (el.get("class") or []))
        and el.find_parent(class_=["elementor-top-section", "e-parent"]) is None
    )
    for top in tops:
        if hidden(top):
            continue
        blocks = []
        for w in top.select(".elementor-widget"):
            if hidden(w) or w.find_parent(class_="elementor-widget") is not None:
                continue
            blocks += widget_blocks(w)
        bgs = re.findall(r"https://lumeriayoga\.com/wp-content/uploads/[^\"')\s]+\.(?:jpe?g|png)", " ".join(
            str(e.get("data-settings", "")) + str(e.get("style", "")) + str(e.get("data-bg", ""))
            for e in [top, *top.find_all(True)]
            if not hidden(e)
        ))
        # Elementor repeats the desktop copy of a widget in some mobile layouts; drop exact repeats.
        # A paragraph that only repeats the next list's items as run-on text is dropped.
        flat = lambda items: re.sub(r"\s+", " ", " ".join(items))
        blocks = [
            b for i, b in enumerate(blocks)
            if not (b["t"] == "p" and i + 1 < len(blocks) and blocks[i + 1]["t"] == "ul" and b["text"].startswith(flat(blocks[i + 1]["items"])))
        ]
        deduped = []
        for b in blocks:
            if deduped and b == deduped[-1]:
                continue
            deduped.append(b)
        if deduped or bgs:
            sections.append({"blocks": deduped, "bg": list(dict.fromkeys(bgs))})
    return sections


def main():
    with open(AUDIT / "02a-route-inventory.csv", encoding="utf8") as f:
        rows = list(csv.DictReader(f))
    slugs = [
        r["url"].rstrip("/").rsplit("/", 1)[-1]
        for r in rows
        if r["type"].startswith("Event detail")
    ]
    data = {slug: extract(slug) for slug in slugs}
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding="utf8")
    print(f"{len(data)} event pages -> {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
