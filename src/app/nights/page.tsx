import type { Metadata } from "next";
import Link from "next/link";
import NightInterestForm from "@/components/NightInterestForm";
import { circlePrinciples, nights } from "@/data/nights";

export const metadata: Metadata = {
  title: "Night Gatherings",
  description:
    "Séance, Ouija, ancestor contact, prosperity, and more—hosted by Supreme Witch Latessa Jamison. VIP Circle gets priority seating.",
};

export default function NightsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
          Circle nights
        </p>
        <h1 className="mt-2 font-display text-4xl text-moon md:text-5xl">
          Night gatherings
        </h1>
        <p className="section-sub">
          Hold séance, sit with the board, honor family ones, and welcome
          abundance-oriented spirits—always with consent, grounding, and a clear
          close. Hosted by{" "}
          <Link href="/host" className="text-gold-300 hover:text-gold-200">
            Supreme Witch Latessa Jamison
          </Link>
          .
        </p>
        <p className="mt-4 text-sm text-mystic-300">
          <Link href="/vip" className="text-gold-400 hover:text-gold-300">
            VIP Circle
          </Link>{" "}
          members receive priority seating for every night below.
        </p>
      </div>

      <section className="mt-12" aria-labelledby="nights-heading">
        <h2 id="nights-heading" className="sr-only">
          Upcoming night types
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {nights.map((night) => (
            <article key={night.id} id={night.id} className="card flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <span className="text-2xl text-gold-400" aria-hidden>
                  {night.icon}
                </span>
                {night.vipPriority && (
                  <span className="rounded-full border border-gold-500/35 bg-gold-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold-300">
                    VIP priority
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-display text-2xl text-moon">
                {night.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-gold-400/90">
                {night.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-mystic-200/75">
                {night.description}
              </p>
              <div className="mt-4 flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-mystic-400">
                  What to expect
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-mystic-200/80">
                  {night.expect.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-gold-500" aria-hidden>
                        ·
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#request-seat" className="btn-secondary mt-6 !py-2 text-xs">
                Join this night
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h2 className="font-display text-2xl text-gold-300">
            How we hold the circle
          </h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {circlePrinciples.map((p) => (
              <li key={p.title} className="card !p-4">
                <h3 className="font-medium text-moon">{p.title}</h3>
                <p className="mt-1 text-sm text-mystic-200/75">{p.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-mystic-400">
            Meet the host on the{" "}
            <Link href="/host" className="text-gold-400 hover:text-gold-300">
              Supreme Witch
            </Link>{" "}
            page, or deepen access via{" "}
            <Link href="/vip" className="text-gold-400 hover:text-gold-300">
              Membership &amp; VIP
            </Link>
            .
          </p>
        </div>
        <div id="request-seat" className="scroll-mt-24 lg:col-span-2">
          <NightInterestForm />
        </div>
      </section>
    </div>
  );
}
