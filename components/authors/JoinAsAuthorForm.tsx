"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Feather } from "lucide-react";

const GENRES = [
  "Fiction",
  "Non-Fiction",
  "Poetry",
  "Personal Essay",
  "Literary Criticism",
  "Journalism",
  "Translation",
  "Other",
] as const;

const schema = z.object({
  name: z.string().min(2, "Please enter your name").max(120),
  email: z.string().email("Enter a valid email address"),
  languages: z.string().min(2, "Please list at least one language").max(200),
  genre: z.string().min(1, "Please select a writing style"),
  bio: z
    .string()
    .min(50, "Please write at least 50 characters")
    .max(600, "Keep it under 600 characters"),
  motivation: z
    .string()
    .min(50, "Please write at least 50 characters")
    .max(1000, "Keep it under 1000 characters"),
  portfolio: z
    .string()
    .url("Enter a valid URL including https://")
    .or(z.literal(""))
    .optional(),
});

type FormValues = z.infer<typeof schema>;

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <div className="flex items-baseline justify-between mb-2">
        <label className="font-mono-ui text-muted">{label}</label>
        {hint && (
          <span className="font-mono-ui text-[10px] text-muted/50 tracking-widest uppercase">
            {hint}
          </span>
        )}
      </div>
      {children}
      {error && (
        <p className="font-mono-ui text-red-400 mt-2 text-[11px]">{error}</p>
      )}
    </div>
  );
}

export function JoinAsAuthorForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setServerError(null);
    try {
      const res = await fetch("/api/join-author", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error ?? "Something went wrong");
      setSubmitted(true);
    } catch (e: unknown) {
      setServerError(e instanceof Error ? e.message : "Something went wrong");
    }
  };

  const inputClass =
    "w-full bg-white/60 border border-border focus:border-heading focus:bg-white/90 outline-none px-4 py-3 text-base text-text placeholder:text-muted/50 transition-all duration-300";

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-border p-10 sm:p-16 text-center"
        >
          <Feather className="mx-auto text-accent mb-6" size={26} />
          <h3 className="font-display text-3xl text-heading mb-4">
            Application received.
          </h3>
          <p className="text-muted max-w-sm mx-auto font-serif leading-relaxed italic">
            We read every voice with care. You will hear from us when the
            silence speaks.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            <Field label="Full Name *" error={errors.name?.message}>
              <input
                {...register("name")}
                className={inputClass}
                placeholder="As you'd like to be published"
                autoComplete="name"
              />
            </Field>

            <Field label="Email Address *" error={errors.email?.message}>
              <input
                {...register("email")}
                type="email"
                className={inputClass}
                placeholder="you@domain.com"
                autoComplete="email"
              />
            </Field>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            <Field
              label="Language(s) of Writing *"
              hint="comma-separated"
              error={errors.languages?.message}
            >
              <input
                {...register("languages")}
                className={inputClass}
                placeholder="English, Bengali, French…"
              />
            </Field>

            <Field
              label="Writing Style / Genre *"
              error={errors.genre?.message}
            >
              <div className="relative">
                <select
                  {...register("genre")}
                  className={`${inputClass} pr-10 cursor-pointer appearance-none`}
                >
                  <option value="">Select one</option>
                  {GENRES.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={15}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
                />
              </div>
            </Field>
          </div>

          <Field
            label="Brief Bio *"
            hint="50 – 600 characters"
            error={errors.bio?.message}
          >
            <textarea
              {...register("bio")}
              rows={4}
              className={`${inputClass} resize-none`}
              placeholder="Who are you as a writer? Where do your words come from?"
            />
          </Field>

          <Field
            label="Why The Call of Light? *"
            hint="50 – 1000 characters"
            error={errors.motivation?.message}
          >
            <textarea
              {...register("motivation")}
              rows={5}
              className={`${inputClass} resize-none`}
              placeholder="What draws you here, and what would you bring to these pages?"
            />
          </Field>

          <Field
            label="Portfolio or Writing Sample"
            hint="optional"
            error={errors.portfolio?.message}
          >
            <input
              {...register("portfolio")}
              type="url"
              className={inputClass}
              placeholder="https://yourwork.com"
            />
          </Field>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mt-4 pt-6 border-t border-border">
            <p className="font-mono-ui text-muted/60 text-[10px] leading-relaxed">
              We review all applications and respond personally.
              <br />
              No automated replies, no form letters.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:flex-shrink-0">
              {serverError && (
                <p className="font-mono-ui text-red-400 text-[11px]">
                  {serverError}
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto font-mono-ui border border-heading text-heading px-6 py-3 hover:bg-heading hover:text-white transition-colors duration-400 inline-flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting…" : "Submit Application"}
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
