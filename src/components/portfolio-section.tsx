import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "./ui/badge"

const portfolioItems = [
  {
    title: "E-commerce Inovador",
    description: "Plataforma de vendas online com foco na experiência do usuário e design responsivo.",
    image: "https://placehold.co/600x450",
    tags: ["UI/UX", "Desenvolvimento Web"],
    hint: "ecommerce website"
  },
  {
    title: "Identidade Visual Corporativa",
    description: "Criação de uma marca forte e coesa para uma startup de tecnologia.",
    image: "https://placehold.co/600x450",
    tags: ["Branding", "Design Gráfico"],
    hint: "brand identity"
  },
  {
    title: "Aplicativo Mobile de Saúde",
    description: "App para monitoramento de saúde e bem-estar, com interface intuitiva.",
    image: "https://placehold.co/600x450",
    tags: ["Mobile App", "UI/UX"],
    hint: "mobile application"
  },
  {
    title: "Campanha de Marketing Digital",
    description: "Estratégia de marketing de conteúdo que dobrou o engajamento do cliente.",
    image: "https://placehold.co/600x450",
    tags: ["Marketing", "SEO"],
    hint: "digital marketing"
  },
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Nosso Portfólio</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Confira alguns dos projetos que tivemos o prazer de desenvolver.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {portfolioItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="p-0">
                      <Image
                        src={item.image}
                        alt={`Projeto ${item.title}`}
                        width={600}
                        height={450}
                        className="object-cover w-full h-auto"
                        data-ai-hint={item.hint}
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                       <div className="flex flex-wrap gap-2 pt-2">
                        {item.tags.map(tag => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>
      </div>
    </section>
  )
}
