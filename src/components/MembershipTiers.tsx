"use client";

import { useState } from "react";
import { membershipTiers, MembershipTier } from "@/data/memberships";

export default function MembershipTiers() {
  const [active, setActive] = useState<MembershipTier["id"] | null>(null);
  const [confirmed, setConfirmed] = useState<MembershipTier["id"] | null>(null);

  function subscribe(id: MembershipTier["id"]) {
    setActive(id);
    // Mock client-side subscribe
    window.setTimeout(() => {
      setConfirmed(id);
      setActive(null);
    }, 400);
  }

  if (confirmed) {
    const tier = membershipTiers.find((t) => t.id === confirmed)!;
    return (
      <div
        className="card border-gold-500/40 bg-midnight-800/70 text-center"
        role="status"
      >
        <p className="text-2xl text-gold-400" aria-hidden>
          ✦
        </p>
        <h3 className="mt-2 font-display text-2xl text-moon">
          You&apos;re on {tier.name}
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-mystic-200/80">
          Mock subscription confirmed for <strong>{tier.name}</strong> (
          {tier.price}
          {tier.period === "forever" ? "" : tier.period}). No payment was
          processed—demo only. In production this would open checkout and
          unlock newsletters, library, or VIP gatherings.
        </p>
        <button
          type="button"
          className="btn-secondary mt-6 !py-2 text-xs"
          onClick={() => setConfirmed(null)}
        >
          Choose another tier
        </button>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {membershipTiers.map((tier) => (
        <article
          key={tier.id}
          className={`card relative flex flex-col ${
            tier.highlighted
              ? "border-gold-500/50 shadow-glow-gold ring-1 ring-gold-500/30"
              : ""
          }`}
        >
          {tier.highlighted && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-midnight-950">
              Most loved
            </span>
          )}
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-400">
            {tier.name}
          </p>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="font-display text-4xl text-moon">{tier.price}</span>
            <span className="text-sm text-mystic-400">{tier.period}</span>
          </div>
          <p className="mt-2 text-sm text-mystic-200/80">{tier.tagline}</p>
          <ul className="mt-6 flex-1 space-y-2.5 text-sm text-mystic-100/85">
            {tier.features.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="text-gold-400" aria-hidden>
                  ✦
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={`mt-8 w-full ${
              tier.highlighted ? "btn-primary" : "btn-secondary"
            }`}
            disabled={active === tier.id}
            onClick={() => subscribe(tier.id)}
          >
            {active === tier.id ? "Subscribing…" : tier.cta}
          </button>
        </article>
      ))}
    </div>
  );
}
