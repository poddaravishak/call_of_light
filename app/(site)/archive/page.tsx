"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Grid, List, Search, ArrowRight } from "lucide-react";
import { CoverImage } from "@/components/shared/CoverImage";

// Complete catalog of works
const ALL_CATALOG = [
  {
    id: "a-1",
    slug: "stone-and-the-hour-before-dawn",
    title: "Stone, and the Hour Before Dawn",
    type: "Photopoetry",
    tag: "Poetry",
    lang: "English",
    date: "2026-05-18",
    excerpt: "Stone is patient weather. Weather is impatient stone. Between them, a life.",
    cover_image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    author: "Mira Tovesdotter",
  },
  {
    id: "a-2",
    slug: "a-letter-from-the-thaw",
    title: "A Letter from the Thaw",
    type: "Reflections",
    tag: "Nature",
    lang: "English",
    date: "2026-05-27",
    excerpt: "Today the ice along the fence-line let go, all at once, in a sound like a book being closed.",
    cover_image: "https://images.unsplash.com/photo-1478827387698-1527781a4887?auto=format&fit=crop&w=1600&q=80",
    author: "Mira Tovesdotter",
  },
  {
    id: "a-3",
    slug: "on-silence-and-other-furnishings",
    title: "On Silence, and Other Furnishings",
    type: "Philosophy",
    tag: "Essay",
    lang: "Bengali",
    date: "2026-05-11",
    excerpt: "My grandfather, who built boats, used to say that silence was a room you furnished, not a room you entered.",
    cover_image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    author: "August Reinholt",
  },
  {
    id: "a-4",
    slug: "the-last-lamp",
    title: "The devotion of October",
    type: "Philosophy",
    tag: "Memory",
    lang: "English",
    date: "2026-04-20",
    excerpt: "The house kept one lamp burning through October, and then through November — so the house would know we were coming back.",
    cover_image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=80",
    author: "Eivor Halden",
  },
  {
    id: "a-5",
    slug: "the-cartographers-regret",
    title: "The Cartographer's Regret",
    type: "Reflections",
    tag: "Fiction",
    lang: "English",
    date: "2026-03-30",
    excerpt: "He drew the coastline as it was, not as it had been promised, and for this the village never quite forgave him.",
    cover_image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80",
    author: "August Reinholt",
  },
  {
    id: "a-6",
    slug: "what-the-fog-keeps",
    title: "What the Fog Keeps",
    type: "Photopoetry",
    tag: "Photography",
    lang: "French",
    date: "2026-02-29",
    excerpt: "A photographic essay on abandoned shipyards along the Baltic, where the fog arrives each morning like a curator.",
    cover_image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
    author: "Lena Volkov",
  },
];

const TAGS = ["All", "Poetry", "Nature", "Essay", "Memory", "Fiction", "Photography"];
const LANGUAGES = ["All", "English", "Bengali", "French"];

export default function ArchivePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedLang, setSelectedLang] = useState("All");
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [filteredCatalog, setFilteredCatalog] = useState(ALL_CATALOG);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    let result = ALL_CATALOG;

    // Filter by search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.excerpt.toLowerCase().includes(q) ||
          item.author.toLowerCase().includes(q)
      );
    }

    // Filter by tag
    if (selectedTag !== "All") {
      result = result.filter((item) => item.tag === selectedTag);
    }

    // Filter by lang
    if (selectedLang !== "All") {
      result = result.filter((item) => item.lang === selectedLang);
    }

    setFilteredCatalog(result);
    setCurrentPage(1); // Reset page on filter change
  }, [searchQuery, selectedTag, selectedLang]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredCatalog.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredCatalog.slice(startIndex, startIndex + itemsPerPage);

  const getDetailsLink = (item: { type: string; slug: string }) => {
    if (item.type === "Photopoetry") return `/photopoetry/${item.slug}`;
    if (item.type === "Philosophy") return `/philosophy/${item.slug}`;
    return `/reflections/${item.slug}`;
  };

  return (
    <section className="mx-auto max-w-6xl px-6 pt-32 sm:pt-40 pb-20 sm:pb-32">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="font-mono-ui text-[11px] text-[#4A4A4A] tracking-[0.25em] uppercase mb-4">
          The Library Index
        </p>
        <h1 className="font-display italic text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1C] font-normal leading-none tracking-tight">
          Archive
        </h1>
        <p className="mt-4 font-serif text-[#4A4A4A] text-lg sm:text-xl italic">
          Index of all quiet publications
        </p>
      </div>

      {/* Filter and Search Bar Container */}
      <div className="border border-[#E5E0D8] bg-[#F8F5F0] p-6 mb-12 flex flex-col lg:flex-row gap-6 items-center justify-between">
        
        {/* Search */}
        <div className="relative w-full lg:max-w-xs">
          <input
            type="text"
            placeholder="Search titles, authors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#E5E0D8] focus:border-[#D4A017] outline-none pl-10 pr-4 py-2.5 text-sm text-[#1C1C1C] transition-all"
          />
          <Search size={16} className="absolute left-3.5 top-3.5 text-[#4A4A4A]/50" />
        </div>

        {/* Filters Group */}
        <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto justify-start lg:justify-end">
          {/* Tag Dropdown */}
          <div className="flex items-center gap-2">
            <span className="font-mono-ui text-[10px] text-[#4A4A4A]/60 uppercase">Tag:</span>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="bg-white border border-[#E5E0D8] focus:border-[#D4A017] text-xs text-[#1C1C1C] px-3 py-2 outline-none font-mono-ui uppercase tracking-wider"
            >
              {TAGS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Lang Dropdown */}
          <div className="flex items-center gap-2">
            <span className="font-mono-ui text-[10px] text-[#4A4A4A]/60 uppercase">Language:</span>
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              className="bg-white border border-[#E5E0D8] focus:border-[#D4A017] text-xs text-[#1C1C1C] px-3 py-2 outline-none font-mono-ui uppercase tracking-wider"
            >
              {LANGUAGES.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>

          {/* Layout switches */}
          <div className="flex items-center gap-1.5 border-l border-[#E5E0D8] pl-4">
            <button
              onClick={() => setViewType("grid")}
              className={`p-2 transition-colors ${
                viewType === "grid" ? "text-[#D4A017]" : "text-[#4A4A4A]/50 hover:text-[#1C1C1C]"
              }`}
              title="Grid View"
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setViewType("list")}
              className={`p-2 transition-colors ${
                viewType === "list" ? "text-[#D4A017]" : "text-[#4A4A4A]/50 hover:text-[#1C1C1C]"
              }`}
              title="List View"
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Grid or List View Render */}
      {filteredCatalog.length === 0 ? (
        <div className="border border-dashed border-[#E5E0D8] py-24 text-center text-[#4A4A4A] font-mono-ui text-sm">
          No records match your quiet inquiries.
        </div>
      ) : viewType === "grid" ? (
        /* GRID VIEW */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentItems.map((item) => (
            <Link
              key={item.id}
              href={getDetailsLink(item)}
              className="group flex flex-col bg-[#F8F5F0] border border-[#E5E0D8] hover:border-[#D4A017]/40 hover:shadow-[0_15px_45px_-20px_rgba(28,28,28,0.08)] transition-all duration-400"
            >
              <div className="aspect-[16/10] overflow-hidden relative bg-[#1C1C1C]">
                <CoverImage
                  src={item.cover_image}
                  alt={item.title}
                  className="group-hover:scale-[1.02] transition-transform duration-[800ms] filter grayscale-[15%]"
                />
                <span className="absolute top-4 left-4 bg-[#1C1C1C] text-[#F8F5F0] font-mono-ui text-[9px] tracking-widest uppercase px-2.5 py-1">
                  {item.type}
                </span>
              </div>
              <div className="p-6 flex flex-col justify-between flex-1 min-h-[190px]">
                <div>
                  <div className="flex items-center gap-3 font-mono-ui text-[9px] text-[#4A4A4A]/60 mb-2">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.lang}</span>
                  </div>
                  <h3 className="font-display text-xl text-[#1C1C1C] group-hover:text-[#D4A017] transition-colors leading-[1.3]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#4A4A4A] line-clamp-2 italic font-serif">
                    “{item.excerpt}”
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E5E0D8] flex items-center justify-between text-[10px] font-mono-ui">
                  <span className="text-[#D4A017] group-hover:text-[#0F2B4A] transition-colors">
                    Read entry →
                  </span>
                  <span className="text-[#4A4A4A]/60">by {item.author}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        /* LIST VIEW (Table of Contents Index style) */
        <div className="border border-[#E5E0D8] bg-[#F8F5F0] divide-y divide-[#E5E0D8]">
          {currentItems.map((item) => (
            <Link
              key={item.id}
              href={getDetailsLink(item)}
              className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-[#f2ede4]/50 transition-colors duration-200"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono-ui text-[9px] text-[#D4A017] border border-[#D4A017] px-2 py-0.5 mt-1 tracking-wider uppercase shrink-0">
                  {item.type}
                </span>
                <div>
                  <h3 className="font-display text-lg sm:text-xl text-[#1C1C1C] group-hover:text-[#D4A017] transition-colors font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4A4A4A]/70 font-mono-ui mt-1">
                    by {item.author} • {item.tag} • {item.lang}
                  </p>
                </div>
              </div>

              <div className="mt-4 sm:mt-0 flex items-center gap-4 text-right">
                <span className="font-mono-ui text-[10px] text-[#4A4A4A]/60">
                  {item.date}
                </span>
                <ArrowRight size={14} className="text-[#D4A017] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Spacious Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => {
            const pageNum = i + 1;
            const isCurrent = pageNum === currentPage;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`font-mono-ui text-[11px] tracking-wider px-3.5 py-2 border transition-all duration-300 ${
                  isCurrent
                    ? "bg-[#1C1C1C] text-[#F8F5F0] border-[#1C1C1C]"
                    : "border-[#E5E0D8] text-[#4A4A4A] hover:border-[#1C1C1C] hover:text-[#1C1C1C] bg-white cursor-pointer"
                }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
