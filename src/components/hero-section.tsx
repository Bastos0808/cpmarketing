import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import WarpSpeedBackground from "./warp-speed-background"

export default function HeroSection() {
  return (
    <section id="hero" className="w-full relative overflow-hidden h-screen flex items-center justify-center">
        <WarpSpeedBackground />
        <div className="container mx-auto px-4 md:px-6 z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-24 items-center">
            <div className="flex flex-col justify-center space-y-4 md:space-y-6 text-center lg:text-left">
                <p className="text-primary font-semibold uppercase tracking-widest text-sm md:text-base">A Agência do seu Próximo Nível</p>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Uma agência de marketing digital totalmente integrada.
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-lg text-sm mx-auto lg:mx-0">
                A CP Marketing é mais do que apenas uma agência. Somos o seu parceiro de crescimento de negócios. Obtenha estratégias de marketing personalizadas e orientadas por dados que o ajudarão a expandir seus negócios e dominar seu setor.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                <Button asChild size="lg">
                    <Link href="#contact">Agende sua Consultoria Gratuita</Link>
                </Button>
                </div>
            </div>
            <div className="relative flex items-center justify-center">
                <Image
                src="/LOGO%20REDONDA.svg"
                alt="CP Marketing Logo"
                width={500}
                height={500}
                className="z-10 w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
                data-ai-hint="logo"
                />
            </div>
            </div>
        </div>
    </section>
  )
}
