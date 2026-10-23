import Link from 'next/link';
import { site } from '@/data/site';
import { External } from './icons';
import Img from './Img';
import PageHero from './PageHero';
import styles from './BungalowPage.module.css';

function AirbnbButton({ name, className = 'btn' }) {
  return (
    <a href={site.airbnbHost} className={className} rel="noopener" target="_blank">
      Book on Airbnb <External />
      <span className="visually-hidden"> – the {name} (Lumeria’s Airbnb host profile, opens in a new tab)</span>
    </a>
  );
}

export default function BungalowPage({ bungalow: b }) {
  return (
    <>
      <PageHero title={b.name} image="single-bungalow-header" imageAlt={`Inside the ${b.name}, opening onto the garden`} position="50% 55%" actions={<AirbnbButton name={b.name} />}>
        <p>{b.intro}</p>
      </PageHero>

      <div className={`container ${styles.layout}`}>
        <div className={styles.main}>
          <p className="lead">{b.lumbung}</p>

          <section className={styles.block} aria-labelledby="included-heading">
            <h2 id="included-heading">What’s Included with Your {b.name}</h2>
            <ul className={styles.inclusions}>
              {b.inclusions.map((i) => (
                <li key={i.title} className={styles.inclusion}>
                  <div className={styles.inclusionMedia}>
                    <Img src={i.image} alt={i.alt} sizes="(min-width: 900px) 14rem, 40vw" className="cover" />
                  </div>
                  <div>
                    <h3>{i.title}</h3>
                    {i.text && <p className="small">{i.text}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.block} aria-labelledby="room-heading">
            <h2 id="room-heading">{b.room.title}</h2>
            <div className={styles.roomMedia}>
              <Img src={b.room.image} alt={b.room.alt} sizes="(min-width: 900px) 46rem, 92vw" className="cover" />
            </div>
            {b.room.paragraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </section>

          <ul className={styles.gallery} aria-label="More photos">
            {b.gallery.map((g) => (
              <li key={g.image}>
                <Img src={g.image} alt={g.alt} sizes="(min-width: 900px) 15rem, 30vw" className="cover" />
              </li>
            ))}
          </ul>
        </div>

        <aside className={styles.aside} aria-label={`${b.name} details`}>
          <div className={styles.panel}>
            <h2>Amenities include</h2>
            <ul className={styles.amenities}>
              {b.amenities.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <h2>Other information</h2>
            <ul className={styles.other}>
              {b.other.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
            <AirbnbButton name={b.name} className={`btn ${styles.book}`} />
            <p className={styles.hint}>
              Bookings are made through Airbnb. Questions? <Link href="/contact/">Contact us</Link>.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
