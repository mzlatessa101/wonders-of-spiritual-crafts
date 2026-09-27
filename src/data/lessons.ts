export type Lesson = {
  id: string;
  title: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "All levels";
  summary: string;
  content: string[];
};

export type Category = {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  color: string;
  lessons: Lesson[];
};

export const categories: Category[] = [
  {
    slug: "witchcraft-beginners",
    name: "Witchcraft for Beginners",
    icon: "☽",
    tagline: "Start your path with grounding & intention",
    description: "Sample lessons for Witchcraft for Beginners. Full curriculum expands after durable deploy.",
    color: "from-mystic-600 to-mystic-800",
    lessons: [
      {
        id: "witchcraft-beginners-1",
        title: "Welcome to Witchcraft for Beginners",
        duration: "8 min",
        level: "Beginner",
        summary: "An opening lesson for this path.",
        content: [
          "This is a starter lesson so the site builds and deploys. Deeper lessons return in a follow-up push.",
          "Practice with care, consent, and respect for many paths.",
        ],
      },
    ],
  },
  {
    slug: "spells-rituals",
    name: "Spells & Rituals",
    icon: "✦",
    tagline: "Craft with purpose, symbol, and timing",
    description: "Sample lessons for Spells & Rituals. Full curriculum expands after durable deploy.",
    color: "from-mystic-600 to-mystic-800",
    lessons: [
      {
        id: "spells-rituals-1",
        title: "Welcome to Spells & Rituals",
        duration: "8 min",
        level: "Beginner",
        summary: "An opening lesson for this path.",
        content: [
          "This is a starter lesson so the site builds and deploys. Deeper lessons return in a follow-up push.",
          "Practice with care, consent, and respect for many paths.",
        ],
      },
    ],
  },
  {
    slug: "astrology",
    name: "Astrology",
    icon: "✧",
    tagline: "Sky maps for self-knowledge & timing",
    description: "Sample lessons for Astrology. Full curriculum expands after durable deploy.",
    color: "from-mystic-600 to-mystic-800",
    lessons: [
      {
        id: "astrology-1",
        title: "Welcome to Astrology",
        duration: "8 min",
        level: "Beginner",
        summary: "An opening lesson for this path.",
        content: [
          "This is a starter lesson so the site builds and deploys. Deeper lessons return in a follow-up push.",
          "Practice with care, consent, and respect for many paths.",
        ],
      },
    ],
  },
  {
    slug: "stones-crystals",
    name: "Stones & Crystals",
    icon: "◆",
    tagline: "Earth allies for focus, beauty & ritual",
    description: "Sample lessons for Stones & Crystals. Full curriculum expands after durable deploy.",
    color: "from-mystic-600 to-mystic-800",
    lessons: [
      {
        id: "stones-crystals-1",
        title: "Welcome to Stones & Crystals",
        duration: "8 min",
        level: "Beginner",
        summary: "An opening lesson for this path.",
        content: [
          "This is a starter lesson so the site builds and deploys. Deeper lessons return in a follow-up push.",
          "Practice with care, consent, and respect for many paths.",
        ],
      },
    ],
  },
  {
    slug: "mediumship",
    name: "Mediumship",
    icon: "◎",
    tagline: "Gentle connection, boundaries & discernment",
    description: "Sample lessons for Mediumship. Full curriculum expands after durable deploy.",
    color: "from-mystic-600 to-mystic-800",
    lessons: [
      {
        id: "mediumship-1",
        title: "Welcome to Mediumship",
        duration: "8 min",
        level: "Beginner",
        summary: "An opening lesson for this path.",
        content: [
          "This is a starter lesson so the site builds and deploys. Deeper lessons return in a follow-up push.",
          "Practice with care, consent, and respect for many paths.",
        ],
      },
    ],
  },
  {
    slug: "spirit-communication",
    name: "Spirit Communication",
    icon: "◈",
    tagline: "Respectful dialogue with the unseen",
    description: "Sample lessons for Spirit Communication. Full curriculum expands after durable deploy.",
    color: "from-mystic-600 to-mystic-800",
    lessons: [
      {
        id: "spirit-communication-1",
        title: "Welcome to Spirit Communication",
        duration: "8 min",
        level: "Beginner",
        summary: "An opening lesson for this path.",
        content: [
          "This is a starter lesson so the site builds and deploys. Deeper lessons return in a follow-up push.",
          "Practice with care, consent, and respect for many paths.",
        ],
      },
    ],
  },
  {
    slug: "kundalini",
    name: "Kundalini",
    icon: "❖",
    tagline: "Awakening energy with patience & care",
    description: "Sample lessons for Kundalini. Full curriculum expands after durable deploy.",
    color: "from-mystic-600 to-mystic-800",
    lessons: [
      {
        id: "kundalini-1",
        title: "Welcome to Kundalini",
        duration: "8 min",
        level: "Beginner",
        summary: "An opening lesson for this path.",
        content: [
          "This is a starter lesson so the site builds and deploys. Deeper lessons return in a follow-up push.",
          "Practice with care, consent, and respect for many paths.",
        ],
      },
    ],
  },
  {
    slug: "hypnosis",
    name: "Hypnosis & Trance",
    icon: "◉",
    tagline: "Focused imagination for personal growth",
    description: "Sample lessons for Hypnosis & Trance. Full curriculum expands after durable deploy.",
    color: "from-mystic-600 to-mystic-800",
    lessons: [
      {
        id: "hypnosis-1",
        title: "Welcome to Hypnosis & Trance",
        duration: "8 min",
        level: "Beginner",
        summary: "An opening lesson for this path.",
        content: [
          "This is a starter lesson so the site builds and deploys. Deeper lessons return in a follow-up push.",
          "Practice with care, consent, and respect for many paths.",
        ],
      },
    ],
  },
  {
    slug: "moon-cycles",
    name: "Moon Cycles",
    icon: "☾",
    tagline: "Eight phases, ~29.5-day synodic month",
    description: "Sample lessons for Moon Cycles. Full curriculum expands after durable deploy.",
    color: "from-mystic-600 to-mystic-800",
    lessons: [
      {
        id: "moon-cycles-1",
        title: "Welcome to Moon Cycles",
        duration: "8 min",
        level: "Beginner",
        summary: "An opening lesson for this path.",
        content: [
          "This is a starter lesson so the site builds and deploys. Deeper lessons return in a follow-up push.",
          "Practice with care, consent, and respect for many paths.",
        ],
      },
    ],
  },
  {
    slug: "elements-bending",
    name: "Elements & Bending",
    icon: "⟡",
    tagline: "Earth, Air, Fire, Water as living teachers",
    description: "Sample lessons for Elements & Bending. Full curriculum expands after durable deploy.",
    color: "from-mystic-600 to-mystic-800",
    lessons: [
      {
        id: "elements-bending-1",
        title: "Welcome to Elements & Bending",
        duration: "8 min",
        level: "Beginner",
        summary: "An opening lesson for this path.",
        content: [
          "This is a starter lesson so the site builds and deploys. Deeper lessons return in a follow-up push.",
          "Practice with care, consent, and respect for many paths.",
        ],
      },
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}
