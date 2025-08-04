import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export default function AboutSection() {
    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative w-full max-w-md mx-auto">
                        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-lg transform -rotate-3"></div>
                        <Image src="https://placehold.co/400x450" alt="Carlos C" width={400} height={450} className="rounded-lg relative z-10 object-cover" data-ai-hint="man portrait" />
                    </div>
                    <div className="space-y-4">
                        <p className="text-primary font-semibold uppercase tracking-widest">Sobre Nós</p>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Sua Agência de Marketing Digital de Confiança</h2>
                        <p className="text-muted-foreground">
                            Na vanguarda do marketing digital, a CP Marketing se destaca por sua abordagem inovadora, integrando estratégias de conteúdo dinâmicas para fortalecer a presença de marca e o engajamento do cliente. Nossa missão é clara: elevar sua comunicação a um novo patamar de excelência.
                        </p>
                         <p className="text-muted-foreground">
                           Vamos elevar sua comunicação para o próximo nível!
                        </p>
                        <Button asChild>
                            <Link href="#">Saiba mais</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
