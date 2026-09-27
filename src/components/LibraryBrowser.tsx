"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  libraryBooks,
  libraryCategories,
  LibraryBook,
  LibraryCategory,
} from "@/data/library";

const accessLabel: Record<LibraryBook["access"], string> = {
  free: "Free",
  seeker: "Seeker+",
  vip: "VIP",
};

export default function LibraryBrowser() {
  const [filter, setFilter] = useState<LibraryCategory | "All">("All");
  const [sampleId, setSampleId] = useState<string | null>(null);

  const books = useMemo(
    () =>
      filter === "All"
        ? libraryBooks
        : libraryBooks.filter((b) => b.category === filter),
    [filter]
  );

  const sampleBook = sampleId
    ? libraryBooks.find((b) => b.id === sampleId)
    : null;

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter by category"
      >
        <button
          type="button"
          onClick={() => setFilter("All")}
          className={`rounded-full px-3 py-1.5 text-xs transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
            filter === "All"
              ? "bg-mystic-600/50 text-gold-300"
              : "bg-midnight-800 text-mystic-300 hover:text-moon"
          }`}
        >
          All
        </button>
        {libraryCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            className={`rounded-full px-3 py-1.5 text-xs transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
              filter === c
                ? "bg-mystic-600/50 text-gold-300"
                : "bg-midnight-800 text-mystic-300 hover:text-moon"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="mt-4 text-xs text-mystic-400">
        Showing {books.length} title{books.length === 1 ? "" : "s"}
        {filter !== "All" ? ` in ${filter}` : ""}. Titles &amp; blurbs only—no
        copyrighted book text.
      </p>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <li key={book.id} className="card flex flex-col !p-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-mystic-800/60 px-2 py-0.5 text-[10px] uppercase tracking-wide text-mystic-300">
                {book.category}
              </span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                  book.access === "vip"
                    ? "bg-gold-500/20 text-gold-300"
                    : book.access === "seeker"
                      ? "bg-mystic-600/40 text-mystic-200"
                      : "bg-emerald-900/40 text-emerald-300"
                }`}
              >
                {accessLabel[book.access]}
              </span>
            </div>
            <h2 className="mt-3 font-display text-xl text-moon">{book.title}</h2>
            <p className="mt-1 text-xs text-gold-400/90">
              {book.author}
              {book.year ? ` · ${book.year}` : ""}
            </p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-mystic-200/75">
              {book.blurb}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                className="btn-secondary !px-3 !py-2 text-xs"
                onClick={() => setSampleId(book.id)}
              >
                Read sample
              </button>
              {(book.access === "seeker" || book.access === "vip") && (
                <Link
                  href="/vip"
                  className="inline-flex items-center rounded-full px-3 py-2 text-xs text-gold-400 hover:text-gold-300"
                >
                  Unlock via membership →
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>

      {sampleBook && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="sample-title"
          onClick={() => setSampleId(null)}
        >
          <div
            className="card max-h-[80vh] w-full max-w-lg overflow-y-auto border-gold-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs uppercase tracking-widest text-gold-400">
              Sample stub · {accessLabel[sampleBook.access]}
            </p>
            <h3 id="sample-title" className="mt-2 font-display text-2xl text-moon">
              {sampleBook.title}
            </h3>
            <p className="mt-1 text-sm text-mystic-400">{sampleBook.author}</p>
            <p className="mt-4 text-sm leading-relaxed text-mystic-100/90">
              {sampleBook.sample}
            </p>
            <p className="mt-4 text-xs text-mystic-500">
              Prototype stub only. Full texts are not hosted here.
            </p>
            <button
              type="button"
              className="btn-primary mt-6 w-full"
              onClick={() => setSampleId(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
