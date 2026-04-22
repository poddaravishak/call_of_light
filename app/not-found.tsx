import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono-ui text-ink/80 mb-8 inline-flex items-center">
        <span className="hairline" />
        404
      </p>
      <h1 className="font-display text-6xl md:text-7xl mb-8 tracking-tight">
        Nothing here.
      </h1>
      <p className="text-muted mb-14 max-w-md font-serif italic leading-relaxed">
        The page you are looking for has drifted into silence.
      </p>
      <Link
        href="/"
        className="font-mono-ui border border-heading px-7 py-4 text-heading hover:bg-heading hover:text-white transition-colors duration-500"
      >
        Return Home
      </Link>
    </section>
  );
}
