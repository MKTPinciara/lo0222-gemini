"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export interface LightboxItem {
  src: string;
  title?: string;
  caption?: string;
  category?: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc?: string;
  caption?: string;
  items?: LightboxItem[];
  currentIndex?: number;
  onNavigate?: (index: number) => void;
}

export default function LightboxModal({
  isOpen,
  onClose,
  imageSrc,
  caption,
  items,
  currentIndex = 0,
  onNavigate,
}: LightboxModalProps) {
  const hasMultiple = items && items.length > 1;
  const currentItem = items && items[currentIndex] ? items[currentIndex] : null;

  const activeSrc = currentItem ? currentItem.src : imageSrc || "";
  const activeTitle = currentItem?.title;
  const activeCaption = currentItem?.caption || caption;
  const activeCategory = currentItem?.category;

  const handlePrev = useCallback(() => {
    if (!hasMultiple || !onNavigate) return;
    const nextIdx = (currentIndex - 1 + items.length) % items.length;
    onNavigate(nextIdx);
  }, [hasMultiple, onNavigate, currentIndex, items]);

  const handleNext = useCallback(() => {
    if (!hasMultiple || !onNavigate) return;
    const nextIdx = (currentIndex + 1) % items.length;
    onNavigate(nextIdx);
  }, [hasMultiple, onNavigate, currentIndex, items]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  return (
    <AnimatePresence>
      {isOpen && activeSrc && (
        <motion.div
          key="lightbox-overlay"
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-8 select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          {/* Top Bar with counter, category and close */}
          <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-[120]">
            <div className="flex items-center gap-3">
              {hasMultiple && (
                <span className="text-xs uppercase tracking-widest text-brand-gold bg-brand-dark/90 px-3 py-1.5 rounded-sm border border-brand-gold/30 font-medium">
                  {currentIndex + 1} / {items.length}
                </span>
              )}
              {activeCategory && (
                <span className="hidden sm:inline-block text-[11px] uppercase tracking-wider text-gray-300 bg-white/10 px-3 py-1.5 rounded-sm">
                  {activeCategory}
                </span>
              )}
            </div>

            <motion.button
              onClick={onClose}
              className="text-white hover:text-brand-gold p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Fechar visualização"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </div>

          {/* Navigation Arrows */}
          {hasMultiple && (
            <>
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-[115] text-white hover:text-brand-gold p-3 sm:p-4 rounded-full bg-black/50 hover:bg-black/80 border border-white/10 transition-colors"
                aria-label="Imagem anterior"
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.button>

              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-[115] text-white hover:text-brand-gold p-3 sm:p-4 rounded-full bg-black/50 hover:bg-black/80 border border-white/10 transition-colors"
                aria-label="Próxima imagem"
                whileHover={{ scale: 1.1, x: 3 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.button>
            </>
          )}

          {/* Main Image Container */}
          <motion.div
            className="relative max-w-6xl max-h-[82vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full h-full flex items-center justify-center p-1 sm:p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={activeSrc}
                src={activeSrc}
                alt={activeTitle || activeCaption || "Visualização ampliada em alta resolução"}
                className="max-w-full max-h-[72vh] sm:max-h-[76vh] object-contain rounded-sm shadow-2xl border border-white/15 animate-fadeIn"
              />
            </div>

            {/* Title & Caption Bar */}
            {(activeTitle || activeCaption) && (
              <motion.div
                key={`caption-${activeSrc}`}
                className="mt-3 text-center max-w-3xl px-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-brand-dark/90 px-6 py-3 rounded-sm border border-white/10 backdrop-blur-md">
                  {activeTitle && (
                    <h4 className="text-white text-sm sm:text-base font-medium tracking-tight mb-0.5">
                      {activeTitle}
                    </h4>
                  )}
                  {activeCaption && (
                    <p className="text-gray-300 text-xs sm:text-sm font-light tracking-wide">
                      {activeCaption}
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
