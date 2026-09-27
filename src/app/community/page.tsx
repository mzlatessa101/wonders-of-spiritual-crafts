import type { Metadata } from "next";
import CommunityFeed from "@/components/CommunityFeed";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Social feed for spiritual seekers—share wins, questions, and blessings with likes and comments.",
};

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
          Circle
        </p>
        <h1 className="mt-2 font-display text-4xl text-moon md:text-5xl">
          Community feed
        </h1>
        <p className="mt-3 text-mystic-200/80">
          A mock social space powered by local state—compose posts, like, and
          comment. Kindness is the house rule. All sincere paths are welcome.
        </p>
      </div>
      <div className="mt-10">
        <CommunityFeed />
      </div>
    </div>
  );
}
