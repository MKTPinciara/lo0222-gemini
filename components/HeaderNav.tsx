"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "#renders", label: "Fotos 3D" },
  { href: "#plantas", label: "Plantas" },
  { href: "#localizacao", label: "Localização" },
];

export default function HeaderNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-brand-dark/95 backdrop-blur-md py-4 border-b border-white/10 text-white"
          : "bg-gradient-to-b from-brand-dark/80 to-transparent py-6 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo & Title with the new official monogram */}
        <motion.a
          href="#inicio"
          className="flex items-center gap-3 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
            <Image
              src="/assets/brand/simbolo.svg"
              alt="Pinciara Imóveis Exclusivos"
              width={32}
              height={32}
              className="w-7 h-7 object-contain"
            />
          </div>
          <div className="flex flex-col border-l border-white/20 pl-3">
            <span className="text-xs uppercase tracking-[0.22em] font-bold text-white group-hover:text-brand-gold transition-colors">
              PINCIARA
            </span>
            <span className="text-[9px] uppercase tracking-[0.16em] text-brand-gold font-normal">
              São Francisco · Niterói
            </span>
          </div>
        </motion.a>

        {/* Clean Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.18em] font-medium text-gray-300">
          {navLinks.map(({ href, label }, i) => (
            <motion.a
              key={href}
              href={href}
              className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-brand-gold hover:after:w-full after:transition-all"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.2, duration: 0.5 }}
            >
              {label}
            </motion.a>
          ))}
        </nav>

        {/* Action Button */}
        <motion.div
          className="hidden md:flex items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="#contato"
            className="inline-flex items-center gap-2 border border-brand-gold/60 text-brand-gold hover:bg-brand-gold hover:text-brand-dark px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 rounded-sm"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Contato</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>

        {/* Mobile Hamburger Toggle */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-brand-gold p-2 transition-colors"
          aria-label="Abrir menu"
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileMenuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-brand-dark/98 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-5 text-xs uppercase tracking-widest text-gray-200">
              {navLinks.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-brand-gold py-2 border-b border-white/5"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center bg-brand-gold text-brand-dark py-3 font-semibold text-xs uppercase tracking-widest rounded-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                whileTap={{ scale: 0.97 }}
              >
                Falar com Atendimento
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
