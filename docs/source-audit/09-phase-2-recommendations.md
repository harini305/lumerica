# 09 — Phase 2 Recommendations & Mandatory Redesign Requirements

Status: **recommendations only.** Nothing has been implemented. Phase 2 starts only after explicit approval.

Target stack: Next.js (App Router) · JavaScript · React · GSAP + ScrollTrigger · responsive frontend.

---

## 1. Mandatory design rules (must be enforced in Phase 2)

### Typography
- **Exactly two font families across the whole site.** One for headings; one for body, navigation, buttons, forms, cards, tables and footer.
- Both readable, professional and not decorative. No third family for special sections, quotes, the footer or any single component. Icon fonts or SVG icons are not text families.
- Consistent sizes for equivalent components on every route, from a controlled responsive type scale (e.g. `clamp()`-based tokens: display, h1, h2, h3, body-lg, body, small, label).
- The original pairing is Marcellus + Jost (see 05-brand-reference §1.3 for options). The final choice is made at the start of Phase 2, then loaded once via `next/font` and used through CSS variables.

### Visual design
- A professional, human-designed look. Intentional image and text alignment. One content-width system (e.g. 1200px max, consistent gutters, 16px minimum side padding on mobile) and a spacing scale applied consistently.
- **No** unnecessary decorative numbering ("01 / 02"), eyebrow text, random symbols, floating badges or ornaments. The original's small tag pills ("VISION & MISSION") and the 01–06 numerals on /yoga-school/ should **not** be carried over by default.
- Avoid repetitive, AI-looking, template layouts (endless alternating image/text rows, identical card grids on every page).
- Effects (GSAP/ScrollTrigger) only where they serve a purpose: gentle reveal of section content, hero entrance, perhaps a parallax on one hero image. Respect `prefers-reduced-motion`. No per-letter animation of body copy.
- Preserve the brand: olive #5C6847, cream #F9F2E8, sand #EFE5D8, gold #EAC86A (sparingly, never as text on white), text #606060 (or a darker accessible variant), the sunburst logo, and real garden/shala photography.

### Content
- Concise pages focused on essential information. No repeated paragraphs, no unnecessary sections, no excessive length (the original /yoga/ is 14–22k px tall).
- Preserve all meaningful facts. **Do not invent** claims, testimonials, FAQs, prices, opening hours or blog posts. Unresolved values from 08-issues must be confirmed or shown exactly as they are on the original with a TODO flag in the data file. They must not be guessed.

### Footer
- Compact and content-driven: logo, short contact block (email, WhatsApp, address with one map link), social icons, a single row or two short columns of key links, and copyright. Only verified information.
- No oversized padding, no duplicate menus, no full-height embedded map (the original footer is 1,253px tall on mobile). Use a static map image or link instead of the iframe, or place the map on the Contact page.
- The last content section must be fully visible above the footer, with a natural transition. No overlap, clipping, excessive blank space or fixed-footer interference. Test at 390, 768 and 1440 widths.

### Images and performance
- Use the original assets downloaded to `docs/source-audit/assets/` (238 files, web-size variants ≤2048px). Do not substitute stock or AI imagery where an original suits the section. Note that the original itself uses a few stock/AI images (08 B14), so prefer real photos.
- Resize and compress locally (e.g. produce 640/1024/1600/2048 widths in WebP/AVIF plus JPG fallback with `sharp` as a one-off script). Do not ship the 1–6 MB originals.
- **Next.js config:** merge `images: { unoptimized: true }` into the existing `next.config` (do not replace unrelated settings) to avoid consuming the Vercel Image Optimization quota, while still serving pre-sized files with `srcset`/`sizes`, explicit width/height, `loading="lazy"` below the fold and `priority` for the hero only.
- Hero video: re-encode `lumeria-website-banner.mp4` (37 MB) to under 4 MB at 1280–1600px wide, H.264 plus WebM, muted, with a poster image. Or replace it with a still on mobile and reduced-motion. Do not ship the 57 MB CST video.
- No duplicate copies of assets in `public/`. Only the processed outputs.

## 2. Proposed information architecture (for discussion)

| New route | Source pages | Notes |
|---|---|---|
| `/` | Home | Hero · vision · offer pathways (6) · upcoming events teaser · reviews · newsletter · visit/contact strip |
| `/yoga` | /yoga/ | Timetable (Momence embed) · class styles · rates (single responsive table) · policies · teachers |
| `/sauna-detox` (label "Sauna & Detox") | /sauna-detox/ | Sessions · inclusions · prices · Momence booking |
| `/healing` | /healing/ | Hub: Private Healing, Healing Spa, Acupuncture |
| `/healing/private` (or keep `/private-healing`) | /private-healing/ + bios | 5 visible treatments |
| `/healing/spa` (or `/healing-spa`) | /healing-spa/ | Menu-style list |
| `/healing/acupuncture` (or `/acupuncture`) | /acupuncture/ | 4 treatments |
| `/accommodation`, `/accommodation/king-bungalow`, `/accommodation/loft-bungalow` | same | One room template, Airbnb CTA |
| `/events`, `/events/[slug]` | /events/ + event pages | Data-driven from a JSON/JS data file seeded from `content/_events-data.json` |
| `/host-your-retreat` (+ thank-you) | same | Spanda form; ask the client for facility details |
| `/contact` | footer data | Real contact page (replaces demo) |
| `/yoga-school` | /yoga-school/ | Only if the client confirms launch |
| Appointment pages | 3 appointment routes | Keep embeds. Could become sections or modals of the treatment pages. |
| `/private-healing-waiver-agreement` | same | Utility, unlinked |

**Keep URL compatibility.** Keep the existing slugs where possible (`/private-healing/`, `/healing-spa/`, `/acupuncture/`, event slugs, trailing slashes via `trailingSlash: true`). Otherwise add `redirects()` in next.config for every changed or dropped route (past events → `/events`, `/in-house-retreat/` → `/accommodation`, portfolio/blog → `/`, `/trainings/` → `/yoga-school` or `/`).

**Blog:** none exists, so do not build one by default. If the client later requests a simple blog page, its initial presentation uses **no more than 10 images**.

## 3. Integrations to preserve exactly

| Integration | Keep | Implementation note |
|---|---|---|
| Momence host 32556 schedule widget plus membership/appointment URLs | Yes | Client-only component loading `host-schedule.js`. Store URLs in data. Retest the mobile layout (the original needed a CSS hack). |
| Airwallex payment links per event | Yes | Data fields `bookingEventOnly`, `bookingCombo`. Hide the buttons automatically for past events. |
| Spanda Digital Hub embeds (healing, spa, acupuncture, retreat) and the YTT webhook | Yes, after confirmation | Load scripts client-side. Confirm domain allow-listing for the new host. |
| GoHighLevel newsletter form `oEINkNSpITBlUUMhkDNC` | Yes (confirm) | Iframe or GHL API |
| Reputation Hub reviews widget | Confirm | Or a static attributed list with permission |
| Airbnb listing links | Yes | Need exact listing URLs |
| WhatsApp / email / maps links | Yes | Fix the placeholder `tel:` link and consolidate the map links |
| GA4 `G-2HD4B8946B`, FB domain verification meta | Confirm | `next/script` afterInteractive; consent if required |
| Instagram feed | Optional | Static "Follow @lumeriayoga" block is simpler and needs no token |

## 4. Content and data model suggestions

- `data/site.js`: name, tagline, contact, socials, address, map link, announcement (text, active dates).
- `data/classes.js`, `data/rates.js`, `data/sauna.js`, `data/treatments.js` (category, name, facilitator, durations[], prices[], description, image, bookingUrl), `data/teachers.js`, `data/rooms.js`, `data/events.js` (slug, title, subtitle, facilitators, dates[], recurring, time, priceEventOnly, priceCombo, comboNote, capacity, bookingLinks, image, status derived from date).
- Navigation is generated from data so the stale hard-coded event labels disappear.
- SEO: one H1 per page, descriptions of 150–160 characters (drafted from existing copy and approved by the client), `LocalBusiness` + `Event` JSON-LD, sitemap and robots via App Router metadata routes, OG images from original photos.

## 5. Accessibility and quality targets

- WCAG AA contrast (avoid gold text on white, check #606060 on sand). Visible focus states, keyboard-operable menus, accordions and modals. Alt text for every content image (219 are missing on the original). Touch targets ≥44px.
- No horizontal overflow at any width (the original overflows by 58px at 1440).
- Lighthouse performance target ≥90 on mobile for content pages (excluding third-party embeds).

## 6. Suggested Phase 2 order

1. Resolve the client questions in 08 §G (at minimum: forms in use, yoga-school launch, price confirmations, Airbnb URLs, hours).
2. Choose the two fonts and define tokens (colour, type scale, spacing, widths).
3. Process the image set (resize/compress) into `public/images/…` and re-encode the hero video.
4. Build the layout shell (header, mobile nav, compact footer, announcement banner), then home, then offer pages, then events (data-driven), then contact/utility pages, then redirects and SEO.
5. Responsive QA at 390 / 768 / 1440 and test every external link and embed.
