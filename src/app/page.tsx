import Link from "next/link";
import { categories } from "@/data/lessons";
import { membershipTiers } from "@/data/memberships";
import { nights } from "@/data/nights";

const values = [
  {
    title: "Learn at your pace",
    body: "Guided lessons across witchcraft, spells, astrology, crystals, mediumship, spirit communication, Kundalini, hypnosis, and the elements.",
    icon: "☽",
  },
  {
    title: "Library & lantern letters",
    body: "Browse spiritual books and gnosis titles, plus a newsletter archive—with Seeker and VIP unlocking more.",
    icon: "✧",
  },
  {
    title: "Gather as VIP",
    body: "Twice-weekly live circles plus priority seating at Supreme Witch night gatherings—intimate, empowering, and free of shame.",
    icon: "✦",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-gold-glow opacity-60"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 md:px-6 md:pb-28 md:pt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Hosted by Supreme Witch — Latessa Jamison
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-moon md:text-6xl">
            Where spiritual craft{" "}
            <span className="bg-gradient-to-r from-gold-300 to-mystic-300 bg-clip-text text-transparent">
              meets belonging
            </span>
          </h1>
          <p className="section-sub mt-6">
            Wonders of Spiritual Crafts is a social + learning home for witches,
            beginners, and seekers of many paths—including newsletters, a craft
            library, spirit communication, and careful Kundalini study. Always
            with respect, never with gatekeeping. Night gatherings are led by
            the Supreme Witch herself.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/nights" className="btn-primary">
              Night gatherings
            </Link>
            <Link href="/learn" className="btn-secondary">
              Start learning
            </Link>
            <Link href="/host" className="btn-secondary">
              Meet the host
            </Link>
            <Link href="/vip" className="btn-secondary">
              View memberships
            </Link>
          </div>
          <p className="mt-6 text-xs text-mystic-400">
            Inclusive of all sincere paths · Spirit work with consent &amp;
            boundaries · Hypnosis &amp; Kundalini content is educational, not
            medical advice
          </p>
        </div>
      </section>

      <section className="border-y border-mystic-800/40 bg-midnight-900/50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14">
          <div className="grid items-center gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                Circle leader
              </p>
              <h2 className="mt-2 font-display text-3xl text-moon md:text-4xl">
                Supreme Witch — Latessa Jamison
              </h2>
              <p className="mt-4 max-w-xl text-mystic-200/80">
                Latessa opens and closes every séance, Ouija, ancestor, and
                prosperity night so the circle stays safe, inclusive, and
                empowering. VIP members sit first; all sincere seekers are
                welcome to request a seat.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/host" className="btn-primary !py-2 text-sm">
                  Host &amp; circle
                </Link>
                <Link href="/nights#request-seat" className="btn-secondary !py-2 text-sm">
                  Request a seat
                </Link>
              </div>
            </div>
            <div className="card border-gold-500/30 lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-400">
                Tonight&apos;s craft
              </p>
              <ul className="mt-4 space-y-3">
                {nights.slice(0, 4).map((n) => (
                  <li key={n.id}>
                    <Link
                      href={`/nights#${n.id}`}
                      className="flex items-center gap-3 text-sm text-mystic-100 hover:text-gold-300"
                    >
                      <span className="text-gold-400" aria-hidden>
                        {n.icon}
                      </span>
                      <span>{n.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/nights"
                className="mt-5 inline-block text-xs font-semibold uppercase tracking-wider text-gold-400 hover:text-gold-300"
              >
                All night gatherings →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-mystic-800/40 bg-midnight-900/40">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <h2 className="section-title star-motif">Why Wonders</h2>
          <p className="section-sub">
            Built for people who want craft and community without cruelty or
            cultural theft.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <article key={v.title} className="card">
                <span className="text-2xl text-gold-400" aria-hidden>
                  {v.icon}
                </span>
                <h3 className="mt-3 font-display text-xl text-moon">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mystic-200/75">
                  {v.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="section-title">Membership tiers</h2>
            <p className="section-sub">
              Free community, Monthly Seeker, or VIP Circle—placeholder pricing,
              mock subscribe on the memberships page. VIP gets priority at night
              gatherings.
            </p>
          </div>
          <Link href="/vip" className="btn-secondary !py-2 text-xs">
            Compare plans
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {membershipTiers.map((t) => (
            <Link
              key={t.id}
              href="/vip"
              className={`card block ${
                t.highlighted ? "border-gold-500/40 shadow-glow-gold" : ""
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-400">
                {t.name}
              </p>
              <p className="mt-2 font-display text-3xl text-moon">
                {t.price}
                <span className="text-base text-mystic-400">{t.period}</span>
              </p>
              <p className="mt-2 text-sm text-mystic-200/75">{t.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-mystic-800/40 bg-midnight-900/30">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="section-title">Learning paths</h2>
              <p className="section-sub">
                {categories.length} categories with sample lessons ready to
                explore.
              </p>
            </div>
            <Link href="/learn" className="btn-secondary !py-2 text-xs">
              View all
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.slice(0, 6).map((c) => (
              <Link
                key={c.slug}
                href={`/learn/${c.slug}`}
                className="card group block"
              >
                <span className="text-xl text-gold-400" aria-hidden>
                  {c.icon}
                </span>
                <h3 className="mt-2 font-display text-lg text-moon group-hover:text-gold-300">
                  {c.name}
                </h3>
                <p className="mt-1 text-sm text-mystic-200/70">{c.tagline}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/newsletters" className="btn-secondary !py-2 text-xs">
              Newsletter archive
            </Link>
            <Link href="/community" className="btn-secondary !py-2 text-xs">
              Community feed
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-midnight-900/60 to-midnight-950">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center md:px-6">
          <p className="text-gold-400" aria-hidden>
            ⟡
          </p>
          <h2 className="mt-2 font-display text-3xl text-moon md:text-4xl">
            Moon &amp; elements
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-mystic-200/75">
            Track the eight lunar phases across a ~29.5-day synodic month, then
            work with Earth, Air, Fire, and Water—bending as spiritual
            embodiment, not physics claims.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/moon" className="btn-primary inline-flex">
              Explore moon cycles
            </Link>
            <Link href="/elements" className="btn-secondary inline-flex">
              Enter the elements
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
