'use client';

import { useEffect, useRef, useState } from 'react';
import { site } from '@/data/site';
import styles from './Embeds.module.css';

// Momence host schedule widget (host 32556), configured as on the original
// /yoga/ page. It runs inside its own frame: the widget is a module script, which
// only executes once per document, so a fresh frame document lets it render every
// time the page is shown, including after client-side navigation. The frame is
// same-origin (srcdoc), so it is sized to its content from here.
//
// The widget's own text is set in Jost so the site keeps to its two typefaces.
const srcDoc = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<base target="_blank">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap">
<style>
:root{--momenceColorBackground:#fffdf9;--momenceColorPrimary:92,104,71;--momenceColorBlack:3,1,13}
html,body{margin:0;background:#fffdf9;color:#3f4236}
body,body *{font-family:Jost,system-ui,sans-serif!important}
.momence-session-teacher,.momence-session_filters{display:none!important}
.momence-host_schedule-session_list{max-height:560px;overflow-y:auto;overflow-x:hidden}
</style></head><body>
<div id="ribbon-schedule"></div>
<script async type="module" host_id="${site.momence.hostId}" teacher_ids="[]" location_ids="[]" tag_ids="[]" default_filter="show-all" src="https://momence.com/plugin/host-schedule/host-schedule.js"></script>
</body></html>`;

export default function MomenceSchedule() {
  const frameRef = useRef(null);
  const [state, setState] = useState('loading');
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const frame = frameRef.current;
    let resize = null;
    let mutations = null;
    let timer = null;

    const watch = () => {
      const doc = frame.contentDocument;
      if (resize || !doc?.body) return;
      // The widget mounts next to its script tag, not inside #ribbon-schedule.
      const rendered = () =>
        [...doc.body.children].some((el) => el.tagName !== 'SCRIPT' && el.id !== 'ribbon-schedule') ||
        doc.getElementById('ribbon-schedule')?.childElementCount > 0;
      const measure = () => {
        if (!rendered()) return;
        setHeight(doc.documentElement.scrollHeight);
        setState('ready');
      };
      resize = new ResizeObserver(measure);
      resize.observe(doc.body);
      mutations = new MutationObserver(measure);
      mutations.observe(doc.body, { childList: true, subtree: true });
      timer = setTimeout(() => setState((s) => (s === 'loading' ? 'failed' : s)), 15000);
    };

    frame.addEventListener('load', watch);
    if (frame.contentDocument?.readyState === 'complete') watch();
    return () => {
      frame.removeEventListener('load', watch);
      resize?.disconnect();
      mutations?.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={styles.momence} data-state={state}>
      <iframe
        ref={frameRef}
        srcDoc={srcDoc}
        title="Live class timetable (Momence)"
        className={styles.momenceFrame}
        style={state === 'ready' ? { height } : undefined}
      />
      {state === 'loading' && (
        <p className={styles.momenceNote} role="status">
          Loading the live timetable…
        </p>
      )}
      {state === 'failed' && (
        <p className={styles.momenceNote} role="status">
          The live timetable could not be loaded. Please message us on{' '}
          <a href={site.whatsapp.url} rel="noopener" target="_blank">
            WhatsApp {site.whatsapp.display}
          </a>{' '}
          or ask at reception for the day’s classes.
        </p>
      )}
    </div>
  );
}
