import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const methods = [
    {
        title: "Plano de Marketing",
        description: "Estratégias, ações e objetivos são componentes importantes de um plano de marketing.",
    },
    {
        title: "Execução do Trabalho",
        description: "Implementação da estratégia.",
    },
    {
        title: "Crescimento & Escala",
        description: "Escalada e Expansão: Aumentando a produção e ampliando a oferta de serviços e produtos.",
    }
]

export default function MethodSection() {
    return (
        <section id="method" className="w-full py-12 md:py-24 lg:py-32 bg-secondary animate-fade-in animation-delay-300">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Conheça nosso método</h2>
                 </div>
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center">
                        <Image 
                            src="https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/FOTO%20CAIO.webp?alt=media&token=6136e8ef-83aa-44fd-b653-54c246663785" 
                            alt="Caio, especialista em marketing da CP Marketing"
                            width={500}
                            height={500}
                            className="rounded-lg"
                            data-ai-hint="man portrait"
                        />
                    </div>
                    <div className="space-y-4">
                        {methods.map((method, index) => (
                            <div key={index} className="border border-border rounded-lg p-4 md:p-6">
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                                    <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2 w-full md:w-1/3">
                                        {method.title} <ArrowRight className="text-primary h-5 w-5 hidden md:block ml-auto" />
                                    </h3>
                                    <p className="text-muted-foreground text-sm md:text-base w-full md:w-2/3">{method.description}</p>
                                </div>
                            </div>
                        ))}
                         <div className="text-center md:text-left mt-8">
                             <Button size="lg" asChild>
                                <Link href="/contato">
                                    Saiba mais
                                </Link>
                             </Button>
                         </div>
                    </div>
                 </div>
            </div>
        </section>
    )
}
