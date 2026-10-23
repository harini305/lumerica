import Link from 'next/link';
import { dateParts } from '@/lib/dates';
import { dateLabel } from '@/lib/events';
import { ArrowRight } from './icons';
import Img from './Img';
import styles from './EventRows.module.css';

// Upcoming and weekly events as editorial rows: date block, photo, details.
export default function EventRows({ events, headingLevel = 3 }) {
  const H = `h${headingLevel}`;
  return (
    <ul className={styles.rows}>
      {events.map((e) => {
        const d = e.sessions ? dateParts(e.sessions[0].start) : null;
        return (
          <li key={e.slug} className={styles.row}>
            <div className={styles.when} aria-hidden="true">
              {d ? (
                <>
                  <span className={styles.day}>{d.day}</span>
                  <span className={styles.month}>
                    {d.month} {d.year}
                  </span>
                </>
              ) : (
                <span className={styles.weekly}>{e.recurring.label}</span>
              )}
            </div>
            <div className={styles.media}>
              <Img src={e.image} alt="" sizes="(min-width: 900px) 22rem, 92vw" className="cover" />
            </div>
            <div className={styles.body}>
              <H className={styles.title}>
                <Link href={`/${e.slug}/`} className={styles.link}>
                  {e.title}
                </Link>
              </H>
              {e.subtitle && !e.recurring && <p className={styles.sub}>{e.subtitle}</p>}
              <p className={styles.meta}>
                {dateLabel(e)}
                {e.time && <> · {e.time}</>}
              </p>
              {e.summary && <p className={styles.summary}>{e.summary}</p>}
              <span className={styles.more} aria-hidden="true">
                Details and booking <ArrowRight width={16} height={16} />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
