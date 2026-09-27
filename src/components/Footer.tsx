import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-mystic-700/30 bg-midnight-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <p className="font-display text-lg text-moon">
            ✦ Wonders of Spiritual Crafts
          </p>
          <p className="mt-2 text-sm leading-relaxed text-mystic-200/70">
            A social learning home for witches, seekers, and many sacred paths—
            inclusive, empowering, and grounded in respect.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-500">
            Explore
          </p>
          <ul className="mt-3 space-y-2 text-sm text-mystic-200/80">
            <li>
              <Link href="/host" className="hover:text-gold-300">
                Supreme Witch
              </Link>
            </li>
            <li>
              <Link href="/nights" className="hover:text-gold-300">
                Night Gatherings
              </Link>
            </li>
            <li>
              <Link href="/learn" className="hover:text-gold-300">
                Learn
              </Link>
            </li>
            <li>
              <Link href="/library" className="hover:text-gold-300">
                Library
              </Link>
            </li>
            <li>
              <Link href="/newsletters" className="hover:text-gold-300">
                Newsletters
              </Link>
            </li>
            <li>
              <Link href="/moon" className="hover:text-gold-300">
                Moon Cycles
              </Link>
            </li>
            <li>
              <Link href="/elements" className="hover:text-gold-300">
                Elements &amp; Bending
              </Link>
            </li>
            <li>
              <Link href="/community" className="hover:text-gold-300">
                Community
              </Link>
            </li>
            <li>
              <Link href="/vip" className="hover:text-gold-300">
                Membership &amp; VIP
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-500">
            Created by
          </p>
          <p className="mt-3 text-sm text-mystic-100">
            Supreme Witch — Latessa Jamison
          </p>
          <p className="mt-1 text-sm text-mystic-200/70">
            Many paths. One welcoming circle.
          </p>
        </div>
      </div>
      <div className="border-t border-mystic-800/50 py-4 text-center text-xs text-mystic-300/50">
        © {new Date().getFullYear()} Wonders of Spiritual Crafts · MVP demo ·
        No medical claims
      </div>
    </footer>
  );
}
