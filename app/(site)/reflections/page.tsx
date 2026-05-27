"use client";

import Link from "next/link";
import { CoverImage } from "@/components/shared/CoverImage";

const REFLECTIONS = [
  {
    id: "ref-1",
    slug: "a-letter-from-the-thaw",
    title: "A Letter from the Thaw",
    date: "May 27, 2026",
    excerpt: "Today the ice along the fence-line let go, all at once, in a sound like a book being closed in another room. I walked out to see.",
    cover_image: "https://images.unsplash.com/photo-1478827387698-1527781a4887?auto=format&fit=crop&w=1600&q=80",
    author: "Mira Tovesdotter",
    word_count: "410 words",
  },
  {
    id: "ref-2",
    slug: "the-last-lamp",
    title: "The devotion of October",
    date: "April 20, 2026",
    excerpt: "The house kept one lamp burning through October, and then through November — so the house would know we were coming back.",
    cover_image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=80",
    author: "Eivor Halden",
    word_count: "520 words",
  },
  {
    id: "ref-3",
    slug: "on-silence-and-other-furnishings",
    title: "On Silence, and Other Furnishings",
    date: "March 11, 2026",
    excerpt: "My grandfather, who built boats, used to say that silence was a room you furnished, not a room you entered. True silence is company.",
    cover_image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    author: "August Reinholt",
    word_count: "380 words",
  },
];

export default function ReflectionsPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-32 sm:pt-40 pb-20 sm:pb-32">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="font-mono-ui text-[11px] text-[#4A4A4A] tracking-[0.25em] uppercase mb-4">
          The Journal
        </p>
        <h1 className="font-display italic text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1C] font-normal leading-none tracking-tight">
          Reflections
        </h1>
        <p className="mt-4 font-serif text-[#4A4A4A] text-lg sm:text-xl italic">
          Intimate journal entries, letters, and quiet snapshots
        </p>
      </div>

      {/* Intimate list feed */}
      <div className="space-y-20">
        {REFLECTIONS.map((entry) => (
          <article
            key={entry.id}
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start border-t border-[#E5E0D8] pt-12"
          >
            {/* Left Col: Metadata */}
            <div className="md:col-span-3">
              <span className="font-mono-ui text-[10px] text-[#D4A017] tracking-[0.2em] uppercase block mb-1">
                {entry.date}
              </span>
              <span className="font-mono-ui text-[9px] text-[#4A4A4A]/60 block mb-3 uppercase">
                {entry.word_count} • by {entry.author}
              </span>
            </div>

            {/* Middle Col: Image & Text */}
            <div className="md:col-span-9 space-y-6">
              {/* Image */}
              <div className="aspect-[16/9] w-full overflow-hidden bg-[#1C1C1C] border border-[#E5E0D8]">
                <CoverImage
                  src={entry.cover_image}
                  alt={entry.title}
                  className="group-hover:scale-[1.01] transition-transform duration-[800ms] filter grayscale-[15%]"
                />
              </div>

              {/* Title & Excerpt */}
              <div className="space-y-3">
                <h2 className="font-display italic text-2xl sm:text-3xl text-[#1C1C1C] group-hover:text-[#D4A017] transition-colors leading-tight">
                  <Link href={`/reflections/${entry.slug}`}>{entry.title}</Link>
                </h2>
                
                <p className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed italic">
                  “{entry.excerpt}”
                </p>
              </div>

              {/* Link */}
              <div className="pt-2">
                <Link
                  href={`/reflections/${entry.slug}`}
                  className="font-mono-ui text-[11px] text-[#1C1C1C] hover:text-[#D4A017] tracking-[0.15em] uppercase font-semibold transition-colors flex items-center gap-1.5"
                >
                  Read full entry →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
