import Image from "next/image";
import Link from "next/link";
import { getAuthors, getPostCountByAuthor } from "@/lib/data";

export async function AuthorGrid() {
  const authors = await getAuthors();

  if (authors.length === 0) {
    return (
      <div className="border border-dashed border-border py-24 text-center text-muted font-mono-ui">
        No voices yet.
      </div>
    );
  }

  const counts = await Promise.all(
    authors.map((a) => getPostCountByAuthor(a.id))
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {authors.map((author, i) => (
        <Link
          key={author.id}
          href={`/authors/${author.slug}`}
          className="group block border border-border hover:border-muted p-8 transition-colors duration-400"
        >
          {author.avatar && (
            <div className="aspect-square overflow-hidden mb-6">
              <Image
                src={author.avatar}
                alt={author.name}
                width={400}
                height={400}
                className="w-full h-full object-cover cover-img"
              />
            </div>
          )}
          <h3 className="font-display text-2xl text-heading group-hover:underline underline-offset-4">
            {author.name}
          </h3>
          {author.tagline && (
            <p className="mt-2 font-mono-ui text-muted">{author.tagline}</p>
          )}
          {author.bio && (
            <p className="mt-4 text-text/85 line-clamp-3">{author.bio}</p>
          )}
          <p className="mt-6 font-mono-ui text-accent">
            {counts[i]} {counts[i] === 1 ? "story" : "stories"}
          </p>
        </Link>
      ))}
    </div>
  );
}
