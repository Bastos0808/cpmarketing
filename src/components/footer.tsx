import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center gap-2">
        <p className="text-sm text-center">
          © 2022 CP Marketing. Todos os direitos reservados.
        </p>
        <p className="text-sm text-center">
          Criado por <Link href="/links" className="underline">CP Marketing</Link>
        </p>
      </div>
    </footer>
  )
}
