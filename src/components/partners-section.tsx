import Image from "next/image";

const partners = [
  { name: "Google Partner", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/PARCEIROS%2Fimages.png?alt=media&token=4e49d9b9-0fb1-4aec-99d1-04f63d78ed61" },
  { name: "Meta Business Partner", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/PARCEIROS%2Fimages.jpg?alt=media&token=7ef51237-defa-4892-84f9-d14533c1f504" },
  { name: "RD Station", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/PARCEIROS%2Fimages%20(2).png?alt=media&token=ac6bb505-1454-4803-91cc-1d717ef73bc4" },
  { name: "mLabs", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/PARCEIROS%2Fimages%20(1).png?alt=media&token=ecdd2777-10f9-4e25-a1b6-b3fc1a593af3" },
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
            <div key={index} className="flex justify-center">
              <div className="relative h-20 w-40 transition-all duration-300">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain mix-blend-multiply dark:mix-blend-lighten"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
