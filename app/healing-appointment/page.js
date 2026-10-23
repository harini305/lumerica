import AppointmentPage from '@/components/AppointmentPage';

export const metadata = {
  title: 'Private Healing Appointment',
  description: 'Request a private healing session at Lumeria, Ubud: Amerta sound meditation, astrology, tarot, Reiki or biomagnetic therapy.',
  alternates: { canonical: '/healing-appointment/' },
};

export default function Page() {
  return (
    <AppointmentPage
      title="Make a Private Healing Appointment"
      intro="Fill in the form below to reserve your spot for one of the healings."
      backHref="/private-healing/"
      backLabel="Back to private healing treatments"
      form={{
        embedId: '0f966b48d2dfeea2fcd8bbbad45fccec',
        form: 'healing',
        title: 'Make a Private Healing Appointment',
        sessions:
          'Amerta Sound Meditation Healing - Galih, Astrology Birth Chart Reading - Eric Leto, Tarot Cards Reading - Eric Leto, Reiki Energy Healing - Eric Leto, Biomagnetic Therapy - Adam DiMarco',
      }}
    />
  );
}
