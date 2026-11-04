"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ZoomIn, FileText, Check } from "lucide-react";
import LightboxModal from "./LightboxModal";

const dataRows = [
  { label: "Área Térrea (Loja)", value: "147,87 m²", highlight: false },
  { label: "Mezanino Elevado", value: "77,92 m²", highlight: false },
  { label: "Área Total Construída", value: "225,79 m²", highlight: true },
  { label: "Península / Esquina", value: "Sim (Esquina Dupla)", highlight: false },
  { label: "Endereço", value: "Guaianazes, 46 — Niterói/RJ", highlight: false },
];

const checkItems = [
  "Quadro de esquadrias em alumínio preto",
  "Brises metálicos e amadeirados modulares",
  "Ponto preparado para carregador veicular elétrico (EV)",
  "Acesso facilitado para clientes e estacionamento privativo",
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" as const },
  },
};

export default function BlueprintViewer() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");
  const [activeCaption, setActiveCaption] = useState("");

  const handleOpenLightbox = (src: string, caption: string) => {
    setActiveImage(src);
    setActiveCaption(caption);
    setLightboxOpen(true);
  };

  return (
    <>
      <section id="plantas" className="py-24 md:py-36 bg-brand-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Section Header */}
          <motion.div
            className="max-w-3xl mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={sectionVariants}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold block mb-3">
              Engenharia &amp; Arquitetura
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] text-white mb-6">
              O espaço, por dentro.
            </h2>
            <p className="text-lg text-gray-300 font-light leading-relaxed">
              Uma planta simples, objetiva e inteligente que organiza a experiência em dois níveis integrados, equilibrando área de exposição térrea e privacidade no mezanino.
            </p>
          </motion.div>

          {/* Blueprint Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Blueprint Technical Drawing */}
            <motion.div
              className="lg:col-span-8 bg-brand-darker border border-white/10 p-4 md:p-6 rounded-sm shadow-2xl relative group"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-white border border-white/20">
                <Image
                  src="/assets/prancha/prancha-01.png"
                  alt="Prancha técnica com plantas baixas, cortes e fachadas do Projeto São Francisco"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                  onClick={() =>
                    handleOpenLightbox(
                      "/assets/prancha/prancha-01.png",
                      "Prancha Técnica com Implantação, Plantas Baixas, Cortes e Quadro de Esquadrias — Projeto São Francisco"
                    )
                  }
                />
              </div>

              <motion.button
                onClick={() =>
                  handleOpenLightbox(
                    "/assets/prancha/prancha-01.png",
                    "Prancha Técnica com Implantação, Plantas Baixas, Cortes e Quadro de Esquadrias — Projeto São Francisco"
                  )
                }
                className="mt-4 flex items-center justify-center gap-2 w-full py-3.5 bg-brand-gold text-brand-dark hover:bg-amber-400 text-xs font-bold uppercase tracking-widest rounded-sm transition-colors shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ZoomIn className="w-4 h-4" />
                <span>Ampliar Prancha Técnica em Alta Resolução</span>
              </motion.button>
            </motion.div>

            {/* Sidebar Details */}
            <motion.div
              className="lg:col-span-4 bg-brand-darker border border-white/10 p-8 rounded-sm shadow-2xl"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <h3 className="text-2xl font-light tracking-tight mb-6 pb-4 border-b border-white/10 flex items-center gap-2 text-white">
                <FileText className="w-5 h-5 text-brand-gold" />
                Leitura Técnica
              </h3>

              {/* Data Table Rows */}
              <div className="space-y-4 text-sm mb-8">
                {dataRows.map(({ label, value, highlight }, i) => (
                  <motion.div
                    key={label}
                    className="flex justify-between items-center py-2.5 border-b border-white/10"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.3, duration: 0.5 }}
                  >
                    <span className="text-gray-400">{label}</span>
                    <strong className={`font-semibold text-base ${highlight ? "text-brand-gold font-bold" : "text-white"}`}>
                      {value}
                    </strong>
                  </motion.div>
                ))}
              </div>

              {/* Highlights List */}
              <div className="space-y-3 mb-8">
                {checkItems.map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-2 text-xs text-gray-300"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.5, duration: 0.5 }}
                  >
                    <Check className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox Component */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={activeImage}
        caption={activeCaption}
      />
    </>
  );
}
