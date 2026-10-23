'use client';

import { useState } from 'react';
import useClientNow from '@/lib/useClientNow';
import { Close } from './icons';
import styles from './Announcement.module.css';

// Rendered on the server only while `until` is in the future. An inline script in
// the root layout marks dismissed notices on <html> before first paint, and this
// component re-checks the expiry in the browser in case the page was cached.
export default function Announcement({ id, text, until }) {
  const [dismissed, setDismissed] = useState(false);
  const now = useClientNow();

  if (dismissed || (now && now >= Date.parse(until))) return null;

  return (
    <div className={styles.bar} data-announcement={id} role="region" aria-label="Announcement">
      <div className={`container ${styles.inner}`}>
        <p>{text}</p>
        <button
          type="button"
          className={styles.close}
          onClick={() => {
            try {
              localStorage.setItem(`dismissed:${id}`, '1');
            } catch {}
            setDismissed(true);
          }}
        >
          <Close width={18} height={18} />
          <span className="visually-hidden">Dismiss announcement</span>
        </button>
      </div>
    </div>
  );
}
