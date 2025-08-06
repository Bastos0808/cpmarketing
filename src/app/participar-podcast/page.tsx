import Footer from '@/components/footer';
import PodcastBenefits from '@/components/podcast-benefits';
import PodcastGuestPage from '@/components/podcast-guest-page';

export default function ParticiparPodcastPage() {
  return (
    <div className="bg-background">
      <PodcastGuestPage />
      <PodcastBenefits />
      <Footer />
    </div>
  );
}
