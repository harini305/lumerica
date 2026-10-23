'use client';

import { useRef, useState } from 'react';
import { ArrowRight } from './icons';
import styles from './ReviewStrip.module.css';

// Google reviews as one horizontal, swipeable row. Text is verbatim; reviews
// longer than LONG characters are clamped with a toggle to read them in full.
const LONG = 220;

function Review({ r }) {
  const [open, setOpen] = useState(false);
  const long = r.text.length > LONG;
  return (
    <li className={styles.card}>
      <figure>
        <blockquote lang={r.lang} className={long && !open ? styles.clamped : undefined}>
          <p>{r.text}</p>
        </blockquote>
        {long && (
          <button type="button" className={styles.more} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? 'Show less' : 'Read full review'}
          </button>
        )}
        <figcaption>
          {r.name}
          <span>Google review</span>
        </figcaption>
      </figure>
    </li>
  );
}

export default function ReviewStrip({ reviews, headingId, heading }) {
  const trackRef = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = () => {
    const t = trackRef.current;
    setEdge({ start: t.scrollLeft < 4, end: t.scrollLeft + t.clientWidth >= t.scrollWidth - 4 });
  };

  const step = (dir) => {
    const t = trackRef.current;
    const card = t.querySelector('li');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    t.scrollBy({ left: dir * (card.offsetWidth + 24), behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.controls}>
        {heading}
        <div className={styles.buttons}>
          <button type="button" onClick={() => step(-1)} disabled={edge.start} aria-label="Previous reviews">
            <ArrowRight className={styles.back} />
          </button>
          <button type="button" onClick={() => step(1)} disabled={edge.end} aria-label="Next reviews">
            <ArrowRight />
          </button>
        </div>
      </div>
      <ul ref={trackRef} className={styles.track} onScroll={update} tabIndex={0} aria-labelledby={headingId}>
        {reviews.map((r) => (
          <Review key={r.name} r={r} />
        ))}
      </ul>
    </div>
  );
}
