import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24 bg-white/40 backdrop-blur-[2px]">
      <div className="mx-auto max-w-content px-6 py-20 flex flex-col md:flex-row md:items-start md:justify-between gap-12">
        <div>
          <p className="font-display uppercase tracking-[0.22em] text-lg text-heading">
            The Call of Light
          </p>
          <p className="mt-4 text-muted max-w-xs font-serif italic">
            Stories that breathe in silence.
          </p>
        </div>

        <div className="flex flex-wrap gap-8">
          <Link
            href="/blog"
            className="font-mono-ui text-text hover:text-heading transition-colors duration-400"
          >
            Blog
          </Link>
          <Link
            href="/authors"
            className="font-mono-ui text-text hover:text-heading transition-colors duration-400"
          >
            Authors
          </Link>
          <Link
            href="/contact"
            className="font-mono-ui text-text hover:text-heading transition-colors duration-400"
          >
            Contact
          </Link>
          <Link
            href="/subscribe"
            className="font-mono-ui text-text hover:text-heading transition-colors duration-400"
          >
            Subscribe
          </Link>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-6 font-mono-ui text-muted flex justify-between">
          <span>© {new Date().getFullYear()} The Call of Light</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
