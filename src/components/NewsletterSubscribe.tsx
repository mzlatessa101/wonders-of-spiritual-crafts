"use client";

import { FormEvent, useState } from "react";

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  }

  if (done) {
    return (
      <div
        className="card border-gold-500/30 text-center"
        role="status"
      >
        <p className="text-gold-400" aria-hidden>
          ✧
        </p>
        <h3 className="mt-2 font-display text-xl text-moon">
          You&apos;re subscribed
        </h3>
        <p className="mt-2 text-sm text-mystic-200/80">
          Mock success—no email was sent. In production,{" "}
          <span className="text-gold-300">{email}</span> would receive spiritual
          craft newsletters. Seeker &amp; VIP members get delivery included.
        </p>
        <button
          type="button"
          className="btn-secondary mt-4 !py-2 text-xs"
          onClick={() => {
            setDone(false);
            setEmail("");
          }}
        >
          Subscribe another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <h2 className="font-display text-xl text-moon">Subscribe to the lantern</h2>
      <p className="text-sm text-mystic-200/70">
        Occasional letters on craft, elements, spirit communication, and
        careful Kundalini notes. Demo form—client-side only.
      </p>
      <div>
        <label htmlFor="nl-email" className="block text-xs font-medium text-gold-400">
          Email
        </label>
        <input
          id="nl-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="mt-1 w-full rounded-xl border border-mystic-600/40 bg-midnight-900 px-4 py-2.5 text-sm text-moon placeholder:text-mystic-500 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/40"
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        Subscribe
      </button>
    </form>
  );
}
