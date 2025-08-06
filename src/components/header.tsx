"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import ModernNav from "./circular-nav"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 md:px-6 flex h-28 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/LOGO%20REDONDA.svg" alt="CP Marketing Logo" width={60} height={60} data-ai-hint="logo" />
            <span className="sr-only">CP Marketing</span>
          </Link>
          <ModernNav />
      </div>
    </header>
  )
}
