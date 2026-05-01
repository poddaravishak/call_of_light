"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const schema = z.object({
  name: z.string().min(1, "Required").max(120),
  email: z.string().email("Enter a valid email."),
  subject: z.string().min(1, "Required").max(200),
  message: z.string().min(1, "Required").max(4000),
});

type FormValues = z.infer<typeof schema>;

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <label className="font-mono-ui text-muted block mb-2">{label}</label>
      {children}
      {error && (
        <p className="font-mono-ui text-red-400 mt-2 text-[11px]">{error}</p>
      )}
    </div>
  );
}

export function ContactForm() {
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
      const res = await fetch("/api/contact", {
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
          className="border border-border p-10 sm:p-16 text-center"
        >
          <Check className="mx-auto text-accent mb-6" size={28} />
          <h3 className="font-display text-3xl text-heading mb-4">
            Message received.
          </h3>
          <p className="text-muted">We will reply when the quiet allows.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            <Field label="Name *" error={errors.name?.message}>
              <input
                {...register("name")}
                className={inputClass}
                placeholder="Your name"
                autoComplete="name"
              />
            </Field>
            <Field label="Email *" error={errors.email?.message}>
              <input
                {...register("email")}
                type="email"
                className={inputClass}
                placeholder="you@domain.com"
                autoComplete="email"
              />
            </Field>
          </div>

          <Field label="Subject *" error={errors.subject?.message}>
            <input
              {...register("subject")}
              className={inputClass}
              placeholder="A single clear line"
            />
          </Field>

          <Field label="Message *" error={errors.message?.message}>
            <textarea
              {...register("message")}
              rows={6}
              className={`${inputClass} resize-none`}
              placeholder="Say what needs saying."
            />
          </Field>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4 mt-6">
            {error && (
              <p className="font-mono-ui text-red-400 text-[11px]">{error}</p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto font-mono-ui border border-heading text-heading px-6 py-3 hover:bg-heading hover:text-white transition-colors duration-400 inline-flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? "Sending…" : "Send Message"}
              <ArrowRight size={14} />
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
