import type { Metadata } from "next";
import Link from "next/link";
import { elements } from "@/data/elements";

export const metadata: Metadata = {
  title: "Elements & Bending",
  description:
    "Earth, Air, Fire, and Water practices plus spiritual bending—embodiment craft, not physics claims.",
};

export default function ElementsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
        Living teachers
      </p>
      <h1 className="mt-2 font-display text-4xl text-moon md:text-5xl">
        Elements &amp; bending
      </h1>
      <p className="section-sub">
        Work with Earth, Air, Fire, and Water as spiritual allies.{" "}
        <strong className="font-medium text-mystic-100">Bending</strong> in
        Wonders means contemplative movement and ritual embodiment—never claims
        to control physical matter. Pair these practices with the{" "}
        <Link
          href="/learn/elements-bending"
          className="text-gold-400 hover:text-gold-300"
        >
          Elements &amp; Bending lessons
        </Link>
        .
      </p>

      <div className="mt-12 space-y-8">
        {elements.map((el) => (
          <article
            key={el.id}
            id={el.id}
            className={`card scroll-mt-24 border ${el.border} bg-gradient-to-br ${el.color} ${el.glow}`}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="text-3xl text-gold-300"
                aria-hidden
                title={el.name}
              >
                {el.glyph}
              </span>
              <div>
                <h2 className="font-display text-3xl text-moon">{el.name}</h2>
                <p className="text-sm text-gold-400/90">{el.quality}</p>
              </div>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mystic-100/85">
              {el.invitation}
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {el.practices.map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl border border-white/5 bg-midnight-950/40 p-4"
                >
                  <h3 className="font-medium text-gold-300">{p.title}</h3>
                  <ol className="mt-3 list-decimal space-y-2 pl-4 text-sm text-mystic-200/85">
                    {p.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-gold-500/20 bg-midnight-950/50 p-4">
              <h3 className="font-display text-lg text-moon">
                {el.bending.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mystic-200/80">
                {el.bending.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <aside className="card mt-12 border-mystic-500/30 text-center">
        <p className="text-sm text-mystic-200/80">
          Ready to go deeper in curriculum form?
        </p>
        <Link
          href="/learn/elements-bending"
          className="btn-primary mt-4 inline-flex"
        >
          Open Elements lessons
        </Link>
      </aside>
    </div>
  );
}
