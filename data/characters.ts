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
    portrait2d: "/assets/characters/2d/Minh.webp",
    relationships: [
      {
        role: "Best Friend",
        person: "Willie Niou",
        slug: "willie-niou",
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
        person: "Tara Moon",
        slug: "tara-moon",
        description:
          "Tara teases Minh endlessly — not out of cruelty, but because his reactions are funny. She frequently tries to help him with Shelley, though her matchmaking rarely goes according to plan.",
      },
      {
        role: "Social Rival",
        person: "Sloan Fairchild",
        slug: "sloan-fairchild",
        description:
          "Sloan initially views Minh as socially insignificant. Over time, his emotional authenticity and quiet resistance to social pressure become harder to dismiss — and more frustrating to her.",
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
    relationships: [
      {
        role: "Best Friend",
        person: "Tara Moon",
        slug: "tara-moon",
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
        person: "Willie Niou",
        slug: "willie-niou",
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
        role: "Social Rival",
        person: "Sloan Fairchild",
        slug: "sloan-fairchild",
        description:
          "Sloan views Shelley as competition — not because Shelley seeks popularity, but because she attracts people naturally through kindness that status cannot buy. Shelley tries to be friendly, but gradually realizes Sloan's intentions aren't always sincere.",
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
    slug: "willie-niou",
    name: "Willie Niou",
    tagline: "The brain of the group.",
    bio: "A Taiwanese immigrant and Minh's closest friend. Tall, skinny, and highly intelligent, Willie is somewhat socially awkward and has very little interest in traditional popularity or dating. He would much rather spend his time playing hockey, reading, or discussing unusual facts. His straightforward honesty often creates unintentionally funny situations.",
    grade: "Grade 8",
    isStaff: false,
    traits: ["Intelligent", "Honest", "Awkward", "Straightforward"],
    portraitPlaceholder: "from-indigo-900 to-slate-800",
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
        person: "Tara Moon",
        slug: "tara-moon",
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
        role: "Invisible To",
        person: "Sloan Fairchild",
        slug: "sloan-fairchild",
        description:
          "Sloan considers Willie socially invisible, and Willie barely notices. His complete indifference to her wealth and status is one of the things that frustrates her most.",
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
        person: "Tara Moon",
        slug: "tara-moon",
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
        person: "Willie Niou",
        slug: "willie-niou",
        description:
          "A natural understanding as fellow immigrants and academically focused students. Their friendship is calm, respectful, and low-pressure — built on shared experience.",
      },
      {
        role: "Quiet Rival",
        person: "Sloan Fairchild",
        slug: "sloan-fairchild",
        description:
          "Sloan initially dismisses June as socially insignificant. But June's quiet confidence and Jack's interest in her slowly challenge Sloan's assumptions, creating underlying tension between them.",
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
        person: "Willie Niou",
        slug: "willie-niou",
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
        person: "Tara Moon",
        slug: "tara-moon",
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
        role: "Uninterested In",
        person: "Sloan Fairchild",
        slug: "sloan-fairchild",
        description:
          "Sloan assumes Jack should be interested in her. He isn't. His lack of interest frustrates Sloan and fuels her rivalry with June.",
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
    slug: "tara-moon",
    name: "Tara Moon",
    tagline: "The spark plug of the group.",
    bio: "Outgoing, mischievous, energetic, and always laughing, Tara Moon has a natural talent for getting herself and her friends into harmless trouble. She acts as the primary driving force behind the group adventures on the girls' side. Despite her overt confidence, she secretly harbors romantic feelings for Jack Armstrong — feelings she hides behind jokes and teasing.",
    grade: "Grade 8",
    isStaff: false,
    traits: ["Energetic", "Mischievous", "Outgoing", "Playful"],
    portraitPlaceholder: "from-yellow-900 to-slate-800",
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
        person: "Willie Niou",
        slug: "willie-niou",
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
        role: "Rivals With",
        person: "Sloan Fairchild",
        slug: "sloan-fairchild",
        description:
          "They clash almost immediately. Sloan expects admiration — Tara offers sarcasm. Their rivalry produces some of the sharpest and funniest exchanges in the series.",
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
        person: "Tara Moon",
        slug: "tara-moon",
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
        role: "Strategic Alliance",
        person: "Sloan Fairchild",
        slug: "sloan-fairchild",
        description:
          "Not romantic, but strategic. Both understand influence and control. Together they form an unofficial alliance — students begin calling them the king and queen of Mackenzie Middle.",
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
    tagline: "If people are going to talk, give them something worth talking about.",
    bio: "Sloan Fairchild is the queen bee of Mackenzie Middle. Wealthy, confident, and fully aware of the attention she commands, Sloan moves through the school like she owns it. While other students worry about fitting in, Sloan decides who fits in. Together with Blake, she forms the dominant social force — and the central opposition to Minh and his friends.",
    grade: "Grade 8",
    isStaff: false,
    traits: ["Confident", "Strategic", "Charismatic", "Status-conscious"],
    portraitPlaceholder: "from-fuchsia-900 to-slate-800",
    relationships: [
      {
        role: "Strategic Alliance",
        person: "Blake Montgomery",
        slug: "blake-montgomery",
        description:
          "Not romantic — strategic. Both understand influence, attention, and control. Together they form an unofficial alliance, becoming the dominant social force at Mackenzie Middle. Students call them the king and queen of the school.",
      },
      {
        role: "Dismisses",
        person: "Minh Le",
        slug: "minh-le",
        description:
          "Sloan initially views Minh as socially insignificant. But his emotional authenticity and quiet resistance to social pressure become harder to dismiss — and more frustrating to her.",
      },
      {
        role: "Competition",
        person: "Shelley Morgan",
        slug: "shelley-morgan",
        description:
          "Sloan sees Shelley as a threat — not because Shelley competes, but because she doesn't need to. Shelley attracts people through kindness that wealth and status cannot replicate.",
      },
      {
        role: "Pursues",
        person: "Jack Armstrong",
        slug: "jack-armstrong",
        description:
          "Sloan expects Jack to be interested in her. He isn't. His indifference is one of her first real social challenges — she interprets it not as rejection but as something to overcome.",
      },
      {
        role: "Quiet Rival",
        person: "June Nakamura",
        slug: "june-nakamura",
        description:
          "June doesn't challenge Sloan socially — she simply exists as someone Jack genuinely connects with, making her a quiet but significant rival in Sloan's eyes.",
      },
      {
        role: "Rivals With",
        person: "Tara Moon",
        slug: "tara-moon",
        description:
          "Tara is Sloan's opposite in every way. Tara openly resists Sloan's dominance with humor and sarcasm, deflating her authority and creating an ongoing rivalry of sharp exchanges.",
      },
      {
        role: "Invisible To",
        person: "Willie Niou",
        slug: "willie-niou",
        description:
          "Willie is completely invisible to Sloan's social world. His total lack of interest in status and popularity is confusing to her — she is used to influencing people, and Willie simply doesn't participate.",
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
        person: "Willie Niou",
        slug: "willie-niou",
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
        person: "Tara Moon",
        slug: "tara-moon",
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
        person: "Willie Niou",
        slug: "willie-niou",
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
        person: "Tara Moon",
        slug: "tara-moon",
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
        person: "Tara Moon",
        slug: "tara-moon",
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
];

export function getCharacterBySlug(slug: string): Character | undefined {
  return characters.find((c) => c.slug === slug);
}
