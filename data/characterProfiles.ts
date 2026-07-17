// Complete character profiles, transcribed from "The Fairchilds" character
// document. The character page shows a short bio and brief relationships;
// these long-form profiles are revealed by the "Complete Profile" button
// (see components/CharacterFullProfile.tsx).
//
// Only characters with an entry here show the button — everyone else simply
// renders the standard page. Keyed by the slug in data/characters.ts.

export interface ProfileSection {
  heading: string;
  // Rendered as body copy, in order, above any bullets.
  paragraphs?: string[];
  bullets?: string[];
  // Pulled out and styled as a callout beneath the section.
  quote?: string;
}

export interface CharacterProfile {
  // Short key/value pairs shown as a summary table at the top of the profile.
  facts: { label: string; value: string }[];
  sections: ProfileSection[];
}

export const characterProfiles: Record<string, CharacterProfile> = {
  "charles-fairchild": {
    facts: [
      { label: "Age", value: "46" },
      { label: "Occupation", value: "President and CEO, Fairchild Holdings Ltd." },
      { label: "Industries", value: "Oil & gas, commercial real estate, property development" },
      { label: "Residence", value: "Fairchild Estate, Edmonton, Alberta" },
    ],
    sections: [
      {
        heading: "Biography",
        paragraphs: [
          "Charles Fairchild was born into one of Edmonton's most successful business families. His grandfather founded the Fairchild fortune through land investments in Alberta, and his father expanded the family holdings into oil and gas during the province's energy boom.",
          "Rather than simply living off his inheritance, Charles chose to continue building the family legacy. Under his leadership, Fairchild Holdings grew into one of Alberta's most respected privately owned companies, with investments in energy, commercial real estate, and office developments throughout Western Canada.",
          "Despite his success, Charles never forgot that wealth carries responsibility. He believes a family's reputation is built not only through business success, but through honesty, generosity, and treating people with respect.",
        ],
      },
      {
        heading: "Daily Routine",
        paragraphs: [
          "6:00 AM — Up before sunrise. Coffee. Reads the business section of the newspaper. Reviews reports over breakfast.",
          "7:00 AM — McMurphy arrives, and they leave together for downtown Edmonton. The drive is quiet. Sometimes they discuss the day's schedule. Sometimes neither says a word.",
          "6:00 PM — Charles returns home. No matter how busy the day has been, when he walks through the front door, business stays outside. Dinner is family time.",
        ],
      },
      {
        heading: "Personality",
        bullets: [
          "Calm under pressure",
          "Honest",
          "Thoughtful",
          "Disciplined",
          "Patient",
          "Humble despite his wealth",
          "Excellent listener",
          "Quiet confidence",
        ],
        paragraphs: ["Charles rarely raises his voice. When he does, everyone listens."],
      },
      {
        heading: "Relationship with Oliver",
        paragraphs: [
          "Charles loves spending time with Oliver. Whenever possible he attends baseball games, school events, and hockey practices. If he misses one because of business, he makes every effort to be at the next.",
          "Oliver doesn't admire his father's money. He admires his father's integrity.",
        ],
      },
      {
        heading: "Relationship with Sloan",
        paragraphs: [
          "Sloan can always talk to her father. Charles never interrupts — he listens first, then offers advice.",
          "He encourages Sloan to become her own person rather than simply following family expectations.",
        ],
      },
      {
        heading: "Relationship with Victoria",
        paragraphs: [
          "Charles and his wife are true partners. They discuss important decisions together, and there is mutual respect between them.",
          "Even after many years of marriage, they still enjoy quiet evenings together once the children are asleep.",
        ],
      },
      {
        heading: "Relationship with Pierre",
        paragraphs: [
          "Charles has known Pierre since he was a young boy. He doesn't think of Pierre as \"the butler.\" Pierre is part of the family.",
        ],
      },
      {
        heading: "Relationship with McMurphy",
        paragraphs: [
          "There is enormous trust between them. McMurphy isn't simply Charles's chauffeur — he's one of the few people Charles completely trusts.",
          "During long drives downtown they sometimes discuss business, sometimes baseball, sometimes nothing at all. Neither man feels the need to fill the silence.",
        ],
      },
      {
        heading: "Philosophy",
        quote:
          "Money can buy many things, son… but it can never buy your name. You earn that yourself.",
      },
      {
        heading: "What Makes Him Different",
        paragraphs: [
          "Most fictional wealthy fathers are portrayed as distant, cold, or consumed by work. Charles isn't. He's certainly busy — he leaves at 7:00 AM and returns around 6:00 PM — but when he's home, he's fully present.",
          "He attends games. He asks about homework. He laughs at the dinner table. He makes time for his children because he understands that childhood doesn't wait.",
        ],
      },
    ],
  },

  "victoria-fairchild": {
    facts: [
      { label: "Age", value: "43" },
      { label: "Occupation", value: "Homemaker, community volunteer, patron of the arts" },
      { label: "Residence", value: "Fairchild Estate, Edmonton, Alberta" },
      { label: "Family", value: "Husband Charles; daughter Sloan; son Oliver" },
    ],
    sections: [
      {
        heading: "Character Overview",
        paragraphs: [
          "Victoria Fairchild is the heart of the Fairchild family. While Charles oversees the family's business empire, Victoria oversees something far more important — their home. She believes that wealth should create opportunities, not distance people from one another.",
          "Gracious, cultured, and compassionate, Victoria has an effortless elegance that puts people at ease. Whether she's hosting a charity gala or comforting a nervous child, she treats everyone with the same kindness and respect.",
          "Visitors often leave the Fairchild estate remembering Victoria's warmth long after they've admired the mansion.",
        ],
      },
      {
        heading: "Appearance",
        paragraphs: [
          "Victoria is naturally elegant without ever appearing extravagant. Her blonde hair is always beautifully styled, and she favors timeless dresses, tailored jackets, pearls, and understated jewelry rather than flashy fashion.",
          "She has a calm smile and gentle eyes that immediately make people feel welcome. Her beauty comes more from confidence and kindness than from appearance alone.",
        ],
      },
      {
        heading: "Daily Routine",
        paragraphs: [
          "Morning — After Charles leaves for work with McMurphy, Victoria enjoys breakfast while reading the newspaper and planning the day's activities. She oversees the household alongside Pierre, Marian, Chef Garçon, and the rest of the staff.",
          "Afternoon — Charity committee meetings, museum and gallery events, women's social luncheons, fundraising functions, art exhibitions, and visits to local community organizations. She enjoys these not because of status, but because they let her support causes she genuinely cares about.",
          "Evening — When Charles returns home, Victoria makes sure family dinner remains a daily tradition whenever possible. The family gathers around one table, and conversation is encouraged.",
        ],
      },
      {
        heading: "Personality",
        bullets: [
          "Elegant",
          "Compassionate",
          "Intelligent",
          "Patient",
          "Organized",
          "Diplomatic",
          "Warm",
          "Creative",
          "Excellent hostess",
          "Quietly humorous",
        ],
        paragraphs: [
          "Victoria has a gift for making everyone — from business executives to delivery drivers — feel equally important.",
        ],
      },
      {
        heading: "Interests",
        paragraphs: [
          "Art collector — Victoria has a lifelong love of Canadian and European art. Rather than collecting paintings for prestige, she buys pieces because they move her emotionally. Much of the artwork throughout the estate has been personally selected by her.",
          "Tennis — One of her favorite ways to spend time with Sloan is on the family's private tennis court. Their matches are friendly and full of laughter, and neither keeps score very seriously. The conversations between games are often more important than the match itself.",
          "Gardening — Victoria walks through the estate gardens early in the morning and knows the names of nearly every flower growing on the property. Fresh flowers from the garden regularly decorate the dining room and foyer.",
        ],
        quote: "A painting should tell a story every time you look at it.",
      },
      {
        heading: "Relationship with Charles",
        paragraphs: [
          "Victoria and Charles are true partners. She understands the pressures of leading a large company and provides the calm balance that Charles needs. He values her advice more than anyone else's.",
          "When difficult decisions arise, Charles often asks \"What do you think?\" before making up his mind.",
        ],
      },
      {
        heading: "Relationship with Sloan",
        paragraphs: [
          "Victoria shares a special bond with Sloan. She encourages her to think independently and never pressures her to fit into society's expectations. Their relationship is built on trust.",
          "Victoria wants Sloan to become a woman of character before becoming a woman of status.",
        ],
      },
      {
        heading: "Relationship with Oliver",
        paragraphs: [
          "Oliver still runs into his mother's arms after school. Victoria never discourages his curiosity or imagination. She helps with school projects, attends his baseball games, and always makes time to listen to his latest adventure.",
        ],
        quote: "Being kind will take you farther than being important.",
      },
      {
        heading: "Relationship with the Household Staff",
        paragraphs: [
          "Victoria knows every staff member personally. She remembers birthdays. She asks about their families. At Christmas, everyone gathers for the same holiday dinner.",
          "No one is treated as \"the help.\" They're part of the Fairchild household.",
        ],
      },
      {
        heading: "Community Work",
        bullets: [
          "Children's hospitals",
          "Arts education",
          "Public libraries",
          "Youth music programs",
          "Women's shelters",
          "Community food banks",
        ],
        paragraphs: [
          "She rarely allows her name to appear in newspapers for charitable donations. She believes generosity doesn't need applause.",
        ],
      },
      {
        heading: "What Makes Victoria Different",
        paragraphs: [
          "Many stories portray wealthy mothers as distant, overly concerned with appearances, or disconnected from their children. Victoria is the opposite. She loves beautiful things — fine art, elegant homes, graceful living — but she never lets those things become more important than people.",
          "The mansion is magnificent because of its architecture. It feels like home because of Victoria.",
        ],
        quote:
          "The finest homes are remembered not for their size, but for how they make people feel.",
      },
    ],
  },

  "sloan-fairchild": {
    facts: [
      { label: "Full name", value: "Sloan Elizabeth Fairchild" },
      { label: "Age", value: "14" },
      { label: "Grade", value: "8" },
      { label: "Occupation", value: "Student" },
      { label: "Residence", value: "Fairchild Estate" },
    ],
    sections: [
      {
        heading: "Biography",
        paragraphs: [
          "Sloan Fairchild is the eldest child of Charles and Victoria Fairchild and the future heir to one of Edmonton's most respected families. Raised in the elegance of the Fairchild Estate, she has enjoyed every opportunity life could offer, yet her parents have worked hard to ensure she grows up humble, compassionate, and respectful.",
          "Rather than being defined by wealth, Sloan values friendship, honesty, and hard work. At Mackenzie Middle she wants to be known for who she is — not for the mansion she lives in.",
          "Although quiet by nature, Sloan possesses remarkable emotional intelligence. She has a way of making others feel comfortable, often becoming the person friends turn to when they need advice or encouragement. She stands between two very different worlds, bringing out the best in both.",
        ],
      },
      {
        heading: "Personality",
        paragraphs: [
          "Kind-hearted. Thoughtful. Patient. Intelligent. Graceful. Compassionate. Responsible.",
          "Sloan is mature beyond her years but still enjoys being a teenager. She has a gentle sense of humor and never seeks attention. Rather than leading by popularity, she leads by example.",
        ],
      },
      {
        heading: "Daily Routine",
        paragraphs: [
          "Sloan begins each morning with breakfast prepared by Chef Garçon before McMurphy drives her and Oliver to school.",
          "Her school day is filled with classes, friends, and extracurricular activities. After returning home she balances homework with family time, tennis, music, reading, and occasionally helping around the estate.",
          "Evenings almost always end with the Fairchild family gathered around the dinner table.",
        ],
      },
      {
        heading: "Hobbies",
        bullets: [
          "Tennis",
          "Reading classic novels",
          "Piano",
          "Photography",
          "Horseback riding",
          "Art appreciation",
          "Charity events",
          "Walking through the estate gardens",
          "Baking with Chef Garçon",
          "Spending time with family and friends",
        ],
      },
      {
        heading: "Strengths",
        bullets: [
          "Compassionate",
          "Honest",
          "Responsible",
          "Intelligent",
          "Calm under pressure",
          "Excellent listener",
          "Loyal",
          "Natural leader",
        ],
      },
      {
        heading: "Weaknesses",
        bullets: [
          "Sometimes worries too much about others",
          "Finds it difficult to disappoint people",
          "Can be overly self-critical",
          "Occasionally hides her own feelings to protect those she loves",
          "Feels pressure to live up to the Fairchild family name",
        ],
      },
      {
        heading: "Charles Fairchild (Father)",
        paragraphs: [
          "Charles is Sloan's greatest role model. Although his work often keeps him busy, Sloan treasures every conversation they share. He encourages her to think independently and reminds her that character is more important than wealth, teaching her that true leadership begins with integrity.",
          "Sloan hopes to make him proud — not by following his career, but by living according to his values.",
        ],
      },
      {
        heading: "Victoria Fairchild (Mother)",
        paragraphs: [
          "Victoria is Sloan's closest confidante. She has taught Sloan grace, compassion, confidence, and the importance of treating every person with respect.",
          "Whether they're playing tennis, visiting an art gallery, or simply talking over tea, Victoria is Sloan's greatest source of guidance. Their relationship is built on trust and unconditional love.",
        ],
      },
      {
        heading: "Oliver Fairchild (Younger Brother)",
        paragraphs: [
          "Oliver is Sloan's favorite person to tease. She helps him with homework, protects him when necessary, and encourages his endless imagination.",
          "Oliver often follows her around the estate, believing she can solve any problem. Though they argue like normal siblings, Sloan would do anything for him.",
        ],
      },
      {
        heading: "Butler Pierre",
        paragraphs: [
          "Pierre has watched Sloan grow from childhood into a young woman. To Sloan, he is much more than the family butler — he has quietly taught her etiquette, patience, responsibility, and respect.",
          "Whenever Sloan faces difficult decisions, Pierre's calm wisdom often helps her see things more clearly. She considers him one of her greatest mentors.",
        ],
      },
      {
        heading: "Chef Garçon",
        paragraphs: [
          "Chef Garçon encourages Sloan's love of cooking and baking. Unlike Oliver, who sneaks cookies, Sloan enjoys learning recipes and decorating desserts beside him.",
          "They frequently discuss French culture, travel, and food while preparing meals. He often calls her \"Mademoiselle Sloan.\"",
        ],
      },
      {
        heading: "Marian Bennett",
        paragraphs: [
          "Marian is like the older sister Sloan never had. Over the years Marian has celebrated birthdays, comforted Sloan after disappointments, helped prepare for dances, and quietly supported her through life's challenges.",
          "Sloan trusts Marian completely. They often spend afternoons talking while organizing Sloan's room or preparing for special events.",
        ],
      },
      {
        heading: "McMurphy",
        paragraphs: [
          "McMurphy has been driving Sloan to school for years. Although he rarely speaks about himself, Sloan deeply respects him — she admires his quiet strength, discipline, and unwavering loyalty.",
          "When Sloan was younger, McMurphy taught her how to ride a bicycle safely, how to stay calm in difficult situations, and the importance of protecting others. She feels safer whenever McMurphy is nearby.",
        ],
      },
      {
        heading: "Jack Armstrong",
        paragraphs: [
          "Jack is one of Sloan's closest friends outside the Fairchild world. Their friendship grows naturally through school and their shared love of tennis.",
          "Jack treats Sloan as an equal rather than as \"the wealthy girl,\" something she quietly appreciates. Whenever Jack visits the estate, Sloan enjoys showing him that behind the mansion is simply a family trying to live normal lives.",
        ],
      },
      {
        heading: "Minh Le",
        paragraphs: [
          "Minh becomes one of Sloan's most trusted friends at Mackenzie Middle. She admires his creativity, imagination, and optimism.",
          "Minh's enthusiasm often encourages Sloan to step outside her comfort zone and enjoy the simpler moments of life. Their friendship reminds Sloan that genuine connections have nothing to do with wealth or status.",
        ],
      },
      {
        heading: "Fun Facts",
        bullets: [
          "Plays tennis with her mother almost every weekend.",
          "Loves baking desserts with Chef Garçon.",
          "Reads in the mansion library whenever she needs quiet time.",
          "Secretly enjoys helping Oliver plan harmless surprises.",
          "Speaks a little French thanks to Chef Garçon.",
          "Knows every walking path on the estate.",
          "Appreciates fine art but enjoys sketching in a simple notebook.",
          "Always thanks every member of the household before leaving each morning.",
          "Loves family dinners more than formal parties.",
          "Believes the estate feels like home because of the people who live and work there — not because of the mansion itself.",
        ],
        quote:
          "The most valuable things in life aren't things — they're the people you share life with.",
      },
    ],
  },

  "oliver-fairchild": {
    facts: [
      { label: "Full name", value: "Oliver James Fairchild" },
      { label: "Age", value: "10" },
      { label: "Grade", value: "5" },
      { label: "Occupation", value: "Student" },
      { label: "Residence", value: "Fairchild Estate" },
    ],
    sections: [
      {
        heading: "Biography",
        paragraphs: [
          "Born into one of Edmonton's most prominent families, Oliver has never known anything but life at the Fairchild Estate. Surrounded by luxury, he remains remarkably down-to-earth, preferring tree forts, bicycles, hockey cards, and cookies over expensive toys.",
          "Unlike his older sister Sloan, Oliver doesn't yet feel the weight of the Fairchild name. He simply enjoys being a kid. Whether he's building snow forts, exploring hidden corners of the mansion, or sneaking into Chef Garçon's kitchen, Oliver has an endless curiosity that often leads to unforgettable adventures.",
          "Although the estate employs many people, Oliver considers them family rather than staff.",
        ],
      },
      {
        heading: "Personality",
        paragraphs: [
          "Kind-hearted. Curious. Funny. Energetic. Imaginative.",
          "Oliver is always smiling and rarely stays still for very long. He loves asking questions, inventing games, and turning ordinary days into adventures. He has a mischievous side but never acts out of cruelty.",
          "If someone is lonely, Oliver is usually the first to notice.",
        ],
      },
      {
        heading: "Daily Routine",
        paragraphs: [
          "Oliver wakes early, often before everyone else. Breakfast is usually waiting thanks to Chef Garçon.",
          "School occupies most of his day, but afternoons are filled with hockey, baseball, biking, tennis, exploring the estate, or inventing games with friends.",
          "Evenings are family dinner followed by homework — though he'd much rather sneak downstairs for cookies.",
        ],
      },
      {
        heading: "Hobbies",
        bullets: [
          "Hockey",
          "Baseball",
          "Tennis",
          "Building forts",
          "Exploring the mansion",
          "Collecting model cars",
          "Reading adventure books",
          "Playing with the family dog",
          "Watching Saturday morning cartoons",
          "Sneaking cookies from Chef Garçon",
        ],
      },
      {
        heading: "Strengths",
        bullets: [
          "Friendly",
          "Honest",
          "Curious",
          "Loyal",
          "Courageous",
          "Optimistic",
          "Imaginative",
          "Makes friends easily",
        ],
      },
      {
        heading: "Weaknesses",
        bullets: [
          "Easily distracted",
          "Can't resist cookies",
          "Sometimes speaks before thinking",
          "Curious enough to wander into places he shouldn't",
          "Occasionally forgets homework when an adventure begins",
        ],
      },
      {
        heading: "Charles Fairchild (Father)",
        paragraphs: [
          "Oliver admires his father enormously. Charles is busy running businesses, but whenever he's home, Oliver has his full attention. Whether they're tossing a baseball, working on a puzzle, or watching hockey together, Charles always makes Oliver feel important.",
          "Oliver hopes one day he'll grow up to be just like his dad.",
        ],
      },
      {
        heading: "Victoria Fairchild (Mother)",
        paragraphs: [
          "Victoria is Oliver's greatest source of comfort. She encourages his imagination while gently teaching him kindness, manners, and respect.",
          "Oliver knows that no matter what happens, his mother will always listen. She often reads with him before bedtime or watches him play tennis in the backyard.",
        ],
      },
      {
        heading: "Sloan Fairchild (Older Sister)",
        paragraphs: [
          "Sloan is Oliver's hero. She helps with homework, gives advice, and occasionally rescues him when one of his adventures gets a little out of hand.",
          "Although they tease each other like all siblings, they're incredibly close. Oliver secretly thinks Sloan can solve almost any problem.",
        ],
      },
      {
        heading: "Butler Pierre",
        paragraphs: [
          "Pierre has known Oliver since he was very young. He politely pretends not to notice when Oliver slides down the grand staircase or races through the halls.",
          "Pierre quietly teaches him manners, patience, and respect without ever sounding like he's giving a lesson. Oliver sometimes calls him \"the nicest butler in the world.\"",
        ],
      },
      {
        heading: "Chef Garçon",
        paragraphs: [
          "Chef Garçon is Oliver's favorite partner in harmless mischief. Oliver is constantly sneaking into the kitchen looking for cookies, and Chef Garçon always pretends not to see him.",
          "Their playful friendship has become legendary around the mansion.",
        ],
        quote: "Chef makes the best cookies in Canada.",
      },
      {
        heading: "Marian Bennett",
        paragraphs: [
          "Marian is almost like an older sister. She helps patch torn shirts, finds lost toys, and always knows where Oliver left his hockey stick.",
          "Whenever Oliver has a bad day, Marian somehow knows exactly how to cheer him up.",
        ],
      },
      {
        heading: "McMurphy",
        paragraphs: [
          "Oliver absolutely idolizes McMurphy and believes he knows everything. The former soldier teaches him baseball, how to throw a football, basic camping skills, bicycle maintenance, and the importance of keeping promises.",
          "McMurphy never tells war stories. Instead, he teaches courage through actions rather than words. Oliver dreams that one day he'll drive as well as McMurphy.",
        ],
      },
      {
        heading: "Jack Armstrong",
        paragraphs: [
          "Jack quickly becomes one of Oliver's favorite visitors. Whenever Jack comes over to play tennis with Sloan or spend time at the estate, Oliver follows him around asking questions about school, sports, and life at Mackenzie Middle.",
          "Jack treats Oliver like a younger brother, and Oliver looks up to him.",
        ],
      },
      {
        heading: "Minh Le",
        paragraphs: [
          "Oliver enjoys Minh's kindness and creativity. Whenever Minh visits the estate or joins Sloan and Jack, Oliver is fascinated by Minh's stories, hobbies, and ideas.",
          "Minh always takes time to include Oliver, making him feel like part of the group despite being younger.",
        ],
      },
      {
        heading: "Fun Facts",
        bullets: [
          "Has a secret cookie route through the mansion.",
          "Knows every hiding place in the Fairchild Estate.",
          "Loves Saturday morning cartoons.",
          "Can spend hours building with LEGO.",
          "Names every bicycle he owns.",
          "Wants to learn to drive a limousine someday because of McMurphy.",
          "Thinks Chef Garçon makes the world's greatest chocolate chip cookies.",
          "Loves when Jack visits because \"something fun always happens.\"",
          "Never misses a family dinner.",
          "Believes every room in the mansion hides another adventure.",
        ],
        quote: "Do you think we can build one more fort before dinner?",
      },
    ],
  },

  "pierre-laurent": {
    facts: [
      { label: "Full name", value: "Pierre Laurent" },
      { label: "Age", value: "66" },
      { label: "Occupation", value: "Butler and Estate Manager" },
      { label: "Nationality", value: "Canadian (French-Canadian heritage)" },
      { label: "Residence", value: "Private staff quarters on the Fairchild Estate" },
      { label: "Years with the family", value: "28" },
    ],
    sections: [
      {
        heading: "Background",
        paragraphs: [
          "Pierre Laurent has dedicated nearly three decades to serving the Fairchild family with professionalism, discretion, and unwavering loyalty.",
          "Raised in Montreal, Pierre learned traditional hospitality and etiquette from his father, who managed one of Canada's finest historic hotels. After years working in prestigious hotels and private estates across Canada, he accepted an invitation to become head butler for the Fairchild family shortly after Charles and Victoria were married.",
          "Over the years, Pierre has become much more than a household employee. He is the quiet guardian of the estate, ensuring that everything — from formal dinners to family celebrations — runs flawlessly. Although he insists he is \"simply doing his job,\" the Fairchilds consider him part of the family.",
        ],
      },
      {
        heading: "Personality",
        paragraphs: [
          "Pierre is calm, dignified, and exceptionally organized. He believes true professionalism means anticipating people's needs before they ask.",
          "He speaks softly, rarely raises his voice, and always treats everyone with respect, regardless of their position. Behind his formal appearance is a gentle sense of humor that occasionally surprises those who know him well.",
          "Pierre believes kindness and discipline are equally important.",
        ],
      },
      {
        heading: "Appearance",
        bullets: [
          "Height: 5'11\"",
          "Build: Slim and elegant",
          "Hair: Silver",
          "Eyes: Grey",
          "Always impeccably dressed",
          "Known for his spotless white gloves and perfectly tailored formal attire",
          "Carries himself with quiet confidence and grace",
        ],
      },
      {
        heading: "Daily Responsibilities",
        bullets: [
          "Managing household staff",
          "Coordinating formal dinners and charity events",
          "Greeting guests",
          "Maintaining the mansion's daily operations",
          "Supervising deliveries and maintenance",
          "Planning household schedules",
          "Ensuring every room is presented perfectly",
        ],
        paragraphs: [
          "He somehow knows where everyone is supposed to be at any given moment.",
        ],
      },
      {
        heading: "Skills",
        bullets: [
          "Estate management",
          "Formal etiquette",
          "Event planning",
          "Fine dining service",
          "Wine knowledge",
          "Staff leadership",
          "Problem solving",
          "Exceptional memory",
          "Multilingual (English and French)",
        ],
      },
      {
        heading: "Charles Fairchild",
        paragraphs: [
          "Charles trusts Pierre completely. Pierre has served beside him for most of his adult life and often acts as Charles' closest advisor on household matters.",
        ],
      },
      {
        heading: "Victoria Fairchild",
        paragraphs: [
          "Victoria appreciates Pierre's impeccable taste and organization. Together they coordinate charity galas, dinner parties, and social events.",
        ],
      },
      {
        heading: "Sloan Fairchild",
        paragraphs: [
          "Pierre has watched Sloan grow from a little girl into a young woman. He quietly worries about her happiness and often offers gentle advice without being overbearing.",
          "To Sloan, Pierre is almost like another grandfather.",
        ],
      },
      {
        heading: "Oliver Fairchild",
        paragraphs: [
          "Oliver constantly tries to make Pierre laugh. Pierre pretends to remain serious… but usually loses the battle.",
          "He secretly keeps a small tin of cookies behind his pantry desk just for Oliver.",
        ],
      },
      {
        heading: "Thomas McMurphy",
        paragraphs: [
          "Pierre and McMurphy share enormous mutual respect. Pierre keeps the mansion running; McMurphy protects it. Together they make an exceptional team.",
          "They've developed an easy friendship over the years and occasionally enjoy coffee together before the household awakens.",
        ],
      },
      {
        heading: "Marian Bennett",
        paragraphs: [
          "Pierre acts as Marian's mentor. He patiently teaches her the traditions of service while encouraging her warmth and personality.",
        ],
        quote:
          "People remember how you make them feel far longer than they remember what you served.",
      },
      {
        heading: "Chef Garçon",
        paragraphs: [
          "The two have worked together for years. Pierre manages the dining room; Chef Garçon manages the kitchen. Their timing is so precise that formal dinners appear effortless.",
        ],
      },
      {
        heading: "Hobbies",
        bullets: [
          "Reading history books",
          "Gardening in the estate's private greenhouse",
          "Classical music",
          "Chess",
          "Collecting antique pocket watches",
          "Taking quiet evening walks through the estate gardens",
        ],
      },
      {
        heading: "Personal Philosophy",
        paragraphs: [
          "Pierre believes that true elegance isn't about wealth. It's about respect, humility, and treating every guest as if they were family.",
        ],
      },
      {
        heading: "Fun Facts",
        bullets: [
          "Has never forgotten a guest's name.",
          "Can set a formal dining table from memory in under five minutes.",
          "Makes the best afternoon tea in the house.",
          "Secretly enjoys old detective novels.",
          "Always knows where something is, even when no one else can find it.",
          "Oliver once called him \"The General of the Mansion,\" and the nickname quietly stuck among the staff.",
        ],
        quote:
          "A well-run home is not measured by its grandeur, but by the comfort it brings to those who live within it.",
      },
    ],
  },

  "chef-garcon": {
    facts: [
      { label: "Full name", value: "Jean-Luc Garçon" },
      { label: "Known as", value: "Chef Garçon" },
      { label: "Age", value: "58" },
      { label: "Occupation", value: "Executive Chef of the Fairchild Estate" },
      { label: "Nationality", value: "French (Lyon, France)" },
      { label: "Years with the family", value: "5" },
    ],
    sections: [
      {
        heading: "Biography",
        paragraphs: [
          "Born in Lyon, France, Chef Jean-Luc Garçon trained in some of Europe's finest culinary schools before spending years cooking in luxury hotels and private estates across France and Switzerland. His reputation for refined French cuisine eventually brought him to Canada, where Charles Fairchild persuaded him to become the personal chef for the Fairchild family.",
          "Although his meals are worthy of five-star restaurants, Chef Garçon believes the greatest compliment is seeing a family gathered around one table enjoying a meal together.",
          "He considers the Fairchild mansion his second home and its residents his extended family.",
        ],
      },
      {
        heading: "Personality",
        paragraphs: [
          "Warm, humorous, patient, and endlessly passionate about cooking. Chef Garçon carries himself with quiet confidence and old-world elegance. He speaks with a gentle French accent and enjoys teaching others about food, especially Oliver, who frequently wanders into the kitchen looking for cookies.",
          "While he insists on perfection in the kitchen, outside of it he is relaxed, approachable, and quick to laugh.",
        ],
        quote: "A meal made with love is always remembered.",
      },
      {
        heading: "Daily Routine",
        paragraphs: [
          "Chef Garçon begins each morning before sunrise. Fresh bread is baked before the family wakes.",
          "Breakfast is carefully timed around everyone's schedules before he begins planning lunch, dinner, desserts, and special events. He personally visits local markets to select the freshest ingredients and oversees every meal served at the mansion.",
        ],
      },
      {
        heading: "Skills",
        bullets: [
          "Classical French cuisine",
          "Gourmet pastry and desserts",
          "International cuisine",
          "Formal banquet preparation",
          "Wine pairing",
          "Menu planning",
          "Kitchen management",
          "Teaching young cooks",
          "Artistic food presentation",
        ],
      },
      {
        heading: "Philosophy",
        paragraphs: [
          "He believes every dinner should be an experience rather than simply a meal.",
        ],
        quote: "Good food brings people together.",
      },
      {
        heading: "Charles Fairchild",
        paragraphs: [
          "Chef Garçon has enormous respect for Charles. Charles values discipline, precision, and professionalism — qualities Chef Garçon shares. Charles trusts him completely and often thanks him personally after formal dinners.",
          "Although Charles spends long hours at work, Chef Garçon always ensures dinner is ready when he returns home.",
        ],
      },
      {
        heading: "Victoria Fairchild",
        paragraphs: [
          "Victoria and Chef Garçon share an appreciation for fine art and beautiful presentation. She frequently asks him to design elegant menus for charity galas and social gatherings hosted at the mansion.",
          "Together they enjoy discussing French culture, travel, and classic cuisine. He often picks fresh herbs from Victoria's gardens, insisting: \"The best seasoning grows in the garden.\"",
        ],
      },
      {
        heading: "Sloan Fairchild",
        paragraphs: [
          "Sloan enjoys helping Chef Garçon bake cookies and desserts. Unlike Oliver, Sloan follows recipes exactly. Chef Garçon appreciates her patience and attention to detail and often lets her decorate pastries for special occasions.",
          "She sometimes asks him about France, hoping to visit one day.",
        ],
      },
      {
        heading: "Oliver Fairchild",
        paragraphs: [
          "Oliver is both Chef Garçon's greatest challenge and greatest source of laughter. He is constantly sneaking into the kitchen hoping to steal cookies before dinner, and Chef Garçon always pretends to be surprised.",
          "Everyone knows he intentionally leaves a few cookies where Oliver can \"accidentally\" find them. The two share a wonderful grandfather-grandson relationship.",
        ],
        quote: "These cookies? They disappeared by themselves.",
      },
      {
        heading: "Butler Pierre",
        paragraphs: [
          "Pierre and Chef Garçon have worked together long enough that they rarely need words. Pierre manages the dining room while Chef Garçon commands the kitchen, and together they orchestrate every formal dinner with perfect timing.",
        ],
        quote: "Pierre conducts the dining room. I conduct the orchestra in the kitchen.",
      },
      {
        heading: "Marian Bennett",
        paragraphs: [
          "Marian is one of Chef Garçon's closest friends in the household. She often helps prepare dining rooms before important events, while Chef Garçon sends her home with leftovers after large dinners.",
          "The two share many laughs while preparing the mansion for holidays.",
        ],
      },
      {
        heading: "McMurphy",
        paragraphs: [
          "Chef Garçon has deep respect for McMurphy's military service. Whenever McMurphy returns late from driving the family, Chef Garçon quietly keeps a hot meal waiting in the kitchen.",
          "Neither man talks much about the past, but they understand one another without many words.",
        ],
        quote: "Every soldier deserves a warm meal.",
      },
      {
        heading: "Fun Facts",
        bullets: [
          "Has never written down his famous soup recipe.",
          "Keeps a hidden cookie jar for Oliver.",
          "Can prepare over 300 French dishes from memory.",
          "Whistles softly while cooking.",
          "Believes butter solves almost every culinary problem.",
          "Refuses to serve frozen vegetables.",
          "Calls everyone \"Monsieur,\" \"Madame,\" or \"Mademoiselle.\"",
          "Makes birthday cakes personally for every member of the household.",
          "Always prepares McMurphy's favorite steak after a long day of driving.",
          "His greatest joy is seeing the entire Fairchild family seated together around the dinner table.",
        ],
        quote: "Cooking feeds the body. Sharing a meal feeds the heart.",
      },
    ],
  },

  "marian-bennett": {
    facts: [
      { label: "Age", value: "24" },
      { label: "Occupation", value: "Personal Maid and Household Assistant to the Fairchild Family" },
      { label: "Residence", value: "Staff Quarters, Fairchild Estate" },
      { label: "Works for", value: "The Fairchild Family" },
    ],
    sections: [
      {
        heading: "Character Overview",
        paragraphs: [
          "Marian Bennett joined the Fairchild household shortly after finishing college. Intelligent, cheerful, and endlessly energetic, she quickly became an indispensable part of the family.",
          "While officially responsible for assisting Victoria Fairchild and maintaining the family's private living quarters, Marian's role extends far beyond housekeeping. She is the person everyone turns to when they need help, advice, or simply someone to brighten the day.",
          "The mansion feels more alive whenever Marian is around.",
        ],
      },
      {
        heading: "Appearance",
        paragraphs: [
          "Marian has a naturally friendly smile that instantly puts people at ease. She wears a neat, modern maid's uniform during work hours, but off duty she dresses casually in jeans, sweaters, and sneakers like any young woman in the 1980s.",
          "She keeps her hair tied back while working but lets it down during family outings or staff gatherings. Her bright eyes and cheerful expression reflect her optimistic personality.",
        ],
      },
      {
        heading: "Daily Routine",
        paragraphs: [
          "7:00 AM — Helps prepare the family for the day, makes sure bedrooms are organized, assists Victoria with the day's schedule, and coordinates with Pierre and Chef Garçon.",
          "Morning — Fresh flowers. Laundry. Preparing guest rooms. Helping Victoria organize charity events.",
          "Afternoon — Runs errands, assists with household preparations, sometimes helps Oliver with school projects, and occasionally drives into town with Pierre for supplies.",
          "Evening — Makes sure everything is ready before the family returns from dinner or evening events, then shares coffee with the staff before ending her shift.",
        ],
      },
      {
        heading: "Personality",
        bullets: [
          "Cheerful",
          "Compassionate",
          "Hard-working",
          "Funny",
          "Optimistic",
          "Patient",
          "Organized",
          "Loyal",
          "Quick thinker",
          "Curious",
        ],
        paragraphs: [
          "Marian laughs easily. She believes every difficult day can be improved with kindness.",
        ],
      },
      {
        heading: "Relationship with Victoria",
        paragraphs: [
          "Victoria treats Marian with tremendous respect. Rather than giving orders, she asks: \"Could you help me with something?\"",
          "Victoria sees Marian as part of the household rather than simply an employee.",
        ],
      },
      {
        heading: "Relationship with Charles",
        paragraphs: [
          "Charles appreciates Marian's professionalism. He often thanks her personally after large dinners or charity events, and never walks past without saying: \"Good morning, Marian.\"",
        ],
      },
      {
        heading: "Relationship with Sloan",
        paragraphs: [
          "Sloan thinks of Marian as an older sister. When Sloan needs advice she isn't ready to discuss with her parents, she goes to Marian.",
          "They talk about school, friends, fashion, life. Marian always listens without judgment.",
        ],
      },
      {
        heading: "Relationship with Oliver",
        paragraphs: [
          "Oliver constantly finds reasons to visit the kitchen simply because Marian is there. She sneaks him an extra cookie, helps him finish school projects, and sometimes joins him in harmless practical jokes — provided Pierre never finds out.",
        ],
      },
      {
        heading: "Relationship with Pierre",
        paragraphs: [
          "Pierre is like the grandfather Marian never had. He patiently teaches her household traditions, proper etiquette, serving formal dinners, and how every great home is built on respect rather than perfection.",
          "Pierre secretly thinks Marian will someday become head housekeeper.",
        ],
      },
      {
        heading: "Relationship with Chef Garçon",
        paragraphs: [
          "Chef Garçon constantly prepares little desserts just for Marian, and she happily volunteers to \"taste test\" every new recipe. They tease each other like brother and sister.",
        ],
      },
      {
        heading: "Relationship with McMurphy",
        paragraphs: [
          "McMurphy rarely smiles. Marian considers it her personal mission to change that, and often jokes that she's keeping score. Whenever McMurphy smiles, she announces: \"That's number seventeen this month.\"",
          "McMurphy simply shakes his head — but secretly enjoys her company.",
        ],
      },
      {
        heading: "Skills",
        bullets: [
          "Excellent organizer",
          "Floral arranging",
          "Event preparation",
          "Sewing and clothing repair",
          "Baking",
          "Decorating",
          "Great memory for names and birthdays",
        ],
      },
      {
        heading: "Hobbies",
        bullets: [
          "Reading romance novels",
          "Gardening",
          "Photography",
          "Baking cookies",
          "Listening to pop music on her Walkman",
          "Ice skating during winter",
        ],
      },
      {
        heading: "What Makes Marian Special",
        paragraphs: [
          "Although she works in one of Edmonton's wealthiest homes, she never measures people by money or status. She measures them by how they treat others.",
          "Because of that, the Fairchild mansion never feels cold or intimidating. It feels like a home filled with people who genuinely care about one another.",
        ],
        quote: "A little kindness can make a big house feel like a home.",
      },
    ],
  },

  "thomas-mcmurphy": {
    facts: [
      { label: "Full name", value: "Thomas Patrick McMurphy" },
      { label: "Known as", value: "Tom McMurphy, or simply \"McMurphy\"" },
      { label: "Age", value: "38" },
      { label: "Occupation", value: "Chauffeur, Security Director, Personal Bodyguard" },
      { label: "Nationality", value: "Canadian" },
      { label: "Residence", value: "Staff Residence, Fairchild Estate" },
      { label: "Years with the family", value: "6" },
    ],
    sections: [
      {
        heading: "Background",
        paragraphs: [
          "Thomas McMurphy grew up in rural Alberta where hard work, honesty, and responsibility were part of everyday life.",
          "After graduating from high school, he enlisted in the Canadian Armed Forces. During the Vietnam era, he served alongside allied forces in overseas operations, specializing in reconnaissance, convoy protection, and close personal security. His military service exposed him to the harsh realities of combat at a young age. McMurphy rarely speaks about the war — when asked, he simply says, \"That was another lifetime.\"",
          "Following his honorable discharge, he struggled to adapt to civilian life. Although highly trained, he wanted a profession where his skills could protect rather than destroy. He eventually entered executive protection and defensive driving, earning a reputation as one of Western Canada's finest security professionals.",
          "Charles Fairchild hired McMurphy six years ago after a recommendation from a respected business associate. It quickly became clear that McMurphy was far more than a chauffeur. He became family.",
        ],
        quote:
          "Some men fight wars. Others spend the rest of their lives making sure no one else has to.",
      },
      {
        heading: "Appearance",
        bullets: [
          "Height: 6'1\"",
          "Build: Athletic and powerful",
          "Hair: Blond",
          "Eyes: Brown",
          "Calm, confident posture",
          "Usually dressed in a tailored black suit and tie while working",
          "Rarely seen without polished shoes during formal events",
        ],
        paragraphs: [
          "Even standing still, McMurphy gives the impression that he's aware of everything around him.",
        ],
      },
      {
        heading: "Personality",
        paragraphs: [
          "McMurphy is calm under pressure. He rarely raises his voice. He listens more than he speaks. Years of military training have taught him patience, discipline, and observation — he notices details others miss.",
          "Despite his intimidating appearance, he has an easy smile around children and enjoys making Oliver laugh. He dislikes unnecessary violence and believes prevention is always better than confrontation.",
        ],
      },
      {
        heading: "Skills",
        bullets: [
          "Executive protection",
          "Defensive and evasive driving",
          "Advanced first aid",
          "Emergency response",
          "Firearms training (former military)",
          "Hand-to-hand combat",
          "Tactical planning",
          "Vehicle maintenance",
          "Excellent mechanic",
          "Navigation",
          "Wilderness survival",
          "Baseball coach",
          "Outstanding problem solver",
        ],
      },
      {
        heading: "Daily Responsibilities",
        bullets: [
          "Inspecting the family vehicles",
          "Planning travel routes",
          "Reviewing daily schedules",
          "Driving Charles to work",
          "Driving Victoria to charity events",
          "Taking Sloan and Oliver to school",
          "Remaining on standby throughout the day",
          "Escorting the family to dinners, galas, and public appearances",
          "Monitoring security during special events",
          "Driving everyone safely home",
        ],
        paragraphs: [
          "Every day begins before sunrise. He is always the first to arrive, and the last to leave.",
        ],
      },
      {
        heading: "Charles Fairchild",
        paragraphs: [
          "Charles trusts McMurphy with the two things that matter most: his family and his life.",
          "The two share quiet conversations during morning drives into downtown Edmonton. Charles values McMurphy's judgment almost as much as his own.",
        ],
      },
      {
        heading: "Victoria Fairchild",
        paragraphs: [
          "Victoria appreciates McMurphy's professionalism and kindness. She never worries when the children are with him.",
        ],
        quote: "You're part of this family too.",
      },
      {
        heading: "Sloan Fairchild",
        paragraphs: [
          "McMurphy has watched Sloan grow from childhood into a young woman. He is fiercely protective of her but never overbearing.",
          "If Sloan is upset, McMurphy usually notices long before anyone else. Sometimes they simply sit quietly during the drive home. Neither needs to say much.",
        ],
      },
      {
        heading: "Oliver Fairchild",
        paragraphs: [
          "Oliver absolutely idolizes McMurphy. Every Saturday morning, the two play baseball together.",
          "McMurphy teaches him throwing mechanics, sportsmanship, discipline, and confidence. To Oliver, McMurphy is a hero.",
        ],
      },
      {
        heading: "Pierre Laurent",
        paragraphs: [
          "Pierre runs the mansion. McMurphy protects it. Their friendship is built on mutual respect.",
          "Every morning before breakfast they share coffee while reviewing the day's schedule. Neither needs many words.",
        ],
      },
      {
        heading: "Marian Bennett",
        paragraphs: [
          "Marian enjoys teasing McMurphy because he's so serious. She occasionally succeeds in making him laugh.",
        ],
        quote: "The toughest soft-hearted man I've ever met.",
      },
      {
        heading: "Chef Garçon",
        paragraphs: [
          "Chef Garçon always prepares an extra sandwich for McMurphy whenever he's driving long hours. McMurphy insists he doesn't need it. Chef Garçon ignores him.",
        ],
      },
      {
        heading: "Hobbies",
        bullets: [
          "Baseball",
          "Restoring classic trucks",
          "Fishing",
          "Camping",
          "Reading military history",
          "Working with tools",
          "Teaching Oliver new skills",
          "Evening walks around the Fairchild grounds",
        ],
      },
      {
        heading: "Personal Philosophy",
        paragraphs: [
          "McMurphy believes real strength isn't measured by how well someone fights. It's measured by how many fights they prevent.",
        ],
      },
      {
        heading: "Fun Facts",
        bullets: [
          "Has never received a speeding ticket.",
          "Can reverse a limousine into a tight space on the first attempt.",
          "Keeps a complete first aid kit in every vehicle.",
          "Drinks black coffee.",
          "Secretly enjoys old western movies.",
          "Fixes almost anything mechanical.",
          "Knows every shortcut in Edmonton.",
          "Keeps a baseball glove in the trunk \"just in case Oliver wants to play.\"",
          "Sleeps very little but is always alert.",
          "Has never missed one of Oliver's baseball practices.",
        ],
        quote:
          "My job isn't to be noticed. My job is to make sure everyone else gets home safely.",
      },
      {
        heading: "His Role in Mackenzie Middle",
        paragraphs: [
          "McMurphy represents quiet strength. He's the dependable adult every child hopes is nearby when things go wrong. He doesn't seek recognition, and he never tries to be the center of attention — yet his presence brings reassurance to everyone around him.",
          "For the Fairchild family, he's more than a chauffeur or bodyguard: he's a trusted friend, a mentor, and a protector. For Oliver, he's a hero. For Sloan, he's someone she can always rely on. And for Charles and Victoria, he's the man they trust above all others to keep their family safe.",
        ],
      },
    ],
  },
};

export function getCharacterProfile(slug: string): CharacterProfile | undefined {
  return characterProfiles[slug];
}
