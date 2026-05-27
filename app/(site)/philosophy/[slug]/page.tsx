"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ReadingProgress } from "@/components/shared/ReadingProgress";

// Meditative philosophical essays database
const PHILOSOPHY_POSTS = [
  {
    id: "ph-1",
    slug: "on-silence-and-other-furnishings",
    title: "On Silence, and Other Furnishings",
    subtitle: "An examination of the slow furniture of attention.",
    cover_image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    author: "August Reinholt",
    published_at: "2026-05-11",
    read_time: 7,
    content: [
      {
        id: "intro",
        title: "I. Furnishing the Room",
        text: `My grandfather, who built boats in coastal Denmark, used to say that silence was a room you furnished, not a room you entered. This struck me as a strange claim when I was twelve. I spent my afternoons running along the salt marshes, where the wind was an absolute, physical presence. I did not want silence; I wanted velocity. It strikes me now, however, as the most accurate description of attention I have ever been given.

A room without any sound at all is not silent. It is deafening. It forces the ear to listen to its own internal mechanics—the high whistle of the nervous system, the heavy thud of the heart. True silence is company. It is a particular arrangement of quiet things—a clock ticking in the hallway, the radiator adjusting to its own heavy weight, the distant complaints of a winter tide. These are the furnishings of the room. They do not demand your attention; they simply hold the space so that you may sit down within it.`
      },
      {
        id: "attention",
        title: "II. The Practice of attention",
        text: `We have become accustomed to thinking of attention as a spotlight—a narrow beam we direct at an object to isolate it from its environment. But the old writers knew that attention was more like a vessel. It is not something you do to an object; it is a space you hold for it to reveal itself.

When my grandmother lit the copper lamp at four each winter afternoon, she was not looking for anything she had lost. She was simply establishing a threshold. The light did not illuminate very much—a chair, the edge of a mahogany table, her own hand resting on the linen—but it gave the room a center. It was an agreement that the house was awake. To practice silence is to light that lamp. It is to say to the room: I am here, and I am listening.`
      },
      {
        id: "stillness",
        title: "III. The coastal gravity",
        text: `In the Danish coast towns where my family has lived, the winter light arrives late and leaves almost immediately. This creates a particular relationship with absence. You learn to live in the grey hours, where the details are not sharp but soft. You learn that stone is simply patient weather, and weather is impatient stone.

To write, or to photograph, in this light is to complete a sentence that someone else began a century ago. The objects we keep are not objects; they are a slow language spoken across generations whose grammar we have mostly forgotten but whose sentences we still occasionally finish. By keeping the lamp lit, we keep the dialogue alive.`
      }
    ]
  },
  {
    id: "ph-2",
    slug: "the-last-lamp",
    title: "The Devotion of the Last Lamp",
    subtitle: "On daily devotions, simple habits, and domestic light.",
    cover_image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=80",
    author: "Eivor Halden",
    published_at: "2026-04-20",
    read_time: 6,
    content: [
      {
        id: "habit",
        title: "I. Habit and Devotion",
        text: `The house kept one brass lamp burning through October, and then through November, and by the time December arrived we had stopped pretending it was a habit. It was a devotion. My grandmother lit it at four, before the window turned dark, and she kept it lit until she went to bed, which was not a fixed hour, but an agreement between her and the room.

I remember asking her, once, why we did not turn it off when we left the house. She looked at me with the particular patience reserved for a child who has asked a question with an obvious answer, and said, 'so the house knows we're coming back.' A house, by this definition, is not a structure of wood and plaster; it is an expectant entity.`
      },
      {
        id: "objects",
        title: "II. The Objects We Leave Behind",
        text: `I have kept the lamp. It is older now than I am, and its brass is the color of slow tea. It does not illuminate very much—a chair, the edge of a book, the shape of my own hand—but I have come to think that illumination was never quite the point. The point was that the room should never be entirely alone.

When my grandmother died, the lamp was unplugged for three days. The house felt, during those days, as though it had taken a small step backward. When I plugged it in again I did not turn it off for a week. There is a quiet dialogue between the living and the dead that is conducted through such simple objects, a transmission of warmth.`
      }
    ]
  },
  {
    id: "ph-3",
    slug: "stone-and-the-hour-before-dawn",
    title: "The Architecture of Stone and Dawn",
    subtitle: "A meditation on patience, late mornings, and cold borders.",
    cover_image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    author: "Mira Tovesdotter",
    published_at: "2026-03-05",
    read_time: 5,
    content: [
      {
        id: "patience",
        title: "I. Impatient Weather",
        text: `Stone is patient weather. Weather is impatient stone. Between them, a life. I have spent this winter watching the frost form on the fence-line, wondering what we are keeping out and what we are keeping in. The horizon here is flat and grey, offering no dramatic peaks or sudden reveals. It simply exists.

To sit with stone is to learn the scale of geological patience. In Gotland, the limestone cliffs are carved by centuries of cold water, yet they retain their quiet dignity. We, who live at the speed of electronic currents, find this scale of time offensive. But it is the only scale that can teach us how to stand still.`
      },
      {
        id: "dawn",
        title: "II. The Hour Before Dawn",
        text: `I wake each morning at four, when the house is still listening to something I cannot hear. The darkness at this hour is not absolute; it is full of gray thresholds. The kettle heating on the stove is a friendly anchor.

In this hour, before the world demands that we label ourselves, we are simply attention. There is no past to explain, no future to secure. There is only the slow water warming and the first light arriving late over the baltic fence.`
      }
    ]
  }
];

export default function SinglePhilosophyPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = PHILOSOPHY_POSTS.find((p) => p.slug === params.slug);

  if (!post) notFound();

  // Recommendations
  const otherEssays = PHILOSOPHY_POSTS.filter((p) => p.slug !== post.slug);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pb-24 sm:pb-36 bg-[#F8F5F0]">
      {/* Scroll Progress Bar */}
      <ReadingProgress />

      {/* 1. Article Header */}
      <header className="pt-32 sm:pt-40 max-w-4xl mx-auto px-6 text-center">
        <Link
          href="/philosophy"
          className="font-mono-ui text-[10px] text-[#4A4A4A]/70 hover:text-[#D4A017] uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-2 transition-colors"
        >
          <ArrowLeft size={12} /> Back to Philosophy
        </Link>
        
        <div className="flex items-center justify-center gap-3 font-mono-ui text-[10px] text-[#4A4A4A]/60 mb-6">
          <span>{post.published_at}</span>
          <span>•</span>
          <span>{post.read_time} min read</span>
        </div>

        <h1 className="font-display italic text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1C] font-normal leading-tight max-w-3xl mx-auto">
          {post.title}
        </h1>

        <p className="mt-4 font-serif text-[#4A4A4A] italic text-lg sm:text-xl max-w-2xl mx-auto">
          {post.subtitle}
        </p>

        <div className="mt-6 font-mono-ui text-[11px] text-[#1C1C1C] font-semibold">
          by {post.author}
        </div>
      </header>

      {/* 2. Hero Image Banner */}
      <div className="max-w-5xl mx-auto px-6 mt-12 sm:mt-16">
        <div className="aspect-[21/9] w-full overflow-hidden bg-[#1C1C1C] border border-[#E5E0D8]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.cover_image}
            alt={post.title}
            className="w-full h-full object-cover filter grayscale-[10%]"
          />
        </div>
      </div>

      {/* 3. Main Reading Section: Columns for Sidebar + Body */}
      <div className="max-w-5xl mx-auto px-6 mt-16 sm:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left / Sidebar (TOC & Recommended Reads) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-12 order-last lg:order-first">
            {/* Table of Contents */}
            <div className="border-t border-[#E5E0D8] pt-6">
              <h4 className="font-mono-ui text-[10px] text-[#1C1C1C] tracking-[0.2em] uppercase mb-4 font-semibold">
                Index of Thought
              </h4>
              <nav className="flex flex-col gap-3">
                {post.content.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className="text-left font-serif text-sm text-[#4A4A4A] hover:text-[#D4A017] transition-colors italic block select-none cursor-pointer"
                  >
                    {sec.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Recommended Meditations */}
            <div className="border-t border-[#E5E0D8] pt-6">
              <h4 className="font-mono-ui text-[10px] text-[#1C1C1C] tracking-[0.2em] uppercase mb-4 font-semibold">
                Explore Meditations
              </h4>
              <div className="space-y-4">
                {otherEssays.map((ess) => (
                  <Link
                    key={ess.id}
                    href={`/philosophy/${ess.slug}`}
                    className="group block"
                  >
                    <span className="font-display italic text-[#1C1C1C] text-base group-hover:text-[#D4A017] transition-colors leading-[1.3]">
                      {ess.title}
                    </span>
                    <span className="block font-mono-ui text-[9px] text-[#4A4A4A]/60 mt-1 uppercase">
                      by {ess.author}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Right / Main Reading Body */}
          <main className="lg:col-span-8 space-y-12">
            <div className="prose-light mx-auto">
              {post.content.map((sec) => (
                <section key={sec.id} id={sec.id} className="scroll-mt-32 mb-12">
                  <h3 className="font-display italic text-2xl text-[#1C1C1C] border-b border-[#E5E0D8] pb-2 mb-6">
                    {sec.title}
                  </h3>
                  <div className="whitespace-pre-line text-justify text-[17px] sm:text-[18px] text-[#1C1C1C] leading-[1.8] space-y-6">
                    {sec.text}
                  </div>
                </section>
              ))}
            </div>

            {/* Bottom Signature Decorator */}
            <div className="flex items-center justify-center gap-4 py-8">
              <div className="h-px w-8 bg-[#E5E0D8]" />
              <span className="text-[#D4A017]/70 text-[9px] tracking-[0.4em] font-mono-ui">✦</span>
              <div className="h-px w-8 bg-[#E5E0D8]" />
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}
