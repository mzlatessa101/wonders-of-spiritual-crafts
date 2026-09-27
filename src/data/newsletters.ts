export type NewsletterIssue = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
};

export const newsletterIssues: NewsletterIssue[] = [
  {
    id: "nl-0",
    title: "Eight Phases, One Synodic Month (~29.5 Days)",
    date: "September 12, 2026",
    excerpt:
      "A lantern letter on accurate lunar order—New through Waning Crescent—plus craft tips for intention, building, culmination, and release. No medical moon myths.",
    tags: ["moon", "phases", "craft"],
  },
  {
    id: "nl-1",
    title: "New Moon Notes: Intention Without Pressure",
    date: "September 1, 2026",
    excerpt:
      "A gentle new-moon letter on writing intentions that honor free will, plus a one-candle ritual for busy weeks.",
    tags: ["moon", "ritual"],
  },
  {
    id: "nl-2",
    title: "Library Lantern: Books of Gnosis for Beginners",
    date: "August 18, 2026",
    excerpt:
      "Curated reading paths through gnosis, folk craft, and spirit communication—titles only, with respect for living traditions.",
    tags: ["library", "gnosis"],
  },
  {
    id: "nl-3",
    title: "Elemental Check-In: Which Ally Do You Need?",
    date: "August 4, 2026",
    excerpt:
      "Earth, Air, Fire, Water as daily compass—plus a note on bending as embodiment, not physics.",
    tags: ["elements"],
  },
  {
    id: "nl-4",
    title: "Kundalini with Care: Slow Is Sacred",
    date: "July 21, 2026",
    excerpt:
      "Safety-aware reflections on life-force imagery, rest, and why we never force awakening in this community.",
    tags: ["kundalini", "safety"],
  },
  {
    id: "nl-5",
    title: "Speaking with Spirit: Discernment Letters",
    date: "July 7, 2026",
    excerpt:
      "How to journal impressions kindly, spot fearmongering, and keep ancestor work humble and grounded.",
    tags: ["spirit", "ancestors"],
  },
  {
    id: "nl-6",
    title: "VIP Circle Preview: What Twice-Weekly Feels Like",
    date: "June 23, 2026",
    excerpt:
      "A peek at Wednesday spell labs and Saturday learning circles—belonging without megaphone energy.",
    tags: ["vip", "community"],
  },
];
