export interface Relationship {
  characterSlug: string;
  characterName: string;
  description: string;
}

export interface Character {
  slug: string;
  name: string;
  tagline: string;
  bio: string;
  // Badge display text: "Grade 8" for students, role title for staff
  grade: string;
  // Separates students (false) from teachers/admin (true) — use this for filtering, not grade
  isStaff: boolean;
  traits: string[];
  // CSS gradient shown while artwork is absent — keep even after adding images
  portraitPlaceholder: string;
  relationships?: { role: string; person: string }[];
  // Set once artwork is ready (see public/assets/characters/NAMING_GUIDE.md).
  // Convention: "/assets/characters/2d/{slug}.webp" and "/assets/characters/3d/{slug}.webp"
  portrait2d?: string;
  portrait3d?: string;
}

export const characters: Character[] = [
  // ── Students ──────────────────────────────────────────────────────────────
  {
    slug: "minh-le",
    name: "Minh Le",
    tagline: "The heart of the story.",
    bio: "Minh is a shy immigrant boy who recently arrived from Vietnam and must adapt to a completely new country, language, and culture. Thoughtful, kind, and observant, he deeply enjoys hockey, skating, and spending time with his friends. Although he develops strong romantic feelings for Shelley, he rarely finds the courage to express them.",
    grade: "Grade 8",
    isStaff: false,
    traits: ["Thoughtful", "Kind", "Observant", "Shy"],
    portraitPlaceholder: "from-blue-900 to-slate-800",
    portrait2d: "/assets/characters/2d/Minh.webp",
    relationships: [
      { role: "Best Friend", person: "Willie Niou" },
      { role: "Crush", person: "Shelley Smith" },
    ],
  },
  {
    slug: "willie-niou",
    name: "Willie Niou",
    tagline: "The brain of the group.",
    bio: "A Taiwanese immigrant and Minh's closest friend. Tall, skinny, and highly intelligent, Willie is somewhat socially awkward and has very little interest in traditional popularity or dating. He would much rather spend his time playing hockey, reading, or discussing unusual facts. His straightforward honesty often creates unintentionally funny situations.",
    grade: "Grade 8",
    isStaff: false,
    traits: ["Intelligent", "Honest", "Awkward", "Straightforward"],
    portraitPlaceholder: "from-indigo-900 to-slate-800",
    relationships: [
      { role: "Best Friend", person: "Minh Le" },
      { role: "Interests", person: "Hockey, Ball Hockey, Academics" },
    ],
  },
  {
    slug: "shelley-smith",
    name: "Shelley Smith",
    tagline: "Friendly, intelligent, and naturally kind.",
    bio: "Shelley is one of the first students to welcome Minh to Mackenzie Middle. She naturally sees the good in people and consistently helps her classmates feel included. Although she and Minh become very close friends, she remains entirely unaware of how deeply he cares for her.",
    grade: "Grade 8",
    isStaff: false,
    traits: ["Kind", "Friendly", "Inclusive", "Intelligent"],
    portraitPlaceholder: "from-pink-900 to-slate-800",
    relationships: [
      { role: "Best Friend", person: "Tara Moon" },
      { role: "Possible Future Interest", person: "Minh Le" },
    ],
  },
  {
    slug: "june-nakamura",
    name: "June Nakamura",
    tagline: "Quiet strength and determination.",
    bio: "A recent immigrant from Japan, June is quiet, polite, respectful, and often unsure of herself in unfamiliar situations. She is working hard to find her place in a new country while carefully balancing her family's traditions with her new life in Canada. Though shy, she possesses an incredible quiet strength.",
    grade: "Grade 8",
    isStaff: false,
    traits: ["Polite", "Respectful", "Determined", "Quiet"],
    portraitPlaceholder: "from-purple-900 to-slate-800",
    relationships: [
      { role: "Secret Admirer", person: "Jack Armstrong (she is currently unaware of his feelings)" },
    ],
  },
  {
    slug: "jack-armstrong",
    name: "Jack Armstrong",
    tagline: "The athlete and adventurer.",
    bio: "Canadian-born with brown hair and natural athletic ability, Jack is outgoing, adventurous, and always looking for excitement. He is the catalyst who constantly encourages Minh and Willie to step outside their comfort zones. Unlike many boys his age, he is genuinely drawn to June's quiet intelligence.",
    grade: "Grade 8",
    isStaff: false,
    traits: ["Outgoing", "Athletic", "Adventurous", "Charismatic"],
    portraitPlaceholder: "from-orange-900 to-slate-800",
    relationships: [
      { role: "Likes", person: "June Nakamura" },
      { role: "Unaware", person: "Tara Moon has a secret crush on him" },
    ],
  },
  {
    slug: "tara-moon",
    name: "Tara Moon",
    tagline: "The spark plug of the group.",
    bio: "Outgoing, mischievous, energetic, and always laughing, Tara has a natural talent for getting herself and her friends into harmless trouble. She acts as the primary driving force behind the group adventures on the girls' side. Despite her overt confidence, she secretly harbors romantic feelings for Jack.",
    grade: "Grade 8",
    isStaff: false,
    traits: ["Energetic", "Mischievous", "Outgoing", "Playful"],
    portraitPlaceholder: "from-yellow-900 to-slate-800",
    relationships: [
      { role: "Best Friend", person: "Shelley Smith" },
      { role: "Secret Crush", person: "Jack Armstrong" },
    ],
  },

  // ── Staff & Faculty ────────────────────────────────────────────────────────
  {
    slug: "ms-hand",
    name: "Ms. Hand",
    tagline: "Learning happens both inside and outside the classroom.",
    bio: "Tall, slim, warm-hearted, and deeply respected by her students. Ms. Hand believes true education extends past the walls of the classroom. She frequently takes her classes on walks around the school grounds and occasionally joins them to sit on the lawn during lunch. Her gentle humor makes her an absolute favorite.",
    grade: "Homeroom Teacher",
    isStaff: true,
    traits: ["Warm", "Respected", "Gentle", "Humorous"],
    portraitPlaceholder: "from-teal-900 to-slate-800",
    relationships: [
      { role: "Students", person: "Highly respected mentor to her homeroom class" },
    ],
  },
  {
    slug: "mr-ron-little",
    name: "Mr. Ron Little",
    tagline: "Every student has potential.",
    bio: "Chubby but remarkably athletic, Mr. Little is recognized by his permanently rosy cheeks. He focuses entirely on participation over perfection, holding a deep belief that every student has potential. Students frequently underestimate his physical abilities until they witness how incredibly fast he can skate.",
    grade: "Physical Education",
    isStaff: true,
    traits: ["Athletic", "Encouraging", "Supportive", "Surprising"],
    portraitPlaceholder: "from-green-900 to-slate-800",
    relationships: [
      { role: "Teaches", person: "Hockey, Rugby, Track and Field, Cross-Country Skiing" },
    ],
  },
  {
    slug: "principal-charles-sterling",
    name: "Principal Charles Sterling",
    tagline: "Discipline helps young people succeed.",
    bio: "Tall, stern, and highly disciplined, Principal Sterling runs Mackenzie Middle with a firm hand. Every morning at 9:00 AM sharp, he stands at the front entrance watching for late arrivals, patrolling the hallways throughout the day to issue detention slips. While the students fear him, parents deeply respect his methods.",
    grade: "Principal",
    isStaff: true,
    traits: ["Stern", "Disciplined", "Strict", "Dedicated"],
    portraitPlaceholder: "from-slate-700 to-gray-900",
    relationships: [
      { role: "Students", person: "Feared hallway presence" },
      { role: "Parents", person: "Deeply respected administrator" },
    ],
  },
];

export function getCharacterBySlug(slug: string): Character | undefined {
  return characters.find((c) => c.slug === slug);
}
