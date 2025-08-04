import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Radio, TrendingUp, Users, Youtube, Award, PlayCircle, Settings, Globe } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "Marketing em mídias sociais",
    description: "Promoção de empresa/marca nas mídias sociais para aumentar presença e alcance. Oferecemos criação de conteúdo, anúncios pagos, análise de métricas e interação com a comunidade.",
    icon: <Briefcase className="h-6 w-6 text-primary" />
  },
  {
    title: "Estúdio de Podcast",
    description: "Tudo que você precisa para produzir um podcast de qualidade sonora, visual e de edição.",
    icon: <Radio className="h-6 w-6 text-primary" />
  },
  {
    title: "Gestão de Tráfego",
    description: "Gestão de tráfego em anúncios Google e Facebook. Oferecemos esse serviço para aumentar o sucesso da sua campanha publicitária.",
    icon: <TrendingUp className="h-6 w-6 text-primary" />
  },
  {
    title: "Configuração do Google Meu Negócio e SEO",
    description: "Estratégia para melhorar a visibilidade e presença on-line da sua empresa no Google, incluindo a otimização o site para mecanismos de busca.",
    icon: <Settings className="h-6 w-6 text-primary" />
  },
  {
    title: "Gestão de canal no YouTube",
    description: "Aumentar a visibilidade e sucesso do seu conteúdo no maior site de compartilhamento de vídeos do mundo.",
    icon: <Youtube className="h-6 w-6 text-primary" />
  },
  {
    title: "Criação de Sites",
    description: "Oferecemos criação de sites personalizados e profissionais para ajudar a construir e fortalecer a presença on-line da sua empresa ou marca.",
    icon: <Globe className="h-6 w-6 text-primary" />
  }
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
            <Image src="/FOTO M.png" alt="Woman pointing down" width={300} height={300} className="w-48 h-48 md:w-64 md:h-64 object-contain" data-ai-hint="woman pointing" />
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-6xl lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="p-6 text-left transition-all duration-300 border border-primary/20 hover:border-primary bg-secondary/50 rounded-lg">
                <div className="flex justify-start mb-4">
                    <div className="p-3 bg-primary/10 border-2 border-primary rounded-full">
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
