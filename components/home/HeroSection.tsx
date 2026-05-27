"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Props = {
  bgImage: string;
};

export function HeroSection({ bgImage }: Props) {
  const handleScrollDown = () => {
    const el = document.getElementById("featured-poetry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#1C1C1C]">
      {/* Background with fixed/parallax visual treatment */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-70"
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: "grayscale(15%) sepia(10%) contrast(1.05)",
        }}
      />

      {/* Top to Bottom gradient overlay: dark to warm/transparent */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      {/* Centered Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-mono-ui text-[11px] text-[#E5E0D8]/80 tracking-[0.3em] uppercase mb-4"
        >
          A Quiet Space of Attention
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-display italic text-5xl sm:text-7xl md:text-8xl lg:text-[100px] text-[#D4A017] leading-[1.1] tracking-tight font-medium drop-shadow-sm select-none"
        >
          The Call of Light
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 font-display text-[#F8F5F0] text-lg sm:text-xl md:text-2xl tracking-[0.06em] font-light max-w-2xl"
        >
          Photopoetry, Philosophy & Silent Reflections
        </motion.p>

        {/* Begin Journey Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12"
        >
          <button
            onClick={handleScrollDown}
            className="group px-8 py-3.5 border border-[#D4A017] text-[#F8F5F0] font-mono-ui text-[11px] tracking-[0.2em] uppercase hover:bg-[#D4A017] hover:text-[#1C1C1C] transition-all duration-500 ease-in-out cursor-pointer hover:shadow-[0_0_20px_rgba(212,160,23,0.3)]"
          >
            Begin the Journey
          </button>
        </motion.div>
      </div>

      {/* Down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[#F8F5F0]/70 cursor-pointer"
        onClick={handleScrollDown}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
