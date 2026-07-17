// Fairchild Estate section config, shared by the characters list and the
// character detail page.
//
// Sloan belongs to two places at once: she's a Grade 8 student at Mackenzie
// Middle and the eldest Fairchild child at home. Rather than duplicate her as
// two Character entries, the Estate section overrides how her card is presented
// and links through with `?from=estate` so her detail page can match.

// Ordered deliberately — family first (by age), then the household staff.
// Listed by slug rather than filtered on `group` because Sloan lives at the
// estate but belongs to the Students section.
export const ESTATE_ORDER = [
  "charles-fairchild",
  "victoria-fairchild",
  "sloan-fairchild",
  "oliver-fairchild",
  "pierre-laurent",
  "chef-garcon",
  "marian-bennett",
  "thomas-mcmurphy",
];

export interface EstateOverride {
  // Replaces the grade badge on the Estate card. In this section the kids are
  // family first, so Sloan reads "Eldest Sister" here but still "Grade 8" under
  // Students.
  label?: string;
  // Replaces the 2D artwork on the Estate card, and on the detail page when
  // arrived at from this section. The Character's own portrait2d is untouched.
  portrait2d?: string;
}

export const ESTATE_OVERRIDES: Record<string, EstateOverride> = {
  "sloan-fairchild": {
    label: "Eldest Sister",
    portrait2d: "/assets/characters/2d/SloanEstate.png",
  },
  "oliver-fairchild": { label: "Younger Brother" },
};

// Query flag added to Estate card links, read back by the detail page.
export const ESTATE_QUERY = "from";
export const ESTATE_QUERY_VALUE = "estate";

export function estateHref(slug: string): string {
  return `/characters/${slug}?${ESTATE_QUERY}=${ESTATE_QUERY_VALUE}`;
}
