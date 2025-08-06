import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Mic, BarChart, Users } from "lucide-react";

const benefits = [
    {
        icon: <Mic className="h-6 w-6 text-primary" />,
        text: "Posicione-se como especialista no seu setor."
    },
    {
        icon: <BarChart className="h-6 w-6 text-primary" />,
        text: "Gere conteúdo de valor que atrai e engaja."
    },
    {
        icon: <Users className="h-6 w-6 text-primary" />,
        text: "Crie uma conexão direta e autêntica com seu público."
    }
]

export default function PodcastAuthority() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-primary font-semibold uppercase tracking-widest text-sm">Construção de autoridade</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Vire uma Referência no seu Mercado</h2>
                        <p className="text-white/80">
                            Ter um podcast é a forma mais eficaz de construir autoridade e se posicionar como um especialista em seu nicho. Ao compartilhar seu conhecimento e suas experiências, você não apenas educa seu público, mas também cria uma conexão genuína e duradoura, estabelecendo confiança e se tornando a principal referência na sua área.
                        </p>
                        <div className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    {benefit.icon}
                                    <p className="text-white/90">{benefit.text}</p>
                                </div>
                            ))}
                        </div>
                         <Button asChild size="lg" className="mt-4">
                            <Link href="#contato">Quero construir minha autoridade</Link>
                        </Button>
                    </div>
                     <div className="relative flex items-center justify-center">
                        <Image 
                            src="/IMG_3107.png" 
                            alt="Mulher falando em um microfone de podcast" 
                            width={600} 
                            height={600} 
                            className="rounded-lg shadow-2xl shadow-primary/20"
                            data-ai-hint="podcast interview" />
                    </div>
                </div>
            </div>
        </section>
    );
}
