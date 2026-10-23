import Link from 'next/link';
import EventRows from '@/components/EventRows';
import Img from '@/components/Img';
import OfferIndex from '@/components/OfferIndex';
import PageHero from '@/components/PageHero';
import Parallax from '@/components/Parallax';
import ReviewStrip from '@/components/ReviewStrip';
import { reviews } from '@/data/reviews';
import { site } from '@/data/site';
import { groupEvents } from '@/lib/events';
import styles from './home.module.css';

export const metadata = {
  title: { absolute: 'Lumeria – Yoga, Healing & Sauna in Ubud, Bali' },
  description:
    'Yoga classes, sauna detox, private healing, a healing spa and eco-bungalows at Lumeria on Jl. Raya Pengosekan, Ubud. A space to shine.',
  alternates: { canonical: '/' },
};

const offers = [
  { label: 'Yoga', href: '/yoga/', description: 'Yoga classes in the heart of Ubud, Bali', image: 'lumeria-soft-opening-03240-1' },
  { label: 'Sauna & Detox', href: '/sauna-detox/', description: 'Hot sauna, steam room and cold plunge', image: 'lumeria-maria-abz-01687' },
  { label: 'Healing', href: '/healing/', description: 'Private healing, healing spa and acupuncture', image: 'healings-home' },
  { label: 'Accommodation', href: '/accommodation/', description: 'King and Loft bungalows in traditional “lumbung” style', image: 'in-house-retreat' },
  { label: 'Events', href: '/events/', description: 'Ceremonies, workshops and weekly Balinese cultural workshops', image: 'lumeria-soft-opening-02620' },
  { label: 'Host Your Retreat', href: '/host-your-retreat/', description: 'Apply to host your own retreat at Lumeria', image: 'home-page-lumeria-maria-abz-01360' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Lumeria Yoga',
  url: site.url,
  email: site.email,
  telephone: '+6282341913414',
  image: `${site.url}/images/lumeria-maria-abz-01485-1600.webp`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Raya Pengosekan',
    addressLocality: 'Ubud',
    addressRegion: 'Bali',
    postalCode: '80571',
    addressCountry: 'ID',
  },
  sameAs: site.socials.map((s) => s.url),
};

export default function Home() {
  const { upcoming, recurring } = groupEvents();
  const whatsOn = [...upcoming.slice(0, 2), ...recurring];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        variant="split"
        title="Discover a Sanctuary of Inner Balance and a Space to Shine"
        image="lumeria-soft-opening-03265"
        imageAlt="A yoga class in Lumeria’s open bamboo shala, surrounded by palms"
        position="40% 50%"
        actions={
          <>
            <Link href="/yoga/#timetable" className="btn">
              View the class timetable
            </Link>
            <Link href="/accommodation/" className="btn btn-ghost">
              Stay in a bungalow
            </Link>
          </>
        }
      >
        <p>Yoga, healing and connection in a garden sanctuary on Jl. Raya Pengosekan, in the centre of Ubud, Bali.</p>
      </PageHero>

      <section className={`section bg-sand ${styles.vision}`} aria-labelledby="vision-heading">
        <div className={`container ${styles.visionGrid}`}>
          <Parallax className={`${styles.visionMedia} frame`}>
            <Img
              src="lumeria-maria-abz-01376"
              alt="A stone Buddha statue among tropical plants in the Lumeria garden"
              sizes="(min-width: 900px) 38vw, 92vw"
              className="cover"
            />
          </Parallax>
          <div className={styles.visionText}>
            <h2 id="vision-heading">Vision &amp; Mission</h2>
            <p className={styles.statement}>
              At Lumeria, we vision all beings living, thriving and shining from their hearts. We embrace yoga, healing and connection as a
              lifestyle and truth and love as our north star.
            </p>
            <p>
              Our mission is to create a loving, nurturing and inclusive space that inspires all beings to embark on the transformative
              journey of self-discovery and self-illumination. A space to shine.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="offer-heading">
        <div className="container">
          <h2 id="offer-heading" className={styles.offerHeading}>
            Yoga classes, wellness, retreats for transformative holistic experiences.
          </h2>
          <OfferIndex
            items={offers.map(({ label, href, description }) => ({ label, href, description }))}
            images={offers.map((o) => (
              <Img key={o.image} src={o.image} alt="" sizes="(min-width: 900px) 40vw, 1px" className="cover" />
            ))}
            thumbs={offers.map((o) => (
              <Img key={o.image} src={o.image} alt="" sizes="6rem" />
            ))}
          />
        </div>
      </section>

      {whatsOn.length > 0 && (
        <section className={`section ${styles.events}`} aria-labelledby="events-heading">
          <div className="container">
            <div className={styles.eventsHead}>
              <h2 id="events-heading">Upcoming at Lumeria</h2>
              <Link href="/events/" className="text-link">
                All events
              </Link>
            </div>
            <EventRows events={whatsOn} />
          </div>
        </section>
      )}

      <section className={`section-tight bg-white ${styles.reviews}`} aria-labelledby="reviews-heading">
        <div className="container">
          <ReviewStrip
            reviews={reviews}
            headingId="reviews-heading"
            heading={
              <h2 id="reviews-heading" className={styles.reviewsHeading}>
                Guests on Google
              </h2>
            }
          />
        </div>
      </section>

    </>
  );
}
