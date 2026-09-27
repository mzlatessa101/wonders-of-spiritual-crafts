export type ElementInfo = {
  id: "earth" | "air" | "fire" | "water";
  name: string;
  glyph: string;
  quality: string;
  color: string;
  border: string;
  glow: string;
  invitation: string;
  practices: { title: string; steps: string[] }[];
  bending: { title: string; description: string };
};

export const elements: ElementInfo[] = [
  {
    id: "earth",
    name: "Earth",
    glyph: "🜃",
    quality: "Ground • Nourish • Endure",
    color: "from-emerald-900/80 to-midnight-800",
    border: "border-emerald-600/40",
    glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]",
    invitation:
      "Earth invites steadiness, body care, home, and long-term growth. Work with Earth when you need roots before reaching.",
    practices: [
      {
        title: "Stone & Salt Blessing",
        steps: [
          "Hold a stone or pinch of salt. Feel its weight.",
          "Speak: “I am supported. I build what lasts.”",
          "Place it on your altar or in a pocket for the day.",
        ],
      },
      {
        title: "Threshold Tending",
        steps: [
          "Sweep or wipe your doorway mindfully.",
          "Set a quiet intention for who and what you welcome.",
          "Thank the threshold as a guardian of your space.",
        ],
      },
    ],
    bending: {
      title: "Earth Bending (Embodiment)",
      description:
        "Plant bare feet or firmly shod feet on the floor. Soften knees. Press palms downward as if touching soil. Breathe into the belly. Whisper a quality you want to root—patience, safety, abundance. This is contemplative embodiment, not a claim over matter.",
    },
  },
  {
    id: "air",
    name: "Air",
    glyph: "🜁",
    quality: "Clarify • Speak • Inspire",
    color: "from-sky-900/80 to-midnight-800",
    border: "border-sky-500/40",
    glow: "hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]",
    invitation:
      "Air clears mental fog, supports study, prayer, and honest conversation. Call Air when you need perspective and breath.",
    practices: [
      {
        title: "Window Opening Rite",
        steps: [
          "Open a window or step outside.",
          "Inhale for four, hold for four, exhale for six.",
          "Name one thought you release and one truth you keep.",
        ],
      },
      {
        title: "Feather or Incense Focus",
        steps: [
          "Waft air across your altar with a feather or safe incense.",
          "Ask for clarity on one question only.",
          "Journal the first kind insight that arrives—no forcing.",
        ],
      },
    ],
    bending: {
      title: "Air Bending (Embodiment)",
      description:
        "Stand tall, arms opening slowly like wings. Soft gaze. Let the exhale be longer than the inhale. Speak one clear sentence you have been avoiding—only to yourself if needed. Air bending here means freeing breath and voice, not controlling wind.",
    },
  },
  {
    id: "fire",
    name: "Fire",
    glyph: "🜂",
    quality: "Ignite • Transform • Courage",
    color: "from-orange-900/70 to-midnight-800",
    border: "border-orange-500/40",
    glow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]",
    invitation:
      "Fire fuels will, creativity, and courageous change. Approach with respect—candle safety and emotional honesty.",
    practices: [
      {
        title: "Candle of Courage",
        steps: [
          "Light a candle in a safe holder. Never leave it unattended.",
          "Name the brave act you will take this week.",
          "Watch the flame for one minute, then snuff with thanks.",
        ],
      },
      {
        title: "Burn & Release (Paper)",
        steps: [
          "Write what you release on scrap paper.",
          "Burn outdoors or in a fire-safe vessel only if local rules allow; otherwise tear and recycle.",
          "Follow with a glass of water to cool the nervous system.",
        ],
      },
    ],
    bending: {
      title: "Fire Bending (Embodiment)",
      description:
        "Sharp, short exhales through the mouth; hand at the sternum. Feel warmth without strain. Visualize a hearth in the chest—contained, useful, not wild. Affirm: “My spark serves life.” No claims of pyrokinesis—only will and vitality.",
    },
  },
  {
    id: "water",
    name: "Water",
    glyph: "🜄",
    quality: "Feel • Flow • Heal-in-spirit",
    color: "from-blue-900/80 to-midnight-800",
    border: "border-blue-400/40",
    glow: "hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]",
    invitation:
      "Water teaches emotion, intuition, and flexibility. Soften when you have been rigid; hydrate body and spirit alike.",
    practices: [
      {
        title: "Blessed Cup",
        steps: [
          "Hold a cup of water. Trace a circle over it with a finger.",
          "Speak a quality you wish to drink in—peace, forgiveness, ease.",
          "Sip slowly. Feel it as a small sacrament.",
        ],
      },
      {
        title: "Moon Water (Optional)",
        steps: [
          "Leave a covered jar of water near a window overnight.",
          "Use later for watering plants, anointing tools, or mindful sipping if potable.",
          "Discard respectfully if it sits too long—refresh the relationship.",
        ],
      },
    ],
    bending: {
      title: "Water Bending (Embodiment)",
      description:
        "Sway gently side to side; soft knees; hands flowing as if through a stream. Allow one emotion to be named without fixing it. Whisper: “I can move with this.” Spiritual flow—not hydrokinesis.",
    },
  },
];
