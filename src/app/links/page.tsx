import Header from '@/components/header';
import Footer from '@/components/footer';
import LinksPage from '@/components/links-page';

export default function Links() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <LinksPage />
      </main>
      <Footer />
    </div>
  );
}
