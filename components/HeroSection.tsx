"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import gsap from "gsap";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on scroll
      gsap.to(bgRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text Entrance Animation
      gsap.from(textRef.current?.children || [], {
        opacity: 0,
        y: 30,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-[100svh] bg-brand-darker text-white flex flex-col justify-end overflow-hidden pt-36 pb-20"
    >
      {/* Background Image with Parallax & Subdued Vignette */}
      <div ref={bgRef} className="absolute inset-0 z-0 scale-105">
        <Image
          src="/assets/renders/08-fachada-dramatica-golden-hour.jpg"
          alt="Projeto São Francisco — Nova Perspectiva 3D da Fachada Contemporânea"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darker/95 via-brand-darker/70 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full" ref={textRef}>
        {/* Clean Category Badge */}
        <div className="mb-6">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-gold border-b border-brand-gold/30 pb-1">
            Rua Guaianazes, 46 — São Francisco / Niterói
          </span>
        </div>

        {/* Main Minimalist Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-light tracking-tight leading-[0.95] max-w-5xl mb-6">
          Presença que <span className="font-normal text-brand-gold italic font-serif">permanece.</span>
        </h1>

        {/* Streamlined Subtitle */}
        <p className="text-base sm:text-xl text-gray-300 font-light max-w-2xl leading-relaxed mb-12">
          Ponto comercial de alto padrão projetado para unir visibilidade contínua, vão livre térreo de pé-direito duplo e mezanino integrado na esquina mais nobre de São Francisco.
        </p>

        {/* Clean Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 pb-10 border-t border-white/10">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-1">
              Área Total
            </span>
            <span className="text-2xl sm:text-3xl font-light tracking-tight text-white">
              ~225,8 m²
            </span>
            <span className="block text-[11px] text-gray-400 font-light mt-0.5">
              Loja + Mezanino
            </span>
          </div>

          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-1">
              Loja Térrea
            </span>
            <span className="text-2xl sm:text-3xl font-light tracking-tight text-white">
              147,9 m²
            </span>
            <span className="block text-[11px] text-gray-400 font-light mt-0.5">
              Pé-direito duplo
            </span>
          </div>

          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-1">
              Mezanino
            </span>
            <span className="text-2xl sm:text-3xl font-light tracking-tight text-white">
              77,9 m²
            </span>
            <span className="block text-[11px] text-gray-400 font-light mt-0.5">
              Área reservada
            </span>
          </div>

          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-1">
              Localização
            </span>
            <span className="text-lg sm:text-xl font-light tracking-tight text-white flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
              Esquina Nobre
            </span>
            <span className="block text-[11px] text-gray-400 font-light mt-0.5">
              Guaianazes x Franklin Roosevelt
            </span>
          </div>
        </div>

        {/* Clean Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/5">
          <a
            href="#renders"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold hover:text-white transition-colors font-semibold group"
          >
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span>Ver Perspectivas 3D</span>
          </a>

          <a
            href="#plantas"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-300 hover:text-brand-gold transition-colors font-medium group"
          >
            <span>Ver Plantas Técnicas</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
