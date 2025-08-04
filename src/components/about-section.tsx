"use client"

import React from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function AboutSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
    )

    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative flex items-center justify-center max-w-lg mx-auto">
                        <div className="absolute w-full h-full">
                            <div className="absolute inset-0 border-2 border-primary/50 rounded-full animate-spin-slow"></div>
                            <div className="absolute inset-[8%] border-2 border-primary/50 rounded-full animate-spin-slow-reverse"></div>
                            <div className="absolute top-[15%] right-[5%] w-2 h-2 bg-primary transform rotate-45"></div>
                            <div className="absolute bottom-[15%] left-[5%] w-2 h-2 bg-primary transform rotate-45"></div>
                        </div>
                        <Carousel
                            plugins={[plugin.current]}
                            className="w-full max-w-md"
                            opts={{
                                loop: true,
                            }}
                        >
                            <CarouselContent>
                                <CarouselItem>
                                    <Image src="/FOTO CAIO.jpg" alt="Carlos C" width={350} height={600} className="rounded-lg relative z-10 object-cover aspect-[350/600]" data-ai-hint="man portrait" />
                                </CarouselItem>
                                <CarouselItem>
                                    <Image src="https://placehold.co/350x600.png" alt="Podcast Studio" width={350} height={600} className="rounded-lg relative z-10 object-cover aspect-[350/600]" data-ai-hint="podcast studio" />
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    </div>
                    <div className="space-y-6">
                        <p className="text-primary font-semibold uppercase tracking-widest">SOBRE NÓS</p>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">A CP Marketing: Sua Agência Completa com Estúdio de Podcast</h2>
                        <p className="text-muted-foreground">
                            Na CP Marketing, oferecemos soluções de marketing completas e integradas para sua marca. Além dos nossos serviços de marketing digital, design e consultoria estratégica, contamos com um estúdio de podcast totalmente equipado. Transforme suas ideias em conteúdo de alta qualidade e alcance resultados excepcionais com nossa expertise e tecnologia de ponta.
                        </p>
                         <p className="text-primary font-bold text-xl">
                           Vamos elevar sua comunicação para o próximo nível!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
