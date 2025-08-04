import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export default function AboutSection() {
    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative flex items-center justify-center max-w-md mx-auto">
                        <div className="absolute w-[110%] h-[110%] transform scale-x-[-1] scale-y-[1]">
                            <div className="absolute inset-[-10%] border-2 border-primary/50 rounded-full animate-spin-slow"></div>
                            <div className="absolute inset-[-2%] border-2 border-primary/50 rounded-full animate-spin-slow-reverse"></div>
                            <div className="absolute top-[15%] right-[5%] w-3 h-3 bg-primary transform rotate-45"></div>
                            <div className="absolute bottom-[15%] left-[5%] w-3 h-3 bg-primary transform rotate-45"></div>
                        </div>
                        <Image src="/FOTO CAIO.jpg" alt="Carlos C" width={400} height={450} className="rounded-lg relative z-10 object-cover" data-ai-hint="man portrait" />
                    </div>
                    <div className="space-y-6">
                        <p className="text-primary font-semibold uppercase tracking-widest">SOBRE NÓS</p>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">A CP Marketing: Sua Agência Completa com Estúdio de Podcast</h2>
                        <p className="text-muted-foreground">
                            Na CP Marketing, oferecemos soluções de marketing completas e integradas para sua marca. Além dos nossos serviços de marketing digital, design e consultoria estratégica, contamos com um estúdio de podcast totalmente equipado. Transforme suas ideias em conteúdo de alta qualidade e alcance resultados excepcionais com nossa expertise e tecnologia de ponta.
                        </p>
                         <p className="text-primary font-bold text-xl">
                           Vamos elevar sua comunicação para o próximo nível!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Add animation keyframes to globals.css
// @keyframes spin-slow {
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// }
// @keyframes spin-slow-reverse {
//   from { transform: rotate(0deg); }
//   to { transform: rotate(-360deg); }
// }
// animation: {
//   'spin-slow': 'spin-slow 15s linear infinite',
//   'spin-slow-reverse': 'spin-slow-reverse 15s linear infinite',
// }