'use client';

import Link from 'next/link';
import useClientNow from '@/lib/useClientNow';
import { External } from './icons';
import styles from './EventDetail.module.css';

// Payment buttons for a current event. The server decides whether booking is
// open when the page is rendered; the browser re-checks `closesAt` so a cached
// page never offers tickets once the event has started.
export default function EventBooking({ booking, closesAt, notes = [] }) {
  const now = useClientNow();

  if (closesAt && now && now >= Date.parse(closesAt)) {
    return (
      <p className={styles.closed}>
        Booking for this event has closed. <Link href="/events/">See upcoming events</Link>.
      </p>
    );
  }

  return (
    <div className={styles.booking}>
      {booking.map((b, i) => (
        <a key={b.url} href={b.url} className={`btn ${i > 0 ? 'btn-ghost' : ''}`} rel="noopener" target="_blank">
          Book: {b.label} <External />
          <span className="visually-hidden">(secure payment page by Airwallex, opens in a new tab)</span>
        </a>
      ))}
      <p className={styles.payNote}>Tickets are paid on a secure Airwallex payment page.</p>
      {notes.map((n) => (
        <p key={n} className={styles.payNote}>
          {n}
        </p>
      ))}
    </div>
  );
}
