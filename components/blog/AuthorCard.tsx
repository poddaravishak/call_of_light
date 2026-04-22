import Image from "next/image";
import Link from "next/link";
import { Twitter, Instagram, Globe } from "lucide-react";
import type { Author } from "@/lib/types";

export function AuthorCard({ author }: { author: Author }) {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6">
      {author.avatar && (
        <Image
          src={author.avatar}
          alt={author.name}
          width={96}
          height={96}
          className="rounded-full cover-img shrink-0"
        />
      )}
      <div>
        <Link
          href={`/authors/${author.slug}`}
          className="font-display text-heading text-3xl hover:text-accent transition-colors duration-400"
        >
          {author.name}
        </Link>
        {author.bio && <p className="mt-3 text-text/85">{author.bio}</p>}
        <div className="mt-4 flex items-center gap-4 text-muted">
          {author.twitter && (
            <a
              href={author.twitter}
              target="_blank"
              rel="noreferrer"
              className="hover:text-heading transition-colors duration-400"
            >
              <Twitter size={16} />
            </a>
          )}
          {author.instagram && (
            <a
              href={author.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-heading transition-colors duration-400"
            >
              <Instagram size={16} />
            </a>
          )}
          {author.website && (
            <a
              href={author.website}
              target="_blank"
              rel="noreferrer"
              className="hover:text-heading transition-colors duration-400"
            >
              <Globe size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
