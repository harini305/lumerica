'use client';

import { useRef } from 'react';
import { MOTION_OK, gsap, useGSAP } from '@/lib/gsap';

// Slow vertical drift of an image inside its clipped frame (desktop only).
export default function Parallax({ children, className, amount = 8 }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(`${MOTION_OK} and (min-width: 900px)`, () => {
        const img = ref.current.querySelector('img');
        gsap.fromTo(
          img,
          { yPercent: -amount / 2, scale: 1 + amount / 100 },
          { yPercent: amount / 2, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true } },
        );
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
