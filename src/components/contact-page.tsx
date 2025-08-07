import Image from "next/image";
import RdstationForm from "./rdstation-form";

export default function ContactPage() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative">
            <div className="absolute inset-0 bg-grid-orange-900/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-primary font-headline">
                        Seu marketing está dando prejuízo? Nós apontamos a causa e a solução
                    </h2>
                </div>
                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    <div className="flex flex-col justify-start items-center space-y-6 lg:col-span-2 h-full order-last lg:order-first">
                        <div className="space-y-4 text-left w-full">
                            <h1 className="text-3xl font-bold text-primary">Consultoria Gratuita</h1>
                            <p className="text-xl font-semibold text-white">Destrave o Potencial do seu Negócio Agora.</p>
                            <p className="text-muted-foreground">
                                Sua marca tem uma história única, mas ela está sendo ouvida? Muitos negócios com grande potencial ficam para trás por não terem uma estratégia de marketing digital clara. Não deixe a incerteza e a falta de direção impedirem seu crescimento.
                            </p>
                            <p className="text-muted-foreground">
                                Agende uma consultoria gratuita com nossos especialistas e receba um diagnóstico completo. Vamos identificar as oportunidades, corrigir as falhas e construir um plano de ação que gera resultados reais.
                            </p>
                        </div>
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/Prancheta%202.png?alt=media&token=331337e0-2090-483e-9e96-22f900818663"
                            alt="Mulher apontando para o formulário"
                            width={400}
                            height={400}
                            className="w-full max-w-sm h-auto object-contain"
                            data-ai-hint="woman pointing"
                        />
                        <div className="border border-primary/50 rounded-lg p-4 text-center max-w-sm">
                            <p className="font-bold text-primary text-lg">
                               Preencha o formulário e dê o primeiro passo para transformar sua presença online.
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        <div className="w-full h-auto bg-secondary/50 border border-border rounded-lg flex items-center justify-center p-4">
                           <RdstationForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
