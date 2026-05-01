import type { Metadata } from "next";
import { AuthorGrid } from "@/components/authors/AuthorGrid";
import { JoinAsAuthorForm } from "@/components/authors/JoinAsAuthorForm";
import { SectionTitle } from "@/components/shared/SectionTitle";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "The Voices",
  description: "The writers of The Call of Light.",
};

export default function AuthorsPage() {
  return (
    <>
      <section className="mx-auto max-w-content px-4 sm:px-6 pt-32 sm:pt-40 pb-16 sm:pb-28">
        <SectionTitle
          kicker="The Voices"
          title="Those who write in silence"
          subtitle="A small gathering of thinkers, poets, and observers."
        />
        <div className="mt-12 sm:mt-20">
          <AuthorGrid />
        </div>
      </section>

      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="border-t border-border" />
      </div>

      <section className="mx-auto max-w-content px-4 sm:px-6 py-16 sm:py-28">
        <div className="max-w-2xl">
          <SectionTitle
            kicker="Write With Us"
            title="Become a voice"
            subtitle="We are looking for writers who see the world differently — those who write not to be heard, but because silence demands it."
          />
        </div>

        <div className="mt-6 max-w-2xl">
          <p className="font-mono-ui text-muted/70 text-[11px] leading-loose">
            We welcome writers of all backgrounds and languages. There are no
            follower counts here, no metrics of reach — only the quality of
            your attention and the honesty of your words.
          </p>
        </div>

        <div className="mt-16 max-w-2xl">
          <JoinAsAuthorForm />
        </div>
      </section>
    </>
  );
}
