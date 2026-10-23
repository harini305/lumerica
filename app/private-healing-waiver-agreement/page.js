import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Private Healing Waiver Agreement',
  description: 'The liability waiver that applies to private healing sessions and activities at Lumeria Yoga Bali.',
  alternates: { canonical: '/private-healing-waiver-agreement/' },
};

export default function WaiverPage() {
  return (
    <div className="section-tight">
      <PageHero variant="plain" title="Private Healing Waiver Agreement" />
      <div className="container">
        <p className="measure">
          I am fully aware of and understand the potential dangers and risks, known and unknown, including death, involved in participating in
          any activities at Lumeria Yoga Bali PT, located at address: Jl. Raya Pengosekan, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571,
          Indonesia. I am fully aware and understand that my participation is completely voluntary and I assume all risks, results,
          implications anytime during or after the activities in perpetuity. I understand that my voluntary participation may or may not
          involve certain risks for physical, emotional, mental injuries known or unknown of which I hold myself completely responsible. I
          understand that it is my responsibility to consult a healthcare professional before or after participating in any activities. I
          understand and give consent to receive touch by facilitators and will not make any claims or accusations of any kind against
          Lumeria Yoga Bali PT and its associates for inappropriate or misconduct. I forever release Lumeria Yoga Bali PT and all its
          associates from any and all known or unknown responsibility and liability. I waive all rights to take any and all known and unknown
          legal action against Lumeria Yoga Bali PT and its associates. I agree to all cancellation policies and fees included at Lumeria Yoga
          Bali PT for my voluntary participation in activities. I declare that all information provided by myself is true and correct.
        </p>
      </div>
    </div>
  );
}
