"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Navigation, ExternalLink, Copy, Check, Car, Zap, Compass } from "lucide-react";

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
    <section id="localizacao" className="py-24 md:py-36 bg-brand-paper text-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Location Details & Route Action */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-gold block mb-3">
              Localização de Prestígio
            </span>

            <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-[1.05] text-brand-dark mb-6">
              Na esquina mais <span className="font-normal text-brand-gold italic font-serif">nobre</span> de São Francisco.
            </h2>

            {/* Address Highlight Card */}
            <motion.div
              className="bg-white border border-brand-dark/15 p-6 rounded-sm mb-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-dark shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-amber-700" />
                </div>
                <div className="flex-grow">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold block mb-0.5">
                    Endereço Oficial
                  </span>
                  <strong className="block text-brand-dark text-lg font-medium leading-snug">
                    Rua Guaianazes, 46
                  </strong>
                  <p className="text-brand-muted text-xs font-light mt-1">
                    Esquina com Av. Presidente Franklin Roosevelt
                  </p>
                  <p className="text-brand-muted text-[11px] font-light">
                    São Francisco — Niterói / RJ · CEP 24360-015
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Neighborhood Description */}
            <p className="text-brand-muted text-sm font-light leading-relaxed mb-6">
              São Francisco é um dos bairros de maior poder aquisitivo de Niterói, reconhecido por abrigar marcas consagradas de decoração, concessionárias premium e gastronomia sofisticada.
            </p>

            {/* Highlights List */}
            <div className="space-y-3 mb-8 text-xs text-brand-dark font-light">
              <div className="flex items-center gap-3">
                <Compass className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Península / Esquina dupla com visibilidade ininterrupta</span>
              </div>
              <div className="flex items-center gap-3">
                <Car className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Vagas de estacionamento privativas no recuo</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Ponto preparado para carregador elétrico veicular (EV)</span>
              </div>
            </div>

            {/* Resolved Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <motion.a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-gold hover:text-brand-dark text-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-sm shadow-md"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Navigation className="w-4 h-4" />
                <span>Traçar Rota no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </motion.a>

              <motion.button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 border border-brand-dark/20 hover:border-brand-gold hover:text-amber-700 text-brand-dark px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] transition-all rounded-sm bg-white shadow-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-amber-700" />
                    <span className="text-amber-700 font-bold">Endereço Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-brand-muted" />
                    <span>Copiar Endereço</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Directly Embedded Interactive Google Maps */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-sm overflow-hidden bg-white border border-brand-dark/15 shadow-2xl">
              {/* Interactive Google Maps Iframe */}
              <iframe
                title="Google Maps — Guaianazes, 46 - São Francisco/Niterói"
                width="100%"
                height="100%"
                loading="lazy"
                src={embedMapUrl}
                className="w-full h-full border-0 contrast-[1.02]"
                allowFullScreen
              />

              {/* Top Banner on Map */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="bg-white/95 backdrop-blur-md border border-brand-dark/10 px-4 py-2 rounded-sm shadow-lg flex items-center gap-2 pointer-events-auto">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse" />
                  <span className="text-[11px] font-semibold text-brand-dark tracking-wide">
                    Guaianazes, 46 — São Francisco, Niterói
                  </span>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-dark text-white p-2 rounded-sm shadow-lg hover:bg-brand-gold hover:text-brand-dark transition-colors pointer-events-auto"
                  title="Abrir no app do Google Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
