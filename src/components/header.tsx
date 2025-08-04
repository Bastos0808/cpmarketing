"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Podcast", href: "#about" },
  { name: "Treinamento", href: "#services" },
  { name: "Contato", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="https://placehold.co/40x40" alt="CP Marketing Logo" width={40} height={40} data-ai-hint="logo" />
            <span className="sr-only">CP Marketing</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary">
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
             <Button asChild>
                <Link href="#contact">Agende sua Sessão</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                     <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
                       <Image src="https://placehold.co/40x40" alt="CP Marketing Logo" width={40} height={40} data-ai-hint="logo" />
                     </Link>
                     <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
                        <X className="h-6 w-6" />
                        <span className="sr-only">Fechar menu</span>
                    </Button>
                  </div>
                  <nav className="flex flex-col items-start gap-4 p-4">
                    {navLinks.map((link) => (
                      <Link key={link.name} href={link.href} className="text-lg font-medium transition-colors hover:text-primary w-full text-left p-2 rounded-md hover:bg-secondary" onClick={closeMobileMenu}>
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto p-4">
                     <Button asChild className="w-full">
                        <Link href="#contact" onClick={closeMobileMenu}>Agende sua Sessão</Link>
                     </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
