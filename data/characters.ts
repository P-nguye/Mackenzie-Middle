export interface Character {
  slug: string;
  name: string;
  tagline: string;
  bio: string;
  grade: string;
  traits: string[];
  portraitPlaceholder: string; // CSS gradient used until real art arrives
}

export const characters: Character[] = [
  {
    slug: "minh-le",
    name: "Minh Le",
    tagline: "The quiet newcomer trying to find where he belongs.",
    bio: "Minh Le arrived in Edmonton from Vietnam in 1980 and entered a world that felt completely unfamiliar. Thoughtful, loyal, and deeply observant, he notices things others miss and understands people better than they understand themselves. While he struggles with shyness and self-doubt, his genuine kindness and quiet determination make him the heart of Mackenzie Middle.",
    grade: "Grade 8",
    traits: ["Loyal", "Thoughtful", "Compassionate", "Observant", "Patient"],
    portraitPlaceholder: "from-blue-900 to-slate-800",
  },
  {
    slug: "shelley-morgan",
    name: "Shelley Morgan",
    tagline: "The one who makes everyone feel welcome.",
    bio: "Shelley Morgan is the emotional center of Mackenzie Middle. Kind, intelligent, and genuinely empathetic, she has a natural gift for making people feel seen and valued. People trust Shelley — students seek her advice because she listens without judgment and sees the good in people even when others don't. Though she puts others first, she is slowly learning to trust her own instincts.",
    grade: "Grade 8",
    traits: ["Kind-hearted", "Loyal", "Compassionate", "Intelligent", "Patient"],
    portraitPlaceholder: "from-pink-900 to-slate-800",
  },
  {
    slug: "willie-niou",
    name: "Willie Niou",
    tagline: "The steadiest friend you could ever have.",
    bio: "Willie Niou is Minh's best friend and one of the most dependable students at Mackenzie Middle. Originally from Taiwan, Willie understands many of the challenges Minh faces as a newcomer. Tall, skinny, and socially awkward, he rarely notices the drama unfolding around him — he's usually too busy thinking about hockey or school.",
    grade: "Grade 8",
    traits: ["Loyal", "Intelligent", "Honest", "Reliable", "Calm"],
    portraitPlaceholder: "from-cyan-900 to-slate-800",
  },
  {
    slug: "tara-moon",
    name: "Tara Moon",
    tagline: "If we're going to get in trouble, we might as well make it a good story.",
    bio: "Tara Moon is the spark plug of Mackenzie Middle. Outgoing, mischievous, and fearless, she has a gift for turning ordinary days into memorable adventures. She walks into a room and immediately changes its energy. Beneath her playful personality is a deeply loyal friend who would do almost anything for the people she cares about.",
    grade: "Grade 8",
    traits: ["Confident", "Loyal", "Courageous", "Funny", "Impulsive"],
    portraitPlaceholder: "from-orange-900 to-slate-800",
  },
  {
    slug: "jack-armstrong",
    name: "Jack Armstrong",
    tagline: "Come on. What's the worst that could happen?",
    bio: "Jack Armstrong is the natural leader of the boys' group at Mackenzie Middle. Athletic, confident, and genuinely outgoing, he has a way of making people feel included and pushing them beyond their comfort zone. He is the engine that keeps the group moving forward — always encouraging friends to try new experiences, take chances, and get out there and live.",
    grade: "Grade 8",
    traits: ["Courageous", "Loyal", "Optimistic", "Protective", "Natural leader"],
    portraitPlaceholder: "from-green-900 to-slate-800",
  },
  {
    slug: "june-nakamura",
    name: "June Nakamura",
    tagline: "You don't have to be loud to be heard.",
    bio: "June Nakamura is the quiet emotional center of Mackenzie Middle's girls' group. A recent immigrant from Japan, she is intelligent, polite, and deeply observant — she speaks carefully, thinks before she acts, and often notices emotional details that others miss. Though she appears shy, June has a strong inner resolve and a quiet determination to succeed.",
    grade: "Grade 8",
    traits: ["Thoughtful", "Emotionally perceptive", "Intelligent", "Patient", "Loyal"],
    portraitPlaceholder: "from-purple-900 to-slate-800",
  },
  {
    slug: "blake-montgomery",
    name: "Blake Montgomery",
    tagline: "Everyone wants to be his friend. Not everyone should.",
    bio: "Blake Montgomery is one of the most popular students at Mackenzie Middle. Handsome, athletic, charismatic, and wealthy, he rarely struggles to get what he wants. Unlike Jack, who uses charm to build connections, Blake uses it strategically. He plays social chess rather than physical games, and his rivalry with Minh becomes one of the central conflicts of the series.",
    grade: "Grade 8",
    traits: ["Charismatic", "Confident", "Quick-witted", "Manipulative", "Competitive"],
    portraitPlaceholder: "from-yellow-900 to-slate-800",
  },
  {
    slug: "sloan-fairchild",
    name: "Sloan Fairchild",
    tagline: "If people are going to talk, you might as well give them something worth talking about.",
    bio: "Sloan Fairchild is the queen bee of Mackenzie Middle. Wealthy, confident, and fully aware of the attention she commands, Sloan moves through the school like she owns it. While other students worry about fitting in, Sloan decides who fits in. Together with Blake, she forms the dominant social force — and the central opposition to Minh and his friends.",
    grade: "Grade 8",
    traits: ["Confident", "Strategic", "Charismatic", "Status-conscious", "Prideful"],
    portraitPlaceholder: "from-fuchsia-900 to-slate-800",
  },
  {
    slug: "ms-elizabeth-hand",
    name: "Ms. Elizabeth Hand",
    tagline: "Students learn best when they feel safe, seen, and respected.",
    bio: "Ms. Elizabeth Hand is the homeroom teacher at Mackenzie Middle. Widely respected for her kindness and emotional intelligence, she has an uncanny ability to understand what students are going through even when they cannot explain it themselves. She serves as a stabilizing adult presence, guiding without controlling and listening without judging.",
    grade: "Teacher",
    traits: ["Kind", "Patient", "Emotionally intelligent", "Perceptive", "Fair"],
    portraitPlaceholder: "from-teal-900 to-slate-800",
  },
  {
    slug: "mr-ron-little",
    name: "Mr. Ron Little",
    tagline: "You don't have to be the best player. You just have to be part of the team.",
    bio: "Mr. Ron Little is the Physical Education teacher at Mackenzie Middle, teaching hockey, rugby, track and field, and winter cross-country skiing. Often underestimated by his cheerful appearance, students quickly discover he is surprisingly fast, energetic, and deeply knowledgeable about sports. He believes physical activity is about participation, effort, and teamwork — not performance.",
    grade: "Teacher",
    traits: ["Encouraging", "Fair", "Energetic", "Team-focused", "Patient"],
    portraitPlaceholder: "from-lime-900 to-slate-800",
  },
  {
    slug: "principal-charles-sterling",
    name: "Principal Charles Sterling",
    tagline: "Rules exist for a reason.",
    bio: "Principal Charles Sterling is the strict, disciplined head of Mackenzie Middle. Known for his firm expectations and zero-tolerance approach to lateness and disruptive behavior, his presence alone is enough to quiet entire hallways. He is not cruel — but he is uncompromising, and he represents order, discipline, and consequence in the school system.",
    grade: "Principal",
    traits: ["Disciplined", "Organized", "Firm", "Commands respect", "Fair"],
    portraitPlaceholder: "from-zinc-900 to-slate-800",
  },
];

export function getCharacterBySlug(slug: string): Character | undefined {
  return characters.find((c) => c.slug === slug);
}
