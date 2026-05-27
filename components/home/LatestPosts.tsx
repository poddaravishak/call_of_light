import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CoverImage } from "@/components/shared/CoverImage";
import { getHomePagePosts } from "@/lib/data";

export async function LatestPosts() {
  // Fetch home page posts and slice to 3-4 for our Reflections grid
  const allPosts = await getHomePagePosts();
  const posts = allPosts.filter(p => !p.featured || p.tags.includes("Essay") || p.tags.includes("Memory")).slice(0, 4);

  // If we have fewer than 3, fallback to just any posts
  const displayPosts = posts.length >= 3 ? posts : allPosts.slice(0, 4);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-32 border-t border-[#E5E0D8]">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
        <div>
          <p className="font-mono-ui text-[11px] text-[#4A4A4A] tracking-[0.25em] uppercase mb-3 flex items-center">
            <span className="h-px w-6 bg-[#E5E0D8] mr-3" />
            Recent Reflections
          </p>
          <h2 className="font-display italic text-3xl sm:text-4xl lg:text-5xl text-[#1C1C1C] font-normal leading-tight">
            Poetic journaling & short prose
          </h2>
        </div>
        
        <Link
          href="/reflections"
          className="font-mono-ui text-[11px] text-[#D4A017] hover:text-[#0F2B4A] tracking-[0.15em] uppercase flex items-center gap-2 transition-colors duration-400 group shrink-0"
        >
          View all Reflections
          <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {displayPosts.length === 0 ? (
        <div className="border border-dashed border-[#E5E0D8] py-24 text-center text-[#4A4A4A] font-mono-ui text-sm">
          No reflections yet — the journal is still quiet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayPosts.map((post) => (
            <Link
              key={post.id}
              href={`/reflections/${post.slug}`}
              className="group flex flex-col bg-[#F8F5F0] border border-[#E5E0D8] hover:border-[#D4A017]/40 hover:shadow-[0_15px_40px_-20px_rgba(28,28,28,0.06)] transition-all duration-400"
            >
              {/* Image Header with 3/2 aspect ratio */}
              <div className="aspect-[3/2] overflow-hidden relative bg-[#1C1C1C]">
                <CoverImage
                  src={post.cover_image}
                  alt={post.title}
                  className="group-hover:scale-[1.03] transition-transform duration-[800ms] ease-out opacity-90 group-hover:opacity-100 filter grayscale-[20%] sepia-[4%]"
                />
              </div>

              <div className="p-5 flex flex-col flex-1 justify-between min-h-[220px]">
                <div>
                  <span className="font-mono-ui text-[9px] text-[#4A4A4A]/60 block mb-2">
                    {post.published_at &&
                      new Date(post.published_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                  </span>

                  <h3 className="font-display text-lg sm:text-xl text-[#1C1C1C] leading-[1.3] group-hover:text-[#D4A017] transition-colors duration-300">
                    {post.title}
                  </h3>

                  {post.excerpt && (
                    <p className="mt-3 text-[#4A4A4A] line-clamp-3 font-serif text-[13px] sm:text-[14px] leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-[#E5E0D8] flex items-center justify-between">
                  <span className="font-mono-ui text-[10px] text-[#D4A017] tracking-wider group-hover:text-[#0F2B4A] transition-colors">
                    Read entry →
                  </span>
                  {post.authors?.name && (
                    <span className="text-[10px] text-[#4A4A4A]/60 italic font-serif">
                      {post.authors.name}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
