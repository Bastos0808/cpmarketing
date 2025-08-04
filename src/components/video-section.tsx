import { Button } from "./ui/button"
import { PlayCircle } from "lucide-react"

export default function VideoSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative">
             <div className="absolute inset-0 bg-grid-orange-900/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
            <div className="container mx-auto px-4 md:px-6 relative">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Conheça-nos</h2>
                </div>
                <div className="mt-12 mx-auto max-w-4xl">
                    <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                        <Button variant="ghost" size="icon" className="w-24 h-24">
                            <PlayCircle className="w-20 h-20 text-primary" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
