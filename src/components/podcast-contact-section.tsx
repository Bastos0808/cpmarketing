import PodcastRdstationForm from './podcast-rdstation-form';

export default function PodcastContactSection() {
    return (
        <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-background relative">
            <div className="absolute inset-0 bg-grid-orange-900/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <p className="text-primary font-semibold uppercase tracking-widest text-sm">CHEGA DE ESPERAR</p>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Entre em contato agora!</h2>
                    <p className="text-muted-foreground md:text-lg">
                        Você tem uma história inspiradora, uma ideia revolucionária ou um projeto que pode transformar vidas? O momento de compartilhá-la chegou! Preencha o formulário abaixo e vamos começar.
                    </p>
                </div>
                <div className="mt-8 md:mt-12 max-w-xl mx-auto">
                    <PodcastRdstationForm />
                </div>
            </div>
        </section>
    );
}
