import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AuthorProfileHeader } from "@/components/authors/AuthorProfileHeader";
import { PostGrid } from "@/components/blog/PostGrid";
import { getAuthorBySlug, getAuthors } from "@/lib/data";

export const revalidate = 60;

export async function generateStaticParams() {
  const authors = await getAuthors();
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const author = await getAuthorBySlug(params.slug);
  if (!author) return { title: "Author not found" };
  return {
    title: author.name,
    description: author.tagline ?? author.bio ?? undefined,
  };
}

export default async function AuthorProfilePage({
  params,
}: {
  params: { slug: string };
}) {
  const author = await getAuthorBySlug(params.slug);
  if (!author) notFound();

  return (
    <>
      <AuthorProfileHeader author={author} />
      <section className="mx-auto max-w-content px-6 py-24">
        <h2 className="font-display text-4xl mb-12">
          Stories by {author.name}
        </h2>
        <PostGrid authorId={author.id} />
      </section>
    </>
  );
}
