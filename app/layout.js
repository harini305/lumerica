import { Jost, Marcellus } from 'next/font/google';
import Announcement from '@/components/Announcement';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { announcement, site } from '@/data/site';
import { baliInstant, formatShort } from '@/lib/dates';
import { groupEvents } from '@/lib/events';
import './globals.css';

const marcellus = Marcellus({ subsets: ['latin'], weight: '400', variable: '--font-marcellus', display: 'swap' });
const jost = Jost({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-jost', display: 'swap' });

// Navigation, event status and the announcement depend on today's date (Bali time).
// Pages are regenerated at most hourly; client components re-check dates as well.
export const revalidate = 3600;

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Lumeria – Yoga, Healing & Sauna in Ubud, Bali',
    template: '%s – Lumeria',
  },
  description:
    'Lumeria is a yoga, healing and wellness sanctuary with eco-bungalows on Jl. Raya Pengosekan in central Ubud, Bali. A space to shine.',
  openGraph: {
    siteName: 'Lumeria – Space to Shine',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/lumeria-maria-abz-01485-1600.webp', width: 1600, height: 1069 }],
  },
};

export const viewport = {
  themeColor: '#5c6847',
};

function navEvents(now) {
  const { upcoming, recurring } = groupEvents(now);
  return [
    ...upcoming.map((e) => ({
      label: e.title,
      href: `/${e.slug}/`,
      note: formatShort(e.sessions[0].start),
      until: baliInstant(e.sessions.at(-1).end).toISOString(),
    })),
    ...recurring.map((e) => ({ label: e.title, href: `/${e.slug}/`, note: e.recurring.label })),
  ];
}

export default function RootLayout({ children }) {
  const now = new Date();
  const showNotice = announcement.until && baliInstant(announcement.until) > now;
  const dismissScript = `try{if(localStorage.getItem('dismissed:${announcement.id}'))document.documentElement.dataset.dismissed='1'}catch(e){}`;

  return (
    <html lang="en" className={`${marcellus.variable} ${jost.variable}`}>
      <head>
        {showNotice && <script dangerouslySetInnerHTML={{ __html: dismissScript }} />}
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {showNotice && (
          <Announcement id={announcement.id} text={announcement.text} until={baliInstant(announcement.until).toISOString()} />
        )}
        <Header eventLinks={navEvents(now)} />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
