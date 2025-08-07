"use client"

import { useState } from "react";
import { Loader } from "lucide-react";

export default function PodcastHero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-[10px] uppercase text-white">
            Estúdio de Podcast em Goiânia
          </h1>
        </div>
        <div className="mt-8 md:mt-12 mx-auto max-w-5xl">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-primary bg-black flex items-center justify-center">
            {!isVideoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <Loader className="h-12 w-12 text-primary animate-spin" />
              </div>
            )}
            <video
              autoPlay
              muted
              loop
              playsInline
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
              onCanPlay={() => setIsVideoLoaded(true)}
            >
              <source src="https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/video-do-estudio.mp4?alt=media&token=3291830a-49be-4c27-b25b-25cefdd6ad80" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </div>
        <div className="mt-8 text-center text-muted-foreground max-w-5xl mx-auto">
          <p>Grave seu conteúdo e deixe toda a parte técnica e operacional com nosso time, crie agora seu podcast</p>
        </div>
      </div>
    </section>
  );
}
