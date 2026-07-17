"use client";
// Detail-page portrait with 2D / 3D toggle.
// Drop portrait files into public/assets/characters/{2d,3d}/{slug}.webp,
// then set portrait2d / portrait3d on the Character object to activate them.
import { useState } from "react";
import Image from "next/image";
import type { Character } from "@/data/characters";

type DesignMode = "2d" | "3d";

interface CharacterPortraitProps {
  character: Character;
  // Replaces the 2D artwork, so the same character can be shown differently
  // depending on the section they were opened from. 3D mode is unaffected.
  portrait2dOverride?: string;
}

export default function CharacterPortrait({
  character,
  portrait2dOverride,
}: CharacterPortraitProps) {
  const [mode, setMode] = useState<DesignMode>("2d");

  const portrait =
    mode === "2d" ? (portrait2dOverride ?? character.portrait2d) : character.portrait3d;

  return (
    <div className="space-y-3">
      {/* 2D / 3D toggle */}
      <div className="flex items-center gap-3">
        <span className="text-text-muted text-xs font-semibold uppercase tracking-wider">
          Design
        </span>
        <div className="flex rounded-lg overflow-hidden border border-white/10 bg-bg-card p-0.5 gap-0.5">
          {(["2d", "3d"] as DesignMode[]).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              aria-pressed={mode === m}
              className={`px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider transition-all ${
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
          {mode === "2d" ? "Flat illustration" : "3D render"}
        </span>
      </div>

      {/* Portrait frame */}
      <div
        className={`relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b ${character.portraitPlaceholder}`}
      >
        {portrait ? (
          // Real artwork — swap in by setting portrait2d / portrait3d on the character
          <Image
            src={portrait}
            alt={`${character.name}, ${mode.toUpperCase()} design`}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        ) : (
          // Placeholder shown until artwork is added
          <>
            <div className="absolute inset-0 flex items-center justify-center opacity-15">
              <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </div>
            {/* Mode label so you can see the toggle working before art arrives */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none">
              <span className="text-white/15 text-5xl font-black tracking-widest select-none">
                {mode.toUpperCase()}
              </span>
              <p className="text-white/25 text-xs font-medium">
                {mode === "2d" ? "2D artwork coming soon" : "3D render coming soon"}
              </p>
            </div>
          </>
        )}

        {/* Grade badge — always on top */}
        <div className="absolute bottom-4 left-4 z-10">
          <span
            className={`badge ${character.isStaff ? "badge-violet" : "badge-amber"}`}
          >
            {character.grade}
          </span>
        </div>
      </div>
    </div>
  );
}
