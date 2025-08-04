import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import VantaBackground from "./vanta-background"

export default function HeroSection() {
  return (
    <section id="hero" className="w-full relative overflow-hidden">
        <VantaBackground>
            <div className="container mx-auto px-4 md:px-6 z-10 py-20 md:py-32 lg:py-40">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-24 items-center">
                <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
                    <p className="text-primary font-semibold uppercase tracking-widest">A Agência do seu Próximo Nível</p>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                    Uma agência de marketing digital totalmente integrada.
                    </h1>
                    <p className="max-w-[600px] text-gray-300 md:text-xl mx-auto lg:mx-0">
                    A CP Marketing é mais do que apenas uma agência. Somos o seu parceiro de crescimento de negócios. Obtenha estratégias de marketing personalizadas e orientadas por dados que o ajudarão a expandir seus negócios e dominar seu setor.
                    </p>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                    <Button asChild size="lg">
                        <Link href="#contact">Agende sua Sessão</Link>
                    </Button>
                    </div>
                </div>
                <div className="relative flex items-center justify-center">
                    <Image
                    src="/LOGO%20REDONDA.svg"
                    alt="CP Marketing Logo"
                    width={500}
                    height={500}
                    className="z-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
                    data-ai-hint="logo"
                    />
                </div>
                </div>
            </div>
      </VantaBackground>
    </section>
  )
}
