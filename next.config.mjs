/** @type {import('next').NextConfig} */
const nextConfig = {
  // Images are pre-sized by scripts/process-images.mjs, so the Next.js / Vercel
  // image optimisation endpoint is never needed.
  images: { unoptimized: true },

  // The original WordPress URLs all end in a slash; keep them identical.
  trailingSlash: true,

  // Pre-sized images and logos change rarely: let browsers keep them for a week
  // (and reuse a stale copy for a day while revalidating) instead of re-checking
  // on every visit.
  async headers() {
    const cache = [{ key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' }];
    return [
      { source: '/images/:path*', headers: cache },
      { source: '/:logo(logo|logo-cream).svg', headers: cache },
    ];
  },

  // Route decisions from docs/source-audit/02a-route-inventory.csv and
  // 09-phase-2-recommendations.md §2.
  async redirects() {
    return [
      // Legacy "Coming Soon" offer page, consolidated into Accommodation.
      { source: '/in-house-retreat/', destination: '/accommodation/', permanent: true },
      // Past 2023 open house: legacy, not rebuilt.
      { source: '/yoga-open-house/', destination: '/events/', permanent: true },
      // Registration and payment pages for trainings/retreats that have ended.
      { source: '/craniosacral-therapy-training-register/', destination: '/craniosacral-therapy-training/', permanent: true },
      { source: '/yoga-healing-retreat-registration/', destination: '/yoga-healing-retreat/', permanent: true },
      // Empty theme leftovers.
      { source: '/blog/', destination: '/', permanent: true },
      { source: '/portfolios/', destination: '/', permanent: true },
      { source: '/portfolio/:path*', destination: '/', permanent: true },
      // /trainings/ was an empty page. It points at the 2027 teacher training while
      // the launch of /yoga-school/ awaits owner confirmation, so the redirect is
      // temporary and can be repointed without browsers caching it.
      { source: '/trainings/', destination: '/yoga-school/', permanent: false },
    ];
  },
};

export default nextConfig;
