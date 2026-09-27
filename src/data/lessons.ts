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
    description:
      "A welcoming foundation for new practitioners. Learn ethics, altar basics, intention-setting, and how to craft a practice that honors your own path—whether solitary, ancestral, or eclectic.",
    color: "from-mystic-600 to-mystic-800",
    lessons: [
      {
        id: "wb-1",
        title: "What Is Magick, Really?",
        duration: "12 min",
        level: "Beginner",
        summary: "Demystify intention, energy, and personal practice without dogma.",
        content: [
          "Magick is often described as focused intention plus symbolic action. In this community, we treat it as a craft of attention: aligning your will, your symbols, and your daily habits.",
          "There is no single correct tradition. Witches, folk healers, and spiritual seekers across cultures have shaped their own languages for the same human hunger: meaning, connection, and agency.",
          "Begin by noticing what already feels sacred to you—moonlight, a kitchen herb, a family recipe, a quiet corner. Your practice can grow from that honest starting point.",
        ],
      },
      {
        id: "wb-2",
        title: "Ethics & Consent in Spiritual Craft",
        duration: "15 min",
        level: "Beginner",
        summary: "Respectful practice: free will, cultural humility, and harm reduction.",
        content: [
          "Many paths share a simple ethic: do not coerce. Spells aimed at controlling another person's will sit outside our community guidelines.",
          "Cultural humility matters. When you learn from living traditions (including Vodou/Voodoo and other diasporic paths), seek teachers who invite you in, credit origins, and avoid treating sacred practices as costume.",
          "Consent also applies to yourself: rest when depleted, skip rituals that feel wrong in your body, and never use craft to avoid medical or mental health care.",
        ],
      },
      {
        id: "wb-3",
        title: "Your First Altar (or Sacred Shelf)",
        duration: "18 min",
        level: "Beginner",
        summary: "Create a small, personal sacred space with everyday objects.",
        content: [
          "An altar is a focus point—not a museum. A windowsill with a candle, a stone, and a photo can be enough.",
          "Choose items that mean something to you: a cup of water for emotion, a plant for growth, a key for thresholds. Cleanse the space by wiping, opening a window, or speaking a simple blessing.",
          "Visit it regularly. Magick deepens through relationship, not perfection.",
        ],
      },
      {
        id: "wb-4",
        title: "Daily Intention Ritual (5 Minutes)",
        duration: "10 min",
        level: "Beginner",
        summary: "A short morning or evening practice to anchor your craft.",
        content: [
          "Light a candle or place a hand on your heart. Breathe three times. Name one quality you want to embody today (courage, softness, clarity).",
          "Speak it aloud or write it once. Optionally touch an object on your altar as a physical seal.",
          "Close with gratitude—for breath, for teachers, for the chance to practice. Consistency beats elaborate ceremonies when you are starting out.",
        ],
      },
    ],
  },
  {
    slug: "spells-rituals",
    name: "Spells & Rituals",
    icon: "✦",
    tagline: "Craft with purpose, symbol, and timing",
    description:
      "Practical spellcraft and ritual design: candle work, petition writing, circle casting (optional), and seasonal rites. Emphasis on clear intention and safe, inclusive frameworks.",
    color: "from-gold-600 to-mystic-700",
    lessons: [
      {
        id: "sr-1",
        title: "Anatomy of a Spell",
        duration: "14 min",
        level: "Beginner",
        summary: "Intention, correspondences, action, release—the four beats of craft.",
        content: [
          "A spell is a story you enact. Name what you want (intention), choose symbols that resonate (correspondences), do something tangible (action), then let go of clinging (release).",
          "Write intentions in positive present tense: “I move through this week with steady confidence,” rather than “I don’t want anxiety.”",
          "After the ritual, take one mundane step that supports the intention. Magick and practical effort work best as partners.",
        ],
      },
      {
        id: "sr-2",
        title: "Candle Magick Basics",
        duration: "16 min",
        level: "Beginner",
        summary: "Color, carving, dressing, and mindful flame safety.",
        content: [
          "Choose a candle color that feels right for your aim (gold for vitality, blue for calm, green for growth—or simply white as a versatile default).",
          "Optionally carve a word or symbol, dress lightly with oil if you use it, and set the candle in a fire-safe holder. Never leave a burning candle unattended.",
          "Watch the flame as a meditation on your intention. When finished, snuff rather than blow if that is your tradition’s preference—or simply extinguish safely.",
        ],
      },
      {
        id: "sr-3",
        title: "Writing Petitions & Spoken Charms",
        duration: "12 min",
        level: "All levels",
        summary: "Words as vessels: clarity, rhythm, and emotional truth.",
        content: [
          "A petition can be a short letter to Spirit, ancestors, or your higher self. Keep it specific and kind.",
          "Spoken charms benefit from rhythm—short lines you can remember. Repeat three, seven, or nine times if that feels meaningful.",
          "When the work is done, fold and keep the petition, bury it, or burn it outdoors safely—follow your path’s customs and local fire rules.",
        ],
      },
    ],
  },
  {
    slug: "astrology",
    name: "Astrology",
    icon: "✧",
    tagline: "Sky maps for self-knowledge & timing",
    description:
      "Learn natal chart basics, lunar phases, and how astrology can support reflection—never fatalism. We treat the sky as a mirror for growth, not a sentence.",
    color: "from-indigo-600 to-mystic-800",
    lessons: [
      {
        id: "as-1",
        title: "Your Chart as a Map, Not a Cage",
        duration: "15 min",
        level: "Beginner",
        summary: "Sun, Moon, Rising—and why free will still matters.",
        content: [
          "Your natal chart describes tendencies and seasons of life; it does not dictate destiny. Use it as a language for self-compassion.",
          "Sun: core vitality and creative identity. Moon: emotional needs and instinct. Rising (Ascendant): how you meet the world.",
          "When a placement feels challenging, ask: What skill is this inviting me to practice? Astrology at its best expands choice.",
        ],
      },
      {
        id: "as-2",
        title: "Working with the Moon",
        duration: "12 min",
        level: "Beginner",
        summary: "Synodic month basics; intention at new, release while waning.",
        content: [
          "A moon cycle in craft usually means the synodic month—new moon to new moon—about 29.5 days. See the Moon Cycles path and /moon page for all eight phases in order.",
          "Common craft rhythm (practice, not science): set intentions at the new moon, build through the waxing phases, celebrate culmination at the full moon, and release through the waning phases. The Moon does not medically control you.",
          "You do not need a grand ritual every phase. A journal note or a glass of water left under moonlight can be enough. Track how you feel across two cycles; patterns matter more than perfection.",
        ],
      },
      {
        id: "as-3",
        title: "Mercury & Communication Magick",
        duration: "14 min",
        level: "Intermediate",
        summary: "Planetary symbolism for writing, speech, and learning.",
        content: [
          "Mercury symbolism touches messages, study, travel, and wit. Align writing spells or study sessions with times when you feel mentally clear.",
          "During classic Mercury retrograde periods, many practitioners favor review, backups, and gentle renegotiation over launching brand-new contracts—treat this as optional wisdom, not panic.",
          "A simple Mercury rite: light a white or yellow candle, write a letter you will never send (to clarify your thoughts), then recycle it with thanks.",
        ],
      },
    ],
  },
  {
    slug: "stones-crystals",
    name: "Stones & Crystals",
    icon: "◆",
    tagline: "Earth allies for focus, beauty & ritual",
    description:
      "Explore crystals and stones as symbolic allies and sensory anchors. We emphasize ethical sourcing awareness, cleansing care, and personal resonance over rigid “rules.”",
    color: "from-emerald-700 to-mystic-800",
    lessons: [
      {
        id: "sc-1",
        title: "Choosing Stones by Feel",
        duration: "10 min",
        level: "Beginner",
        summary: "Resonance over dogma—let your body help you choose.",
        content: [
          "Hold a stone (or look at photos if shopping online) and notice warmth, curiosity, or calm. Your felt sense is valid data.",
          "Classic associations can inspire—amethyst for stillness, rose quartz for tenderness, black tourmaline for grounding—but they are not laws.",
          "Start with one or two stones. Relationship deepens when you are not overwhelmed by a crowded shelf.",
        ],
      },
      {
        id: "sc-2",
        title: "Cleansing & Caring for Crystals",
        duration: "12 min",
        level: "Beginner",
        summary: "Water, smoke, sound, moonlight—and what to avoid.",
        content: [
          "Some stones are water-safe; others (selenite, pyrite) are not. When unsure, use sound, breath, moonlight, or a soft cloth instead of soaking.",
          "Smoke cleansing (herbs or incense) is traditional in many homes—ventilate well and respect fire safety and cultural sourcing of materials.",
          "Store stones where you will actually see and use them. Care is a form of devotion.",
        ],
      },
      {
        id: "sc-3",
        title: "Crystal Grids for Intention",
        duration: "18 min",
        level: "Intermediate",
        summary: "Simple geometries that focus attention and beauty.",
        content: [
          "A grid is arrangement as prayer. Place a central stone for your core intention, then surround it with supporting pieces in a circle, triangle, or spiral.",
          "Activate by tracing the pattern with a finger or wand while speaking your aim once. Leave it for a lunar cycle or until the work feels complete.",
          "Photograph your grid if you need the surface back. Magick can be portable.",
        ],
      },
    ],
  },
  {
    slug: "mediumship",
    name: "Mediumship",
    icon: "◎",
    tagline: "Gentle connection, boundaries & discernment",
    description:
      "Develop intuitive listening with strong boundaries. We teach grounding, ethics with the bereaved, and healthy skepticism—honoring spirit contact as sacred, not entertainment.",
    color: "from-violet-600 to-midnight-700",
    lessons: [
      {
        id: "md-1",
        title: "Grounding Before You Open",
        duration: "14 min",
        level: "Beginner",
        summary: "Safety first: body, breath, and a clear closing.",
        content: [
          "Before any intuitive work, feel your feet, name five things you see, and set a clear intention: “I receive only what is for my highest good and the good of others.”",
          "Opening without closing can leave you drained. Always thank, release, and return awareness to the room.",
          "If you feel scared or unwell, stop. Mediumship is optional; your wellbeing is not.",
        ],
      },
      {
        id: "md-2",
        title: "Ethics with the Living & the Dead",
        duration: "16 min",
        level: "All levels",
        summary: "Consent, privacy, and never replacing grief support.",
        content: [
          "Do not cold-read strangers for sport. Offer readings only when invited, and never claim certainty about another person’s fate.",
          "Messages that urge harm, isolation, or medical abandonment are red flags—close the session and seek grounded support.",
          "Mediumship can comfort; it does not replace therapy, hospice care, or the slow work of mourning.",
        ],
      },
      {
        id: "md-3",
        title: "Developing Clair-Senses Gently",
        duration: "15 min",
        level: "Intermediate",
        summary: "Clairvoyance, clairsentience, and journaling impressions.",
        content: [
          "People experience intuition differently: images, feelings, words, or knowing. None is superior.",
          "Practice with low stakes—guess which friend will text, then check. Journal impressions without forcing drama.",
          "Community feedback (in VIP circles) helps calibrate accuracy while keeping ego in check.",
        ],
      },
    ],
  },
  {
    slug: "spirit-communication",
    name: "Spirit Communication",
    icon: "◈",
    tagline: "Respectful dialogue with the unseen",
    description:
      "Beginner-friendly practices for communicating with spirit—ancestors, guides, and intuitive impressions—with strong boundaries, grounding, and discernment. Educational and respectful; never fear-based.",
    color: "from-purple-600 to-midnight-800",
    lessons: [
      {
        id: "sc-comm-1",
        title: "What Spirit Communication Is (and Isn't)",
        duration: "14 min",
        level: "Beginner",
        summary: "A calm map of prayer, intuition, ancestors, and healthy skepticism.",
        content: [
          "Spirit communication, in this community, means listening with intention: prayer, meditation, journaling, and mediumship-adjacent practices that invite relationship—not spectacle.",
          "It is not a substitute for grief counseling, medical care, or making your own life decisions. Messages that urge harm, isolation, or abandoning care are signs to stop and seek grounded support.",
          "Many cultures honor ancestors and helping spirits. We practice with humility, credit living traditions, and never treat sacred rites as entertainment.",
        ],
      },
      {
        id: "sc-comm-2",
        title: "Ground, Open, Close",
        duration: "16 min",
        level: "Beginner",
        summary: "A simple three-part container for every session.",
        content: [
          "Ground: feel your feet, name five things you see, breathe into the belly. State aloud that you receive only what serves your highest good and the good of others.",
          "Open: light a candle if you wish, speak a greeting to ancestors or guides you trust, and sit in quiet for a few minutes. Notice impressions—images, feelings, words—without forcing them.",
          "Close: thank, release, extinguish the candle safely, drink water, and return fully to the room. Closing is as important as opening; it protects your energy and your day.",
        ],
      },
      {
        id: "sc-comm-3",
        title: "Ancestor Altar & Offering Basics",
        duration: "15 min",
        level: "Beginner",
        summary: "Simple, culturally humble ways to honor those who came before.",
        content: [
          "A small photo, a cup of water, and a kind word can be enough. Offerings should be sincere and sustainable—fresh water changed regularly, a candle, a favorite food if that is your custom.",
          "If you are learning from a living tradition (including Vodou/Voodoo), seek invitation and teachers; do not invent rites that belong to closed practices.",
          "Speak to your ancestors as you would to beloved elders: with respect, honesty, and without demanding proofs. Relationship grows through consistency.",
        ],
      },
      {
        id: "sc-comm-4",
        title: "Discernment & Journaling Impressions",
        duration: "12 min",
        level: "All levels",
        summary: "Separate ego, wishful thinking, and genuine insight.",
        content: [
          "After a quiet sit, write everything without editing. Later, mark what felt calm and kind versus urgent or flattering to the ego.",
          "True guidance in our ethic tends to be steady, compassionate, and compatible with your free will. Fearmongering and drama are poor teachers.",
          "Share carefully with trusted peers or VIP circles for feedback. Calibration takes time—and that is okay.",
        ],
      },
    ],
  },
  {
    slug: "kundalini",
    name: "Kundalini",
    icon: "❖",
    tagline: "Awakening energy with patience & care",
    description:
      "An educational introduction to Kundalini as a spiritual framework for life-force energy, breath, and awareness. Safety-aware, beginner-to-intermediate stubs—no medical claims, no forced awakening practices.",
    color: "from-rose-700 to-mystic-900",
    lessons: [
      {
        id: "ku-1",
        title: "Kundalini as Metaphor & Mystery",
        duration: "13 min",
        level: "Beginner",
        summary: "A respectful overview of coiled energy imagery across traditions.",
        content: [
          "Kundalini is often described in yogic and esoteric paths as latent life-force energy coiled at the base of the spine—a symbolic and experiential map, not a claim that replaces anatomy or medicine.",
          "In Wonders, we treat Kundalini study as spiritual education and self-awareness, not as a medical protocol. Intense experiences can be overwhelming; go slowly and stop if you feel unwell.",
          "Seek qualified human teachers for advanced practices. Online lessons here are orientation only.",
        ],
      },
      {
        id: "ku-2",
        title: "Safety, Consent & Going Slowly",
        duration: "15 min",
        level: "Beginner",
        summary: "Grounding first; why forced awakening is outside our ethic.",
        content: [
          "We do not teach forced Kundalini awakening, extreme breath holds, or practices meant to push crisis. Stability of sleep, food, and community support come first.",
          "If you have a history of trauma, dissociation, or mental health concerns, consult licensed professionals before intensive energy work. This content is not therapy.",
          "Consent includes your nervous system: shorter sits, eyes open if needed, and permission to pause are always valid.",
        ],
      },
      {
        id: "ku-3",
        title: "Gentle Breath & Spine Awareness",
        duration: "14 min",
        level: "Beginner",
        summary: "Soft breath along the spine—no strain, no forcing heat.",
        content: [
          "Sit comfortably. Breathe naturally. On the inhale, imagine soft light rising from the base of the spine to the crown; on the exhale, rest.",
          "Keep the breath easy—never gasp or push. One to five minutes is enough to start. End by feeling your feet and naming the day of the week.",
          "Journal any sensations without labeling them as 'awakening.' Curiosity beats achievement.",
        ],
      },
      {
        id: "ku-4",
        title: "Integration: Rest, Creativity & Community",
        duration: "12 min",
        level: "Intermediate",
        summary: "How to land after energetic practice.",
        content: [
          "Integration looks like rest, hydration, creative expression, and ordinary kindness. Spiritual energy work without grounding can leave people spacey or irritable.",
          "Pair any Kundalini-inspired practice with Earth elemental habits: walks, nourishing meals, tidy corners, and sleep.",
          "Share experiences in community without competing over intensity. Depth is measured in wisdom and care, not fireworks.",
        ],
      },
    ],
  },
  {
    slug: "hypnosis",
    name: "Hypnosis & Trance",
    icon: "◉",
    tagline: "Focused imagination for personal growth",
    description:
      "Learn self-hypnosis and guided trance as tools for relaxation, habit support, and creative visualization. Educational and spiritual framing only—not medical treatment or therapy.",
    color: "from-sky-700 to-mystic-800",
    lessons: [
      {
        id: "hy-1",
        title: "What Trance Feels Like",
        duration: "12 min",
        level: "Beginner",
        summary: "Everyday trance: reading, driving familiar roads, deep prayer.",
        content: [
          "Hypnosis and trance are natural states of focused attention. You remain aware and able to stop at any time.",
          "Spiritual practitioners have used rhythmic breath, drumming, and guided imagery for centuries to enter receptive states.",
          "This course is for personal development and craft—not for diagnosing or treating health conditions. Seek licensed professionals for medical or mental health needs.",
        ],
      },
      {
        id: "hy-2",
        title: "A 10-Minute Self-Hypnosis Script",
        duration: "15 min",
        level: "Beginner",
        summary: "Progressive relaxation + a positive suggestion you choose.",
        content: [
          "Sit comfortably. Count down from ten, softening shoulders, jaw, and belly with each number.",
          "Offer yourself one kind suggestion: “I speak my truth with ease,” or “I return to calm after stress.” Repeat softly.",
          "Count up from one to five to reorient. Drink water. Note how you feel—no pressure for fireworks.",
        ],
      },
      {
        id: "hy-3",
        title: "Trance for Ritual & Visualization",
        duration: "14 min",
        level: "Intermediate",
        summary: "Pairing light trance with spell imagery and elemental journeys.",
        content: [
          "After settling into calm, visualize your ritual’s outcome as already unfolding—sensory detail helps (colors, sounds, textures).",
          "Elemental journeys (walking a forest path, standing by the sea) can deepen elemental craft without leaving your chair.",
          "Always close: thank your inner guides, wiggle fingers, and name the day of the week aloud to fully return.",
        ],
      },
    ],
  },
  {
    slug: "moon-cycles",
    name: "Moon Cycles",
    icon: "☾",
    tagline: "Eight phases, ~29.5-day synodic month",
    description:
      "Astronomically grounded lunar literacy for witches and seekers: the eight standard phases in order, the ~29.5-day synodic month (new to new), and spiritually useful craft associations—intention at new, building while waxing, culmination at full, release while waning. Practice framing only; the Moon does not medically control people.",
    color: "from-slate-500 to-mystic-900",
    lessons: [
      {
        id: "mc-1",
        title: "The Eight Phases in Order",
        duration: "16 min",
        level: "Beginner",
        summary: "New → waxing → full → waning, with approximate illumination.",
        content: [
          "When we say “moon cycle” here, we mean the synodic month: the time from one new moon to the next, about 29.5 days on average. That is the cycle of lunar phases as seen from Earth—not the Moon’s orbit relative to the stars (sidereal month), which is a bit shorter.",
          "The eight named phases, in order: (1) New Moon (~0% illuminated), (2) Waxing Crescent (growing), (3) First Quarter (~50%), (4) Waxing Gibbous (growing toward full), (5) Full Moon (~100%), (6) Waning Gibbous (shrinking), (7) Last Quarter / Third Quarter (~50%), (8) Waning Crescent (shrinking toward new).",
          "Waxing means the lit portion is increasing; waning means it is decreasing. Visit the Moon page for a visual diagram and craft tips per phase. We do not invent extra astronomical phases or claim medical control by the Moon.",
        ],
      },
      {
        id: "mc-2",
        title: "Waxing & Waning in Craft",
        duration: "14 min",
        level: "Beginner",
        summary: "Build on the light’s increase; release on the decrease.",
        content: [
          "From new through waxing crescent, first quarter, and waxing gibbous, many practitioners treat the sky as a companion for growth: learning, attraction-style charms, and steady effort. From full through waning gibbous, last quarter, and waning crescent, the companion theme is often release, banishing, rest, and completion.",
          "These are spiritual craft associations—symbolic timing aids—not scientific laws. Your life, ethics, and free will come first. Skip any phase work that feels forced.",
          "A practical tip: pick one waxing habit (e.g., water a goal daily) and one waning habit (e.g., clear one clutter pile). Pair them with the half of the cycle you are in.",
        ],
      },
      {
        id: "mc-3",
        title: "New Moon & Full Moon Rites (Intro)",
        duration: "15 min",
        level: "All levels",
        summary: "Simple, safe rituals for the cycle’s quiet start and bright peak.",
        content: [
          "New Moon (~0%): dim or absent disk. Craft focus—intention-setting. Light a single candle if you wish, write one present-tense intention, speak it once, then take one mundane step that supports it. Extinguish safely.",
          "Full Moon (~100%): bright disk. Craft focus—culmination and gratitude. Name what has grown since the last new moon; charge a cup of water or a tool only if that is your custom. Celebration can be quiet.",
          "Dark Moon: some traditions name the late waning / pre-new days for deep rest or banishing. That label is folk/craft language overlapping late waning crescent and astronomical new—not a ninth official phase. Always fire-safe; never leave candles unattended.",
        ],
      },
      {
        id: "mc-4",
        title: "Tracking Your Personal Lunar Rhythm",
        duration: "12 min",
        level: "Beginner",
        summary: "Journal across ~two synodic months without superstition.",
        content: [
          "Use a calendar or app that lists accurate phase dates (astronomy sources), then journal mood, energy, and craft results for about two synodic months (~59 days). Look for patterns—not proofs of destiny.",
          "Note which phase helps you start vs. finish. Many people feel reflective near new and expressive near full; others differ. Your data beats folklore when they conflict.",
          "If lunar tracking increases anxiety, stop. Magick should support wellbeing. The Moon is a beautiful clock in the sky—not a medical authority.",
        ],
      },
    ],
  },
  {
    slug: "elements-bending",
    name: "Elements & Bending",
    icon: "⟡",
    tagline: "Earth, Air, Fire, Water as living teachers",
    description:
      "Work with the four elements as spiritual allies. “Bending” here means contemplative and ritual practices that help you embody elemental qualities—not literal physics. Pair with the dedicated Elements page for deeper practice.",
    color: "from-amber-600 to-rose-800",
    lessons: [
      {
        id: "eb-1",
        title: "Meeting the Four Elements",
        duration: "13 min",
        level: "Beginner",
        summary: "Earth grounds, Air clarifies, Fire transforms, Water feels.",
        content: [
          "In many spiritual crafts, the elements are archetypes of experience. Earth: body, home, abundance. Air: thought, breath, communication. Fire: will, passion, courage. Water: emotion, intuition, flow.",
          "You may already lean toward one. Notice which environments restore you—forest, windy hill, hearth, shoreline.",
          "Balance comes from inviting the elements you avoid, gently and with consent to your own pace.",
        ],
      },
      {
        id: "eb-2",
        title: "Elemental Bending as Embodiment",
        duration: "16 min",
        level: "All levels",
        summary: "Movement, breath, and symbolism—spiritual craft, not superpowers.",
        content: [
          "“Bending” in our community means shaping your attention and body to invite an elemental quality: rooted stance for Earth, open arms for Air, sharp exhale for Fire, swaying for Water.",
          "These practices are metaphors and mindfulness tools. They do not claim to alter physical matter or replace science.",
          "Combine gesture with a spoken intention. Example: palms down, “I am steady,” for Earth before a difficult conversation.",
        ],
      },
      {
        id: "eb-3",
        title: "Daily Elemental Check-In",
        duration: "10 min",
        level: "Beginner",
        summary: "A one-minute scan to see which element you need today.",
        content: [
          "Ask: Do I need more structure (Earth), clarity (Air), spark (Fire), or softness (Water)?",
          "Choose one tiny act: tidy a surface, open a window, light a candle, drink water mindfully.",
          "Over time, this check-in becomes a trusted compass for spiritual and emotional balance.",
        ],
      },
      {
        id: "eb-4",
        title: "Weaving Elements in Spellwork",
        duration: "15 min",
        level: "Intermediate",
        summary: "Represent all four on your altar for complete rites.",
        content: [
          "Classic layout: salt or stone (Earth), incense or feather (Air), candle (Fire), cup of water (Water).",
          "Call each element in turn, state your intention, then thank and release in reverse order.",
          "If your tradition uses different directions or spirits, honor that map. Inclusion means many cosmologies can share a table.",
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
