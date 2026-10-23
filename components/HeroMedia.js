'use client';

import { useRef } from 'react';
import { MOTION_OK, gsap, useGSAP } from '@/lib/gsap';

// Wraps a hero image. On load the image settles from a slight zoom; on larger
// screens it then drifts gently with scroll. Transform only, so the image is
// never hidden and layout never shifts.
export default function HeroMedia({ children, className, parallax = true }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const img = ref.current.querySelector('img');
        if (!img) return;
        gsap.fromTo(img, { scale: 1.08 }, { scale: 1, duration: 1.8, ease: 'power2.out' });
      });
      if (parallax) {
        mm.add(`${MOTION_OK} and (min-width: 900px)`, () => {
          gsap.to(ref.current.querySelector('img'), {
            yPercent: 6,
            ease: 'none',
            scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
          });
        });
      }
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
