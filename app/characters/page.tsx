import type { Metadata } from "next";
import { characters } from "@/data/characters";
import CharactersGridToggle from "@/components/CharactersGridToggle";

export const metadata: Metadata = {
  title: "Characters",
  description:
    "Meet the cast of Mackenzie Middle — the students and teachers of a 1980s Edmonton school.",
};

export default function CharactersPage() {
  const students = characters.filter((c) => !c.isStaff);
  const teachers = characters.filter((c) => c.isStaff);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <span className="badge badge-amber mb-4 inline-flex">The Cast</span>
        <h1 className="text-4xl md:text-5xl font-black text-text-primary mb-4">
          Meet the Characters
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl">
          Every hallway has its players. Here are the people navigating Mackenzie Middle School
          in 1985 — and the one adult who actually gets it.
        </p>
      </div>

      {/* Grid with 2D / 3D toggle — client component */}
      <CharactersGridToggle students={students} teachers={teachers} />
    </div>
  );
}
