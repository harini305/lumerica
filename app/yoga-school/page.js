import Img from '@/components/Img';
import { Mail } from '@/components/icons';
import PageHero from '@/components/PageHero';
import Parallax from '@/components/Parallax';
import Reveal from '@/components/Reveal';
import { site } from '@/data/site';
import {
  audiences,
  beyondTheDay,
  curriculum,
  dates,
  faq,
  gains,
  included,
  keyAreas,
  overview,
  packages,
  pillars,
  policy,
  pricingNotes,
  reasons,
  schedule,
  typicalDay,
} from '@/data/yoga-school';
import styles from './school.module.css';

export const metadata = {
  title: '200 Hours Yoga Teacher Training in Bali 2027',
  description:
    'Lumeria Yoga School’s 21-day, 200-hour Hatha/Vinyasa teacher training in Ubud, Bali (RYS 200, Yoga Alliance). 2027 dates, curriculum, packages from IDR 41,400,000 and FAQ.',
  alternates: { canonical: '/yoga-school/' },
};

const applyHref = (date) =>
  `mailto:${site.trainingsEmail}?subject=${encodeURIComponent(`200hr YTT application – ${date || '2027 dates'}`)}&body=${encodeURIComponent(
    'First name:\nLast name:\nWhatsApp number:\nPreferred training dates:\nHow did you find out about this training?\n',
  )}`;

const jump = [
  ['dates', 'Dates'],
  ['overview', 'Program'],
  ['schedule', 'Schedule'],
  ['curriculum', 'Curriculum'],
  ['packages', 'Pricing'],
  ['faq', 'FAQ'],
  ['enroll', 'Apply'],
];

export default function YogaSchoolPage() {
  return (
    <>
      <PageHero
        variant="split"
        title="200 Hours Lumeria Yoga Teacher Training in Bali"
        subtitle="Be The Light."
        image="lumeria-soft-opening-02371-2"
        imageAlt="A teacher in white with hands at heart centre among tropical leaves"
        position="50% 30%"
        actions={
          <>
            <a href="#enroll" className="btn">
              Apply now
            </a>
            <a href="#dates" className="btn btn-ghost">
              View 2027 dates
            </a>
          </>
        }
      >
        <div className={styles.badgeLine}>
          <Img src="yoga-alliance-rys-200" alt="Yoga Alliance Registered Yoga School RYS 200" sizes="4rem" className={styles.badge} />
          <p>Lumeria Yoga School · Yoga Alliance Certification</p>
        </div>
      </PageHero>

      <nav className={`container ${styles.jump}`} aria-label="On this page">
        <ul>
          {jump.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="section-tight container" aria-labelledby="pillars-heading">
        <h2 id="pillars-heading" className={styles.center}>
          The Three Pillars of Lumeria Yoga School
        </h2>
        <Reveal as="ul" className={styles.pillars}>
          {pillars.map((p) => (
            <li key={p.name}>
              <div className={`${styles.pillarMedia} arch`}>
                <Img src={p.image} alt="" sizes="(min-width: 900px) 28vw, 92vw" className="cover" />
              </div>
              <h3>{p.name}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </Reveal>
      </section>

      <section id="dates" className="section bg-olive on-dark" aria-labelledby="dates-heading">
        <div className={`container ${styles.dates}`}>
          <div>
            <h2 id="dates-heading">2027 Enrollment is Open</h2>
            <p className={styles.earlyBird}>
              Early-Bird pricing from <strong>IDR 41,400,000</strong> (approx. USD $2,300) until 60 days before each training starts.
            </p>
            <a href="#packages" className="text-link">
              Compare packages
            </a>
          </div>
          <ul className={styles.dateList}>
            {dates.map((d) => (
              <li key={d}>
                <span className={styles.dateText}>{d}</span>
                <span className={styles.dateMeta}>21 Days · 200 Hours · Ubud, Bali</span>
                <a href={applyHref(d)} className={styles.dateApply}>
                  Apply<span className="visually-hidden"> for {d}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="overview" className="section container" aria-labelledby="overview-heading">
        <h2 id="overview-heading">Program Overview</h2>
        <div className={styles.overview}>
          {overview.map((o) => (
            <div key={o.title}>
              <h3>{o.title}</h3>
              {o.text.map((t) => (
                <p key={t.slice(0, 20)}>{t}</p>
              ))}
              {o.list && (
                <ul>
                  {o.list.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="schedule" className="section bg-sand" aria-labelledby="day-heading">
        <div className="container">
          <h2 id="day-heading">What A Typical Day Would Be</h2>
          <ol className={styles.day}>
            {typicalDay.map((d) => (
              <li key={d.title}>
                <span className={styles.when}>{d.when}</span>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </li>
            ))}
          </ol>
          <div className={styles.dayGrid}>
            <div>
              <h3 className={styles.subHeading}>Sample Schedule</h3>
              <p className="small">We train 6 days a week with 1 day off. A more detailed schedule will be shared upon training commencement.</p>
              <dl className={styles.schedule}>
                {schedule.map(([t, what]) => (
                  <div key={t}>
                    <dt>{t}</dt>
                    <dd>{what}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className={styles.beyond}>
              {beyondTheDay.map((b) => (
                <div key={b.title}>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <figure className={styles.quote}>
        <Parallax className={styles.quoteMedia}>
          <Img src="bali-rice-field" alt="" sizes="100vw" className="cover" />
        </Parallax>
        <blockquote className="container">
          <p>“Yoga is a light, which, once lit, will never dim. The better your practice, the brighter the flame.”</p>
          <footer>B.K.S. Iyengar</footer>
        </blockquote>
      </figure>

      <section className="section container" aria-labelledby="who-heading">
        <div className={styles.split}>
          <div>
            <h2 id="who-heading">A Training For Every Seeker of Light</h2>
            <p className={styles.kicker}>Who this program is designed for</p>
          </div>
          <dl className={styles.audiences}>
            {audiences.map((a) => (
              <div key={a.title}>
                <dt>{a.title}</dt>
                <dd>{a.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="why-heading">
        <div className="container">
          <h2 id="why-heading">Why Choose Our Program</h2>
          <Reveal as="ul" className={styles.reasons} stagger={0.05}>
            {reasons.map((r) => (
              <li key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section container" aria-labelledby="gain-heading">
        <div className={styles.split}>
          <div className={styles.gainIntro}>
            <h2 id="gain-heading">What You’ll Gain From This Experiential Training</h2>
            <div className={`${styles.gainMedia} arch`}>
              <Img src="lumeria-maria-abz-01521-1" alt="" sizes="(min-width: 900px) 30vw, 1px" className="cover" />
            </div>
          </div>
          <ul className={styles.gains}>
            {gains.map((g) => (
              <li key={g.title}>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-tight bg-sand" aria-labelledby="areas-heading">
        <div className="container">
          <h2 id="areas-heading">Key Areas of Learning &amp; Practice</h2>
          <ul className={styles.areas}>
            {keyAreas.map((k) => (
              <li key={k.title}>
                <h3>{k.title}</h3>
                <p>{k.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="curriculum" className="section container" aria-labelledby="curriculum-heading">
        <div className={styles.split}>
          <div>
            <h2 id="curriculum-heading">The Curriculum</h2>
            <p>Here is an overview of our main topics; a more in-depth curriculum will be shared upon training commencement.</p>
          </div>
          <div className={styles.accordion}>
            {curriculum.map((c) => (
              <details key={c.title}>
                <summary>
                  {c.title} <span aria-hidden="true" className={styles.count}>{c.items.length} topics</span>
                </summary>
                <ul>
                  {c.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight container" aria-labelledby="team-heading">
        <div className={styles.team}>
          <h2 id="team-heading">The Training Team</h2>
          <p>
            Trainers will vary per cohort; special guest trainers, kirtan singers and international facilitators will be added to support the
            overall experience and training.
          </p>
          <p className={styles.tba}>Lead trainers and trainers: to be announced.</p>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="included-heading">
        <div className="container">
          <h2 id="included-heading">What’s Included In The Program</h2>
          <Reveal as="ul" className={styles.included} stagger={0.05}>
            {included.map((i) => (
              <li key={i.title}>
                <div className={styles.includedMedia}>
                  <Img src={i.image} alt="" sizes="(min-width: 900px) 18rem, 45vw" className="cover" />
                </div>
                <h3>{i.title}</h3>
                <p>{i.text}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="packages" className="section container" aria-labelledby="packages-heading">
        <h2 id="packages-heading">Choose Your Package</h2>
        <ul className={styles.notes}>
          {pricingNotes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <ul className={styles.packages}>
          {packages.map((p) => (
            <li key={p.name} className={styles.package}>
              <h3>{p.name}</h3>
              <p className={styles.priceLabel}>Early-Bird</p>
              <p className={styles.price}>{p.early}</p>
              <p className={styles.usd}>{p.earlyUsd}</p>
              <p className={styles.regular}>
                Regular: {p.regular} <span>({p.regularUsd})</span>
              </p>
              <ul>
                {p.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <a href={applyHref()} className="btn btn-ghost">
                Apply<span className="visually-hidden"> for the {p.name}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="small">No payment is taken on this website. Submit your enrollment application and we’ll email you booking details and a secure payment link.</p>
      </section>

      <section id="faq" className="section bg-sand" aria-labelledby="faq-heading">
        <div className={`container ${styles.split}`}>
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <div className={styles.accordion}>
            {faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                {f.a.map((a) => (
                  <p key={a.slice(0, 20)}>{a}</p>
                ))}
                {f.list && (
                  <ul>
                    {f.list.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                )}
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="enroll" className="section container" aria-labelledby="enroll-heading">
        <div className={styles.split}>
          <div className={styles.enroll}>
            <h2 id="enroll-heading">Apply for the 2027 Training</h2>
            <p>
              Send your application to <a href={`mailto:${site.trainingsEmail}`}>{site.trainingsEmail}</a> with your name, WhatsApp number,
              preferred dates and how you found out about the training. No payment is needed today — once we receive your application,
              we’ll email you booking details and a secure payment link.
            </p>
            <ul className={styles.applyList}>
              {dates.map((d) => (
                <li key={d}>
                  <a href={applyHref(d)} className="text-link">
                    <Mail width={16} height={16} /> Apply for {d}
                  </a>
                </li>
              ))}
            </ul>
            <p className="small">By applying you accept the Training Participation Policy.</p>
          </div>
          <div>
            <h3 className={styles.subHeading}>Training Participation Policy</h3>
            <dl className={styles.policy}>
              {policy.map((p) => (
                <div key={p.title}>
                  <dt>{p.title}</dt>
                  <dd>{p.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
