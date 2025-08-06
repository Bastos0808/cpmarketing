
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
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full aspect-video bg-border/50 rounded-2xl overflow-hidden border border-primary object-cover"
          >
            <source src="/video-do-estudio.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      </div>
    </section>
  );
}
