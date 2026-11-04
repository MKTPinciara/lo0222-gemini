"use client";

import { motion } from "motion/react";
import { Sparkles, Zap, Sun, Moon, Layers } from "lucide-react";
import ThumbnailCarousel, { defaultProjectRenders } from "@/components/ui/thumbnail-carousel";

export default function RendersGallerySection() {
  return (
    <section id="renders" className="py-24 md:py-36 bg-brand-paper text-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 pb-8 border-b border-brand-dark/10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-brand-gold/20 border border-brand-gold/40 text-brand-dark text-[10px] uppercase tracking-[0.25em] font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Estudo Tridimensional do Arquiteto</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] text-brand-dark mb-4">
              Perspectivas <span className="font-normal text-brand-gold italic font-serif">Arquitetônicas 3D.</span>
            </h2>
            <p className="text-base text-brand-muted font-light leading-relaxed">
              Explore os 16 novos renders 3D através do carrossel interativo. Arraste ou utilize as miniaturas animadas para visualizar a volumetria, iluminação cênica noturna, mezanino e infraestrutura veicular elétrica.
            </p>
          </motion.div>

          {/* Quick Stats Pill */}
          <motion.div
            className="flex items-center gap-4 bg-white border border-brand-dark/10 px-5 py-3 rounded-sm shrink-0 shadow-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="text-right">
              <span className="block text-2xl font-light text-brand-dark tracking-tight">16 Ângulos</span>
              <span className="block text-[10px] uppercase tracking-widest text-brand-muted">Carrossel Interativo</span>
            </div>
          </motion.div>
        </div>

        {/* Thumbnail Carousel Component */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ThumbnailCarousel items={defaultProjectRenders} />
        </motion.div>

        {/* Architectural Key Takeaways Strip */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-brand-dark/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="flex items-start gap-3.5 p-4 rounded-sm bg-white border border-brand-dark/10 shadow-sm">
            <div className="p-2.5 rounded-sm bg-brand-gold/15 text-brand-dark shrink-0">
              <Zap className="w-5 h-5 text-brand-gold" />
            </div>
            <div>
              <h4 className="text-brand-dark text-xs uppercase tracking-widest font-semibold mb-1">Carregador Elétrico (EV)</h4>
              <p className="text-brand-muted text-[11px] font-light leading-relaxed">
                Ponto com infraestrutura preparada para wallbox de recarga veicular na entrada.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-sm bg-white border border-brand-dark/10 shadow-sm">
            <div className="p-2.5 rounded-sm bg-brand-gold/15 text-brand-dark shrink-0">
              <Sun className="w-5 h-5 text-brand-gold" />
            </div>
            <div>
              <h4 className="text-brand-dark text-xs uppercase tracking-widest font-semibold mb-1">Brises &amp; Conforto</h4>
              <p className="text-brand-muted text-[11px] font-light leading-relaxed">
                Painéis ripados que filtram a insolação direta preservando a visibilidade da vitrine.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-sm bg-white border border-brand-dark/10 shadow-sm">
            <div className="p-2.5 rounded-sm bg-brand-gold/15 text-brand-dark shrink-0">
              <Moon className="w-5 h-5 text-brand-gold" />
            </div>
            <div>
              <h4 className="text-brand-dark text-xs uppercase tracking-widest font-semibold mb-1">Iluminação Cênica</h4>
              <p className="text-brand-muted text-[11px] font-light leading-relaxed">
                Fitas LED embutidas na marquise e spots de piso que destacam a arquitetura à noite.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-sm bg-white border border-brand-dark/10 shadow-sm">
            <div className="p-2.5 rounded-sm bg-brand-gold/15 text-brand-dark shrink-0">
              <Layers className="w-5 h-5 text-brand-gold" />
            </div>
            <div>
              <h4 className="text-brand-dark text-xs uppercase tracking-widest font-semibold mb-1">Pé-Direito Duplo &amp; Mezanino</h4>
              <p className="text-brand-muted text-[11px] font-light leading-relaxed">
                Amplitude vertical que permite composições de vitrine imponentes e setorização.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
