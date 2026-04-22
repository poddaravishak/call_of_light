"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/blog", label: "Blog" },
  { href: "/authors", label: "Authors" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-400",
        scrolled
          ? "bg-bg/90 backdrop-blur border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-content flex items-center justify-between px-6 h-20">
        <Link
          href="/"
          className="font-display uppercase tracking-[0.18em] text-[18px] text-heading"
        >
          The Call of Light
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono-ui text-text hover:text-heading transition-colors duration-400"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/subscribe"
            className="font-mono-ui border border-white px-4 py-2 text-heading hover:bg-white hover:text-black transition-colors duration-400"
          >
            Subscribe →
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden text-heading"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden fixed inset-0 top-20 z-40 bg-bg flex flex-col items-center justify-center gap-10 border-t border-border">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/subscribe"
            onClick={() => setOpen(false)}
            className="font-mono-ui border border-white px-6 py-3 mt-6"
          >
            Subscribe →
          </Link>
        </div>
      )}
    </header>
  );
}
