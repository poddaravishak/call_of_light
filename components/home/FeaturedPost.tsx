import Link from "next/link";
import { CoverImage } from "@/components/shared/CoverImage";
import { getFeaturedPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export async function FeaturedPost() {
  const posts = await getFeaturedPosts();
  if (posts.length === 0) return null;

  return (
    <section className="mx-auto max-w-content px-4 sm:px-6 py-16 sm:py-28">
      <p className="font-mono-ui text-ink/80 mb-10 flex items-center">
        <span className="hairline" />
        Featured Stories
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/stories/${post.slug}`}
            className="group block bg-white/60 backdrop-blur-[2px] border border-border hover:shadow-[0_30px_60px_-30px_rgba(10,10,10,0.28)] hover:-translate-y-0.5 transition-all duration-500 ease-out"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <CoverImage
                src={post.cover_image}
                alt={post.title}
                className="group-hover:scale-[1.03] transition-transform duration-[800ms] ease-out"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 font-mono-ui text-muted mb-4">
                {post.tags?.[0] && (
                  <span className="border border-border px-2 py-0.5">
                    {post.tags[0]}
                  </span>
                )}
                {post.published_at && (
                  <span>{formatDate(post.published_at)}</span>
                )}
              </div>

              <h2 className="font-display text-2xl sm:text-3xl text-heading leading-[1.1] tracking-tight group-hover:underline underline-offset-[6px] decoration-1">
                {post.title}
              </h2>

              {post.excerpt && (
                <p className="mt-3 text-text/75 line-clamp-2 font-serif leading-relaxed text-[15px]">
                  {post.excerpt}
                </p>
              )}

              {post.authors?.name && (
                <p className="mt-6 font-mono-ui text-muted">
                  <span className="hairline" />
                  {post.authors.name}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
