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
  grade: string;
  traits: string[];
  portraitPlaceholder: string; // CSS gradient used until real art arrives
  relationships: Relationship[];
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
    relationships: [
      {
        characterSlug: "shelley-morgan",
        characterName: "Shelley Morgan",
        description:
          "What begins as friendship slowly becomes something deeper for Minh. He keeps his feelings hidden, fearing rejection and not wanting to lose the friendship he values so much.",
      },
      {
        characterSlug: "willie-niou",
        characterName: "Willie Niou",
        description:
          "His closest friend. As fellow immigrant boys, they understand each other without lengthy explanations and share hockey, school life, and the experience of adapting to Canada.",
      },
      {
        characterSlug: "jack-armstrong",
        characterName: "Jack Armstrong",
        description:
          "Jack recognizes Minh's potential and pushes him beyond his comfort zone. Their friendship becomes one of the strongest in the series — Jack often acts like the older brother Minh never had.",
      },
      {
        characterSlug: "june-nakamura",
        characterName: "June Nakamura",
        description:
          "Minh sees his own struggles reflected in June. Both are newcomers trying to find their place, and they share a quiet bond built on mutual understanding.",
      },
      {
        characterSlug: "tara-moon",
        characterName: "Tara Moon",
        description:
          "Tara teases Minh endlessly — not out of cruelty, but because his reactions are funny. She frequently tries to help him with Shelley, though her matchmaking rarely goes according to plan.",
      },
      {
        characterSlug: "sloan-fairchild",
        characterName: "Sloan Fairchild",
        description:
          "Sloan initially views Minh as socially insignificant. Over time, his emotional authenticity and genuine connections frustrate her in ways she struggles to understand.",
      },
      {
        characterSlug: "blake-montgomery",
        characterName: "Blake Montgomery",
        description:
          "Minh's greatest rival. Blake places himself directly between Minh and Shelley, possessing everything Minh lacks — confidence, popularity, and charm. Their conflict drives much of the series.",
      },
    ],
  },
  {
    slug: "shelley-morgan",
    name: "Shelley Morgan",
    tagline: "The one who makes everyone feel welcome.",
    bio: "Shelley Morgan is the emotional center of Mackenzie Middle. Kind, intelligent, and genuinely empathetic, she has a natural gift for making people feel seen and valued. People trust Shelley — students seek her advice because she listens without judgment and sees the good in people even when others don't. Though she puts others first, she is slowly learning to trust her own instincts.",
    grade: "Grade 8",
    traits: ["Kind-hearted", "Loyal", "Compassionate", "Intelligent", "Patient"],
    portraitPlaceholder: "from-pink-900 to-slate-800",
    relationships: [
      {
        characterSlug: "minh-le",
        characterName: "Minh Le",
        description:
          "Shelley's simple act of kindness when Minh arrives creates a deep friendship. She admires his honesty and loyalty, unaware at first that his feelings for her go beyond friendship.",
      },
      {
        characterSlug: "tara-moon",
        characterName: "Tara Moon",
        description:
          "Her closest friend. Where Shelley is thoughtful, Tara is impulsive. They balance each other perfectly — Shelley helps Tara slow down, while Tara helps Shelley take chances.",
      },
      {
        characterSlug: "june-nakamura",
        characterName: "June Nakamura",
        description:
          "Shelley immediately recognizes June's struggles and makes a special effort to include her. Their friendship is built on mutual respect and kindness, and Shelley helps June gain confidence.",
      },
      {
        characterSlug: "willie-niou",
        characterName: "Willie Niou",
        description:
          "Shelley enjoys Willie's company and appreciates his intelligence and honesty. She can always count on him to be straightforward — sometimes brutally so.",
      },
      {
        characterSlug: "jack-armstrong",
        characterName: "Jack Armstrong",
        description:
          "A comfortable friendship built on trust and familiarity. Many classmates assume they would make a good couple. Neither sees it that way.",
      },
      {
        characterSlug: "sloan-fairchild",
        characterName: "Sloan Fairchild",
        description:
          "Sloan views Shelley as competition — not because Shelley seeks popularity, but because she attracts people naturally through kindness that status cannot buy. Shelley tries to be friendly, but gradually realizes Sloan's intentions aren't always sincere.",
      },
      {
        characterSlug: "blake-montgomery",
        characterName: "Blake Montgomery",
        description:
          "Blake's interest in Shelley becomes a major conflict. Shelley is initially flattered but begins to question his motives — does he genuinely care, or is she simply another challenge?",
      },
    ],
  },
  {
    slug: "willie-niou",
    name: "Willie Niou",
    tagline: "The steadiest friend you could ever have.",
    bio: "Willie Niou is Minh's best friend and one of the most dependable students at Mackenzie Middle. Originally from Taiwan, Willie understands many of the challenges Minh faces as a newcomer. Tall, skinny, and socially awkward, he rarely notices the drama unfolding around him — he's usually too busy thinking about hockey or school.",
    grade: "Grade 8",
    traits: ["Loyal", "Intelligent", "Honest", "Reliable", "Calm"],
    portraitPlaceholder: "from-cyan-900 to-slate-800",
    relationships: [
      {
        characterSlug: "minh-le",
        characterName: "Minh Le",
        description:
          "His closest friend. Both understand what it feels like to be new, to speak English as a second language, and to feel different. If Minh is the emotional heart of the series, Willie is the steady foundation beneath him.",
      },
      {
        characterSlug: "shelley-morgan",
        characterName: "Shelley Morgan",
        description:
          "Respects Shelley and appreciates her kindness toward Minh. Unlike many boys at school, Willie never develops a crush on her — to him she is simply a good friend, and she appreciates that.",
      },
      {
        characterSlug: "tara-moon",
        characterName: "Tara Moon",
        description:
          "Tara's favorite target for teasing. His serious nature makes him easy to set up. Despite this, Tara secretly enjoys his company because he never pretends to be someone he's not.",
      },
      {
        characterSlug: "june-nakamura",
        characterName: "June Nakamura",
        description:
          "They share similar backgrounds as immigrants and academically focused students. Their friendship develops slowly and naturally through mutual understanding.",
      },
      {
        characterSlug: "jack-armstrong",
        characterName: "Jack Armstrong",
        description:
          "Jack constantly tries to pull Willie out of his comfort zone. Willie usually resists — then somehow ends up joining anyway. Despite their differences, they become good friends.",
      },
      {
        characterSlug: "sloan-fairchild",
        characterName: "Sloan Fairchild",
        description:
          "Sloan considers Willie socially invisible, and Willie barely notices. His complete indifference to her wealth and status is one of the things that frustrates her most.",
      },
      {
        characterSlug: "blake-montgomery",
        characterName: "Blake Montgomery",
        description:
          "Willie quickly recognizes Blake's questionable intentions and becomes one of the first people to warn Minh about him. They represent completely opposite approaches to life.",
      },
    ],
  },
  {
    slug: "tara-moon",
    name: "Tara Moon",
    tagline: "If we're going to get in trouble, we might as well make it a good story.",
    bio: "Tara Moon is the spark plug of Mackenzie Middle. Outgoing, mischievous, and fearless, she has a gift for turning ordinary days into memorable adventures. She walks into a room and immediately changes its energy. Beneath her playful personality is a deeply loyal friend who would do almost anything for the people she cares about.",
    grade: "Grade 8",
    traits: ["Confident", "Loyal", "Courageous", "Funny", "Impulsive"],
    portraitPlaceholder: "from-orange-900 to-slate-800",
    relationships: [
      {
        characterSlug: "shelley-morgan",
        characterName: "Shelley Morgan",
        description:
          "Her best friend — inseparable for years. Shelley helps Tara slow down and think; Tara helps Shelley take chances and enjoy life. Together they form one of the strongest friendships in the series.",
      },
      {
        characterSlug: "minh-le",
        characterName: "Minh Le",
        description:
          "Tara finds Minh endlessly fascinating. She quickly realizes he likes Shelley and spends much of the series trying to help him — though her matchmaking attempts usually create chaos instead.",
      },
      {
        characterSlug: "willie-niou",
        characterName: "Willie Niou",
        description:
          "Willie is one of Tara's favorite people to tease. She loves watching him react to the unexpected. Beneath the teasing, she genuinely cares about him and often acts like a big sister.",
      },
      {
        characterSlug: "june-nakamura",
        characterName: "June Nakamura",
        description:
          "When June arrives, Tara immediately adopts her into the group. She recognizes June's struggle and makes it her personal mission to help — introducing her to friends and encouraging her to speak up.",
      },
      {
        characterSlug: "jack-armstrong",
        characterName: "Jack Armstrong",
        description:
          "One of her closest friends, matching her energy and enthusiasm. For years Tara quietly develops deeper feelings for Jack, hiding them behind jokes and teasing. Watching him become interested in June is one of the hardest things she faces.",
      },
      {
        characterSlug: "sloan-fairchild",
        characterName: "Sloan Fairchild",
        description:
          "They clash almost immediately. Sloan expects admiration — Tara offers sarcasm. Their rivalry produces some of the sharpest and funniest exchanges in the series.",
      },
      {
        characterSlug: "blake-montgomery",
        characterName: "Blake Montgomery",
        description:
          "Tara distrusts Blake from the start, seeing through his charm quickly. She views people as friends; Blake views people as games. Blake occasionally tries to win her over, but Tara never makes it easy.",
      },
    ],
  },
  {
    slug: "jack-armstrong",
    name: "Jack Armstrong",
    tagline: "Come on. What's the worst that could happen?",
    bio: "Jack Armstrong is the natural leader of the boys' group at Mackenzie Middle. Athletic, confident, and genuinely outgoing, he has a way of making people feel included and pushing them beyond their comfort zone. He is the engine that keeps the group moving forward — always encouraging friends to try new experiences, take chances, and get out there and live.",
    grade: "Grade 8",
    traits: ["Courageous", "Loyal", "Optimistic", "Protective", "Natural leader"],
    portraitPlaceholder: "from-green-900 to-slate-800",
    relationships: [
      {
        characterSlug: "minh-le",
        characterName: "Minh Le",
        description:
          "Jack quickly takes an interest in Minh after he arrives. He sees potential where others see a shy newcomer and becomes one of the first people to push Minh beyond his comfort zone. Their friendship is one of the strongest in the series.",
      },
      {
        characterSlug: "willie-niou",
        characterName: "Willie Niou",
        description:
          "Jack enjoys challenging Willie, believing he spends too much time thinking and not enough time living. The contrast between Jack's spontaneity and Willie's caution creates many humorous moments — and a genuine friendship.",
      },
      {
        characterSlug: "shelley-morgan",
        characterName: "Shelley Morgan",
        description:
          "A comfortable friendship built on trust and familiarity. Many classmates assume they would make a good couple. Neither sees the other romantically.",
      },
      {
        characterSlug: "tara-moon",
        characterName: "Tara Moon",
        description:
          "One of his closest friends, sharing similar energy and enthusiasm. What Jack doesn't realize for a long time is that Tara's feelings go beyond friendship. His inability to see this creates one of the most bittersweet storylines in the series.",
      },
      {
        characterSlug: "june-nakamura",
        characterName: "June Nakamura",
        description:
          "June fascinates Jack. Her quiet, thoughtful nature draws him in. For perhaps the first time, Jack finds himself slowing down and listening. Their connection becomes one of the most important emotional arcs in the series.",
      },
      {
        characterSlug: "sloan-fairchild",
        characterName: "Sloan Fairchild",
        description:
          "Sloan assumes Jack should be interested in her. He isn't. His lack of interest frustrates Sloan and fuels her rivalry with June.",
      },
      {
        characterSlug: "blake-montgomery",
        characterName: "Blake Montgomery",
        description:
          "His natural rival. Both are popular, athletic, and confident — but Jack values friendship while Blake values winning. As Blake targets those Jack cares about, their rivalry becomes a central conflict.",
      },
    ],
  },
  {
    slug: "june-nakamura",
    name: "June Nakamura",
    tagline: "You don't have to be loud to be heard.",
    bio: "June Nakamura is the quiet emotional center of Mackenzie Middle's girls' group. A recent immigrant from Japan, she is intelligent, polite, and deeply observant — she speaks carefully, thinks before she acts, and often notices emotional details that others miss. Though she appears shy, June has a strong inner resolve and a quiet determination to succeed.",
    grade: "Grade 8",
    traits: ["Thoughtful", "Emotionally perceptive", "Intelligent", "Patient", "Loyal"],
    portraitPlaceholder: "from-purple-900 to-slate-800",
    relationships: [
      {
        characterSlug: "minh-le",
        characterName: "Minh Le",
        description:
          "June and Minh share a quiet emotional connection as fellow newcomers. Both understand what it feels like to be new and socially invisible. Their bond grows through small moments of mutual recognition.",
      },
      {
        characterSlug: "shelley-morgan",
        characterName: "Shelley Morgan",
        description:
          "Shelley is one of the first students to make June feel included. Her kindness helps June feel safe in an unfamiliar environment, and their friendship becomes supportive, gentle, and deeply trusting.",
      },
      {
        characterSlug: "tara-moon",
        characterName: "Tara Moon",
        description:
          "Opposites in almost every way, but Tara's friendliness and persistence slowly break through June's shyness. Tara becomes one of the people who helps June feel like she truly belongs.",
      },
      {
        characterSlug: "jack-armstrong",
        characterName: "Jack Armstrong",
        description:
          "Jack is drawn to June's quiet depth and emotional intelligence. June is unsure how to interpret his outgoing personality. Their connection develops slowly and awkwardly through small interactions — one of the central emotional threads of the series.",
      },
      {
        characterSlug: "willie-niou",
        characterName: "Willie Niou",
        description:
          "A natural understanding as fellow immigrants and academically focused students. Their friendship is calm, respectful, and low-pressure — built on shared experience.",
      },
      {
        characterSlug: "sloan-fairchild",
        characterName: "Sloan Fairchild",
        description:
          "Sloan initially dismisses June as socially insignificant. But June's quiet confidence and Jack's interest in her slowly challenge Sloan's assumptions, creating underlying tension between them.",
      },
      {
        characterSlug: "blake-montgomery",
        characterName: "Blake Montgomery",
        description:
          "Blake sees June as an easy target for social manipulation. However, June is more observant than she appears and gradually recognizes his patterns — even if she doesn't confront him directly.",
      },
    ],
  },
  {
    slug: "blake-montgomery",
    name: "Blake Montgomery",
    tagline: "Everyone wants to be his friend. Not everyone should.",
    bio: "Blake Montgomery is one of the most popular students at Mackenzie Middle. Handsome, athletic, charismatic, and wealthy, he rarely struggles to get what he wants. Unlike Jack, who uses charm to build connections, Blake uses it strategically. He plays social chess rather than physical games, and his rivalry with Minh becomes one of the central conflicts of the series.",
    grade: "Grade 8",
    traits: ["Charismatic", "Confident", "Quick-witted", "Manipulative", "Competitive"],
    portraitPlaceholder: "from-yellow-900 to-slate-800",
    relationships: [
      {
        characterSlug: "shelley-morgan",
        characterName: "Shelley Morgan",
        description:
          "Blake develops an interest in Shelley — but whether he genuinely likes her or she's simply the next challenge, nobody knows. Not even Shelley. His pursuit puts him on a collision course with Minh.",
      },
      {
        characterSlug: "tara-moon",
        characterName: "Tara Moon",
        description:
          "Blake finds Tara entertaining — unlike most girls, she refuses to be impressed by him, which only makes him more determined. Tara quickly realizes she should not trust him.",
      },
      {
        characterSlug: "june-nakamura",
        characterName: "June Nakamura",
        description:
          "June's quiet nature intrigues Blake. He views her interest in Jack as an opportunity to create trouble. Whether his feelings are real remains unclear.",
      },
      {
        characterSlug: "jack-armstrong",
        characterName: "Jack Armstrong",
        description:
          "His central rival. Jack values friendship; Blake values winning. Jack builds relationships; Blake tests them. As Blake becomes involved with those Jack cares about, their rivalry escalates into one of the series' defining conflicts.",
      },
      {
        characterSlug: "sloan-fairchild",
        characterName: "Sloan Fairchild",
        description:
          "Not romantic, but strategic. Both understand influence and control. Together they form an unofficial alliance — students begin calling them the king and queen of Mackenzie Middle.",
      },
      {
        characterSlug: "minh-le",
        characterName: "Minh Le",
        description:
          "Minh is Blake's greatest obstacle. Where Blake has confidence, popularity, and charm, Minh has authenticity and genuine connection. Their rivalry reveals that the qualities making Blake successful aren't those that build lasting relationships.",
      },
    ],
  },
  {
    slug: "sloan-fairchild",
    name: "Sloan Fairchild",
    tagline: "If people are going to talk, you might as well give them something worth talking about.",
    bio: "Sloan Fairchild is the queen bee of Mackenzie Middle. Wealthy, confident, and fully aware of the attention she commands, Sloan moves through the school like she owns it. While other students worry about fitting in, Sloan decides who fits in. Together with Blake, she forms the dominant social force — and the central opposition to Minh and his friends.",
    grade: "Grade 8",
    traits: ["Confident", "Strategic", "Charismatic", "Status-conscious", "Prideful"],
    portraitPlaceholder: "from-fuchsia-900 to-slate-800",
    relationships: [
      {
        characterSlug: "blake-montgomery",
        characterName: "Blake Montgomery",
        description:
          "Not romantic — strategic. Both understand influence, attention, and control. Together they form an unofficial alliance, becoming the dominant social force at Mackenzie Middle. Students call them the king and queen of the school.",
      },
      {
        characterSlug: "minh-le",
        characterName: "Minh Le",
        description:
          "Sloan initially views Minh as socially insignificant. But his emotional authenticity and quiet resistance to social pressure become harder to dismiss — and more frustrating to her.",
      },
      {
        characterSlug: "shelley-morgan",
        characterName: "Shelley Morgan",
        description:
          "Sloan sees Shelley as a threat — not because Shelley competes, but because she doesn't need to. Shelley attracts people through kindness that wealth and status cannot replicate.",
      },
      {
        characterSlug: "jack-armstrong",
        characterName: "Jack Armstrong",
        description:
          "Sloan expects Jack to be interested in her. He isn't. His indifference is one of her first real social challenges — she interprets it not as rejection but as something to overcome.",
      },
      {
        characterSlug: "june-nakamura",
        characterName: "June Nakamura",
        description:
          "June doesn't challenge Sloan socially — she simply exists as someone Jack genuinely connects with, making her a quiet but significant rival in Sloan's eyes.",
      },
      {
        characterSlug: "tara-moon",
        characterName: "Tara Moon",
        description:
          "Tara is Sloan's opposite in every way. Tara openly resists Sloan's dominance with humor and sarcasm, deflating her authority and creating an ongoing rivalry of sharp exchanges.",
      },
      {
        characterSlug: "willie-niou",
        characterName: "Willie Niou",
        description:
          "Willie is completely invisible to Sloan's social world. His total lack of interest in status and popularity is confusing to her — she is used to influencing people, and Willie simply doesn't participate.",
      },
    ],
  },
  {
    slug: "ms-elizabeth-hand",
    name: "Ms. Elizabeth Hand",
    tagline: "Students learn best when they feel safe, seen, and respected.",
    bio: "Ms. Elizabeth Hand is the homeroom teacher at Mackenzie Middle. Widely respected for her kindness and emotional intelligence, she has an uncanny ability to understand what students are going through even when they cannot explain it themselves. She serves as a stabilizing adult presence, guiding without controlling and listening without judging.",
    grade: "Teacher",
    traits: ["Kind", "Patient", "Emotionally intelligent", "Perceptive", "Fair"],
    portraitPlaceholder: "from-teal-900 to-slate-800",
    relationships: [
      {
        characterSlug: "minh-le",
        characterName: "Minh Le",
        description:
          "Ms. Hand knows Minh struggles with confidence and belonging. She watches over him quietly, allowing him room to grow while providing a safe adult presence when needed.",
      },
      {
        characterSlug: "shelley-morgan",
        characterName: "Shelley Morgan",
        description:
          "She recognizes that Shelley often carries emotional responsibility for others, and quietly guides her toward understanding her own needs alongside those of her friends.",
      },
      {
        characterSlug: "willie-niou",
        characterName: "Willie Niou",
        description:
          "Ms. Hand appreciates Willie's intelligence and knows his social awkwardness isn't a fault. She gives him space while gently encouraging him to engage more with the world around him.",
      },
      {
        characterSlug: "tara-moon",
        characterName: "Tara Moon",
        description:
          "She understands that Tara hides deeper feelings behind humor, and quietly watches for the moments when Tara needs someone to see past the jokes.",
      },
      {
        characterSlug: "jack-armstrong",
        characterName: "Jack Armstrong",
        description:
          "She sees the leadership pressure Jack carries and knows his confidence masks vulnerability. She gives him room to lead while remaining available when the weight becomes too much.",
      },
      {
        characterSlug: "june-nakamura",
        characterName: "June Nakamura",
        description:
          "Ms. Hand gently supports June's adjustment to a new country and new school, encouraging her without pressure and making her classroom a place June feels safe.",
      },
      {
        characterSlug: "sloan-fairchild",
        characterName: "Sloan Fairchild",
        description:
          "Ms. Hand sees the vulnerability Sloan hides behind status and doesn't judge her for it. She monitors the social dynamics Sloan drives without rushing to intervene.",
      },
      {
        characterSlug: "blake-montgomery",
        characterName: "Blake Montgomery",
        description:
          "Ms. Hand understands that Blake's social influence operates in ways he doesn't always recognize himself. She watches closely, sensing conflicts before they fully develop.",
      },
      {
        characterSlug: "principal-charles-sterling",
        characterName: "Principal Charles Sterling",
        description:
          "Ms. Hand respects Principal Sterling but differs from him in philosophy. Where he emphasizes discipline and order, she emphasizes understanding and growth.",
      },
    ],
  },
  {
    slug: "mr-ron-little",
    name: "Mr. Ron Little",
    tagline: "You don't have to be the best player. You just have to be part of the team.",
    bio: "Mr. Ron Little is the Physical Education teacher at Mackenzie Middle, teaching hockey, rugby, track and field, and winter cross-country skiing. Often underestimated by his cheerful appearance, students quickly discover he is surprisingly fast, energetic, and deeply knowledgeable about sports. He believes physical activity is about participation, effort, and teamwork — not performance.",
    grade: "Teacher",
    traits: ["Encouraging", "Fair", "Energetic", "Team-focused", "Patient"],
    portraitPlaceholder: "from-lime-900 to-slate-800",
    relationships: [
      {
        characterSlug: "minh-le",
        characterName: "Minh Le",
        description:
          "Encourages Minh in hockey and helps build his confidence on the ice. Mr. Little understands that PE class is not just physical — it is also social, and sport is a language Minh already speaks.",
      },
      {
        characterSlug: "willie-niou",
        characterName: "Willie Niou",
        description:
          "Supports Willie in hockey alongside Minh, helping both boys connect with Canadian culture through winter sports. Recognizes Willie's steady reliability as a team player.",
      },
      {
        characterSlug: "jack-armstrong",
        characterName: "Jack Armstrong",
        description:
          "Recognizes Jack's natural athletic talent and sometimes challenges him more than other students, pushing him to develop leadership alongside his physical skills.",
      },
      {
        characterSlug: "tara-moon",
        characterName: "Tara Moon",
        description:
          "Frequently warns Tara about safety — but secretly appreciates her energy and enthusiasm in class more than he lets on.",
      },
      {
        characterSlug: "shelley-morgan",
        characterName: "Shelley Morgan",
        description:
          "Respects Shelley's effort and teamwork approach in PE. She exemplifies what he values most: participation and contributing to the group.",
      },
      {
        characterSlug: "june-nakamura",
        characterName: "June Nakamura",
        description:
          "Encourages June gently and without pressure, giving her space to participate at her own pace. He never singles her out or embarrasses her in front of peers.",
      },
      {
        characterSlug: "sloan-fairchild",
        characterName: "Sloan Fairchild",
        description:
          "Notices Sloan's frequent lack of participation but avoids direct confrontation, watching for a way to engage her that doesn't clash with her pride.",
      },
      {
        characterSlug: "blake-montgomery",
        characterName: "Blake Montgomery",
        description:
          "Keeps a close eye on Blake's competitive attitude, observing how it affects team dynamics and ensuring it doesn't cross into harmful territory.",
      },
      {
        characterSlug: "principal-charles-sterling",
        characterName: "Principal Charles Sterling",
        description:
          "Values Principal Sterling's structure and discipline while representing a more relaxed, active philosophy within the school. The two balance each other as different pillars of student development.",
      },
    ],
  },
  {
    slug: "principal-charles-sterling",
    name: "Principal Charles Sterling",
    tagline: "Rules exist for a reason.",
    bio: "Principal Charles Sterling is the strict, disciplined head of Mackenzie Middle. Known for his firm expectations and zero-tolerance approach to lateness and disruptive behavior, his presence alone is enough to quiet entire hallways. He is not cruel — but he is uncompromising, and he represents order, discipline, and consequence in the school system.",
    grade: "Principal",
    traits: ["Disciplined", "Organized", "Firm", "Commands respect", "Fair"],
    portraitPlaceholder: "from-zinc-900 to-slate-800",
    relationships: [
      {
        characterSlug: "minh-le",
        characterName: "Minh Le",
        description:
          "Generally fair with Minh, expecting full compliance with school rules. He pays attention to Minh's growing confidence over the course of the series.",
      },
      {
        characterSlug: "willie-niou",
        characterName: "Willie Niou",
        description:
          "Generally fair with Willie and appreciates his academic seriousness. Expects full compliance and has little cause for disciplinary concern.",
      },
      {
        characterSlug: "jack-armstrong",
        characterName: "Jack Armstrong",
        description:
          "Watches Jack closely due to his leadership influence and athletic involvement. Respects his positive role in school life while monitoring how that influence is used.",
      },
      {
        characterSlug: "tara-moon",
        characterName: "Tara Moon",
        description:
          "Tara is one of his most frequent concerns. Her hallway behavior and impulsiveness lead to regular warnings. He is firm but not unkind toward her.",
      },
      {
        characterSlug: "shelley-morgan",
        characterName: "Shelley Morgan",
        description:
          "Respects Shelley and her positive presence in the school. Expects her to stay focused on academics and student life.",
      },
      {
        characterSlug: "june-nakamura",
        characterName: "June Nakamura",
        description:
          "Treats June gently but formally, aware of her immigrant background and the adjustment it requires. He does not single her out negatively.",
      },
      {
        characterSlug: "sloan-fairchild",
        characterName: "Sloan Fairchild",
        description:
          "Maintains professional distance while staying aware of Sloan's social influence in the school. He is less interested in popularity and more focused on order.",
      },
      {
        characterSlug: "blake-montgomery",
        characterName: "Blake Montgomery",
        description:
          "Monitors Blake closely due to his pattern of social manipulation and its effects on other students. Blake is one of his most watched figures.",
      },
      {
        characterSlug: "ms-elizabeth-hand",
        characterName: "Ms. Elizabeth Hand",
        description:
          "Respects Ms. Hand's emotional and student-centered approach, though he sometimes considers it too lenient. Together they represent two distinct philosophies of education within Mackenzie Middle.",
      },
      {
        characterSlug: "mr-ron-little",
        characterName: "Mr. Ron Little",
        description:
          "Values Mr. Little's energy and positive influence on students, but occasionally considers him too relaxed in his approach to structure and discipline.",
      },
    ],
  },
];

export function getCharacterBySlug(slug: string): Character | undefined {
  return characters.find((c) => c.slug === slug);
}
