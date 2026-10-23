import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Page not found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="section-tight">
      <PageHero
        variant="plain"
        title="Page not found"
        actions={
          <>
            <Link href="/" className="btn">
              Go to the home page
            </Link>
            <Link href="/events/" className="btn btn-ghost">
              See events
            </Link>
          </>
        }
      >
        <p>The page you were looking for has moved or no longer exists.</p>
      </PageHero>
    </div>
  );
}
