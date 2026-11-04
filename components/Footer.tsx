"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111111] border-t border-white/[0.08] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 pb-10 sm:pb-12 border-b border-white/[0.08]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Footer Column 1: Real Brand Logo & Info (2 Cols) */}
          <div className="sm:col-span-2">
            <div className="mb-4">
              <Image
                src="/assets/brand/logo-pinciara.png"
                alt="Pinciara Imóveis Exclusivos"
                width={170}
                height={42}
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed mb-3.5 font-light">
              Ponto comercial de alto padrão no novo Polo de Design do Canal de São Francisco (Rua Guaianazes, 46). Vão livre térreo de pé-direito duplo e mezanino integrado (~225,8 m²).
            </p>
            <span className="text-[10px] tracking-wider uppercase font-medium text-champagne">
              CRECI: CJ 7119
            </span>
          </div>

          {/* Footer Column 2: Navigation Links */}
          <div>
            <h4 className="text-[10px] sm:text-[11px] uppercase font-semibold tracking-[0.2em] text-white mb-3.5">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400 font-light">
              <li>
                <a className="hover:text-champagne transition" href="#perspectivas">
                  Perspectivas 3D
                </a>
              </li>
              <li>
                <a className="hover:text-champagne transition" href="#plantas">
                  Plantas Técnicas
                </a>
              </li>
              <li>
                <a className="hover:text-champagne transition" href="#metricas">
                  Especificações &amp; Áreas
                </a>
              </li>
              <li>
                <a className="hover:text-champagne transition" href="#localizacao">
                  Localização Estratégica
                </a>
              </li>
              <li>
                <a className="hover:text-champagne transition" href="#contato">
                  Agendamento de Visita
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Column 3: Contact & Direct Line */}
          <div>
            <h4 className="text-[10px] sm:text-[11px] uppercase font-semibold tracking-[0.2em] text-white mb-3.5">
              Atendimento
            </h4>
            <div className="text-xs text-neutral-400 space-y-2 font-light">
              <p className="text-white font-normal">Luiz Pinciara</p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-champagne shrink-0" />
                <span>(21) 99522-1369</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-champagne shrink-0" />
                <span>São Francisco / Niterói, RJ</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Credits and Back to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-neutral-400 font-light text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Projeto São Francisco — Pinciara Imóveis Exclusivos. Todos os direitos reservados.
          </div>
          <div>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="hover:text-champagne transition inline-flex items-center gap-2 uppercase tracking-[0.16em] text-[10px] font-medium cursor-pointer"
            >
              <span>Voltar ao Topo</span>
              <ArrowUp className="w-3 h-3" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
