import Image from "next/image";
import { Twitter, Instagram, Globe } from "lucide-react";
import { GrainOverlay } from "@/components/layout/GrainOverlay";
import type { Author } from "@/lib/types";

export function AuthorProfileHeader({ author }: { author: Author }) {
  return (
    <section className="relative bg-surface border-b border-border pt-40 pb-24 overflow-hidden">
      <GrainOverlay />
      <div className="relative z-10 mx-auto max-w-content px-6 text-center">
        {author.avatar && (
          <Image
            src={author.avatar}
            alt={author.name}
            width={120}
            height={120}
            className="rounded-full mx-auto cover-img"
          />
        )}
        <h1 className="mt-8 font-display text-heading text-5xl md:text-6xl">
          {author.name}
        </h1>
        {author.tagline && (
          <p className="mt-4 font-mono-ui text-accent">{author.tagline}</p>
        )}
        <div className="mt-8 flex items-center justify-center gap-6 text-muted">
          {author.twitter && (
            <a
              href={author.twitter}
              target="_blank"
              rel="noreferrer"
              className="hover:text-heading transition-colors duration-400"
            >
              <Twitter size={18} />
            </a>
          )}
          {author.instagram && (
            <a
              href={author.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-heading transition-colors duration-400"
            >
              <Instagram size={18} />
            </a>
          )}
          {author.website && (
            <a
              href={author.website}
              target="_blank"
              rel="noreferrer"
              className="hover:text-heading transition-colors duration-400"
            >
              <Globe size={18} />
            </a>
          )}
        </div>
        {author.bio && (
          <p className="mt-12 max-w-xl mx-auto text-text/85 font-serif leading-relaxed">
            {author.bio}
          </p>
        )}
      </div>
    </section>
  );
}
