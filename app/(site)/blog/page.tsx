import type { Metadata } from "next";
import { PostGrid } from "@/components/blog/PostGrid";
import { SectionTitle } from "@/components/shared/SectionTitle";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Stories",
  description: "All stories from The Call of Light.",
};

const TAGS = ["All", "Fiction", "Poetry", "Essay", "Photography", "Memory"];

export default function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string; tag?: string };
}) {
  const activeTag = searchParams.tag ?? "All";

  return (
    <section className="mx-auto max-w-content px-6 pt-40 pb-32">
      <SectionTitle
        kicker="The Archive"
        title="Stories"
        subtitle="Words that ask to be read slowly."
      />

      <div className="mt-16 flex flex-wrap gap-3 border-b border-border pb-8">
        {TAGS.map((tag) => {
          const isActive = tag === activeTag;
          return (
            <a
              key={tag}
              href={tag === "All" ? "/blog" : `/blog?tag=${tag}`}
              className={`font-mono-ui border px-3 py-1.5 transition-colors duration-400 ${
                isActive
                  ? "bg-heading text-white border-heading"
                  : "border-border text-muted hover:text-heading hover:border-muted"
              }`}
            >
              {tag}
            </a>
          );
        })}
      </div>

      <div className="mt-16">
        <PostGrid tag={searchParams.tag} page={Number(searchParams.page ?? 1)} />
      </div>
    </section>
  );
}
