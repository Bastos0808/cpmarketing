"use client"

import React from "react";
import Image from "next/image";

const brands = [
  { name: "Cliente 1", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2Flogo_200x200.png?alt=media&token=6f336712-7bc6-4e5a-a2ea-b625e4cd4a03" },
  { name: "Cliente 2", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2Fdownload_200x200.png?alt=media&token=273b244b-cfc7-45fd-95e5-4f1b9aa7ace7" },
  { name: "Laura Rocha", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2FLaura-Rocha_Versao-02.png.webp?alt=media&token=eaf98e52-10ad-4c7f-966d-3764f5445b48" },
  { name: "Cliente 4", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2Fdownload%20(1)_200x200.png?alt=media&token=355194ec-54f7-4189-98dd-9d9b95aa1ca3" },
  { name: "Cliente 5", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2Ffdf1a5de-4e70-42cc-9fa8-991f09efb22e-Photoroom.png_200x200.webp?alt=media&token=3f684f98-1923-4392-89e4-887adc95261b" },
  { name: "Pethouse", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2Fpet-house.png_200x200.webp?alt=media&token=304201ae-3aeb-4a6f-8a39-736a55445f87" },
  { name: "Cliente 7", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2FLOGO-SEM-FUNDO.png_200x200.webp?alt=media&token=e3f4fe74-7df7-4002-8da4-b6b70b26ae73" },
];

const duplicatedBrands = [...brands, ...brands];

export default function BrandsSection() {
  return (
    <section id="brands" className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary-foreground">
            Junte-se às +203 Marcas que Confiam na Nossa Expertise
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            Com mais de 203 projetos de sucesso, transformamos negócios em líderes de mercado. Veja algumas das marcas que decolaram com a gente e prepare-se para ser a próxima.
          </p>
        </div>
        <div className="marquee-container">
          <div className="marquee">
            {duplicatedBrands.map((brand, index) => (
              <div key={index} className="flex-shrink-0 mx-8">
                <div className="relative h-32 w-48">
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
