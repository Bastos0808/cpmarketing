import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary-foreground/90 bg-primary p-4 rounded-lg shadow-lg">
              Criamos Vitrines Digitais que Cativam
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Somos uma agência de criação que transforma ideias em experiências digitais memoráveis. Da estratégia à execução, impulsionamos o crescimento da sua marca.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#contact">Vamos Conversar</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#portfolio">Nosso Trabalho</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://placehold.co/600x400"
              alt="Hero image"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl object-cover"
              data-ai-hint="creative workspace"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
