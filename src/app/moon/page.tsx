import type { Metadata } from "next";
import Link from "next/link";
import MoonPhaseVisual from "@/components/MoonPhaseVisual";
import {
  darkMoonNote,
  moonPhases,
  SYNODIC_MONTH_DAYS,
} from "@/data/moon";

export const metadata: Metadata = {
  title: "Moon Cycles",
  description:
    "Eight lunar phases in order, ~29.5-day synodic month, and spiritual craft tips for witches and seekers.",
};

export default function MoonPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
        Lunar literacy
      </p>
      <h1 className="mt-2 font-display text-4xl text-moon md:text-5xl">
        Moon cycles
      </h1>
      <p className="section-sub">
        Here a <strong className="font-medium text-mystic-100">moon cycle</strong>{" "}
        means the <strong className="font-medium text-mystic-100">synodic month</strong>
        —new moon to new moon—about{" "}
        <strong className="font-medium text-gold-300">
          {SYNODIC_MONTH_DAYS} days
        </strong>{" "}
        on average. Below: the eight standard phases in correct order with
        approximate illumination. Craft tips are spiritual practice aids—not
        scientific or medical claims about the Moon controlling people.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/learn/moon-cycles" className="btn-primary !py-2 text-xs">
          Moon Cycles lessons
        </Link>
        <Link href="/learn/astrology" className="btn-secondary !py-2 text-xs">
          Astrology path
        </Link>
      </div>

      <ol
        className="mt-12 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-mystic-700/40 bg-midnight-900/50 px-4 py-6 md:gap-4"
        aria-label="Eight lunar phases in order"
      >
        {moonPhases.map((p, i) => (
          <li key={p.id} className="flex items-center gap-2 md:gap-3">
            <a
              href={`#${p.id}`}
              className="flex flex-col items-center gap-1.5 rounded-lg p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <MoonPhaseVisual visual={p.visual} label={p.name} />
              <span className="max-w-[4.5rem] text-center text-[10px] leading-tight text-mystic-300">
                {p.order}. {p.name.replace(" (Third Quarter)", "")}
              </span>
            </a>
            {i < moonPhases.length - 1 && (
              <span className="hidden text-mystic-600 sm:inline" aria-hidden>
                →
              </span>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-12 space-y-6">
        {moonPhases.map((phase) => (
          <article
            key={phase.id}
            id={phase.id}
            className="card scroll-mt-24 flex flex-col gap-4 sm:flex-row sm:items-start"
          >
            <MoonPhaseVisual visual={phase.visual} label={phase.name} />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="font-display text-2xl text-moon">
                  <span className="text-gold-400">{phase.order}.</span>{" "}
                  {phase.name}
                </h2>
                <span className="text-xs text-mystic-400">
                  Illumination {phase.illumination}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-mystic-200/85">
                <span className="font-medium text-gold-400/90">Astronomy: </span>
                {phase.astronomy}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-mystic-200/85">
                <span className="font-medium text-mystic-300">Craft tip: </span>
                {phase.craftTip}
              </p>
            </div>
          </article>
        ))}
      </div>

      <aside className="card mt-10 border-mystic-500/30">
        <h2 className="font-display text-xl text-gold-300">
          {darkMoonNote.title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-mystic-200/80">
          {darkMoonNote.body}
        </p>
      </aside>

      <aside className="mt-6 rounded-2xl border border-gold-500/20 bg-midnight-900/40 px-5 py-4 text-sm text-mystic-300">
        <p>
          <strong className="text-moon">Rhythm reminder: </strong>
          Intention-setting at <em>new</em>, building through{" "}
          <em>waxing</em>, culmination at <em>full</em>, release through{" "}
          <em>waning</em>—spiritual craft framing only.
        </p>
      </aside>
    </div>
  );
}
