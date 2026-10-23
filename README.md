# Lumeria Yoga — website

Frontend rebuild of [lumeriayoga.com](https://lumeriayoga.com): a yoga, healing, sauna and eco-bungalow sanctuary in Ubud, Bali.

Next.js 16 (App Router, JavaScript), CSS Modules, GSAP + ScrollTrigger. Bookings, payments and forms stay with the existing services (Momence, Airwallex, Airbnb, Spanda Digital Hub, GoHighLevel); the site has no backend of its own.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Content

Page content lives in `data/` (verbatim from the Phase 1 audit). Events are edited in `data/events.js`; upcoming/past status, menus and booking buttons follow from the dates automatically. The sitewide announcement is in `data/site.js`.

Images are pre-sized WebP files in `public/images/` (`images.unoptimized` is set, so the Next.js/Vercel image optimiser is not used). See `docs/phase-2-implementation.md` for the route plan, image pipeline and the decisions still waiting for owner confirmation.
