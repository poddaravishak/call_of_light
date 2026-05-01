import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PostCard } from "@/components/blog/PostCard";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { getHomePagePosts } from "@/lib/data";

export async function LatestPosts() {
  const posts = await getHomePagePosts();

  return (
    <section className="mx-auto max-w-content px-4 sm:px-6 py-16 sm:py-28 border-t border-border">
      <div className="mb-12 sm:mb-16">
        <SectionTitle
          kicker="Recent"
          title="Latest Stories"
          subtitle="New pieces from our slow archive."
        />
      </div>

      {posts.length === 0 ? (
        <div className="border border-dashed border-border py-24 text-center text-muted font-mono-ui">
          No stories yet — the archive is still waking.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} featured={!!post.featured} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/stories"
              className="font-mono-ui border border-heading text-heading px-8 py-3 inline-flex items-center gap-2 hover:bg-heading hover:text-white transition-colors duration-400"
            >
              See More <ArrowRight size={13} />
            </Link>
          </div>
        </>
      )}
    </section>
  );
}
