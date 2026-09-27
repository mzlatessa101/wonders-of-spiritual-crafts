import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/lessons";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Explore witchcraft, spells, astrology, crystals, mediumship, hypnosis, and elemental craft lessons.",
};

export default function LearnHubPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
        Curriculum
      </p>
      <h1 className="mt-2 font-display text-4xl text-moon md:text-5xl">
        Learn hub
      </h1>
      <p className="section-sub">
        Choose a path—including spirit communication and careful Kundalini study.
        Each category includes sample lessons you can read entirely in this
        MVP—no account required. Grow at your own rhythm.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/learn/${c.slug}`}
            className="card group relative overflow-hidden"
          >
            <div
              className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${c.color} opacity-30 blur-2xl transition group-hover:opacity-50`}
              aria-hidden
            />
            <span className="relative text-2xl text-gold-400" aria-hidden>
              {c.icon}
            </span>
            <h2 className="relative mt-3 font-display text-xl text-moon group-hover:text-gold-300">
              {c.name}
            </h2>
            <p className="relative mt-2 text-sm text-mystic-200/75">
              {c.tagline}
            </p>
            <p className="relative mt-4 text-xs text-mystic-400">
              {c.lessons.length} sample lessons →
            </p>
          </Link>
        ))}
      </div>

      <aside className="card mt-12 border-gold-500/20">
        <h2 className="font-display text-lg text-gold-300">How we teach</h2>
        <p className="mt-2 text-sm leading-relaxed text-mystic-200/80">
          Lessons are inclusive and non-dogmatic. We welcome witches,
          beginners, astrology fans, crystal keepers, mediums-in-training,
          spirit communicators, Kundalini learners, and practitioners exploring
          Vodou/Voodoo and other living traditions with humility. Hypnosis and
          Kundalini modules are educational/spiritual only—not medical
          treatment; we never teach forced awakening.
        </p>
      </aside>
    </div>
  );
}
