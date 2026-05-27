"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/photopoetry", label: "Photopoetry" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/reflections", label: "Reflections" },
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "About" },
  { href: "/subscribe", label: "Subscribe" },
  { href: "/login", label: "Login" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        scrolled
          ? "bg-[#F8F5F0]/90 backdrop-blur-md border-b border-[#E5E0D8] py-4 shadow-[0_1px_20px_-10px_rgba(28,28,28,0.15)]"
          : "bg-transparent py-6"
      )}
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6">
        <Link
          href="/"
          className="font-display uppercase tracking-[0.25em] text-[18px] text-[#1C1C1C] hover:text-[#D4A017] transition-colors duration-400 font-semibold"
        >
          The Call of Light
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono-ui text-[11px] text-[#4A4A4A] hover:text-[#D4A017] tracking-[0.14em] uppercase transition-colors duration-400 relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4A017] transition-all duration-400 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="lg:hidden text-[#1C1C1C] hover:text-[#D4A017] transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-[73px] z-40 bg-[#F8F5F0] flex flex-col items-center justify-center gap-6 border-t border-[#E5E0D8] animate-[fadeIn_0.3s_ease]">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-[#1C1C1C] text-3xl hover:text-[#D4A017] transition-colors duration-300 italic"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
