import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PostHeader } from "@/components/blog/PostHeader";
import { PostBody } from "@/components/blog/PostBody";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { NewsletterBanner } from "@/components/home/NewsletterBanner";
import { getPostBySlug, getPosts } from "@/lib/data";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getPosts({ page: 1, limit: 100 });
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Story not found" };
  return {
    title: post.title,
    description: post.seo_description ?? post.excerpt ?? undefined,
    openGraph: {
      title: post.title,
      description: post.seo_description ?? post.excerpt ?? undefined,
      images: post.cover_image ? [post.cover_image] : undefined,
      type: "article",
    },
  };
}

export default async function SinglePostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="pt-32 pb-32">
      <PostHeader post={post} />

      <div className="mx-auto mt-16 max-w-prose px-6">
        <PostBody html={post.body_html ?? ""} />
      </div>

      <div className="mx-auto mt-24 max-w-prose px-6">
        <div className="border-t border-border pt-12">
          {post.authors && <AuthorCard author={post.authors} />}
        </div>
      </div>

      <div className="mt-24">
        <NewsletterBanner />
      </div>

      <div className="mx-auto max-w-prose px-6 mt-16">
        <Link
          href="/blog"
          className="font-mono-ui inline-flex items-center gap-2 text-muted hover:text-heading transition-colors duration-400"
        >
          <ArrowLeft size={14} /> Back to Stories
        </Link>
      </div>
    </article>
  );
}
