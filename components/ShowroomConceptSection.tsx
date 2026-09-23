"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Eye, LayoutGrid, SunMedium, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "Vitrine Contínua de Esquina",
    desc: "Excelente impacto visual para pedestres e veículos na Av. Pres. Franklin Roosevelt.",
  },
  {
    icon: LayoutGrid,
    title: "Vão Livre sem Obstáculos",
    desc: "Liberdade total para montagem de ambientes decorados, cozinhas e closets de showroom.",
  },
  {
    icon: SunMedium,
    title: "Mezanino Reservado",
    desc: "Espaço privativo de 77,92m² ideal para reuniões com clientes e especificações de projetos.",
  },
];

export default function ShowroomConceptSection() {
  return (
    <section id="showroom" className="py-24 md:py-36 bg-brand-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Image Showcase */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-white/10 shadow-2xl group">
              <Image
                src="/assets/caderno/page-05.png"
                alt="Brise de alumínio e arquitetura em São Francisco"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-70" />

              {/* Overlay Badge */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 p-6 bg-brand-dark/90 backdrop-blur-md border border-white/10 rounded-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
              >
                <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-semibold block mb-1">
                  Espaço Comercial de Esquina
                </span>
                <p className="text-gray-300 text-xs font-light leading-relaxed">
                  Fachada ampla com brises em alumínio que protegem o ambiente mantendo a sofisticação da vitrine.
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
              Vocação Comercial
            </span>

            <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-[1.05] mb-6">
              O espaço ideal para a sua{" "}
              <span className="font-normal text-brand-gold italic font-serif">Flagship Store.</span>
            </h2>

            <p className="text-gray-300 font-light text-base md:text-lg leading-relaxed mb-8">
              Projetado para marcas de móveis planejados de alto padrão e escritórios de arquitetura. Oferece a combinação perfeita entre área de exposição térrea, pé-direito duplo e visibilidade contínua de esquina.
            </p>

            {/* List of Benefits */}
            <div className="space-y-6 mb-10">
              {benefits.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * i + 0.3, duration: 0.6, ease: "easeOut" }}
                >
                  <div className="p-2 rounded-sm bg-white/5 border border-white/10 text-brand-gold shrink-0 mt-1">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">{title}</h4>
                    <p className="text-gray-400 text-xs font-light leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <motion.a
                href="#contato"
                className="inline-flex items-center gap-2 border border-brand-gold/60 text-brand-gold hover:bg-brand-gold hover:text-brand-dark px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all rounded-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Solicitar Informações no Formulário</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
