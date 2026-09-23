"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

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
        {/* Brand Logo & Title */}
        <a href="#inicio" className="flex items-center gap-3.5 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Image
              src="/assets/brand/logo.svg"
              alt="Pinciara Imóveis Exclusivos"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-white group-hover:text-brand-gold transition-colors">
              SÃO FRANCISCO
            </span>
            <span className="text-[9px] uppercase tracking-[0.15em] text-brand-gold font-normal opacity-90">
              Pinciara Imóveis Exclusivos
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.18em] font-medium text-gray-300">
          <a
            href="#projeto"
            className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-brand-gold hover:after:w-full after:transition-all"
          >
            O Projeto
          </a>
          <a
            href="#showroom"
            className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-brand-gold hover:after:w-full after:transition-all"
          >
            Showroom
          </a>
          <a
            href="#plantas"
            className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-brand-gold hover:after:w-full after:transition-all"
          >
            Plantas
          </a>
          <a
            href="#materiais"
            className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-brand-gold hover:after:w-full after:transition-all"
          >
            Arquitetura
          </a>
          <a
            href="#localizacao"
            className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-brand-gold hover:after:w-full after:transition-all"
          >
            Localização
          </a>
        </nav>

        {/* Action Button: Scroll to Contact Section */}
        <div className="hidden md:flex items-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 border border-brand-gold/60 text-brand-gold hover:bg-brand-gold hover:text-brand-dark px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 rounded-sm"
          >
            <span>Contato</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-brand-gold p-2 transition-colors"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-dark/98 border-b border-white/10 px-6 py-8 flex flex-col gap-5 text-xs uppercase tracking-widest text-gray-200">
          <a
            href="#projeto"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-brand-gold py-2 border-b border-white/5"
          >
            O Projeto
          </a>
          <a
            href="#showroom"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-brand-gold py-2 border-b border-white/5"
          >
            Showroom
          </a>
          <a
            href="#plantas"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-brand-gold py-2 border-b border-white/5"
          >
            Plantas técnicas
          </a>
          <a
            href="#materiais"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-brand-gold py-2 border-b border-white/5"
          >
            Arquitetura
          </a>
          <a
            href="#localizacao"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-brand-gold py-2 border-b border-white/5"
          >
            Localização
          </a>
          <a
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center bg-brand-gold text-brand-dark py-3 font-semibold text-xs uppercase tracking-widest rounded-sm"
          >
            Falar com Atendimento
          </a>
        </div>
      )}
    </header>
  );
}
