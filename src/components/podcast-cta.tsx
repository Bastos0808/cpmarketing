import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { MapPin } from "lucide-react";

export default function PodcastCTA() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <div>
                            <p className="text-primary font-semibold uppercase tracking-widest text-sm">Podcast sob medida para você</p>
                            <h2 className="text-3xl md:text-4xl font-light mt-2">Conheça o Estúdio de Podcast da CP Marketing</h2>
                        </div>
                        <p className="text-white/80">
                            Faça um tour pelo estúdio de podcast da CP Marketing e conheça o espaço ideal para dar vida ao seu conteúdo. Equipado com tecnologia de ponta e um ambiente que inspira criatividade, nosso estúdio é o lugar perfeito para produzir episódios envolventes e profissionais. Seja para gravações individuais ou em grupo, oferecemos conforto, qualidade de som e uma atmosfera que reflete a identidade do seu podcast. Venha ver de perto onde suas ideias se transformam em conversas que conectam!
                        </p>
                        <div className="flex items-start gap-4">
                            <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <p className="text-primary text-sm">
                                Rua C-239, Quadra 532, Lote 19 - Setor Jardim América, ao lado do condomínio Muy Bueno, próximo ao ginásio, Goiânia, GO, Brasil
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image src="/FOTO FB.png" alt="Carlos, CEO da CP Marketing" width={500} height={500} className="rounded-lg" data-ai-hint="man portrait" />
                         <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg -mt-8">
                            <Link href="#contact">Entre em contato</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
