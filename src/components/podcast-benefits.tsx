import { Award, BarChart, Tv, Users, Video, Edit, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { InteractiveCard } from "./interactive-card";
import './interactive-card.css';


const benefits = [
    {
        icon: <Award className="h-8 w-8 text-primary" />,
        title: "Construa sua Autoridade",
        description: "Posicione-se como um especialista em seu nicho de mercado, compartilhando seu conhecimento e experiência com um público engajado."
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Alcance um Novo Público",
        description: "Conecte-se com nossa audiência e expanda sua influência para além da sua rede atual, atraindo novos seguidores e potenciais clientes."
    },
    {
        icon: <BarChart className="h-8 w-8 text-primary" />,
        title: "Conteúdo de Alta Qualidade",
        description: "Receba um episódio de podcast profissionalmente gravado e editado, que você pode usar como um poderoso ativo de marketing."
    },
];

const includedItems = [
    {
        icon: <Video className="h-5 w-5 text-green-400" />,
        text: "Gravação de vídeo em 4K com múltiplas câmeras."
    },
    {
        icon: <Tv className="h-5 w-5 text-green-400" />,
        text: "Cenário profissional e iluminação de estúdio."
    },
    {
        icon: <Edit className="h-5 w-5 text-green-400" />,
        text: "Edição completa do episódio (cortes, trilha, etc.)."
    },
    {
        icon: <CheckCircle className="h-5 w-5 text-green-400" />,
        text: "Cortes e trechos otimizados para redes sociais."
    },
];

const steps = [
    {
        number: "01",
        title: "Inscrição",
        description: "Preencha o formulário nesta página com suas informações. É rápido e fácil."
    },
    {
        number: "02",
        title: "Análise",
        description: "Nossa equipe de curadoria avaliará seu perfil para garantir o alinhamento com nosso público."
    },
    {
        number: "03",
        title: "Agendamento",
        description: "Se aprovado, entraremos em contato para agendar o melhor dia e horário para a gravação."
    },
    {
        number: "04",
        title: "Gravação",
        description: "Venha ao nosso estúdio e compartilhe sua história. Nós cuidamos de toda a parte técnica."
    },
]

export default function PodcastBenefits() {
    return (
        <div className="bg-secondary text-white">
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-3xl font-bold tracking-tight">Por que participar do nosso podcast?</h2>
                        <p className="text-white/80 max-w-2xl mx-auto">Esta não é apenas uma entrevista. É uma oportunidade de criar um ativo valioso para sua marca pessoal ou empresarial.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center space-y-4 p-6 rounded-lg border border-primary/20 bg-background/50">
                                <div className="flex justify-center mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold">{benefit.title}</h3>
                                <p className="text-white/70">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 bg-background/60">
                 <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight">O que está incluso na sua participação?</h2>
                            <p className="text-white/80">Nós cuidamos de tudo para que você só precise se preocupar em compartilhar sua mensagem. Sua participação gratuita inclui:</p>
                             <ul className="space-y-4">
                                {includedItems.map((item, index) => (
                                    <li key={index} className="flex items-center gap-4">
                                        {item.icon}
                                        <span>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <InteractiveCard>
                                <div className="card-interactive bg-secondary/50 border border-border rounded-lg p-8">
                                    <div className="glow"></div>
                                    <h3 className="text-xl font-bold mb-4 text-center">Processo Simplificado</h3>
                                    <div className="space-y-6">
                                        {steps.map((step) => (
                                            <div key={step.number} className="flex items-start gap-4">
                                                <div className="text-2xl font-bold text-primary">{step.number}</div>
                                                <div>
                                                    <h4 className="font-semibold">{step.title}</h4>
                                                    <p className="text-sm text-white/70">{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </InteractiveCard>
                        </div>
                    </div>
                </div>
            </section>

             <section className="w-full py-12 md:py-24 lg:py-32 text-center">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tight">Pronto para se tornar uma referência?</h2>
                    <p className="text-white/80 mt-4 mb-8">As vagas são limitadas. Garanta a sua agora mesmo.</p>
                    <Button size="lg" asChild>
                        <Link href="#form">Quero participar gratuitamente</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
