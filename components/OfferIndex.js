'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { MOTION_OK, gsap } from '@/lib/gsap';
import { ArrowRight } from './icons';
import styles from './OfferIndex.module.css';

// The six ways into Lumeria, as an index. On wide screens the photo beside the
// list follows the hovered or focused row; every row also carries its own
// thumbnail, so nothing depends on hover. Images arrive pre-rendered as <img>
// elements from the server (children of `images`, one per item).
export default function OfferIndex({ items, images, thumbs }) {
  const [active, setActive] = useState(0);
  const stageRef = useRef(null);

  // Stop any running cross-fade if the component unmounts mid-animation.
  useEffect(() => {
    const stage = stageRef.current;
    return () => gsap.killTweensOf(stage.querySelectorAll('[data-layer]'));
  }, []);

  const show = (i) => {
    if (i === active) return;
    const layers = stageRef.current.querySelectorAll('[data-layer]');
    const reduce = !window.matchMedia(MOTION_OK).matches;
    gsap.killTweensOf(layers);
    layers.forEach((el, n) => {
      if (n === i) {
        gsap.fromTo(el, { autoAlpha: reduce ? 1 : 0, scale: reduce ? 1 : 1.04 }, { autoAlpha: 1, scale: 1, duration: reduce ? 0 : 0.7, ease: 'power2.out', zIndex: 2 });
      } else {
        gsap.to(el, { autoAlpha: 0, duration: reduce ? 0 : 0.5, zIndex: 1 });
      }
    });
    setActive(i);
  };

  return (
    <div className={styles.wrap}>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li key={item.href} className={styles.row} data-active={i === active || undefined}>
            <Link href={item.href} className={styles.link} onMouseEnter={() => show(i)} onFocus={() => show(i)}>
              <span className={styles.thumb} aria-hidden="true">
                {thumbs[i]}
              </span>
              <span className={styles.text}>
                <span className={styles.name}>{item.label}</span>
                <span className={styles.desc}>{item.description}</span>
              </span>
              <ArrowRight className={styles.arrow} />
            </Link>
          </li>
        ))}
      </ul>
      <div className={`${styles.stage} arch`} ref={stageRef} aria-hidden="true">
        {images.map((img, i) => (
          <div key={i} data-layer className={styles.layer} style={i === 0 ? { zIndex: 2 } : { opacity: 0, visibility: 'hidden' }}>
            {img}
          </div>
        ))}
      </div>
    </div>
  );
}
