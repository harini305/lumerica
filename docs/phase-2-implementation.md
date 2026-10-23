# Phase 2 — Implementation Notes

Rebuild of lumeriayoga.com as a Next.js 16 (App Router, JavaScript) frontend, built from the Phase 1 audit in `docs/source-audit/` (unchanged). Local only: nothing has been pushed or deployed.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
npm run lint
npm run images       # regenerate public/images from docs/source-audit/assets (originals are never modified)
npm run images -- --prune   # remove derivatives nothing references
npm run events:extract      # rebuild data/event-content.json from the audit's raw HTML (needs Python + bs4)
```

## Where things live

| Path | Contents |
|---|---|
| `data/site.js` | Contact details, socials, navigation, **announcement** (text + `until` date) |
| `data/events.js` | Event metadata: dates (Bali time), prices, verified booking links, images, open `issues` per event |
| `data/event-content.json` | Event page bodies extracted from the audit HTML (generated) |
| `data/yoga.js`, `healing.js`, `accommodation.js`, `yoga-school.js`, `reviews.js` | Page content, verbatim from the audit |
| `data/images.json` | Image manifest (generated) |
| `scripts/` | Image pipeline and event extractor |

**Updating events:** add or edit an entry in `data/events.js`. Upcoming / past status, the Events menu, the home page "Upcoming" list and booking buttons all follow from `sessions` automatically. Pages regenerate hourly, and booking buttons also re-check the time in the visitor's browser, so a ticket is never offered after an event starts.

**Announcement:** edit `announcement` in `data/site.js`. It disappears automatically at `until` (Bali time); set `until: null` to switch it off.

## Route plan as implemented

| Treatment | Routes |
|---|---|
| Rebuilt (main) | `/`, `/yoga/`, `/sauna-detox/`, `/healing/`, `/private-healing/`, `/healing-spa/`, `/acupuncture/`, `/accommodation/`, `/accommodation/king-bungalow/`, `/accommodation/loft-bungalow/`, `/events/`, `/host-your-retreat/` |
| Rebuilt (utility) | `/healing-appointment/`, `/healing-spa-appointment/`, `/acupuncture-appointment/`, `/host-your-retreat-thank-you/` (noindex), `/private-healing-waiver-agreement/` |
| Rebuilt from verified data | `/contact/` (replaces the theme demo page) |
| Rebuilt, not in navigation | `/yoga-school/` (launch awaits owner confirmation) |
| Event detail, data-driven | 43 event URLs at their original top-level paths: 3 currently bookable (Full Moon Ceremony on 26 Oct 2026, the weekly Canang Sari and Basket Weaving workshops) and 40 shown as past events, including Shamanic Breathwork (20 Oct 2026) |
| 308 redirects | `/in-house-retreat/` → `/accommodation/`; `/yoga-open-house/` → `/events/`; `/craniosacral-therapy-training-register/` → `/craniosacral-therapy-training/`; `/yoga-healing-retreat-registration/` → `/yoga-healing-retreat/`; `/blog/`, `/portfolios/`, `/portfolio/*` → `/` |
| 307 (temporary) redirect | `/trainings/` → `/yoga-school/` (temporary while the YTT launch is unconfirmed) |
| Not implemented (404) | `/feed/`, theme template query URLs, probes |

## Decisions to confirm with the owner

Each is also recorded next to the data it affects.

1. **Yoga School launch** (08 D4/G2). `/yoga-school/` is built but not linked from navigation. Trainers are "To be announced". The original inline enrolment form posted to an unverified Spanda webhook that it shares with the retreat form; the rebuild uses email applications to trainings@lumeriayoga.com instead. Confirm the launch and the enrolment method.
2. **Prices withheld from booking tables:**
   - Yoga Local/KITAS yoga-only drop-in: IDR 120,000 in the table vs 100K in a mobile note (C2). Shown as "Ask at reception".
   - Yoga Local/KITAS Yoga + Sauna: price consistent (IDR 350,000), but desktop and mobile link different Momence services (C3). No purchase link shown.
   - Sauna Local/KITAS drop-in printed as both "IDR 250,00" and "IDR 250,000" (C1). Shown as "Ask at reception".
3. **Google reviews:** the nine reviews from the hidden Trustindex widget are shown verbatim on the home page, attributed by name, without stars or dates. Permission to reproduce them is still needed (G11). The live Reputation Hub widget was not used (direct fetch returned HTTP 400).
4. **Hidden offerings not published:** 11 hidden private-healing treatments (C10), acupuncture packages (C11), 7 former teachers, and the in-house retreat nightly rates (C9).
5. **Event data issues:** see `issues` in `data/events.js`. Main ones: invalid "23rd Monday 2026" date (B1, archive shows the events-listing date 23 March 2026 with a note); payment links reused between events (B2, none of those links are used); Elli's mismatched Instagram link (B9, omitted); the three unlisted 2026 events are included in the archive.
6. **Airbnb:** buttons go to the host profile (the only URL on the site). Listing URLs per bungalow are needed.
7. **Spanda forms:** the appointment and retreat embeds render on localhost (checked visually, nothing submitted). Confirm domain allow-listing for the production domain and which form system is live (G1). The embeds' waiver link points to `https://lumeriayoga.com/waiver`, which is not one of the audited routes; the page is at `/private-healing-waiver-agreement/`.
8. **Newsletter:** the GoHighLevel form opens from a "Subscribe" button in the footer instead of sitting inline on pages. Its iframe is only loaded on request, because privacy tools often block the form's domain and left an empty block. The form's own styling (font, gold button) is inside a third-party iframe and cannot be changed from the site.
9. **Not carried over (needs a decision to add):** GA4 `G-2HD4B8946B` and the Facebook domain verification meta (G-confirm), the Instagram feed (needs a token), the footer Google Map (replaced with a maps link), the SpandaDigital footer credit, studio opening hours (never published).
10. **Hero video:** not used. The 37 MB `lumeria-website-banner.mp4` would need re-encoding (no ffmpeg in this environment); the home page uses a still from the shoot instead.
11. **Image notes:** the AI-generated New Moon image and two stock photos (B14) are not used; the hotel-style `imgBungalow1–3` images are not used. Bungalow galleries use only the photos that were downloaded in Phase 1 (most gallery originals were not downloaded).
