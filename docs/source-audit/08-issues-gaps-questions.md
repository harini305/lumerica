# 08 — Issues, Gaps, Inconsistencies & Open Questions

Audit date: 2026-10-21. Every item cites its source page. **Nothing here has been corrected.** These are decisions for the business. Phase 2 must not silently "fix" facts; it should use confirmed values or flag them in the UI copy deck.

Severity: **H** = factual/transactional risk · **M** = content quality / UX · **L** = cosmetic.

## A. Placeholder, demo and broken content

| # | Sev | Issue | Where |
|---|---|---|---|
| A1 | H | `/contact/` is the theme's **demo page**: "Neve Yoga Studio", lorem-style text ("Kale chips knausgaard mustache…"), "21 JUMP STREET", "CALL: 0021 2345 556", and empty buttons. No real contact page exists. | /contact/ |
| A2 | H | Footer phone **icon** links to the placeholder `tel:+628123456789`. The text link correctly uses `wa.me/6282341913414`. | Footer (all pages) |
| A3 | M | Footer credit "Made with ♥ by" links to `mailto:someone@example.com`. | Footer |
| A4 | M | Home and Healing "Trainings" card → `/trainings/` → 301 to `/portfolio/trainings/`, which is an **empty** theme portfolio page. The same applies to `/portfolio/healing/`, `/portfolio/yoga/`, `/portfolio/in-house-retreat/` and `/portfolios/`. | Home, /healing/ |
| A5 | M | `/blog/` and `/?page_id=111` show "Nothing Found". There are **zero blog posts** (REST `/posts` returns `[]`). | /blog/ |
| A6 | M | Back-to-top button links to `https://lumeriayoga.com/yoga/#up` on every page, so it navigates away to /yoga/. | Footer |
| A7 | M | `/in-house-retreat/` "BOOK YOUR STAY" buttons are `href="#"`, and the page shows "Coming Soon". | /in-house-retreat/ |
| A8 | M | Home hero CTA button and scroll button are `href="#"`. | Home |
| A9 | L | Theme template posts exposed in the sitemap: `/?liquid-header=main-header`, `/?liquid-footer=main-footer`. | sitemap |
| A10 | L | Demo logos (`neve-yoga-logo*.png`, `logo-dark/light.svg`) and a `5.-videoHero-Dummy.mp4` remain in the media library. | Media library |
| A11 | L | Bottom-menu plugin markup (Home / Account / Cart with `#` links) is on every page but hidden by CSS. | All pages |

## B. Dates and event data

| # | Sev | Issue | Where |
|---|---|---|---|
| B1 | H | Invalid date: "Date : Monday, **23rd Monday 2026**". The events listing says 23rd March 2026. | /biomagnets-soundhealing-workshop/ |
| B2 | H | **Payment links reused across different events**: /somatic-workshop/ "Event Only / Event + Detox Spa" use `pay.airwallex.com/hkhahjdo6zs8` and `hkhahjefuop8`, the same as /full-moon-ceremony/ (Adam, 5 Dec 2025). /vocal-activation/ and /womens-circle/ share `hkhbw7r4k1tc` / `hkhbw7rm7txm` (same prices, so this may be intentional; confirm). | Event pages |
| B3 | H | "Shamanic Breathwork 20th October 2026" is shown under **Upcoming Events** and in the main menu, but the date had passed on the audit date (21 Oct 2026). Menu labels hard-code dates ("Full Moon Ceremony 26 October"). | /events/, header |
| B4 | M | The **"Weekly Events"** heading contains dated one-off events (CST Sept 2024, CST Training Oct 2024, Retreat July 2025, Full Moon 8 Nov 2025). These are hidden, but they sit above Past Events in the markup. Visible "weekly" items are only Basket Weaving (Sat) and Canang Sari (Sun). Women's Circle "Every Other Saturday", Vocal Activation "Every Other Wednesday" and AWILD Somatics "Every Sunday" are listed under **Past** Events. | /events/ |
| B5 | M | "Half-Day Spa Yoga Retreat with Julia & Adam 13th March 2026" appears **twice** in Past Events. | /events/ |
| B6 | M | Past Events are not strictly chronological (e.g. "Gong Workshop 29 Dec 2023" sits between Jan 2024 items). | /events/ |
| B7 | M | Events listing card "Full Moon Ceremony: with Lola Malaika 8th November 2025" (hidden) links to /full-moon-ceremony/, which now describes Adam DiMarco, 5 Dec 2025. The page was reused for a new date. | /events/, /full-moon-ceremony/ |
| B8 | M | Two different pages carry the same title "Full Moon Ceremony": /agni-ceremony/ (Flo Wong, 26 Oct 2026) and /full-moon-ceremony/ (Adam, 5 Dec 2025). /gong-workshop/ and /the-yoga-of-sound-gong-workshop/ are also duplicate titles. Several pages are re-dated copies (CST workshop Nov/Dec/Jan; CST training Feb/June/Oct 2024; amerta Feb/Mar 2024). | Multiple |
| B9 | M | Facilitator name spelled "Elli" on /shamanic-breathwork/ and /selflove-ceremony/ but "Ellie" on /events/. Elli's Instagram button is labelled "@awakeninginnerlight" but links to `instagram.com/floflofloariette/` (Flo Wong's account). | /shamanic-breathwork/ |
| B10 | L | /craniosacral-therapy-workshop-december/ is titled "December" but its content date is 12 January 2024. /craniosacral-therapy-workshop/ title says "September 2024", but /events/ lists "Introduction to CranioSacral Therapy 1st June 2024" pointing to the same URL. | CST pages |
| B11 | L | /the-art-of-sound-healing/ "Date: TO BE ANNOUNCED", but /events/ lists it as a past event (29 Sept 2023). | |
| B12 | M | Inconsistent price notation across events: "550.000 IDR", "350K", "888k IDR", "1.1M IDR", "2M IDR", "Starting from $1500" vs "Starting at $1499" (CST training, same page). | Event pages |
| B13 | L | /full-moon-ceremony/ time block is garbled: "Time : 18:30 - 20:00 16:00 - 18:00 Optional sauna & ice bath 200K IDR 18:30 - 23:00 Full Moon Ceremony 350K IDR". Conflicting end times (20:00 vs 23:00) and a 200K sauna add-on vs 550K combo. | /full-moon-ceremony/ |
| B14 | M | Some event imagery on the original site is **not original photography**: `ChatGPT-Image-Apr-3-2025-01_09_23-PM.png` (AI-generated, New Moon Ceremony) and `pexels-mikhail-nilov-6932022.jpg` (stock, Healing Purification). Many event cards are flyers with baked-in text. | /events/ |

## C. Prices and offer details

| # | Sev | Issue | Where |
|---|---|---|---|
| C1 | H | Sauna "1 Drop-in (Local / KITAS)" shows **"IDR 250,00"** (missing zero) next to "IDR 250,000". | /sauna-detox/ |
| C2 | H | Yoga **KITAS discount conflict**: a mobile-only note says "Drop-in Class – 100K, Yoga + Sauna Detox – 350K", while the rates table says Local/KITAS drop-in IDR 120,000 / 350,000. | /yoga/ (mobile) |
| C3 | H | Yoga rates: desktop and mobile tables link **different** destinations for the same item. Desktop Local yoga drop-in → Momence serviceId 33440; mobile → `#class-booking`. Mobile Local Yoga+Sauna → serviceId 20952, the same link as the non-local 400K item. Non-local "IDR 180,000 (Click to book)" → `#class-booking`. | /yoga/ |
| C4 | M | Labels say "(Purchase at reception)" but link to online Momence purchase pages. Sauna labels mix "Click to buy" and "Available at the reception" for the same price. | /yoga/, /sauna-detox/ |
| C5 | M | Number formats vary: "1.499K / 60 mins" (=IDR 1,499,000?), "1.05mil", "1.2mil", "2,100,000 IDR / hour", "$150 USD", "$150US", "IDR 3,300,000 ($220 USD)". | /acupuncture/, /healing-spa/, /private-healing/, /in-house-retreat/ |
| C6 | M | Lumeria Indulgence (four-hands): "60 mins 1.2mil \| 90 mins 1.3mil". The small 30-minute increment is unlike the other treatments; confirm. | /healing-spa/ |
| C7 | M | Reflexology Foot Massage description duplicates the Balinese Healing Massage text word-for-word. | /healing-spa/ |
| C8 | M | /acupuncture/ reuses the Healing Spa hero sub-headings "Selflove Begins with Selfcare" / "For the Body". Its meta description also starts "Acupuncture Selflove Begins with Selfcare". | /acupuncture/ |
| C9 | M | /in-house-retreat/ prices (IDR 3.3M–4.5M/night with USD conversions) are not shown anywhere on /accommodation/, which books via Airbnb. USD conversions are inconsistent: 90,000,000 IDR = "$6,380" monthly vs 3,300,000 = "$220" daily (≈15,000 vs 15,000 IDR/USD; 108M = $7,200; 110M = "$7,333"). Bed configs differ: in-house says Loft "1 King Bed or 2 Single Beds (4 available)", the Loft page says "1 Double Bed or 2 Single Beds" / "2 twin beds". The hidden "Loft (double occupancy)" copy says "single occupancy". | /in-house-retreat/, /accommodation/ |
| C10 | M | Only 5 of 16 private healing treatments are visible. The other 11 (Adriana Keniz, Oleksandr Izbash, Nalya, Abz, Sahar…) are hidden on all devices, presumably discontinued. The appointment form's session list matches the 5 visible ones. | /private-healing/ |
| C11 | M | Acupuncture "Packages" (2.3mil / 4.5mil / 8.4mil / 10mil) are hidden on all devices. | /acupuncture/ |
| C12 | L | Yoga timetable rules (no late entry past 10 min, no phones, no under-13s, English only) are only on /yoga/. | /yoga/ |

## D. Content & structure

| # | Sev | Issue |
|---|---|---|
| D1 | M | Large amounts of **hidden content** (Elementor "hidden on all devices"): 11 healings, 7 former teachers, the home "Mission" and "7 Tips" sections, the "Upcoming Trainings" banner, the CST/retreat curriculum blocks, and the duplicate home card grids. Phase 2 should treat hidden content as **inactive** unless the client confirms otherwise. |
| D2 | M | Home shows the "What we offer" grid, but two additional copies of the card grid (older card set: Yoga, In-house Retreat, Trainings, Healing, Sauna Detox, Host Your Retreat) exist in the markup. /healing/ repeats the home offer grid instead of focusing on healing. |
| D3 | M | Nav labels are inconsistent: "Healing" vs "Healings" (home card, footer), "Detox" vs "Sauna Detox", "Accommodations" vs "Accommodation". |
| D4 | M | /yoga-school/ (YTT 2027, last modified 2026-09-28) is complete and detailed but **not linked** from nav, footer or home. The "Training Team" section says "To Be Announced". Is it ready to launch? |
| D5 | L | Home hidden form text typo: "how to life your best life". Sauna heading "Cold Plunge" has a zero-width character ("Cold Plunge​"); the same occurs in "Loft Bungalow​", "Yoga Classes​" and "Vegan Breakfast​". |
| D6 | L | Teacher list mixes formats ("Ben" with no surname or country; "Constanza Quintana, Mexico"). |
| D7 | L | Footer copyright: one footer variant says "© Lumeria - 2025", the other "© Lumeria - 2026". |
| D8 | M | No studio opening hours are published anywhere (only sauna session times: Brunch 11am–1pm, Mid Day 1:30–3:30pm, Evening 4–6pm). |
| D9 | L | Instagram feed captions and the hidden Trustindex reviews mention a café ("fresh juices, light food", "must try nasi-goreng"), but no café/food page exists. Accommodation mentions "Vegan Breakfast". |

## E. SEO / technical

| # | Sev | Issue |
|---|---|---|
| E1 | M | 58 of 73 content routes have **no visible H1** (event and retreat pages use H2 titles). No page has multiple H1s. |
| E2 | L | 62 of 73 meta descriptions exceed 160 characters. Most are auto-generated from the first paragraph. Portfolio pages have none. |
| E3 | L | JSON-LD is generic Organization/WebPage. There is no `LocalBusiness` / `HealthAndBeautyBusiness` / `Event` schema despite clear events and an address. |
| E4 | M | Desktop **horizontal overflow**: document width 1498px at a 1440px viewport, caused by an absolutely-positioned element (`elementor-element-cc10430`) on home and /yoga/. Tablet and mobile measured fine. |
| E5 | M | Very heavy media: banner video 37 MB, CST video 57 MB, 59 in-use images over 1 MB, original JPGs up to 4240×2832. See 04-assets-manifest.csv. |
| E6 | L | 219 in-use images have no alt text in the media library. |
| E7 | L | The public WP REST API exposes page content (normal for WP); the Google Maps key is in the page source (Embed API). |
| E8 | L | Internal links use mixed hosts: `http://www.LumeriaYoga.com/...`, `https://www.lumeriayoga.com/...`, a trailing `%20` (`/somatic-workshop%20`). All redirect correctly. |

## F. Coverage gaps (what this audit could not confirm)

- Form submissions (Spanda, GHL), Airwallex payments, Momence checkout and Airbnb availability were **not tested** (they would create real leads or charges).
- The Reputation Hub review widget content could not be fetched (HTTP 400 outside the site context; rendered blank headlessly).
- Momence timetable contents are client-rendered and change daily. They were not transcribed.
- Hover states and GSAP animations were inferred from CSS/JS configuration, not frame-by-frame recorded.
- Draft, private or scheduled WordPress content is not accessible without admin login. The media API returned 768 of the 817 reported items (49 not returned, likely private or unattached).
- Exact Airbnb listing URLs for each bungalow are not on the site.

## G. Questions for the client (to resolve before or during Phase 2)

1. Which booking forms are live: the Spanda embeds (visible) or the hidden GoHighLevel forms? Are the Spanda embed and hook IDs stable for a new frontend domain?
2. Should /yoga-school/ (YTT 2027) launch in the new site and appear in the nav? Who are the trainers?
3. Confirm current prices (C1–C9), especially the KITAS discount, sauna drop-in and the in-house retreat rates. Are in-house nightly rates still offered, or is Airbnb the only channel?
4. Exact Airbnb listing URLs for King and Loft bungalows. Number of units and bed configuration.
5. Studio opening hours and reception hours to publish.
6. Which teachers and healers are current (visible list vs hidden)?
7. Which past events should remain as archive pages (SEO value) vs be redirected to /events/?
8. Correct links for B2 (somatic workshop) and B9 (Elli's Instagram), and the correct date for B1.
9. Is a blog wanted at all? (There are currently no posts.)
10. Is the café / vegan breakfast offering something to present?
11. Permission to reproduce the Google reviews as static testimonials, or keep the live Reputation Hub widget?
12. Keep the announcement popup mechanism? Who updates it?
