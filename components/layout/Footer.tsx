import Link from "next/link";
import Image from "next/image";

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
            href="/stories"
            className="font-mono-ui text-text hover:text-heading transition-colors duration-400"
          >
            Stories
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
        <div className="mx-auto max-w-content px-6 py-6 font-mono-ui text-muted flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
          <span>© {new Date().getFullYear()} The Call of Light. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-muted/60">Developed by</span>
            <a
              href="https://eterces.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
              <Image src="/eterces.png" alt="ETERCES" width={18} height={18} className="object-contain" />
              <span className="text-[11px] font-semibold tracking-wider text-heading">ETERCES</span>
            </a>
            <span className="text-muted/40">·</span>
            <a
              href="https://avishak.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-muted hover:text-heading transition-colors"
            >
              Avishak Poddar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
