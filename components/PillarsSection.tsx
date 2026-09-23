"use client";

import { motion } from "motion/react";
import { Compass, Layers, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    number: "01",
    label: "Conceito",
    title: "Originalidade",
    description:
      "Traços autorais próprios, composição geométrica equilibrada e uma fachada projetada para atrair os olhares de quem circula em São Francisco.",
  },
  {
    icon: Layers,
    number: "02",
    label: "Espaço",
    title: "Funcionalidade",
    description:
      "Vãos livres amplos, integração de dois níveis (loja + mezanino) e flexibilidade total para instalação de ambientes decorados e layouts de showroom.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    label: "Materialidade",
    title: "Modernidade",
    description:
      "Uso estratégico de brises metálicos de alumínio, pele de vidro de alta performance e acabamento de padrão elevado que eleva o prestígio da sua marca.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" as const },
  },
};

export default function PillarsSection() {
  return (
    <section id="projeto" className="py-24 md:py-36 bg-brand-paper text-brand-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-20 border-b border-brand-dark/15 pb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <div className="md:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold block mb-3">
              Conceito &amp; Filosofia
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
        </motion.div>

        {/* 3 Pillars Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {pillars.map(({ icon: Icon, number, label, title, description }) => (
            <motion.div
              key={number}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
              className="bg-brand-cream border border-brand-dark/10 p-8 rounded-sm hover:border-brand-gold/60 transition-colors duration-300 group hover:shadow-xl hover:shadow-brand-gold/5 cursor-default"
            >
              <motion.div
                className="w-12 h-12 rounded-sm bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors"
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Icon className="w-6 h-6" />
              </motion.div>
              <span className="text-xs uppercase tracking-widest font-semibold text-brand-gold block mb-2">
                {number} / {label}
              </span>
              <h3 className="text-2xl font-light tracking-tight mb-4 group-hover:text-brand-gold transition-colors">
                {title}
              </h3>
              <p className="text-brand-muted font-light text-sm leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
