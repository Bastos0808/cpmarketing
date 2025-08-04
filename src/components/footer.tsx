import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center gap-4">
        <Image src="/LOGO%20RETANGULAR.svg" alt="CP Marketing Logo" width={120} height={40} data-ai-hint="logo" />
        <p className="text-sm text-center">
          Criado por <Link href="#" className="underline">CP Marketing</Link>
        </p>
      </div>
    </footer>
  )
}
