import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function PodcastVisit() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-white relative">
            <div className="absolute inset-0 bg-grid-orange-900/10"></div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <p className="text-primary font-semibold uppercase tracking-widest text-sm">— UMA DICA —</p>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">VENHA CONHECER NOSSO ESTÚDIO, <br /> AGENDE UMA VISITA</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6 text-left">
                        <p className="text-white/80">
                            Na CP Marketing, você encontra um estúdio de podcast completo, com estrutura profissional para gravações ou transmissões ao vivo. Oferecemos áudio cristalino, com microfones de alta performance e tratamento acústico, e vídeo em altíssima qualidade, com câmeras e iluminação profissional.
                        </p>
                        <div className="flex flex-col items-center">
                             <Image src="/FOTO GB.png" alt="Homem apontando para baixo" width={400} height={400} className="w-full max-w-sm" data-ai-hint="man pointing" />
                             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg -mt-1">
                                <Link href="#contact">ENTRE EM CONTATO AGORA</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="space-y-6 text-left">
                        <Image src="/PODCAST 02.png" alt="Estúdio de Podcast da CP Marketing" width={600} height={400} className="rounded-lg" data-ai-hint="podcast studio" />
                        <p className="text-white/80">
                            Nossa equipe cuida de toda a produção e edição, entregando um resultado envolvente e pronto para impactar. Seja você criador, empresa ou influenciador, aqui seu conteúdo ganha forma com excelência.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
