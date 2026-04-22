import { NewsletterForm } from "@/components/shared/NewsletterForm";

export function NewsletterBanner() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-content px-6 py-24 text-center">
        <p className="font-mono-ui text-accent mb-6">The Letter</p>
        <h2 className="font-display text-heading text-4xl md:text-5xl mb-4">
          Stories. Silence. Light.
        </h2>
        <p className="text-muted max-w-lg mx-auto mb-10">
          Subscribe to The Call of Light.
        </p>
        <div className="max-w-2xl mx-auto">
          <NewsletterForm />
        </div>
        <p className="font-mono-ui text-muted mt-8">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
