/**
 * Lunar phase reference for Wonders of Spiritual Crafts.
 * Astronomy: synodic month (new moon → new moon) ≈ 29.5 days.
 * Craft associations are spiritual practice framing—not medical or scientific claims.
 */

export type MoonPhase = {
  id: string;
  name: string;
  order: number;
  /** Approximate illuminated fraction of the Moon’s near side (order-of-magnitude guide). */
  illumination: string;
  astronomy: string;
  craftTip: string;
  /** Simple CSS/visual hint for the phase diagram */
  visual: "new" | "wax-crescent" | "first-quarter" | "wax-gibbous" | "full" | "wan-gibbous" | "last-quarter" | "wan-crescent";
};

export const SYNODIC_MONTH_DAYS = 29.5;

export const moonPhases: MoonPhase[] = [
  {
    id: "new",
    name: "New Moon",
    order: 1,
    illumination: "~0%",
    astronomy:
      "The Moon is roughly between Earth and Sun; the near side is not sunlit as seen from Earth. Marks the start of the synodic month.",
    craftTip:
      "Intention-setting, quiet beginnings, planting seeds of aim. Keep rites simple—journal one clear intention.",
    visual: "new",
  },
  {
    id: "waxing-crescent",
    name: "Waxing Crescent",
    order: 2,
    illumination: "~1–49% (growing)",
    astronomy:
      "A thin crescent appears after new; illuminated portion grows each night (waxing = increasing light).",
    craftTip:
      "Nurture what you began. Small consistent actions, hopeful charms, gentle momentum.",
    visual: "wax-crescent",
  },
  {
    id: "first-quarter",
    name: "First Quarter",
    order: 3,
    illumination: "~50%",
    astronomy:
      "Half of the near side appears lit (right half in the Northern Hemisphere’s usual evening sky). A distinct checkpoint in the waxing half.",
    craftTip:
      "Decision and commitment. Adjust plans, clear obstacles, take one brave step.",
    visual: "first-quarter",
  },
  {
    id: "waxing-gibbous",
    name: "Waxing Gibbous",
    order: 4,
    illumination: "~51–99% (growing)",
    astronomy:
      "More than half lit and still increasing toward full. Gibbous means the shape is bulging beyond a semicircle.",
    craftTip:
      "Refine and strengthen. Polish spells already cast; prepare for culmination.",
    visual: "wax-gibbous",
  },
  {
    id: "full",
    name: "Full Moon",
    order: 5,
    illumination: "~100%",
    astronomy:
      "Earth is roughly between Sun and Moon; the near side is fully illuminated. Peak brightness of the cycle.",
    craftTip:
      "Culmination, gratitude, celebration, and clarity. Charge tools or water if that is your custom—then rest.",
    visual: "full",
  },
  {
    id: "waning-gibbous",
    name: "Waning Gibbous",
    order: 6,
    illumination: "~99–51% (shrinking)",
    astronomy:
      "Illumination decreases after full (waning = decreasing light). Still mostly bright.",
    craftTip:
      "Begin release work. Share wisdom, give thanks, loosen what no longer fits.",
    visual: "wan-gibbous",
  },
  {
    id: "last-quarter",
    name: "Last Quarter (Third Quarter)",
    order: 7,
    illumination: "~50%",
    astronomy:
      "Again about half lit, now in the waning half (left half lit in the Northern Hemisphere’s usual morning sky). Also called Third Quarter.",
    craftTip:
      "Forgive, break unhelpful patterns, compost old stories. Honest review without harshness.",
    visual: "last-quarter",
  },
  {
    id: "waning-crescent",
    name: "Waning Crescent",
    order: 8,
    illumination: "~49–1% (shrinking)",
    astronomy:
      "A thinning crescent before returning to new. The cycle closes toward conjunction with the Sun again.",
    craftTip:
      "Rest, dreamwork, surrender. Empty the cup so the next new moon has room.",
    visual: "wan-crescent",
  },
];

export const darkMoonNote = {
  title: "Dark Moon (craft concept)",
  body: "Many witches call the late waning crescent—especially the day or so before the astronomical new moon—the Dark Moon: a traditional time for deep rest, banishing, or stillness. Astronomy usually lists New Moon as the ~0% phase; “Dark Moon” is a craft/folk label overlapping late waning and the invisible new, not a separate ninth astronomical phase.",
};
