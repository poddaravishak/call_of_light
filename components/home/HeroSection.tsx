"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { GrainOverlay } from "@/components/layout/GrainOverlay";

type Props = {
  title: string;
  tagline: string;
  description: string;
  bgImage: string;
};

export function HeroSection({ title, tagline, description, bgImage }: Props) {
  const words = title.split(" ");

  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center cover-img"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-bg/60" />
      <GrainOverlay />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-content w-full px-6">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-mono-ui text-accent mb-10"
            >
              {tagline}
            </motion.p>

            <h1 className="font-display text-heading leading-[1.0] text-[56px] md:text-[80px] lg:text-[96px] font-light tracking-tight">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-10 max-w-xl text-[18px] text-text/85 font-serif leading-relaxed"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.15 }}
              className="mt-14"
            >
              <Link
                href="/blog"
                className="font-mono-ui inline-flex items-center gap-3 border border-white px-6 py-3 text-heading hover:bg-white hover:text-black transition-colors duration-400"
              >
                Read the Stories <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-muted"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  );
}
