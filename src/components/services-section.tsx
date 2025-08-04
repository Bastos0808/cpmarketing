import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Radio, TrendingUp, Users, Youtube, Award, PlayCircle } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "Branding em Mídias Sociais",
    description: "Criamos e gerenciamos sua marca nas redes sociais, aumentando o reconhecimento e o engajamento do seu público-alvo.",
    icon: <Briefcase className="h-6 w-6 text-primary" />
  },
  {
    title: "Edição de Podcast",
    description: "Produção e edição profissional de podcasts para garantir a melhor qualidade de áudio e conteúdo para seus ouvintes.",
    icon: <Radio className="h-6 w-6 text-primary" />
  },
  {
    title: "Gestão de Tráfego",
    description: "Planejamos e executamos campanhas de tráfego pago para atrair mais clientes e aumentar suas vendas.",
    icon: <TrendingUp className="h-6 w-6 text-primary" />
  },
  {
    title: "Criação/Análise de Persona",
    description: "Desenvolvemos a persona ideal para o seu negócio, garantindo que suas estratégias de marketing sejam eficazes.",
    icon: <Users className="h-6 w-6 text-primary" />
  },
  {
    title: "Gestão de Canal no YouTube",
    description: "Gerenciamos seu canal no YouTube, desde a criação de conteúdo até a otimização para alcançar mais visualizações.",
    icon: <Youtube className="h-6 w-6 text-primary" />
  },
  {
    title: "Treinamentos e Mentoria",
    description: "Oferecemos treinamentos e mentorias personalizadas para capacitar sua equipe e alavancar seus resultados.",
    icon: <Award className="h-6 w-6 text-primary" />
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
           <p className="text-primary font-semibold uppercase tracking-widest">Nossos Serviços</p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Serviços de Alto Impacto para Levar seu Negócio ao Próximo Nível</h2>
        </div>
         <div className="flex justify-center mb-12">
            <Image src="https://placehold.co/300x300" alt="Woman pointing down" width={300} height={300} className="w-48 h-48 md:w-64 md:h-64 object-cover" data-ai-hint="woman pointing" />
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-6xl lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="p-6 text-left transition-all duration-300 border border-primary/20 hover:border-primary bg-secondary/50 rounded-lg">
                <div className="flex justify-start mb-4">
                    <div className="p-2 border-2 border-primary rounded-full">
                        {service.icon}
                    </div>
                </div>
              <CardHeader className="p-0">
                <CardTitle className="mb-2 text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
            <Button size="lg" className="uppercase">Entre em contato agora</Button>
        </div>
      </div>
    </section>
  )
}
