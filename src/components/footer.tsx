import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "./ui/button"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-6">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} Agência Vitrines. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
