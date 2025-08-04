import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"

const testimonials = [
  {
    quote: "A Agência Vitrines transformou nossa presença online. O novo site é incrível e os resultados de marketing foram imediatos. Profissionalismo e criatividade definem a equipe.",
    name: "Maria Oliveira",
    company: "CEO da InovaTech",
    avatar: "https://placehold.co/100x100",
    hint: "business woman"
  },
  {
    quote: "Trabalhar com a Vitrines foi uma experiência fantástica. Eles entenderam perfeitamente nossa visão e a executaram com maestria. Recomendo fortemente!",
    name: "João Santos",
    company: "Diretor da Art & Decor",
    avatar: "https://placehold.co/100x100",
    hint: "business man"
  },
  {
    quote: "O nível de detalhe e comprometimento da equipe é impressionante. Nosso aplicativo ficou melhor do que imaginávamos. Uma parceria de grande sucesso.",
    name: "Fernanda Lima",
    company: "Gerente de Produto na Saúde App",
    avatar: "https://placehold.co/100x100",
    hint: "smiling woman"
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">O Que Nossos Clientes Dizem</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            O sucesso dos nossos clientes é a nossa maior recompensa.
          </p>
        </div>
        <Carousel className="w-full max-w-4xl mx-auto"
            opts={{
                align: "start",
                loop: true,
            }}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-4">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                      <p className="text-lg md:text-xl italic mb-6">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                           <p className="font-bold">{testimonial.name}</p>
                           <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
