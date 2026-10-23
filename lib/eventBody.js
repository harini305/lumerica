import { hasImage, keyFromUrl } from '@/lib/images';

// Turns the extracted Elementor sections of an event page (data/event-content.json)
// into clean body blocks for the event template. Booking buttons, in-page anchor
// buttons and the "Event Details" line are removed: the template renders those
// from the curated metadata in data/events.js instead.

const SKIP_IMAGES = new Set(['olive-leaf-1', 'uii', 'yoga-alliance-rys-200', 'chatgpt-image-apr-3-2025-01-09-23-pm', 'pexels-mikhail-nilov-6932022', 'pexels-olly-3757657-1', '3-imglogo-background', 'lumeria-yoga-logo', 'bird']);
const DETAILS_LINE = /(Date|Dates|When|Location)\s*:.*(Time|Price|Location|Date)\s*:?/i;

function titleCase(text) {
  if (text !== text.toUpperCase() || !/[A-Z]{3}/.test(text)) return text;
  return text.toLowerCase().replace(/(^|[\s(&/-])(\p{L})/gu, (m, a, b) => a + b.toUpperCase());
}

function keepButton(b) {
  const href = b.href || '';
  if (href.startsWith('#') || href.includes('#elementor-action') || href.includes('lumeriayoga.com')) return false;
  if (/airwallex|momence|leadconnector|register/i.test(href)) return false;
  if (href.startsWith('/')) return false;
  // An Instagram button whose @handle does not match its link (audit B9) is dropped.
  if (/instagram\.com/.test(href) && b.text.startsWith('@')) {
    return href.toLowerCase().includes(b.text.slice(1).toLowerCase());
  }
  return /instagram\.com|^mailto:/.test(href);
}

export function buildEventBody(sections, event) {
  const out = [];
  for (const section of sections.slice(1)) {
    const firstHeading = section.blocks.find((b) => b.t === 'h');
    if (firstHeading && /^about lumeria$/i.test(firstHeading.text)) continue;
    const isDetails = section.blocks.some((b) => b.t === 'h' && /^event details/i.test(b.text));
    const blocks = [];
    for (const b of section.blocks) {
      if (b.t === 'h') {
        if (/^event (details|conduct)/i.test(b.text) && isDetails) continue;
        if (b.text === event.title) continue;
        blocks.push({ ...b, text: titleCase(b.text) });
      } else if (b.t === 'p') {
        if (DETAILS_LINE.test(b.text)) continue;
        if (isDetails) continue; // booking notes are shown in the details panel instead
        if (/^(Click here|Reserve your spot|Book now)/i.test(b.text)) continue;
        blocks.push(b);
      } else if (b.t === 'img') {
        const key = keyFromUrl(b.src);
        if (!hasImage(key) || SKIP_IMAGES.has(key) || key === event.image) continue;
        if (out.some((s) => s.blocks.some((x) => x.t === 'img' && x.key === key)) || blocks.some((x) => x.key === key)) continue;
        blocks.push({ t: 'img', key, alt: b.alt });
      } else if (b.t === 'btn') {
        if (keepButton(b)) blocks.push(b);
      } else {
        blocks.push(b);
      }
    }
    if (blocks.some((b) => b.t !== 'img' && b.t !== 'btn') || blocks.some((b) => b.t === 'img')) out.push({ blocks });
  }

  // Normalise heading levels: the highest level in the body becomes h2.
  const levels = out.flatMap((s) => s.blocks.filter((b) => b.t === 'h').map((b) => b.l));
  const top = levels.length ? Math.min(...levels) : 2;
  for (const s of out) for (const b of s.blocks) if (b.t === 'h') b.level = b.l === top ? 2 : 3;
  return out;
}

// Notes printed next to the payment buttons on the original page
// ("Limited to 33 spots only", the detox spa combo explanation, the disclaimer).
export function bookingNotes(sections) {
  const details = sections.find((s) => s.blocks.some((b) => b.t === 'h' && /^event details/i.test(b.text)));
  if (!details) return [];
  return details.blocks.filter((b) => b.t === 'p' && !DETAILS_LINE.test(b.text)).map((b) => b.text);
}
