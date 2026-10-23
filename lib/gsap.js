'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const MOTION_OK = '(prefers-reduced-motion: no-preference)';

// Late-loading images and fonts move trigger positions; recalculate once settled.
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => ScrollTrigger.refresh());
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  // Lets QA scripts count live triggers in development builds.
  if (process.env.NODE_ENV === 'development') window.__ScrollTrigger = ScrollTrigger;
}

export { gsap, ScrollTrigger, useGSAP };
