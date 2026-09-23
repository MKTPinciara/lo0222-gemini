"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Eye, LayoutGrid, SunMedium, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ShowroomConceptSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        opacity: 0,
        x: -40,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(textRef.current, {
        opacity: 0,
        x: 40,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="showroom" ref={sectionRef} className="py-24 md:py-36 bg-brand-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Showcase */}
          <div ref={imgRef} className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-white/10 shadow-2xl group">
              <Image
                src="/assets/caderno/page-05.png"
                alt="Brise de alumínio e arquitetura em São Francisco"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-70" />

              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-brand-dark/90 backdrop-blur-md border border-white/10 rounded-sm">
                <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-semibold block mb-1">
                  Espaço Comercial de Esquina
                </span>
                <p className="text-gray-300 text-xs font-light leading-relaxed">
                  Fachada ampla com brises em alumínio que protegem o ambiente mantendo a sofisticação da vitrine.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div ref={textRef} className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-gold block mb-3">
              Vocação Comercial
            </span>

            <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-[1.05] mb-6">
              O espaço ideal para a sua <span className="font-normal text-brand-gold italic font-serif">Flagship Store.</span>
            </h2>

            <p className="text-gray-300 font-light text-base md:text-lg leading-relaxed mb-8">
              Projetado para marcas de móveis planejados de alto padrão e escritórios de arquitetura. Oferece a combinação perfeita entre área de exposição térrea, pé-direito duplo e visibilidade contínua de esquina.
            </p>

            {/* List of Benefits */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-sm bg-white/5 border border-white/10 text-brand-gold shrink-0 mt-1">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">Vitrine Contínua de Esquina</h4>
                  <p className="text-gray-400 text-xs font-light leading-relaxed">
                    Excelente impacto visual para pedestres e veículos na Av. Pres. Franklin Roosevelt.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-sm bg-white/5 border border-white/10 text-brand-gold shrink-0 mt-1">
                  <LayoutGrid className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">Vão Livre sem Obstáculos</h4>
                  <p className="text-gray-400 text-xs font-light leading-relaxed">
                    Liberdade total para montagem de ambientes decorados, cozinhas e closets de showroom.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-sm bg-white/5 border border-white/10 text-brand-gold shrink-0 mt-1">
                  <SunMedium className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">Mezanino Reservado</h4>
                  <p className="text-gray-400 text-xs font-light leading-relaxed">
                    Espaço privativo de 77,92m² ideal para reuniões com clientes e especificações de projetos.
                  </p>
                </div>
              </div>
            </div>

            {/* Minimal Anchor to Contact Form */}
            <div>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 border border-brand-gold/60 text-brand-gold hover:bg-brand-gold hover:text-brand-dark px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all rounded-sm"
              >
                <span>Solicitar Informações no Formulário</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
