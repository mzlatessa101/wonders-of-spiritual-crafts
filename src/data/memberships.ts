export type MembershipTier = {
  id: "free" | "seeker" | "vip";
  name: string;
  price: string;
  period: string;
  tagline: string;
  highlighted?: boolean;
  features: string[];
  cta: string;
};

export const membershipTiers: MembershipTier[] = [
  {
    id: "free",
    name: "Free Community",
    price: "$0",
    period: "forever",
    tagline: "Belong, browse, and begin",
    features: [
      "Community social feed",
      "Free Learn lessons (all public categories)",
      "Elements practices page",
      "Newsletter archive (read-only)",
      "Library samples for free titles",
    ],
    cta: "Join free",
  },
  {
    id: "seeker",
    name: "Monthly Seeker",
    price: "$12",
    period: "/ month",
    tagline: "Newsletters + full library access",
    features: [
      "Everything in Free",
      "Monthly spiritual craft newsletter delivered",
      "Full library access (non-VIP titles)",
      "Subscriber-only book samples",
      "Early lesson drops",
    ],
    cta: "Subscribe as Seeker",
  },
  {
    id: "vip",
    name: "VIP Circle",
    price: "$39",
    period: "/ month",
    tagline: "Live circles + priority night seating",
    highlighted: true,
    features: [
      "Everything in Monthly Seeker",
      "Twice-weekly live gatherings (talk, spells, learning)",
      "Priority seating at Supreme Witch night gatherings",
      "VIP-only library titles & gnosis texts",
      "Intimate circle size & priority Q&A",
      "Elemental & Kundalini practice labs",
    ],
    cta: "Join VIP Circle",
  },
];
