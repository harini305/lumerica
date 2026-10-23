# 01 — Audit Report: lumeriayoga.com (Phase 1)

**Audit date:** 2026-10-21 · **Scope:** research only. No code, redesign, configuration change, package install in the project, push or deploy.

## 1. Overview

Lumeria is a yoga, healing and wellness sanctuary with eco-bungalow accommodation in central Ubud, Bali (Jl. Raya Pengosekan, 80571), opened in September 2023 and branded "Space to Shine".

The website is a WordPress site built with the Hub theme and Elementor Pro by SpandaDigital. It is an information and booking hub: almost every transaction is handed to external systems.

| System | Used for |
|---|---|
| Momence | Class schedule, class passes, sauna |
| Airwallex | Event tickets |
| Airbnb | Bungalows |
| Spanda Digital Hub | Appointment, retreat and YTT forms |
| GoHighLevel | Newsletter, reviews, legacy forms |

**Main offers:**
- Drop-in and package yoga classes (18 styles, 8 teachers)
- Sauna / steam / cold-plunge "Detox"
- Private healing (5 treatments)
- Healing spa (15 treatments and packages)
- Acupuncture (4 treatments)
- King and Loft bungalows
- A busy events programme (ceremonies, workshops, weekly cultural workshops)
- Host-your-retreat applications
- An unlinked, apparently upcoming 200-hr Yoga Teacher Training 2027 page

## 2. Methods and evidence

| Method | Result |
|---|---|
| robots.txt and AIOSEO sitemap index (6 sub-sitemaps) | 75 URLs |
| Crawl of all sitemap URLs plus internal-link discovery plus probes | 81 URLs fetched; raw HTML in `raw/html/` |
| WordPress REST API (`/wp-json/wp/v2/pages`, `/posts`, `/media`) | 66 published pages, 0 posts, 768 of 817 media items with dimensions and file sizes (`raw/api/`) |
| Structured extraction (BeautifulSoup) of each page's Elementor sections in DOM order, with device-visibility flags | `raw/extract/*.json`, `content/*.md` |
| CSS analysis (Elementor Kit globals, theme dynamic CSS, colour, font and size frequencies) and SVG colour extraction | 05-brand-reference |
| Headless Chrome (local Chrome + puppeteer-core in the session scratchpad): 22 routes × 1440/768/390, computed styles, overflow, sticky header, mobile menu | `screenshots/`, 07-responsive |
| Status check of all 251 unique outbound/internal links in visible content | `raw/link-check.json` (all 200) |
| Download of in-use original assets (web-size ≤2048px) | `assets/` (238 files, 88 MB) |

## 3. Coverage

| Category | Detail |
|---|---|
| Fully inspected | All 75 sitemap routes, `/blog/`, `/trainings/` redirect, 404 template, header/footer templates, popup |
| Rendered and screenshotted | 22 key routes at 3 viewports, plus the mobile menu open state (67 images) |
| Partially inspected | Client-side widgets: Momence timetable, Spanda/GHL forms, Reputation Hub reviews (HTTP 400 on direct fetch), Instagram feed. Their configuration was captured, not their live inner content. |
| Inaccessible | WP drafts and private content (no admin access); 49 media items not returned by the API |
| Broken or problematic routes | `/trainings/` → empty portfolio; `/portfolio/*`, `/portfolios/` (empty theme items); `/blog/` (no posts); `/contact/` (theme demo content) |
| Not verified | Form submissions, Airwallex/Momence/Airbnb transactions (deliberately not triggered), hover states, animation timing |

## 4. Key findings

1. **The contact page is fake.** `/contact/` contains theme demo text ("Neve Yoga Studio", lorem copy). Real contact data exists only in the footer. The footer phone icon uses the placeholder `tel:+628123456789`.
2. **Hidden content is pervasive.** Elementor sections hidden on all devices include 11 of 16 healing treatments, 7 former teachers, duplicate card grids, past training banners and hidden form widgets. Treat it as inactive unless the client says otherwise.
3. **Event data is manual and error-prone.** Dates are hard-coded into menu labels. "Upcoming" holds a past event. Dated events sit under "Weekly". There is a duplicate card, an invalid date ("23rd Monday 2026"), payment links reused across events, a wrong Instagram link for a facilitator, and three recent event pages not listed at all.
4. **Pricing inconsistencies** on Yoga (KITAS discount 100K vs 120K; desktop and mobile tables link different products) and Sauna ("IDR 250,00"). Price notation is mixed (K / mil / M / . / , / USD).
5. **Brand is clear and consistent.** Olive #5C6847, gold #EAC86A, cream #F9F2E8, sand #EFE5D8, text #606060. Marcellus headings with Jost body. Sunburst logo. Warm real photography.
6. **Performance.** Hero video is 37 MB and plays on mobile. A 57 MB training video. 59 in-use images over 1 MB (originals up to 4240×2832). A Google Map iframe in every footer. 58px horizontal overflow at 1440px on all pages.
7. **SEO.** 58 of 73 routes have no H1. Meta descriptions are mostly auto-generated and too long. Schema is generic (no LocalBusiness/Event). There are duplicate titles and many re-dated copies of event pages.
8. **New YTT 2027 landing page** (`/yoga-school/`, updated 2026-09-28) is complete but unlinked, and its trainer team is "To Be Announced". The launch is a client decision.
9. **Two parallel form systems.** Visible Spanda embeds versus hidden GoHighLevel forms on the appointment and retreat pages. Which one is authoritative needs confirmation.
10. **No blog content.** No e-commerce, accounts or translation exist.

## 5. Document map

| File | Contents |
|---|---|
| [02-page-inventory.md](02-page-inventory.md) / [02a-route-inventory.csv](02a-route-inventory.csv) | All routes, classification, section-by-section inventory, event data table, shared components |
| [03-content-inventory.md](03-content-inventory.md) + [content/](content/) | Business facts, core copy, offers and prices map, reviews, FAQs, duplicates; verbatim text of every page |
| [04-assets-manifest.csv](04-assets-manifest.csv) + [assets/](assets/) | 776 assets: usage per page/section, dimensions, size, alt, flags, local path |
| [05-brand-reference.md](05-brand-reference.md) | Typography, colour, logo, visual language, two-font rule |
| [06-functionality-and-dependencies.md](06-functionality-and-dependencies.md) | 37 features and integrations with verification level |
| [07-responsive-observations.md](07-responsive-observations.md) + [screenshots/](screenshots/) | Viewport behaviour, measurements |
| [08-issues-gaps-questions.md](08-issues-gaps-questions.md) | Placeholders, data errors, price conflicts, SEO and tech issues, coverage gaps, client questions |
| [09-phase-2-recommendations.md](09-phase-2-recommendations.md) | Mandatory design rules, IA proposal, integrations, data model, QA targets |

## 6. Fact vs estimate convention

Values read from HTML, CSS, API or computed styles are **Verified**. Values judged from screenshots are labelled **Estimate**. Anything not testable is **Unverified** or **Unknown**. No content, reviews, prices or claims were invented.

## 7. Confirmation

- No redesign or implementation was started. No project configuration was created or changed. Nothing was installed in the project: puppeteer-core was installed only in the temporary session scratchpad, outside the workspace.
- No original or third-party files were modified or deleted. Downloads are copies in `docs/source-audit/assets/`.
- No GitHub push and no Vercel deployment.
- Phase 2 will not begin until the user explicitly approves.
