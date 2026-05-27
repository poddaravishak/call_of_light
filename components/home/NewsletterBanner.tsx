import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

export function NewsletterBanner() {
  return (
    <div>
      {/* 1. THE ESSENCE (About Teaser) */}
      <section className="bg-[#F8F5F0] border-t border-[#E5E0D8] py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center flex flex-col items-center">
          <p className="font-mono-ui text-[11px] text-[#4A4A4A] tracking-[0.25em] uppercase mb-4 flex items-center justify-center">
            <span className="h-px w-6 bg-[#E5E0D8] mr-3" />
            The Essence
            <span className="h-px w-6 bg-[#E5E0D8] ml-3" />
          </p>
          
          <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C] mb-8 font-normal">
            Why we seek the quiet
          </h2>

          <div className="font-serif text-[#4A4A4A] text-lg sm:text-xl leading-relaxed max-w-2xl text-center space-y-6 italic">
            <p>
              “We created this space because the world has become too fast, too loud, and too demanding. We seek a slower rhythm—one where words do not fight for your attention, but invite it quietly.”
            </p>
            <p className="text-base sm:text-lg not-italic font-sans text-[#4A4A4A]/90">
              The Call of Light is an experiment in deliberate publishing, pairing contemplative visuals with honest prose. Here, photopoetry, deep philosophical essays, and personal reflections are given room to breathe, inviting you to sit with stillness. We hope you will find here a quiet corner in a crowded room—where the light arrives late and stays softly.
            </p>
          </div>

          <div className="mt-12">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-8 py-3.5 border border-[#D4A017] text-[#1C1C1C] font-mono-ui text-[11px] tracking-[0.2em] uppercase hover:bg-[#D4A017] hover:text-[#1C1C1C] transition-all duration-500 hover:gap-3"
            >
              Learn More
              <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. JOIN THE LIGHT (Subscription Teaser) */}
      <section className="bg-[#f2ede4] border-t border-[#E5E0D8] py-20 sm:py-32 scroll-mt-10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <p className="font-mono-ui text-[11px] text-[#4A4A4A] tracking-[0.25em] uppercase mb-4 flex items-center justify-center">
              <span className="h-px w-6 bg-[#E5E0D8] mr-3" />
              Join the Light
              <span className="h-px w-6 bg-[#E5E0D8] ml-3" />
            </p>
            <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C] font-normal">
              Support slow journalism & poetry
            </h2>
            <p className="mt-4 font-serif text-[#4A4A4A] max-w-md mx-auto italic text-sm sm:text-base">
              Become part of a quiet community reading at the pace of a Nordic morning.
            </p>
          </div>

          {/* Dual membership cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free newsletter tier */}
            <div className="bg-[#F8F5F0] border border-[#E5E0D8] p-8 sm:p-10 flex flex-col justify-between hover:border-[#4A4A4A]/20 transition-all duration-300">
              <div>
                <span className="font-mono-ui text-[10px] text-[#4A4A4A]/60 tracking-wider uppercase block mb-1">
                  Occasional Reading
                </span>
                <h3 className="font-display text-2xl text-[#1C1C1C] font-normal">
                  Free Newsletter
                </h3>
                <div className="mt-4 flex items-baseline text-[#1C1C1C]">
                  <span className="text-3xl font-display">৳0</span>
                  <span className="ml-1 text-sm font-mono-ui text-[#4A4A4A]/70">/ forever</span>
                </div>
                
                <p className="mt-6 text-sm text-[#4A4A4A] leading-relaxed">
                  Receive our deliberate email journal, delivering carefully selected public poems, short stories, and meditations straight to your inbox.
                </p>

                <ul className="mt-8 space-y-3">
                  <li className="flex items-start gap-2.5 text-xs text-[#4A4A4A]">
                    <Check size={14} className="text-[#D4A017] shrink-0 mt-0.5" />
                    <span>Slow bi-weekly newsletter</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-[#4A4A4A]">
                    <Check size={14} className="text-[#D4A017] shrink-0 mt-0.5" />
                    <span>Access to public articles and galleries</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-[#4A4A4A]">
                    <Check size={14} className="text-[#D4A017] shrink-0 mt-0.5" />
                    <span>No ads, no clickbait, no spam</span>
                  </li>
                </ul>
              </div>

              <div className="mt-10">
                <NewsletterForm />
              </div>
            </div>

            {/* Paid membership tier */}
            <div className="bg-[#F8F5F0] border border-[#D4A017] p-8 sm:p-10 flex flex-col justify-between shadow-[0_10px_30px_-15px_rgba(212,160,23,0.15)] relative hover:border-[#D4A017] transition-all duration-300">
              <span className="absolute top-4 right-4 bg-[#D4A017] text-[#1C1C1C] font-mono-ui text-[8px] tracking-[0.2em] uppercase px-3 py-1 font-semibold">
                Patron
              </span>

              <div>
                <span className="font-mono-ui text-[10px] text-[#D4A017] tracking-wider uppercase block mb-1">
                  Full Devotion
                </span>
                <h3 className="font-display text-2xl text-[#1C1C1C] font-normal">
                  Paid Membership
                </h3>
                <div className="mt-4 flex items-baseline text-[#1C1C1C]">
                  <span className="text-3xl font-display">৳800</span>
                  <span className="ml-1 text-sm font-mono-ui text-[#4A4A4A]/70">/ month</span>
                </div>

                <p className="mt-6 text-sm text-[#4A4A4A] leading-relaxed">
                  Support the poets, essayists, and photographers directly. Unlock our entire archive of deep essays, exclusive sequences, and printable files.
                </p>

                <ul className="mt-8 space-y-3">
                  <li className="flex items-start gap-2.5 text-xs text-[#4A4A4A]">
                    <Check size={14} className="text-[#D4A017] shrink-0 mt-0.5" />
                    <span>Unrestricted access to all content</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-[#4A4A4A]">
                    <Check size={14} className="text-[#D4A017] shrink-0 mt-0.5" />
                    <span>Printable high-quality PDFs of photopoetry</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-[#4A4A4A]">
                    <Check size={14} className="text-[#D4A017] shrink-0 mt-0.5" />
                    <span>Exclusive photo-journalism series</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-[#4A4A4A]">
                    <Check size={14} className="text-[#D4A017] shrink-0 mt-0.5" />
                    <span>Early access to printed collections</span>
                  </li>
                </ul>
              </div>

              <div className="mt-10">
                <Link
                  href="/subscribe"
                  className="w-full font-mono-ui border border-[#1C1C1C] text-[#1C1C1C] bg-[#1C1C1C] text-[#F8F5F0] hover:bg-[#D4A017] hover:border-[#D4A017] hover:text-[#1C1C1C] px-6 py-3.5 transition-all duration-400 inline-flex items-center justify-center gap-2 uppercase tracking-[0.15em] text-[11px]"
                >
                  Become a Member <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
