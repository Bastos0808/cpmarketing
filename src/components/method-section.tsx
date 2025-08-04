import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const methods = [
    {
        step: "01",
        title: "Plano de Marketing",
        description: "Na análise, mergulhamos nos dados para traçar o caminho do sucesso.",
    },
    {
        step: "02",
        title: "Execução do Mesmo",
        description: "A ação é o nosso forte.",
    },
    {
        step: "03",
        title: "Crescimento & Escala",
        description: "Expandimos suas fronteiras, garantindo um crescimento sustentável e impactante.",
    }
]

export default function MethodSection() {
    return (
        <section id="method" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center md:text-left mb-4 md:mb-0">Conheça nosso método</h2>
                    <Image src="/LOGO%20RETANGULAR.svg" alt="CP Marketing Logo" width={120} height={40} data-ai-hint="logo" />
                 </div>
                 <div className="space-y-8">
                     {methods.map((method) => (
                        <div key={method.step} className="border-b border-border pb-8">
                            <div className="grid md:grid-cols-3 gap-8 items-center">
                                <div className="flex items-center gap-4">
                                     <span className="text-primary font-bold text-2xl">{method.step}</span>
                                     <h3 className="text-xl font-semibold flex items-center gap-2">
                                        {method.title} <ArrowRight className="text-primary h-5 w-5" />
                                     </h3>
                                </div>
                                <div className="md:col-span-2">
                                     <p className="text-muted-foreground">{method.description}</p>
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
