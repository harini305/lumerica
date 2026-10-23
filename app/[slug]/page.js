import Link from 'next/link';
import { notFound } from 'next/navigation';
import { largestSrc } from '@/lib/images';
import EventBooking from '@/components/EventBooking';
import Img from '@/components/Img';
import PageHero from '@/components/PageHero';
import { bookingClosesAt, dateLabel, eventStatus, events, getEvent, getEventContent } from '@/lib/events';
import { bookingNotes, buildEventBody } from '@/lib/eventBody';
import styles from '@/components/EventDetail.module.css';

// Event pages keep their original top-level URLs (e.g. /agni-ceremony/).
// Any other top-level slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const e = getEvent(slug);
  if (!e) return {};
  const past = eventStatus(e) === 'past';
  const description = `${past ? 'Past event: ' : ''}${e.title}${e.subtitle?.startsWith('with') ? ` ${e.subtitle}` : ''}, ${dateLabel(e)}, at Lumeria in Ubud, Bali.${e.summary ? ` ${e.summary}` : ''}`;
  return {
    title: e.title,
    description: description.length > 160 ? `${description.slice(0, 157).replace(/\s+\S*$/, '')}…` : description,
    alternates: { canonical: `/${slug}/` },
    openGraph: { images: [{ url: largestSrc(e.image) }] },
  };
}

const DISCLAIMER = /^Disclaimer:/i;

function Block({ b }) {
  switch (b.t) {
    case 'h': {
      const H = `h${b.level}`;
      return <H>{b.text}</H>;
    }
    case 'p':
      return <p>{b.text}</p>;
    case 'ul':
      return (
        <ul>
          {b.items.map((i) => (
            <li key={i}>{i.replace(/^•\s*/, '')}</li>
          ))}
        </ul>
      );
    case 'img':
      return (
        <figure className={styles.figure}>
          <Img src={b.key} alt={b.alt || ''} sizes="(min-width: 900px) 44rem, 92vw" />
        </figure>
      );
    case 'btn':
      return (
        <p>
          <a href={b.href} rel="noopener" target={b.href.startsWith('mailto:') ? undefined : '_blank'} className="text-link">
            {b.href.includes('instagram.com') ? `Instagram ${b.text}` : b.text}
          </a>
        </p>
      );
    case 'table':
      return (
        <dl className={styles.schedule}>
          {b.rows.map((r) => (
            <div key={r.join('|')}>
              <dt>{r[0]}</dt>
              <dd>{r.slice(1).join(' ')}</dd>
            </div>
          ))}
        </dl>
      );
    case 'faq':
      return (
        <div className={styles.faq}>
          {b.items.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              {f.a.map((a, i) => (a.t === 'ul' ? <ul key={i}>{a.items.map((x) => <li key={x}>{x}</li>)}</ul> : <p key={i}>{a.text}</p>))}
            </details>
          ))}
        </div>
      );
    default:
      return null;
  }
}

export default async function EventPage({ params }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();
  const sections = getEventContent(slug);
  const body = buildEventBody(sections, event);
  const status = eventStatus(event);
  const bookable = status !== 'past' && event.booking?.length > 0;
  const notes = bookingNotes(sections);
  const disclaimer = notes.find((n) => DISCLAIMER.test(n));

  return (
    <article>
      <PageHero title={event.title} subtitle={event.subtitle} image={event.image} imageAlt="" position="50% 40%">
        <p className={styles.heroMeta}>
          {status === 'past' ? <span className={styles.pastTag}>Past event</span> : null}
          {dateLabel(event)}
          {event.time && <> · {event.time}</>}
        </p>
      </PageHero>

      <div className={`container ${styles.layout}`}>
        <div className={`prose ${styles.body}`}>
          {status === 'past' && (
            <p className={styles.pastNotice}>
              This event has already taken place and is no longer available to book. <Link href="/events/">See what’s coming up at Lumeria</Link>.
            </p>
          )}
          {body.map((s, i) => (
            <section key={i} className={styles.section}>
              {s.blocks.map((b, j) => (
                <Block key={j} b={b} />
              ))}
            </section>
          ))}
        </div>

        <aside className={styles.aside} aria-labelledby="details-heading">
          <div className={styles.panel}>
            <h2 id="details-heading">Event details</h2>
            <dl className={styles.facts}>
              {event.facilitators?.length > 0 && (
                <div>
                  <dt>{event.facilitators.length > 1 ? 'Facilitators' : 'Facilitator'}</dt>
                  <dd>{event.facilitators.join(' & ')}</dd>
                </div>
              )}
              <div>
                <dt>Date</dt>
                <dd>
                  {dateLabel(event)}
                  {event.dateNote && <span className={styles.dateNote}>{event.dateNote}</span>}
                </dd>
              </div>
              {event.time && (
                <div>
                  <dt>Time</dt>
                  <dd>{event.time}</dd>
                </div>
              )}
              <div>
                <dt>Location</dt>
                <dd>Lumeria Yoga, Ubud Bali</dd>
              </div>
              {event.prices?.length > 0 && (
                <div>
                  <dt>{status === 'past' ? 'Price at the time' : 'Price'}</dt>
                  <dd>
                    {event.prices.map((p) => (
                      <span key={p} className={styles.priceLine}>
                        {p}
                      </span>
                    ))}
                  </dd>
                </div>
              )}
              {bookable && event.capacity && (
                <div>
                  <dt>Spots</dt>
                  <dd>{event.capacity}</dd>
                </div>
              )}
            </dl>

            {bookable ? (
              <>
                <EventBooking
                  booking={event.booking}
                  closesAt={bookingClosesAt(event)}
                  notes={notes.filter((n) => !DISCLAIMER.test(n) && n !== event.capacity && !/limited|get your tickets/i.test(n))}
                />
                <p className={styles.disclaimer}>{disclaimer || 'All bookings are final. No refunds, credits, or transfers allowed.'}</p>
              </>
            ) : (
              <p className={styles.closed}>
                This event has passed. <Link href="/events/">Browse upcoming events</Link>.
              </p>
            )}
          </div>
        </aside>
      </div>
    </article>
  );
}
