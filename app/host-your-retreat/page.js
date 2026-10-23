import SpandaForm from '@/components/embeds/SpandaForm';
import Img from '@/components/Img';
import PageHero from '@/components/PageHero';
import styles from './retreat.module.css';

export const metadata = {
  title: 'Host Your Retreat',
  description:
    'Apply to host your own retreat at Lumeria in Ubud, Bali, and take the first step towards hosting your dream retreat in our garden sanctuary.',
  alternates: { canonical: '/host-your-retreat/' },
};

export default function HostRetreatPage() {
  return (
    <>
      <PageHero
        variant="split"
        title="Host Your Own Retreat at Lumeria"
        image="lumeria-maria-abz-01521-1"
        imageAlt="A guest in a seated twist in the arched bamboo shala"
        position="45% 50%"
        actions={
          <a href="#apply" className="btn">
            Apply to host a retreat
          </a>
        }
      >
        <p>
          Make your dream a reality! Take the first step towards hosting your dream retreat in Bali and immerse yourself in the beauty and
          tranquility that Lumeria has to offer.
        </p>
      </PageHero>

      <section id="apply" className="section bg-sand" aria-labelledby="apply-heading">
        <div className={`container ${styles.grid}`}>
          <div className={styles.text}>
            <h2 id="apply-heading">Apply to Host Your Own Retreat at Lumeria</h2>
            <p>
              We believe in the power of retreats to create lasting change and inspire personal growth. Take the first step towards hosting
              your dream retreat and immerse yourself in the beauty and tranquility that Lumeria has to offer.
            </p>
            <div className={styles.photos} aria-hidden="true">
              <Img src="lumeria-soft-opening-02563" alt="" sizes="16rem" className="cover" />
              <Img src="lumeria-maria-abz-01392" alt="" sizes="16rem" className="cover" />
            </div>
          </div>
          <div className={styles.form}>
            <SpandaForm
              embedId="7e7f7bab00038f07fbf173f20d428ac6"
              form="retreat"
              title="Apply to Host Your Own Retreat at Lumeria"
              button="Submit My Application"
            />
          </div>
        </div>
      </section>
    </>
  );
}
