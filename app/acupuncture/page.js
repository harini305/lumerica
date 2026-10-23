import Link from 'next/link';
import Img from '@/components/Img';
import PageHero from '@/components/PageHero';
import TreatmentMenu from '@/components/TreatmentMenu';
import { acupunctureMenu } from '@/data/healing';
import styles from '../healing.module.css';

export const metadata = {
  title: 'Acupuncture',
  description:
    'Acupuncture, cosmetic acupuncture with gua sha, auricular acupuncture and fire cupping at Lumeria in Ubud, Bali.',
  alternates: { canonical: '/acupuncture/' },
};

export default function AcupuncturePage() {
  return (
    <>
      <PageHero
        title="Acupuncture"
        image="acupuncture"
        imageAlt="Fine acupuncture needles placed along a guest’s back"
        position="50% 45%"
        actions={
          <Link href="/acupuncture-appointment/" className="btn">
            Make an acupuncture appointment
          </Link>
        }
      />

      <section className="section-tight container">
        <div className={styles.menuLayout}>
          <TreatmentMenu menu={acupunctureMenu} showGroups={false} />
          <aside className={styles.menuAside} aria-label="Booking">
            <div className={`${styles.menuPhoto} arch`}>
              <Img src="acupuncture-appointment" alt="Glass cups on a guest’s back during a cupping treatment" sizes="(min-width: 900px) 26rem, 1px" className="cover" />
            </div>
            <p className="small">Prices in Indonesian rupiah (K = thousand).</p>
            <Link href="/acupuncture-appointment/" className="btn">
              Make an appointment
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
