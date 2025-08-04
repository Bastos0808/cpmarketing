import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-center">
        <p className="text-sm text-center">
          Criado por <Link href="#" className="underline">CP Marketing</Link>
        </p>
      </div>
    </footer>
  )
}
