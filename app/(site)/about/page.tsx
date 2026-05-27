"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="pb-24 sm:pb-36 bg-[#F8F5F0]">
      {/* 1. Hero Image Cover */}
      <div className="relative w-full h-[55vh] sm:h-[65vh] overflow-hidden bg-[#1C1C1C]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-85"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80')`,
            filter: "grayscale(10%) sepia(8%) contrast(1.02)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F5F0] via-black/10 to-black/50 pointer-events-none" />
        
        {/* Overlaid Title */}
        <div className="absolute inset-x-0 bottom-12 max-w-4xl mx-auto px-6 text-center">
          <p className="font-mono-ui text-[10px] text-[#F8F5F0]/80 tracking-[0.25em] uppercase mb-3">
            Our Manifesto
          </p>
          <h1 className="font-display italic text-4xl sm:text-6xl text-[#1C1C1C] font-normal leading-tight">
            The Philosophy of Light
          </h1>
        </div>
      </div>

      {/* 2. Main Content Layout */}
      <div className="max-w-3xl mx-auto px-6 mt-16 sm:mt-24 space-y-16">
        
        {/* Name Justification section */}
        <div className="space-y-6">
          <p className="font-mono-ui text-[11px] text-[#D4A017] tracking-[0.25em] uppercase font-semibold">
            I. What is The Call of Light?
          </p>
          
          <div className="font-serif text-[#1C1C1C] text-[18px] sm:text-[19px] leading-[1.8] space-y-6 text-justify">
            <p>
              In an era defined by high-frequency inputs and digital noise, we have gradually lost the capacity for unhurried observation. We consume images in milliseconds and essays in bullet points, forgetting that meaning resides not in speed, but in depth.
            </p>
            <p>
              <strong>The Call of Light</strong> was established in late 2025 as a sanctuary for deliberate reading. The name refers to the late-arriving, slow northern light—the kind of light that does not immediately expose the landscape, but gently coaxes it out of the gray hours. It is an invitation to pause, to look closer, and to listen to the dialogue between images and words.
            </p>
          </div>
        </div>

        {/* Vision section */}
        <div className="space-y-6">
          <p className="font-mono-ui text-[11px] text-[#D4A017] tracking-[0.25em] uppercase font-semibold">
            II. Our Creative Vision
          </p>
          
          <div className="font-serif text-[#4A4A4A] text-[17px] sm:text-[18px] leading-[1.8] space-y-6 text-justify">
            <p>
              We believe that visual art and literature are not separate exhibits, but complementary parts of a singular conversation. We pair photographs with poetry in a way that respects the silence between them. Our poetry is given large space and generous line heights; our essays are typeset with classic serif columns.
            </p>
            <blockquote className="border-l-2 border-[#D4A017] pl-6 my-6 font-display italic text-xl text-[#1C1C1C] leading-relaxed">
              “True silence is not an absence of sound, but an arrangement of quiet details that hold room for attention.”
            </blockquote>
            <p>
              We prioritize harmonized aesthetics, warm paper-tint backgrounds, and clean border treatments. You will find no bright flashing animations, no crowded sidebars, and no aggressive calls to action. We offer a quiet room where the materials speak for themselves.
            </p>
          </div>
        </div>

        {/* Future plans and print collections */}
        <div className="space-y-6">
          <p className="font-mono-ui text-[11px] text-[#D4A017] tracking-[0.25em] uppercase font-semibold">
            III. The Multilingual Future
          </p>
          
          <div className="font-serif text-[#4A4A4A] text-[17px] sm:text-[18px] leading-[1.8] space-y-6 text-justify">
            <p>
              As a space born of diverse perspectives, we believe that poetry breathes differently in different tongues. We are actively developing a multilingual framework to support collections in English, Bengali, French, and other literary languages—ensuring that translators are credited as creators in their own right.
            </p>
            <p>
              Additionally, our long-term roadmap focuses on physical publishing. In mid-2027, we plan to release our first printed anthology—a clothbound, high-end book collecting our favorite photopoetry and meditating essays, designed to be held in the hands and kept on the bookshelf.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="border-t border-[#E5E0D8] pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="font-display italic text-xl text-[#1C1C1C]">
              Join the quiet sanctuary
            </h4>
            <p className="text-xs font-serif text-[#4A4A4A] mt-1">
              Read at the pace of a Nordic morning.
            </p>
          </div>
          
          <Link
            href="/subscribe"
            className="group inline-flex items-center gap-2 px-6 py-3 border border-[#1C1C1C] hover:bg-[#D4A017] hover:border-[#D4A017] text-[#1C1C1C] font-mono-ui text-[10px] tracking-wider uppercase transition-all duration-300"
          >
            Become a Patron <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
