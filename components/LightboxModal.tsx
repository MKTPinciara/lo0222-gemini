"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  caption?: string;
}

export default function LightboxModal({
  isOpen,
  onClose,
  imageSrc,
  caption,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
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
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-brand-gold p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-[110]"
        aria-label="Fechar modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-6xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full flex items-center justify-center overflow-auto p-2">
          <img
            src={imageSrc}
            alt={caption || "Visualização ampliada"}
            className="max-w-full max-h-[80vh] object-contain rounded-sm shadow-2xl border border-white/20"
          />
        </div>

        {/* Caption Bar */}
        {caption && (
          <div className="mt-4 text-center max-w-3xl">
            <p className="text-white text-xs md:text-sm font-light tracking-wide bg-brand-dark/80 px-6 py-3 rounded-sm border border-white/10">
              {caption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
