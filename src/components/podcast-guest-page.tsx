"use client"

import React from "react";
import PodcastGuestRdstationForm from "./podcast-guest-rdstation-form";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function PodcastGuestPage() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    return (
        <section id="form" className="w-full min-h-screen py-12 md:py-24 lg:py-32 bg-background relative flex items-center justify-center">
            <div className="absolute inset-0 bg-grid-orange-900/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    <div className="flex flex-col space-y-8">
                        <div className="space-y-6">
                             <div className="inline-block px-6 py-2 text-lg font-bold uppercase tracking-wider text-primary-foreground bg-primary rounded-full shadow-[0_0_15px_hsl(var(--primary))] animate-pulse">
                                PARTICIPAÇÃO GRATUITA
                            </div>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                                Torne-se uma Autoridade no seu Mercado: Participe do Nosso Podcast
                            </h1>
                            <p className="max-w-[600px] text-gray-300 md:text-lg text-sm">
                                Você é um especialista em sua área com uma história para contar ou insights valiosos para compartilhar? O nosso podcast é a plataforma ideal para você expandir sua influência, conectar-se com um novo público e consolidar sua marca como referência.
                            </p>
                            <p className="max-w-[600px] text-gray-300 md:text-lg text-sm">
                                Esta é a sua chance de ganhar visibilidade e reconhecimento em um episódio totalmente dedicado a você, sem nenhum custo.
                            </p>
                             <p className="font-bold text-primary text-lg pt-4">
                               Preencha o formulário para garantir sua participação. As vagas são limitadas e preenchidas rapidamente. Nossa equipe entrará em contato em breve.
                            </p>
                        </div>
                        <Carousel
                            plugins={[plugin.current]}
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full max-w-lg flex-grow"
                            onMouseEnter={plugin.current.stop}
                            onMouseLeave={plugin.current.reset}
                            >
                            <CarouselContent className="h-full">
                                <CarouselItem className="h-full">
                                     <Image src="/PODCAST 01.png" alt="Estúdio de Podcast da CP Marketing" width={500} height={500} className="rounded-lg object-cover w-full h-full aspect-video" data-ai-hint="podcast studio" />
                                </CarouselItem>
                                 <CarouselItem className="h-full">
                                     <Image src="/PODCAST 02.png" alt="Detalhe do estúdio de podcast" width={500} height={500} className="rounded-lg object-cover w-full h-full aspect-video" data-ai-hint="podcast studio detail" />
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    </div>
                    <div className="w-full h-full bg-secondary/50 border border-border rounded-lg flex items-center justify-center p-4">
                        <PodcastGuestRdstationForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
