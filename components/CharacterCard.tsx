import Link from "next/link";
import Image from "next/image";
import type { Character } from "@/data/characters";

interface CharacterCardProps {
  character: Character;
  href?: string;
  selectable?: boolean;
  selected?: boolean;
  onSelect?: (slug: string) => void;
  // Passed by CharactersGridToggle to switch all cards between design modes.
  // When undefined (e.g. home page carousel), the card renders the gradient placeholder.
  designMode?: "2d" | "3d";
  // Replaces the `grade` badge for this card only — lets one section label a
  // character differently (e.g. "Eldest Sister" on the Fairchild Estate grid).
  badgeLabel?: string;
  // Replaces the 2D artwork for this card only, so a character can be shown
  // differently per section. 3D mode is unaffected.
  portrait2dOverride?: string;
}

export default function CharacterCard({
  character,
  href,
  selectable = false,
  selected = false,
  onSelect,
  designMode,
  badgeLabel,
  portrait2dOverride,
}: CharacterCardProps) {
  const portrait =
    designMode === "2d"
      ? (portrait2dOverride ?? character.portrait2d)
      : designMode === "3d"
        ? character.portrait3d
        : undefined;

  const inner = (
    <div
      className={`group relative aspect-[3/4] rounded-xl overflow-hidden border cursor-pointer transition-all duration-300 ${
        selectable && selected
          ? "border-accent-amber shadow-lg shadow-accent-amber/10"
          : "border-white/5 hover:border-accent-amber/40 hover:shadow-lg hover:shadow-black/40"
      }`}
      onClick={selectable && onSelect ? () => onSelect(character.slug) : undefined}
    >
      {/* Backdrop gradient — visible until artwork loads / when artwork is absent */}
      <div className={`absolute inset-0 bg-gradient-to-b ${character.portraitPlaceholder}`} />

      {portrait ? (
        // Real artwork — activated by setting portrait2d/portrait3d in data/characters.ts
        <Image
          src={portrait}
          alt={`${character.name}, ${designMode?.toUpperCase()} design`}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
      ) : (
        // Silhouette placeholder until artwork is added
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
        </div>
      )}

      {/* Small mode indicator shown on placeholder cards when toggle is active */}
      {designMode && !portrait && (
        <span className="absolute top-3 right-3 text-white/30 text-xs font-black tracking-widest select-none">
          {designMode.toUpperCase()}
        </span>
      )}

      {/* Scrim so name/role stay readable over the photo */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

      {/* Info */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="font-display font-semibold text-text-primary text-base leading-snug">
          {character.name}
        </h3>
        <p
          className={`text-xs mt-0.5 ${
            character.isStaff ? "text-accent-violet" : "text-accent-amber"
          }`}
        >
          {badgeLabel ?? character.grade}
        </p>
      </div>

      {selectable && selected && (
        <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-accent-amber flex items-center justify-center z-10">
          <svg
            className="w-3.5 h-3.5 text-bg-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      )}
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
