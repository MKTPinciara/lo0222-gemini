"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Maximize2, Sparkles, ArrowRight } from "lucide-react";
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
    src: "/assets/renders/02-fachada-frontal-crepusculo.jpg",
    title: "Brises em Madeira & Alumínio",
    subtitle: "Controle Térmico & Luz Filtrada",
    description:
      "Ripas verticais nobres que protegem contra o sol da tarde sem vedar a vista nem a luminosidade da vitrine.",
  },
  {
    id: "02",
    src: "/assets/renders/09-fachada-cobertura-marquise.jpg",
    title: "Marquise Esculpida em Balanço",
    subtitle: "Forro Amadeirado & Sanca LED",
    description:
      "Cobertura angular com perfis pretos foscos e iluminação linear indireta que valoriza a esquina ao anoitecer.",
  },
  {
    id: "03",
    src: "/assets/renders/11-pele-de-vidro-mezanino.jpg",
    title: "Pele de Vidro & Pé-Direito Duplo",
    subtitle: "Transparência & Visibilidade",
    description:
      "Grandes planos envidraçados que expõem o showroom térreo e o mezanino como uma vitrine de galeria de arte.",
  },
  {
    id: "04",
    src: "/assets/renders/05-acesso-carregador-eletrico.jpg",
    title: "Mobilidade EV & Paisagismo",
    subtitle: "Carregador Elétrico & Espécies Tropicais",
    description:
      "Ponto para wallbox veicular integrado ao portão ripado de correr e jardineiras com folhagens tropicais.",
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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold block mb-3">
                Materialidade &amp; Especificações
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6">
                Matéria, luz e permanência.
              </h2>
              <p className="text-lg text-brand-muted font-light leading-relaxed">
                A materialidade do projeto une a robustez do aço carbono preto, o calor da madeira tratada nos brises e a precisão do vidro temperado com iluminação cênica.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <a
                href="#renders"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-dark hover:text-brand-gold transition-colors pb-1 border-b-2 border-brand-gold"
              >
                <span>Ver Todos os 16 Renders</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

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
                <div className="relative aspect-[4/3] w-full bg-brand-dark overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="inline-flex items-center gap-1.5 text-brand-dark text-xs font-semibold uppercase tracking-widest bg-brand-gold px-3 py-1.5 rounded-sm">
                      <Maximize2 className="w-3.5 h-3.5" /> Ampliar 3D
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
