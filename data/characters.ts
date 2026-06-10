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
    slug: "alex-chen",
    name: "Alex Chen",
    tagline: "The new kid trying to find his place.",
    bio: "Alex moved to Edmonton at the start of eighth grade and is still figuring out the unwritten rules of Mackenzie Middle School. Thoughtful and observant, he keeps a journal and notices things others overlook.",
    grade: "Grade 8",
    traits: ["Observant", "Loyal", "Quiet", "Curious"],
    portraitPlaceholder: "from-violet-900 to-slate-800",
  },
  {
    slug: "dana-kowalski",
    name: "Dana Kowalski",
    tagline: "The one who always has a plan.",
    bio: "Dana runs the school newspaper and knows every rumour before it happens. She is fiercely ambitious and has a soft spot for underdogs — even if she would never admit it.",
    grade: "Grade 8",
    traits: ["Ambitious", "Sharp", "Protective", "Stubborn"],
    portraitPlaceholder: "from-amber-900 to-slate-800",
  },
  {
    slug: "marco-reyes",
    name: "Marco Reyes",
    tagline: "Star of the ice, lost off it.",
    bio: "Marco is the best hockey player in his grade and the worst student. His dad is pushing him hard toward a career in the sport, but Marco secretly loves drawing comic books.",
    grade: "Grade 8",
    traits: ["Athletic", "Creative", "Conflict-averse", "Funny"],
    portraitPlaceholder: "from-sky-900 to-slate-800",
  },
  {
    slug: "simone-lafleur",
    name: "Simone Lafleur",
    tagline: "She hears everything — and forgets nothing.",
    bio: "Simone is the school's unofficial historian. She has memorized every yearbook since 1971 and uses that knowledge as both currency and shield. She is also quietly dealing with her parents' separation.",
    grade: "Grade 7",
    traits: ["Encyclopedic memory", "Guarded", "Witty", "Empathetic"],
    portraitPlaceholder: "from-rose-900 to-slate-800",
  },
  {
    slug: "terry-bullock",
    name: "Terry Bullock",
    tagline: "Bigger than everyone. Afraid of more.",
    bio: "Terry is the largest kid in school and gets cast as the bully in everyone's story — including his own. He's working on changing that, one small act at a time.",
    grade: "Grade 9",
    traits: ["Misunderstood", "Gentle", "Trying", "Wary"],
    portraitPlaceholder: "from-emerald-900 to-slate-800",
  },
  {
    slug: "patrice-okonkwo",
    name: "Patrice Okonkwo",
    tagline: "The teacher who still remembers what it felt like.",
    bio: "Mr. Okonkwo teaches Social Studies and is the only adult in the building who speaks to students like they have something worth saying. He has his own ghosts from middle school.",
    grade: "Teacher",
    traits: ["Perceptive", "Patient", "Complicated past", "Principled"],
    portraitPlaceholder: "from-teal-900 to-slate-800",
  },
];

export function getCharacterBySlug(slug: string): Character | undefined {
  return characters.find((c) => c.slug === slug);
}
