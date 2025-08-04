import Image from 'next/image';
import { Instagram, Youtube, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'Instagram',
    icon: <Instagram className="h-6 w-6 text-primary-foreground" />,
    href: 'https://www.instagram.com/cpmarketingbr',
  },
  {
    name: 'Youtube',
    icon: <Youtube className="h-6 w-6 text-primary-foreground" />,
    href: 'https://www.youtube.com/@cpmarketingbr',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-foreground animate-fade-in animation-delay-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">(62) 99152-8778</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">marketingcpgo@gmail.com</span>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-primary mt-1" />
              <span className="text-muted-foreground">
                Rua 239 Quadra 532 Lote 19 - Jardim América - Goiânia - Próximo ao Ginasio e ao lado do Condomínio Muy Bueno
              </span>
            </div>
            <div className="flex items-center gap-4">
                <a href="https://wa.me/556291528778" target="_blank" rel="noopener noreferrer" className="p-2 bg-green-500 rounded-full hover:bg-green-600 transition-colors">
                    <MessageCircle className="h-6 w-6 text-white" />
                </a>
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary/80 rounded-full hover:bg-primary transition-colors">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="border border-primary/50 rounded-lg p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-4">
               <Image src="/LOGO REDONDA.svg" alt="CP Marketing Logo" width={60} height={60} data-ai-hint="logo" />
               <h3 className="text-lg md:text-xl font-bold">Marketing Digital &amp; Podcast</h3>
            </div>
            <p className="text-muted-foreground text-sm md:text-base">
              Fale com nossa equipe! Estamos prontos para atender suas necessidades e elevar o sucesso de sua empresa.
            </p>
          </div>
        </div>
        <div className="mt-16">
           <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.3553139929386!2d-49.2824598248502!3d-16.709113984066967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef187c5af97ff%3A0xb9e135695502383b!2sCP%20Marketing%20Digital%20e%20Podcast!5e0!3m2!1spt-BR!2sbr!4v1754332215763!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg h-[300px] md:h-[450px]">
            </iframe>
        </div>
      </div>
    </section>
  );
}
