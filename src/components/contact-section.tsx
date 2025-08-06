import Image from 'next/image';
import { Instagram, Youtube, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

const socialLinks = [
  {
    name: 'Instagram',
    icon: <Instagram className="h-6 w-6 text-white" />,
    href: 'https://www.instagram.com/cpmarketingbr',
    className: "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
  },
  {
    name: 'Youtube',
    icon: <Youtube className="h-6 w-6 text-white" />,
    href: 'https://www.youtube.com/@cpmarketingbr',
    className: "bg-red-600 hover:bg-red-700"
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-foreground animate-fade-in animation-delay-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Fale Conosco</h2>
            <p className="text-muted-foreground mt-2">Estamos prontos para atender suas necessidades.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground text-sm md:text-base">(62) 99152-8778</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground text-sm md:text-base">comercial@cpmarketing.com.br</span>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-primary mt-1" />
              <span className="text-muted-foreground text-sm md:text-base">
                Rua 239 Quadra 532 Lote 19 - Jardim América - Goiânia - Próximo ao Ginasio e ao lado do Condomínio Muy Bueno
              </span>
            </div>
             <div className="flex items-center gap-4 pt-4">
                <a href="https://wa.me/556291528778" target="_blank" rel="noopener noreferrer" className="p-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors">
                    <MessageCircle className="h-7 w-7 text-white" />
                </a>
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full transition-colors ${social.className}`}>
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-6 md:p-8 space-y-4 border border-primary/20 rounded-lg">
             <Image src="/LOGO REDONDA.svg" alt="CP Marketing Logo" width={80} height={80} data-ai-hint="logo" />
             <h3 className="text-xl md:text-2xl font-bold">Pronto para começar?</h3>
            <p className="text-muted-foreground text-sm max-w-sm">
                Agende uma consultoria gratuita e descubra como podemos transformar a presença digital do seu negócio.
            </p>
            <Button asChild size="lg" className="mt-4">
                <Link href="/contato">Agendar Consultoria</Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 md:mt-16">
           <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!m12!1m3!1d3821.3553139929386!2d-49.2824598248502!3d-16.709113984066967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef187c5af97ff%3A0xb9e135695502383b!2sCP%20Marketing%20Digital%20e%20Podcast!5e0!3m2!1spt-BR!2sbr!4v1754332215763!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="300"
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg md:h-[400px]">
            </iframe>
        </div>
      </div>
    </section>
  );
}
