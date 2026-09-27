import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import { newsletterIssues } from "@/data/newsletters";

export const metadata: Metadata = {
  title: "Newsletters",
  description:
    "Archive of Wonders of Spiritual Crafts newsletters—moon notes, library lanterns, Kundalini care, and more.",
};

export default function NewslettersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            The Lantern
          </p>
          <h1 className="mt-2 font-display text-4xl text-moon md:text-5xl">
            Newsletters
          </h1>
          <p className="section-sub">
            Spiritual craft letters on ritual, elements, spirit communication,
            careful Kundalini notes, and community life. Archive below;
            subscribe with the mock form. Delivery is included for{" "}
            <Link href="/vip" className="text-gold-400 hover:text-gold-300">
              Monthly Seeker &amp; VIP
            </Link>{" "}
            tiers.
          </p>

          <ul className="mt-10 space-y-4">
            {newsletterIssues.map((issue) => (
              <li key={issue.id} className="card !p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-display text-xl text-moon">
                    {issue.title}
                  </h2>
                  <time className="text-xs text-mystic-400">{issue.date}</time>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-mystic-200/80">
                  {issue.excerpt}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {issue.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-mystic-800/60 px-2 py-0.5 text-[11px] text-mystic-300"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="lg:sticky lg:top-24">
            <NewsletterSubscribe />
            <p className="mt-4 text-center text-xs text-mystic-500">
              Prefer full access?{" "}
              <Link href="/vip" className="text-gold-400 hover:text-gold-300">
                View memberships
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
