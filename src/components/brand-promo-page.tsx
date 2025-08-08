"use client";

import React from "react";
import BrandPromoRdstationForm from "./brand-promo-rdstation-form";
import Image from "next/image";
import { Tv, Users, BarChart } from "lucide-react";

export default function BrandPromoPage() {
    return (
        <section id="form" className="w-full min-h-screen py-12 md:py-24 lg:py-32 bg-background relative flex items-center justify-center">
            <div className="absolute inset-0 bg-grid-orange-900/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    <div className="flex flex-col space-y-8">
                        <div className="space-y-6">
                            <div className="inline-block px-6 py-2 text-lg font-bold uppercase tracking-wider text-primary-foreground bg-primary rounded-full shadow-[0_0_15px_hsl(var(--primary))]">
                                DIVULGAÇÃO GRATUITA
                            </div>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                                Exiba sua Marca Gratuitamente em Nosso Podcast para Nossa Audiência
                            </h1>
                            <p className="max-w-[600px] text-gray-300 md:text-lg text-sm">
                                Quer aumentar a visibilidade da sua empresa e fortalecer seu branding? Oferecemos uma oportunidade única: divulgue sua marca gratuitamente em nosso estúdio de podcast.
                            </p>
                            <div className="space-y-4">
                               <div className="flex items-start gap-4">
                                    <Tv className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-white">Como funciona?</h3>
                                        <p className="text-gray-400">Sua marca será exibida na televisão do nosso cenário durante as gravações, alcançando toda a nossa audiência no YouTube e Spotify.</p>
                                    </div>
                               </div>
                               <div className="flex items-start gap-4">
                                    <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                                     <div>
                                        <h3 className="font-bold text-white">Quem verá sua marca?</h3>
                                        <p className="text-gray-400">Nosso público é formado por empreendedores, profissionais de marketing e tomadores de decisão que buscam inovação e crescimento.</p>
                                    </div>
                               </div>
                                <div className="flex items-start gap-4">
                                    <BarChart className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                                     <div>
                                        <h3 className="font-bold text-white">O que você ganha?</h3>
                                        <p className="text-gray-400">Exposição contínua e associação da sua marca a um conteúdo de alta qualidade e credibilidade, sem nenhum custo.</p>
                                    </div>
                               </div>
                            </div>
                             <p className="font-bold text-primary text-lg pt-4">
                               Preencha o formulário abaixo para garantir o espaço da sua marca. As vagas são limitadas!
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-full bg-secondary/50 border border-border rounded-lg flex items-center justify-center p-4">
                        <BrandPromoRdstationForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
