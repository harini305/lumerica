import Link from 'next/link';
import { Chat, External, Mail, Pin } from '@/components/icons';
import Img from '@/components/Img';
import PageHero from '@/components/PageHero';
import { site } from '@/data/site';
import styles from './contact.module.css';

export const metadata = {
  title: 'Contact & Visit',
  description: 'Contact Lumeria by email or WhatsApp, or visit us on Jl. Raya Pengosekan in Ubud, Bali.',
  alternates: { canonical: '/contact/' },
};

// Replaces the theme demo page that sat at /contact/ (audit A1). Only details
// published in the original footer are used; studio opening hours were never
// published, so only the verified sauna session times are listed.
export default function ContactPage() {
  return (
    <>
      <PageHero variant="plain" title="Contact & Visit">
        <p>Write to us, message us on WhatsApp, or come and find us in central Ubud.</p>
      </PageHero>

      <div className={`container ${styles.layout}`}>
        <div className={styles.channels}>
          <a className={styles.channel} href={`mailto:${site.email}`}>
            <Mail />
            <span>
              <span className={styles.kind}>Email</span>
              <span className={styles.value}>{site.email}</span>
            </span>
          </a>
          <a className={styles.channel} href={site.whatsapp.url} rel="noopener" target="_blank">
            <Chat />
            <span>
              <span className={styles.kind}>WhatsApp</span>
              <span className={styles.value}>{site.whatsapp.display}</span>
            </span>
            <span className="visually-hidden">(opens in a new tab)</span>
          </a>
          <a className={styles.channel} href={site.address.mapUrl} rel="noopener" target="_blank">
            <Pin />
            <span>
              <span className={styles.kind}>Address</span>
              <span className={styles.value}>
                {site.address.lines.map((l) => (
                  <span key={l} className={styles.line}>
                    {l}
                  </span>
                ))}
              </span>
              <span className={styles.open}>
                Open in Google Maps <External width={14} height={14} />
              </span>
            </span>
            <span className="visually-hidden">(opens in a new tab)</span>
          </a>

          <div className={styles.more}>
            <h2>Teacher training enquiries</h2>
            <p>
              <a href={`mailto:${site.trainingsEmail}`}>{site.trainingsEmail}</a>
            </p>
            <h2>Sauna Detox sessions</h2>
            <p>Brunch 11am – 1pm · Mid Day 1:30pm – 3:30pm · Evening 4pm – 6pm</p>
            <p className="small">
              Pre-book at least 2 hours ahead. <Link href="/sauna-detox/">Sauna &amp; Detox details</Link>
            </p>
            <h2>Follow Lumeria</h2>
            <ul className={styles.socials}>
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.url} rel="noopener" target="_blank">
                    {s.label}
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`${styles.photo} arch`}>
          <Img src="lumeria-maria-abz-01624" alt="A shaded lounge terrace beside the Lumeria garden" sizes="(min-width: 900px) 40vw, 92vw" className="cover" />
        </div>
      </div>
    </>
  );
}
