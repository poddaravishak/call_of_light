"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { href: "/", label: "Home", desc: "Return to the entrance" },
  { href: "/photopoetry", label: "Photopoetry", desc: "Silent dialogues between photo and verse" },
  { href: "/philosophy", label: "Philosophy", desc: "Deliberate essays on stillness" },
  { href: "/reflections", label: "Reflections", desc: "Our personal journals & diaries" },
  { href: "/archive", label: "Archive", desc: "Search our visual catalog library" },
  { href: "/about", label: "About", desc: "The manifesto of slow reading" },
  { href: "/subscribe", label: "Subscribe", desc: "Become a supporting patron" },
  { href: "/login", label: "Login", desc: "Enter your personal sanctuary" },
];

const NAV_LINKS = LINKS.filter((link) => link.href !== "/login");
const LOGIN_LINK = LINKS.find((link) => link.href === "/login");

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // Pages that feature dark immersive headers at the very top
  const isDarkHeaderPage = pathname === "/" || pathname === "/about";
  const useDarkHeaderStyle = isDarkHeaderPage && !scrolled;

  // Animation variants
  const drawerVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: { ease: "easeInOut", duration: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 22 },
    },
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        useDarkHeaderStyle
          ? "bg-transparent py-6"
          : "bg-[#F8F5F0]/90 backdrop-blur-md border-b border-[#E5E0D8] py-4 shadow-[0_1px_20px_-10px_rgba(28,28,28,0.15)]"
      )}
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6">
        <Link
          href="/"
          className={cn(
            "font-display uppercase tracking-[0.25em] text-[18px] transition-colors duration-400 font-semibold relative z-50",
            open
              ? "text-[#1C1C1C]"
              : useDarkHeaderStyle
                ? "text-[#F8F5F0] hover:text-[#D4A017]"
                : "text-[#1C1C1C] hover:text-[#D4A017]"
          )}
        >
          The Call of Light
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-mono-ui text-[11px] tracking-[0.14em] uppercase transition-colors duration-400 relative group py-1",
                  useDarkHeaderStyle
                    ? isActive
                      ? "text-[#D4A017]"
                      : "text-[#E5E0D8]/95 hover:text-[#D4A017]"
                    : isActive
                      ? "text-[#D4A017]"
                      : "text-[#4A4A4A] hover:text-[#D4A017]"
                )}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4A017] transition-all duration-400 group-hover:w-full" />
              </Link>
            );
          })}

          {/* Login Button */}
          {LOGIN_LINK && (
            <Link
              href={LOGIN_LINK.href}
              className={cn(
                "font-mono-ui text-[11px] tracking-[0.14em] uppercase transition-all duration-300 px-4 py-2 border rounded-none font-semibold",
                useDarkHeaderStyle
                  ? "border-[#F8F5F0] text-[#F8F5F0] hover:bg-[#F8F5F0] hover:text-[#1C1C1C]"
                  : "border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-[#F8F5F0]"
              )}
            >
              {LOGIN_LINK.label}
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          className={cn(
            "lg:hidden transition-colors cursor-pointer relative z-50 p-2",
            open
              ? "text-[#1C1C1C]"
              : useDarkHeaderStyle
                ? "text-[#F8F5F0] hover:text-[#D4A017]"
                : "text-[#1C1C1C] hover:text-[#D4A017]"
          )}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer (Fullscreen Slide) */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden fixed inset-0 z-40 bg-[#F8F5F0] flex flex-col justify-between p-6 pt-24 overflow-y-auto border-l border-[#E5E0D8]"
          >
            {/* Drawer top banner */}
            <div className="border-b border-[#E5E0D8] pb-6 mb-4 flex items-center justify-between">
              <span className="font-mono-ui text-[9px] text-[#4A4A4A]/60 tracking-[0.25em] uppercase flex items-center gap-1.5">
                <Star size={10} fill="#D4A017" className="text-[#D4A017]" /> Sanctuary Directory
              </span>
            </div>

            {/* Structured Staggered Navigation Stack */}
            <div className="flex-1 flex flex-col justify-center space-y-5 py-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-start gap-4"
                    >
                      <div>
                        <span
                          className={cn(
                            "font-display text-2xl tracking-wide group-hover:text-[#D4A017] transition-colors",
                            isActive
                              ? "text-[#D4A017] italic font-semibold"
                              : "text-[#1C1C1C] font-normal"
                          )}
                        >
                          {link.label}
                        </span>
                        <p className="text-[10px] font-serif text-[#4A4A4A] italic opacity-80 group-hover:opacity-100 transition-opacity mt-0.5">
                          {link.desc}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}

              {/* Login Button */}
              {LOGIN_LINK && (
                <motion.div variants={itemVariants} className="pt-4">
                  <Link
                    href={LOGIN_LINK.href}
                    onClick={() => setOpen(false)}
                    className="block w-full text-center bg-[#1C1C1C] hover:bg-[#D4A017] text-[#F8F5F0] hover:text-[#1C1C1C] font-mono-ui text-[11px] tracking-[0.2em] uppercase py-3.5 transition-colors duration-300"
                  >
                    {LOGIN_LINK.label}
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Premium footer credits inside menu */}
            <div className="border-t border-[#E5E0D8] pt-6 mt-4 space-y-3">
              <p className="font-mono-ui text-[9px] text-[#4A4A4A]/60 uppercase tracking-[0.2em] leading-relaxed">
                The Call of Light — a quiet sanctuary for deliberate reading.
              </p>
              <div className="flex justify-between items-center text-[9px] font-mono-ui text-[#4A4A4A]/40">
                <span>journal@calloflight.com</span>
                <span>Est. 2025</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
