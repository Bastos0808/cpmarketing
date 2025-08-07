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
  { name: "Cliente 8", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2Fpost.png?alt=media&token=48011c9e-6326-4350-82a6-128421c442c1" },
  { name: "Cliente 9", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2FNutricionista%20Nutri%C3%A7%C3%A3o%20e%20Sa%C3%BAde%20Logo%20Minimalista%20%20(7).png?alt=media&token=903d1eab-4b7e-425f-be7b-84b0eec07739" },
  { name: "Kaiza Marra", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2FMarca_D'agua_Kaiza_Marra_Saude_e_Bem_estar_04.png?alt=media&token=8085002b-ffa4-4bc3-828c-5f6fcc10aabf" },
  { name: "Cliente 11", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2Fpost.png?alt=media&token=48011c9e-6326-4350-82a6-128421c442c1" },
  { name: "Cliente 12", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2Fpreto%20png.png?alt=media&token=1a52ecfa-c57b-4cc2-9d5f-f3a7bc0023c3" },
  { name: "Cliente 13", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2FDesign%20sem%20nome%20(2).png?alt=media&token=52bfb9f8-dc85-4ec4-8b1d-d57204f504fe" },
  { name: "Body & Science", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2FBody%20%26%20Science%20(2).png?alt=media&token=aaa63d65-3727-4dc1-a22d-51da10d5bcec" },
  { name: "Cliente 15", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2FLOGO%20HORIZONTAL%20ALINE%20(2).png?alt=media&token=4bc02b22-06f4-45cb-a3e6-5b5831d4d2dc" },
  { name: "Cliente 16", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2Flogo-crtr09%20(1).png?alt=media&token=35edf89c-0f8d-46c1-b348-ac13538e6ee1" },
  { name: "Experts", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2FLogo%20Experts%20PNG.png?alt=media&token=5a266e47-7512-4cda-9798-1599f7e9ff64" },
  { name: "Cliente 18", src: "https://firebasestorage.googleapis.com/v0/b/site-cp-marketing.firebasestorage.app/o/CLIENTES%2FDesign%20sem%20nome%20-%202025-02-06T111338.134.png?alt=media&token=d01cd249-54e2-4fe1-aa43-23547967b756" },
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
