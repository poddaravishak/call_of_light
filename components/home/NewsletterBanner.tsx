import { NewsletterForm } from "@/components/shared/NewsletterForm";

export function NewsletterBanner() {
  return (
    <section className="border-y border-border bg-surface/80 backdrop-blur-[2px]">
      <div className="mx-auto max-w-content px-6 py-16 sm:py-28 text-center">
        <p className="font-mono-ui text-ink/80 mb-8 inline-flex items-center">
          <span className="hairline" />
          The Letter
        </p>
        <h2 className="font-display text-heading text-3xl sm:text-4xl md:text-5xl mb-6 tracking-tight">
          Stories. Silence. Light.
        </h2>
        <p className="text-muted max-w-lg mx-auto mb-12 font-serif italic">
          Subscribe to The Call of Light.
        </p>
        <div className="max-w-2xl mx-auto">
          <NewsletterForm />
        </div>
        <p className="font-mono-ui text-muted mt-10">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
