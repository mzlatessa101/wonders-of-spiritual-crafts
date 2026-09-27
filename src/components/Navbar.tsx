"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/host", label: "Host" },
  { href: "/nights", label: "Nights" },
  { href: "/learn", label: "Learn" },
  { href: "/library", label: "Library" },
  { href: "/newsletters", label: "Newsletters" },
  { href: "/moon", label: "Moon" },
  { href: "/elements", label: "Elements" },
  { href: "/community", label: "Community" },
  { href: "/vip", label: "Membership" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-mystic-700/30 bg-midnight-950/85 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6"
        aria-label="Main"
      >
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/40 bg-midnight-800 text-gold-400 shadow-glow-gold"
            aria-hidden
          >
            ✦
          </span>
          <span className="font-display text-sm font-semibold tracking-wide text-moon sm:text-base">
            Wonders of{" "}
            <span className="text-gold-400 group-hover:text-gold-300">
              Spiritual Crafts
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-full px-2.5 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 xl:px-3.5 ${
                  isActive(link.href)
                    ? "bg-mystic-700/50 text-gold-300"
                    : "text-mystic-200/80 hover:bg-midnight-800 hover:text-moon"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/vip"
          className="btn-primary hidden !px-4 !py-2 text-xs lg:inline-flex"
        >
          Join VIP
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-mystic-600/50 p-2 text-moon focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? (
            <span aria-hidden className="text-lg leading-none">
              ✕
            </span>
          ) : (
            <span aria-hidden className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-moon" />
              <span className="block h-0.5 w-5 bg-moon" />
              <span className="block h-0.5 w-5 bg-moon" />
            </span>
          )}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-mystic-700/30 bg-midnight-900 px-4 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm ${
                    isActive(link.href)
                      ? "bg-mystic-700/40 text-gold-300"
                      : "text-mystic-100 hover:bg-midnight-800"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/vip"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Join VIP
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
