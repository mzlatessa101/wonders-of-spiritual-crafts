export type LibraryCategory =
  | "Gnosis"
  | "Witchcraft"
  | "Spirit communication"
  | "Elements"
  | "Astrology"
  | "Crystals"
  | "Kundalini"
  | "Mediumship"
  | "Moon";

export type LibraryBook = {
  id: string;
  title: string;
  author: string;
  category: LibraryCategory;
  blurb: string;
  sample: string;
  access: "free" | "seeker" | "vip";
  year?: string;
};

export const libraryCategories: LibraryCategory[] = [
  "Gnosis",
  "Witchcraft",
  "Spirit communication",
  "Elements",
  "Astrology",
  "Crystals",
  "Kundalini",
  "Mediumship",
  "Moon",
];

export const libraryBooks: LibraryBook[] = [
  {
    id: "b1",
    title: "The Kybalion (Public Domain Overview)",
    author: "Three Initiates (classic)",
    category: "Gnosis",
    blurb:
      "A widely known Hermetic overview often studied as a map of mentalism and correspondence. We list titles and context only—no copyrighted text reproduced.",
    sample:
      "Sample stub: This curated card points to public-domain study paths. Open with grounding; compare ideas against your own ethics.",
    access: "free",
    year: "1908",
  },
  {
    id: "b2",
    title: "Corpus Hermeticum: Reader's Compass",
    author: "Curated by Wonders Staff",
    category: "Gnosis",
    blurb:
      "A fictional study guide framing classic Hermetic themes for modern seekers—questions for journaling, not dogma.",
    sample:
      "Sample: What does 'as above, so below' mean in your kitchen, your breath, your community care?",
    access: "seeker",
  },
  {
    id: "b3",
    title: "Hedge & Hearth: Folk Craft Foundations",
    author: "Mira Ashwood (fictional)",
    category: "Witchcraft",
    blurb:
      "A beginner-friendly imaginary grimoire companion on altars, consent ethics, and seasonal home rites.",
    sample:
      "Sample: Sweep the threshold. Name what you welcome. Leave the rest outside with kindness.",
    access: "free",
  },
  {
    id: "b4",
    title: "Circle Without Coercion",
    author: "Latessa Jamison (notes)",
    category: "Witchcraft",
    blurb:
      "Teaching notes on free-will ethics, inclusive covens, and welcoming many paths—including Vodou-respectful learners.",
    sample:
      "Sample: Magick that respects consent is stronger than magick that steals choice.",
    access: "seeker",
  },
  {
    id: "b5",
    title: "Letters to the Quiet Ancestors",
    author: "Asha B. (fictional)",
    category: "Spirit communication",
    blurb:
      "Gentle essays on water offerings, listening sits, and discernment without fearmongering.",
    sample:
      "Sample: Speak as to an elder. Ask for wisdom, not control. Close the door when you are done.",
    access: "free",
  },
  {
    id: "b6",
    title: "Discernment Journal: Spirit & Self",
    author: "Wonders Circle",
    category: "Spirit communication",
    blurb:
      "VIP workbook for separating ego noise from calm insight—prompts only, no claimed channelings.",
    sample:
      "VIP sample: After each sit, mark impressions as Calm / Urgent / Flattering. Keep only Calm for action.",
    access: "vip",
  },
  {
    id: "b7",
    title: "Four Allies: Earth Air Fire Water",
    author: "River Sol (fictional)",
    category: "Elements",
    blurb:
      "Embodiment practices and altar layouts for elemental balance—bending framed as spiritual craft.",
    sample:
      "Sample: Ask which element you lack today. Take one tiny act—tidy, breathe, candle, or sip.",
    access: "free",
  },
  {
    id: "b8",
    title: "Bending the Inner Weather",
    author: "Wonders Labs",
    category: "Elements",
    blurb:
      "VIP lab notes pairing gesture, breath, and intention for elemental embodiment sessions.",
    sample:
      "VIP sample: Palms down—'I am steady.' Soft sway—'I can move with this.' No physics claims.",
    access: "vip",
  },
  {
    id: "b9",
    title: "Sky Mirror: Natal Chart Kindness",
    author: "Kenji Rivers (fictional)",
    category: "Astrology",
    blurb:
      "A soft introduction to Sun, Moon, Rising as self-compassion tools—not fate cages.",
    sample:
      "Sample: Your chart is a weather report for the soul. Bring a coat; do not cancel the journey.",
    access: "seeker",
  },
  {
    id: "b10",
    title: "Lunar Letters for Busy Witches",
    author: "Nova Quinn (fictional)",
    category: "Astrology",
    blurb:
      "Short moon-phase reflections designed for five-minute rituals and realistic lives.",
    sample:
      "Sample: New moon = one seed. Full moon = one release. Skip perfection.",
    access: "free",
  },
  {
    id: "b11",
    title: "Stone Kin: Choosing by Feel",
    author: "Dee Lumen (fictional)",
    category: "Crystals",
    blurb:
      "Ethical sourcing questions and resonance-first crystal companionship—no rigid dogma.",
    sample:
      "Sample: Hold the stone. Notice warmth or calm. One ally beats a crowded shelf.",
    access: "free",
  },
  {
    id: "b12",
    title: "Grid Geometry for Intention",
    author: "Wonders Library",
    category: "Crystals",
    blurb:
      "Subscriber guide to simple crystal grids as prayerful arrangement and beauty practice.",
    sample:
      "Sample: Center stone for the aim; circle for support; activate with one spoken sentence.",
    access: "seeker",
  },
  {
    id: "b13",
    title: "Coiled Light: A Careful Introduction",
    author: "S. Padma (fictional)",
    category: "Kundalini",
    blurb:
      "Beginner orientation to Kundalini imagery with strong safety notes—slow practice, no forced awakening.",
    sample:
      "Sample: Soft breath, soft spine. Stop if strained. Rest is part of the path.",
    access: "free",
  },
  {
    id: "b14",
    title: "Integration After Energy Practice",
    author: "Wonders Circle",
    category: "Kundalini",
    blurb:
      "Seeker essays on sleep, food, creativity, and community after subtle-energy sits.",
    sample:
      "Sample: Drink water. Walk outside. Do not chase intensity as proof of progress.",
    access: "seeker",
  },
  {
    id: "b15",
    title: "Serpent & Stillness (VIP Gnosis Notes)",
    author: "Latessa Jamison (circle notes)",
    category: "Kundalini",
    blurb:
      "VIP discussion notes linking Kundalini metaphors with elemental grounding and ethical community care. Educational only—not medical advice.",
    sample:
      "VIP sample: Pair any rising visualization with Earth habits. Wisdom over fireworks.",
    access: "vip",
  },
  {
    id: "b16",
    title: "Sitting with the Beloved Dead",
    author: "Priya N. (fictional)",
    category: "Mediumship",
    blurb:
      "Grief-aware mediumship ethics: consent, privacy, and never replacing professional support.",
    sample:
      "Sample: Offer comfort, not certainty. Close when scared. Love needs no performance.",
    access: "seeker",
  },
  {
    id: "b17",
    title: "Phases of the Synodic Month",
    author: "Wonders Lunar Desk",
    category: "Moon",
    blurb:
      "A clear primer on the eight lunar phases in order, ~29.5-day synodic month, and craft timing—titles and notes only.",
    sample:
      "Sample: New (~0%) → Waxing Crescent → First Quarter (~50%) → Waxing Gibbous → Full (~100%) → Waning Gibbous → Last Quarter → Waning Crescent. Intention at new; release while waning.",
    access: "free",
  },
  {
    id: "b18",
    title: "Lunar Journal for Two Cycles",
    author: "Nova Quinn (fictional)",
    category: "Moon",
    blurb:
      "Blank-prompt companion for tracking mood and craft across about two synodic months—without fatalism.",
    sample:
      "Sample prompt: Phase today? One action that matched waxing or waning? No medical conclusions—just patterns.",
    access: "seeker",
  },
  {
    id: "b19",
    title: "Dark Moon Notes (Craft Tradition)",
    author: "Latessa Jamison (circle notes)",
    category: "Moon",
    blurb:
      "VIP notes distinguishing folk “Dark Moon” rest/banishing days from the astronomical new moon—respectful, non-dogmatic.",
    sample:
      "VIP sample: Dark Moon is craft language near late waning/new—not a ninth official phase. Rest is valid magick.",
    access: "vip",
  },
];
