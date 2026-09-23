"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Maximize2 } from "lucide-react";
import LightboxModal from "./LightboxModal";

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  description: string;
}

const items: GalleryItem[] = [
  {
    id: "01",
    src: "/assets/caderno/page-02.png",
    title: "Conceito Arquitetônico",
    subtitle: "Ideais Projetuais",
    description:
      "Composição baseada em originalidade, funcionalidade e presença urbana contemporânea.",
  },
  {
    id: "02",
    src: "/assets/caderno/page-05.png",
    title: "Brise em Alumínio",
    subtitle: "Controle Solar & Sombra",
    description:
      "Elementos verticais em alumínio que garantem privacidade e proteção térmica sem vedar a vista.",
  },
  {
    id: "03",
    src: "/assets/caderno/page-09.png",
    title: "Paisagismo Integrado",
    subtitle: "Costela-de-Adão & Alpínias",
    description:
      "Vegetação tropical selecionada para suavizar as linhas minerais e conectar o espaço à natureza.",
  },
  {
    id: "04",
    src: "/assets/caderno/page-11.png",
    title: "Memorial de Cores",
    subtitle: "Paleta Mineral & Neutra",
    description:
      "Texturas minerais quentes com toques de palha, sândalo e metais escuros para acabamento refinado.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: "easeOut" as const },
  },
};

export default function MaterialsGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");
  const [activeCaption, setActiveCaption] = useState("");

  const handleOpenImage = (src: string, caption: string) => {
    setActiveImage(src);
    setActiveCaption(caption);
    setLightboxOpen(true);
  };

  return (
    <>
      <section id="materiais" className="py-24 md:py-36 bg-brand-paper text-brand-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Header */}
          <motion.div
            className="max-w-3xl mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold block mb-3">
              Caderno de Especificações
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6">
              Matéria, luz e permanência.
            </h2>
            <p className="text-lg text-brand-muted font-light leading-relaxed">
              A materialidade sugerida parte de uma base mineral neutra e sofisticada, aquecida por tons de palha e sândalo, com o vidro e a serralheria trazendo precisão à composição.
            </p>
          </motion.div>

          {/* Grid of Gallery Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {items.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                onClick={() =>
                  handleOpenImage(item.src, `${item.title} — ${item.description}`)
                }
                className="group cursor-pointer bg-brand-cream border border-brand-dark/10 rounded-sm overflow-hidden hover:border-brand-gold hover:shadow-2xl transition-[border,box-shadow] duration-500 flex flex-col"
              >
                <div className="relative aspect-[4/5] w-full bg-brand-dark overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="inline-flex items-center gap-1.5 text-white text-xs font-semibold uppercase tracking-widest bg-brand-gold/90 text-brand-dark px-3 py-1.5 rounded-sm">
                      <Maximize2 className="w-3.5 h-3.5" /> Ampliar imagem
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="text-xl font-light tracking-tight text-brand-dark mb-2 group-hover:text-brand-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-brand-muted text-xs font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
