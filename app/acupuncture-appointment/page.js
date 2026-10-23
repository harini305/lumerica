import AppointmentPage from '@/components/AppointmentPage';

export const metadata = {
  title: 'Acupuncture Appointment',
  description: 'Request an acupuncture, cosmetic acupuncture, auricular acupuncture or fire cupping appointment at Lumeria in Ubud.',
  alternates: { canonical: '/acupuncture-appointment/' },
};

export default function Page() {
  return (
    <AppointmentPage
      title="Make an Acupuncture Appointment"
      intro="Fill in the form below to reserve your spot for one of our acupuncture offerings."
      backHref="/acupuncture/"
      backLabel="Back to acupuncture treatments"
      form={{
        embedId: 'b385a67fa656662b0304e30a979126f1',
        form: 'acupuncture',
        title: 'Make an Acupuncture Appointment',
        sessions: 'Cosmetic Acupuncture & Gua Sha, Acupuncture, Fire Cupping, Auricular Acupuncture',
      }}
    />
  );
}
