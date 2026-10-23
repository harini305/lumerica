import Link from 'next/link';
import { footerLinks, site } from '@/data/site';
import BackToTop from './BackToTop';
import NewsletterDialog from './embeds/NewsletterDialog';
import { Chat, Mail, Pin, socialIcons } from './icons';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`bg-olive on-dark ${styles.footer}`}>
      <div className="container">
        <section className={styles.newsletter} aria-labelledby="newsletter-heading">
          <div>
            <h2 id="newsletter-heading">Subscribe to updates</h2>
            <p>Receive the latest updates from Lumeria: new events, workshops and announcements.</p>
          </div>
          <NewsletterDialog />
        </section>

        <div className={styles.grid}>
          <div className={styles.brand}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-cream.svg" alt="Lumeria" width="122" height="86" loading="lazy" />
            <p>Yoga, healing and eco-bungalows in central Ubud, Bali.</p>
          </div>

          <address className={styles.contact}>
            <a href={`mailto:${site.email}`}>
              <Mail /> {site.email}
            </a>
            <a href={site.whatsapp.url} rel="noopener" target="_blank">
              <Chat /> {site.whatsapp.display} <span className="visually-hidden">(WhatsApp, opens in a new tab)</span>
            </a>
            <a href={site.address.mapUrl} rel="noopener" target="_blank">
              <Pin />
              <span>
                Jl. Raya Pengosekan, Ubud
                <br />
                Bali, Indonesia 80571
              </span>
              <span className="visually-hidden">(Google Maps, opens in a new tab)</span>
            </a>
          </address>

          <nav aria-label="Footer" className={styles.links}>
            <ul>
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.base}>
          <ul className={styles.socials}>
            {site.socials.map((s) => {
              const Icon = socialIcons[s.label];
              return (
                <li key={s.label}>
                  <a href={s.url} rel="noopener" target="_blank" aria-label={`${s.label} (opens in a new tab)`}>
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
          <p>© Lumeria {new Date().getFullYear()}</p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
