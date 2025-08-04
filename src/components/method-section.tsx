import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const methods = [
    {
        step: "(001)",
        title: "Plano de Marketing",
        description: "Estratégias, ações e objetivos são componentes importantes de um plano de marketing.",
    },
    {
        step: "(002)",
        title: "Execução do Trabalho",
        description: "Implementação da estratégia.",
    },
    {
        step: "(003)",
        title: "Crescimento & Escala",
        description: "Escalada e Expansão: Aumentando a produção e ampliando a oferta de serviços e produtos.",
    }
]

export default function MethodSection() {
    return (
        <section id="method" className="w-full py-12 md:py-24 lg:py-32 bg-secondary animate-fade-in animation-delay-300">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="flex flex-row justify-between items-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-left bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Conheça nosso método</h2>
                 </div>
                 <div className="space-y-4">
                     {methods.map((method) => (
                        <div key={method.step} className="border border-border rounded-lg p-6">
                            <div className="grid md:grid-cols-3 gap-8 items-center">
                                <div className="flex items-center gap-4">
                                     <h3 className="text-xl font-semibold flex items-center gap-2">
                                        {method.title} <ArrowRight className="text-primary h-5 w-5" />
                                     </h3>
                                </div>
                                <div className="md:col-span-2 flex justify-between items-center">
                                     <p className="text-muted-foreground">{method.description}</p>
                                     <span className="text-muted-foreground font-mono text-lg">{method.step}</span>
                                </div>
                            </div>
                        </div>
                     ))}
                 </div>
                 <div className="text-center mt-12">
                     <Button size="lg">Saiba mais</Button>
                 </div>
            </div>
        </section>
    )
}
