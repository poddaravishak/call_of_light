import Link from "next/link";
import { CoverImage } from "@/components/shared/CoverImage";
import { TagBadge } from "@/components/blog/TagBadge";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/lib/types";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block border border-border hover:border-muted transition-colors duration-400"
    >
      <div className="aspect-[3/2] overflow-hidden">
        <CoverImage
          src={post.cover_image}
          alt={post.title}
          className="group-hover:scale-[1.02] transition-transform duration-[600ms]"
        />
      </div>
      <div className="p-6">
        {post.tags?.[0] && <TagBadge label={post.tags[0]} />}
        <h3 className="mt-4 font-display text-2xl text-heading leading-snug">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="mt-3 text-muted line-clamp-2">{post.excerpt}</p>
        )}
        <div className="mt-6 font-mono-ui text-muted flex items-center gap-3">
          {post.authors?.name && <span>{post.authors.name}</span>}
          {post.authors?.name && post.published_at && <span>·</span>}
          {post.published_at && <span>{formatDate(post.published_at)}</span>}
        </div>
      </div>
    </Link>
  );
}
