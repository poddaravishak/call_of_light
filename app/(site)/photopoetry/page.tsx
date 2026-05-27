"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CoverImage } from "@/components/shared/CoverImage";
import { Lightbox } from "@/components/shared/Lightbox";
import { motion } from "framer-motion";

// Beautiful mock photopoetry entries that fit the exact visual tone
const PHOTOPOETRY_POSTS = [
  {
    id: "pp-1",
    slug: "stone-and-the-hour-before-dawn",
    title: "Stone, and the Hour Before Dawn",
    excerpt: "Stone is patient weather. Weather is impatient stone. Between them, a life.",
    cover_image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    tags: ["Poetry", "Stillness", "Solitude"],
    published_at: "2026-05-18",
    author: "Mira Tovesdotter",
    heightClass: "h-[320px] sm:h-[450px]",
  },
  {
    id: "pp-2",
    slug: "a-letter-from-the-thaw",
    title: "A Letter from the Thaw",
    excerpt: "Today the ice along the fence-line let go, all at once, in a sound like a book being closed.",
    cover_image: "https://images.unsplash.com/photo-1478827387698-1527781a4887?auto=format&fit=crop&w=1600&q=80",
    tags: ["Poetry", "Light", "Awakening"],
    published_at: "2026-05-27",
    author: "Mira Tovesdotter",
    heightClass: "h-[280px] sm:h-[350px]",
  },
  {
    id: "pp-3",
    slug: "what-the-fog-keeps",
    title: "What the Fog Keeps",
    excerpt: "The fog keeps them. The fog keeps everything, for a little while.",
    cover_image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
    tags: ["Photography", "Solitude", "Stillness"],
    published_at: "2026-04-29",
    author: "Lena Volkov",
    heightClass: "h-[300px] sm:h-[400px]",
  },
  {
    id: "pp-4",
    slug: "the-last-lamp",
    title: "The Last Lamp",
    excerpt: "The house kept one lamp burning through October, and then through November — so the house would know we were coming back.",
    cover_image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=80",
    tags: ["Photography", "Light", "Longing"],
    published_at: "2026-03-14",
    author: "Eivor Halden",
    heightClass: "h-[340px] sm:h-[480px]",
  },
  {
    id: "pp-5",
    slug: "on-silence-and-other-furnishings",
    title: "On Silence, and Other Furnishings",
    excerpt: "True silence is company. It is the version of company in which nothing is being asked of you.",
    cover_image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    tags: ["Poetry", "Stillness", "Solitude"],
    published_at: "2026-02-11",
    author: "August Reinholt",
    heightClass: "h-[290px] sm:h-[380px]",
  },
  {
    id: "pp-6",
    slug: "the-room-that-holds-a-year",
    title: "The Room That Holds a Year",
    excerpt: "She kept the room exactly as it had been, which is not the same thing as keeping it the same.",
    cover_image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    tags: ["Photography", "Longing", "Stillness"],
    published_at: "2026-01-24",
    author: "Eivor Halden",
    heightClass: "h-[320px] sm:h-[460px]",
  },
];

const FILTERS = ["All", "Light", "Stillness", "Awakening", "Solitude", "Longing"];

import { Suspense } from "react";

function PhotopoetryContent() {
  const searchParams = useSearchParams();
  const activeTag = searchParams.get("tag") ?? "All";
  
  const [filteredPosts, setFilteredPosts] = useState(PHOTOPOETRY_POSTS);
  
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    if (activeTag === "All") {
      setFilteredPosts(PHOTOPOETRY_POSTS);
    } else {
      setFilteredPosts(
        PHOTOPOETRY_POSTS.filter((post) =>
          post.tags.some((tag) => tag.toLowerCase() === activeTag.toLowerCase())
        )
      );
    }
  }, [activeTag]);

  const allImages = filteredPosts.map(p => p.cover_image);

  const openLightboxAt = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="mx-auto max-w-6xl px-6 pt-32 sm:pt-40 pb-20 sm:pb-32">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="font-mono-ui text-[11px] text-[#4A4A4A] tracking-[0.25em] uppercase mb-4">
          Visual Verse
        </p>
        <h1 className="font-display italic text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1C] font-normal leading-none tracking-tight">
          Photopoetry
        </h1>
        <p className="mt-4 font-serif text-[#4A4A4A] text-lg sm:text-xl italic">
          Where light meets words
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-3 border-b border-[#E5E0D8] pb-6 mb-12">
        {FILTERS.map((filter) => {
          const isActive = filter.toLowerCase() === activeTag.toLowerCase();
          const href = filter === "All" ? "/photopoetry" : `/photopoetry?tag=${filter}`;
          
          return (
            <Link
              key={filter}
              href={href}
              className={`font-mono-ui text-[10px] sm:text-[11px] tracking-[0.15em] uppercase border px-4 py-2 transition-all duration-400 ${
                isActive
                  ? "bg-[#1C1C1C] text-[#F8F5F0] border-[#1C1C1C]"
                  : "border-[#E5E0D8] text-[#4A4A4A] hover:border-[#1C1C1C] hover:text-[#1C1C1C]"
              }`}
            >
              {filter}
            </Link>
          );
        })}
      </div>

      {/* Masonry flex columns */}
      {filteredPosts.length === 0 ? (
        <div className="border border-dashed border-[#E5E0D8] py-24 text-center text-[#4A4A4A] font-mono-ui text-sm">
          No works found in this gallery yet.
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredPosts.map((post, idx) => (
            <div
              key={post.id}
              className="break-inside-avoid bg-[#F8F5F0] border border-[#E5E0D8] p-4 flex flex-col hover:shadow-[0_15px_40px_-25px_rgba(28,28,28,0.1)] transition-all duration-400 hover:border-[#D4A017]/30 group"
            >
              {/* Photo */}
              <div
                onClick={(e) => openLightboxAt(e, idx)}
                className={`relative w-full overflow-hidden bg-[#1C1C1C] cursor-zoom-in ${post.heightClass}`}
              >
                <CoverImage
                  src={post.cover_image}
                  alt={post.title}
                  className="group-hover:scale-[1.03] transition-transform duration-[1000ms] filter grayscale-[15%] group-hover:grayscale-0"
                />
                
                {/* Lightbox Badge */}
                <div className="absolute bottom-3 right-3 bg-black/40 text-white p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 3 6 6-9 9-6-6 9-9Z" />
                    <path d="M9 17 3 21" />
                    <path d="M21 3v6h-6" />
                    <path d="M21 3h-6" />
                  </svg>
                </div>
              </div>

              {/* Description */}
              <div className="pt-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-display text-xl text-[#1C1C1C] leading-[1.3] group-hover:text-[#D4A017] transition-colors">
                    <Link href={`/photopoetry/${post.slug}`}>{post.title}</Link>
                  </h3>
                  
                  {post.excerpt && (
                    <p className="mt-3 text-sm text-[#4A4A4A] italic font-serif leading-relaxed line-clamp-3">
                      “{post.excerpt}”
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-3 border-t border-[#E5E0D8] flex items-center justify-between">
                  <Link
                    href={`/photopoetry/${post.slug}`}
                    className="font-mono-ui text-[10px] tracking-wider text-[#D4A017] hover:text-[#0F2B4A] transition-colors"
                  >
                    Read poetry →
                  </Link>
                  
                  <span className="text-[10px] text-[#4A4A4A]/60 font-mono-ui">
                    by {post.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        images={allImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(index) => setLightboxIndex(index)}
      />
    </section>
  );
}

export default function PhotopoetryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F8F5F0] flex items-center justify-center font-mono-ui text-[10px] tracking-[0.3em] text-[#4A4A4A]/60 uppercase">
          Loading gallery...
        </div>
      }
    >
      <PhotopoetryContent />
    </Suspense>
  );
}
