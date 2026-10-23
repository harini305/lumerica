'use client';

import { ArrowUp } from './icons';
import styles from './Footer.module.css';

export default function BackToTop() {
  return (
    <button
      type="button"
      className={styles.top}
      onClick={() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
        document.getElementById('main')?.focus({ preventScroll: true });
      }}
    >
      <span className={styles.topLabel}>Back to top</span> <ArrowUp width={16} height={16} />
    </button>
  );
}
