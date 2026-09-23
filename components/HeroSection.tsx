"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
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
          src="/assets/caderno/page-01.png"
          alt="Projeto São Francisco — Fachada Contemporânea"
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darker/90 via-transparent to-brand-darker/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full" ref={textRef}>
        {/* Subtle Category Badge */}
        <div className="mb-6">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-gold border-b border-brand-gold/30 pb-1">
            Endereço Comercial de Alto Padrão — Niterói / RJ
          </span>
        </div>

        {/* Main Minimalist Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-light tracking-tight leading-[0.95] max-w-5xl mb-8">
          Presença que <span className="font-normal text-brand-gold italic font-serif">permanece.</span>
        </h1>

        {/* Minimal Subtitle */}
        <p className="text-base sm:text-xl text-gray-300 font-light max-w-2xl leading-relaxed mb-14">
          Um projeto contemporâneo, aberto e marcante — desenhado para unir visibilidade, amplitude e presença arquitetônica na esquina de São Francisco.
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 pb-12 border-t border-white/10">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-1">
              Área Total
            </span>
            <span className="text-2xl sm:text-3xl font-light tracking-tight text-white">
              ~225,8 m²
            </span>
            <span className="block text-[11px] text-gray-400 font-light mt-1">
              Loja + Mezanino
            </span>
          </div>

          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-1">
              Loja Térrea
            </span>
            <span className="text-2xl sm:text-3xl font-light tracking-tight text-white">
              147,87 m²
            </span>
            <span className="block text-[11px] text-gray-400 font-light mt-1">
              Pé-direito duplo
            </span>
          </div>

          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-1">
              Mezanino
            </span>
            <span className="text-2xl sm:text-3xl font-light tracking-tight text-white">
              77,92 m²
            </span>
            <span className="block text-[11px] text-gray-400 font-light mt-1">
              Área de Atendimento
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
            <span className="block text-[11px] text-gray-400 font-light mt-1">
              Franklin Roosevelt x Guajianases
            </span>
          </div>
        </div>

        {/* Minimalist Bottom Navigation Anchor */}
        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-light">
            Arquitetura Contemporânea · São Francisco
          </span>

          <a
            href="#projeto"
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gray-300 hover:text-brand-gold transition-colors font-medium group"
          >
            <span>Explorar Projeto</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
