export type Comment = {
  id: string;
  author: string;
  text: string;
  time: string;
};

export type Post = {
  id: string;
  author: string;
  avatar: string;
  path: string;
  time: string;
  content: string;
  tags: string[];
  likes: number;
  liked: boolean;
  comments: Comment[];
};

export const initialPosts: Post[] = [
  {
    id: "p1",
    author: "Mira Ashwood",
    avatar: "MA",
    path: "Eclectic Witch",
    time: "2h ago",
    content:
      "New moon journal prompt that helped me today: “What am I ready to grow that doesn’t need anyone else’s permission?” Dropping a black candle stub on my altar and starting small. ☽",
    tags: ["newmoon", "journaling"],
    likes: 24,
    liked: false,
    comments: [
      {
        id: "c1",
        author: "Jules",
        text: "Saving this prompt—thank you for sharing so openly.",
        time: "1h ago",
      },
    ],
  },
  {
    id: "p2",
    author: "Kenji Rivers",
    avatar: "KR",
    path: "Astrology learner",
    time: "5h ago",
    content:
      "Chart newbie win: finally understood why my Moon in Cancer wants so much home nesting. Not “too sensitive”—just lunar wisdom. Anyone else late to their own chart?",
    tags: ["astrology", "moon"],
    likes: 41,
    liked: false,
    comments: [
      {
        id: "c2",
        author: "Priya",
        text: "Same journey! The Elements course helped me pair Moon needs with Water practices.",
        time: "3h ago",
      },
      {
        id: "c3",
        author: "Sam",
        text: "Welcome. Take it slow—one placement at a time.",
        time: "2h ago",
      },
    ],
  },
  {
    id: "p3",
    author: "Asha B.",
    avatar: "AB",
    path: "Vodou-respectful seeker",
    time: "Yesterday",
    content:
      "Grateful this space names Vodou/Voodoo practitioners as welcome. Learning with humility from teachers who invite me in—not from aesthetic boards. Cultural respect is magick too.",
    tags: ["inclusion", "respect"],
    likes: 67,
    liked: false,
    comments: [
      {
        id: "c4",
        author: "Latessa",
        text: "This is the heart of Wonders. Many paths, one table of respect.",
        time: "Yesterday",
      },
    ],
  },
  {
    id: "p4",
    author: "River Sol",
    avatar: "RS",
    path: "Elemental craft",
    time: "Yesterday",
    content:
      "Tried the Fire bending embodiment before a presentation—sharp exhale, hand to sternum, “I carry spark.” Felt silly for three seconds, then oddly brave. Spiritual craft > perfection.",
    tags: ["elements", "fire", "bending"],
    likes: 33,
    liked: false,
    comments: [],
  },
  {
    id: "p5",
    author: "Nova Quinn",
    avatar: "NQ",
    path: "Crystal keeper",
    time: "2d ago",
    content:
      "Ethical sourcing reminder: I’m pausing new crystal buys until I research the shop. Beauty without harm is the goal. What questions do you ask sellers?",
    tags: ["crystals", "ethics"],
    likes: 52,
    liked: false,
    comments: [
      {
        id: "c5",
        author: "Dee",
        text: "I ask about mine origin and labor practices. Imperfect answers still beat silence.",
        time: "1d ago",
      },
    ],
  },
];
