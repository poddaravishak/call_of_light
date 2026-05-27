import Link from "next/link";
import { CoverImage } from "@/components/shared/CoverImage";
import { getFeaturedPosts } from "@/lib/data";

export async function FeaturedPost() {
  const allPosts = await getFeaturedPosts();
  // Filter or take exactly 3 posts for the featured showcase
  const posts = allPosts.slice(0, 3);
  
  if (posts.length === 0) return null;

  return (
    <section id="featured-poetry" className="mx-auto max-w-6xl px-6 py-20 sm:py-32 scroll-mt-10">
      <div className="text-center mb-16">
        <p className="font-mono-ui text-[11px] text-[#4A4A4A] tracking-[0.25em] uppercase mb-3 flex items-center justify-center">
          <span className="h-px w-6 bg-[#E5E0D8] mr-3" />
          Featured Photopoetry
          <span className="h-px w-6 bg-[#E5E0D8] ml-3" />
        </p>
        <h2 className="font-display italic text-3xl sm:text-4xl lg:text-5xl text-[#1C1C1C] font-normal leading-tight">
          Where light meets words
        </h2>
      </div>

      {/* Horizontal scrolling on mobile, elegant 3-column grid on desktop */}
      <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-8 pb-6 md:pb-0 scrollbar-none">
        {posts.map((post) => (
          <div
            key={post.id}
            className="min-w-[85vw] sm:min-w-[45vw] md:min-w-0 snap-start snap-always"
          >
            <Link
              href={`/photopoetry/${post.slug}`}
              className="group block bg-[#F8F5F0] border border-[#E5E0D8] hover:border-[#D4A017]/40 hover:shadow-[0_20px_50px_-20px_rgba(28,28,28,0.08)] transition-all duration-500 ease-out"
            >
              {/* Image with 16:10 aspect ratio */}
              <div className="aspect-[16/10] overflow-hidden relative bg-[#1C1C1C]">
                <CoverImage
                  src={post.cover_image}
                  alt={post.title}
                  className="group-hover:scale-[1.04] transition-transform duration-[1200ms] ease-out opacity-90 group-hover:opacity-100 filter grayscale-[25%] contrast-[1.02] sepia-[6%] group-hover:grayscale-0"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="flex items-center gap-3 font-mono-ui text-[10px] text-[#4A4A4A]/70 mb-3">
                    {post.tags?.[0] && (
                      <span className="border border-[#E5E0D8] px-2 py-0.5 tracking-[0.1em] uppercase">
                        {post.tags[0]}
                      </span>
                    )}
                    {post.published_at && (
                      <span>
                        {new Date(post.published_at).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl text-[#1C1C1C] leading-[1.25] tracking-tight group-hover:text-[#D4A017] transition-colors duration-300">
                    {post.title}
                  </h3>

                  {post.excerpt && (
                    <p className="mt-3 text-[#4A4A4A] line-clamp-2 font-serif text-[14px] sm:text-[15px] leading-relaxed italic">
                      “{post.excerpt}”
                    </p>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="font-mono-ui text-[11px] text-[#D4A017] tracking-[0.15em] uppercase relative group-hover:text-[#0F2B4A] transition-colors duration-300">
                    Read the full piece
                    <span className="absolute -bottom-1 left-0 w-8 h-px bg-[#D4A017] group-hover:w-full transition-all duration-400" />
                  </span>
                  
                  {post.authors?.name && (
                    <span className="font-mono-ui text-[10px] text-[#4A4A4A]/60">
                      by {post.authors.name}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
