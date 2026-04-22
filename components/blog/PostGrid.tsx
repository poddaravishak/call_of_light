import { PostCard } from "@/components/blog/PostCard";
import { getPosts } from "@/lib/data";

type Props = {
  page?: number;
  limit?: number;
  tag?: string;
  authorId?: string;
};

export async function PostGrid(props: Props) {
  const posts = await getPosts(props);

  if (posts.length === 0) {
    return (
      <div className="border border-dashed border-border py-24 text-center text-muted font-mono-ui">
        No stories yet — the archive is still waking.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
