import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import MethodSection from '@/components/method-section';
import ServicesSection from '@/components/services-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import VideoSection from '@/components/video-section';
import BrandsSection from '@/components/brands-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div id="content-after-hero">
            <VideoSection />
            <AboutSection />
            <BrandsSection />
            <MethodSection />
            <ServicesSection />
            <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
