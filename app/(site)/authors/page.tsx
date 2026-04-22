import type { Metadata } from "next";
import { AuthorGrid } from "@/components/authors/AuthorGrid";
import { SectionTitle } from "@/components/shared/SectionTitle";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "The Voices",
  description: "The writers of The Call of Light.",
};

export default function AuthorsPage() {
  return (
    <section className="mx-auto max-w-content px-6 pt-40 pb-32">
      <SectionTitle
        kicker="The Voices"
        title="Those who write in silence"
        subtitle="A small gathering of thinkers, poets, and observers."
      />
      <div className="mt-20">
        <AuthorGrid />
      </div>
    </section>
  );
}
