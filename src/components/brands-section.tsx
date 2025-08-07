import Image from "next/image";

const brands = [
  { name: "Agenday", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2FAGENDAY%202.svg?alt=media&token=c1e11da9-7594-49c8-a469-9082bc97a65b" },
  { name: "Asgard", src: "/ASGARD.svg" },
  { name: "Bruxelas", src: "/BRUXELAS.svg" },
  { name: "Clinica de Finaças", src: "/CLINICA DE FINAÇAS.svg" },
  { name: "Laura Rocha", src: "/LAURA ROCHA.svg" },
  { name: "Negocia", src: "/NEGOCIA.svg" },
  { name: "Pethouse", src: "/PETHOUSE.svg" },
];

export default function BrandsSection() {
  return (
    <section id="brands" className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary-foreground">
            Marcas que Confiam na Gente
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            Temos orgulho de ter colaborado com empresas de diversos setores, ajudando-as a alcançar seus objetivos.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16 lg:gap-x-24">
          {brands.map((brand) => (
            <div key={brand.name} className="relative h-12 w-36 filter grayscale hover:grayscale-0 brightness-200 hover:brightness-100 transition-all duration-300">
              <Image
                src={brand.src}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
