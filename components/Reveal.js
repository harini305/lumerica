'use client';

import { useRef } from 'react';
import { MOTION_OK, gsap, useGSAP } from '@/lib/gsap';

// Fades the direct children up once when the block scrolls into view.
// Content is fully visible without JavaScript or with reduced motion; GSAP only
// adds the entrance. Use for blocks below the fold, not for every element.
export default function Reveal({ as: Tag = 'div', children, className, stagger = 0.08, y = 28, ...rest }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const targets = ref.current.children;
        // Anything already above the viewport bottom (e.g. after a jump link) is left alone.
        if (ref.current.getBoundingClientRect().top < window.innerHeight * 0.88) return;
        const tween = gsap.from(targets, {
          autoAlpha: 0,
          y,
          duration: 0.9,
          ease: 'power3.out',
          stagger,
          clearProps: 'transform,opacity,visibility',
          scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
        });
        // Safety net: never leave content hidden if the trigger somehow does not fire.
        const failsafe = setTimeout(() => {
          if (tween.progress() === 0 && ref.current && ref.current.getBoundingClientRect().top < window.innerHeight) tween.progress(1);
        }, 4000);
        return () => clearTimeout(failsafe);
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
