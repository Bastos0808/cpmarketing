import PodcastGuestRdstationForm from "./podcast-guest-rdstation-form";
import { Badge } from "./ui/badge";

export default function PodcastGuestPage() {
    return (
        <section className="w-full min-h-screen py-12 md:py-24 lg:py-32 bg-background relative flex items-center justify-center">
            <div className="absolute inset-0 bg-grid-orange-900/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col justify-center space-y-6">
                        <Badge variant="outline" className="w-fit border-primary text-primary">VAGAS LIMITADAS</Badge>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                            Torne-se uma Autoridade no seu Mercado: Participe do Nosso Podcast
                        </h1>
                        <p className="max-w-[600px] text-gray-300 md:text-lg text-sm">
                            Você é um especialista em sua área com uma história para contar ou insights valiosos para compartilhar? O nosso podcast é a plataforma ideal para você expandir sua influência, conectar-se com um novo público e consolidar sua marca como referência.
                        </p>
                        <p className="max-w-[600px] text-gray-300 md:text-lg text-sm">
                            Esta é a sua chance de ganhar visibilidade e reconhecimento em um episódio totalmente dedicado a você.
                        </p>
                         <p className="font-bold text-primary text-lg pt-4">
                           Preencha o formulário para garantir sua participação gratuita. Nossa equipe entrará em contato em breve.
                        </p>
                    </div>
                    <div className="w-full h-auto bg-secondary/50 border border-border rounded-lg flex items-center justify-center p-4">
                        <PodcastGuestRdstationForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
