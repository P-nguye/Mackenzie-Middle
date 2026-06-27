"use client";
// Global 2D / 3D toggle for the characters list page.
// One toggle controls the design mode for every card in the grid.
import { useState } from "react";
import CharacterCard from "@/components/CharacterCard";
import type { Character } from "@/data/characters";

type DesignMode = "2d" | "3d";

interface CharactersGridToggleProps {
  students: Character[];
  teachers: Character[];
}

export default function CharactersGridToggle({
  students,
  teachers,
}: CharactersGridToggleProps) {
  const [mode, setMode] = useState<DesignMode>("2d");

  return (
    <>
      {/* Design mode toggle — controls all cards below */}
      <div className="flex flex-wrap items-center gap-3 mb-10">
        <span className="text-text-muted text-xs font-semibold uppercase tracking-wider">
          Design View
        </span>
        <div className="flex rounded-lg overflow-hidden border border-white/10 bg-bg-card p-0.5 gap-0.5">
          {(["2d", "3d"] as DesignMode[]).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              aria-pressed={mode === m}
              className={`px-4 py-1.5 rounded-md text-sm font-black uppercase tracking-wider transition-all ${
                mode === m
                  ? "bg-accent-amber text-bg-primary"
                  : "text-text-muted hover:text-text-secondary"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
        <span className="text-text-muted text-xs">
          {mode === "2d" ? "Flat illustration style" : "3D rendered style"}
        </span>
      </div>

      {/* Students grid */}
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
              designMode={mode}
            />
          ))}
        </div>
      </section>

      {/* Staff grid */}
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
                designMode={mode}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
