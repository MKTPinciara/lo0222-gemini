"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Layers, ShieldCheck } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PillarsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!cardsRef.current) return;
      gsap.from(cardsRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projeto" ref={sectionRef} className="py-24 md:py-36 bg-brand-paper text-brand-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-20 border-b border-brand-dark/15 pb-12">
          <div className="md:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold block mb-3">
              Conceito & Filosofia
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]">
              Uma nova leitura da esquina.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg md:text-xl font-light text-brand-muted leading-relaxed">
              O Projeto São Francisco nasce do encontro entre originalidade, funcionalidade e presença marcante na cidade. Uma arquitetura limpa e transparente que valoriza o produto em exposição sem criar barreiras visuais com a calçada.
            </p>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="bg-brand-cream border border-brand-dark/10 p-8 rounded-sm hover:border-brand-gold/60 transition-all duration-300 group hover:shadow-xl hover:shadow-brand-gold/5">
            <div className="w-12 h-12 rounded-sm bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-gold block mb-2">01 / Conceito</span>
            <h3 className="text-2xl font-light tracking-tight mb-4 group-hover:text-brand-gold transition-colors">
              Originalidade
            </h3>
            <p className="text-brand-muted font-light text-sm leading-relaxed">
              Traços autorais próprios, composição geométrica equilibrada e uma fachada projetada para atrair os olhares de quem circula em São Francisco.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-brand-cream border border-brand-dark/10 p-8 rounded-sm hover:border-brand-gold/60 transition-all duration-300 group hover:shadow-xl hover:shadow-brand-gold/5">
            <div className="w-12 h-12 rounded-sm bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors">
              <Layers className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-gold block mb-2">02 / Espaço</span>
            <h3 className="text-2xl font-light tracking-tight mb-4 group-hover:text-brand-gold transition-colors">
              Funcionalidade
            </h3>
            <p className="text-brand-muted font-light text-sm leading-relaxed">
              Vãos livres amplos, integração de dois níveis (loja + mezanino) e flexibilidade total para instalação de ambientes decorados e layouts de showroom.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-brand-cream border border-brand-dark/10 p-8 rounded-sm hover:border-brand-gold/60 transition-all duration-300 group hover:shadow-xl hover:shadow-brand-gold/5">
            <div className="w-12 h-12 rounded-sm bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-gold block mb-2">03 / Materialidade</span>
            <h3 className="text-2xl font-light tracking-tight mb-4 group-hover:text-brand-gold transition-colors">
              Modernidade
            </h3>
            <p className="text-brand-muted font-light text-sm leading-relaxed">
              Uso estratégico de brises metálicos de alumínio, pele de vidro de alta performance e acabamento de padrão elevado que eleva o prestígio da sua marca.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
