import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function PodcastStudio() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                     <p className="text-primary font-semibold uppercase tracking-widest text-sm">UM ESTÚDIO EXCLUSIVO</p>
                    <h2 className="text-3xl md:text-4xl font-light">COM A CARA DO SEU CONTEÚDO</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                    <div className="space-y-4">
                        <p className="text-white/80">
                            Apresentamos o estúdio da CP Marketing, um espaço pensado especialmente para você que deseja criar podcasts autênticos e de qualidade. Com um ambiente que traduz a essência da sua marca, oferecemos a estrutura ideal para dar voz às suas ideias e conectar sua mensagem ao público certo. Venha para um estúdio que fala a sua língua e transforme suas gravações em experiências únicas e cativantes.
                        </p>
                         <Button asChild>
                            <Link href="#contact">Saiba mais</Link>
                        </Button>
                    </div>
                    <div>
                        <Image src="https://placehold.co/600x400.png" alt="Estúdio de Podcast" width={600} height={400} className="rounded-lg" data-ai-hint="podcast studio" />
                    </div>
                </div>

                <div className="text-center mb-12">
                     <p className="text-primary font-semibold uppercase tracking-widest text-sm">UMA DICA</p>
                    <h2 className="text-3xl md:text-4xl font-light">VENHA CONHECER NOSSO ESTÚDIO, AGENDE UMA VISITA</h2>
                </div>
                 <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                         <Image src="https://placehold.co/600x400.png" alt="Equipe CP Marketing" width={600} height={400} className="rounded-lg" data-ai-hint="marketing team" />
                    </div>
                    <div className="space-y-4">
                        <p className="text-white/80">
                            Na CP Marketing, você encontra um estúdio de podcast completo, com estrutura profissional para gravações ou transmissões ao vivo. Oferecemos áudio cristalino, com microfones de alta performance e tratamento acústico, e vídeo em altíssima qualidade, com câmeras e iluminação profissional.
                        </p>
                    </div>
                </div>

                 <div className="text-center mt-16">
                     <p className="text-white/80 max-w-2xl mx-auto">
                        Nossa equipe cuida de toda a produção e edição, entregando um resultado envolvente e pronto para impactar. Seja você criador, empresa ou influenciador, aqui seu conteúdo ganha forma com excelência.
                     </p>
                      <Button asChild className="mt-6">
                        <Link href="#contact">Entre em contato agora</Link>
                    </Button>
                 </div>

            </div>
        </section>
    )
}
