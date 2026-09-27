import type { Metadata } from "next";
import Link from "next/link";
import { nights } from "@/data/nights";

export const metadata: Metadata = {
  title: "Supreme Witch — Latessa Jamison",
  description:
    "Meet Latessa Jamison, Supreme Witch and circle host of Wonders of Spiritual Crafts—night gatherings, VIP Circle, and inclusive spiritual craft.",
};

const pillars = [
  {
    title: "Circle leader",
    body: "Latessa opens, holds, and closes every night gathering—séance, Ouija, ancestor work, prosperity rites, and more—so guests can arrive curious and leave grounded.",
  },
  {
    title: "Inclusive table",
    body: "Many paths share one welcoming circle: beginners, practicing witches, ancestral and folk traditions, and seekers who simply want belonging without shame.",
  },
  {
    title: "Consent-first craft",
    body: "Spirit work here means clear boundaries, optional participation, and educational framing—never medical claims, never fear as a sales pitch.",
  },
];

export default function HostPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <section className="relative overflow-hidden rounded-3xl border border-gold-500/25 bg-midnight-900/50 p-8 md:p-12">
        <div
          className="pointer-events-none absolute inset-0 bg-gold-glow opacity-50"
          aria-hidden
        />
        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            Circle host
          </p>
          <h1 className="mt-3 font-display text-4xl text-moon md:text-5xl">
            Supreme Witch
          </h1>
          <p className="mt-2 font-display text-2xl text-gold-300 md:text-3xl">
            Latessa Jamison
          </p>
          <p className="mt-5 text-base leading-relaxed text-mystic-200/85 md:text-lg">
            Founder of Wonders of Spiritual Crafts and steward of the VIP
            Circle. Latessa hosts spiritual night gatherings where seekers learn
            craft, honor family ones, and sit with spirit—empowered, respected,
            and never alone at the edge of the unknown.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/nights" className="btn-primary">
              View night gatherings
            </Link>
            <Link href="/vip" className="btn-secondary">
              Join VIP Circle
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-14" aria-labelledby="pillars-heading">
        <h2 id="pillars-heading" className="section-title star-motif">
          How she holds the circle
        </h2>
        <p className="section-sub">
          Leadership here means presence, clarity, and care—not hierarchy for
          its own sake.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.title} className="card">
              <h3 className="font-display text-xl text-moon">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mystic-200/75">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 border-y border-mystic-800/40 bg-midnight-900/30 py-12 -mx-4 px-4 md:-mx-6 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="section-title">Nights she hosts</h2>
              <p className="section-sub">
                From séance to prosperity—each gathering is led by the Supreme
                Witch with VIP priority seating.
              </p>
            </div>
            <Link href="/nights" className="btn-secondary !py-2 text-xs">
              All nights
            </Link>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {nights.map((n) => (
              <li key={n.id}>
                <Link
                  href={`/nights#${n.id}`}
                  className="card flex items-center gap-3 !p-4 transition hover:border-gold-500/30"
                >
                  <span className="text-xl text-gold-400" aria-hidden>
                    {n.icon}
                  </span>
                  <div>
                    <p className="font-medium text-moon">{n.name}</p>
                    <p className="text-xs text-mystic-400">{n.tagline}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-14 text-center">
        <p className="text-gold-400" aria-hidden>
          ✦
        </p>
        <h2 className="mt-2 font-display text-3xl text-moon">
          Sit in her circle
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-mystic-200/75">
          Request a seat for an upcoming night type, or join VIP for twice-weekly
          gatherings and priority at every spiritual night.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/nights#request-seat" className="btn-primary">
            Request a seat
          </Link>
          <Link href="/vip" className="btn-secondary">
            VIP membership
          </Link>
        </div>
      </section>
    </div>
  );
}
