import { site } from '@/data/site';
import { events } from '@/data/events';

const pages = [
  '/',
  '/yoga/',
  '/sauna-detox/',
  '/healing/',
  '/private-healing/',
  '/healing-spa/',
  '/acupuncture/',
  '/accommodation/',
  '/accommodation/king-bungalow/',
  '/accommodation/loft-bungalow/',
  '/events/',
  '/host-your-retreat/',
  '/contact/',
  '/yoga-school/',
  '/healing-appointment/',
  '/healing-spa-appointment/',
  '/acupuncture-appointment/',
  '/private-healing-waiver-agreement/',
];

export default function sitemap() {
  return [...pages, ...events.map((e) => `/${e.slug}/`)].map((p) => ({ url: `${site.url}${p}` }));
}
