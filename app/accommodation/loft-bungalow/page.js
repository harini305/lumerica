import BungalowPage from '@/components/BungalowPage';
import { bungalows } from '@/data/accommodation';

export const metadata = {
  title: 'Loft Bungalow',
  description: bungalows['loft-bungalow'].intro,
  alternates: { canonical: '/accommodation/loft-bungalow/' },
};

export default function LoftBungalowPage() {
  return <BungalowPage bungalow={bungalows['loft-bungalow']} />;
}
