"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Rocket } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { name: "Serviços", href: "#services" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Equipe", href: "#team" },
  { name: "Depoimentos", href: "#testimonials" },
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
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl font-headline">AgênciaVitrines</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium transition-colors hover:text-primary">
                {link.name}
              </Link>
            ))}
            <Button asChild>
              <Link href="#contact">Contato</Link>
            </Button>
          </nav>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                     <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
                        <Rocket className="h-6 w-6 text-primary" />
                        <span className="font-bold text-xl font-headline">AgênciaVitrines</span>
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
                        <Link href="#contact" onClick={closeMobileMenu}>Contato</Link>
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
