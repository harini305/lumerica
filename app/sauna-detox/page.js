import Link from 'next/link';
import { External } from '@/components/icons';
import Img from '@/components/Img';
import PageHero from '@/components/PageHero';
import PriceCell from '@/components/PriceCell';
import Reveal from '@/components/Reveal';
import { site } from '@/data/site';
import styles from './sauna.module.css';

export const metadata = {
  title: 'Sauna Detox in Ubud',
  description:
    'Two-hour Sauna Detox sessions at Lumeria, Ubud: hot sauna, steam room and cold plunge with herbal tea, lockers, towels and showers. Pre-book at least 2 hours ahead.',
  alternates: { canonical: '/sauna-detox/' },
};

const sessions = [
  { name: 'Brunch', time: '11am – 1pm' },
  { name: 'Mid Day', time: '1:30pm – 3:30pm' },
  { name: 'Evening', time: '4pm – 6pm' },
];

const elements = [
  {
    name: 'Hot Sauna',
    image: 'lumeria-maria-abz-01784',
    alt: 'Wooden sauna bucket and ladle',
    text: 'Saunas and sweat therapy have been used by ancient cultures from all over the world for thousands of years, from Turkish baths and Native American sweat lodges to Russian banyas and Finnish sweat rooms. The long-lasting health benefits are plenty and have been proven to improve overall cardiovascular health, speed up muscle recovery times, decrease chronic low back pain, improve sleep, lower depression symptoms, support excretion of toxins and heavy metals and prevent fewer colds and viral infections.',
  },
  {
    name: 'Steam Room',
    image: 'lumeria-maria-abz-01770',
    alt: 'A guest relaxing in the misty steam room',
    text: 'Whilst saunas and steams have similar benefits due to both their detoxifying and relaxing nature, the steam room experience is beloved by many yogis and wellness enthusiasts due to it’s cleansing properties including lowering blood pressure, improving blood flow to sore muscles, clearing congestion and mucus in the body, improving skin health and overall skin glow, lowering joint stiffness and lingering peaceful effects.',
  },
  {
    name: 'Cold Plunge',
    image: 'lumeria-maria-abz-01705',
    alt: 'A guest in the cold plunge pool surrounded by plants',
    text: 'The use of cold therapy is not a new trend where earliest records go as far back as 5,000 years ago to the Egyptians. In the 17th century physicians such as John Floyer proclaimed the health benefits of bathing in cold water and now sports athletes, wellness coaches, trainers, yogis and others alike are making cold baths an everyday lifestyle due to the mind-body benefits including overall boost in energy levels and immune system, strengthening the nervous system, reducing stress, reducing inflammation, improving metabolic function, improving deep sleep and speeding up muscle repair times.',
  },
];

// Prices from the original packages table. The Local / KITAS drop-in is printed as
// both "IDR 250,00" and "IDR 250,000" (audit C1), so it is withheld pending confirmation.
const prices = [
  { name: '1 Drop-in (Local / KITAS)', cell: { note: 'Ask at reception' } },
  { name: '1 Drop-in', cell: { price: 'IDR 300,000', url: site.momence.board } },
  { name: '3 Pack', cell: { price: 'IDR 800,000', url: 'https://momence.com/Lumeria-Yoga/membership/3-Sauna-Detox-Pack/115285' } },
  { name: '5 Pack', cell: { price: 'IDR 1,100,000', url: 'https://momence.com/Lumeria-Yoga/membership/5-Sauna-Detox-Pack/115286' } },
  { name: '10 Pack', cell: { price: 'IDR 1,800,000', url: 'https://momence.com/Lumeria-Yoga/membership/10-Sauna-Detox-Pack/115287' } },
  { name: '1 Week Unlimited', cell: { price: 'IDR 1,200,000', url: 'https://momence.com/Lumeria-Yoga/membership/1-Week-Unlimited-Sauna-Detox-Pack/115288' } },
  { name: '1 Month Unlimited', cell: { price: 'IDR 3,500,000', url: 'https://momence.com/Lumeria-Yoga/membership/1-Month-Unlimited-Sauna-Detox-Pack/115289' } },
];

const bookingNote = 'Advanced booking is required. Please pre-book online or with Reception at least 2 hours before your arrival.';

function BookButton() {
  return (
    <a href={site.momence.board} className="btn" rel="noopener" target="_blank">
      Book a Sauna Detox session <External />
      <span className="visually-hidden">(Momence, opens in a new tab)</span>
    </a>
  );
}

export default function SaunaPage() {
  return (
    <>
      <PageHero
        title="Detox in Ubud, Bali"
        image="lumeria-maria-abz-01687"
        imageAlt="Two guests relaxing in Lumeria’s wooden sauna"
        position="50% 45%"
        actions={<BookButton />}
      >
        <p>
          Indulge in the rejuvenating and purifying experience of Lumeria’s Sauna Detox. Step into deep relaxation as you immerse yourself
          in the cleansing properties of contrast therapy with the combination of sauna + steam + cold plunge.
        </p>
      </PageHero>

      <section className="section-tight container" aria-labelledby="sessions-heading">
        <div className={styles.facts}>
          <div>
            <h2 id="sessions-heading">Sessions</h2>
            <ol className={styles.sessions}>
              {sessions.map((s) => (
                <li key={s.name}>
                  <span className={styles.sessionName}>{s.name}</span>
                  <span className={styles.sessionTime}>{s.time}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2>Sauna Detox includes</h2>
            <ul className={styles.includes}>
              <li>2 hours access to hot sauna, steam room and cold plunge.</li>
              <li>Complimentary herbal tea &amp; drinking water.</li>
              <li>Locker, towel &amp; showers available.</li>
            </ul>
            <p className={styles.note}>
              <strong>Please note:</strong> {bookingNote}
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-sand" aria-label="Sauna, steam and cold plunge">
        <Reveal className={`container ${styles.elements}`}>
          {elements.map((e) => (
            <article key={e.name} className={styles.element}>
              <div className={styles.elementMedia}>
                <Img src={e.image} alt={e.alt} sizes="(min-width: 900px) 30vw, 92vw" className="cover" />
              </div>
              <h2>{e.name}</h2>
              <p>{e.text}</p>
            </article>
          ))}
        </Reveal>
      </section>

      <section className="section container" aria-labelledby="prices-heading">
        <div className={styles.pricesLayout}>
          <div className={styles.pricesIntro}>
            <h2 id="prices-heading">Sauna Detox Prices &amp; Packages</h2>
            <p>To book a session or purchase a package, choose a price or inquire at the reception.</p>
            <p>
              Yoga + Sauna Detox packages are listed with the <Link href="/yoga/#class-rates">yoga class rates</Link>.
            </p>
            <BookButton />
          </div>
          <table className={styles.prices}>
            <caption className="visually-hidden">Sauna Detox prices in Indonesian rupiah</caption>
            <thead>
              <tr>
                <th scope="col">Sauna package</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((p) => (
                <tr key={p.name}>
                  <th scope="row">{p.name}</th>
                  <td>
                    <PriceCell {...p.cell} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
