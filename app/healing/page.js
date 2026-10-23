import Link from 'next/link';
import { ArrowRight } from '@/components/icons';
import Img from '@/components/Img';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import styles from '../healing.module.css';

export const metadata = {
  title: 'Holistic Healing in Ubud',
  description:
    'Private healing sessions, a healing spa and acupuncture at Lumeria in Ubud, Bali: personalised care for the body, mind and spirit in a safe, supportive setting.',
  alternates: { canonical: '/healing/' },
};

const paths = [
  {
    title: 'Private Healing',
    href: '/private-healing/',
    image: 'avrilnathaniell-00206-1',
    text: 'Confidential 1:1 sessions with our resident healers: sound meditation, Reiki, biomagnetic therapy, astrology and tarot.',
  },
  {
    title: 'Healing Spa',
    href: '/healing-spa/',
    image: 'dsc07532',
    text: 'Balinese, deep tissue, shiatsu and four-hands massage, facials and treatment packages.',
  },
  {
    title: 'Acupuncture',
    href: '/acupuncture/',
    image: 'avl01675-1-1',
    text: 'Acupuncture, cosmetic acupuncture with gua sha, auricular acupuncture and fire cupping.',
  },
];

export default function HealingPage() {
  return (
    <>
      <PageHero
        variant="split"
        title="Holistic Healing for the Mind, Body, and Spirit"
        image="lumeria-maria-abz-01360"
        imageAlt="A healer working with a guest lying on a mat in the Lumeria garden"
      >
        <p>
          Experience the transformative power of our holistic healing approach, designed to nurture your well-being across physical,
          emotional, and mental levels. In a safe and supportive environment, our expert practitioners provide personalized care
          through a range of tailored services.
        </p>
        <p>
          Whether you seek the deeply restorative focus of Private Healings, the rejuvenating touch of our Healing Spa, or the
          balance and harmony offered by Acupuncture, each experience is crafted to guide you on a journey of renewal and inner peace.
        </p>
      </PageHero>

      <section className="section-tight" aria-label="Healing services">
        <Reveal as="ul" className={`container ${styles.paths}`}>
          {paths.map((p) => (
            <li key={p.href} className={styles.path}>
              <div className={`${styles.pathMedia} arch`}>
                <Img src={p.image} alt="" sizes="(min-width: 900px) 30vw, 92vw" className="cover" />
              </div>
              <h2>
                <Link href={p.href} className={styles.pathLink}>
                  {p.title}
                </Link>
              </h2>
              <p>{p.text}</p>
              <span className={styles.pathMore} aria-hidden="true">
                View treatments and prices <ArrowRight width={16} height={16} />
              </span>
            </li>
          ))}
        </Reveal>
      </section>
    </>
  );
}
