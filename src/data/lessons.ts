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

function L(id: string, title: string, summary: string): Lesson {
  return {
    id,
    title,
    duration: "10 min",
    level: "Beginner",
    summary,
    content: [summary],
  };
}

export const categories: Category[] = [
  {
    slug: "witchcraft-beginners",
    name: "Witchcraft for Beginners",
    icon: "☽",
    tagline: "Start your path with grounding & intention",
    description: "A welcoming foundation for new practitioners.",
    color: "from-mystic-600 to-mystic-800",
    lessons: [L("wb-1", "What Is Magick, Really?", "Intention, energy, and personal practice.")],
  },
  {
    slug: "spells-rituals",
    name: "Spells & Rituals",
    icon: "✦",
    tagline: "Craft with purpose, symbol, and timing",
    description: "Practical spellcraft and ritual design.",
    color: "from-gold-600 to-mystic-700",
    lessons: [L("sr-1", "Anatomy of a Spell", "Intention, correspondences, action, release.")],
  },
  {
    slug: "astrology",
    name: "Astrology",
    icon: "✧",
    tagline: "Sky maps for self-knowledge & timing",
    description: "Natal chart basics and lunar phases.",
    color: "from-indigo-600 to-mystic-800",
    lessons: [L("as-1", "Your Chart as a Map, Not a Cage", "Sun, Moon, Rising—and free will.")],
  },
  {
    slug: "stones-crystals",
    name: "Stones & Crystals",
    icon: "◆",
    tagline: "Earth allies for focus, beauty & ritual",
    description: "Crystals as symbolic allies and sensory anchors.",
    color: "from-emerald-700 to-mystic-800",
    lessons: [L("sc-1", "Choosing Stones by Feel", "Resonance over dogma.")],
  },
  {
    slug: "mediumship",
    name: "Mediumship",
    icon: "◎",
    tagline: "Gentle connection, boundaries & discernment",
    description: "Intuitive listening with strong boundaries.",
    color: "from-violet-600 to-midnight-700",
    lessons: [L("md-1", "Grounding Before You Open", "Safety first: body, breath, and a clear closing.")],
  },
  {
    slug: "spirit-communication",
    name: "Spirit Communication",
    icon: "◈",
    tagline: "Respectful dialogue with the unseen",
    description: "Beginner-friendly spirit communication with boundaries.",
    color: "from-purple-600 to-midnight-800",
    lessons: [L("sc-comm-1", "What Spirit Communication Is (and Isn't)", "Prayer, intuition, ancestors, skepticism.")],
  },
  {
    slug: "kundalini",
    name: "Kundalini",
    icon: "❖",
    tagline: "Awakening energy with patience & care",
    description: "Educational Kundalini introduction—no medical claims.",
    color: "from-rose-700 to-mystic-900",
    lessons: [L("ku-1", "Kundalini as Metaphor & Mystery", "Coiled energy imagery across traditions.")],
  },
  {
    slug: "hypnosis",
    name: "Hypnosis & Trance",
    icon: "◉",
    tagline: "Focused imagination for personal growth",
    description: "Self-hypnosis and guided trance for growth—not medical treatment.",
    color: "from-sky-700 to-mystic-800",
    lessons: [L("hy-1", "What Trance Feels Like", "Everyday trance and focused attention.")],
  },
  {
    slug: "moon-cycles",
    name: "Moon Cycles",
    icon: "☾",
    tagline: "Eight phases, ~29.5-day synodic month",
    description: "Lunar literacy for witches and seekers.",
    color: "from-slate-500 to-mystic-900",
    lessons: [L("mc-1", "The Eight Phases in Order", "New through waning crescent.")],
  },
  {
    slug: "elements-bending",
    name: "Elements & Bending",
    icon: "⟡",
    tagline: "Earth, Air, Fire, Water as living teachers",
    description: "Four elements as spiritual allies—not literal physics.",
    color: "from-amber-600 to-rose-800",
    lessons: [L("eb-1", "Meeting the Four Elements", "Earth grounds, Air clarifies, Fire transforms, Water feels.")],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}
