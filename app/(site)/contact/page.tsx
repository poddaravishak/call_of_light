import type { Metadata } from "next";
import { ContactForm } from "@/components/shared/ContactForm";
import { SectionTitle } from "@/components/shared/SectionTitle";

export const metadata: Metadata = {
  title: "Reach Out",
  description: "Say something quiet.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-40 pb-32">
      <SectionTitle
        kicker="Reach Out"
        title="Say something quiet."
        subtitle="We read every word."
      />
      <div className="mt-20">
        <ContactForm />
      </div>
    </section>
  );
}
