import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
      <p className="text-gold-400" aria-hidden>
        ✦
      </p>
      <h1 className="mt-4 font-display text-3xl text-moon">Page not found</h1>
      <p className="mt-2 text-sm text-mystic-300">
        This path has wandered off the map. Return to the circle.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Go home
      </Link>
    </div>
  );
}
