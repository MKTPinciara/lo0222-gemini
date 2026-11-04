"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Navigation,
  ExternalLink,
  Copy,
  Check,
  Compass,
  Car,
  Zap,
  Crosshair,
} from "lucide-react";

const locationFeatures = [
  {
    icon: Compass,
    text: "Visibilidade panorâmica ininterrupta com duplo sentido de fluxo viário.",
  },
  {
    icon: Car,
    text: "Vagas privativas na frente do imóvel garantindo comodidade total aos clientes.",
  },
  {
    icon: Zap,
    text: "Ponto preparado para carregador veicular elétrico (EV) e rápida ligação à Zona Sul.",
  },
];

export default function LocationSection() {
  const [copied, setCopied] = useState(false);

  const fullAddress = "Rua Guaianazes, 46 - São Francisco, Niterói - RJ";
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    fullAddress
  )}`;
  const embedMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    fullAddress
  )}&t=&z=17&ie=UTF8&iwloc=&output=embed`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="localizacao"
      className="py-16 md:py-24 bg-[#171717] border-b border-white/[0.08] relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & Value Proposition (6 Cols) */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <span className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-champagne font-semibold block mb-1.5 sm:mb-2">
              Posicionamento Urbano
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight leading-tight">
              No Epicentro do Canal de São Francisco
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed mt-3.5 mb-6 font-light">
              São Francisco é reconhecido pelo mais alto poder aquisitivo per capita de Niterói. O Canal consolidou-se como o mais desejado corredor comercial para grandes marcas de decoração de interiores, náutica, revendas premium e alta gastronomia.
            </p>

            {/* Address Card Highlight */}
            <motion.div
              whileHover={{ y: -2 }}
              className="p-4 sm:p-6 bg-[#1f1f1f] border border-white/[0.09] hover:border-champagne/40 transition-colors mb-6 sm:mb-7 shadow-md"
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 border border-champagne/40 bg-[#141414] flex items-center justify-center shrink-0 text-champagne">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne block">
                    Endereço Oficial
                  </span>
                  <h4 className="text-sm sm:text-base font-semibold text-white mt-0.5">
                    Rua Guaianazes, 46
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                    Esquina com a Av. Presidente Franklin Roosevelt • São Francisco — Niterói / RJ • CEP 24360-015
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Strategic Bullets */}
            <div className="space-y-3 text-xs text-neutral-300 font-light mb-7">
              {locationFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={feat.text}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-6 h-6 bg-[#222222] border border-white/[0.08] text-champagne flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <span className="leading-relaxed">{feat.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Buttons - Full width on mobile for easy thumb access */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <motion.a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-champagne text-neutral-950 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] hover:bg-champagne-light transition shadow-md"
              >
                <Navigation className="w-3.5 h-3.5 shrink-0" />
                <span>Traçar Rota no Google Maps</span>
              </motion.a>

              <motion.button
                type="button"
                onClick={handleCopy}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#1f1f1f] border border-white/[0.1] text-neutral-300 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.16em] hover:border-champagne hover:text-white transition cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-champagne shrink-0" />
                    <span className="text-champagne font-semibold">Endereço Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span>Copiar Endereço</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Gallery Map Frame (6 Cols) */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          >
            <div className="border border-white/[0.1] bg-[#141414] shadow-2xl">
              <div className="px-4 py-3.5 bg-[#191919] border-b border-white/[0.08] flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-300 flex items-center gap-2">
                  <Crosshair className="w-3.5 h-3.5 text-champagne shrink-0" />
                  Geolocalização Satélite
                </span>
                <span className="text-[10px] text-neutral-400">
                  São Francisco, Niterói
                </span>
              </div>

              {/* Map Container */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full bg-[#121212] overflow-hidden">
                <iframe
                  title="Google Maps — Guaianazes, 46 - São Francisco/Niterói"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  src={embedMapUrl}
                  className="w-full h-full border-0 contrast-[1.05] grayscale-[0.3]"
                  allowFullScreen
                />

                {/* Map Overlay Badge */}
                <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-none">
                  <div className="bg-[#1a1a1a]/95 backdrop-blur-md border border-white/[0.12] px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg flex items-center gap-2 pointer-events-auto">
                    <div className="w-2 h-2 rounded-full bg-champagne animate-pulse shrink-0" />
                    <span className="text-[10px] sm:text-[11px] font-medium text-white tracking-wide">
                      Guaianazes, 46 • São Francisco
                    </span>
                  </div>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#141414] text-white p-2 border border-white/[0.12] shadow-lg hover:bg-champagne hover:text-neutral-950 transition-colors pointer-events-auto"
                    title="Abrir no Google Maps"
                  >
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
