import Image from 'next/image';
import { Instagram, Youtube, Mail, MapPin, Phone, Facebook, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'Whatsapp',
    icon: <MessageCircle className="h-6 w-6 text-[#25D366]" />,
    href: '#',
  },
  {
    name: 'Instagram',
    icon: <Instagram className="h-6 w-6 text-[#E4405F]" />,
    href: '#',
  },
  {
    name: 'Facebook',
    icon: <Facebook className="h-6 w-6 text-[#1877F2]" />,
    href: '#',
  },
  {
    name: 'Youtube',
    icon: <Youtube className="h-6 w-6 text-[#FF0000]" />,
    href: '#',
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
                Rua C-239 Quadra 532 Lote 19 - Jardim América - Goiânia - Próximo ao Ginasio e ao lado do Condomínio Muy Bueno
              </span>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="border border-primary/50 rounded-lg p-8 space-y-4">
            <div className="flex items-center gap-4">
               <Image src="/LOGO REDONDA.svg" alt="CP Marketing Logo" width={60} height={60} data-ai-hint="logo" />
               <h3 className="text-xl font-bold">Marketing Digital &amp; Podcast</h3>
            </div>
            <p className="text-muted-foreground">
              Fale com nossa equipe! Estamos prontos para atender suas necessidades e elevar o sucesso de sua empresa.
            </p>
          </div>
        </div>
        <div className="mt-16">
           <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.583543161485!2d-49.28895068892189!3d-16.70243477810363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1e056150247%3A0x6a4c6de59521364!2sR.%20C-237%2C%20239%20-%20Jardim%20Am%C3%A9rica%2C%20Goi%C3%A2nia%20-%20GO%2C%2074290-140!5e0!3m2!1sen!2sbr!4v1722449652565!5m2!1sen!2sbr" 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg">
            </iframe>
        </div>
      </div>
    </section>
  );
}
