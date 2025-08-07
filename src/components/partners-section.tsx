import Image from "next/image";

const partners = [
  { name: "Google Partner", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/PARCEIROS%2FPrancheta%2024.png?alt=media&token=b69b6389-c975-48b8-a1c6-be675daf84ba" },
  { name: "Meta Business Partner", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/PARCEIROS%2FPrancheta%2025.png?alt=media&token=ef966cc7-a34c-4dfb-a363-bbf56f73766e" },
  { name: "RD Station", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/PARCEIROS%2FPrancheta%2026.png?alt=media&token=2ff945a5-b0b8-409b-9394-936a5bc2d25f" },
  { name: "mLabs", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/PARCEIROS%2FPrancheta%2027.png?alt=media&token=dc6d4366-d566-4cc9-aa5d-337c154b4008" },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary-foreground">
            Parceiros Estratégicos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            Trabalhamos com as melhores ferramentas e plataformas do mercado para entregar resultados de excelência.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6 flex justify-center items-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
              <div className="relative h-20 w-40">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain filter brightness-0 invert"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
