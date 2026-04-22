import Link from "next/link";
import { CoverImage } from "@/components/shared/CoverImage";
import { getFeaturedPost } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export async function FeaturedPost() {
  const post = await getFeaturedPost();
  if (!post) return null;

  return (
    <section className="mx-auto max-w-content px-6 py-32">
      <p className="font-mono-ui text-ink/80 mb-10 flex items-center">
        <span className="hairline" />
        Featured Story
      </p>
      <Link
        href={`/blog/${post.slug}`}
        className="block group bg-white/60 backdrop-blur-[2px] border border-border hover:shadow-[0_40px_80px_-40px_rgba(10,10,10,0.3)] hover:-translate-y-1 transition-all duration-700 ease-out"
      >
        <div className="aspect-[16/9] overflow-hidden">
          <CoverImage
            src={post.cover_image}
            alt={post.title}
            className="group-hover:scale-[1.03] transition-transform duration-[900ms] ease-out"
          />
        </div>
        <div className="p-8 md:p-14">
          <div className="flex items-center gap-4 font-mono-ui text-muted mb-7">
            {post.tags?.[0] && <span>{post.tags[0]}</span>}
            {post.tags?.[0] && post.published_at && (
              <span className="w-1 h-1 rounded-full bg-muted" />
            )}
            {post.published_at && <span>{formatDate(post.published_at)}</span>}
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-heading leading-[1.08] max-w-3xl tracking-tight">
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="mt-7 max-w-2xl text-text/85 line-clamp-2 font-serif leading-relaxed">
              {post.excerpt}
            </p>
          )}
          {post.authors?.name && (
            <p className="mt-10 font-mono-ui text-muted">
              By <span className="text-heading">{post.authors.name}</span>
            </p>
          )}
        </div>
      </Link>
    </section>
  );
}
