"use client"

import React from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const brands = [
  { name: "Cliente 1", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2Flogo_200x200.png?alt=media&token=6f336712-7bc6-4e5a-a2ea-b625e4cd4a03" },
  { name: "Cliente 2", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2Fdownload_200x200.png?alt=media&token=273b244b-cfc7-45fd-95e5-4f1b9aa7ace7" },
  { name: "Laura Rocha", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2FLaura-Rocha_Versao-02.png.webp?alt=media&token=eaf98e52-10ad-4c7f-966d-3764f5445b48" },
  { name: "Cliente 4", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2Fdownload%20(1)_200x200.png?alt=media&token=355194ec-54f7-4189-98dd-9d9b95aa1ca3" },
  { name: "Cliente 5", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2Ffdf1a5de-4e70-42cc-9fa8-991f09efb22e-Photoroom.png_200x200.webp?alt=media&token=3f684f98-1923-4392-89e4-887adc95261b" },
  { name: "Pethouse", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2Fpet-house.png_200x200.webp?alt=media&token=304201ae-3aeb-4a6f-8a39-736a55445f87" },
  { name: "Cliente 7", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2FLOGO-SEM-FUNDO.png_200x200.webp?alt=media&token=e3f4fe74-7df7-4002-8da4-b6b70b26ae73" },
];

export default function BrandsSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 1, stopOnInteraction: false })
    );

  return (
    <section id="brands" className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary-foreground">
            Marcas que Confiam na Gente
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            Temos orgulho de ter colaborado com empresas de diversos setores, ajudando-as a alcançar seus objetivos.
          </p>
        </div>
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
                align: "start",
                loop: true,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="-ml-4">
                 {brands.map((brand, index) => (
                    <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5 pl-4">
                        <div className="relative h-20 filter grayscale hover:grayscale-0 brightness-200 hover:brightness-100 transition-all duration-300">
                          <Image
                            src={brand.src}
                            alt={brand.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}