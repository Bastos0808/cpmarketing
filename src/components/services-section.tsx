import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { PenTool, CodeXml, Megaphone } from "lucide-react"

const services = [
  {
    icon: <PenTool className="h-10 w-10 text-accent" />,
    title: "Design e UX/UI",
    description: "Criamos interfaces intuitivas e designs atraentes que encantam os usuários e fortalecem sua marca.",
  },
  {
    icon: <CodeXml className="h-10 w-10 text-accent" />,
    title: "Desenvolvimento Web",
    description: "Construímos sites e aplicações robustas, performáticas e sob medida para as necessidades do seu negócio.",
  },
  {
    icon: <Megaphone className="h-10 w-10 text-accent" />,
    title: "Marketing Digital",
    description: "Planejamos e executamos estratégias de marketing digital para aumentar sua visibilidade e gerar resultados.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Nossos Serviços</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Oferecemos um leque completo de soluções para impulsionar sua presença digital.
          </p>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="p-6 text-center transition-all duration-300 hover:shadow-lg hover:border-primary">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <CardHeader className="p-0">
                <CardTitle className="mb-2 text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
