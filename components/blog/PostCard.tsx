import Image from "next/image";
import Link from "next/link";
import { CoverImage } from "@/components/shared/CoverImage";
import { formatDateShort } from "@/lib/utils";
import type { Post } from "@/lib/types";

export function PostCard({
  post,
  featured,
}: {
  post: Post;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/stories/${post.slug}`}
      className="group flex flex-col bg-white border border-border hover:border-heading/20 hover:shadow-[0_16px_48px_-12px_rgba(10,10,10,0.16)] hover:-translate-y-1 transition-all duration-300 ease-out"
    >
      {/* cover image */}
      <div className="aspect-[3/2] overflow-hidden relative">
        <CoverImage
          src={post.cover_image}
          alt={post.title}
          className="group-hover:scale-[1.04] transition-transform duration-700 ease-out"
        />
        {featured && (
          <span className="absolute top-3 left-3 font-mono-ui text-[9px] bg-heading text-white px-2.5 py-1 tracking-[0.15em] uppercase">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 px-5 pt-5 pb-6 sm:px-6">

        {/* 1. category + language */}
        <div className="min-h-[1.6em] flex items-center gap-2 flex-wrap">
          {post.tags?.[0] && (
            <span className="font-mono-ui text-[10px] text-muted border border-border px-2.5 py-0.5 inline-block tracking-[0.1em] uppercase">
              {post.tags[0]}
            </span>
          )}
          {post.language && (
            <span className="font-mono-ui text-[10px] text-muted border border-border px-2.5 py-0.5 inline-block tracking-[0.1em] uppercase">
              {post.language}
            </span>
          )}
        </div>

        {/* 2. date */}
        <div className="mt-4 font-mono-ui text-[10px] text-muted/70 flex items-center gap-1.5 min-h-[1.4em]">
          {post.published_at && (
            <span>{formatDateShort(post.published_at)}</span>
          )}
        </div>

        {/* 3. author */}
        <div className="mt-3 flex items-center gap-2 min-h-[1.75rem]">
          {post.authors && (
            <>
              {post.authors.avatar ? (
                <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 border border-border">
                  <Image
                    src={post.authors.avatar}
                    alt={post.authors.name}
                    width={24}
                    height={24}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-6 h-6 rounded-full shrink-0 bg-surface border border-border flex items-center justify-center font-mono-ui text-[9px] text-muted">
                  {post.authors.name.charAt(0).toUpperCase()}
                </div>
              )}
              <span className="font-mono-ui text-[11px] text-muted truncate">
                {post.authors.name}
              </span>
            </>
          )}
        </div>

        {/* rule */}
        <div className="mt-4 mb-4 h-px bg-border" />

        {/* 4. title: exactly 2 lines */}
        <div className="h-[3.75rem] overflow-hidden">
          <h3 className="font-display text-[19px] sm:text-[21px] text-heading leading-snug line-clamp-2 text-justify group-hover:underline underline-offset-[5px] decoration-1">
            {post.title}
          </h3>
        </div>

        {/* 5. excerpt: exactly 3 lines */}
        <div className="mt-2.5 h-[4.25rem] overflow-hidden">
          {post.excerpt && (
            <p className="text-muted line-clamp-3 text-[13px] leading-relaxed text-justify">
              {post.excerpt}
            </p>
          )}
        </div>

      </div>
    </Link>
  );
}
