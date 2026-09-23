"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-darker text-gray-400 border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-8 h-8 rounded-sm border border-brand-gold/40 flex items-center justify-center bg-brand-gold/10">
                <Image
                  src="/assets/brand/logo.svg"
                  alt="Logo Pinciara Imóveis Exclusivos"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white">
                  PROJETO SÃO FRANCISCO
                </span>
                <span className="text-[9px] uppercase tracking-[0.15em] text-brand-gold font-normal opacity-90">
                  Pinciara Imóveis Exclusivos
                </span>
              </div>
            </div>
            <p className="text-xs font-light text-gray-400 max-w-md leading-relaxed">
              Empreendimento comercial contemporâneo na esquina nobre de São Francisco, Niterói - RJ. Loja + Mezanino (~225m²).
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 text-[11px] uppercase tracking-[0.18em] space-y-3">
            <span className="text-brand-gold font-semibold block mb-4">Navegação</span>
            {[
              { href: "#projeto", label: "O Projeto" },
              { href: "#showroom", label: "Showroom" },
              { href: "#plantas", label: "Plantas Técnicas" },
              { href: "#materiais", label: "Arquitetura" },
              { href: "#localizacao", label: "Localização" },
              { href: "#contato", label: "Contato" },
            ].map(({ href, label }) => (
              <div key={href}>
                <a href={href} className="hover:text-white transition-colors">
                  {label}
                </a>
              </div>
            ))}
          </div>

          {/* Agent Contact Box */}
          <motion.div
            className="md:col-span-4 bg-brand-dark p-6 border border-white/10 rounded-sm"
            whileHover={{ borderColor: "rgba(255,179,0,0.4)", transition: { duration: 0.3 } }}
          >
            <span className="text-[9px] uppercase tracking-[0.2em] text-brand-gold font-semibold block mb-1">
              Corretor Responsável
            </span>
            <h4 className="text-base font-semibold text-white mb-2">Luiz Pinciara</h4>
            <div className="space-y-1.5 text-xs font-light">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <span>(21) 99522-1369</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <span>São Francisco — Niterói / RJ</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light">
          <span>
            © {new Date().getFullYear()} Projeto São Francisco · Pinciara Imóveis Exclusivos.
          </span>
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors uppercase tracking-widest font-medium text-[11px]"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
