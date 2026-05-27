"use client";

import { motion } from "framer-motion";
import { Check, Star, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

type FormValues = z.infer<typeof schema>;

export default function SubscribePage() {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    // Mock successful signup
    setSuccess(true);
  };

  return (
    <section className="mx-auto max-w-6xl px-6 pt-32 sm:pt-40 pb-20 sm:pb-32 bg-[#F8F5F0]">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
        <p className="font-mono-ui text-[11px] text-[#4A4A4A] tracking-[0.25em] uppercase mb-4">
          Devotion levels
        </p>
        <h1 className="font-display italic text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1C] font-normal leading-tight">
          Become a Member of The Call of Light
        </h1>
        <p className="mt-4 font-serif text-[#4A4A4A] text-lg sm:text-xl italic max-w-lg mx-auto">
          Support unhurried words and slow visual galleries. Join our quiet community.
        </p>
      </div>

      {/* Tiers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch mb-20">
        
        {/* Tier 1: Free */}
        <div className="bg-[#F8F5F0] border border-[#E5E0D8] p-8 sm:p-10 flex flex-col justify-between hover:border-[#4A4A4A]/25 transition-all duration-300">
          <div>
            <span className="font-mono-ui text-[10px] text-[#4A4A4A]/60 tracking-wider uppercase block mb-1">
              Quiet Observer
            </span>
            <h2 className="font-display text-2xl text-[#1C1C1C] font-normal">
              Free Tier
            </h2>
            <div className="mt-4 flex items-baseline text-[#1C1C1C]">
              <span className="text-4xl font-display">৳0</span>
              <span className="ml-1 text-sm font-mono-ui text-[#4A4A4A]/70">/ forever</span>
            </div>

            <p className="mt-6 text-sm text-[#4A4A4A] leading-relaxed">
              Read occasional updates, public poetry galleries, and meditational essays. Never rushed, delivered directly.
            </p>

            <div className="h-px bg-[#E5E0D8] my-6" />

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-xs text-[#4A4A4A]">
                <Check size={14} className="text-[#D4A017] shrink-0 mt-0.5" />
                <span>Bi-weekly email newsletter</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-[#4A4A4A]">
                <Check size={14} className="text-[#D4A017] shrink-0 mt-0.5" />
                <span>Access to all public catalog entries</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-[#4A4A4A]">
                <Check size={14} className="text-[#D4A017] shrink-0 mt-0.5" />
                <span>Ad-free writing experience</span>
              </li>
            </ul>
          </div>

          <div className="mt-10">
            {success ? (
              <div className="font-mono-ui text-xs text-[#D4A017] py-3 text-center border border-[#D4A017]">
                Welcome to the list.
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  {...register("email")}
                  className="w-full bg-white border border-[#E5E0D8] focus:border-[#D4A017] outline-none px-4 py-2.5 text-xs text-[#1C1C1C]"
                />
                {errors.email && (
                  <p className="text-[10px] text-red-500 font-mono-ui">{errors.email.message}</p>
                )}
                <button
                  type="submit"
                  className="w-full bg-[#1C1C1C] hover:bg-[#D4A017] text-[#F8F5F0] hover:text-[#1C1C1C] font-mono-ui text-[10px] tracking-wider uppercase py-3 transition-colors cursor-pointer"
                >
                  Join Free
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Tier 2: Monthly Member */}
        <div className="bg-[#F8F5F0] border border-[#E5E0D8] p-8 sm:p-10 flex flex-col justify-between hover:border-[#4A4A4A]/25 transition-all duration-300 relative">
          <div>
            <span className="font-mono-ui text-[10px] text-[#4A4A4A]/60 tracking-wider uppercase block mb-1">
              Active Reader
            </span>
            <h2 className="font-display text-2xl text-[#1C1C1C] font-normal">
              Monthly Member
            </h2>
            <div className="mt-4 flex items-baseline text-[#1C1C1C]">
              <span className="text-4xl font-display">৳800</span>
              <span className="ml-1 text-sm font-mono-ui text-[#4A4A4A]/70">/ month</span>
            </div>

            <p className="mt-6 text-sm text-[#4A4A4A] leading-relaxed">
              Unlock the entire vault of philosophical essays, photopoetry, and personal reflections. Deepen your relationship with stillness.
            </p>

            <div className="h-px bg-[#E5E0D8] my-6" />

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-xs text-[#4A4A4A]">
                <Check size={14} className="text-[#D4A017] shrink-0 mt-0.5" />
                <span>Unrestricted access to all contents</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-[#4A4A4A]">
                <Check size={14} className="text-[#D4A017] shrink-0 mt-0.5" />
                <span>Early access to upcoming features</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-[#4A4A4A]">
                <Check size={14} className="text-[#D4A017] shrink-0 mt-0.5" />
                <span>Participate in the dialog comments</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-[#4A4A4A]">
                <Check size={14} className="text-[#D4A017] shrink-0 mt-0.5" />
                <span>Complete ad-free meditation</span>
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <button
              onClick={() => alert("Monthly billing portal opening...")}
              className="w-full border border-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-[#F8F5F0] text-[#1C1C1C] font-mono-ui text-[10px] tracking-wider uppercase py-3 transition-colors cursor-pointer"
            >
              Choose Monthly
            </button>
          </div>
        </div>

        {/* Tier 3: Yearly Member */}
        <div className="bg-[#F8F5F0] border-2 border-[#D4A017] p-8 sm:p-10 flex flex-col justify-between shadow-[0_15px_35px_-20px_rgba(212,160,23,0.25)] relative transition-all duration-300">
          
          {/* Most popular badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4A017] text-[#1C1C1C] font-mono-ui text-[9px] tracking-[0.2em] uppercase px-4 py-1 font-semibold flex items-center gap-1.5 shadow-sm">
            <Star size={10} fill="#1C1C1C" /> Most Popular
          </div>

          <div>
            <span className="font-mono-ui text-[10px] text-[#D4A017] tracking-wider uppercase block mb-1">
              Infinite Patron
            </span>
            <h2 className="font-display text-2xl text-[#1C1C1C] font-normal">
              Yearly Member
            </h2>
            <div className="mt-4 flex items-baseline text-[#1C1C1C]">
              <span className="text-4xl font-display">৳8,000</span>
              <span className="ml-1 text-sm font-mono-ui text-[#4A4A4A]/70">/ year</span>
            </div>

            <p className="mt-6 text-sm text-[#4A4A4A] leading-relaxed font-semibold">
              Save 20% compared to monthly. Support printing high-quality photopoetry collections.
            </p>

            <div className="h-px bg-[#E5E0D8] my-6" />

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-xs text-[#4A4A4A] font-semibold">
                <Check size={14} className="text-[#D4A017] shrink-0 mt-0.5" />
                <span>All Monthly tier benefits included</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-[#4A4A4A]">
                <Check size={14} className="text-[#D4A017] shrink-0 mt-0.5" />
                <span>High-resolution printable photopoetry PDFs</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-[#4A4A4A]">
                <Check size={14} className="text-[#D4A017] shrink-0 mt-0.5" />
                <span>Exclusive photo journalism sequences</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-[#4A4A4A]">
                <Check size={14} className="text-[#D4A017] shrink-0 mt-0.5" />
                <span>10% discount on future physical prints</span>
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <button
              onClick={() => alert("Yearly billing portal opening...")}
              className="w-full bg-[#1C1C1C] hover:bg-[#D4A017] text-[#F8F5F0] hover:text-[#1C1C1C] font-mono-ui text-[10px] tracking-wider uppercase py-3 transition-colors cursor-pointer"
            >
              Choose Yearly
            </button>
          </div>
        </div>

      </div>

      {/* Quiet Help Center banner */}
      <div className="border-t border-[#E5E0D8] pt-12 text-center max-w-xl mx-auto">
        <h4 className="font-display italic text-lg text-[#1C1C1C] mb-2">
          Questions regarding devotion?
        </h4>
        <p className="text-xs text-[#4A4A4A] font-serif leading-relaxed">
          If you have any questions regarding your billing cycle, cancellation policies, or print downloads, feel free to contact us quietly at <span className="underline select-all text-[#1C1C1C]">journal@calloflight.com</span>. We respond at the speed of a letter.
        </p>
      </div>
    </section>
  );
}
