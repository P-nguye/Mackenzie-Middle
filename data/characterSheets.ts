// Character design/reference sheets, shown as tabs on the character detail page.
//
// The image files in /public/assets do NOT follow the slug convention and contain
// several inconsistencies (e.g. "June Nakaruma" vs. June Nakamura, "Sloan Morgan"
// and "Sloan Fairchile" vs. Sloan Fairchild). Each path is therefore mapped
// explicitly by slug rather than derived. Not every character has every sheet —
// missing entries simply hide that tab, and characters with no sheets show nothing.

export interface CharacterSheets {
  expressions?: string;
  profile?: string;
  props?: string;
  wardrobe?: string;
}

const EXPR = "/assets/character expressions sheets";
const PROFILE = "/assets/character profile";
const PROPS = "/assets/character props";
const WARDROBE = "/assets/character warerobe guide";

export const characterSheets: Record<string, CharacterSheets> = {
  "minh-le": {
    expressions: `${EXPR}/Minh Le Expressions Sheet.png`,
    profile: `${PROFILE}/Minh Le Character Profile.png`,
    props: `${PROPS}/Minh Le Prop Guide.png`,
    wardrobe: `${WARDROBE}/Minh Le Character Warerobe Guide.png`,
  },
  "shelley-morgan": {
    expressions: `${EXPR}/Shelley Morgan Expressions Sheet.png`,
    profile: `${PROFILE}/Shelley Morgan Character Profile.png`,
    props: `${PROPS}/Shelley Morgan Prop Guide.png`,
    wardrobe: `${WARDROBE}/Shelley Morgan Character Warerobe Guide.png`,
  },
  "willie-lin": {
    expressions: `${EXPR}/Willie Lin Expressions Sheet.png`,
    profile: `${PROFILE}/Willie Lin Character Profile.png`,
    props: `${PROPS}/Willie Lin Prop Guide.png`,
    wardrobe: `${WARDROBE}/Willie Lin Character Warerobe Guide.png`,
  },
  // Files misspell the surname as "Nakaruma"
  "june-nakamura": {
    expressions: `${EXPR}/June Nakaruma Expressions Sheet.png`,
    profile: `${PROFILE}/June Nakaruma Character Profile.png`,
    props: `${PROPS}/June Nakaruma Prop Guide.png`,
    wardrobe: `${WARDROBE}/June Nakaruma Character Warerobe Guide.png`,
  },
  "tara-bennett": {
    expressions: `${EXPR}/Tara Bennett Expressions Sheet.png`,
    profile: `${PROFILE}/Tara Bennett Character Profile.png`,
    props: `${PROPS}/Tara Bennett Prop Guide.png`,
    wardrobe: `${WARDROBE}/Tara Bennett Character Warerobe Guide.png`,
  },
  // Expressions file mislabels surname as "Morgan"; props file misspells "Fairchile"
  "sloan-fairchild": {
    expressions: `${EXPR}/Sloan Morgan Expressions Sheet.png`,
    profile: `${PROFILE}/Sloan Fairchild Character Profile.png`,
    props: `${PROPS}/Sloan Fairchile Prop Guide.png`,
    wardrobe: `${WARDROBE}/Sloan Fairchild Character Warerobe Guide.png`,
  },
  "jack-armstrong": {
    profile: `${PROFILE}/Jack Armstrong Character Profile.png`,
    wardrobe: `${WARDROBE}/Jack Armstrong Warerobe and Prop Guide.png`,
  },
  "blake-montgomery": {
    profile: `${PROFILE}/Blake Montgomery Character Profile.png`,
    wardrobe: `${WARDROBE}/Blake Montgomery Warerobe and Prop Guide.png`,
  },
  "oliver-fairchild": {
    profile: `${PROFILE}/Oliver Fairchild Character Profile.png`,
  },
  "chef-garcon": {
    profile: `${PROFILE}/Chef Garcon Character Profile.png`,
  },
  // No entry for thomas-mcmurphy: the sheet that ships with the Fairchild Estate
  // artwork ("Thomas McMurphy use for headshot.png") contradicts his current
  // artwork and profile — it shows dark brown hair and gives him a U.S. Army /
  // Pittsburgh background, where the character is blond and Canadian. Restore the
  // entry once a matching sheet exists. The other estate characters (Charles,
  // Victoria, Pierre, Marian) have no sheets yet, so their tabs stay hidden too.
};

export function getCharacterSheets(slug: string): CharacterSheets | undefined {
  return characterSheets[slug];
}
