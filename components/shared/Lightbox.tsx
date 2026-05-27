"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type LightboxProps = {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % images.length);
      }
      if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Disable body scroll when lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, currentIndex, images, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % images.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-10 select-none cursor-zoom-out"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#F8F5F0]/70 hover:text-[#D4A017] transition-colors p-2 cursor-pointer z-50"
          aria-label="Close lightbox"
        >
          <X size={28} />
        </button>

        {/* Counter */}
        <div className="absolute top-7 left-8 text-xs font-mono-ui tracking-wider text-[#F8F5F0]/60">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Navigation - Left Arrow */}
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 text-[#F8F5F0]/50 hover:text-[#D4A017] transition-colors p-3 bg-black/20 hover:bg-black/40 rounded-full cursor-pointer z-40"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
        )}

        {/* Main Image Container */}
        <motion.div
          key={currentIndex}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative max-w-full max-h-[85vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()} // Prevent close on clicking image
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentImage}
            alt={`Gallery image ${currentIndex + 1}`}
            className="max-w-[90vw] max-h-[80vh] sm:max-h-[85vh] object-contain shadow-2xl border border-white/5"
            draggable={false}
          />
        </motion.div>

        {/* Navigation - Right Arrow */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 text-[#F8F5F0]/50 hover:text-[#D4A017] transition-colors p-3 bg-black/20 hover:bg-black/40 rounded-full cursor-pointer z-40"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
