import type { Metadata } from "next";
import { characters, getCharacterBySlug, type Character } from "@/data/characters";
import CharactersGridToggle from "@/components/CharactersGridToggle";

// The Estate section is ordered deliberately — family first (by age), then the
// household staff. Listed by slug rather than filtered on `group` because Sloan
// lives at the estate but belongs to the Students section above.
const ESTATE_ORDER = [
  "charles-fairchild",
  "victoria-fairchild",
  "sloan-fairchild",
  "oliver-fairchild",
  "pierre-laurent",
  "chef-garcon",
  "marian-bennett",
  "thomas-mcmurphy",
];

export const metadata: Metadata = {
  title: "Characters",
  description:
    "Meet the cast of Mackenzie Middle — the students and teachers of a 1980s Edmonton school.",
};

export default function CharactersPage() {
  const students = characters.filter((c) => !c.isStaff && !c.group);
  const teachers = characters.filter((c) => c.isStaff && !c.group);
  const fairchildEstate = ESTATE_ORDER.map(getCharacterBySlug).filter(
    (c): c is Character => Boolean(c)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
          Meet the Characters
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl">
          Every hallway has its players. Here are the people navigating Mackenzie
          Middle School in 1985, students and staff alike.
        </p>
      </div>

      {/* Grid with 2D / 3D toggle — client component */}
      <CharactersGridToggle
        students={students}
        teachers={teachers}
        fairchildEstate={fairchildEstate}
      />
    </div>
  );
}
