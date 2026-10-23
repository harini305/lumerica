# 02 — Page & Route Inventory

Audit date: 2026-10-21. Coverage: **every URL in the AIOSEO sitemaps (75) plus 6 probes and discovered links = 81 rows**. The machine-readable list, with status, type, last-modified date and recommendation, is in **[02a-route-inventory.csv](02a-route-inventory.csv)**. Full verbatim text per page is in **[content/](content/)** (one `.md` per route).

Shared layout on every route: Elementor header (post 9) → page content → Elementor footer (post 10, with Google Map) → announcement popup. See §3.

Typography and colours are identical sitewide (Marcellus headings #5C6847, Jost body #606060, cream/sand backgrounds). See [05-brand-reference.md](05-brand-reference.md). They are not repeated per page below unless a page deviates.

---

## 1. Route summary

| Group | Count | Routes |
|---|---|---|
| Main navigation | 7 | `/`, `/accommodation/`, `/yoga/`, `/sauna-detox/` (label "Detox"), `/healing/`, `/events/`, `/host-your-retreat/` |
| Nav sub-pages | 5 | `/accommodation/king-bungalow/`, `/accommodation/loft-bungalow/`, `/private-healing/`, `/healing-spa/`, `/acupuncture/` |
| Live event details (nav) | 4 | `/shamanic-breathwork/` (20 Oct 2026, just past), `/agni-ceremony/` (26 Oct 2026, upcoming), `/canang-sari-workshop/` (every Sunday), `/traditional-basket-weaving-bali/` (every Saturday) |
| Booking / enquiry utility | 5 | `/healing-appointment/`, `/healing-spa-appointment/`, `/acupuncture-appointment/`, `/host-your-retreat-thank-you/`, `/private-healing-waiver-agreement/` |
| Unlinked new page | 1 | `/yoga-school/` (200hr YTT 2027; complete page, not in nav) |
| Past events / trainings / retreats | 38 | See §4 |
| Past registration / payment pages | 2 | `/yoga-healing-retreat-registration/`, `/craniosacral-therapy-training-register/` |
| Legacy / theme leftovers | 10 | `/contact/` (demo content), `/in-house-retreat/` ("Coming Soon"), `/yoga-open-house/` (2023), `/blog/`, `/?page_id=111`, `/portfolios/`, `/portfolio/{healing,trainings,in-house-retreat,yoga}/` |
| Theme template posts in sitemap | 2 | `/?liquid-header=main-header`, `/?liquid-footer=main-footer` |
| Redirect | 1 | `/trainings/` → 301 `/portfolio/trainings/` (empty) |
| Probes → 404 | 4 | `/about/`, `/shop/`, `/cart/`, a random path (themed 404 page "Page not found") |
| Feed | 1 | `/feed/` (RSS, no posts) |

**Coverage record**

1. **Successfully inspected (HTML + structured extraction):** all 75 sitemap URLs plus `/blog/`, `/trainings/` and the 404 page.
2. **Rendered in headless Chrome at 1440/768/390 with screenshots:** 22 key routes (see [07-responsive-observations.md](07-responsive-observations.md)).
3. **Partially inspected:** client-rendered widgets (Momence timetable, GHL/Spanda forms, Reputation Hub reviews, Instagram feed). Their containers and configuration were captured, but their inner content was not.
4. **Discovered but inaccessible:** none publicly. Drafts and private pages need WP admin.
5. **Broken or unavailable:** `/trainings/` (lands on an empty page), empty portfolio pages, `/blog/` (no posts), `/contact/` (placeholder). No HTTP errors on linked routes; all 251 outbound links returned 200.
6. **Interactive states not verified:** form submissions, payments, hover states (inferred from CSS only), and GSAP animation timing.

---

## 2. Main pages — detailed inventory

### 2.1 Home — `/`  (Elementor page 7, modified 2026-09-28)
- **Purpose / type:** brand landing; routes visitors to offers.
- **SEO:** title "Lumeria Yoga Classes in Ubud". The description is long (≈430 chars: "Experience holistic well-being at Lumeria, the newest Yoga School in Ubud…"). OG image `Lumeria-Maria-Abz-01485.jpg` (4240×2832). Canonical `/`.
- **Sections (visible, in order):**
  1. **Hero.** Full-viewport background video `lumeria-website-banner.mp4` with a 50% black overlay. H1 "Discover a Sanctuary of Inner Balance and a Space to Shine" (split-line GSAP animation). Round scroll-down button (`#`).
  2. **Vision & Mission.** Eye icon, "VISION & MISSION" tag (SVG). Image `Lumeria-Maria-_-Abz-01376` (Buddha statue in garden). H2 "Vision & Mission" with one paragraph.
  3. **What We Offer.** Lotus icon, tag, a 6-card image grid over the `bg-3.svg` pattern: Accommodations → /accommodation, Yoga → /yoga/, Detox → /sauna-detox/, Healings → /healing/, Events → /events/, Host Your Retreat → /host-your-retreat/.
  4. **Newsletter.** H2 "Enter your details below to receive the latest updates from Lumeria!" with a GHL iframe form.
  5. **Latest Instagram posts.** Smash Balloon feed (5 posts).
  6. **Google reviews.** Reputation Hub iframe.
  7. Two empty containers (spacing).
- **Hidden (all devices):** "Mission — Create a sanctuary…" section with 3 bullet points; the old 6-card grid (Yoga, In-house Retreat, Trainings, Healing, Sauna Detox, Host Your Retreat); the "7 Tips on how to live a life of purpose" lead magnet with an Elementor form; the Trustindex reviews.
- **Interactive:** popup on load, video, card hover (zoom/gradient, Estimate), Instagram links.
- **Risks:** 37 MB hero video; "Trainings" card in the hidden grid links to an empty page; duplicate grids.
- **Redesign:** keep the hero (video, compressed, or a still), vision statement, 6 offer pathways, social proof (reviews) and newsletter. Optionally add an upcoming-events teaser and location/contact.

### 2.2 Yoga — `/yoga/` (modified 2026-09-29)
- **SEO:** "Yoga Classes in Ubud, Bali - Lumeria Yoga".
- **Sections:**
  1. Hero: H1 "Lumeria Yoga", H2 "Yoga classes in the heart of Ubud, Bali" (`Lumeria-Soft-Opening-03265`).
  2. "Our promise is to:" (3 bullets), with anchor sub-nav BOOK NOW / CLASSES / RATES / TEACHERS / RETREATS.
  3. Quote band: "Yoga takes you into the present moment. The only place where life exists" (`…01875`).
  4. **Class Timetable**: intro, "IMPORTANT TO NOTE" (4 rules), Momence schedule widget.
  5. **Class Description**: 18 class types (Ashtanga-Inspired, Bhakti, Breathwork & Sound Healing, Chakra Balancing & Sound Healing, Gentle Flow, Gong Sound Healing, Hatha Flow, Healing Sound Massage, Inside Flow, Myofascial Yin, Kundalini Yoga & Meditation, Power Yoga, Qi Gong, Restorative Yoga & Nidra, Sound Healing, Vinyasa Flow, Yin Yang Yoga, Yin Yoga). Several have a heading but **no description**.
  6. **Class Rates**: table with Yoga Only vs Yoga + Sauna Detox columns × 7 rows (Local/KITAS drop-in, drop-in, 3/5/10 packs, 1-week and 1-month unlimited), plus T&Cs. A desktop/tablet version and a separate mobile version exist, and there is a mobile-only KITAS note plus a price-table image `imgTable-Yoga-Page-IDR.png`.
  7. Quote: "Yoga is the journey of the self, through the self, to the self."
  8. **Meet Your Teachers** (8 visible): Adam DiMarco, Ben, Constanza Quintana, Dominika Kerekesova, Eric Leto, Hannah Pfeffer, Nina Karina, Yohanes Reiza. Each has a photo, specialties and a bio. 7 former teachers are hidden.
  9. Newsletter.
- **Hidden:** Upcoming Trainings (CST June 2024) and former teachers.
- **Risks:** pricing conflicts C2–C4 (see 08). Very long page (14,000px desktop, 22,000px mobile).
- **Redesign:** split into clear blocks: Timetable (Momence) · Classes (filterable or compact list) · Rates (one responsive table) · Teachers (grid with expandable bios).

### 2.3 Healing (hub) — `/healing/` (title "Healing – Main")
- Hero H1 "Holistic Healing for the Mind, Body, and Spirit" (`pexels-olly-3757657-1.jpg`, **a stock image**, plus `…01360`). Two intro paragraphs. Card grid: Private Healings, Healing spa, Acupuncture, then repeats of the home cards (Yoga, In-house Retreat, Trainings, Healing, Sauna Detox, Host Your Retreat). Newsletter.
- **Redesign:** a real hub with 3 primary cards (Private Healing, Healing Spa, Acupuncture) and a short intro. Drop the repeated home grid.

### 2.4 Private Healing — `/private-healing/`
- Hero H1 "Private Healing Treatments" plus intro. Policy paragraph (1:1 sessions; couples on request).
- **Visible treatments (5):** Amerta Sound Meditation Healing (Galih Naga Seno, 2,100,000 IDR/hour, 1 person or couple) · Astrology Birth Chart Reading (Eric Leto, 1,820,000 IDR/hr) · Tarot Cards Reading (Eric Leto, 1,820,000) · Reiki Energy Healing (Eric Leto, 1,820,000) · Biomagnetic Therapy (Adam DiMarco, 2,230,000 IDR/hr). Each has an image, a description, a "Read facilitator's bio" popup and "Reserve Now" → /healing-appointment/.
- Hidden: 11 more treatments (see 08 C10). Final CTA "MAKE AN APPOINTMENT NOW".
- **Redesign:** treatment cards (name, facilitator, duration, price, description, bio modal, reserve).

### 2.5 Healing Spa — `/healing-spa/`
- Hero H1 "Healing Spa", H2 "Selflove Begins with Selfcare".
- **For the Body (11):** Balinese Healing Massage 60' 400K / 90' 600K; Deep Tissue 500K/750K; Aromatherapy 460K/680K; Shiatsu 700K/1.05mil; Back & Shoulder 400K/600K; Lumeria Indulgence (Four Hands) 1.2mil/1.3mil; Remedial Therapy Bodywork 800K/1.2mil; Reflexology Foot 420K/610K; Hot Stone 90' 800K; Body Scrub 90' 900K; Hair Creambath 60' 400K.
- **Facial (2):** Signature Facial 60' 500K; Detox Facial 60' 600K.
- **Packages (2):** Balinese + Signature Facial 120' 800K; Balinese + Reflexology 120' 720K.
- Every item has "Reserve Now" → /healing-spa-appointment/. **The same image `DSC07529.jpg` is used for every treatment.**
- **Redesign:** a compact menu-style price list grouped by category, one booking CTA, and 2–3 real spa photos.

### 2.6 Acupuncture — `/acupuncture/`
- Hero H1 "Acupuncture" (`Acupuncture.jpeg`), sub-headings copied from the spa page.
- Treatments: Cosmetic Acupuncture & Gua Sha 1.499K / 60 min; Acupuncture 1.299K / 45–60 min; Fire Cupping 899K / 30 min (no description); Auricular Acupuncture 899K / 30 min. "Reserve Now" → /acupuncture-appointment.
- Hidden: Packages (3/6/12 sessions, unlimited month). Practitioner not named on this page; the past event names Diah Mahardewi.

### 2.7 Sauna Detox — `/sauna-detox/` (nav label "DETOX")
- Hero H2 "Detox in Ubud, Bali" (no H1) with intro.
- **Opening hours table:** Brunch 11am–1pm · Mid Day 1:30–3:30pm · Evening 4–6pm.
- **Includes:** 2 hours access to hot sauna, steam room and cold plunge; complimentary herbal tea and water; locker, towel and showers.
- Booking note: pre-book at least 2 hours ahead.
- Three feature blocks (Hot Sauna, Steam Room, Cold Plunge) with history/benefit text and images (`…01784`, `…01770`, `…01705`).
- CTA "Click Here to Book Sauna Detox Session" → Momence board.
- **Prices & packages:** Local/KITAS drop-in IDR 250,000 (shown with the "250,00" typo); drop-in 300,000; 3-pack 800,000; 5-pack 1,100,000; 10-pack 1,800,000; 1-week unlimited 1,200,000; 1-month unlimited 3,500,000. Link to Yoga + Sauna combos on /yoga#class-rates.
- An image `Screenshot-2023-09-01-at-10.20.59-pm.png` (a screenshot used as content).

### 2.8 Accommodation — `/accommodation/`
- Hero H1 "Stay in our In-House Retreat at Lumeria Bali" with eco-luxury intro.
- Two feature boxes: "A Hidden Oasis Nestled in Central Ubud, Bali" and "All-Inclusive Holistic Approach to Life". CTA "SEE OUR ACCOMMODATION OPTIONS" → #bungalow. Gallery.
- **What's Included:** Hot Sauna, Steam Room, Cold Plunge, Yoga Classes, Vegan Breakfast, Accommodation (6 image boxes).
- **Accommodation Options:** King Bungalow (includes list plus "lumbung" description, LEARN MORE & RESERVE) and Loft Bungalow (same).
- No prices.

### 2.9 King Bungalow — `/accommodation/king-bungalow/` · 2.10 Loft Bungalow — `/accommodation/loft-bungalow/`
- Same template: hero H1 plus intro · "lumbung" paragraph · "What's Included with Your … Bungalow" → Unlimited Yoga Classes · Access to Detox Area · Vegan Breakfast · Private room block · **Amenities** list (12 items: bed config, aircon + fan, hot water, outdoor showers, natural toiletries, blowdryer, robes, slippers, blackout curtains, drinking water, tea/coffee, kettle) · Other information (King: check-out 11am; both: airport transfer on request) · gallery.
- **Every CTA** is "BOOK ON AIRBNB NOW" → Airbnb host profile 563005550 (7–8 buttons per page).
- Both pages share the hero, yoga, detox and breakfast images (`Single-Bungalow-*`).
- **Redesign:** a single room-detail template (gallery, amenities, inclusions, one sticky Airbnb CTA).

### 2.11 Events — `/events/`
- Hero H2 "Events at Lumeria" plus intro. Anchor buttons: Upcoming / Weekly / Past.
- **Upcoming (2):** Shamanic Breathwork (Elli, 20 Oct 2026) and Full Moon Agni Hotra (Flo Wong, 26 Oct 2026).
- **Weekly (2 visible):** Basket Weaving (every Saturday) and Canang Sari (every Sunday).
- **Past (≈37 visible cards)**, Sept 2026 back to Sept 2023, each with a poster image and "Learn more". The full list is in [03-content-inventory.md](03-content-inventory.md) §5.
- 12 cards are hidden. There is an inline smooth-scroll script and the newsletter form.
- **Redesign:** data-driven event list (Upcoming first, recurring, compact past archive), with automatic past/upcoming by date.

### 2.12 Host Your Retreat — `/host-your-retreat/` → `/host-your-retreat-thank-you/`
- Hero H2 "Host Your Own Retreat at Lumeria" plus intro. "Apply to Host Your Own Retreat at Lumeria" paragraph. Spanda application form ("Submit My Application").
- Thank-you page: H2 "Thank you for your retreat application!" plus 3 H4 lines.
- The page gives **no information about facilities, capacity or pricing** for hosts. It is a content gap.

### 2.13 Lumeria Yoga School — `/yoga-school/` (NOT IN NAV, modified 2026-09-28)
- A self-contained landing page with its own sticky sub-nav (#dates, #overview, #schedule, #curriculum, #packages, #faq, #enroll) and a floating "Enroll Now".
- Sections: hero video, "Lumeria Yoga School | Yoga Alliance Certification", H1 "200 Hours Lumeria Yoga Teacher Training in Bali", "Be The Light.", Enroll Now and View 2027 Dates · Three Pillars: Train · Transform · Heal · **2027 dates**: 8–28 Feb, 3–23 May, 5–25 Jul, 9–29 Aug, 8–28 Nov 2027 · quotes (Iyengar, Nisargadatta Maharaj, Bhagavad Gita, Yogananda, Rolf Gates, Amit Ray) · Program Overview (Vision, Mission & Promise, The Training) · Typical Day (Sadhana, Nourish & Restore, Learn & Practice, Integration, Teaching Practicum, Day Off, Graduation) · Who it's for (5 audiences) · Why Choose (6 points) · What You'll Gain (5) · Sample Schedule (06:30–19:30 table) · Key Areas (3) · Curriculum accordion (≈70 topics) · Training Team: **"To Be Announced"** · What's Included (8) · **2027 Pricing**: Training Package Early-Bird IDR 41,400,000; Wellness Package 46,800,000; All-In Shared Resident 59,400,000; All-In Private Resident 68,400,000 · Location gallery · FAQ (13 Q&As) · Enrollment form plus Training Participation Policy · "Still Have Questions?" → trainings@lumeriayoga.com.
- Uses `yoga-alliance-rys-200.png`. **Ask the client** whether to launch it (08 G2).

### 2.14 Appointment pages — `/healing-appointment/`, `/healing-spa-appointment/`, `/acupuncture-appointment/`
- Hero H2 ("Make Private Healing Appointment", etc.) plus a Spanda embed form with session dropdown and T&Cs (full T&C text in `data-terms`, captured in `raw/html`). A hidden GHL form is also on each page.

### 2.15 Private Healing Waiver Agreement — `/private-healing-waiver-agreement/`
- H2 plus a long liability waiver paragraph ("I am fully aware of and understand the potential dangers and risks…"). Not linked from nav. Keep it as a legal utility page if the client uses it.

### 2.16 Contact — `/contact/`
- **Theme demo content only** (08 A1). Real contact data exists only in the footer: info@lumeriayoga.com · WhatsApp +62 823 4191 3414 · Lumeria Yoga, Jl. Raya Pengosekan, Ubud, Bali, Indonesia 80571 · Instagram/Facebook/Pinterest · Google Map.
- **Redesign:** build a genuine Contact / Visit page from verified footer data.

### 2.17 In-house Retreat — `/in-house-retreat/` (legacy, 2023)
- H1 "In-house Retreat" with intro. Three visible bungalow offers with daily/weekly/monthly IDR+USD rates (Single bungalow 3.3M/day; Double 4.0M/day; Loft single 3.8M/day). "BOOK YOUR STAY" buttons are `#`. Shows "Coming Soon". **Not in nav**, but linked from the hidden home grid. Recommend consolidating into /accommodation/ after the client confirms prices.

---

## 3. Shared components

| Component | Content | Notes |
|---|---|---|
| **Header** | Logo (imgLogo.svg) · HOME · ACCOMMODATIONS ▾ (King Bungalow, Loft Bungalow) · YOGA · DETOX · HEALING ▾ (Private Healing, Healing Spa, Acupuncture) · EVENTS ▾ (Shamanic Breathwork 20 October, Full Moon Ceremony 26 October) · WEEKLY EVENTS ▾ → /events#weekly-events (Canang Sari Workshop Every Sunday, Basket Weaving Workshop Every Saturday) · HOST YOUR RETREAT · Instagram, Facebook icons | Desktop: transparent/absolute over the hero, sticky after scroll, nav 13px uppercase. ≤1024px: logo plus hamburger. |
| **Footer** | Google Map embed · cream logo · info@lumeriayoga.com · +62 823 4191 3414 (WhatsApp) · address · Instagram/Facebook/Pinterest · two link columns (HOME, ACCOMMODATIONS, KING BUNGALOW, LOFT BUNGALOW, YOGA, DETOX / HEALINGS→/private-healing/, EVENTS, HOST YOUR RETREAT) · © Lumeria - 2025/2026 · "Made with ♥ by SpandaDigital" · back-to-top | Olive #5C6847 background. Footer height 658px desktop, **1,253px mobile**. |
| **Announcement popup** | "Public Announcement:" plus logo plus closure notice | Sitewide modal |
| **Newsletter block** | H2 plus GHL "Subscribe to Updates" iframe | On 8 pages |
| **Page hero** | Background photo plus dark overlay, tag SVG, title | Most pages |
| **Event template** | Hero (title, facilitator, time/date) → intro plus "Reserve" → description/image → Benefits / Prerequisites / Schedule / Group Size → **Event Details** (Facilitator, Date, Time, Location, Price; Event Only / Event + Detox Spa buttons; disclaimer) → About facilitator plus Instagram → Reserve CTA | 30+ pages share it |
| **Treatment card** | Image · H2/H3 name · facilitator · description · duration/price list · bio link · Reserve | Private healing, spa, acupuncture |

---

## 4. Event, training and retreat detail pages (data table)

Verbatim details are in [03-content-inventory.md](03-content-inventory.md) §5 and in each `content/<slug>.md`. Status is as of 2026-10-21.

| Route | Event | Facilitator(s) | Date | Price (IDR unless noted) | Booking | Status |
|---|---|---|---|---|---|---|
| /agni-ceremony/ | Full Moon Ceremony: Agni Hotra Fire Meditation & Sound Bath | Flo Wong | Mon 26 Oct 2026, 6:30–8pm | 350.000 / 550.000 combo; 33 spots | Airwallex | **Upcoming** |
| /shamanic-breathwork/ | Shamanic Breathwork: Awaken Your Inner Shaman | Elli | Tue 20 Oct 2026, 1:30–4:30pm | 550.000 / 750.000; 20 pax | Airwallex | Just past (still in "Upcoming") |
| /canang-sari-workshop/ | Canang Sari Workshop | — | Every Sunday 2–3:30pm | 250.000 / 450.000 | Airwallex | Recurring |
| /traditional-basket-weaving-bali/ | Basket Weaving Workshop | — | Every Saturday 1–3pm | 350.000 / 550.000 | Airwallex | Recurring |
| /dreamscapes-breathwork-soundhealing/ | Dreamscapes Ceremony: Blue Lotus Breathwork + Reiki + Sound Healing | Julia Aurora & Fendi | Tue 22 Sep 2026, 6:30–8:30pm | 350.000 / 550.000 | Airwallex | Past (not in events list) |
| /art-of-somatics-soundhealing/ | The Art of Somatics: Asana & Womb Movement with Sound Healing | Julia Aurora | Thu 17 Sep 2026 | 350.000 / 550.000 | Airwallex | Past (not in list) |
| /new-moon-ceremony/ | New Moon Ceremony: Cacao, Yoga Nidra & Sound Healing | Julia & Fendi | Fri 11 Sep 2026 | 350.000 / 550.000 | Airwallex | Past |
| /somatic-voice-activation/ | Somatic Voice Activation | Julia Aurora | Thu 3 Sep 2026 | 350.000 / 550.000 | Airwallex | Past (not in list) |
| /healing-workshop/ | A Healing Purification Workshop | Flo Wong | Sat 22 Aug 2026 | 350.000 / 550.000 | Airwallex | Past |
| /spa-yoga-retreat-bali/ | Half-Day Spa Yoga Retreat | Julia & Adam | Sat 4 Apr 2026, 11:30–5:30 | 888k | Airwallex | Past |
| /yin-reiki-soundhealing-workshop/ | Roots & Resonance: Yin, Storytelling, Reiki & Sound | Julia | Fri 27 Mar 2026 | 400.000 / 600.000 | Airwallex | Past |
| /biomagnets-soundhealing-workshop/ | Digestive & Emotional Reset: Biomagnets & Sound Healing | Constanza | "23rd Monday 2026" (events list: 23 Mar 2026) | 500.000 / 700.000 | Airwallex | Past |
| /nervous-system-reset/ | Nervous System Reset: Yin, Biomagnetism, Sound Bath & Tea | Constanza & Adam | Mon 16 Mar 2026 | 500.000 / 700.000 | Airwallex | Past |
| /yin-soundhealing-workshop/ | Deep Energetic Reset: Yin, Biomagnetism & Sound | Adam & Constanza | Wed 25 Feb 2026 | 450.000 / 650.000 | Airwallex | Past |
| /selflove-ceremony/ | Self-Love Ceremony | Adam & Elli | Sat 14 Feb 2026 | 450.000 / 650.000 | Airwallex | Past |
| /vocal-activation/ | Vocal Activation | Marlia Coeur | Wed 11 & 25 Feb 2026 | 150.000 / 350.000 | Airwallex / ticket widget | Past (labelled "every other Wednesday") |
| /womens-circle/ | Women's Circle | Marlia Coeur | Sat 7 & 21 Feb 2026 | 150.000 / 350.000 | Airwallex / ticket widget | Past |
| /mantras-kirtan/ | Healing Mantras | Emil Johannes | Mon 19 Jan 2026 | 200.000 / 400.000 | Ticket widget | Past |
| /somatic-workshop/ | AWILD Somatics | Julia Aurora | Every Sunday 15:00–17:30 | 250.000 / 450.000 | Airwallex (links of another event) | Listed under Past |
| /reflect-and-renew/ | Reflect & Renew: New Year's Day Retreat | Adam & Julia | Thu 1 Jan 2026, 10am–6pm | 1.100.000 | Airwallex | Past |
| /full-moon-ceremony/ | Full Moon Ceremony: Release & Renewal | Adam DiMarco | Fri 5 Dec 2025 | 350.000 / 550.000 | Airwallex | Past |
| /acupressure-workshop/ | Acupressure Self-Healing Workshop | Eric Leto | Fri 28 Nov 2025 | 200.000 / 500.000 | Airwallex | Past |
| /acupuncture-healing/ | Discover Acupuncture: Heal in Community | Diah Mahardewi | Thu 20 Nov 2025 | 400.000 / 600.000 | Airwallex | Past |
| /soft-slow-safe/ | Soft, Slow & Safe: One-Day Nervous System Healing Retreat | Adam | Sun 16 Nov 2025, 8am–5:30pm | 2.000.000 | Airwallex | Past |
| /kirtan-with-friends/ | Kirtan & Sound Healing | Eric & Friends | Wed 24 Sep 2025 | 150K | Airwallex | Past |
| /yoga-healing-retreat/ (+ /yoga-healing-retreat-registration/) | Bali Yoga & Healing Retreat (4 days) | Eric Leto | 20–23 Jul 2025 | 11.3M / 16.2M / 17.9M | GHL form + Airwallex | Past |
| /breathwork-workshop/ | Breathwork Healing Workshop | Eric Leto | 27 Apr 2025 | 200.000 / 400.000 | Airwallex | Past |
| /craniosacral-therapy-training/ | CranioSacral Therapy Training (Upledger) | Upledger team | 16–20 Oct 2024 | $1499 / $1699 / $2199 USD | GHL register | Past |
| /craniosacral-therapy-training-june-2024/ | same | | 26–30 Jun 2024 | from $1499 | GHL | Past (duplicate) |
| /craniosacral-therapy-training-feb-2024/ | same | | 4–8 Feb 2024 | from $1500 | GHL | Past (duplicate) |
| /craniosacral-therapy-workshop/ | Healing with CranioSacral Therapy – Intro | Adriana Keniz & Team | 15 & 29 Sep 2024 | dropdown → Airwallex | Ticket widget | Past |
| /craniosacral-therapy-workshop-november/, -december/, -january/ | Healing with CST Workshop | Adriana Keniz | 12 Nov 2023 / 12 Jan 2024 / 26 Jan 2024 | — | Momence | Past (duplicates) |
| /charity-puppy-yoga/ | Charity Puppy Yoga | Michelle Bäcker & BAWA | Sun 23 Jun 2024 | 300.000 / 500.000 | Airwallex | Past |
| /handstand-workshop/ | Handstand Foundations | Michelle Bäcker | Sat 22 Jun 2024 | 600.000 / 800.000 | Airwallex | Past |
| /yoga-nidra-masterclass/ | Yoga Nidra Masterclass | Bela Tcaciuc | Sun 2 Jun 2024 | 800.000 / 1.000.000 | Airwallex | Past |
| /heart-songs-cacao/ | Heart Songs and Cacao | Mōllie Mendōɀa & Harmony Sunshine | Sat 13 Apr 2024 | 350K pre / 400K door | Airwallex | Past |
| /amerta-sound-healing/ | Amerta Sound Healing Workshop | Galih Naga Seno | Sat 16 Mar 2024 | 760.000 | Momence | Past |
| /amerta-sound-healing-feb24/ | Amerta Sounditation Immersion L1 & L2 | Galih Naga Seno | 17–18 Feb 2024 | — | Momence | Past |
| /gong-workshop/, /the-yoga-of-sound-gong-workshop/ | The Yoga of Sound – Gong Workshop | Nalya Alieva (Raj Kaur), PhD | 29 Dec 2023 / 24 Nov 2023 | — | Momence | Past (duplicates) |
| /the-art-of-sound-healing/ | The Art of Sound Healing | Agustian Supriatna | TBA (listed 29 Sep 2023) | — | Momence | Past |
| /yoga-open-house/ | Lumeria Yoga Open House (free classes) | Astri, Andrei, Diana, Maria, Adriana, Agustian, Nalya | 16–17 Sep 2023 | Free | GHL | Past |

**Recommendation:** implement one data-driven `/events/[slug]` template. Seed it with the two live and two recurring events. Keep past events as a compact archive (title, date, facilitator, image) and decide with the client whether past URLs keep detail pages or 301 to `/events/`.
