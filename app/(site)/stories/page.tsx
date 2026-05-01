import type { Metadata } from "next";
import { PostGrid } from "@/components/blog/PostGrid";
import { SectionTitle } from "@/components/shared/SectionTitle";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Stories",
  description: "All stories from The Call of Light.",
};

const TAGS = ["All", "Fiction", "Poetry", "Essay", "Photography", "Memory"];
const LANGUAGES = ["All", "English", "Bengali", "French"];

export default function StoriesPage({
  searchParams,
}: {
  searchParams: { page?: string; tag?: string; lang?: string };
}) {
  const activeTag = searchParams.tag ?? "All";
  const activeLang = searchParams.lang ?? "All";

  const buildHref = (tag: string, lang: string) => {
    const params = new URLSearchParams();
    if (tag !== "All") params.set("tag", tag);
    if (lang !== "All") params.set("lang", lang);
    const qs = params.toString();
    return qs ? `/stories?${qs}` : "/stories";
  };

  return (
    <section className="mx-auto max-w-content px-4 sm:px-6 pt-32 sm:pt-40 pb-20 sm:pb-32">
      <SectionTitle
        kicker="The Archive"
        title="Stories"
        subtitle="Words that ask to be read slowly."
      />

      {/* Tag filter */}
      <div className="mt-12 flex flex-wrap gap-2 border-b border-border pb-5">
        {TAGS.map((tag) => {
          const isActive = tag === activeTag;
          return (
            <a
              key={tag}
              href={buildHref(tag, activeLang)}
              className={`font-mono-ui border px-3 py-1.5 transition-colors duration-400 ${
                isActive
                  ? "bg-heading text-white border-heading"
                  : "border-border text-muted hover:text-heading hover:border-heading"
              }`}
            >
              {tag}
            </a>
          );
        })}
      </div>

      {/* Language filter */}
      <div className="mt-4 flex flex-wrap items-center gap-2 pb-8">
        <span className="font-mono-ui text-muted/60 text-[10px] tracking-widest uppercase mr-1">
          Language
        </span>
        {LANGUAGES.map((lang) => {
          const isActive = lang === activeLang;
          return (
            <a
              key={lang}
              href={buildHref(activeTag, lang)}
              className={`font-mono-ui border px-3 py-1 text-[11px] transition-colors duration-400 ${
                isActive
                  ? "bg-heading text-white border-heading"
                  : "border-border text-muted hover:text-heading hover:border-heading"
              }`}
            >
              {lang}
            </a>
          );
        })}
      </div>

      <div className="mt-8">
        <PostGrid
          tag={searchParams.tag}
          language={searchParams.lang}
          page={Number(searchParams.page ?? 1)}
        />
      </div>
    </section>
  );
}
