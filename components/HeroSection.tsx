"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[72svh] sm:min-h-[78svh] md:min-h-[82svh] bg-[#111111] text-white flex flex-col justify-end overflow-hidden pt-28 pb-12 sm:pb-16 md:pb-18 border-b border-white/[0.08]"
    >
      {/* Background Architectural Render — Unscaled, High Quality (q=95) & Wide Framing */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/renders/13-perspectiva-esquina-nobre.jpg"
          alt="Projeto São Francisco — Fachada Contemporânea no Canal de São Francisco"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[50%_20%] opacity-90"
        />
        {/* Top dark vignette so fixed header stays crisp */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#111111]/80 to-transparent" />
        {/* Bottom-up vignette so headline has strong contrast while keeping the upper facade completely clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent" />
        {/* Subtle left-side vignette for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/75 via-[#111111]/20 to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 w-full">
        {/* Top Badge Only */}
        <motion.div
          className="mb-4 sm:mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-champagne text-neutral-950 text-[10px] sm:text-[11px] uppercase tracking-[0.26em] font-bold shadow-lg">
            OPORTUNIDADE
          </span>
        </motion.div>

        {/* Main Impactful Architectural Title — Serif font on h1 */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.06] max-w-4xl mb-4 sm:mb-6 text-white font-serif drop-shadow-sm"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          Loja Conceitual
          <br />
          <span className="font-normal text-champagne italic">
            no Canal de São Francisco.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-neutral-200 font-light max-w-2xl leading-relaxed mb-8 sm:mb-10 drop-shadow-sm"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Ponto comercial de alto padrão no novo Polo de design no Canal de São Francisco. Vão livre monumental de pé-direito duplo, mezanino integrado e vitrine em esquina dupla estratégica.
        </motion.p>

        {/* Action & Quick Navigation Bar */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 sm:pt-6 border-t border-white/15"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: "easeOut" }}
        >
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#perspectivas"
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3 bg-champagne hover:bg-champagne-light text-neutral-950 text-[11px] uppercase tracking-[0.18em] font-semibold transition-all shadow-lg w-full sm:w-auto"
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>Explorar Perspectivas 3D</span>
            </a>

            <a
              href="#plantas"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-md border border-white/15 text-white hover:text-champagne text-[11px] uppercase tracking-[0.18em] font-medium transition-all w-full sm:w-auto group"
            >
              <span>Ver Planta Técnica</span>
              <ArrowDown className="w-3.5 h-3.5 text-champagne group-hover:translate-y-0.5 transition-transform shrink-0" />
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-xs text-neutral-300 font-light">
            <div>
              <span className="text-champagne font-semibold uppercase tracking-widest text-[10px] block">
                Área Total
              </span>
              <span className="text-white font-serif text-lg font-medium">225,8 m²</span>
            </div>
            <div className="h-6 w-[1px] bg-white/15" />
            <div>
              <span className="text-champagne font-semibold uppercase tracking-widest text-[10px] block">
                Pé-Direito
              </span>
              <span className="text-white font-serif text-lg font-medium">5,80 m livre</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
