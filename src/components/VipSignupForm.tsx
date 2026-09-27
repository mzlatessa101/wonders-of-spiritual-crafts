"use client";

import { FormEvent, useState } from "react";

type Props = {
  heading?: string;
  successTitle?: string;
};

export default function VipSignupForm({
  heading = "Mock VIP signup",
  successTitle = "You're on the VIP list",
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [path, setPath] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="card border-gold-500/30 bg-midnight-800/70 text-center"
        role="status"
      >
        <p className="text-2xl text-gold-400" aria-hidden>
          ✦
        </p>
        <h3 className="mt-2 font-display text-xl text-moon">{successTitle}</h3>
        <p className="mt-2 text-sm text-mystic-200/80">
          Thanks, {name.split(" ")[0]}! This is a mock signup—no email was
          sent. In the full product, you&apos;d receive gathering links twice a
          week plus newsletter &amp; library access.
        </p>
        <button
          type="button"
          className="btn-secondary mt-4 !py-2 text-xs"
          onClick={() => {
            setSubmitted(false);
            setName("");
            setEmail("");
            setPath("");
          }}
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <h3 className="font-display text-xl text-moon">{heading}</h3>
      <p className="text-sm text-mystic-200/70">
        No payment or backend—demo only. Prefer the tier cards above for a
        mock subscribe flow.
      </p>
      <div>
        <label htmlFor="vip-name" className="block text-xs font-medium text-gold-400">
          Name
        </label>
        <input
          id="vip-name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-xl border border-mystic-600/40 bg-midnight-900 px-4 py-2.5 text-sm text-moon focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/40"
        />
      </div>
      <div>
        <label htmlFor="vip-email" className="block text-xs font-medium text-gold-400">
          Email
        </label>
        <input
          id="vip-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-xl border border-mystic-600/40 bg-midnight-900 px-4 py-2.5 text-sm text-moon focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/40"
        />
      </div>
      <div>
        <label htmlFor="vip-path" className="block text-xs font-medium text-gold-400">
          Your path (optional)
        </label>
        <input
          id="vip-path"
          value={path}
          onChange={(e) => setPath(e.target.value)}
          placeholder="e.g. beginner witch, Kundalini learner, Vodou seeker…"
          className="mt-1 w-full rounded-xl border border-mystic-600/40 bg-midnight-900 px-4 py-2.5 text-sm text-moon placeholder:text-mystic-500 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/40"
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        Request VIP access
      </button>
    </form>
  );
}
