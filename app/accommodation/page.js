import Link from 'next/link';
import { ArrowRight } from '@/components/icons';
import Img from '@/components/Img';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import styles from './accommodation.module.css';

export const metadata = {
  title: 'Accommodation – In-House Retreat in Ubud',
  description:
    'Stay in Lumeria’s wooden King and Loft bungalows in central Ubud, Bali, with yoga classes, the sauna, steam room and cold plunge, and vegan breakfast included.',
  alternates: { canonical: '/accommodation/' },
};

const included = [
  { title: 'Hot Sauna', image: 'hot-sauna-lumeria' },
  { title: 'Steam Room', image: 'in-house-retreat-included-2' },
  { title: 'Cold Plunge', image: 'in-house-retreat-included-1' },
  { title: 'Yoga Classes', image: 'in-house-retreat-included-4' },
  { title: 'Vegan Breakfast', image: 'in-house-retreat-included-5' },
  { title: 'Accommodation', image: 'in-house-retreat-included-6' },
];

const options = [
  {
    name: 'King Bungalow',
    href: '/accommodation/king-bungalow/',
    image: 'in-house-retreat-accommodation-2',
    alt: 'King bed inside a wooden lumbung bungalow',
    includes:
      '1 King Bed, black-out curtains, robe, slippers, A/C, fan, outdoor hot/cold showers, blow-dryer, kettle, drinking water, coffee/tea, mini-fridge, eco-friendly amenities and all-natural toiletries that align with nature.',
    text: 'The King Bungalow is made in traditional “lumbung” style, wooden bungalows with King size bed which offers natural comfort designed for singles or couples seeking yoga, meditation, sound healing, inner peace and connection.',
  },
  {
    name: 'Loft Bungalow',
    href: '/accommodation/loft-bungalow/',
    image: 'in-house-retreat-accommodation-1',
    alt: 'Twin beds inside a wooden loft bungalow',
    includes:
      '1 Double Bed or 2 Single Beds, black-out curtains, robe, slippers, A/C, fan, outdoor hot/cold showers, blow-dryer, kettle, drinking water, coffee/tea, mini-fridge, eco-friendly amenities and all-natural toiletries that align with nature.',
    text: 'The Loft Bungalow is made in traditional “lumbung” style, wooden loft bungalows with 1 Double Bed or 2 Single Beds. The upstairs loft provides the perfect space for journaling, reading, writing, music composing or perhaps a restful afternoon nap.',
  },
];

const gallery = [
  { image: 'lumeria-maria-abz-01485', alt: 'A guest in a dancer pose on stepping stones in the garden' },
  { image: 'lumeria-maria-abz-01521-1', alt: 'Morning practice in the open bamboo shala' },
  { image: 'lumeria-maria-abz-01392', alt: 'Guests meditating in the shala' },
  { image: 'bali-rice-field', alt: 'Rice terraces near Ubud with a volcano behind' },
  { image: 'lumeria-maria-abz-01624', alt: 'A lounge terrace with cushions beside the garden' },
];

export default function AccommodationPage() {
  return (
    <>
      <PageHero
        title="Stay in our In-House Retreat at Lumeria Bali"
        image="in-house-retreat-header"
        imageAlt="A wooden lumbung bungalow framed by tropical plants"
        position="50% 60%"
        actions={
          <a href="#bungalows" className="btn">
            See our accommodation options
          </a>
        }
      >
        <p>
          Welcome to a hidden gem nestled in Bali’s lush greenery. Enjoy the blend of eco-luxury accommodation with wellness experiences
          designed to rejuvenate your body, mind, and spirit.
        </p>
      </PageHero>

      <section className="section-tight container" aria-label="Your stay">
        <div className={styles.introCols}>
          <p>
            Your journey with us goes beyond just a place to sleep. Each eco-luxury room is your private retreat, thoughtfully crafted to
            offer tranquility and comfort. The essence of Lumeria is found in the moments outside these rooms too. Unwind in our detox
            facilities, where you can relax in a serene setting.
          </p>
          <p>
            Our yoga sessions welcome everyone, from beginners to seasoned practitioners, offering a space to connect with yourself through
            movement, sound healing and meditation. And every morning, we greet the day with a hearty, nutritious breakfast prepared with
            local ingredients, fueling your adventures in and around Ubud.
          </p>
        </div>
      </section>

      <section className="section-tight container" aria-label="Location and approach">
        <div className={styles.features}>
          <article className={styles.feature}>
            <div className={`${styles.featureMedia} arch`}>
              <Img src="in-house-retreat-1" alt="A stone Buddha in the Lumeria garden" sizes="(min-width: 900px) 40vw, 92vw" className="cover" />
            </div>
            <h2>A Hidden Oasis Nestled in Central Ubud, Bali</h2>
            <p>
              Located in central Ubud, Lumeria is just minutes away from the area’s top attractions, yet it offers a peaceful retreat from
              the hustle and bustle. Our sanctuary is enveloped by lush nature, ensuring that while you’re close to everything, you’re also
              beautifully secluded. It’s the ideal base for both exploration and relaxation, where the vibrancy of Ubud meets the
              tranquility of the Balinese landscape.
            </p>
          </article>
          <article className={styles.feature}>
            <div className={styles.featureMedia}>
              <Img src="in-house-retreat-2" alt="A guest resting on a garden lounger" sizes="(min-width: 900px) 40vw, 92vw" className="cover" />
            </div>
            <h2>All-Inclusive Holistic Approach to Life</h2>
            <p>
              We embrace a holistic, all-inclusive approach to your well-being, creating a haven where every need is met without ever
              having to step outside. From the nourishing, locally-sourced meals served at our dining area to the rejuvenating yoga
              classes and detox area, we’ve curated an environment that caters to every aspect of your health and happiness.
            </p>
          </article>
        </div>
      </section>

      <section className="section bg-sand" aria-labelledby="included-heading">
        <div className="container">
          <div className={styles.head}>
            <h2 id="included-heading">What’s Included in Your Stay at Lumeria</h2>
            <p>
              We understand that a yogic-lifestyle means holistic living in tune with nature. That’s why we offer all inclusive experience
              designed for those who are seeking yoga, meditation, sound healing, inner peace and connection.
            </p>
          </div>
          <Reveal as="ul" className={styles.included} stagger={0.06}>
            {included.map((i) => (
              <li key={i.title}>
                <div className={styles.includedMedia}>
                  <Img src={i.image} alt="" sizes="(min-width: 900px) 15vw, 45vw" className="cover" />
                </div>
                <span>{i.title}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="bungalows" className="section" aria-labelledby="options-heading">
        <div className="container">
          <h2 id="options-heading" className={styles.optionsHeading}>
            Accommodation Options
          </h2>
          <div className={styles.options}>
            {options.map((o) => (
              <article key={o.href} className={styles.option}>
                <div className={styles.optionMedia}>
                  <Img src={o.image} alt={o.alt} sizes="(min-width: 900px) 45vw, 92vw" className="cover" />
                </div>
                <h3>{o.name}</h3>
                <p>{o.text}</p>
                <p className="small">
                  <strong>Includes:</strong> {o.includes}
                </p>
                <Link href={o.href} className="btn btn-ghost">
                  Learn more &amp; reserve<span className="visually-hidden"> the {o.name}</span> <ArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight" aria-label="Photos of Lumeria">
        <ul className={styles.gallery}>
          {gallery.map((g) => (
            <li key={g.image}>
              <Img src={g.image} alt={g.alt} sizes="(min-width: 900px) 22vw, 70vw" className="cover" />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
