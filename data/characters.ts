export interface Relationship {
  role: string;
  person: string;
  slug?: string; // character slug — when set, renders the name as a link
  description?: string; // full relationship description from character documents
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
  // Optional named section (e.g. "Fairchild Estate"). When set, the character is shown
  // under this section instead of the default Students / Staff split.
  group?: string;
  traits: string[];
  // CSS gradient shown while artwork is absent — keep even after adding images
  portraitPlaceholder: string;
  relationships?: Relationship[];
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
    bio: "Minh Le arrived in Edmonton from Vietnam in 1980 and entered a world that felt completely unfamiliar. Thoughtful, loyal, and deeply observant, he notices things others miss and understands people better than they understand themselves. While he struggles with shyness and self-doubt, his genuine kindness and quiet determination make him the heart of Mackenzie Middle.",
    grade: "Grade 8",
    isStaff: false,
    traits: ["Thoughtful", "Kind", "Observant", "Shy"],
    portraitPlaceholder: "from-blue-900 to-slate-800",
    portrait2d: "/assets/characters/2d/Minh.png",
    relationships: [
      {
        role: "Best Friend",
        person: "Willie Lin",
        slug: "willie-lin",
        description:
          "As fellow immigrant boys, they understand each other without lengthy explanations and share hockey, school life, and the experience of adapting to Canada. If Minh is the emotional heart of the series, Willie is the steady foundation beneath him.",
      },
      {
        role: "Crush",
        person: "Shelley Morgan",
        slug: "shelley-morgan",
        description:
          "What begins as friendship slowly becomes something deeper for Minh. He keeps his feelings hidden, fearing rejection and not wanting to lose the friendship he values so much.",
      },
      {
        role: "Friend & Mentor",
        person: "Jack Armstrong",
        slug: "jack-armstrong",
        description:
          "Jack recognizes Minh's potential and pushes him beyond his comfort zone. Their friendship becomes one of the strongest in the series — Jack often acts like the older brother Minh never had.",
      },
      {
        role: "Shared Bond",
        person: "June Nakamura",
        slug: "june-nakamura",
        description:
          "Minh sees his own struggles reflected in June. Both are newcomers trying to find their place, and they share a quiet bond built on mutual understanding.",
      },
      {
        role: "Entertained By",
        person: "Tara Bennett",
        slug: "tara-bennett",
        description:
          "Tara teases Minh endlessly — not out of cruelty, but because his reactions are funny. She frequently tries to help him with Shelley, though her matchmaking rarely goes according to plan.",
      },
      {
        role: "Trusted Friend",
        person: "Sloan Fairchild",
        slug: "sloan-fairchild",
        description:
          "Sloan becomes one of Minh's closest friends at Mackenzie Middle. She admires his creativity, imagination, and optimism, and his enthusiasm often encourages her to step outside her comfort zone. Their friendship reminds them both that genuine connection has nothing to do with wealth or status.",
      },
      {
        role: "Greatest Rival",
        person: "Blake Montgomery",
        slug: "blake-montgomery",
        description:
          "Blake places himself directly between Minh and Shelley, possessing everything Minh lacks — confidence, popularity, and charm. Their conflict drives much of the series.",
      },
    ],
  },
  {
    slug: "shelley-morgan",
    name: "Shelley Morgan",
    tagline: "Friendly, intelligent, and naturally kind.",
    bio: "Shelley Morgan is the emotional center of Mackenzie Middle. Kind, intelligent, and genuinely empathetic, she has a natural gift for making people feel seen and valued. She is one of the first students to welcome Minh, and although the two become very close friends, she remains entirely unaware of how deeply he cares for her.",
    grade: "Grade 8",
    isStaff: false,
    traits: ["Kind", "Friendly", "Inclusive", "Intelligent"],
    portraitPlaceholder: "from-pink-900 to-slate-800",
    portrait2d: "/assets/characters/2d/Shelly.png",
    relationships: [
      {
        role: "Best Friend",
        person: "Tara Bennett",
        slug: "tara-bennett",
        description:
          "Where Shelley is thoughtful, Tara is impulsive. They balance each other perfectly — Shelley helps Tara slow down, while Tara helps Shelley take chances. Together they form one of the strongest friendships in the series.",
      },
      {
        role: "Close Friend",
        person: "Minh Le",
        slug: "minh-le",
        description:
          "Shelley's simple act of kindness when Minh arrives creates a deep friendship. She admires his honesty and loyalty, unaware at first that his feelings for her go beyond friendship.",
      },
      {
        role: "Close Friend",
        person: "June Nakamura",
        slug: "june-nakamura",
        description:
          "Shelley immediately recognizes June's struggles and makes a special effort to include her. Their friendship is built on mutual respect and kindness, and Shelley helps June gain confidence in a new environment.",
      },
      {
        role: "Friend",
        person: "Willie Lin",
        slug: "willie-lin",
        description:
          "Shelley enjoys Willie's company and appreciates his intelligence and honesty. She can always count on him to be straightforward — sometimes brutally so.",
      },
      {
        role: "Friend",
        person: "Jack Armstrong",
        slug: "jack-armstrong",
        description:
          "A comfortable friendship built on trust and familiarity. Many classmates assume they would make a good couple. Neither sees it that way.",
      },
      {
        role: "Kindred Spirit",
        person: "Sloan Fairchild",
        slug: "sloan-fairchild",
        description:
          "Two girls who lead by example rather than by popularity. Shelley never treats Sloan as \"the wealthy girl,\" and Sloan never trades on the family name — which is exactly why they understand each other. Both are the person their friends come to for advice.",
      },
      {
        role: "Complicated",
        person: "Blake Montgomery",
        slug: "blake-montgomery",
        description:
          "Blake's interest in Shelley becomes a major conflict. Shelley is initially flattered but begins to question his motives — does he genuinely care, or is she simply another challenge?",
      },
    ],
  },
  {
    slug: "willie-lin",
    name: "Willie Lin",
    tagline: "The brain of the group.",
    bio: "A Taiwanese immigrant and Minh's closest friend. Tall, skinny, and highly intelligent, Willie is somewhat socially awkward and has very little interest in traditional popularity or dating. He would much rather spend his time playing hockey, reading, or discussing unusual facts. His straightforward honesty often creates unintentionally funny situations.",
    grade: "Grade 8",
    isStaff: false,
    traits: ["Intelligent", "Honest", "Awkward", "Straightforward"],
    portraitPlaceholder: "from-indigo-900 to-slate-800",
    portrait2d: "/assets/characters/2d/Willie.png",
    relationships: [
      {
        role: "Best Friend",
        person: "Minh Le",
        slug: "minh-le",
        description:
          "Both understand what it feels like to be new, to speak English as a second language, and to feel different. If Minh is the emotional heart of the series, Willie is the steady foundation beneath him.",
      },
      {
        role: "Friend",
        person: "Shelley Morgan",
        slug: "shelley-morgan",
        description:
          "Respects Shelley and appreciates her kindness toward Minh. Unlike many boys at school, Willie never develops a crush on her — to him she is simply a good friend, and she appreciates that.",
      },
      {
        role: "Teased By",
        person: "Tara Bennett",
        slug: "tara-bennett",
        description:
          "Tara's favorite target for teasing. His serious nature makes him an easy setup. Despite this, Tara secretly enjoys his company because he never pretends to be someone he's not.",
      },
      {
        role: "Friend",
        person: "June Nakamura",
        slug: "june-nakamura",
        description:
          "They share similar backgrounds as immigrants and academically focused students. Their friendship develops slowly and naturally through mutual understanding.",
      },
      {
        role: "Friend",
        person: "Jack Armstrong",
        slug: "jack-armstrong",
        description:
          "Jack constantly tries to pull Willie out of his comfort zone. Willie usually resists — then somehow ends up joining anyway. Despite their differences, they become good friends.",
      },
      {
        role: "Friend",
        person: "Sloan Fairchild",
        slug: "sloan-fairchild",
        description:
          "Willie is completely indifferent to the Fairchild name, which is precisely what Sloan likes about him. He treats her as just another classmate, and she finds his bluntness refreshing after a lifetime of people being careful around her.",
      },
      {
        role: "Warns Against",
        person: "Blake Montgomery",
        slug: "blake-montgomery",
        description:
          "Willie quickly recognizes Blake's questionable intentions and becomes one of the first people to warn Minh about him. They represent completely opposite approaches to life.",
      },
    ],
  },
  {
    slug: "june-nakamura",
    name: "June Nakamura",
    tagline: "Quiet strength and determination.",
    bio: "A recent immigrant from Japan, June Nakamura is quiet, polite, and deeply observant — she speaks carefully, thinks before she acts, and often notices emotional details that others miss. She is working hard to find her place in a new country while carefully balancing her family's traditions with her new life in Canada. Though she appears shy, June has a strong inner resolve and a quiet determination to succeed.",
    grade: "Grade 8",
    isStaff: false,
    traits: ["Polite", "Respectful", "Determined", "Quiet"],
    portraitPlaceholder: "from-purple-900 to-slate-800",
    portrait2d: "/assets/characters/2d/June.png",
    relationships: [
      {
        role: "Shared Bond",
        person: "Minh Le",
        slug: "minh-le",
        description:
          "June and Minh share a quiet emotional connection as fellow newcomers. Both understand what it feels like to be new and socially invisible. Their bond grows through small moments of mutual recognition.",
      },
      {
        role: "Close Friend",
        person: "Shelley Morgan",
        slug: "shelley-morgan",
        description:
          "Shelley is one of the first students to make June feel included. Her kindness helps June feel safe in an unfamiliar environment, and their friendship becomes supportive, gentle, and deeply trusting.",
      },
      {
        role: "Friend",
        person: "Tara Bennett",
        slug: "tara-bennett",
        description:
          "Opposites in almost every way, but Tara's friendliness and persistence slowly break through June's shyness. Tara becomes one of the people who helps June feel like she truly belongs.",
      },
      {
        role: "Secret Admirer",
        person: "Jack Armstrong",
        slug: "jack-armstrong",
        description:
          "Jack is drawn to June's quiet depth and emotional intelligence. June is unsure how to interpret his outgoing personality. Their connection develops slowly through small interactions — one of the central emotional threads of the series.",
      },
      {
        role: "Friend",
        person: "Willie Lin",
        slug: "willie-lin",
        description:
          "A natural understanding as fellow immigrants and academically focused students. Their friendship is calm, respectful, and low-pressure — built on shared experience.",
      },
      {
        role: "Quiet Understanding",
        person: "Sloan Fairchild",
        slug: "sloan-fairchild",
        description:
          "Both are quiet girls who notice more than they say, and both carry expectations they never asked for — June her family's traditions, Sloan the weight of the Fairchild name. Neither needs to fill a silence, which is why their conversations tend to matter.",
      },
      {
        role: "Targeted By",
        person: "Blake Montgomery",
        slug: "blake-montgomery",
        description:
          "Blake sees June as an easy target for social manipulation. However, June is more observant than she appears and gradually recognizes his patterns — even if she doesn't confront him directly.",
      },
    ],
  },
  {
    slug: "jack-armstrong",
    name: "Jack Armstrong",
    tagline: "The athlete and adventurer.",
    bio: "Canadian-born with brown hair and natural athletic ability, Jack Armstrong is outgoing, adventurous, and always looking for excitement. He is the catalyst who constantly encourages Minh and Willie to step outside their comfort zones. Unlike many boys his age, he is genuinely drawn to June's quiet intelligence. His philosophy is simple: if something looks fun, try it.",
    grade: "Grade 8",
    isStaff: false,
    traits: ["Outgoing", "Athletic", "Adventurous", "Charismatic"],
    portraitPlaceholder: "from-orange-900 to-slate-800",
    portrait2d: "/assets/characters/2d/Jack.png",
    relationships: [
      {
        role: "Mentors",
        person: "Minh Le",
        slug: "minh-le",
        description:
          "Jack quickly takes an interest in Minh after he arrives. He sees potential where others see a shy newcomer and becomes one of the first to push Minh beyond his comfort zone. Their friendship is one of the strongest in the series.",
      },
      {
        role: "Friend",
        person: "Willie Lin",
        slug: "willie-lin",
        description:
          "Jack enjoys challenging Willie, believing he spends too much time thinking and not enough time living. The contrast between Jack's spontaneity and Willie's caution creates many humorous moments — and a genuine friendship.",
      },
      {
        role: "Friend",
        person: "Shelley Morgan",
        slug: "shelley-morgan",
        description:
          "A comfortable friendship built on trust and familiarity. Many classmates assume they would make a good couple. Neither sees the other romantically.",
      },
      {
        role: "Close Friend",
        person: "Tara Bennett",
        slug: "tara-bennett",
        description:
          "One of his closest friends, sharing similar energy and enthusiasm. What Jack doesn't realize for a long time is that Tara's feelings go beyond friendship — one of the most bittersweet storylines in the series.",
      },
      {
        role: "Likes",
        person: "June Nakamura",
        slug: "june-nakamura",
        description:
          "June fascinates Jack. Her quiet, thoughtful nature draws him in. For perhaps the first time, Jack finds himself slowing down and listening. Their connection becomes one of the most important emotional arcs in the series.",
      },
      {
        role: "Close Friend",
        person: "Sloan Fairchild",
        slug: "sloan-fairchild",
        description:
          "One of Sloan's closest friends outside the Fairchild world, built on school and a shared love of tennis. Jack treats her as an equal rather than as \"the wealthy girl\" — something she quietly appreciates. He's a regular visitor to the estate, where Oliver trails him around asking questions.",
      },
      {
        role: "Rival",
        person: "Blake Montgomery",
        slug: "blake-montgomery",
        description:
          "His natural rival. Both are popular, athletic, and confident — but Jack values friendship while Blake values winning. As Blake targets those Jack cares about, their rivalry becomes a central conflict.",
      },
    ],
  },
  {
    slug: "tara-bennett",
    name: "Tara Bennett",
    tagline: "The spark plug of the group.",
    bio: "Outgoing, mischievous, energetic, and always laughing, Tara Bennett has a natural talent for getting herself and her friends into harmless trouble. She acts as the primary driving force behind the group adventures on the girls' side. Despite her overt confidence, she secretly harbors romantic feelings for Jack Armstrong — feelings she hides behind jokes and teasing.",
    grade: "Grade 8",
    isStaff: false,
    traits: ["Energetic", "Mischievous", "Outgoing", "Playful"],
    portraitPlaceholder: "from-yellow-900 to-slate-800",
    portrait2d: "/assets/characters/2d/Tara.png",
    relationships: [
      {
        role: "Best Friend",
        person: "Shelley Morgan",
        slug: "shelley-morgan",
        description:
          "Inseparable for years. Shelley helps Tara slow down and think; Tara helps Shelley take chances and enjoy life. Together they form one of the strongest friendships in the series.",
      },
      {
        role: "Matchmaker For",
        person: "Minh Le",
        slug: "minh-le",
        description:
          "Tara finds Minh endlessly fascinating. She quickly realizes he likes Shelley and spends much of the series trying to help him — though her matchmaking attempts usually create chaos instead.",
      },
      {
        role: "Teases",
        person: "Willie Lin",
        slug: "willie-lin",
        description:
          "Willie is one of Tara's favorite people to tease. She loves watching him react to the unexpected. Beneath the teasing, she genuinely cares about him and often acts like a big sister.",
      },
      {
        role: "Protector",
        person: "June Nakamura",
        slug: "june-nakamura",
        description:
          "When June arrives, Tara immediately adopts her into the group. She recognizes June's struggle and makes it her personal mission to help — introducing her to friends and encouraging her to speak up.",
      },
      {
        role: "Secret Crush",
        person: "Jack Armstrong",
        slug: "jack-armstrong",
        description:
          "One of her closest friends, matching her energy and enthusiasm. For years Tara quietly develops deeper feelings for Jack, hiding them behind jokes and teasing. Watching him become interested in June is one of the hardest things she faces.",
      },
      {
        role: "Unlikely Friend",
        person: "Sloan Fairchild",
        slug: "sloan-fairchild",
        description:
          "Opposites who work: Tara is loud where Sloan is composed, and Tara's complete refusal to be impressed by the estate is exactly what puts Sloan at ease. Tara teases her mercilessly about the mansion, and Sloan gives it right back — gently.",
      },
      {
        role: "Distrusts",
        person: "Blake Montgomery",
        slug: "blake-montgomery",
        description:
          "Tara distrusts Blake from the start, seeing through his charm quickly. She views people as friends; Blake views people as games. He occasionally tries to win her over, but Tara never makes it easy.",
      },
    ],
  },
  {
    slug: "blake-montgomery",
    name: "Blake Montgomery",
    tagline: "Everyone wants to be his friend. Not everyone should.",
    bio: "Blake Montgomery is one of the most popular students at Mackenzie Middle. Handsome, athletic, charismatic, and wealthy, he rarely struggles to get what he wants. Unlike Jack, who uses charm to build genuine connections, Blake uses it strategically — he plays social chess rather than physical games. His rivalry with Minh becomes one of the central conflicts of the series.",
    grade: "Grade 8",
    isStaff: false,
    traits: ["Charismatic", "Confident", "Manipulative", "Competitive"],
    portraitPlaceholder: "from-amber-900 to-slate-800",
    portrait2d: "/assets/characters/2d/Blake.png",
    relationships: [
      {
        role: "Pursuit",
        person: "Shelley Morgan",
        slug: "shelley-morgan",
        description:
          "Blake develops an interest in Shelley — but whether he genuinely likes her or she's simply the next challenge, nobody knows. Not even Shelley. His pursuit puts him on a collision course with Minh.",
      },
      {
        role: "Entertained By",
        person: "Tara Bennett",
        slug: "tara-bennett",
        description:
          "Blake finds Tara entertaining — unlike most girls, she refuses to be impressed by him, which only makes him more determined. Tara quickly realizes she should not trust him.",
      },
      {
        role: "Uses As Pawn",
        person: "June Nakamura",
        slug: "june-nakamura",
        description:
          "June's quiet nature intrigues Blake. He views her interest in Jack as an opportunity to create trouble. Whether his feelings are real remains unclear.",
      },
      {
        role: "Rival",
        person: "Jack Armstrong",
        slug: "jack-armstrong",
        description:
          "His central rival. Jack values friendship; Blake values winning. Jack builds relationships; Blake tests them. As Blake becomes involved with those Jack cares about, their rivalry escalates into one of the series' defining conflicts.",
      },
      {
        role: "Cannot Impress",
        person: "Sloan Fairchild",
        slug: "sloan-fairchild",
        description:
          "Blake assumes the wealthiest girl in school is his natural ally, and is baffled when she wants nothing to do with the arrangement. Sloan is unfailingly polite to him and keeps him at arm's length — she has been around real influence her whole life, and she recognizes a performance when she sees one.",
      },
      {
        role: "Greatest Rival",
        person: "Minh Le",
        slug: "minh-le",
        description:
          "Minh is Blake's greatest obstacle. Where Blake has confidence, popularity, and charm, Minh has authenticity and genuine connection. Their rivalry reveals that popularity isn't what builds lasting relationships.",
      },
    ],
  },
  {
    slug: "sloan-fairchild",
    name: "Sloan Fairchild",
    tagline: "Kindness is remembered far longer than success.",
    bio: "Sloan Fairchild is the eldest child of Charles and Victoria Fairchild and the future heir to one of Edmonton's most respected families. Raised in the elegance of the Fairchild Estate, she has enjoyed every opportunity life could offer, yet her parents have worked hard to ensure she grows up humble, compassionate, and respectful. Quiet by nature but remarkably perceptive, she is the person friends turn to when they need advice — and at Mackenzie Middle she wants to be known for who she is, not for the mansion she lives in.",
    grade: "Grade 8",
    isStaff: false,
    traits: ["Kind-hearted", "Thoughtful", "Compassionate", "Responsible"],
    portraitPlaceholder: "from-fuchsia-900 to-slate-800",
    portrait2d: "/assets/characters/2d/Sloan.png",
    relationships: [
      {
        role: "Father",
        person: "Charles Fairchild",
        slug: "charles-fairchild",
        description:
          "Sloan's greatest role model. Charles never interrupts — he listens first, then offers advice. He encourages her to become her own person rather than simply following family expectations, and teaches her that character matters more than wealth. She hopes to make him proud not by following his career, but by living according to his values.",
      },
      {
        role: "Mother",
        person: "Victoria Fairchild",
        slug: "victoria-fairchild",
        description:
          "Sloan's closest confidante. Victoria has taught her grace, compassion, and the importance of treating every person with respect. Whether they're playing tennis on the family court, visiting a gallery, or talking over tea, Victoria is her greatest source of guidance. Their relationship is built on trust and unconditional love.",
      },
      {
        role: "Younger Brother",
        person: "Oliver Fairchild",
        slug: "oliver-fairchild",
        description:
          "Oliver is Sloan's favorite person to tease. She helps him with homework, protects him when necessary, and encourages his endless imagination. He follows her around the estate believing she can solve any problem — and though they argue like normal siblings, she would do anything for him.",
      },
      {
        role: "Mentor",
        person: "Pierre Laurent",
        slug: "pierre-laurent",
        description:
          "Pierre has watched Sloan grow from a little girl into a young woman. He has quietly taught her etiquette, patience, and responsibility, and whenever she faces a difficult decision his calm wisdom helps her see it more clearly. She considers him one of her greatest mentors — almost another grandfather.",
      },
      {
        role: "Baking Partner",
        person: "Chef Garçon",
        slug: "chef-garcon",
        description:
          "Chef Garçon encourages Sloan's love of cooking and baking. Unlike Oliver, who sneaks cookies, Sloan enjoys learning recipes and decorating desserts beside him. They discuss French culture, travel, and food while preparing meals, and he always calls her \"Mademoiselle Sloan.\"",
      },
      {
        role: "Like An Older Sister",
        person: "Marian Bennett",
        slug: "marian-bennett",
        description:
          "Marian is the older sister Sloan never had. She has celebrated birthdays, comforted Sloan after disappointments, helped her prepare for dances, and quietly supported her through life's challenges. When Sloan needs advice she isn't ready to discuss with her parents, she goes to Marian — who always listens without judgment.",
      },
      {
        role: "Protector",
        person: "Thomas McMurphy",
        slug: "thomas-mcmurphy",
        description:
          "McMurphy has driven Sloan to school for years. He taught her to ride a bicycle safely, to stay calm in difficult situations, and the importance of protecting others. He is fiercely protective but never overbearing — if Sloan is upset, he usually notices long before anyone else. She feels safer whenever he's nearby.",
      },
      {
        role: "Trusted Friend",
        person: "Minh Le",
        slug: "minh-le",
        description:
          "Minh becomes one of Sloan's most trusted friends at Mackenzie Middle. She admires his creativity, imagination, and optimism, and his enthusiasm encourages her to step outside her comfort zone and enjoy the simpler moments of life. Their friendship reminds her that genuine connections have nothing to do with wealth or status.",
      },
      {
        role: "Close Friend",
        person: "Jack Armstrong",
        slug: "jack-armstrong",
        description:
          "One of Sloan's closest friends outside the Fairchild world. Their friendship grows naturally through school and a shared love of tennis. Jack treats her as an equal rather than as \"the wealthy girl,\" something she quietly appreciates. When he visits the estate, she enjoys showing him that behind the mansion is simply a family trying to live normal lives.",
      },
      {
        role: "Kindred Spirit",
        person: "Shelley Morgan",
        slug: "shelley-morgan",
        description:
          "Both girls lead by example rather than by popularity, and both are the person their friends come to for advice. Shelley never treats Sloan as the wealthy girl, which is exactly why they understand one another.",
      },
      {
        role: "Unlikely Friend",
        person: "Tara Bennett",
        slug: "tara-bennett",
        description:
          "Tara's refusal to be impressed by the estate is exactly what puts Sloan at ease. Tara teases her endlessly about the mansion; Sloan gives it right back, gently. Their opposite energies make the friendship work.",
      },
      {
        role: "Keeps At A Distance",
        person: "Blake Montgomery",
        slug: "blake-montgomery",
        description:
          "Blake assumes the wealthiest girl in school is his natural ally. Sloan is unfailingly polite and entirely uninterested — she has been around real influence her whole life and recognizes a performance when she sees one.",
      },
    ],
  },

  // ── Staff & Faculty ────────────────────────────────────────────────────────
  {
    slug: "ms-hand",
    name: "Ms. Hand",
    tagline: "Learning happens both inside and outside the classroom.",
    bio: "Tall, slim, warm-hearted, and deeply respected by her students. Ms. Hand believes true education extends past the walls of the classroom. She frequently takes her classes on walks around the school grounds and occasionally joins them to sit on the lawn during lunch. Her gentle humor and emotional intelligence make her an absolute favorite — she often senses conflicts before they fully develop.",
    grade: "Homeroom Teacher",
    isStaff: true,
    traits: ["Warm", "Respected", "Gentle", "Humorous"],
    portraitPlaceholder: "from-teal-900 to-slate-800",
    portrait2d: "/assets/characters/2d/Hand.png",
    relationships: [
      {
        role: "Observes",
        person: "Minh Le",
        slug: "minh-le",
        description:
          "Ms. Hand knows Minh struggles with confidence and belonging. She watches over him quietly, allowing him room to grow while providing a safe adult presence when needed.",
      },
      {
        role: "Guides",
        person: "Shelley Morgan",
        slug: "shelley-morgan",
        description:
          "She recognizes that Shelley often carries emotional responsibility for others, and quietly guides her toward understanding her own needs alongside those of her friends.",
      },
      {
        role: "Supports",
        person: "Willie Lin",
        slug: "willie-lin",
        description:
          "Ms. Hand appreciates Willie's intelligence and knows his social awkwardness isn't a fault. She gives him space while gently encouraging him to engage more with the world around him.",
      },
      {
        role: "Supports",
        person: "June Nakamura",
        slug: "june-nakamura",
        description:
          "Ms. Hand gently supports June's adjustment to a new country and new school, encouraging her without pressure and making her classroom a place June feels safe.",
      },
      {
        role: "Understands",
        person: "Tara Bennett",
        slug: "tara-bennett",
        description:
          "She understands that Tara hides deeper feelings behind humor, and quietly watches for the moments when Tara needs someone to see past the jokes.",
      },
      {
        role: "Monitors",
        person: "Blake Montgomery",
        slug: "blake-montgomery",
        description:
          "Ms. Hand understands that Blake's social influence operates in ways he doesn't always recognize himself. She watches closely, sensing conflicts before they fully develop.",
      },
      {
        role: "Differs From",
        person: "Principal Charles Sterling",
        slug: "principal-charles-sterling",
        description:
          "Ms. Hand respects Principal Sterling but differs from him in philosophy. Where he emphasizes discipline and order, she emphasizes understanding and growth.",
      },
    ],
  },
  {
    slug: "mr-ron-little",
    name: "Mr. Ron Little",
    tagline: "Every student has potential.",
    bio: "Chubby but remarkably athletic, Mr. Ron Little is recognized by his permanently rosy cheeks and his deep belief that effort matters more than talent. He focuses entirely on participation over perfection. Students frequently underestimate his physical abilities until they witness how incredibly fast he can skate. He teaches hockey, rugby, track and field, and winter cross-country skiing.",
    grade: "Physical Education",
    isStaff: true,
    traits: ["Athletic", "Encouraging", "Supportive", "Surprising"],
    portraitPlaceholder: "from-green-900 to-slate-800",
    portrait2d: "/assets/characters/2d/Ron.png",
    relationships: [
      {
        role: "Encourages",
        person: "Minh Le",
        slug: "minh-le",
        description:
          "Encourages Minh in hockey and helps build his confidence on the ice. Mr. Little understands that PE class is not just physical — sport is a language Minh already speaks.",
      },
      {
        role: "Encourages",
        person: "Willie Lin",
        slug: "willie-lin",
        description:
          "Supports Willie in hockey alongside Minh, helping both boys connect with Canadian culture through winter sports. Recognizes Willie's steady reliability as a team player.",
      },
      {
        role: "Challenges",
        person: "Jack Armstrong",
        slug: "jack-armstrong",
        description:
          "Recognizes Jack's natural athletic talent and sometimes challenges him more than other students, pushing him to develop leadership alongside his physical skills.",
      },
      {
        role: "Warns",
        person: "Tara Bennett",
        slug: "tara-bennett",
        description:
          "Frequently warns Tara about safety — but secretly appreciates her energy and enthusiasm in class more than he lets on.",
      },
      {
        role: "Respects",
        person: "Shelley Morgan",
        slug: "shelley-morgan",
        description:
          "Respects Shelley's effort and teamwork approach in PE. She exemplifies what he values most: participation and contributing to the group.",
      },
      {
        role: "Monitors",
        person: "Blake Montgomery",
        slug: "blake-montgomery",
        description:
          "Keeps a close eye on Blake's competitive attitude, observing how it affects team dynamics and ensuring it doesn't cross into harmful territory.",
      },
      {
        role: "Balances",
        person: "Principal Charles Sterling",
        slug: "principal-charles-sterling",
        description:
          "Values Principal Sterling's structure and discipline while representing a more relaxed, active philosophy within the school. The two balance each other as different pillars of student development.",
      },
    ],
  },
  {
    slug: "principal-charles-sterling",
    name: "Principal Charles Sterling",
    tagline: "Discipline helps young people succeed.",
    bio: "Tall, stern, and highly disciplined, Principal Charles Sterling runs Mackenzie Middle with a firm hand. Every morning at 9:00 AM sharp, he stands at the front entrance watching for late arrivals, patrolling the hallways throughout the day. While the students fear him, parents deeply respect his methods. He is not cruel — but he is uncompromising.",
    grade: "Principal",
    isStaff: true,
    traits: ["Stern", "Disciplined", "Strict", "Dedicated"],
    portraitPlaceholder: "from-slate-700 to-gray-900",
    portrait2d: "/assets/characters/2d/Charles.png",
    relationships: [
      {
        role: "Fair Towards",
        person: "Minh Le",
        slug: "minh-le",
        description:
          "Generally fair with Minh, expecting full compliance with school rules. He pays attention to Minh's growing confidence over the course of the series.",
      },
      {
        role: "Monitors",
        person: "Jack Armstrong",
        slug: "jack-armstrong",
        description:
          "Watches Jack closely due to his leadership influence and athletic involvement. Respects his positive role in school life while monitoring how that influence is used.",
      },
      {
        role: "Frequently Warns",
        person: "Tara Bennett",
        slug: "tara-bennett",
        description:
          "Tara is one of his most frequent concerns. Her hallway behavior and impulsiveness lead to regular warnings. He is firm but not unkind toward her.",
      },
      {
        role: "Respects",
        person: "Shelley Morgan",
        slug: "shelley-morgan",
        description:
          "Respects Shelley and her positive presence in the school. Expects her to stay focused on academics and student life.",
      },
      {
        role: "Gentle Towards",
        person: "June Nakamura",
        slug: "june-nakamura",
        description:
          "Treats June gently but formally, aware of her immigrant background and the adjustment it requires. He does not single her out negatively.",
      },
      {
        role: "Monitors Closely",
        person: "Blake Montgomery",
        slug: "blake-montgomery",
        description:
          "Monitors Blake closely due to his pattern of social manipulation and its effects on other students. Blake is one of his most watched figures.",
      },
      {
        role: "Differs From",
        person: "Ms. Hand",
        slug: "ms-hand",
        description:
          "Respects Ms. Hand's emotional and student-centered approach, though he sometimes considers it too lenient. Together they represent two distinct philosophies of education within Mackenzie Middle.",
      },
      {
        role: "Values",
        person: "Mr. Ron Little",
        slug: "mr-ron-little",
        description:
          "Values Mr. Little's energy and positive influence on students, but occasionally considers him too relaxed in his approach to structure and discipline.",
      },
    ],
  },

  // ── Fairchild Estate ───────────────────────────────────────────────────────
  // The Fairchild family and the household staff of the estate. Sloan also lives
  // here, but she stays in the Students block above — the Estate section on the
  // characters page lists her explicitly by slug.
  {
    slug: "charles-fairchild",
    name: "Charles Fairchild",
    tagline: "Money can buy many things, son — but it can never buy your name. You earn that yourself.",
    bio: "Charles Fairchild was born into one of Edmonton's most successful business families and chose to keep building rather than live off the inheritance. Under his leadership, Fairchild Holdings grew into one of Alberta's most respected privately owned companies, with investments in energy, commercial real estate, and office developments across Western Canada. He leaves at 7:00 AM and returns at 6:00 PM — and the moment he walks through the front door, business stays outside. Dinner is family time.",
    grade: "Father",
    isStaff: false,
    group: "Fairchild Estate",
    traits: ["Calm Under Pressure", "Honest", "Disciplined", "Humble"],
    portraitPlaceholder: "from-slate-800 to-gray-900",
    portrait2d: "/assets/characters/2d/CharlesFairchild.png",
    relationships: [
      {
        role: "Wife",
        person: "Victoria Fairchild",
        slug: "victoria-fairchild",
        description:
          "Charles and Victoria are true partners. They discuss important decisions together, and he values her advice more than anyone else's — when something difficult comes up he asks \"What do you think?\" before making up his mind. Even after many years of marriage they still enjoy quiet evenings together once the children are asleep.",
      },
      {
        role: "Daughter",
        person: "Sloan Fairchild",
        slug: "sloan-fairchild",
        description:
          "Sloan can always talk to her father. Charles never interrupts — he listens first, then offers advice. He encourages her to become her own person rather than simply following family expectations.",
      },
      {
        role: "Son",
        person: "Oliver Fairchild",
        slug: "oliver-fairchild",
        description:
          "Charles loves spending time with Oliver and attends baseball games, school events, and hockey practices whenever possible. If business makes him miss one, he makes every effort to be at the next. Oliver doesn't admire his father's money — he admires his father's integrity.",
      },
      {
        role: "Part Of The Family",
        person: "Pierre Laurent",
        slug: "pierre-laurent",
        description:
          "Charles has known Pierre since he was a young boy and doesn't think of him as \"the butler.\" Pierre has served beside him for most of his adult life and often acts as his closest advisor on household matters.",
      },
      {
        role: "Complete Trust",
        person: "Thomas McMurphy",
        slug: "thomas-mcmurphy",
        description:
          "McMurphy isn't simply Charles's chauffeur — he's one of the few people Charles completely trusts, with the two things that matter most: his family and his life. During long drives downtown they sometimes discuss business, sometimes baseball, sometimes nothing at all. Neither man feels the need to fill the silence.",
      },
      {
        role: "Hired Him",
        person: "Chef Garçon",
        slug: "chef-garcon",
        description:
          "Charles persuaded Chef Garçon to leave Europe and become the family's personal chef. They share a respect for discipline, precision, and professionalism, and Charles thanks him personally after every formal dinner.",
      },
    ],
  },
  {
    slug: "victoria-fairchild",
    name: "Victoria Fairchild",
    tagline: "The finest homes are remembered not for their size, but for how they make people feel.",
    bio: "Victoria Fairchild is the heart of the Fairchild family. While Charles oversees the family's business empire, Victoria oversees something far more important — their home. Gracious, cultured, and compassionate, she has an effortless elegance that puts people at ease, and she believes wealth should create opportunities rather than distance people from one another. A homemaker, community volunteer, and patron of the arts, she has a gift for making everyone — from business executives to delivery drivers — feel equally important. Visitors often leave the estate remembering Victoria's warmth long after they've admired the mansion.",
    grade: "Mother",
    isStaff: false,
    group: "Fairchild Estate",
    traits: ["Elegant", "Compassionate", "Diplomatic", "Warm"],
    portraitPlaceholder: "from-amber-900 to-slate-800",
    portrait2d: "/assets/characters/2d/Victoria.png",
    relationships: [
      {
        role: "Husband",
        person: "Charles Fairchild",
        slug: "charles-fairchild",
        description:
          "True partners. Victoria understands the pressures of leading a large company and provides the calm balance Charles needs. He values her advice above anyone else's and rarely makes a difficult decision without asking what she thinks.",
      },
      {
        role: "Daughter",
        person: "Sloan Fairchild",
        slug: "sloan-fairchild",
        description:
          "Victoria shares a special bond with Sloan, built on trust. She encourages her to think independently and never pressures her to fit into society's expectations. One of her favorite ways to spend time with Sloan is on the family's private tennis court, where neither keeps score very seriously and the conversations between games matter more than the match. She wants Sloan to become a woman of character before a woman of status.",
      },
      {
        role: "Son",
        person: "Oliver Fairchild",
        slug: "oliver-fairchild",
        description:
          "Oliver still runs into his mother's arms after school. Victoria never discourages his curiosity or imagination — she helps with school projects, attends his baseball games, and always makes time for his latest adventure. She often reminds him: \"Being kind will take you farther than being important.\"",
      },
      {
        role: "Coordinates With",
        person: "Pierre Laurent",
        slug: "pierre-laurent",
        description:
          "Victoria appreciates Pierre's impeccable taste and organization. Together they coordinate charity galas, dinner parties, and social events, and she oversees the household alongside him each morning.",
      },
      {
        role: "Shared Taste",
        person: "Chef Garçon",
        slug: "chef-garcon",
        description:
          "Victoria and Chef Garçon share an appreciation for fine art and beautiful presentation. She frequently asks him to design elegant menus for charity galas hosted at the mansion, and together they enjoy discussing French culture, travel, and classic cuisine. He picks fresh herbs from her gardens, insisting \"the best seasoning grows in the garden.\"",
      },
      {
        role: "Asks, Never Orders",
        person: "Marian Bennett",
        slug: "marian-bennett",
        description:
          "Marian officially assists Victoria and maintains the family's private quarters, but Victoria treats her with tremendous respect — rather than giving orders she asks, \"Could you help me with something?\" She sees Marian as part of the household rather than an employee.",
      },
      {
        role: "Never Worries",
        person: "Thomas McMurphy",
        slug: "thomas-mcmurphy",
        description:
          "Victoria appreciates McMurphy's professionalism and kindness, and never worries when the children are with him. She often reminds him: \"You're part of this family too.\"",
      },
    ],
  },
  {
    slug: "oliver-fairchild",
    name: "Oliver Fairchild",
    tagline: "Every day should have at least one adventure.",
    bio: "Oliver James Fairchild is ten years old, in Grade 5, and has never known anything but life at the Fairchild Estate. Surrounded by luxury, he remains remarkably down-to-earth, preferring tree forts, bicycles, hockey cards, and cookies over expensive toys. Unlike his older sister Sloan, Oliver doesn't yet feel the weight of the Fairchild name — he simply enjoys being a kid. He has a mischievous side but never acts out of cruelty, and if someone is lonely, Oliver is usually the first to notice. Although the estate employs many people, he considers them family rather than staff.",
    grade: "Grade 5",
    isStaff: false,
    group: "Fairchild Estate",
    traits: ["Curious", "Kind-hearted", "Energetic", "Imaginative"],
    portraitPlaceholder: "from-rose-900 to-slate-800",
    portrait2d: "/assets/characters/2d/Oliver.png",
    relationships: [
      {
        role: "Father",
        person: "Charles Fairchild",
        slug: "charles-fairchild",
        description:
          "Oliver admires his father enormously. Charles is busy running businesses, but whenever he's home Oliver has his full attention — tossing a baseball, working on a puzzle, watching hockey. Oliver hopes one day he'll grow up to be just like his dad.",
      },
      {
        role: "Mother",
        person: "Victoria Fairchild",
        slug: "victoria-fairchild",
        description:
          "Victoria is Oliver's greatest source of comfort. She encourages his imagination while gently teaching him kindness and respect, reads with him before bedtime, and watches him play tennis in the backyard. Oliver knows that no matter what happens, his mother will always listen.",
      },
      {
        role: "Older Sister",
        person: "Sloan Fairchild",
        slug: "sloan-fairchild",
        description:
          "Sloan is Oliver's hero. She helps with homework, gives advice, and occasionally rescues him when one of his adventures gets a little out of hand. They tease each other like all siblings, but they're incredibly close — Oliver secretly thinks Sloan can solve almost any problem.",
      },
      {
        role: "Hero",
        person: "Thomas McMurphy",
        slug: "thomas-mcmurphy",
        description:
          "Oliver absolutely idolizes McMurphy and believes he knows everything. Every Saturday morning the two play baseball, and McMurphy teaches him throwing mechanics, sportsmanship, camping skills, bicycle maintenance, and the importance of keeping promises. He never tells war stories — he teaches courage through actions instead. Oliver dreams that one day he'll drive as well as McMurphy.",
      },
      {
        role: "Partner In Mischief",
        person: "Chef Garçon",
        slug: "chef-garcon",
        description:
          "Oliver is constantly sneaking into the kitchen hoping to steal cookies before dinner, and Chef Garçon always pretends to be surprised: \"These cookies? They disappeared by themselves.\" Everyone knows he leaves a few where Oliver can \"accidentally\" find them. Oliver proudly declares, \"Chef makes the best cookies in Canada.\"",
      },
      {
        role: "Tries To Make Him Laugh",
        person: "Pierre Laurent",
        slug: "pierre-laurent",
        description:
          "Pierre politely pretends not to notice when Oliver slides down the grand staircase or races through the halls, and quietly teaches him manners and patience without ever sounding like he's giving a lesson. Oliver tries constantly to make him laugh — Pierre pretends to remain serious, and usually loses the battle. Oliver calls him \"the nicest butler in the world.\"",
      },
      {
        role: "Almost An Older Sister",
        person: "Marian Bennett",
        slug: "marian-bennett",
        description:
          "Marian patches torn shirts, finds lost toys, and always knows where Oliver left his hockey stick. She sneaks him an extra cookie, helps him finish school projects, and sometimes joins him in harmless practical jokes — provided Pierre never finds out. Whenever Oliver has a bad day, she somehow knows exactly how to cheer him up.",
      },
      {
        role: "Looks Up To",
        person: "Jack Armstrong",
        slug: "jack-armstrong",
        description:
          "Jack quickly becomes one of Oliver's favorite visitors. Whenever he comes over to play tennis with Sloan, Oliver follows him around asking questions about school, sports, and life at Mackenzie Middle. Jack treats Oliver like a younger brother.",
      },
      {
        role: "Fascinated By",
        person: "Minh Le",
        slug: "minh-le",
        description:
          "Oliver enjoys Minh's kindness and creativity, and is fascinated by his stories, hobbies, and ideas. Minh always takes time to include Oliver, making him feel like part of the group despite being younger.",
      },
    ],
  },
  {
    slug: "pierre-laurent",
    name: "Pierre Laurent",
    tagline: "Excellence is found in the smallest details.",
    bio: "Pierre Laurent has given nearly three decades to the Fairchild family as butler and estate manager. Raised in Montreal, he learned traditional hospitality and etiquette from his father, who managed one of Canada's finest historic hotels, and joined the household shortly after Charles and Victoria were married. Calm, dignified, and exceptionally organized, he believes true professionalism means anticipating people's needs before they ask — and that kindness and discipline matter equally. He insists he is \"simply doing his job.\" The Fairchilds consider him part of the family. Oliver once called him \"The General of the Mansion,\" and the nickname quietly stuck.",
    grade: "Butler",
    isStaff: true,
    group: "Fairchild Estate",
    traits: ["Dignified", "Organized", "Discreet", "Quietly Humorous"],
    portraitPlaceholder: "from-slate-700 to-gray-900",
    portrait2d: "/assets/characters/2d/Pierre.png",
    relationships: [
      {
        role: "Serves",
        person: "Charles Fairchild",
        slug: "charles-fairchild",
        description:
          "Charles trusts Pierre completely. Pierre has served beside him for most of his adult life and often acts as his closest advisor on household matters. Charles doesn't think of him as \"the butler\" — Pierre is part of the family.",
      },
      {
        role: "Coordinates With",
        person: "Victoria Fairchild",
        slug: "victoria-fairchild",
        description:
          "Victoria appreciates Pierre's impeccable taste and organization. Together they coordinate charity galas, dinner parties, and social events.",
      },
      {
        role: "Mentors",
        person: "Sloan Fairchild",
        slug: "sloan-fairchild",
        description:
          "Pierre has watched Sloan grow from a little girl into a young woman. He quietly worries about her happiness and offers gentle advice without being overbearing, having taught her etiquette, patience, and responsibility over the years. To Sloan, he is almost like another grandfather.",
      },
      {
        role: "Loses The Battle",
        person: "Oliver Fairchild",
        slug: "oliver-fairchild",
        description:
          "Oliver constantly tries to make Pierre laugh. Pierre pretends to remain serious — but usually loses. He secretly keeps a small tin of cookies behind his pantry desk just for Oliver.",
      },
      {
        role: "Mentors",
        person: "Marian Bennett",
        slug: "marian-bennett",
        description:
          "Pierre acts as Marian's mentor, patiently teaching her the traditions of service while encouraging her warmth and personality. He reminds her: \"People remember how you make them feel far longer than they remember what you served.\" He secretly thinks she will someday become head housekeeper.",
      },
      {
        role: "Mutual Respect",
        person: "Thomas McMurphy",
        slug: "thomas-mcmurphy",
        description:
          "Pierre keeps the mansion running; McMurphy protects it. Their friendship is built on mutual respect, and every morning before the household awakens they share coffee while reviewing the day's schedule. Neither needs many words.",
      },
      {
        role: "Perfect Timing",
        person: "Chef Garçon",
        slug: "chef-garcon",
        description:
          "The two have worked together long enough that they rarely need words. Pierre manages the dining room while Chef Garçon commands the kitchen, and their timing is so precise that formal dinners appear effortless.",
      },
    ],
  },
  {
    slug: "chef-garcon",
    name: "Chef Garçon",
    tagline: "A meal made with love is always remembered.",
    bio: "Born in Lyon, France, Jean-Luc Garçon trained in some of Europe's finest culinary schools before cooking in luxury hotels and private estates across France and Switzerland. His reputation for refined French cuisine eventually brought him to Canada, where Charles Fairchild persuaded him to become the family's personal chef five years ago. Warm, humorous, and endlessly passionate about cooking, he insists on perfection in the kitchen but is relaxed and quick to laugh outside it. Although his meals are worthy of five-star restaurants, he believes the greatest compliment is seeing a family gathered around one table.",
    grade: "Head Chef",
    isStaff: true,
    group: "Fairchild Estate",
    traits: ["Warm", "Patient", "Passionate", "Humorous"],
    portraitPlaceholder: "from-emerald-900 to-slate-800",
    portrait2d: "/assets/characters/2d/Garcon.png",
    relationships: [
      {
        role: "Employer",
        person: "Charles Fairchild",
        slug: "charles-fairchild",
        description:
          "Chef Garçon has enormous respect for Charles, who values the same discipline and professionalism he does. Charles trusts him completely and thanks him personally after formal dinners. However long the workday runs, dinner is always ready when Charles returns home.",
      },
      {
        role: "Shared Taste",
        person: "Victoria Fairchild",
        slug: "victoria-fairchild",
        description:
          "Victoria and Chef Garçon share an appreciation for fine art and beautiful presentation. She asks him to design elegant menus for charity galas, and together they discuss French culture, travel, and classic cuisine. He picks fresh herbs from her gardens: \"The best seasoning grows in the garden.\"",
      },
      {
        role: "Baking Partner",
        person: "Sloan Fairchild",
        slug: "sloan-fairchild",
        description:
          "Sloan enjoys helping Chef Garçon bake cookies and desserts. Unlike Oliver, she follows recipes exactly — he appreciates her patience and attention to detail and often lets her decorate pastries for special occasions. She sometimes asks him about France, hoping to visit one day.",
      },
      {
        role: "Greatest Challenge",
        person: "Oliver Fairchild",
        slug: "oliver-fairchild",
        description:
          "Oliver is both Chef Garçon's greatest challenge and greatest source of laughter, constantly sneaking into the kitchen for cookies. The chef always pretends to be surprised, and everyone knows he intentionally leaves a few where Oliver can find them. The two share a wonderful grandfather-grandson relationship.",
      },
      {
        role: "Perfect Timing",
        person: "Pierre Laurent",
        slug: "pierre-laurent",
        description:
          "Pierre manages the dining room; Chef Garçon commands the kitchen. Together they orchestrate every formal dinner with perfect timing. As the chef jokes: \"Pierre conducts the dining room. I conduct the orchestra in the kitchen.\"",
      },
      {
        role: "Close Friend",
        person: "Marian Bennett",
        slug: "marian-bennett",
        description:
          "One of Chef Garçon's closest friends in the household. She helps prepare dining rooms before important events; he sends her home with leftovers after large dinners and prepares little desserts just for her, which she happily volunteers to \"taste test.\" They tease each other like brother and sister.",
      },
      {
        role: "Keeps A Plate Warm",
        person: "Thomas McMurphy",
        slug: "thomas-mcmurphy",
        description:
          "Chef Garçon has deep respect for McMurphy's military service. Whenever McMurphy returns late from driving the family, a hot meal is quietly waiting in the kitchen. Neither man talks much about the past, but they understand one another without many words. \"Every soldier deserves a warm meal.\"",
      },
    ],
  },
  {
    slug: "marian-bennett",
    name: "Marian Bennett",
    tagline: "A little kindness can make a big house feel like a home.",
    bio: "Marian Bennett joined the Fairchild household at twenty-four, shortly after finishing college. Intelligent, cheerful, and endlessly energetic, she quickly became indispensable. Officially she assists Victoria and maintains the family's private living quarters, but her role extends far beyond housekeeping — she is the person everyone turns to when they need help, advice, or simply someone to brighten the day. Although she works in one of Edmonton's wealthiest homes, she never measures people by money or status, only by how they treat others. The mansion feels more alive whenever Marian is around.",
    grade: "Maid",
    isStaff: true,
    group: "Fairchild Estate",
    traits: ["Cheerful", "Funny", "Hard-working", "Optimistic"],
    portraitPlaceholder: "from-teal-900 to-slate-800",
    portrait2d: "/assets/characters/2d/Marian.png",
    relationships: [
      {
        role: "Works For",
        person: "Victoria Fairchild",
        slug: "victoria-fairchild",
        description:
          "Victoria treats Marian with tremendous respect. Rather than giving orders she asks, \"Could you help me with something?\" — she sees Marian as part of the household rather than simply an employee.",
      },
      {
        role: "Appreciated By",
        person: "Charles Fairchild",
        slug: "charles-fairchild",
        description:
          "Charles appreciates Marian's professionalism and thanks her personally after large dinners or charity events. He never walks past without saying: \"Good morning, Marian.\"",
      },
      {
        role: "Like A Younger Sister",
        person: "Sloan Fairchild",
        slug: "sloan-fairchild",
        description:
          "Sloan thinks of Marian as an older sister. When she needs advice she isn't ready to discuss with her parents, she goes to Marian — they talk about school, friends, fashion, and life, and Marian always listens without judgment. Over the years she has celebrated Sloan's birthdays, comforted her after disappointments, and helped her prepare for dances.",
      },
      {
        role: "Accomplice",
        person: "Oliver Fairchild",
        slug: "oliver-fairchild",
        description:
          "Oliver constantly finds reasons to visit the kitchen simply because Marian is there. She sneaks him an extra cookie, helps him finish school projects, and sometimes joins him in harmless practical jokes — provided Pierre never finds out.",
      },
      {
        role: "Mentor",
        person: "Pierre Laurent",
        slug: "pierre-laurent",
        description:
          "Pierre is like the grandfather Marian never had. He patiently teaches her household traditions, proper etiquette, and how every great home is built on respect rather than perfection.",
      },
      {
        role: "Taste Tester",
        person: "Chef Garçon",
        slug: "chef-garcon",
        description:
          "Chef Garçon constantly prepares little desserts just for Marian, and she happily volunteers to \"taste test\" every new recipe. They tease each other like brother and sister and share many laughs preparing the mansion for holidays.",
      },
      {
        role: "Keeping Score",
        person: "Thomas McMurphy",
        slug: "thomas-mcmurphy",
        description:
          "McMurphy rarely smiles, and Marian considers it her personal mission to change that. She jokes that she's keeping score — whenever he smiles, she announces: \"That's number seventeen this month.\" He simply shakes his head, but secretly enjoys her company. She calls him \"the toughest soft-hearted man I've ever met.\"",
      },
    ],
  },
  {
    slug: "thomas-mcmurphy",
    name: "Thomas McMurphy",
    tagline: "My job isn't to be noticed. My job is to make sure everyone else gets home safely.",
    bio: "Thomas Patrick McMurphy grew up in rural Alberta and enlisted in the Canadian Armed Forces out of high school, serving alongside allied forces overseas in reconnaissance, convoy protection, and close personal security. He rarely speaks about the war — \"That was another lifetime.\" After his honorable discharge he wanted a profession where his skills could protect rather than destroy, and became one of Western Canada's finest security professionals. Charles Fairchild hired him six years ago, and it quickly became clear he was far more than a chauffeur. Calm, watchful, and quietly kind, he believes prevention is always better than confrontation. He is always the first to arrive and the last to leave.",
    grade: "Chauffeur",
    isStaff: true,
    group: "Fairchild Estate",
    traits: ["Calm", "Disciplined", "Observant", "Loyal"],
    portraitPlaceholder: "from-slate-800 to-gray-900",
    portrait2d: "/assets/characters/2d/McMurphy.png",
    relationships: [
      {
        role: "Employer",
        person: "Charles Fairchild",
        slug: "charles-fairchild",
        description:
          "Charles trusts McMurphy with the two things that matter most: his family and his life. The two share quiet conversations during morning drives into downtown Edmonton, and Charles values his judgment almost as much as his own.",
      },
      {
        role: "Protects",
        person: "Victoria Fairchild",
        slug: "victoria-fairchild",
        description:
          "Victoria appreciates McMurphy's professionalism and kindness, and never worries when the children are with him. She often reminds him: \"You're part of this family too.\"",
      },
      {
        role: "Watches Over",
        person: "Sloan Fairchild",
        slug: "sloan-fairchild",
        description:
          "McMurphy has watched Sloan grow from childhood into a young woman. He is fiercely protective but never overbearing — if she's upset, he usually notices long before anyone else. Sometimes they simply sit quietly during the drive home. Neither needs to say much.",
      },
      {
        role: "Teaches",
        person: "Oliver Fairchild",
        slug: "oliver-fairchild",
        description:
          "Oliver absolutely idolizes McMurphy. Every Saturday morning the two play baseball, and he teaches Oliver throwing mechanics, sportsmanship, discipline, and confidence. He keeps a baseball glove in the trunk \"just in case Oliver wants to play,\" and has never missed one of his practices. To Oliver, McMurphy is a hero.",
      },
      {
        role: "Mutual Respect",
        person: "Pierre Laurent",
        slug: "pierre-laurent",
        description:
          "Pierre runs the mansion; McMurphy protects it. Every morning before breakfast they share coffee while reviewing the day's schedule. Neither needs many words.",
      },
      {
        role: "Feeds Him",
        person: "Chef Garçon",
        slug: "chef-garcon",
        description:
          "Chef Garçon always prepares an extra sandwich for McMurphy whenever he's driving long hours. McMurphy insists he doesn't need it. Chef Garçon ignores him.",
      },
      {
        role: "Makes Him Smile",
        person: "Marian Bennett",
        slug: "marian-bennett",
        description:
          "Marian enjoys teasing McMurphy because he's so serious, and occasionally succeeds in making him laugh. She calls him \"the toughest soft-hearted man I've ever met.\"",
      },
    ],
  },
];

export function getCharacterBySlug(slug: string): Character | undefined {
  return characters.find((c) => c.slug === slug);
}
