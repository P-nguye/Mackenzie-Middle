import type { Metadata } from "next";
import CharacterCard from "@/components/CharacterCard";
import { characters } from "@/data/characters";

export const metadata: Metadata = {
  title: "Characters",
  description: "Meet the cast of Mackenzie Middle — the students and teachers of a 1980s Edmonton school.",
};

export default function CharactersPage() {
  const students = characters.filter((c) => c.grade !== "Teacher");
  const teachers = characters.filter((c) => c.grade === "Teacher");

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

      {/* Students */}
      <section className="mb-16">
        <h2 className="text-text-secondary text-xs font-semibold uppercase tracking-wider mb-6">
          Students
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {students.map((char) => (
            <CharacterCard
              key={char.slug}
              character={char}
              href={`/characters/${char.slug}`}
            />
          ))}
        </div>
      </section>

      {/* Teachers */}
      {teachers.length > 0 && (
        <section>
          <h2 className="text-text-secondary text-xs font-semibold uppercase tracking-wider mb-6">
            Staff
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {teachers.map((char) => (
              <CharacterCard
                key={char.slug}
                character={char}
                href={`/characters/${char.slug}`}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
