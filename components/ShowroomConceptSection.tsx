"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Eye, LayoutGrid, SunMedium, Zap, ArrowRight, Maximize2 } from "lucide-react";
import LightboxModal from "./LightboxModal";

const benefits = [
  {
    icon: Eye,
    title: "Vitrine Contínua de Esquina",
    desc: "Impacto visual máximo para fluxo de pedestres e veículos na esquina de São Francisco.",
  },
  {
    icon: LayoutGrid,
    title: "Vão Livre com Pé-Direito Duplo",
    desc: "147,87m² no térreo sem interferências para montagem de cozinhas planejadas, closets e living de alto padrão.",
  },
  {
    icon: SunMedium,
    title: "Mezanino Privativo de 77,92m²",
    desc: "Espaço reservado integrado por escada linear, ideal para atendimento exclusivo, reuniões e diretoria.",
  },
  {
    icon: Zap,
    title: "Carregador Elétrico Integrado",
    desc: "Infraestrutura preparada para carregador veicular elétrico (wallbox EV) no recuo da fachada frontal.",
  },
];

export default function ShowroomConceptSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <section id="showroom" className="py-24 md:py-36 bg-brand-paper text-brand-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: 3D Render Showcase */}
            <motion.div
              className="lg:col-span-6 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                onClick={() => setLightboxOpen(true)}
                className="relative aspect-[16/11] w-full rounded-sm overflow-hidden border border-brand-dark/15 shadow-2xl group cursor-pointer bg-brand-cream"
              >
                <Image
                  src="/assets/renders/03-showroom-interno-decorado.jpg"
                  alt="Render 3D do Showroom decorado e mezanino no Projeto São Francisco"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60" />

                {/* Hover zoom indicator */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 text-brand-dark bg-brand-gold text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-sm shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5" /> Ampliar Render 3D
                  </span>
                </div>

                {/* Overlay Badge */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-md border border-brand-dark/10 rounded-sm shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-semibold block">
                      Render 3D — Simulação Showroom
                    </span>
                    <span className="text-[10px] text-brand-muted">Clique para ampliar</span>
                  </div>
                  <p className="text-brand-dark text-xs font-light leading-relaxed">
                    Visualização interna do salão térreo com pé-direito duplo e mezanino integrado para flagships de arquitetura e design.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column: Content */}
            <motion.div
              className="lg:col-span-6 flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-gold block mb-3">
                Vocação Comercial &amp; Conceito
              </span>

              <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-[1.05] text-brand-dark mb-6">
                O espaço ideal para a sua{" "}
                <span className="font-normal text-brand-gold italic font-serif">Flagship Store.</span>
              </h2>

              <p className="text-brand-muted font-light text-base md:text-lg leading-relaxed mb-8">
                Projetado sob medida para marcas de móveis planejados de alto padrão, escritórios de engenharia, galerias e showrooms. Uma união perfeita entre área de exposição térrea envidraçada, privacidade no mezanino e endereço icônico.
              </p>

              {/* List of Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {benefits.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    className="flex items-start gap-3 p-3.5 rounded-sm bg-brand-cream border border-brand-dark/10 hover:border-brand-gold/60 transition-colors shadow-sm"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i + 0.2, duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="p-2 rounded-sm bg-brand-gold/15 text-brand-gold shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-brand-dark font-medium text-xs mb-1">{title}</h4>
                      <p className="text-brand-muted text-[11px] font-light leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <motion.a
                  href="#renders"
                  className="inline-flex items-center gap-2 bg-brand-dark text-white hover:bg-brand-gold hover:text-brand-dark px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all rounded-sm shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>Ver Todos os 16 Renders 3D</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.a>

                <motion.a
                  href="#contato"
                  className="inline-flex items-center gap-2 border border-brand-dark/20 text-brand-dark hover:text-brand-gold hover:border-brand-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all rounded-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>Falar com o Corretor</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox for Showroom 3D Render */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc="/assets/renders/03-showroom-interno-decorado.jpg"
        caption="Simulação Tridimensional de Showroom Decorado — Pé-direito duplo, mezanino elevado e escada linear metálica."
      />
    </>
  );
}
