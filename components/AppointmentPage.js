import Link from 'next/link';
import SpandaForm from './embeds/SpandaForm';
import PageHero from './PageHero';
import { appointmentTerms } from '@/data/healing';
import styles from './AppointmentPage.module.css';

// Shared layout for the three appointment pages. The form itself is the original
// Spanda embed; the terms are also shown as page text so they can be read before
// the form loads (or if it does not).
export default function AppointmentPage({ title, intro, backHref, backLabel, form }) {
  return (
    <>
      <PageHero variant="plain" title={title}>
        <p>{intro}</p>
      </PageHero>
      <div className={`container ${styles.layout}`}>
        <section className={styles.form} aria-label="Appointment form">
          <SpandaForm {...form} terms={appointmentTerms.map((t, i) => `${i + 1}. ${t}`).join('\n')} waiver />
        </section>
        <aside className={styles.aside}>
          <h2>Terms</h2>
          <ol>
            {appointmentTerms.map((t) => (
              <li key={t.slice(0, 20)}>{t}</li>
            ))}
          </ol>
          <p className="small">
            Please read the <Link href="/private-healing-waiver-agreement/">Private Healing Waiver Agreement</Link> before your session.
          </p>
          <Link href={backHref} className="text-link">
            {backLabel}
          </Link>
        </aside>
      </div>
    </>
  );
}
