"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Share2, MessageSquare } from "lucide-react";
import { Lightbox } from "@/components/shared/Lightbox";

// Photopoetry entries database
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
    poem: `I.
The kettle knows.
The kettle has always known.
It is kind enough not to say.

II.
Stone is patient weather.
Weather is impatient stone.
Between them, a life.

III.
I woke at four.
The house was listening
to something I could not hear.`,
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
    poem: `Today the ice along
the fence-line let go,
all at once, in a sound
like a book being closed
in another room.

I walked out to see.
The dog came with me
and did not bark,
which is rare, and which
I took as a kind of agreement.`,
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
    poem: `The fog arrives each morning
like a silent curator,
takes its time with the crane,
and leaves again
before the first ferry.

I have photographed the same steel
for eleven winters.
It is no closer to falling.
It is no closer to being used.`,
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
    poem: `The house kept one lamp
burning through October,
and then through November.

By December we stopped
pretending it was a habit.
It was a devotion.
So the house knows
we are coming back.`,
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
    poem: `A clock, ticking.
The soft settle of wood
adjusting to its own gravity.
The radiator's patient sigh.

Silence is a room
you furnish slowly,
not a room you enter.
It is the company
in which nothing is asked.`,
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
    poem: `She kept the room
exactly as it had been,
which is not the same
as keeping it the same.

The dust settled differently
on the keys.
The shadow was a year older.
It was not the same room.`,
  },
];

export default function SinglePhotopoetryPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = PHOTOPOETRY_POSTS.find((p) => p.slug === params.slug);
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [commentName, setCommentName] = useState("");
  const [commentBody, setCommentBody] = useState("");
  const [comments, setComments] = useState<Array<{ name: string; date: string; body: string }>>([]);

  if (!post) notFound();

  // Find related photopoetry
  const related = PHOTOPOETRY_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName || !commentBody) return;
    
    setComments([
      ...comments,
      {
        name: commentName,
        date: "Just now",
        body: commentBody,
      },
    ]);
    setCommentName("");
    setCommentBody("");
  };

  return (
    <article className="pb-24 sm:pb-32 bg-[#F8F5F0]">
      {/* 1. Full Width Hero Banner */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] overflow-hidden bg-[#1C1C1C]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: `url(${post.cover_image})`,
            filter: "grayscale(15%) sepia(8%) contrast(1.05)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F5F0] via-black/20 to-black/60 pointer-events-none" />
        
        {/* Banner Navigation & Overlaid Titles */}
        <div className="absolute inset-x-0 bottom-12 max-w-6xl mx-auto px-6 text-center sm:text-left flex flex-col justify-end">
          <Link
            href="/photopoetry"
            className="font-mono-ui text-[10px] text-[#F8F5F0]/80 hover:text-[#D4A017] uppercase tracking-[0.2em] mb-4 flex items-center justify-center sm:justify-start gap-2 transition-colors"
          >
            <ArrowLeft size={12} /> Back to Gallery
          </Link>
          <span className="font-mono-ui text-[10px] text-[#D4A017] tracking-[0.25em] uppercase mb-2 block">
            {post.tags.join(" • ")}
          </span>
          <h1 className="font-display italic text-3xl sm:text-5xl lg:text-6xl text-[#1C1C1C] font-normal leading-tight">
            {post.title}
          </h1>
          <p className="mt-2 text-xs sm:text-sm font-mono-ui text-[#4A4A4A]">
            Published on {new Date(post.published_at).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric"
            })} • by {post.author}
          </p>
        </div>
      </div>

      {/* 2. Page Content: 60/40 Layout */}
      <div className="mx-auto max-w-6xl px-6 mt-16 sm:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-start">
          
          {/* Left 60%: Large Contemplative Image */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div
              onClick={() => setLightboxOpen(true)}
              className="relative aspect-[4/3] w-full overflow-hidden bg-[#1C1C1C] border border-[#E5E0D8] cursor-zoom-in shadow-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-full object-cover filter grayscale-[10%] hover:scale-[1.02] transition-transform duration-[1200ms]"
              />
            </div>
            <p className="text-[11px] font-mono-ui text-[#4A4A4A]/60 text-right">
              Click image to view fullscreen.
            </p>
          </div>

          {/* Right 40%: Poem Text (Beautiful Typography & Spacing) */}
          <div className="lg:col-span-4 lg:pl-4">
            <div className="border-l-[1.5px] border-[#D4A017] pl-8 py-2">
              <span className="font-mono-ui text-[9px] text-[#D4A017] tracking-[0.3em] uppercase block mb-6">
                The Verse
              </span>
              
              <div className="font-display italic text-[#1C1C1C] text-xl sm:text-2xl leading-[2.1] whitespace-pre-line tracking-wide select-none">
                {post.poem}
              </div>
            </div>

            {/* Quiet Share Trigger */}
            <div className="mt-12 pt-6 border-t border-[#E5E0D8] flex items-center gap-4 text-[#4A4A4A]">
              <span className="font-mono-ui text-[10px] tracking-wider uppercase">Share:</span>
              <button
                onClick={() => alert("Link copied to clipboard.")}
                className="hover:text-[#D4A017] transition-colors p-1"
                title="Copy Link"
              >
                <Share2 size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Ornament separator */}
      <div className="flex items-center justify-center gap-4 my-20 max-w-xl mx-auto px-6">
        <div className="h-px flex-1 bg-[#E5E0D8]" />
        <span className="text-[#D4A017]/70 text-[10px] tracking-[0.4em] font-mono-ui">✦</span>
        <div className="h-px flex-1 bg-[#E5E0D8]" />
      </div>

      {/* 3. Related Works Slider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center sm:text-left">
          <p className="font-mono-ui text-[10px] text-[#4A4A4A]/70 tracking-wider uppercase mb-1">
            Explore More
          </p>
          <h2 className="font-display italic text-2xl sm:text-3xl text-[#1C1C1C]">
            Related Photopoetry
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
          {related.map((rel) => (
            <Link
              key={rel.id}
              href={`/photopoetry/${rel.slug}`}
              className="group flex gap-4 items-center bg-[#F8F5F0] border border-[#E5E0D8] p-4 hover:border-[#D4A017]/30 transition-all duration-300"
            >
              <div className="aspect-[4/3] w-28 overflow-hidden bg-[#1C1C1C] shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={rel.cover_image}
                  alt={rel.title}
                  className="w-full h-full object-cover filter grayscale-[20%] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="font-display text-[#1C1C1C] text-base group-hover:text-[#D4A017] transition-colors leading-[1.3] line-clamp-1">
                  {rel.title}
                </h3>
                <p className="text-xs text-[#4A4A4A] italic font-serif mt-1 line-clamp-2 leading-relaxed">
                  “{rel.excerpt}”
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 4. Comments Section */}
      <div className="mx-auto max-w-3xl px-6 mt-20 sm:mt-28">
        <div className="border-t border-[#E5E0D8] pt-12">
          <h3 className="font-display text-2xl text-[#1C1C1C] mb-8 flex items-center gap-3">
            <MessageSquare size={18} className="text-[#D4A017]" />
            Dialogue ({comments.length + 1})
          </h3>

          <div className="space-y-6 mb-12">
            {/* Seed comment */}
            <div className="bg-[#f2ede4]/50 border border-[#E5E0D8] p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono-ui text-[11px] text-[#1C1C1C] font-semibold">Arthur Pendelton</span>
                <span className="font-mono-ui text-[9px] text-[#4A4A4A]/50">3 days ago</span>
              </div>
              <p className="text-sm font-serif text-[#4A4A4A] leading-relaxed italic">
                “This pairing moves me in a way I cannot quite describe. The photograph matches the silent spaces of the second stanza perfectly.”
              </p>
            </div>

            {/* User added comments */}
            {comments.map((c, i) => (
              <div key={i} className="bg-[#f2ede4]/50 border border-[#E5E0D8] p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-mono-ui text-[11px] text-[#1C1C1C] font-semibold">{c.name}</span>
                  <span className="font-mono-ui text-[9px] text-[#4A4A4A]/50">{c.date}</span>
                </div>
                <p className="text-sm font-serif text-[#4A4A4A] leading-relaxed italic">
                  “{c.body}”
                </p>
              </div>
            ))}
          </div>

          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="space-y-4">
            <h4 className="font-mono-ui text-[10px] text-[#4A4A4A] tracking-wider uppercase">Leave a reflection</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="Your name"
                value={commentName}
                onChange={(e) => setCommentName(e.target.value)}
                className="w-full bg-[#F8F5F0] border border-[#E5E0D8] focus:border-[#D4A017] focus:bg-white outline-none px-4 py-2 text-sm text-[#1C1C1C] transition-all"
              />
            </div>
            <textarea
              required
              rows={4}
              placeholder="Your quiet thoughts..."
              value={commentBody}
              onChange={(e) => setCommentBody(e.target.value)}
              className="w-full bg-[#F8F5F0] border border-[#E5E0D8] focus:border-[#D4A017] focus:bg-white outline-none px-4 py-3 text-sm text-[#1C1C1C] transition-all"
            />
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#1C1C1C] hover:bg-[#D4A017] text-[#F8F5F0] hover:text-[#1C1C1C] font-mono-ui text-[10px] tracking-wider uppercase transition-colors duration-400"
            >
              Post thought
            </button>
          </form>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        images={[post.cover_image]}
        currentIndex={0}
        onClose={() => setLightboxOpen(false)}
        onNavigate={() => {}}
      />
    </article>
  );
}
