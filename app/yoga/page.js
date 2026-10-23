import MomenceSchedule from '@/components/embeds/MomenceSchedule';
import Img from '@/components/Img';
import PageHero from '@/components/PageHero';
import Parallax from '@/components/Parallax';
import PriceCell from '@/components/PriceCell';
import Reveal from '@/components/Reveal';
import { classes, policies, promise, rates, rateTerms, teachers, timetableIntro } from '@/data/yoga';
import styles from './yoga.module.css';

export const metadata = {
  title: 'Yoga Classes in Ubud, Bali',
  description:
    'Drop-in and package yoga classes at Lumeria in central Ubud: Hatha, Vinyasa, Yin, Inside Flow, sound healing and more, taught in English. Timetable, rates and teachers.',
  alternates: { canonical: '/yoga/' },
};

const sections = [
  { id: 'timetable', label: 'Timetable' },
  { id: 'classes', label: 'Classes' },
  { id: 'class-rates', label: 'Rates' },
  { id: 'teachers', label: 'Teachers' },
];

export default function YogaPage() {
  return (
    <>
      <PageHero
        title="Lumeria Yoga"
        subtitle="Yoga classes in the heart of Ubud, Bali"
        image="lumeria-soft-opening-01875"
        imageAlt="A full class practising in Lumeria’s bamboo yoga shala"
        position="50% 60%"
      >
        <p>Lumeria Yoga has a very simple mission: to become self-illuminated and shine light on truth and love through the sacred practices of yoga.</p>
      </PageHero>

      <nav className={`container ${styles.jump}`} aria-label="On this page">
        <ul>
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <section className={`section-tight container ${styles.promise}`} aria-labelledby="promise-heading">
        <h2 id="promise-heading">Our promise is to:</h2>
        <ul>
          {promise.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>

      <section id="timetable" className={`section bg-sand ${styles.timetable}`} aria-labelledby="timetable-heading">
        <span id="class-booking" aria-hidden="true" />
        <div className="container">
          <div className={styles.timetableHead}>
            <h2 id="timetable-heading">Class Timetable</h2>
            <p>{timetableIntro}</p>
          </div>
          <div className={styles.timetableBody}>
            <div className={styles.board}>
              <MomenceSchedule />
            </div>
            <aside className={styles.rulesAside} aria-labelledby="rules-heading">
              <h3 id="rules-heading" className={styles.rulesHeading}>
                Important to note
              </h3>
              <dl className={styles.rules}>
                {policies.map((p) => (
                  <div key={p.title}>
                    <dt>{p.title}</dt>
                    <dd>{p.text}</dd>
                  </div>
                ))}
              </dl>
              <p className={styles.passes}>
                Coming more than once? <a href="#class-rates">See class packs and unlimited passes</a>.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <figure className={styles.quote}>
        <Parallax className={styles.quoteMedia}>
          <Img src="lumeria-soft-opening-03231" alt="" sizes="100vw" className="cover" />
        </Parallax>
        <blockquote className="container">
          <p>“Yoga takes you into the present moment. The only place where life exists”</p>
        </blockquote>
      </figure>

      <section id="classes" className="section" aria-labelledby="classes-heading">
        <div className="container">
          <div className={styles.head}>
            <h2 id="classes-heading">Class Description</h2>
            <p>Open a class to read its description.</p>
          </div>
          <ul className={styles.classes}>
            {classes.map((c) => (
              <li key={c.name}>
                {c.text ? (
                  <details className={styles.class}>
                    <summary>
                      <h3>{c.name}</h3>
                      <span className={styles.plus} aria-hidden="true" />
                    </summary>
                    <p>{c.text}</p>
                  </details>
                ) : (
                  <div className={styles.class}>
                    <h3>{c.name}</h3>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="class-rates" className="section bg-white" aria-labelledby="rates-heading">
        <div className="container">
          <div className={styles.head}>
            <h2 id="rates-heading">Class Rates</h2>
            <p>To book a class pass or a package, choose a price below or inquire at the reception on site.</p>
          </div>
          <table className={styles.rates}>
            <caption className="visually-hidden">Yoga class rates in Indonesian rupiah</caption>
            <thead>
              <tr>
                <th scope="col">Classes</th>
                <th scope="col">Yoga only</th>
                <th scope="col">Yoga + Sauna Detox</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((r) => (
                <tr key={r.name}>
                  <th scope="row">{r.name}</th>
                  <td data-label="Yoga only">
                    <PriceCell {...r.yoga} />
                  </td>
                  <td data-label="Yoga + Sauna Detox">
                    <PriceCell {...r.combo} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={`small ${styles.terms}`}>
            <strong>Terms &amp; Conditions:</strong> {rateTerms}
          </p>
        </div>
      </section>

      <section id="teachers" className="section" aria-labelledby="teachers-heading">
        <div className="container">
          <div className={styles.head}>
            <h2 id="teachers-heading">Meet Your Teachers</h2>
          </div>
          <Reveal as="ul" className={styles.teachers}>
            {teachers.map((t) => (
              <li key={t.name} className={styles.teacher}>
                <div className={styles.portrait}>
                  <Img src={t.image} alt={`Portrait of ${t.name}`} sizes="(min-width: 1100px) 18rem, (min-width: 600px) 45vw, 92vw" className="cover" position="50% 25%" />
                </div>
                <h3>{t.name}</h3>
                <p className={styles.styles}>
                  {t.origin && <>{t.origin} · </>}
                  {t.styles}
                </p>
                <details className={styles.bio}>
                  <summary>Read {t.name.split(' ')[0]}’s bio</summary>
                  {t.bio.map((p) => (
                    <p key={p.slice(0, 20)}>{p}</p>
                  ))}
                </details>
              </li>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
