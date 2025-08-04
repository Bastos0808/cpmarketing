import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const teamMembers = [
  {
    name: "Ana Silva",
    role: "CEO & Fundadora",
    image: "https://placehold.co/200x200",
    hint: "professional woman"
  },
  {
    name: "Carlos Pereira",
    role: "Diretor de Criação",
    image: "https://placehold.co/200x200",
    hint: "professional man"
  },
  {
    name: "Juliana Costa",
    role: "Líder de Desenvolvimento",
    image: "https://placehold.co/200x200",
    hint: "professional woman"
  },
  {
    name: "Marcos Lima",
    role: "Especialista em Marketing",
    image: "https://placehold.co/200x200",
    hint: "professional man"
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Nossa Equipe</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Conheça os talentos por trás dos nossos projetos de sucesso.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-6xl">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center transition-transform transform hover:scale-105 duration-300">
              <CardContent className="flex flex-col items-center p-6">
                <Avatar className="w-32 h-32 mb-4 border-4 border-primary">
                  <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardHeader className="p-0">
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary text-base">{member.role}</CardDescription>
                </CardHeader>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
