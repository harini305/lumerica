'use client';

import Script from 'next/script';
import { useId, useRef, useState } from 'react';
import { site } from '@/data/site';
import { Close } from '../icons';
import styles from './NewsletterDialog.module.css';

// GoHighLevel "Subscribe to Updates" form (oEINkNSpITBlUUMhkDNC), opened on
// request in a modal dialog. The third-party iframe and its script are only
// loaded once someone opens it, and the email fallback is always shown because
// privacy tools commonly block the form's domain.
export default function NewsletterDialog() {
  const ref = useRef(null);
  const titleId = useId();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <button
        type="button"
        className="btn btn-light"
        onClick={() => {
          setOpened(true);
          ref.current.showModal();
        }}
      >
        Subscribe
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
          <h2 id={titleId}>Subscribe to updates</h2>
          <p className="small">Enter your details below to receive the latest updates from Lumeria!</p>
          {opened && (
            <>
              <iframe
                src={site.newsletterForm}
                id="inline-oEINkNSpITBlUUMhkDNC"
                title="Subscribe to updates from Lumeria"
                className={styles.frame}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-activation-type="alwaysActivated"
                data-deactivation-type="neverDeactivate"
                data-form-name="Subscribe to Updates"
                data-height="360"
                data-layout-iframe-id="inline-oEINkNSpITBlUUMhkDNC"
                data-form-id="oEINkNSpITBlUUMhkDNC"
              />
              <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
            </>
          )}
          <p className={styles.fallback}>
            Form not showing? Email <a href={`mailto:${site.email}?subject=${encodeURIComponent('Please add me to the Lumeria updates')}`}>{site.email}</a> and
            we’ll add you.
          </p>
        </div>
      </dialog>
    </>
  );
}
