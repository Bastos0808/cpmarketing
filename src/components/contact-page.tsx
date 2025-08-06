import RdstationForm from "./rdstation-form";
import Image from "next/image";

export default function ContactPage() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative">
            <div className="absolute inset-0 bg-grid-orange-900/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    <div className="flex flex-col space-y-6 lg:col-span-2 h-full">
                        <div className="flex-grow">
                             <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                                Consultoria Gratuita
                            </h1>
                            <p className="text-xl font-semibold mt-2 text-white">Destrave o Potencial do seu Negócio Agora.</p>
                            <p className="max-w-[600px] text-gray-300 md:text-lg text-sm mt-4">
                                Sua marca tem uma história única, mas ela está sendo ouvida? Muitos negócios com grande potencial ficam para trás por não terem uma estratégia de marketing digital clara. Não deixe a incerteza e a falta de direção impedirem seu crescimento.
                            </p>
                            <p className="max-w-[600px] text-gray-300 md:text-lg text-sm mt-4">
                                Agende uma consultoria gratuita com nossos especialistas e receba um diagnóstico completo. Vamos identificar as oportunidades, corrigir as falhas e construir um plano de ação que gera resultados reais.
                            </p>
                        </div>
                        <div className="relative w-full h-[400px] md:h-[500px] lg:h-auto lg:flex-grow">
                            <Image 
                                src="https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/Prancheta%2013.png?alt=media&token=fa55bcd8-1973-43ad-be60-a1047b89a3b1" 
                                alt="Especialista em marketing analisando gráficos" 
                                fill
                                className="rounded-lg object-cover"
                                data-ai-hint="business analytics" 
                            />
                        </div>
                         <p className="font-bold text-primary text-lg pt-4">
                           Preencha o formulário e dê o primeiro passo para transformar sua presença online.
                        </p>
                    </div>
                    <div className="lg:col-span-3">
                        <RdstationForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
