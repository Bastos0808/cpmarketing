import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import MethodSection from '@/components/method-section';
import ServicesSection from '@/components/services-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import VideoSection from '@/components/video-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <VideoSection />
        <AboutSection />
        <MethodSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
