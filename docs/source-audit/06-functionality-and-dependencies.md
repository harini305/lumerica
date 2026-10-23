# 06 — Functionality & Technical Dependencies

Audit date: 2026-10-21. Methods: static HTML/JS inspection of all 75 crawled routes, WP REST API, headless Chrome (puppeteer-core + local Chrome) for rendering, scroll, sticky header and mobile-menu tests.

**No forms were submitted and no payments were started.** Every submit or pay flow would create real leads or charges in the business's systems. Backend behaviour of every form and payment link is therefore **Unverified** unless stated otherwise.

Verification levels: **Observed** (visible) · **Interaction tested** (clicked/scrolled in headless Chrome) · **Functionality verified** (intended outcome confirmed) · **Partially verified** · **Unverified**.

---

## 1. Platform stack (Verified from HTML)

| Layer | Detail |
|---|---|
| CMS | WordPress (REST API public at `/wp-json/`; `/wp-json/wp/v2/pages` exposes all 66 published pages) |
| Theme | **Hub** by Liquid Themes (`/wp-content/themes/hub/`), Redux framework, Bootstrap 3 grid, jQuery 3.7.1 + jQuery UI |
| Page builder | Elementor 4.3.4 + Elementor Pro 3.34, Hub Elementor Addons 5.0.8 (`ld_*`, `hub_fancy_heading` widgets) |
| Header / footer | Liquid "liquid-header" post 9 and "liquid-footer" post 10 (Elementor templates) |
| SEO | All in One SEO 5.0.2.1 (sitemaps, meta, OG, JSON-LD BreadcrumbList / Organization / WebPage) |
| Hosting / cache | SiteGround (sg-cachepress lazysizes, nginx) |
| Animation | GSAP + ScrollTrigger + SplitText (theme-bundled), Elementor fadeIn/fadeInUp, Fresco & Lity lightboxes, Isotope/Packery |
| Other plugins | Contact Form 7 (loaded, not used visibly), Instagram Feed (Smash Balloon) 6.14, EmbedPress, Table Addons for Elementor, WP Bottom Menu (hidden by custom CSS), Trustindex Google reviews, hp-popup (announcement modal), emcp-tools |

## 2. Feature inventory

| # | Feature | Where | Destination / dependency | Status | Phase 2 notes |
|---|---|---|---|---|---|
| 1 | Desktop header with logo, horizontal menu and dropdowns, social icons | All pages | Internal routes; Instagram, Facebook | Interaction tested (renders, dropdown markup present) | Header is `position:absolute` over the hero, and becomes sticky (`is-stuck`) after scroll (tested at 1500px scroll on desktop, tablet and mobile). Menu labels include **hard-coded event dates** ("Shamanic Breathwork 20 October"), which go stale. |
| 2 | Mobile/tablet nav (hamburger → full-width dropdown with accordion sub-menus) | ≤1024px | Same as desktop | **Interaction tested**: opened at 390px, screenshot `screenshots/home--mobile-390-menu-open.jpg` | Items: HOME, ACCOMMODATIONS ▾, YOGA, DETOX, HEALING ▾, EVENTS ▾, WEEKLY EVENTS ▾, HOST YOUR RETREAT |
| 3 | Announcement popup (hp-popup modal) | Sitewide on load | — | Observed (visible in desktop screenshot) | Current text: closed 31 Oct 2026 for a team-building day; standard hours resume 1 Nov 2026. Time-bound and CMS-managed. Phase 2 needs an editable, dismissible announcement banner. |
| 4 | Home hero background video | Home, /yoga-school/ | `/wp-content/uploads/2023/11/lumeria-website-banner.mp4` (1920×1080, **37.4 MB**) | Observed (autoplay, muted, loop, plays on mobile) | Far too heavy. Compress to under 3–5 MB, add a poster image, and respect `prefers-reduced-motion`. |
| 5 | Hero "scroll down" button | Home | `href="#"` | Observed | Anchor does nothing meaningful |
| 6 | Class timetable / class booking | /yoga/ "Class Timetable" | **Momence** host-schedule plugin `momence.com/plugin/host-schedule/host-schedule.js`, `host_id=32556`, CSS vars primary `92,104,71` | Partially verified (script loads; schedule renders client-side; teacher names and filters hidden by CSS) | Keep the Momence embed or link. A custom-CSS hack (`width:235%`) exists for mobile. |
| 7 | Class passes / memberships | /yoga/ rates table, /sauna-detox/ packages | **Momence** membership and appointment URLs (e.g. `momence.com/Lumeria-Yoga/membership/10-Class-Pack/111548`, appointment board `32556?boardId=8783`) | Links return 200 (Partially verified). Checkout not tested. | The rates table is duplicated: one desktop/tablet version and one mobile version. Some links are inconsistent (see 08-issues). |
| 8 | Event ticket purchase (Event only / Event + Detox Spa) | All event detail pages | **Airwallex** hosted payment links `pay.airwallex.com/<id>` | Links return 200; payment not tested → **Unverified** | One or two links per event, hard-coded. Some pages reuse another event's links (see 08). Phase 2: store as event data fields. |
| 9 | Ticket date selector widget ("Select a date → Select ticket → Book Online Now") | /mantras-kirtan/, /somatic-workshop/, /vocal-activation/, /womens-circle/, /craniosacral-therapy-workshop/ | Inline JS maps date options to Airwallex links | Observed. Currently shows "No upcoming dates available." | Custom script. Rebuild as a data-driven component. |
| 10 | Older event bookings | 2023–2024 event pages | **Momence** event URLs (e.g. `momence.com/Lumeria-Yoga/Healing-with-CranioSacral-Therapy-Workshop/98431229`) | Links 200; events are in the past | Legacy |
| 11 | Private healing appointment form | /healing-appointment/ | **Spanda Digital Hub** embed `spanda-digital-hub.lovable.app/api/public/embed/0f966b48….js`, `data-form="healing"`, session list (5 visible healings), T&Cs text, fallback `info@lumeriayoga.com` | Observed (renders client-side). Submission **Unverified**. | A hidden GoHighLevel iframe (`api.leadconnectorhq.com/widget/form/eIJoNrfzML4FzwuiQIME`) is the previous version. **Confirm with the client which system is live.** |
| 12 | Healing Spa appointment form | /healing-spa-appointment/ | Spanda embed `…/7607166069a4e310ef45ea85e504e8a6.js` (hidden GHL `iaQy1742KC0Acl2J6zgR`) | Observed / Unverified | Same as above |
| 13 | Acupuncture appointment form | /acupuncture-appointment/ | Spanda embed `…/b385a67fa656662b0304e30a979126f1.js`, sessions: Cosmetic Acupuncture & Gua Sha, Acupuncture, Fire Cupping, Auricular Acupuncture (hidden GHL `3zKId3f3ngy3bks3vGp4`) | Observed / Unverified | Same |
| 14 | Host-your-retreat application | /host-your-retreat/ → /host-your-retreat-thank-you/ | Spanda embed `…/7e7f7bab00038f07fbf173f20d428ac6.js`, `data-form="retreat"`, button "Submit My Application" (hidden GHL `6ubAK7DAMFFhOSA87ooZ`) | Observed / Unverified | Thank-you page exists (likely the redirect target; Unverified) |
| 15 | YTT 2027 enrolment form | /yoga-school/ `#enroll` | Custom inline form (`lys-form`). JS `fetch` POST to `spanda-digital-hub.lovable.app/api/public/hook/7e7f7bab00038f07fbf173f20d428ac6` (the same hook ID as the retreat form). Fallback `trainings@lumeriayoga.com`. Date pre-select from `#enroll-feb-2027` etc. Policy modal. Floating "Enroll Now" button. | Observed / Unverified | Fields: First Name*, Last Name*, Email*, WhatsApp*, YTT dates*, "How did you find out…", policy acceptance. "No payment is taken on this page." |
| 16 | Newsletter "Subscribe to Updates" | Home, Yoga, Healing, Healing Spa, Acupuncture, Sauna, Events, In-house retreat | **GoHighLevel / LeadConnector** iframe `api.leadconnectorhq.com/widget/form/oEINkNSpITBlUUMhkDNC` + `link.msgsndr.com/js/form_embed.js` | Observed (iframe rendered blank in headless capture) / Unverified | Keep the GHL form ID or replace with an API integration |
| 17 | Retreat / training / open-house registration | /yoga-healing-retreat/ (GHL `8AkH4bPEXh3g6hilcjtR`), /craniosacral-therapy-training-register/ (GHL `plYZfFgMAcBJmSzTUYoi`), /yoga-open-house/ (GHL `O0Z2rCosFbvDV1knqEi8`) | GoHighLevel | Observed (past events) | Legacy |
| 18 | Retreat package payments | /yoga-healing-retreat-registration/ | Airwallex `hkh6gecxm38b`, `hkh6geg7ai19`, `hkh6gehar7zf` | Unverified (retreat was July 2025) | Legacy |
| 19 | Accommodation booking | /accommodation/king-bungalow/, /loft-bungalow/ | **Airbnb** host profile `airbnb.com/users/show/563005550` (all "BOOK ON AIRBNB NOW" buttons) | Link 200 | Links go to the host profile, not to a specific listing. Ask the client for listing URLs. /in-house-retreat/ "BOOK YOUR STAY" buttons are `href="#"` (dead). |
| 20 | Facilitator bio popups | /private-healing/ "Read facilitator's bio" | Elementor Pro popups 57506, 57516, 57524, 57894, 59482, 60238, 58095, 58820 (content saved in `raw/private-healing-bio-popups.json`) | Observed (markup present) | Rebuild as modal or expandable panel |
| 21 | Google reviews | Home | **Reputation Hub** (GHL) iframe `reputationhub.site/reputation/widgets/review_widget/viinxWYcKUdLmD1sQF2L` (visible). The **Trustindex** Google widget is present but hidden on all devices. | Rep Hub iframe rendered blank in the headless capture, and direct fetch returned HTTP 400 → **Unverified**. Trustindex markup contains 9 real 5★ Google reviews (saved in `raw/trustindex-reviews.json`). | Reviews may be reused only with the client's approval. Keep a live widget or a curated, attributed list. |
| 22 | Instagram feed | Home "Latest Instagram posts" | Smash Balloon Instagram Feed (account @lumeriayoga). Images load client-side; captions are in alt text. | Observed (4–5 posts rendered in screenshot) | Requires an Instagram API token. Alternatively, link to the profile. |
| 23 | Google Map embed | Footer (all pages) | Google Maps Embed API, `q=Lumeria+Yoga+Ubud`, API key exposed in HTML (normal for the Embed API; should be referrer-restricted) | Observed | Footer map adds weight on every page. Phase 2 should consider a static map plus a link. |
| 24 | Directions links | Footer address | `goo.gl/maps/cWdRa4V3YG71nQds8`, `maps.app.goo.gl/UbU2YXB8q9GKbW369`, `goo.gl/maps/3vZLMkcJQ2fXv2DP7` (three different short links) | Links 200 | Consolidate into one |
| 25 | WhatsApp / phone / email | Footer, FAQ | `wa.me/6282341913414` (+62 823 4191 3414), `mailto:info@lumeriayoga.com`, `mailto:trainings@lumeriayoga.com`. The phone *icon* link is the placeholder `tel:+628123456789`. | Links verified syntactically | Fix the placeholder tel link |
| 26 | Social links | Header/footer | Instagram `instagram.com/lumeriayoga/`, Facebook `web.facebook.com/profile.php?id=100095672345703`, Pinterest `pinterest.co.uk/lumeriayoga/` | 200 | — |
| 27 | Back-to-top button | Footer | Links to `https://lumeriayoga.com/yoga/#up` (a **hard-coded /yoga/ URL** on every page) | Observed | Bug. Use smooth scroll to top. |
| 28 | In-page anchors and smooth scroll | /events/ (Upcoming / Weekly / Past tabs-as-anchors with a −200px offset script), /yoga/ (BOOK NOW / CLASSES / RATES / TEACHERS anchors), /yoga-school/ sticky sub-nav (#dates, #overview, #schedule, #curriculum, #packages, #faq, #enroll) | Inline scripts | Observed | Rebuild natively |
| 29 | Accordions / toggles | /yoga-school/ curriculum and FAQ, CST training FAQ, retreat FAQ | Elementor toggle | Observed | — |
| 30 | Galleries / carousels | /accommodation/, bungalows, retreat pages (Elementor gallery, media-carousel) | Fresco lightbox | Observed | — |
| 31 | Search | /blog/ only (WP search form) | WP search | Observed | No sitewide search needed |
| 32 | Bottom mobile menu (Home / Account / Cart) | Plugin markup on every page | `href="#"` | Hidden by custom CSS (measured not visible) | Do not rebuild. No e-commerce exists. |
| 33 | E-commerce / login / account | — | None (WooCommerce absent; /shop/ and /cart/ return 404) | Verified absent | — |
| 34 | Translation | — | None found | Verified absent | — |
| 35 | Analytics and tracking | Sitewide | Google Analytics 4 `G-2HD4B8946B` (MonsterInsights), Facebook domain verification `04rm7nqc4wcvm7setcohnaiflbrvdn`, GHL form tracking | Verified in HTML | Carry the GA4 ID and FB verification meta into Phase 2 (confirm with client) |
| 36 | YouTube video | CranioSacral training pages | `youtube.com/watch?v=Pjf2HANGMlc` plus self-hosted `Video-Adriana-1-1-1.mp4` (**57 MB**) | Observed | Past training. Legacy. |
| 37 | Downloadable documents | None linked | 3 PDFs in the media library (Monthly-Schedule Sept/Oct 2023), not linked from any page | Verified not linked | Outdated. Do not use. |

## 3. Third-party services summary

| Service | Purpose | Must retain? |
|---|---|---|
| Momence (host 32556) | Class schedule, class/sauna bookings, memberships | **Yes.** Core booking system. |
| Airwallex payment links | Event tickets, retreat payments | **Yes**, per event (data field). |
| Spanda Digital Hub (lovable.app) embeds/webhooks | Appointment and retreat/YTT enquiry forms | **Yes.** Confirm the embed IDs and the hook with the client/agency (SpandaDigital also built the current site). |
| GoHighLevel / LeadConnector | Newsletter form, legacy forms, Reputation Hub review widget | Yes for newsletter and reviews (confirm) |
| Airbnb | Bungalow booking | Yes (need exact listing URLs) |
| Google Maps Embed | Footer map | Optional |
| Instagram (Smash Balloon) | Feed | Optional; needs a token in a non-WP stack |
| Trustindex | Hidden Google reviews widget | No (hidden) |
| GA4 / Facebook | Analytics and verification | Yes (confirm) |

## 4. Implementation considerations

- The new Next.js frontend has **no backend of its own** for bookings. Every transactional flow is external (Momence, Airwallex, Airbnb, Spanda/GHL). Phase 2 must keep these destinations exactly and must not imply that on-site checkout exists.
- Event and pricing data currently live inside page layouts. Phase 2 should move events (title, facilitator, date(s), time, price event-only / combo, payment links, image, status upcoming/weekly/past) into a structured data file so dates and nav labels stop going stale.
- The embed scripts (Momence, Spanda, GHL) inject their own DOM and styles. Plan for client-only components and test them in the real environment.
- Do not reproduce the WordPress REST exposure, hidden duplicate sections, or the theme demo pages.
