import Link from "next/link";
import { CoverImage } from "@/components/shared/CoverImage";
import { getFeaturedPost } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export async function FeaturedPost() {
  const post = await getFeaturedPost();
  if (!post) return null;

  return (
    <section className="mx-auto max-w-content px-6 py-32">
      <p className="font-mono-ui text-accent mb-10">Featured Story</p>
      <Link
        href={`/blog/${post.slug}`}
        className="block group border border-border hover:border-muted transition-colors duration-400"
      >
        <div className="aspect-[16/9] overflow-hidden">
          <CoverImage
            src={post.cover_image}
            alt={post.title}
            className="group-hover:scale-[1.02] transition-transform duration-[600ms]"
          />
        </div>
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-4 font-mono-ui text-muted mb-6">
            {post.tags?.[0] && <span>{post.tags[0]}</span>}
            {post.published_at && <span>{formatDate(post.published_at)}</span>}
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-heading leading-tight max-w-3xl">
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="mt-6 max-w-2xl text-text/85 line-clamp-2">
              {post.excerpt}
            </p>
          )}
          {post.authors?.name && (
            <p className="mt-8 font-mono-ui text-muted">
              By {post.authors.name}
            </p>
          )}
        </div>
      </Link>
    </section>
  );
}
