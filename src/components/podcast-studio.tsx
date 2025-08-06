import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function PodcastStudio() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-8">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center w-full">
                        <h2 className="text-3xl md:text-4xl font-light max-w-md">Um estúdio exclusivo com a cara do seu conteúdo</h2>
                        <Image src="/LOGO REDONDA.svg" alt="CP Marketing Logo" width={80} height={80} className="hidden sm:block" data-ai-hint="logo" />
                    </div>

                    <div className="w-full max-w-4xl">
                        <Image src="/PODCAST 01.png" alt="Estúdio de Podcast" width={1200} height={800} className="rounded-lg w-full" data-ai-hint="podcast studio" />
                    </div>

                    <div className="max-w-3xl space-y-6">
                        <p className="text-white/80">
                            Apresentamos o estúdio da CP Marketing, um espaço pensado para você que deseja criar podcasts autênticos e de qualidade. Ter um podcast é uma ferramenta poderosa para construir autoridade em seu nicho, permitindo que você compartilhe conhecimento e se conecte diretamente com seu público. Oferecemos a estrutura ideal para dar voz às suas ideias e transformar suas gravações em experiências únicas.
                        </p>
                        <Button asChild>
                            <Link href="#contato">Saiba mais</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
