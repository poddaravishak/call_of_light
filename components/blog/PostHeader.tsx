import Image from "next/image";
import Link from "next/link";
import { CoverImage } from "@/components/shared/CoverImage";
import { TagBadge } from "@/components/blog/TagBadge";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/lib/types";

export function PostHeader({ post }: { post: Post }) {
  return (
    <header>
      {/* cover — cinematic, borderless, with bottom fade */}
      {post.cover_image && (
        <div className="mx-auto max-w-5xl px-4 sm:px-6 mb-16 sm:mb-20">
          <div className="aspect-[2/1] overflow-hidden relative">
            <CoverImage src={post.cover_image} alt={post.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      )}

      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">

        {/* meta row */}
        <div className="flex items-center justify-center gap-3 font-mono-ui text-muted mb-10">
          <div className="h-px w-8 bg-border opacity-70 shrink-0" />
          {post.tags?.[0] && <TagBadge label={post.tags[0]} />}
          {post.read_time && (
            <>
              <span className="opacity-40">·</span>
              <span>{post.read_time} min read</span>
            </>
          )}
          {post.published_at && (
            <>
              <span className="opacity-40">·</span>
              <span>{formatDate(post.published_at)}</span>
            </>
          )}
          <div className="h-px w-8 bg-border opacity-70 shrink-0" />
        </div>

        {/* title */}
        <h1 className="font-display italic text-heading text-4xl sm:text-5xl md:text-[3.75rem] lg:text-7xl leading-[1.04] tracking-[-0.01em]">
          {post.title}
        </h1>

        {/* excerpt as subtitle */}
        {post.excerpt && (
          <p className="mt-6 sm:mt-8 font-serif text-muted text-lg sm:text-xl leading-relaxed max-w-xl mx-auto">
            {post.excerpt}
          </p>
        )}

        {/* ornament divider */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center gap-5">
          <div className="h-px flex-1 max-w-[4rem] bg-border" />
          <span className="text-muted/40 text-[11px] tracking-[0.4em] font-mono-ui">✦</span>
          <div className="h-px flex-1 max-w-[4rem] bg-border" />
        </div>

        {/* author */}
        {post.authors && (
          <div className="mt-8 flex items-center justify-center gap-4">
            {post.authors.avatar ? (
              <Image
                src={post.authors.avatar}
                alt={post.authors.name}
                width={52}
                height={52}
                className="rounded-full cover-img border border-border shrink-0"
              />
            ) : (
              <div className="w-[52px] h-[52px] rounded-full bg-surface border border-border flex items-center justify-center font-display text-xl text-muted shrink-0">
                {post.authors.name.charAt(0)}
              </div>
            )}
            <div className="text-left">
              <Link
                href={`/authors/${post.authors.slug}`}
                className="font-display text-heading text-xl hover:text-accent transition-colors duration-400"
              >
                {post.authors.name}
              </Link>
              {post.authors.tagline && (
                <p className="font-mono-ui text-muted mt-0.5">{post.authors.tagline}</p>
              )}
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
