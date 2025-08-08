"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Mic, Youtube, Globe, MapPin, Cpu } from "lucide-react";
import WarpSpeedBackground from "./warp-speed-background";
import { useSearchParams } from 'next/navigation';
import { useMemo } from "react";

// Assuming you'll have a Spotify icon component or a generic one
const SpotifyIcon = () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.613 14.128c-.15.24-.465.315-.705.165-2.04-1.245-4.62-1.515-7.725-.825-.285.06-.555-.105-.615-.39-.06-.285.105-.555.39-.615 3.345-.75 6.18-0.435 8.43 1.005.24.15.315.465.165.705zm.99-2.325c-.195.315-.57.42-.885.225-2.34-1.44-5.325-1.845-8.52-.99-.36.09-.705-.12-.795-.48s.12-.705.48-.795c3.54-.93 6.84-.48 9.555 1.185.315.195.42.57.225.885zm1.095-2.49c-2.7-1.68-6.915-1.89-9.945-1.035-.42.12-.855-.135-.975-.555s.135-.855.555-.975c3.39-.93 7.995-.675 11.085 1.245.375.225.51.69.285 1.065-.225.375-.69.51-1.065.285z"></path>
    </svg>
);


export default function LinksPage() {
    const searchParams = useSearchParams();

    const params = useMemo(() => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('utm_source', 'instagram');
        newParams.set('utm_medium', 'bio');
        return newParams.toString();
    }, [searchParams]);


    const links = useMemo(() => [
        {
            href: `/contato?${params}`,
            text: "Agende sua consultoria gratuita",
            icon: <Calendar className="h-5 w-5" />,
        },
        {
            href: `/podcast?${params}`,
            text: "Locação de Estúdio de Podcast",
            icon: <Mic className="h-5 w-5" />,
        },
        {
            href: `https://agencia.cpmarketingbr.com.br/acesso-ferramentas?${params}`,
            text: "Nossas Ferramentas de IA",
            icon: <Cpu className="h-5 w-5" />,
        },
        {
            href: "https://www.youtube.com/@cpmarketingbr",
            text: "Canal do Youtube",
            icon: <Youtube className="h-5 w-5" />,
        },
        {
            href: "https://open.spotify.com/show/5oPjV1XqY1aJ1eF9kH2I5f",
            text: "Spotify Podcast",
            icon: <SpotifyIcon />,
        },
        {
            href: `/?${params}`,
            text: "Nosso Site",
            icon: <Globe className="h-5 w-5" />,
        },
        {
            href: "https://www.google.com/maps/search/?api=1&query=CP+Marketing+Digital+e+Podcast",
            text: "Nossa Localização",
            icon: <MapPin className="h-5 w-5" />,
        },
    ], [params]);

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen text-foreground p-4 overflow-hidden">
            <WarpSpeedBackground />
            <div className="relative z-10 w-full max-w-md mx-auto">
                <div className="bg-black/50 border border-white/20 backdrop-blur-sm rounded-2xl p-6 md:p-8">
                    <div className="flex flex-col items-center space-y-6">
                        <Image
                            src="/LOGO REDONDA.svg"
                            alt="CP Marketing Logo"
                            width={120}
                            height={120}
                            className="object-contain"
                            data-ai-hint="logo"
                        />
                        <h1 className="text-xl font-bold text-white">
                           Faça seu negócio <span className="text-primary">Decolar</span>
                        </h1>
                        <div className="w-full space-y-4">
                            {links.map((link) => (
                                <Button
                                    key={link.href}
                                    asChild
                                    className="w-full bg-black/50 border border-white/20 backdrop-blur-sm hover:bg-white/20 text-white transition-colors duration-300"
                                    size="lg"
                                >
                                    <Link href={link.href} target={link.href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer">
                                        {link.icon}
                                        <span>{link.text}</span>
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
