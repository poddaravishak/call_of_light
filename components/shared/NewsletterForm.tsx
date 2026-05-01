"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const schema = z.object({
  name: z.string().max(120).optional(),
  email: z.string().email("Enter a valid email."),
});

type FormValues = z.infer<typeof schema>;

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setError(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error ?? "Something went wrong");
      setSubmitted(true);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    }
  };

  const inputClass =
    "w-full bg-white/60 border border-border focus:border-heading focus:bg-white/90 outline-none px-4 py-3 text-base text-text placeholder:text-muted/50 transition-all duration-300";

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-3 font-mono-ui text-accent py-6"
        >
          <Check size={16} /> You are on the list.
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 text-left">
              <label className="font-mono-ui text-muted block mb-2">
                Name
              </label>
              <input
                {...register("name")}
                placeholder="Your name"
                autoComplete="name"
                className={inputClass}
              />
            </div>
            <div className="flex-1 text-left">
              <label className="font-mono-ui text-muted block mb-2">
                Email *
              </label>
              <input
                {...register("email")}
                placeholder="you@domain.com"
                type="email"
                autoComplete="email"
                className={inputClass}
              />
            </div>
          </div>

          {(errors.email || error) && (
            <p className="font-mono-ui text-red-400 text-[11px] text-left">
              {errors.email?.message ?? error}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full font-mono-ui border border-accent text-accent px-6 py-3 hover:bg-accent hover:text-bg transition-colors duration-400 inline-flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? "Sending…" : "Subscribe"} <ArrowRight size={14} />
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
