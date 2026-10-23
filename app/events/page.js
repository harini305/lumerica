import Link from 'next/link';
import EventRows from '@/components/EventRows';
import PageHero from '@/components/PageHero';
import { site } from '@/data/site';
import { formatShort } from '@/lib/dates';
import { groupEvents } from '@/lib/events';
import styles from './events.module.css';

export const metadata = {
  title: 'Events',
  description:
    'Ceremonies, workshops, sound healing and weekly Balinese cultural workshops at Lumeria in Ubud, Bali, plus an archive of past events.',
  alternates: { canonical: '/events/' },
};

function yearOf(e) {
  return (e.sessions?.[0].start || e.sortDate).slice(0, 4);
}

export default function EventsPage() {
  const { upcoming, recurring, past } = groupEvents();
  const years = [...new Set(past.map(yearOf))];

  return (
    <>
      <PageHero
        title="Events at Lumeria"
        image="lumeria-maria-abz-01392"
        imageAlt="Guests sitting in meditation in the bamboo shala"
        position="50% 55%"
      >
        <p>Invoke wonder, magic, curiosity and play into everyday life with our special events, curated to excite all your senses and pleasures.</p>
      </PageHero>

      <nav className={`container ${styles.jump}`} aria-label="On this page">
        <ul>
          <li>
            <a href="#upcoming-events">Upcoming</a>
          </li>
          <li>
            <a href="#weekly-events">Weekly</a>
          </li>
          <li>
            <a href="#past-events">Past events</a>
          </li>
        </ul>
      </nav>

      <section id="upcoming-events" className="section-tight container" aria-labelledby="upcoming-heading">
        <h2 id="upcoming-heading" className={styles.heading}>
          Upcoming Events
        </h2>
        {upcoming.length > 0 ? (
          <EventRows events={upcoming} />
        ) : (
          <p className={styles.empty}>
            No dated events are scheduled at the moment. New events are announced on{' '}
            <a href={site.socials[0].url} rel="noopener" target="_blank">
              Instagram {site.socials[0].handle}
            </a>{' '}
            and in the newsletter (subscribe at the bottom of this page).
          </p>
        )}
      </section>

      <section id="weekly-events" className="section-tight container" aria-labelledby="weekly-heading">
        <h2 id="weekly-heading" className={styles.heading}>
          Weekly Events
        </h2>
        <EventRows events={recurring} />
      </section>

      <section id="past-events" className="section bg-white" aria-labelledby="past-heading">
        <div className="container">
          <h2 id="past-heading" className={styles.heading}>
            Past Events
          </h2>
          <div className={styles.archive}>
            {years.map((y) => (
              <section key={y} className={styles.year} aria-labelledby={`year-${y}`}>
                <h3 id={`year-${y}`}>{y}</h3>
                <ul>
                  {past
                    .filter((e) => yearOf(e) === y)
                    .map((e) => (
                      <li key={e.slug}>
                        <span className={styles.date}>{e.sessions ? formatShort(e.sessions[0].start) : 'Sundays'}</span>
                        <Link href={`/${e.slug}/`} className={styles.title}>
                          {e.title}
                        </Link>
                        {e.facilitators?.length > 0 && <span className={styles.who}>{e.facilitators.join(' & ')}</span>}
                      </li>
                    ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
