import Link from 'next/link';
import Img from '@/components/Img';
import PageHero from '@/components/PageHero';
import TreatmentMenu from '@/components/TreatmentMenu';
import { spaMenu } from '@/data/healing';
import styles from '../healing.module.css';

export const metadata = {
  title: 'Healing Spa',
  description:
    'Balinese healing, deep tissue, aromatherapy, shiatsu and four-hands massage, facials and spa packages at Lumeria in Ubud, Bali. Prices from 400K IDR.',
  alternates: { canonical: '/healing-spa/' },
};

export default function HealingSpaPage() {
  return (
    <>
      <PageHero
        title="Healing Spa"
        subtitle="Selflove Begins with Selfcare"
        image="dsc07532"
        imageAlt="A guest receiving a head massage on a treatment table"
        position="50% 40%"
        actions={
          <Link href="/healing-spa-appointment/" className="btn">
            Make a spa appointment
          </Link>
        }
      />

      <section className="section-tight container">
        <div className={styles.menuLayout}>
          <TreatmentMenu menu={spaMenu} />
          <aside className={styles.menuAside} aria-label="Booking">
            <div className={`${styles.menuPhoto} arch`}>
              <Img src="dsc07600" alt="A therapist massaging a guest’s neck and shoulders" sizes="(min-width: 900px) 26rem, 1px" className="cover" />
            </div>
            <p className="small">Prices in Indonesian rupiah (K = thousand). Book any treatment through the spa appointment form.</p>
            <Link href="/healing-spa-appointment/" className="btn">
              Make a spa appointment
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
