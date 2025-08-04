import Image from "next/image";
import { Instagram, Youtube, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <div className="flex flex-col gap-4">
                    <Image src="/LOGO%20HORIZONTAL.svg" alt="CP Marketing Logo" width={200} height={60} data-ai-hint="logo" />
                    <div>
                        <p className="text-muted-foreground">Marketing Digital & Podcast</p>
                    </div>
                </div>
                <p className="text-muted-foreground">Vamos elevar sua comunicação para o próximo nível.</p>
                
                <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Contato</h4>
                    <div className="flex items-center gap-4">
                        <Mail className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">contato@cpmarketing.com</span>
                    </div>
                     <div className="flex items-center gap-4">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">Rua X, 123 - Cidade YZ</span>
                    </div>
                </div>

                <div className="flex gap-4">
                    <Button variant="outline" size="icon" asChild>
                        <Link href="#"><Instagram className="h-5 w-5" /></Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                        <Link href="#"><Youtube className="h-5 w-5" /></Link>
                    </Button>
                     <Button variant="outline" size="icon" asChild>
                        <Link href="#"><Mail className="h-5 w-5" /></Link>
                    </Button>
                </div>
            </div>
            <div>
                 <Image src="https://placehold.co/600x400" alt="Map" width={600} height={400} className="w-full rounded-lg" data-ai-hint="map location" />
            </div>
        </div>
      </div>
    </section>
  )
}
