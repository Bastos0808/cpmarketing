import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactPage from '@/components/contact-page';

export default function Contato() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}
