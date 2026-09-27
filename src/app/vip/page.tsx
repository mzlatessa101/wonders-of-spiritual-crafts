import type { Metadata } from "next";
import Link from "next/link";
import MembershipTiers from "@/components/MembershipTiers";
import VipSignupForm from "@/components/VipSignupForm";

export const metadata: Metadata = {
  title: "Membership & VIP",
  description:
    "Free community, Monthly Seeker, and VIP Circle—priority seating at Supreme Witch night gatherings, newsletters, library, and twice-weekly circles.",
};

const vipExtras = [
  {
    title: "Twice-weekly gatherings",
    body: "Live circles for conversation, shared spellcraft, and guided learning—midweek evenings and weekend afternoons (concept schedule).",
  },
  {
    title: "Priority night seating",
    body: "Séance, Ouija, ancestor contact, prosperity nights, and more—hosted by Supreme Witch Latessa Jamison. VIP sits first.",
  },
  {
    title: "Newsletters included",
    body: "Seeker and VIP tiers unlock newsletter delivery. Browse the archive anytime on the Newsletters page.",
  },
  {
    title: "Full library access",
    body: "Spiritual books, gnosis guides, witchcraft titles, Kundalini notes, and more—VIP unlocks exclusive texts.",
  },
  {
    title: "Inclusive facilitation",
    body: "Many paths welcome, including Vodou/Voodoo practitioners and beginners side by side—consent and boundaries always.",
  },
];

const schedule = [
  {
    day: "Wednesday",
    time: "7:00–8:15 PM local",
    focus: "Talk & spell lab — share intentions, light craft together",
  },
  {
    day: "Saturday",
    time: "1:00–2:30 PM local",
    focus: "Learning circle — deep dive lesson + Q&A",
  },
];

export default function VipPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
          Memberships
        </p>
        <h1 className="mt-2 font-display text-4xl text-moon md:text-5xl">
          Choose your circle
        </h1>
        <p className="section-sub">
          From free community to Monthly Seeker to VIP Circle—clear tiers with
          placeholder pricing. Mock subscribe buttons confirm client-side only
          (no real payments). VIP Circle is hosted by{" "}
          <Link href="/host" className="text-gold-300 hover:text-gold-200">
            Supreme Witch Latessa Jamison
          </Link>{" "}
          and includes priority seating at{" "}
          <Link href="/nights" className="text-gold-300 hover:text-gold-200">
            night gatherings
          </Link>
          .
        </p>
      </div>

      <section className="mt-12" aria-labelledby="tiers-heading">
        <h2 id="tiers-heading" className="sr-only">
          Subscription tiers
        </h2>
        <MembershipTiers />
      </section>

      <section className="mt-12 card border-gold-500/30 bg-midnight-900/40">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl text-moon">
              VIP + Night Gatherings
            </h2>
            <p className="mt-2 text-sm text-mystic-200/80">
              The Supreme Witch hosts séance nights, Ouija board nights,
              ancestor contact (“family ones”), prosperity nights, and more.
              VIP members receive priority seating when seats open; anyone may
              still request interest via the Nights page form.
            </p>
          </div>
          <Link href="/nights" className="btn-secondary !py-2 text-xs">
            Explore nights
          </Link>
        </div>
      </section>

      <div className="mt-16 grid gap-10 lg:grid-cols-5">
        <div className="space-y-8 lg:col-span-3">
          <section>
            <h2 className="font-display text-2xl text-gold-300">
              What membership unlocks
            </h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {vipExtras.map((b) => (
                <li key={b.title} className="card !p-4">
                  <h3 className="font-medium text-moon">{b.title}</h3>
                  <p className="mt-1 text-sm text-mystic-200/75">{b.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-mystic-400">
              Explore{" "}
              <Link href="/newsletters" className="text-gold-400 hover:text-gold-300">
                newsletters
              </Link>
              , the{" "}
              <Link href="/library" className="text-gold-400 hover:text-gold-300">
                library
              </Link>
              , and{" "}
              <Link href="/nights" className="text-gold-400 hover:text-gold-300">
                night gatherings
              </Link>
              — some titles marked Seeker+ or VIP.
            </p>
          </section>

          <section className="card border-gold-500/25">
            <h2 className="font-display text-2xl text-moon">
              VIP concept schedule
            </h2>
            <p className="mt-2 text-sm text-mystic-300">
              Illustrative times for the VIP Circle tier—final calendar will
              adapt to community time zones. Special night gatherings are
              scheduled separately on the{" "}
              <Link href="/nights" className="text-gold-400 hover:text-gold-300">
                Nights
              </Link>{" "}
              page.
            </p>
            <ul className="mt-6 space-y-4">
              {schedule.map((s) => (
                <li
                  key={s.day}
                  className="flex flex-col gap-1 rounded-xl border border-mystic-700/40 bg-midnight-900/50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-medium text-gold-300">{s.day}</p>
                    <p className="text-sm text-mystic-200">{s.focus}</p>
                  </div>
                  <p className="text-xs text-mystic-400 sm:text-right">
                    {s.time}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="lg:col-span-2">
          <VipSignupForm heading="Or request VIP by form" />
        </div>
      </div>
    </div>
  );
}
