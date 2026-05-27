"use client";

import Link from "next/link";
import { CoverImage } from "@/components/shared/CoverImage";

// Meditative philosophical essays
const PHILOSOPHY_POSTS = [
  {
    id: "ph-1",
    slug: "on-silence-and-other-furnishings",
    title: "On Silence, and Other Furnishings",
    excerpt: "My grandfather, who built boats, used to say that silence was a room you furnished, not a room you entered. Silence, in other words, is almost never entirely silent.",
    cover_image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    author: "August Reinholt",
    published_at: "2026-05-11",
    read_time: 7,
  },
  {
    id: "ph-2",
    slug: "the-last-lamp",
    title: "The devotion of the Last Lamp",
    excerpt: "The house kept one lamp burning through October, and then through November. What begins as a habit slowly solidifies into a quiet devotion to space and history.",
    cover_image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=80",
    author: "Eivor Halden",
    published_at: "2026-04-20",
    read_time: 6,
  },
  {
    id: "ph-3",
    slug: "stone-and-the-hour-before-dawn",
    title: "The Architecture of Stone and Dawn",
    excerpt: "Stone is patient weather. Weather is impatient stone. An examination of the long intervals of northern geography and the patience required of the observer.",
    cover_image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    author: "Mira Tovesdotter",
    published_at: "2026-03-05",
    read_time: 5,
  },
];

export default function PhilosophyPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-32 sm:pt-40 pb-20 sm:pb-32">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="font-mono-ui text-[11px] text-[#4A4A4A] tracking-[0.25em] uppercase mb-4">
          Meditations
        </p>
        <h1 className="font-display italic text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1C] font-normal leading-none tracking-tight">
          Philosophy
        </h1>
        <p className="mt-4 font-serif text-[#4A4A4A] text-lg sm:text-xl italic">
          Slow essays on silence, space, and attention
        </p>
      </div>

      {/* Grid Layout: Small featured image + title + author + excerpt */}
      <div className="space-y-12 sm:space-y-16">
        {PHILOSOPHY_POSTS.map((post) => (
          <article
            key={post.id}
            className="group flex flex-col md:flex-row gap-6 md:gap-10 bg-[#F8F5F0] border border-[#E5E0D8] p-6 sm:p-8 hover:border-[#D4A017]/30 hover:shadow-[0_15px_40px_-25px_rgba(28,28,28,0.08)] transition-all duration-500"
          >
            {/* Thumbnail cover image */}
            <div className="aspect-[4/3] md:aspect-square w-full md:w-44 lg:w-52 overflow-hidden bg-[#1C1C1C] shrink-0 border border-[#E5E0D8]">
              <CoverImage
                src={post.cover_image}
                alt={post.title}
                className="group-hover:scale-105 transition-transform duration-700 filter grayscale-[20%]"
              />
            </div>

            {/* Essay Details */}
            <div className="flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-3 font-mono-ui text-[10px] text-[#4A4A4A]/60 mb-3">
                  <span>
                    {new Date(post.published_at).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span>•</span>
                  <span>{post.read_time} min read</span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl text-[#1C1C1C] group-hover:text-[#D4A017] transition-colors leading-tight">
                  <Link href={`/philosophy/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="mt-4 text-[#4A4A4A] text-sm sm:text-base leading-relaxed max-w-3xl">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E0D8] flex items-center justify-between">
                <Link
                  href={`/philosophy/${post.slug}`}
                  className="font-mono-ui text-[11px] text-[#D4A017] group-hover:text-[#0F2B4A] tracking-wider uppercase font-semibold transition-colors flex items-center gap-1.5"
                >
                  Read essay →
                </Link>
                <span className="text-xs font-serif text-[#4A4A4A]/60">
                  by {post.author}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
