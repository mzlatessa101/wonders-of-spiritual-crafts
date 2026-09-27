import type { Metadata } from "next";
import Link from "next/link";
import LibraryBrowser from "@/components/LibraryBrowser";

export const metadata: Metadata = {
  title: "Library",
  description:
    "Spiritual books, gnosis, witchcraft, spirit communication, Kundalini, elements, astrology, and crystals—titles and blurbs only.",
};

export default function LibraryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
        Reading room
      </p>
      <h1 className="mt-2 font-display text-4xl text-moon md:text-5xl">
        Library
      </h1>
      <p className="section-sub">
        A curated shelf of spiritual craft titles—books of gnosis, witchcraft
        learning, spirit communication, Kundalini, elements, astrology, and
        crystals. Cards show title, author, and blurb only (no copyrighted book
        text). Some works are Free; others need{" "}
        <Link href="/vip" className="text-gold-400 hover:text-gold-300">
          Seeker or VIP
        </Link>{" "}
        membership.
      </p>

      <div className="mt-10">
        <LibraryBrowser />
      </div>
    </div>
  );
}
