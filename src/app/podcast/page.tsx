import Header from '@/components/header';
import Footer from '@/components/footer';
import PodcastHero from '@/components/podcast-hero';
import PodcastStudio from '@/components/podcast-studio';
import PodcastCTA from '@/components/podcast-cta';
import PodcastVisit from '@/components/podcast-visit';
import PodcastAuthority from '@/components/podcast-authority';
import PodcastContactSection from '@/components/podcast-contact-section';

export default function PodcastPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-28">
        <PodcastHero />
        <PodcastCTA />
        <PodcastStudio />
        <PodcastAuthority />
        <PodcastVisit />
        <PodcastContactSection />
      </main>
      <Footer />
    </div>
  );
}
