"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ZoomIn, Compass, ListChecks, Check } from "lucide-react";
import LightboxModal from "./LightboxModal";

const specsData = [
  { label: "Área Útil Térrea (Showroom)", value: "147,87 m²", highlight: false },
  { label: "Mezanino Elevado (Backoffice)", value: "77,92 m²", highlight: false },
  { label: "Área Total Construída", value: "225,79 m²", highlight: true },
  { label: "Configuração de Fachada", value: "Península / Esquina Dupla", highlight: false },
  { label: "Endereço Cadastral", value: "Rua Guaianazes, 46 — Niterói", highlight: false },
];

const checklistItems = [
  "Esquadrias estruturais em alumínio anodizado preto linha premium.",
  "Vidros laminados acústicos de alta resistência mecânica e proteção solar.",
  "Infraestrutura completa para ar-condicionado VRF e cabeamento estruturado.",
  "Ponto preparado para carregador veicular elétrico (EV).",
  "Vagas de recuo privativas e acesso facilitado para clientes e carga.",
];

export default function BlueprintViewer() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <section
        id="plantas"
        className="py-16 md:py-24 bg-[#202020] border-b border-white/[0.08]"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          {/* Section Header: Refined Title Size */}
          <motion.div
            className="max-w-2xl mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-champagne font-semibold block mb-1.5 sm:mb-2">
              Engenharia &amp; Layout
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight leading-tight">
              Planta Técnica
            </h2>
          </motion.div>

          {/* Grid: Blueprint Display vs Detailed Specs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Technical Blueprint Viewer (7 Cols) */}
            <motion.div
              className="lg:col-span-7 bg-[#191919] border border-white/[0.1] overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div className="px-4 sm:px-6 py-3.5 bg-[#141414] border-b border-white/[0.08] flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <Compass className="w-4 h-4 text-champagne shrink-0" />
                  <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-300 truncate">
                    Prancha Oficial • Prefeitura de Niterói
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] text-champagne border border-champagne/30 px-2 py-0.5 bg-champagne/[0.06] shrink-0">
                  Escala 1:100
                </span>
              </div>

              {/* Blueprint Graphic Showcase */}
              <div className="p-4 sm:p-8 bg-[#161616] flex flex-col items-center justify-center relative">
                <div
                  className="w-full relative aspect-[4/3] sm:aspect-[16/10] bg-white rounded-sm overflow-hidden border border-white/20 cursor-pointer group shadow-inner"
                  onClick={() => setLightboxOpen(true)}
                >
                  <Image
                    src="/assets/prancha/prancha-01.png"
                    alt="Prancha Técnica com Implantação, Plantas Baixas, Cortes e Quadro de Esquadrias — Projeto São Francisco"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-contain p-1.5 sm:p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Technical Metric Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left bg-[#1a1a1a] p-3.5 sm:p-4 border border-white/[0.08] text-xs w-full mt-4 sm:mt-6">
                  <div>
                    <span className="text-neutral-400 block text-[9px] uppercase tracking-wider font-medium">
                      Testada Principal
                    </span>
                    <span className="text-white font-medium text-xs sm:text-sm">18,50 m</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-[9px] uppercase tracking-wider font-medium">
                      Recuo Frontal
                    </span>
                    <span className="text-white font-medium text-xs sm:text-sm">5,00 m (Vagas)</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-[9px] uppercase tracking-wider font-medium">
                      Pé-Direito Térreo
                    </span>
                    <span className="text-white font-medium text-xs sm:text-sm">5,80 m livre</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-[9px] uppercase tracking-wider font-medium">
                      Carga Piso
                    </span>
                    <span className="text-white font-medium text-xs sm:text-sm">500 kgf/m²</span>
                  </div>
                </div>

                {/* Blueprint Action Button */}
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setLightboxOpen(true)}
                  className="mt-5 sm:mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-champagne hover:bg-champagne-light text-neutral-950 font-semibold text-[10px] sm:text-[11px] tracking-[0.16em] uppercase transition shadow-md cursor-pointer"
                >
                  <ZoomIn className="w-3.5 h-3.5 shrink-0" />
                  <span>Ampliar Prancha em Alta Resolução</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Technical Readings & Specifications Table (5 Cols) */}
            <motion.div
              className="lg:col-span-5 bg-[#191919] p-5 sm:p-8 border border-white/[0.1] shadow-2xl"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-8 h-8 border border-champagne/40 bg-[#141414] flex items-center justify-center text-champagne shrink-0">
                  <ListChecks className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-white uppercase tracking-[0.14em]">
                  Quadro de Áreas &amp; Especificações
                </h3>
              </div>

              {/* Specs Table */}
              <div className="divide-y divide-white/[0.08] text-xs">
                {specsData.map((row, idx) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + idx * 0.06 }}
                    className={`py-3 flex justify-between items-center gap-4 ${
                      row.highlight ? "bg-white/[0.03] px-3 -mx-3" : ""
                    }`}
                  >
                    <span
                      className={
                        row.highlight
                          ? "text-champagne font-medium"
                          : "text-neutral-400 font-light"
                      }
                    >
                      {row.label}
                    </span>
                    <span
                      className={
                        row.highlight
                          ? "font-semibold text-champagne text-sm shrink-0"
                          : "font-medium text-white text-right shrink-0"
                      }
                    >
                      {row.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Feature Checklist */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/[0.08]">
                <h4 className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-champagne mb-3.5 sm:mb-4">
                  Padronização Construtiva
                </h4>
                <ul className="space-y-2.5 sm:space-y-3 text-xs text-neutral-300 font-light">
                  {checklistItems.map((item, idx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.25 + idx * 0.06 }}
                      className="flex items-start gap-2.5"
                    >
                      <Check className="w-3.5 h-3.5 text-champagne mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Blueprint */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc="/assets/prancha/prancha-01.png"
        caption="Prancha Técnica com Implantação, Plantas Baixas, Cortes e Quadro de Esquadrias — Projeto São Francisco (Rua Guaianazes, 46)"
      />
    </>
  );
}
