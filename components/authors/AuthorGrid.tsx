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
          className="group block bg-white/60 backdrop-blur-[2px] border border-border p-8 hover:shadow-[0_30px_60px_-30px_rgba(10,10,10,0.25)] hover:-translate-y-0.5 transition-all duration-500 ease-out"
        >
          {author.avatar && (
            <div className="aspect-square overflow-hidden mb-7">
              <Image
                src={author.avatar}
                alt={author.name}
                width={400}
                height={400}
                className="w-full h-full object-cover cover-img group-hover:scale-[1.03] transition-transform duration-[800ms] ease-out"
              />
            </div>
          )}
          <h3 className="font-display text-2xl text-heading group-hover:underline underline-offset-[6px] decoration-1 transition-all duration-400">
            {author.name}
          </h3>
          {author.tagline && (
            <p className="mt-3 font-mono-ui text-muted">{author.tagline}</p>
          )}
          {author.bio && (
            <p className="mt-5 text-text/85 line-clamp-3 font-serif leading-relaxed">
              {author.bio}
            </p>
          )}
          <p className="mt-7 font-mono-ui text-ink/80 inline-flex items-center">
            <span className="hairline" />
            {counts[i]} {counts[i] === 1 ? "story" : "stories"}
          </p>
        </Link>
      ))}
    </div>
  );
}
