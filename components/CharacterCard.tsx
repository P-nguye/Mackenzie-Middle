import Link from "next/link";
import type { Character } from "@/data/characters";

interface CharacterCardProps {
  character: Character;
  href?: string;
  selectable?: boolean;
  selected?: boolean;
  onSelect?: (slug: string) => void;
}

export default function CharacterCard({
  character,
  href,
  selectable = false,
  selected = false,
  onSelect,
}: CharacterCardProps) {
  const inner = (
    <div
      className={`card-hover cursor-pointer h-full flex flex-col ${
        selectable && selected
          ? "border-accent-amber/60 shadow-lg shadow-accent-amber/10"
          : ""
      }`}
      onClick={selectable && onSelect ? () => onSelect(character.slug) : undefined}
    >
      {/* Portrait area */}
      <div
        className={`relative w-full aspect-[3/4] bg-gradient-to-b ${character.portraitPlaceholder} flex items-end p-4`}
      >
        {/* Placeholder silhouette */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
        </div>

        {/* Grade badge */}
        <span className={`relative z-10 badge ${character.grade === "Teacher" ? "badge-violet" : "badge-amber"}`}>
          {character.grade}
        </span>

        {selectable && selected && (
          <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-accent-amber flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-bg-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-1 flex-1">
        <h3 className="font-semibold text-text-primary text-base leading-snug">{character.name}</h3>
        <p className="text-text-secondary text-sm leading-snug line-clamp-2">{character.tagline}</p>
        <div className="flex flex-wrap gap-1 mt-auto pt-3">
          {character.traits.slice(0, 2).map((trait) => (
            <span key={trait} className="text-xs text-text-muted bg-bg-elevated px-2 py-0.5 rounded-full">
              {trait}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (href && !selectable) {
    return (
      <Link href={href} className="block h-full">
        {inner}
      </Link>
    );
  }

  return inner;
}
