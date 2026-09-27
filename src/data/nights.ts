export type NightGathering = {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  expect: string[];
  vipPriority?: boolean;
};

export const nights: NightGathering[] = [
  {
    id: "seance",
    name: "Séance Night",
    icon: "🕯",
    tagline: "Hold séance with a held circle",
    description:
      "A guided evening to sit in sacred quiet, invite presence with consent, and listen together. Latessa, as Supreme Witch, opens and closes the circle so every guest feels held—never rushed, never pressured.",
    expect: [
      "Opening grounding and clear consent check-in",
      "Shared intention-setting before any invitation",
      "Gentle facilitation and a firm closing ritual",
      "Space to share or stay silent—both are welcome",
    ],
    vipPriority: true,
  },
  {
    id: "ouija",
    name: "Ouija Board Night",
    icon: "✧",
    tagline: "Board work with boundaries first",
    description:
      "Respectful Ouija practice framed as group craft: one board, clear rules, and a host who keeps the field steady. Curiosity is encouraged; fear-mongering is not.",
    expect: [
      "Brief teaching on etiquette, grounding, and closing",
      "Only willing participants touch the planchette",
      "Supreme Witch hosts and monitors the circle",
      "Debrief and release before anyone leaves",
    ],
    vipPriority: true,
  },
  {
    id: "ancestors",
    name: "Ancestor Contact",
    icon: "☽",
    tagline: "Family ones—honor, remember, connect",
    description:
      "A night devoted to family and ancestral lines: lighting candles for those who came before, offering names with care, and inviting gentle contact when it feels right. Inclusive of many ancestral and folk traditions.",
    expect: [
      "Optional sharing of names or stories (privacy honored)",
      "Offerings framed as respect, not obligation",
      "Guidance on healthy boundaries with the dead",
      "Closing that returns everyone fully to the present",
    ],
    vipPriority: true,
  },
  {
    id: "prosperity",
    name: "Prosperity Night",
    icon: "✦",
    tagline: "Abundance-oriented spirit work",
    description:
      "Gather to work with spirits and intentions oriented toward prosperity, opportunity, and sustainable abundance—ethical craft that never promises overnight wealth or replaces practical life choices.",
    expect: [
      "Prosperity-aligned altar and group intention",
      "Spirit invitation framed as partnership, not demand",
      "Simple abundance rite or journaling practice",
      "Grounding so energy settles before goodbye",
    ],
    vipPriority: true,
  },
  {
    id: "new-moon",
    name: "New Moon Circle",
    icon: "🌑",
    tagline: "Plant intentions under dark skies",
    description:
      "A quieter night for seeds and soft beginnings—new-moon intentions, candle work, and reflection under the Supreme Witch’s guidance. Ideal for beginners and seasoned witches alike.",
    expect: [
      "Moon lore in plain, empowering language",
      "Personal intention writing (kept private if you wish)",
      "Optional group charge of a simple charm",
      "Gentle close and self-care reminders",
    ],
    vipPriority: true,
  },
  {
    id: "spirit-tea",
    name: "Spirit Tea Night",
    icon: "⊹",
    tagline: "Conversation, craft, and soft presence",
    description:
      "A welcoming evening of tea, talk, and light spirit awareness—less formal than a full séance, still held with the same care. Come as you are; leave lighter than you arrived.",
    expect: [
      "Warm check-in and community connection",
      "Optional light sensing or oracle pull",
      "Open Q&A with the Supreme Witch host",
      "Consent-first culture for any spirit-facing moments",
    ],
    vipPriority: true,
  },
];

export const circlePrinciples = [
  {
    title: "Consent & boundaries",
    body: "No one is required to participate in any exercise. You may sit out, leave early, or ask for a pause—always.",
  },
  {
    title: "Educational & spiritual framing",
    body: "Nights are spiritual craft and community, not medical or mental-health treatment. Seek licensed care for clinical needs.",
  },
  {
    title: "No fear-mongering",
    body: "We teach grounding, invitation, and closing—not scare stories. Curiosity and respect lead the way.",
  },
  {
    title: "Many paths welcome",
    body: "Witches, beginners, ancestral practitioners, and seekers of many traditions share one respectful table.",
  },
];
