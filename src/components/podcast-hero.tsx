import { CirclePlay } from 'lucide-react';

export default function PodcastHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-[10px] uppercase text-white">
            Estúdio de Podcast em Goiânia
          </h1>
        </div>
        <div className="mt-8 md:mt-12 mx-auto max-w-5xl">
          <div className="aspect-video bg-border/50 rounded-2xl overflow-hidden border border-primary flex items-center justify-center">
            <div className="relative w-full h-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/QmWmDr5OKyM?autoplay=1&mute=1&loop=1&playlist=QmWmDr5OKyM&vq=hd720"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
