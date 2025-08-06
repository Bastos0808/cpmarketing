"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Youtube, MessageCircle, Globe, Podcast, Mail } from "lucide-react";
import WarpSpeedBackground from "./warp-speed-background";
import { useSearchParams } from 'next/navigation';
import { useMemo } from "react";

export default function LinksPage() {
    const searchParams = useSearchParams();
    const paramsString = searchParams.toString();

    const links = useMemo(() => [
        {
            href: "https://www.instagram.com/cpmarketingbr",
            text: "Instagram",
            icon: <Instagram className="h-5 w-5" />,
        },
        {
            href: "https://www.youtube.com/@cpmarketingbr",
            text: "Youtube",
            icon: <Youtube className="h-5 w-5" />,
        },
        {
            href: "https://wa.me/556291528778",
            text: "WhatsApp",
            icon: <MessageCircle className="h-5 w-5" />,
        },
        {
            href: `/${paramsString ? `?${paramsString}` : ''}`,
            text: "Nosso Site",
            icon: <Globe className="h-5 w-5" />,
        },
        {
            href: `/podcast${paramsString ? `?${paramsString}` : ''}`,
            text: "Estúdio de Podcast",
            icon: <Podcast className="h-5 w-5" />,
        },
        {
            href: `/contato${paramsString ? `?${paramsString}` : ''}`,
            text: "Contato",
            icon: <Mail className="h-5 w-5" />,
        },
    ], [paramsString]);

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
                            className="rounded-full"
                            data-ai-hint="logo"
                        />
                        <h1 className="text-xl font-semibold text-white">
                            @cpmarketingbr
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
