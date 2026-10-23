# 03 — Content Inventory (preservation reference)

Audit date: 2026-10-21. This file summarises **what content exists, where it lives and how important it is**. The **verbatim** text of every page is in [content/](content/), one Markdown file per route, in DOM order, with hidden sections flagged. Structured data:

- [content/_events-data.json](content/_events-data.json): 44 event/training/retreat pages with verbatim Event Details strings, booking links, images and meta.
- [content/_shared-components.md](content/_shared-components.md): header, footer, popup and bottom-menu text and links.
- [raw/trustindex-reviews.json](raw/trustindex-reviews.json): 9 Google reviews (hidden widget).
- [raw/private-healing-bio-popups.json](raw/private-healing-bio-popups.json): 8 facilitator bios.
- [raw/extract/*.json](raw/extract/): full structured extraction (headings, paragraphs, buttons, links, images, forms, embeds, hidden flags) per page.

Rule for Phase 2: facts (prices, dates, durations, names, policies, contact details) must come from these files or from client confirmation. Nothing may be invented. Wording can be shortened where the meaning is preserved. Known errors are listed in [08-issues-gaps-questions.md](08-issues-gaps-questions.md) and must not be silently "fixed".

---

## 1. Business facts (Verified on site)

| Fact | Value | Source |
|---|---|---|
| Business name | Lumeria (also "Lumeria Yoga", "LUMERIA, Holistic Wellness Retreat Center Bali" on Instagram) | Schema.org Organization, header |
| Tagline | "Space to Shine" / "A space to shine" | Site tagline, home |
| Location | Lumeria Yoga, Jl. Raya Pengosekan, Ubud, Bali, Indonesia – 80571 | Footer |
| Email (general) | info@lumeriayoga.com | Footer, FAQs |
| Email (trainings) | trainings@lumeriayoga.com | /yoga-school/ |
| Phone / WhatsApp | +62 823 4191 3414 (`wa.me/6282341913414`) | Footer |
| Instagram | instagram.com/lumeriayoga | Header/footer |
| Facebook | web.facebook.com/profile.php?id=100095672345703 | Header/footer |
| Pinterest | pinterest.co.uk/lumeriayoga | Footer |
| Airbnb host | airbnb.com/users/show/563005550 | Bungalow pages |
| Momence | Host ID 32556, "Lumeria-Yoga" | /yoga/, /sauna-detox/ |
| Opened | Soft opening / Open House 16–17 Sep 2023 | /yoga-open-house/ |
| Built by | SpandaDigital (spandadigital.com) | Footer credit |
| Studio opening hours | **Not published** | — |
| Sauna sessions | Brunch 11am–1pm · Mid Day 1:30–3:30pm · Evening 4–6pm | /sauna-detox/ |
| Current notice | Closed 31 Oct 2026 (team-building day); standard hours resume 1 Nov 2026 | Sitewide popup |
| Class policies | No late entry past 10 minutes; strict no phones/filming; no children under 13 in public classes, no babysitting; all classes in English | /yoga/ |
| Purchase T&Cs (yoga) | "All purchases are final, non-refundable, non-transferrable, and non-returnable. All Packs purchases are valid for 30 Days from first use and valid for one person only." | /yoga/ |
| Event disclaimer | "All bookings are final. No refunds, credits, or transfers allowed." | Event pages |
| Sauna booking | Advance booking required, at least 2 hours before (online or with Reception) | /sauna-detox/ |

## 2. Core brand copy (verbatim, high priority)

- **Home H1:** "Discover a Sanctuary of Inner Balance and a Space to Shine"
- **Vision & Mission (home):** "At Lumeria, we vision all beings living, thriving and shining from their hearts. We embrace yoga, healing and connection as a lifestyle and truth and love as our north star. Our mission is to create a loving, nurturing and inclusive space that inspires all beings to embark on the transformative journey of self-discovery and self-illumination. A space to shine."
- **Yoga promise (/yoga/, /yoga-school/):** "Create a safe and loving space for everyone to experience the path of yoga. / Invite teachers, healers, visionaries and wisdom keepers to share their knowledge with integrity and authenticity. / Share the tools, techniques and traditions upholding the lineages from their origins."
- **YTT mission:** "Lumeria Yoga School has a very simple mission: to become self-illuminated and shine light on truth and love through the sacred practices of yoga." Slogan "Be The Light."
- **Events intro:** "Invoke wonder, magic, curiosity and play into everyday life with our special events…" (see content/events.md)

## 3. Offerings and prices — where each lives

| Offering | Items | Verbatim source | Priority |
|---|---|---|---|
| Yoga classes | 18 class styles with descriptions (some empty) | content/yoga.md §5 | **Essential** |
| Yoga rates | 7 tiers × Yoga Only / Yoga + Sauna Detox (IDR 120K local drop-in … 5.5M monthly combo) | content/yoga.md §8–23 | **Essential** (confirm conflicts C2–C4) |
| Teachers | 8 visible (Adam DiMarco, Ben, Constanza Quintana, Dominika Kerekesova, Eric Leto, Hannah Pfeffer, Nina Karina, Yohanes Reiza) plus 7 hidden former teachers | content/yoga.md §26–39 | Essential (visible only) |
| Sauna Detox | Includes list, 3 sessions/day, 7 price tiers, Hot Sauna / Steam / Cold Plunge texts | content/sauna-detox.md | **Essential** |
| Private Healing | 5 visible treatments (2,100,000 / 1,820,000 ×3 / 2,230,000 IDR per hour) plus bios | content/private-healing.md, raw/private-healing-bio-popups.json | **Essential** |
| Healing Spa | 11 body treatments, 2 facials, 2 packages with 60/90-min prices | content/healing-spa.md | **Essential** |
| Acupuncture | 4 treatments (1.499K, 1.299K, 899K, 899K) | content/acupuncture.md | **Essential** |
| Accommodation | King and Loft bungalows: inclusions, 12 amenities, check-out 11am, airport transfer on request | content/accommodation*.md | **Essential** |
| In-house retreat rates | 3 offers with daily/weekly/monthly rates | content/in-house-retreat.md | Review (legacy, "Coming Soon") |
| Events | 2 upcoming, 2 weekly, ≈40 past | content/events.md, content/_events-data.json | Essential (live), Low (past) |
| Host Your Retreat | Intro plus application form only | content/host-your-retreat.md | Essential (thin; needs more content) |
| YTT 2027 | Dates, 4 packages (IDR 41.4M–68.4M), curriculum, FAQ, policies | content/yoga-school.md | Pending client decision |
| Waiver | Private healing liability waiver text | content/private-healing-waiver-agreement.md | Utility |
| Appointment T&Cs | Payment-before-session, no refunds/credits/transfers, reschedule rules (in form `data-terms`) | raw/html/healing-appointment.html | Essential for forms |

## 4. Testimonials and reviews

- **Google reviews (Trustindex markup, hidden on site, all 5★):** Mona Kothari, aliya kz, Inês Afonso, Iranitzy Pérez (Spanish), Eric Poh, Rashmi P, Ernest Lai, allison lopez, Юлия Ким. Verbatim in `raw/trustindex-reviews.json`. Dates are not present in the markup. **Use only with client permission.** Keep the original wording, including spelling ("LUmiera", "Wonderfull", "peacefull").
- **Live review widget:** Reputation Hub (GHL) iframe. Its contents could not be captured.
- **CranioSacral training testimonials:** the section "Here's What Our Previous Students Say!" is video-based (past training, legacy).
- No other testimonials exist. **Do not invent any.**

## 5. Events list as shown on /events/ (visible cards, verbatim titles)

**Upcoming:** Shamanic Breathwork: Awaken Your Inner Shaman with Elli — 20th October 2026 · Full Moon Ceremony: Agni Hotra Fire Meditation & Sound Bath with Flo Wong — 26th October 2026.
**Weekly:** Basket Weaving Workshop — Every Saturday · Canang Sari Workshop — Every Sunday.
**Past (visible order):** New Moon Ceremony (Julia & Fendi) 11 Sep 2026 · Healing Purification Workshop (Flo Wong) 22 Aug 2026 · Half-Day Spa Yoga Retreat (Julia & Adam) 4 Apr 2026 · Roots & Resonance (Julia) 27 Mar 2026 · Digestive & Emotional Reset (Constanza) 23 Mar 2026 · Nervous System Reset (Constanza & Adam) 16 Mar 2026 · Healing Purification Workshop (Flo Wong) 17 Mar 2026 · Half-Day Spa Yoga Retreat 13 Mar 2026 (listed twice) · Full Moon Agni Hotra (Flo Wong) 3 Mar 2026 · Deep Energetic Reset (Adam & Constanza) 25 Feb 2026 · Women's Circle (Marlia Coeur) Every Other Saturday · Vocal Activation (Marlia Coeur) Every Other Wednesday · Self-Love Ceremony (Adam & Ellie) 14 Feb 2026 · New Moon Ceremony (Adam & Julia) 17 Feb 2026 · Healing Mantras (Emil) 19 Jan 2026 · New Moon Ceremony (Adam & Julia) 18 Jan 2026 · AWILD Somatics (Julia Aurora) Every Sunday · Reflect & Renew New Year's Day Retreat (Adam & Julia) 1 Jan 2026 · Healing Mantras (Emil) 8 Dec 2025 · Full Moon Ceremony (Adam) 5 Dec 2025 · Healing Purification Workshop (Flo Wong) 30 Nov 2025 · Acupressure Self-Healing Workshop (Eric Leto) 28 Nov 2025 · Discover Acupuncture (Diah Mahardewi) 20 Nov 2025 · Pilates, Sound & Sauna – The Collective Club 23 Nov 2025 (external Momence) · Soft, Slow & Safe (Adam) 16 Nov 2025 · New Moon Ceremony (Adam & Lola) 21 Oct 2025 · Kirtan & Sound Healing (Eric & Friends) 24 Sep 2025 · Breathwork Healing Workshop (Eric Leto) 27 Apr 2025 · Charity Puppy Yoga 23 Jun 2024 · Handstand Foundations 22 Jun 2024 · Yoga Nidra Masterclass 2 Jun 2024 · Introduction to CranioSacral Therapy 1 Jun 2024 · Amerta Sound Healing Workshop 16 Mar 2024 · The Yoga of Sound – Gong Workshop 29 Dec 2023 · The Art of Sound Healing 29 Sep 2023 · Lumeria Yoga Open House 16–17 Sep 2023.

Several past cards have no "Learn more" link (no detail page). Three event pages exist but are **not listed** on /events/: dreamscapes-breathwork-soundhealing (22 Sep 2026), art-of-somatics-soundhealing (17 Sep 2026) and somatic-voice-activation (3 Sep 2026).

## 6. FAQs (existing, verbatim in content files)

- /yoga-school/: 13 Q&As (enrolment process, certification RYS200 / Yoga Alliance, deposit non-refundable, English, non-native speakers, suitable without teaching intent, preparation, travel costs, Bali entry, airport DPS, airport pick-up, currency IDR, contact).
- /craniosacral-therapy-training/ and /yoga-healing-retreat/: FAQ accordions (past events).
- There is **no general FAQ** for classes, sauna or spa. Do not invent one. Policy facts from §1 may be surfaced as "Good to know".

## 7. SEO metadata

Titles follow the pattern "<Page> - Lumeria". Exceptions: Home "Lumeria Yoga Classes in Ubud"; Yoga "Yoga Classes in Ubud, Bali - Lumeria Yoga". Meta descriptions are mostly auto-extracted first paragraphs (62 over 160 chars). The OG image defaults to `Lumeria-Maria-Abz-01485.jpg` on many pages. Canonicals are self-referencing. Per-page values are in the header of each `content/<slug>.md`.

## 8. Duplicate, repetitive, outdated and low-priority content

| Type | Examples | Recommendation |
|---|---|---|
| Duplicates | Home offer grid ×3 and on /healing/; yoga rates desktop + mobile copies; CST training ×3 pages; CST workshop ×4; Gong ×2; Amerta ×2; Full Moon ×2; Reflexology description = Balinese description; acupuncture hero copied from spa; bungalow pages share 80% of their text; 7–8 identical "BOOK ON AIRBNB NOW" buttons per page | Consolidate into single components and data |
| Outdated | 2023–2025 events; in-house retreat rates; Monthly Schedule PDFs 2023; "newest Yoga School in Ubud" (meta, 2023 phrasing); hidden teachers and healers | Archive or drop (client to confirm) |
| Repetitive long text | Hot Sauna / Steam Room / Cold Plunge history paragraphs; long teacher bios; yoga class descriptions | Shorten in presentation, keep the facts |
| Low priority | Instagram feed, quote bands, empty portfolio, blog | Optional |
| Missing | Real contact page, opening hours, host-a-retreat facility info, practitioner for acupuncture, class descriptions for 7 styles, alt text | Request from client |
