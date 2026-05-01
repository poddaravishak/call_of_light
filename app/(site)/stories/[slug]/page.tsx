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

export default async function SingleStoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="pt-24 sm:pt-32 pb-24 sm:pb-36">
      <PostHeader post={post} />

      {/* body section divider */}
      <div className="flex items-center justify-center gap-4 mt-16 sm:mt-20 mb-14 sm:mb-16">
        <div className="h-px w-12 bg-border opacity-60" />
        <span className="font-mono-ui text-muted/40 text-[9px] tracking-[0.5em]">· · ·</span>
        <div className="h-px w-12 bg-border opacity-60" />
      </div>

      <div className="mx-auto max-w-prose px-4 sm:px-6">
        <PostBody html={post.body_html ?? ""} />
      </div>

      {/* author card */}
      <div className="mx-auto mt-20 sm:mt-28 max-w-prose px-4 sm:px-6">
        <div className="border-t border-border pt-10 sm:pt-14">
          {post.authors && <AuthorCard author={post.authors} />}
        </div>
      </div>

      {/* newsletter */}
      <div className="mt-20 sm:mt-28">
        <NewsletterBanner />
      </div>

      {/* back link */}
      <div className="mx-auto max-w-prose px-4 sm:px-6 mt-14 sm:mt-16">
        <Link
          href="/stories"
          className="font-mono-ui inline-flex items-center gap-2.5 text-muted hover:text-heading transition-colors duration-300 group"
        >
          <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform duration-300" />
          Back to Stories
        </Link>
      </div>
    </article>
  );
}
