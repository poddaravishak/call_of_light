import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono-ui text-accent mb-6">404</p>
      <h1 className="font-display text-6xl mb-6">Nothing here.</h1>
      <p className="text-muted mb-12 max-w-md">
        The page you are looking for has drifted into silence.
      </p>
      <Link
        href="/"
        className="font-mono-ui border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors duration-400"
      >
        Return Home
      </Link>
    </section>
  );
}
