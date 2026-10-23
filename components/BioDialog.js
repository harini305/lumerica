'use client';

import { useId, useRef } from 'react';
import { Close } from './icons';
import styles from './BioDialog.module.css';

// Facilitator bio in a native modal <dialog>: focus is trapped and restored by
// the browser, Escape closes it, and clicking the backdrop closes it too.
export default function BioDialog({ label, bio }) {
  const ref = useRef(null);
  const titleId = useId();
  return (
    <>
      <button type="button" className={styles.trigger} onClick={() => ref.current.showModal()}>
        {label}
      </button>
      <dialog
        ref={ref}
        className={styles.dialog}
        aria-labelledby={titleId}
        onClick={(e) => {
          if (e.target === ref.current) ref.current.close();
        }}
      >
        <div className={styles.inner}>
          <button type="button" className={styles.close} onClick={() => ref.current.close()}>
            <Close />
            <span className="visually-hidden">Close</span>
          </button>
          <h2 id={titleId}>{bio.title}</h2>
          <p className={styles.role}>{bio.role}</p>
          {bio.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </dialog>
    </>
  );
}
