import type { Metadata } from "next";
import { ContactForm } from "@/components/shared/ContactForm";
import { SectionTitle } from "@/components/shared/SectionTitle";

export const metadata: Metadata = {
  title: "Reach Out",
  description: "Say something quiet.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 pt-32 sm:pt-40 pb-20 sm:pb-32">
      <SectionTitle
        kicker="Reach Out"
        title="Say something quiet."
        subtitle="We read every word."
      />
      <div className="mt-12 sm:mt-20">
        <ContactForm />
      </div>
    </section>
  );
}
