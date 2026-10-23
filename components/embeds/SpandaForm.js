'use client';

import { useEffect, useRef, useState } from 'react';
import { site } from '@/data/site';
import styles from './Embeds.module.css';

const EMBED_BASE = 'https://spanda-digital-hub.lovable.app/api/public/embed/';

// Spanda Digital Hub form embed, configured exactly as on the original page
// (data-* attributes on a host element, then the embed script). The script is
// re-attached on each mount so it also renders after client-side navigation.
// If nothing renders, the email / WhatsApp fallback below is the way to enquire.
export default function SpandaForm({ embedId, form, title, sessions, terms, button, waiver = false }) {
  const hostRef = useRef(null);
  const [state, setState] = useState('loading');

  useEffect(() => {
    const host = hostRef.current;
    const script = document.createElement('script');
    script.src = `${EMBED_BASE}${embedId}.js`;
    script.async = true;
    script.onerror = () => setState('failed');
    document.body.appendChild(script);

    const observer = new MutationObserver(() => {
      if (host.childElementCount > 0) setState('ready');
    });
    observer.observe(host, { childList: true, subtree: true });
    const timer = setTimeout(() => setState((s) => (s === 'loading' ? 'failed' : s)), 10000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
      script.remove();
      host.replaceChildren();
    };
  }, [embedId]);

  return (
    <div className={styles.formWrap}>
      <div
        ref={hostRef}
        className={styles.formHost}
        data-hooklog-form=""
        data-form={form}
        data-title={title}
        data-sessions={sessions}
        data-terms={terms}
        data-button={button}
        data-waiver-url={waiver ? 'https://lumeriayoga.com/waiver' : undefined}
        data-waiver-label={waiver ? 'Private Healing Waiver Agreement' : undefined}
        data-accent="#5c6847"
        data-bg="#efe5d8"
        data-fallback-email={site.email}
      />
      {state === 'loading' && <p className={styles.status}>Loading the form…</p>}
      {state === 'failed' && (
        <p className={styles.status} role="status">
          The form could not be loaded here. Please use email or WhatsApp below instead.
        </p>
      )}
      <p className={styles.fallback}>
        Prefer to write to us? Email <a href={`mailto:${site.email}`}>{site.email}</a> or message us on{' '}
        <a href={site.whatsapp.url} rel="noopener" target="_blank">
          WhatsApp {site.whatsapp.display}
        </a>
        .
      </p>
    </div>
  );
}
