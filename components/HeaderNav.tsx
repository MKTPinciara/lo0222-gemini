"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "#perspectivas", label: "Arquitetura & 3D" },
  { href: "#plantas", label: "Plantas Técnicas" },
  { href: "#metricas", label: "Especificações" },
  { href: "#localizacao", label: "Localização" },
];

export default function HeaderNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#121212]/95 backdrop-blur-md border-b border-white/[0.08] shadow-lg"
          : "bg-[#121212]/75 backdrop-blur-sm border-b border-white/[0.05]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 h-16 sm:h-20 flex items-center justify-between">
        {/* Real Brand Logo */}
        <motion.a
          href="#hero"
          className="flex items-center group"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src="/assets/brand/logo-pinciara.png"
            alt="Pinciara Imóveis Exclusivos"
            width={180}
            height={44}
            priority
            className="h-7 sm:h-9 w-auto object-contain transition-opacity group-hover:opacity-90"
          />
        </motion.a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] uppercase tracking-[0.18em] font-medium text-neutral-300">
          {navLinks.map(({ href, label }, idx) => (
            <motion.a
              key={href}
              href={href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + idx * 0.06 }}
              className="relative py-1 hover:text-champagne transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-champagne hover:after:w-full after:transition-all after:duration-300"
            >
              {label}
            </motion.a>
          ))}
        </nav>

        {/* Action Button */}
        <motion.div
          className="hidden sm:flex items-center gap-4"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-[10px] lg:text-[11px] font-semibold tracking-[0.18em] uppercase bg-champagne text-neutral-950 hover:bg-champagne-light transition-colors duration-300 shadow-sm"
          >
            <span>Agendar Visita</span>
            <ArrowRight className="w-3 h-3" />
          </motion.a>
        </motion.div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-champagne p-2 -mr-2 transition-colors"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-[#141414]/98 backdrop-blur-xl border-b border-white/[0.08] px-5 py-5 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map(({ href, label }, idx) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-[11px] uppercase tracking-[0.18em] text-neutral-300 hover:text-champagne py-2.5 border-b border-white/[0.05] flex items-center justify-between"
                >
                  <span>{label}</span>
                  <ArrowRight className="w-3 h-3 text-champagne/60" />
                </motion.a>
              ))}
              <motion.a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-champagne text-neutral-950 text-[11px] font-semibold uppercase tracking-[0.18em] mt-3 shadow-md"
              >
                <span>Agendar Visita</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
