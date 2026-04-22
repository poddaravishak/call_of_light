import Link from "next/link";
import { CoverImage } from "@/components/shared/CoverImage";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/lib/types";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white/60 backdrop-blur-[2px] border border-border hover:shadow-[0_30px_60px_-30px_rgba(10,10,10,0.28)] hover:-translate-y-0.5 transition-all duration-500 ease-out"
    >
      <div className="aspect-[3/2] overflow-hidden">
        <CoverImage
          src={post.cover_image}
          alt={post.title}
          className="group-hover:scale-[1.03] transition-transform duration-[800ms] ease-out"
        />
      </div>
      <div className="p-7">
        {post.tags?.[0] && (
          <span className="font-mono-ui inline-block border border-border px-2 py-1 text-muted">
            {post.tags[0]}
          </span>
        )}
        <h3 className="mt-5 font-display text-2xl text-heading leading-snug">
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
