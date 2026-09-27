"use client";

import { FormEvent, useEffect, useState } from "react";
import { nights } from "@/data/nights";

const STORAGE_KEY = "wonders-night-interest";

type InterestRecord = {
  name: string;
  email: string;
  nightId: string;
  note: string;
  vipMember: boolean;
  savedAt: string;
};

type Props = {
  defaultNightId?: string;
  compact?: boolean;
};

export default function NightInterestForm({
  defaultNightId = "",
  compact = false,
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nightId, setNightId] = useState(defaultNightId);
  const [note, setNote] = useState("");
  const [vipMember, setVipMember] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const list = JSON.parse(raw) as InterestRecord[];
        setSavedCount(Array.isArray(list) ? list.length : 0);
      }
    } catch {
      /* ignore */
    }
  }, [submitted]);

  useEffect(() => {
    if (defaultNightId) setNightId(defaultNightId);
  }, [defaultNightId]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !nightId) return;

    const record: InterestRecord = {
      name: name.trim(),
      email: email.trim(),
      nightId,
      note: note.trim(),
      vipMember,
      savedAt: new Date().toISOString(),
    };

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const list: InterestRecord[] = raw ? JSON.parse(raw) : [];
      const next = Array.isArray(list) ? [...list, record] : [record];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setSavedCount(next.length);
    } catch {
      /* still show success UI */
    }

    setSubmitted(true);
  }

  const nightName =
    nights.find((n) => n.id === nightId)?.name ?? "a night gathering";

  if (submitted) {
    return (
      <div
        className={`card border-gold-500/30 bg-midnight-800/70 text-center ${
          compact ? "!p-4" : ""
        }`}
        role="status"
      >
        <p className="text-2xl text-gold-400" aria-hidden>
          ✦
        </p>
        <h3 className="mt-2 font-display text-xl text-moon">
          Seat request saved
        </h3>
        <p className="mt-2 text-sm text-mystic-200/80">
          Thanks, {name.split(" ")[0]}! Your interest in{" "}
          <span className="text-gold-300">{nightName}</span> is stored in this
          browser only (demo—no email was sent).
          {vipMember
            ? " VIP priority seating is noted for when live bookings open."
            : " VIP Circle members receive priority seating—explore Membership anytime."}
        </p>
        {savedCount > 0 && (
          <p className="mt-2 text-xs text-mystic-400">
            {savedCount} interest request{savedCount === 1 ? "" : "s"} on this
            device.
          </p>
        )}
        <button
          type="button"
          className="btn-secondary mt-4 !py-2 text-xs"
          onClick={() => {
            setSubmitted(false);
            setName("");
            setEmail("");
            setNote("");
            setVipMember(false);
            if (!defaultNightId) setNightId("");
          }}
        >
          Request another seat
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`card space-y-4 ${compact ? "!p-4" : ""}`}
    >
      <h3 className="font-display text-xl text-moon">
        {compact ? "Request a seat" : "Join a night"}
      </h3>
      <p className="text-sm text-mystic-200/70">
        Interest is saved locally in your browser—no backend, no fake emails.
        VIP members get priority when seats open.
      </p>
      <div>
        <label
          htmlFor="night-name"
          className="block text-xs font-medium text-gold-400"
        >
          Name
        </label>
        <input
          id="night-name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-xl border border-mystic-600/40 bg-midnight-900 px-4 py-2.5 text-sm text-moon focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/40"
        />
      </div>
      <div>
        <label
          htmlFor="night-email"
          className="block text-xs font-medium text-gold-400"
        >
          Email
        </label>
        <input
          id="night-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-xl border border-mystic-600/40 bg-midnight-900 px-4 py-2.5 text-sm text-moon focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/40"
        />
      </div>
      <div>
        <label
          htmlFor="night-select"
          className="block text-xs font-medium text-gold-400"
        >
          Which night?
        </label>
        <select
          id="night-select"
          required
          value={nightId}
          onChange={(e) => setNightId(e.target.value)}
          className="mt-1 w-full rounded-xl border border-mystic-600/40 bg-midnight-900 px-4 py-2.5 text-sm text-moon focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/40"
        >
          <option value="" disabled>
            Choose a gathering…
          </option>
          {nights.map((n) => (
            <option key={n.id} value={n.id}>
              {n.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="night-note"
          className="block text-xs font-medium text-gold-400"
        >
          Note (optional)
        </label>
        <textarea
          id="night-note"
          rows={compact ? 2 : 3}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Accessibility needs, first time, or questions…"
          className="mt-1 w-full resize-y rounded-xl border border-mystic-600/40 bg-midnight-900 px-4 py-2.5 text-sm text-moon placeholder:text-mystic-500 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/40"
        />
      </div>
      <label className="flex cursor-pointer items-start gap-2 text-sm text-mystic-200/80">
        <input
          type="checkbox"
          checked={vipMember}
          onChange={(e) => setVipMember(e.target.checked)}
          className="mt-1 rounded border-mystic-600 bg-midnight-900 text-mystic-500 focus:ring-gold-500/40"
        />
        <span>
          I am (or plan to be) a{" "}
          <span className="text-gold-300">VIP Circle</span> member — priority
          seating
        </span>
      </label>
      <button type="submit" className="btn-primary w-full">
        Request a seat
      </button>
    </form>
  );
}
