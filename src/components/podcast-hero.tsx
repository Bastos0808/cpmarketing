"use client"

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";

export default function PodcastHero() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showFirstPart, setShowFirstPart] = useState(false);
  const [showSecondPart, setShowSecondPart] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowFirstPart(true);
    }, 500);

    const timer2 = setTimeout(() => {
      setShowSecondPart(true);
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);


  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

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
            {!isVideoVisible && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-20 p-4 transition-opacity duration-500">
                <div className="text-center">
                    <p className={`text-white text-xl md:text-2xl font-bold transition-opacity duration-1000 ${showFirstPart ? 'opacity-100' : 'opacity-0'}`}>
                        SE PREPARE
                    </p>
                    <p className={`text-primary text-xl md:text-2xl font-bold transition-opacity duration-1000 delay-500 ${showSecondPart ? 'opacity-100' : 'opacity-0'}`}>
                        PARA CONHECER O ESTÚDIO MAIS COMPLETO DE GOIÂNIA
                    </p>
                </div>
              </div>
            )}
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoVisible ? "opacity-100" : "opacity-0"}`}
              onCanPlay={() => setIsVideoVisible(true)}
              preload="auto"
            >
              <source src="https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/video-do-estudio.mp4?alt=media&token=3291830a-49be-4c27-b25b-25cefdd6ad80" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
            <div className="absolute bottom-4 right-4 z-10">
                <Button onClick={toggleMute} size="icon" variant="outline" className="bg-black/50 hover:bg-black/70 border-white/30 hover:border-white text-white">
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    <span className="sr-only">Toggle Sound</span>
                </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center max-w-5xl mx-auto">
          <p className="text-xl font-bold text-primary tracking-wide">Grave seu conteúdo e deixe toda a parte técnica e operacional com nosso time, crie agora seu podcast</p>
        </div>
      </div>
    </section>
  );
}
