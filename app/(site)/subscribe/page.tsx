import type { Metadata } from "next";
import { NewsletterForm } from "@/components/shared/NewsletterForm";
import { SectionTitle } from "@/components/shared/SectionTitle";

export const metadata: Metadata = {
  title: "Subscribe",
  description: "Stories delivered. No noise.",
};

export default function SubscribePage() {
  return (
    <section className="mx-auto max-w-2xl px-4 sm:px-6 pt-32 sm:pt-40 pb-20 sm:pb-32 text-center">
      <SectionTitle
        kicker="The Letter"
        title="Stories. Silence. Light."
        subtitle="Subscribe to The Call of Light — a slow newsletter, never often, always deliberate."
      />
      <div className="mt-12 sm:mt-20 text-left">
        <NewsletterForm />
        <p className="font-mono-ui text-muted mt-8 text-center">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
