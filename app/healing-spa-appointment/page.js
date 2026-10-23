import AppointmentPage from '@/components/AppointmentPage';
import { spaMenu } from '@/data/healing';

export const metadata = {
  title: 'Healing Spa Appointment',
  description: 'Request a massage, facial or spa package appointment at Lumeria’s Healing Spa in Ubud, Bali.',
  alternates: { canonical: '/healing-spa-appointment/' },
};

// Same session list as the original form: one entry per treatment and duration.
const sessions = spaMenu
  .flatMap((g) => g.items.flatMap((i) => i.prices.map((p) => `${i.name} ${p.match(/^\d+ mins/)[0]}`)))
  .join(', ');

export default function Page() {
  return (
    <AppointmentPage
      title="Make a Healing Spa Appointment"
      intro="Fill in the form below to reserve your spot for one of the healing spa treatments."
      backHref="/healing-spa/"
      backLabel="Back to the healing spa menu"
      form={{ embedId: '7607166069a4e310ef45ea85e504e8a6', form: 'spa', title: 'Make Healing Spa Appointment', sessions }}
    />
  );
}
