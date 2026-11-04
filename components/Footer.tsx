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
            <div className="mb-4">
              <Image
                src="/assets/brand/logo.svg"
                alt="Pinciara Imóveis Exclusivos"
                width={200}
                height={50}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-xs font-light text-gray-400 max-w-md leading-relaxed mb-3">
              Ponto comercial de alto padrão na esquina nobre de São Francisco (Rua Guaianazes, 46). Vão livre térreo de pé-direito duplo e mezanino integrado (~225,8 m²).
            </p>
            <span className="text-[10px] uppercase tracking-widest text-brand-gold font-medium">
              CRECI: CJ 7119
            </span>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 text-[11px] uppercase tracking-[0.18em] space-y-3">
            <span className="text-brand-gold font-semibold block mb-4">Navegação</span>
            {[
              { href: "#renders", label: "Fotos 3D" },
              { href: "#plantas", label: "Plantas Técnicas" },
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
                <span>Guaianazes, 46 — São Francisco / Niterói</span>
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
