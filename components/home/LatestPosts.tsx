import { PostGrid } from "@/components/blog/PostGrid";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function LatestPosts() {
  return (
    <section className="mx-auto max-w-content px-6 py-32 border-t border-border">
      <SectionTitle
        kicker="Recent"
        title="Latest Stories"
        subtitle="New pieces from our slow archive."
      />
      <div className="mt-20">
        <PostGrid page={1} limit={9} />
      </div>
    </section>
  );
}
