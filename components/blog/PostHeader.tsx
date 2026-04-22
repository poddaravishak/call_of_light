import Image from "next/image";
import Link from "next/link";
import { CoverImage } from "@/components/shared/CoverImage";
import { TagBadge } from "@/components/blog/TagBadge";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/lib/types";

export function PostHeader({ post }: { post: Post }) {
  return (
    <header className="mx-auto max-w-4xl px-6">
      {post.cover_image && (
        <div className="aspect-[16/9] overflow-hidden border border-border mb-16">
          <CoverImage src={post.cover_image} alt={post.title} />
        </div>
      )}

      <div className="flex items-center justify-center gap-3 font-mono-ui text-muted mb-8">
        {post.tags?.[0] && <TagBadge label={post.tags[0]} />}
        {post.read_time && <span>{post.read_time} min read</span>}
        {post.published_at && (
          <>
            <span>·</span>
            <span>{formatDate(post.published_at)}</span>
          </>
        )}
      </div>

      <h1 className="font-display text-heading text-5xl md:text-6xl leading-[1.05] text-center max-w-3xl mx-auto">
        {post.title}
      </h1>

      {post.authors && (
        <div className="mt-12 flex items-center justify-center gap-4">
          {post.authors.avatar && (
            <Image
              src={post.authors.avatar}
              alt={post.authors.name}
              width={44}
              height={44}
              className="rounded-full cover-img"
            />
          )}
          <div className="text-left">
            <Link
              href={`/authors/${post.authors.slug}`}
              className="font-display text-heading hover:text-accent transition-colors duration-400"
            >
              {post.authors.name}
            </Link>
            {post.authors.tagline && (
              <p className="font-mono-ui text-muted">{post.authors.tagline}</p>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
