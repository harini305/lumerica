# Lumeria (lumeriayoga.com) — Source Audit, Phase 1

Research-only audit of the original website, carried out 2026-10-21, to prepare a full frontend rebuild in Next.js (App Router, JavaScript, GSAP/ScrollTrigger). **No implementation has started.**

## Start here

1. [01-audit-report.md](01-audit-report.md): summary, methods, coverage, key findings
2. [08-issues-gaps-questions.md](08-issues-gaps-questions.md): what is wrong or unknown, and the client questions
3. [09-phase-2-recommendations.md](09-phase-2-recommendations.md): mandatory design rules (two fonts, compact footer, image handling, `images: { unoptimized: true }`) and the build plan

## All documents

| # | File | What it is |
|---|---|---|
| 01 | [01-audit-report.md](01-audit-report.md) | Audit summary and coverage |
| 02 | [02-page-inventory.md](02-page-inventory.md) | Page-by-page section inventory and event table |
| 02a | [02a-route-inventory.csv](02a-route-inventory.csv) | 81 routes: status, type, modified date, recommendation |
| 03 | [03-content-inventory.md](03-content-inventory.md) | Content preservation reference |
| 04 | [04-assets-manifest.csv](04-assets-manifest.csv) | 776 assets mapped to pages/sections, with sizes, flags and local paths |
| 05 | [05-brand-reference.md](05-brand-reference.md) | Fonts, colours, logo, visual identity |
| 06 | [06-functionality-and-dependencies.md](06-functionality-and-dependencies.md) | Features, integrations, verification levels |
| 07 | [07-responsive-observations.md](07-responsive-observations.md) | 1440 / 768 / 390 behaviour |
| 08 | [08-issues-gaps-questions.md](08-issues-gaps-questions.md) | Issues, inconsistencies, open questions |
| 09 | [09-phase-2-recommendations.md](09-phase-2-recommendations.md) | Phase 2 requirements and recommendations |

## Evidence folders

| Folder | Contents |
|---|---|
| `content/` | Verbatim text of every route (`<slug>.md`, hidden sections flagged), `_shared-components.md`, `_events-data.json` |
| `assets/` | Original assets in use, downloaded as copies: `images/` (≤2048px WordPress variants), `brand/` (logos, favicon, patterns), `icons-svg/`. Videos were **not** downloaded (37–180 MB); their URLs are in the manifest. |
| `screenshots/` | 67 JPGs, `<page>--<viewport>-<width>.jpg` (desktop 1440, tablet 768, mobile 390; clipped at 15,000px height), `home--mobile-390-menu-open.jpg`, `_measurements.json` (computed styles, overflow, header behaviour) |
| `raw/` | Sitemaps, crawled HTML (`html/`), WP REST API JSON (`api/`), structured extracts (`extract/`), outlines (`outline/`, `condensed/`), `crawl-status.json`, `link-check.json`, `trustindex-reviews.json`, `private-healing-bio-popups.json` (Reputation Hub widget could not be retrieved: HTTP 400) |

## Status

Phase 1 is complete. **Waiting for review and explicit approval before Phase 2.**
