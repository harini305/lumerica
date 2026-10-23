# 07 — Responsive Observations

Method: headless Chrome 130+ (puppeteer-core 23.11.1, local Chrome), 2026-10-21.

**Tested viewports:** Desktop **1440×900** · Tablet **768×1024** (touch) · Mobile **390×844** (mobile emulation, touch). Device scale factor 1.

Each page was loaded with `networkidle2`, scrolled through to trigger lazy loading and scroll animations, then captured. Raw metrics are in [screenshots/_measurements.json](screenshots/_measurements.json).

**22 routes × 3 viewports = 66 screenshots** plus the mobile menu open state, in [screenshots/](screenshots/). File naming is `<page>--<viewport>-<width>.jpg`.

Pages: home, yoga, healing, private-healing, healing-spa, acupuncture, sauna-detox, accommodation, king-bungalow, loft-bungalow, events, host-your-retreat, in-house-retreat, yoga-school, contact, shamanic-breathwork, agni-ceremony, canang-sari-workshop, healing-appointment, craniosacral-therapy-training, yoga-healing-retreat, blog.

**Capture limitations:**
- Captures are clipped at **15,000px** height. /yoga/, /events/, /yoga-school/ and the CST and retreat pages are longer than that, so their lower parts are not in the images (their content is fully in `content/`).
- Some lazy or animated cards (the home offer grid at desktop) and all third-party iframes (GHL newsletter, Reputation Hub, Spanda forms, Momence) rendered **blank or partially** in headless mode. This is a capture artefact, not proof that they are broken.
- The announcement popup appears on first load and overlays the home hero in the desktop capture.
- Hover states were not captured.

## 1. Measured page heights (px)

| Page | 1440 | 768 | 390 |
|---|---|---|---|
| home | 4,381 | 4,505 | 5,435 |
| yoga | 14,081 | 15,773 | **22,253** |
| healing | 2,692 | 2,936 | 3,589 |
| private-healing | 4,659 | 5,516 | 8,084 |
| healing-spa | 6,195 | 8,154 | 10,761 |
| acupuncture | 3,449 | 4,343 | 5,236 |
| sauna-detox | 4,260 | 4,829 | 7,415 |
| accommodation | 6,020 | 6,454 | 10,615 |
| king-bungalow / loft | 5,277 / 5,128 | 5,855 / 6,123 | 7,943 / 8,322 |
| events | 16,744 | **27,801** | 24,149 |
| yoga-school | 23,605 | 30,860 | **36,381** |
| craniosacral-therapy-training | 13,818 | 15,444 | 22,494 |
| yoga-healing-retreat | 9,522 | 10,423 | 14,325 |
| event detail (shamanic / agni / canang) | ≈4,200–5,300 | ≈4,300–6,400 | ≈5,300–8,000 |
| contact / host / appointment / blog | 1,240–1,780 | 1,400–3,050 | 1,860–3,880 |

The pages are very long, especially on mobile. Phase 2 should aim for roughly half of these heights through consolidation.

## 2. Header and navigation

| | Desktop 1440 | Tablet 768 | Mobile 390 |
|---|---|---|---|
| Position | `absolute`, transparent over the hero (103px tall). Becomes **sticky** (`is-stuck`, top 0) after scroll. | `relative`, **190px tall** (logo plus trigger area; heavy for a tablet). Sticky after scroll. | `relative`, 124px. Sticky after scroll. |
| Navigation | Horizontal uppercase menu (13px, letter-spacing 2px, #606060) with dropdowns, plus Instagram and Facebook icons | Hamburger | Hamburger (X when open) opening a full-width panel under the logo. Items separated by hairlines. Accordion chevrons for ACCOMMODATIONS, HEALING, EVENTS, WEEKLY EVENTS. ([screenshot](screenshots/home--mobile-390-menu-open.jpg)) |
| Logo | Sunburst plus wordmark, about 120px wide | Large centred logo | ≈140px logo, left aligned |

The /blog/ page header is `relative` on desktop (no hero), which proves the absolute header depends on each page having a hero.

## 3. Layout, grid and content width

- Elementor boxed width is **1140px** desktop / 1024px tablet / 767px mobile, with many full-width (stretched) sections for heroes and bands.
- Desktop: two-column image/text rows (Vision & Mission, treatments, bungalows), a 3-column card grid (home offers), and multi-column galleries.
- Tablet: two-column rows mostly kept (e.g. the accommodation feature boxes stay side by side). Galleries become a 3-column masonry. Some rows stack.
- Mobile: everything stacks to one column. Image above text. Treatment cards are full width with the image first. Event list is a single column of poster cards (≈40 cards on /events/ make a 24,000px page).
- **Horizontal overflow:** on **every page at 1440px** the document is 1,498px wide (58px overflow), caused by an absolutely positioned Elementor element (`elementor-element-cc10430`, shared layout). Tablet and mobile measured no overflow.
- A stray **"Search" input bar** is visible under the hero on /accommodation/ at 768px (observed in the screenshot; likely the bottom-menu plugin's search wrapper or a theme module). Needs no reproduction.

## 4. Typography changes

- Home hero H1 drops from 80px to 36.66px on mobile. **At 768px it stays 80px**, so it wraps into 6 lines in a 451px column.
- Inner page H1s: 50–52px on desktop and tablet. Mobile is 32px on some pages (healing, private-healing, accommodation, bungalows), but stays **52px** on others (yoga, healing-spa, acupuncture, in-house, contact). The scale is inconsistent.
- Section H2s stay **40px on mobile** on most pages; only /yoga-school/ scales to 30px.
- Body text is 16px with 1.7 line-height on all viewports.

## 5. Images and media

- Hero background images and video stay full-bleed. The video plays on mobile (`background_play_on_mobile: yes`), so a 37 MB download hits mobile users.
- Desktop images are cropped by Elementor background positioning. On mobile, treatment photos are shown at full width and natural ratio.
- Event cards are poster images with baked-in text that becomes tiny on mobile.

## 6. Mobile-specific content differences

- /yoga/: a **separate mobile rates table** (stacked rows with "Yoga Only …" / "Yoga + Sauna Detox …" labels) plus a mobile-only KITAS note and price image. The desktop table is hidden on mobile. Their link targets and prices differ (08 C2–C3).
- /sauna-detox/: the final booking CTA is hidden on mobile.
- No other substantive mobile-only content was found.

## 7. Footer

- Desktop 658px, tablet 733px, **mobile 1,253px**. On mobile it stacks the map embed, cream logo, contact lines, social icons, link list, copyright and credit, which is very tall.
- The gold back-to-top circle is fixed bottom-right inside the footer area (it links to /yoga/#up).
- The transition from the last section is usually the cream newsletter band and then the olive footer. No overlap or clipping was observed.

## 8. Sticky and fixed elements

- Sticky header (all viewports).
- Announcement modal on load.
- /yoga-school/ adds a floating "Enroll Now" button after the hero (script) and a sticky sub-navigation.
- The WP Bottom Menu plugin is hidden (measured not visible at all three widths).

## 9. Takeaways for Phase 2 (not a design)

- Fix the type scale per breakpoint (H1/H2 must reduce on tablet and mobile).
- Use a slim tablet header and avoid the 190px block.
- Ensure zero horizontal overflow.
- Paginate or condense the past-events archive and the yoga page.
- Make rates tables responsive from one data source (no duplicated desktop/mobile copies).
- Compact the mobile footer.
- Use poster-free event cards (real photo plus HTML text).
