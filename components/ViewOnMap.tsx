"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, MapPin } from "lucide-react";

interface ViewOnMapProps {
  locationName?: string;
  address?: string;
  mapImageUrl?: string;
  className?: string;
}

export const ViewOnMap: React.FC<ViewOnMapProps> = ({
  address = "Avenida Presidente Franklin Roosevelt Guajianases Sao Francisco Niteroi",
  locationName = "Ver no Mapa",
  mapImageUrl = "/assets/caderno/page-01.png",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (isOpen) setIsMapLoaded(false);
  };

  const springConfig = {
    type: "spring" as const,
    stiffness: 400,
    damping: 30,
    mass: 0.8,
  };

  const publicMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="relative inline-block">
      <div className={`flex w-full items-center justify-center bg-transparent ${className}`}>
        <AnimatePresence mode="popLayout">
          {!isOpen ? (
            /* --- PILL BUTTON --- */
            <motion.div
              key="button"
              layoutId="map-container"
              onClick={toggleOpen}
              className="group relative flex cursor-pointer items-center justify-center overflow-hidden border border-brand-gold/40 bg-brand-dark px-6 py-3 shadow-lg hover:border-brand-gold transition-colors duration-300"
              style={{ borderRadius: 26 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={springConfig}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                layoutId="map-bg"
                className="absolute inset-0 opacity-15 brightness-90 grayscale transition-opacity"
                style={{
                  backgroundImage: `url(${mapImageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <motion.div className="relative z-10 flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-brand-gold transition-colors" />
                <span className="text-xs font-semibold uppercase tracking-widest text-white">
                  {locationName}
                </span>
              </motion.div>
            </motion.div>
          ) : (
            /* --- EXPANDED MAP MODAL --- */
            <motion.div
              key="map"
              layoutId="map-container"
              className="relative aspect-square w-[calc(100vw-48px)] max-w-[420px] overflow-hidden bg-brand-dark border border-brand-gold/30 shadow-2xl"
              style={{ borderRadius: 24 }}
              transition={springConfig}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="absolute inset-0 h-full w-full"
              >
                <iframe
                  title="Google Map — Projeto São Francisco"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                  }}
                  src={publicMapUrl}
                  allowFullScreen
                  onLoad={() => setIsMapLoaded(true)}
                  className={`transition-opacity duration-700 ${isMapLoaded ? "opacity-100" : "opacity-0"}`}
                />
              </motion.div>

              {!isMapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-brand-dark text-white">
                  <Loader2 className="h-7 w-7 animate-spin text-brand-gold" />
                </div>
              )}

              {/* CLOSE BUTTON */}
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={toggleOpen}
                className="absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-brand-dark/90 text-white border border-brand-gold/40 shadow-lg transition-all hover:bg-brand-gold hover:text-brand-dark active:scale-90"
              >
                <X className="h-5 w-5" strokeWidth={2.5} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ViewOnMap;
