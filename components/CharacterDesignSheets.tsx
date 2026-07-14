"use client";
// Tabbed viewer for a character's design sheets (expressions / profile / props /
// wardrobe). Only tabs that have an image for the character are shown; if none
// exist, the parent renders nothing.
import { useState } from "react";
import Image from "next/image";
import type { CharacterSheets } from "@/data/characterSheets";

type SheetKey = keyof CharacterSheets;

const TABS: { key: SheetKey; label: string }[] = [
  { key: "expressions", label: "Expressions" },
  { key: "profile", label: "Profile" },
  { key: "props", label: "Props" },
  { key: "wardrobe", label: "Wardrobe" },
];

interface Props {
  characterName: string;
  sheets: CharacterSheets;
}

export default function CharacterDesignSheets({ characterName, sheets }: Props) {
  // Only the tabs that actually have artwork for this character
  const available = TABS.filter((tab) => sheets[tab.key]);
  const [active, setActive] = useState<SheetKey>(available[0]?.key ?? "profile");

  if (available.length === 0) return null;

  const activeSrc = sheets[active];
  const activeLabel = TABS.find((t) => t.key === active)?.label ?? "";

  return (
    <section className="border-t border-white/5 pt-10 mt-12">
      <h2 className="font-display text-2xl font-bold text-text-primary mb-6">
        Character Design Sheets
      </h2>

      {/* Sub-navbar */}
      <div className="flex flex-wrap gap-1 mb-6 border-b border-white/5">
        {available.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            aria-pressed={active === tab.key}
            className={`px-4 py-2.5 text-sm font-semibold transition-colors border-b-2 -mb-px ${
              active === tab.key
                ? "text-accent-amber border-accent-amber"
                : "text-text-muted border-transparent hover:text-text-secondary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active sheet */}
      {activeSrc && (
        <div className="relative w-full h-[60vh] sm:h-[72vh] bg-bg-elevated rounded-xl border border-white/10 overflow-hidden">
          <Image
            key={activeSrc}
            src={activeSrc}
            alt={`${characterName} — ${activeLabel} sheet`}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-contain"
          />
        </div>
      )}
    </section>
  );
}
