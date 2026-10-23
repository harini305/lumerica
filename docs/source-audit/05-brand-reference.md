# 05 — Brand Reference (original lumeriayoga.com)

Audit date: 2026-10-21. Source: live HTML/CSS of lumeriayoga.com (WordPress, Hub theme by Liquid Themes, Elementor Pro 3.34 / Elementor 4.3.4, Elementor Kit #54321), the downloaded brand SVGs, and computed styles measured in headless Chrome at 1440 / 768 / 390 px.

Labels used: **Verified** = read directly from CSS/SVG or measured computed style. **Estimate** = inferred visually from screenshots.

---

## 1. Typography

### 1.1 Font families in use

| Family | Source | Role on original site | Status |
|---|---|---|---|
| **Marcellus** (serif display, single weight 400) | Google Fonts (`fonts.googleapis.com/css?family=Marcellus:100…900`) | Elementor global *Primary* and *Accent* typography → all headings h1–h5, card titles, some hero titles | Verified |
| **Jost** (geometric sans) | Google Fonts (`family=Jost:100…900`) | Elementor global *Secondary* and *Text* → body copy, nav, buttons, footer, forms | Verified |
| lqd-essentials | Theme icon font (`/themes/hub/assets/vendors/liquid-icon/…woff2`) | Icons (arrows, scroll-down, menu) | Verified — icon font, not text |
| Font Awesome 4.7 / 5.15 brands | Elementor bundle | Social icons | Verified — icon font |
| Tahoma, Roboto, Menlo | Plugin/WP default CSS (Momence widget, code blocks) | Incidental, not brand | Verified incidental |
| Custom widget forms (Spanda embed) | Inherit page fonts | Booking/enquiry forms | Observed |

No font files are self-hosted; there are **no font files in the project workspace** (it was empty at the start of the audit).

**Note:** the Elementor Kit sets Marcellus to `font-weight: 300` and a custom CSS rule sets `h3 { font-weight: lighter }`. Marcellus ships in a single 400 weight, so the browser renders it at 400. The "light" setting has no visual effect.

### 1.2 Typography scale (computed, Verified)

| Element | Desktop 1440 | Tablet 768 | Mobile 390 | Font / weight / line-height / colour |
|---|---|---|---|---|
| Home hero H1 | 80px | 80px (wraps to 6 lines, 451px wide) | 36.66px | Marcellus 400, lh 1.0, #FFFFFF over a 50% black video overlay |
| Inner page hero H1 (e.g. /yoga/) | 52px | 52px | 52px (wraps) | Marcellus, lh 1.0, #FFFFFF |
| Hero sub-heading H2 (/yoga/) | 16px | 16px | 16px | Marcellus 400, #FFFFFF |
| Section H2 (global) | 40px | 40px | 40px (not reduced on mobile) | Marcellus, lh 1.2, #5C6847 |
| H3 (custom CSS) | 28px | 28px | 28px | Marcellus "lighter", lh 1.2, #5C6847 |
| Card titles (H3 in home "What we offer" grid) | 17px | 17px | 17px | Marcellus, #FFFFFF over image |
| H6 | 18px / 600 | — | — | lh 1.2, #5C6847 |
| Body paragraph | 16px | 16px | 16px | Jost 400, lh 27.2px (1.7), #606060 |
| Main nav links | 13px, UPPERCASE, letter-spacing 2px | (mobile menu) | mobile menu ≈16px uppercase (Estimate) | Jost 400, #606060 |
| Buttons | 15px | 15px | 15px | Jost 400, square corners (radius 0) |
| Footer text | 16px, lh 27.2px | 16px | 16px | Jost, #F9F2E8 on #5C6847 (Verified from footer CSS) |
| Small tag labels ("VISION & MISSION", "WHAT WE OFFER") | SVG image, ≈12px uppercase text (Estimate) | — | — | Cream text on #E2AD7D pill (SVG) |

Frequency of font-size declarations in the inline CSS (all pages): 16px (1183), 17px (566), 13px (223), 18px (158), 12px (119), 28px (105), 40px (94). This confirms 16–17px body copy and 40px section headings as the dominant scale.

Observed problems: section H2s keep 40px on a 390px screen (long headings wrap to 4 lines). Several "headings" are really `<p>` elements styled large (teacher names, prices, eyebrow labels on /yoga-school/). Most event pages have no H1 at all; their titles are H2s.

### 1.3 Mandatory Phase 2 typography rule (recorded requirement)

The original uses **two text families (Marcellus + Jost)** plus icon fonts. Incidental plugin fonts must not carry over.

> **Phase 2 rule:** The redesigned site must use **exactly two font families** across every route and component: one for headings, one for body, navigation, buttons, forms, cards and footer. No third family is allowed for decorative headings, special sections or the footer. Hierarchy comes from size, weight, line-height and letter-spacing only. Both fonts must be readable, professional and not overly decorative.

The final pairing is **not selected in this audit**. Options to evaluate in Phase 2:

| Option | Heading | Body/UI | Notes |
|---|---|---|---|
| A — keep brand continuity | Marcellus | Jost | Matches original identity exactly. Marcellus has only one weight, so heading hierarchy must rely on size. Both are free on Google Fonts and work with `next/font`. |
| B — continuity with a more flexible heading face | A multi-weight serif with a similar classical, calm feel (e.g. Cormorant Garamond, Lora, Fraunces) | Jost | Gains heading weights and italics. Must check legibility at small sizes. |
| C — keep body, refine heading | Marcellus | A humanist sans with wider weights (e.g. Inter, DM Sans) | Only if Jost tests poorly at small sizes in forms and tables. |

Recommendation for Phase 2 to confirm: Option A is the lowest-risk way to stay recognisably "Lumeria". The decision is deferred to Phase 2.

---

## 2. Colour

### 2.1 Brand palette (Verified, Elementor Kit #54321 global colours)

| Token (original) | HEX | Usage observed | Confidence |
|---|---|---|---|
| `--e-global-color-primary` | **#5C6847** | Olive / moss green. All headings, logo (SVG fill), footer background, button fills on ticket widget (`rgb(92,104,71)`), Momence widget primary, booking-form accent (`data-accent="#5c6647"`, a typo variant) | Verified, most-used colour (1,415 occurrences) |
| `--e-global-color-secondary` | **#EAC86A** | Warm gold. Back-to-top button, header/footer accents, popup headings | Verified |
| `--e-global-color-text` | **#606060** | Body text, nav links | Verified |
| `--e-global-color-accent` | **#F9F2E8** | Cream. Section backgrounds, footer text, footer logo fill | Verified |
| `--e-global-color-afd27aa` | **#EFE5D8** | Sand/beige. Alternate section background ("What we offer", form panels) | Verified |
| `--e-global-color-1129d95` | **#FCFCFC** | Off-white | Verified |
| Tag/eyebrow pill | **#E2AD7D** | Terracotta/peach pill behind "VISION & MISSION", "WHAT WE OFFER" (SVG images) | Verified (SVG fill) |
| Sage | **#AEBEA1** | Secondary green tint (144 occurrences, dividers/backgrounds) | Verified in CSS; exact role is an Estimate |
| Booking-form background | **#EDE5D8** | Spanda embed forms (`data-bg`) | Verified |
| Link colour | **#171717** | Kit default link colour | Verified |
| Hero overlay | #000000 at 50% | Home hero video overlay | Verified |
| Divider grey | #70707059 (≈35% #707070) | Borders/dividers | Verified |

### 2.2 Incidental colours (do not treat as brand)

- The WordPress block-editor default palette (#ABB8C3, #F78DA7, #CF2E2E, #FF6900, #FCB900, #7BDCB5, #00D084, #8ED1FC, #0693E3, #9B51E0, gradients) appears 80× because it is in every page's global styles. It is never used in content.
- Theme defaults: `--color-gradient-start #007fff / stop #ff4d54`, page-transition #FFBC7D, notice bar #3D9CD2 / #D63939, #32373C (WP button default), #D8DBE2 (theme form border).
- Instagram Feed, Trustindex and Momence widget colours.

### 2.3 Colour pairings observed

- Headings #5C6847 on cream #F9F2E8 or sand #EFE5D8 backgrounds.
- Footer: cream #F9F2E8 text and logo on olive #5C6847. Gold #EAC86A back-to-top circle.
- Hero: white text on dark-overlaid video or photography.
- Popup: gold/amber text on white card (Estimate from screenshot).
- Contrast note: #606060 body text on #F9F2E8 is about 5.6:1, which passes AA. #EAC86A text on white fails AA (≈1.6:1); the popup uses gold text on white.

---

## 3. Logo and brand marks

| Asset | Description | Local copy |
|---|---|---|
| `imgLogo.svg` (248×146) | Primary logo: sunburst/rising-sun rays over the "LUMERIA" wordmark, olive #5C6847. Used in the header (desktop and mobile). | `assets/brand/imgLogo.svg` |
| `imgLogo-Color.svg` (131×91) | Colour variant, olive | `assets/brand/imgLogo-Color.svg` |
| `1.-imgLogo-Footer.svg` (122×86) | Cream #F9F2E8 version for the dark footer | `assets/brand/1.-imgLogo-Footer.svg` |
| `imgLogofooter.png` (495×292) | Raster footer logo (alternate footer layout) | `assets/brand/imgLogofooter.png` |
| `Lumeria-logo-creme.png` (907×536) | Cream raster logo; the schema.org Organization logo | `assets/brand/Lumeria-logo-creme.png` |
| `Lumeria-yoga-logo.png` (247×146) | Raster logo used in the announcement popup and /yoga-school/ | `assets/brand/Lumeria-yoga-logo.png` |
| `Favicon.svg` (144×144) | Favicon/app icon, olive on cream | `assets/brand/Favicon.svg` |
| `3.-imgLogo-Background.png`, `imgLogo-Background-No-Crop.png` | Large faint sunburst watermark used as a section background | `assets/brand/` |
| `neve-yoga-logo-2.png`, `cropped-neve-yoga-logo.png`, `logo-dark.svg`, `logo-light.svg`, `logo-11.svg` | **Theme demo logos, not Lumeria.** Do not use. | not downloaded |

Tagline: **"Space to Shine"** (WordPress site tagline, OG site name "Lumeria – Space to Shine"). Secondary phrase on /yoga-school/: **"Be The Light."**

---

## 4. Other visual identity elements

| Element | Original treatment | Evidence |
|---|---|---|
| Shape language | Square-cornered buttons and images (border-radius 0 on buttons). Rounded 25px corners on a few form/panel containers. Circular icon badges (eye, lotus) above section tags. | Computed style; CSS radius counts |
| Shadows | Essentially none (`box-shadow: 0 0 0 0`). Flat design. | CSS |
| Photography | Real on-site photography: lush tropical garden, wooden "lumbung" bungalows, Buddha statue, yoga shala, sauna, ceremonies. Warm, natural light. Several professional shoots (`Lumeria-Maria-_-Abz-*`, `Lumeria-Soft-Opening-*`). | Asset manifest |
| Image treatment | Full-bleed hero photography and video with a dark overlay. Grid cards with a dark bottom gradient and white title. Event cards use poster-style flyers (text baked into images). | Screenshots |
| Icons | Thin line icons in olive inside circles (eye = vision, lotus/rainbow = offer). lqd-essentials icon font. | Screenshot, SVGs |
| Decorative motifs | Sunburst rays (from the logo), used as a large faint watermark. White line-art pattern `bg-3.svg` behind the offer grid. | SVG assets |
| Motion | GSAP + ScrollTrigger + SplitText: headings split into lines and animate in (rotationX 45° to 0°, opacity, power4.out). Elementor fadeIn/fadeInUp entrance animations. Hero background video autoplays and loops, muted. | Theme scripts, `data-ca-options` |
| Tone | Calm, spiritual, nature-led, warm and inclusive ("truth and love as our north star", "A space to shine"). | Content |

**Brand essence to preserve in Phase 2:** olive green, cream and sand earth palette with gold as a sparing accent. The sunburst logo. A classical serif for headings with a clean sans for body text. Real, warm garden and shala photography. A calm, generous, unhurried feel.

**Not to carry over:** cluttered duplicate card grids, poster images with baked-in text as the main event information, gold text on white, inconsistent heading sizes, and theme demo leftovers.
