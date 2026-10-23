import Link from 'next/link';
import BioDialog from '@/components/BioDialog';
import Img from '@/components/Img';
import PageHero from '@/components/PageHero';
import { ericBio, privateTreatments } from '@/data/healing';
import styles from '../healing.module.css';

export const metadata = {
  title: 'Private Healing Treatments',
  description:
    'Private 1:1 healing sessions at Lumeria, Ubud: Amerta sound meditation, Reiki, biomagnetic therapy, astrology birth chart and tarot readings with our resident healers.',
  alternates: { canonical: '/private-healing/' },
};

export default function PrivateHealingPage() {
  return (
    <>
      <PageHero
        title="Private Healing Treatments"
        image="lumeria-maria-abz-01624"
        imageAlt="Guests resting on cushions in a quiet garden corner at Lumeria"
        position="50% 55%"
        actions={
          <Link href="/healing-appointment/" className="btn">
            Make an appointment
          </Link>
        }
      >
        <p>
          Experience deep healing at Lumeria’s healing sanctuary. Heal yourself on all levels physically, emotionally, mentally and
          spiritually with expert-led treatments by our specialized team in a safe, private and serene environment, restoring your inner
          balance and harmony.
        </p>
      </PageHero>

      <section className="section-tight container" aria-label="About private sessions">
        <div className={styles.introCols}>
          <p>
            Lumeria’s Private Healing Services offer a holistic approach to health &amp; wellness. We offer safe, supportive,
            confidential and private sessions facilitated by our Resident Healers who are professionally trained and highly experienced
            with various healing modalities, supporting deep healing on the physical, emotional and mental levels.
          </p>
          <p>
            Choose below from our list of healing treatments offered exclusively at Lumeria. Our private sessions are designed for 1:1
            treatments only. Special requests for Private Couples treatments may be considered with additional fees applied.
          </p>
        </div>
      </section>

      <section className="section-tight container" aria-label="Treatments">
        <ul className={styles.treatments}>
          {privateTreatments.map((t) => {
            const bio = t.bio === 'eric' ? ericBio : t.bio;
            return (
              <li key={t.name} className={styles.treatment}>
                <div className={styles.treatmentMedia}>
                  <Img src={t.image} alt={`${t.facilitator}, ${t.name}`} sizes="(min-width: 900px) 24rem, 92vw" className="cover" position="50% 30%" />
                </div>
                <div className={styles.treatmentBody}>
                  <h2>{t.name}</h2>
                  <p className={styles.with}>with {t.facilitator}</p>
                  <p>{t.text}</p>
                  {t.note && <p className="small">{t.note}</p>}
                </div>
                <div className={styles.treatmentAside}>
                  <p className={styles.price}>{t.price}</p>
                  <BioDialog label="Read facilitator’s bio" bio={bio} />
                  <Link href="/healing-appointment/" className="btn btn-ghost">
                    Reserve<span className="visually-hidden"> {t.name}</span>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="section-tight bg-olive on-dark">
        <div className={`container ${styles.cta}`}>
          <h2>Ready to book a private session?</h2>
          <Link href="/healing-appointment/" className="btn">
            Make an appointment now
          </Link>
        </div>
      </section>
    </>
  );
}
