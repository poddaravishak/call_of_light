"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";
import { useState } from "react";

// Reflections entries database
const REFLECTIONS = [
  {
    id: "ref-1",
    slug: "a-letter-from-the-thaw",
    title: "A Letter from the Thaw",
    date: "May 27, 2026",
    cover_image: "https://images.unsplash.com/photo-1478827387698-1527781a4887?auto=format&fit=crop&w=1600&q=80",
    author: "Mira Tovesdotter",
    word_count: "410 words",
    body: `Today the ice along the fence-line let go, all at once, in a sound like a book being closed in another room. I walked out to see. The dog came with me and did not bark, which is rare, and which I took as a kind of agreement.

I have been trying, this winter, to write a poem about absence, and I have been failing in the particular way that tells me I am asking the wrong question of it. You cannot describe a room that is empty. You can only describe the shape of the thing that is missing from it.

The thaw is not the end of winter. It is winter telling a story about itself.

I am sending this letter because the thaw made me want to tell someone, and because you have always been, in my mind, the sort of person to whom one sends weather reports. I hope the cold is treating you gently where you are, and that the light is finding its way through your windows, even if only in thin slivers.

With love, and with the first birds of February,
— M.`
  },
  {
    id: "ref-2",
    slug: "the-last-lamp",
    title: "The devotion of October",
    date: "April 20, 2026",
    cover_image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=80",
    author: "Eivor Halden",
    word_count: "520 words",
    body: `The house kept one lamp burning through October, and then through November, and by the time December arrived we had stopped pretending it was a habit. It was a devotion. My grandmother lit it at four, before the window turned dark, and she kept it lit until she went to bed, which was not a fixed hour, but an agreement between her and the room.

I remember asking her, once, why we did not turn it off when we left the house. She looked at me with the particular patience reserved for a child who has asked a question with an obvious answer, and said, 'so the house knows we're coming back.'

I have kept the lamp. It is older now than I am, and its brass is the color of slow tea. It does not illuminate very much — a chair, the edge of a book, the shape of my own hand — but I have come to think that illumination was never quite the point. The point was that the room should never be entirely alone.

When my grandmother died, the lamp was unplugged for three days. The house felt, during those days, as though it had taken a small step backward. When I plugged it in again I did not turn it off for a week.

There is a theory I have been turning over for some years, which is that the objects we keep are not quite objects. They are a kind of slow language, spoken across generations, whose grammar we have mostly forgotten and whose sentences we still occasionally complete.`
  },
  {
    id: "ref-3",
    slug: "on-silence-and-other-furnishings",
    title: "On Silence, and Other Furnishings",
    date: "March 11, 2026",
    cover_image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    author: "August Reinholt",
    word_count: "380 words",
    body: `My grandfather, who built boats, used to say that silence was a room you furnished, not a room you entered. This struck me as a strange claim when I was twelve. It strikes me, now, as the most accurate description of silence I have ever been given.

A clock, ticking in another room. The soft settle of a house adjusting to its own weight. The breath of someone asleep beside you. The distant, patient complaint of a radiator. The sound of your own attention, which is not quite a sound.

Silence, in other words, is almost never silent. It is a particular arrangement of quiet things — a composition, if you like, of withdrawals. A room without any sound at all is not silent. It is deafening, and after a while, unkind.

True silence is company. It is the version of company in which nothing is being asked of you.

I have been learning, slowly, to furnish silence the way my grandfather furnished it. A chair by the window. A book I am not reading. A lamp that is on for no particular reason. The kettle, cooling.

The rooms I like best, now, are the ones that know how to be quiet without becoming empty.`
  }
];

export default function SingleReflectionPage({
  params,
}: {
  params: { slug: string };
}) {
  const entry = REFLECTIONS.find((r) => r.slug === params.slug);
  const [likes, setLikes] = useState(14);
  const [hasLiked, setHasLiked] = useState(false);

  if (!entry) notFound();

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  return (
    <article className="pb-24 sm:pb-36 bg-[#F8F5F0]">
      {/* 1. Header Details */}
      <header className="pt-32 sm:pt-40 max-w-2xl mx-auto px-6 text-center">
        <Link
          href="/reflections"
          className="font-mono-ui text-[10px] text-[#4A4A4A]/70 hover:text-[#D4A017] uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-2 transition-colors"
        >
          <ArrowLeft size={12} /> Back to Journal
        </Link>

        <div className="font-mono-ui text-[10px] text-[#D4A017] tracking-[0.25em] uppercase mb-4">
          {entry.date} • {entry.word_count}
        </div>

        <h1 className="font-display italic text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1C] font-normal leading-tight">
          {entry.title}
        </h1>

        <div className="mt-4 font-mono-ui text-[10px] text-[#4A4A4A]/60 uppercase">
          Reflected by {entry.author}
        </div>
      </header>

      {/* 2. Co-existing Image */}
      <div className="max-w-3xl mx-auto px-6 mt-12 sm:mt-16">
        <div className="aspect-[16/9] w-full overflow-hidden bg-[#1C1C1C] border border-[#E5E0D8] shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={entry.cover_image}
            alt={entry.title}
            className="w-full h-full object-cover filter grayscale-[10%]"
          />
        </div>
      </div>

      {/* 3. Centered Cozy Prose Body */}
      <div className="max-w-2xl mx-auto px-6 mt-16 sm:mt-20">
        <div className="font-serif text-[#1C1C1C] text-[17px] sm:text-[18px] leading-[1.9] space-y-6 text-justify whitespace-pre-line">
          {entry.body}
        </div>

        {/* 4. Elegant Journal Footer */}
        <div className="mt-16 pt-8 border-t border-[#E5E0D8] flex items-center justify-between">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 font-mono-ui text-[10px] tracking-wider uppercase transition-colors p-2 ${
              hasLiked ? "text-[#D4A017]" : "text-[#4A4A4A] hover:text-[#D4A017]"
            }`}
          >
            <Heart size={16} fill={hasLiked ? "#D4A017" : "none"} />
            <span>Resonate ({likes})</span>
          </button>
          
          <span className="font-mono-ui text-[9px] text-[#4A4A4A]/40 uppercase select-none">
            The Call of Light • Journal entry
          </span>
        </div>
      </div>
    </article>
  );
}
