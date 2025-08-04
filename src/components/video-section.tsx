
export default function VideoSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative animate-fade-in animation-delay-300">
             <div className="absolute inset-0 bg-grid-orange-900/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
            <div className="container mx-auto px-4 md:px-6 relative">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Conheça-nos</h2>
                </div>
                <div className="mt-8 md:mt-12 mx-auto max-w-4xl">
                    <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
