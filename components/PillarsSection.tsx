"use client";

import { motion } from "motion/react";
import { Compass, Layers, Zap } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    number: "01",
    label: "Identidade",
    title: "Originalidade",
    description:
      "Fachada autoral com marquise esculpida em balanço e brises ripados projetados para ser marco visual na esquina.",
  },
  {
    icon: Layers,
    number: "02",
    label: "Espaço",
    title: "Funcionalidade",
    description:
      "225,8 m² totais com vão livre térreo de pé-direito duplo (147,9 m²) e mezanino integrado (77,9 m²).",
  },
  {
    icon: Zap,
    number: "03",
    label: "Sustentabilidade",
    title: "Infraestrutura EV",
    description:
      "Ponto preparado para carregador veicular elétrico (wallbox), recuo com vagas privativas e iluminação em LED.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function PillarsSection() {
  return (
    <section id="projeto" className="py-24 md:py-36 bg-brand-paper text-brand-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16 border-b border-brand-dark/15 pb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="md:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold block mb-3">
              Conceito Arquitetônico
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]">
              Uma nova leitura da esquina.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg font-light text-brand-muted leading-relaxed">
              Arquitetura contemporânea que equilibra transparência, estrutura metálica e o acolhimento dos brises amadeirados na esquina mais valorizada de São Francisco.
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
              className="bg-brand-cream border border-brand-dark/10 p-8 rounded-sm hover:border-brand-gold/60 transition-colors duration-300 group hover:shadow-xl hover:shadow-brand-gold/5 cursor-default flex flex-col justify-between"
            >
              <div>
                <motion.div
                  className="w-12 h-12 rounded-sm bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors"
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
                <span className="text-xs uppercase tracking-widest font-semibold text-brand-gold block mb-2">
                  {number} / {label}
                </span>
                <h3 className="text-2xl font-light tracking-tight mb-3 group-hover:text-brand-gold transition-colors">
                  {title}
                </h3>
              </div>
              <p className="text-brand-muted font-light text-sm leading-relaxed mt-2">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
