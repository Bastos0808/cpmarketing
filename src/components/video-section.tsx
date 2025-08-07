
export default function VideoSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary relative animate-fade-in animation-delay-300">
             <div className="absolute inset-0 bg-grid-orange-900/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
            <div className="container mx-auto px-4 md:px-6 relative">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Conheça-nos</h2>
                </div>
                <div className="mt-8 md:mt-12 mx-auto max-w-4xl">
                    <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                        <video 
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/video%20tour%20horizontal%202.mp4?alt=media&token=a08f758c-201f-4048-a662-e918df1d659e" 
                            title="Video tour do estúdio da CP Marketing"
                            controls
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            Seu navegador não suporta a tag de vídeo.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}
