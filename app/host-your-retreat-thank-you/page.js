import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Thank You for Your Retreat Application',
  robots: { index: false },
  alternates: { canonical: '/host-your-retreat-thank-you/' },
};

// Confirmation page the retreat application form redirects to (as on the original site).
export default function ThankYouPage() {
  return (
    <div className="section-tight">
      <PageHero
        variant="plain"
        title="Thank you for your retreat application!"
        actions={
          <Link href="/" className="btn btn-ghost">
            Back to the home page
          </Link>
        }
      >
        <p>
          We’ve received your retreat application. Thank you for taking the time to share your ideas and vision with us. We’re excited to
          learn more about what you’re planning.
        </p>
        <p>Our team will review your submission and get back to you via email for the next steps.</p>
        <p>Looking forward to connecting with you soon!</p>
      </PageHero>
    </div>
  );
}
