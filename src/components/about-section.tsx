"use client"

import React from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function AboutSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
    )

    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative flex items-center justify-center max-w-[300px] mx-auto">
                        <div className="absolute w-full h-full hidden md:block">
                            <div className="absolute inset-0 border-2 border-primary/50 rounded-full animate-spin-slow"></div>
                            <div className="absolute inset-[8%] border-2 border-primary/50 rounded-full animate-spin-slow-reverse"></div>
                            <div className="absolute top-[15%] right-[5%] w-2 h-2 bg-primary transform rotate-45"></div>
                            <div className="absolute bottom-[15%] left-[5%] w-2 h-2 bg-primary transform rotate-45"></div>
                        </div>
                        <Carousel
                            plugins={[plugin.current]}
                            className="w-full"
                            opts={{
                                loop: true,
                            }}
                        >
                            <CarouselContent>
                                <CarouselItem>
                                    <Image src="https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/EQUIPE%2001.PNG?alt=media&token=5ff731bf-e316-4f7d-88ba-e5243949b053" alt="Equipe CP Marketing 1" width={300} height={500} className="rounded-lg relative z-10 object-cover aspect-[3/5]" data-ai-hint="marketing team" />
                                </CarouselItem>
                                <CarouselItem>
                                    <Image src="https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/EQUIPE%2001_200x200.PNG?alt=media&token=bda95365-da8e-47f3-8853-499dd325c51d" alt="Equipe CP Marketing 2" width={300} height={500} className="rounded-lg relative z-10 object-cover aspect-[3/5]" data-ai-hint="marketing team" />
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    </div>
                    <div className="space-y-4 text-center md:text-left">
                        <p className="text-primary font-semibold uppercase tracking-widest text-sm">SOBRE NÓS</p>
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">A CP Marketing: Sua Agência Completa com Estúdio de Podcast</h2>
                        <p className="text-muted-foreground text-sm md:text-base">
                            Na CP Marketing, oferecemos soluções de marketing completas e integradas para sua marca. Além dos nossos serviços de marketing digital, design e consultoria estratégica, contamos com um estúdio de podcast totalmente equipado. Transforme suas ideias em conteúdo de alta qualidade e alcance resultados excepcionais com nossa expertise e tecnologia de ponta.
                        </p>
                         <p className="text-primary font-bold text-base md:text-lg">
                           Vamos elevar sua comunicação para o próximo nível!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
