import BungalowPage from '@/components/BungalowPage';
import { bungalows } from '@/data/accommodation';

export const metadata = {
  title: 'King Bungalow',
  description: bungalows['king-bungalow'].intro,
  alternates: { canonical: '/accommodation/king-bungalow/' },
};

export default function KingBungalowPage() {
  return <BungalowPage bungalow={bungalows['king-bungalow']} />;
}
