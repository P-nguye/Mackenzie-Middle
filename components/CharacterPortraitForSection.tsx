"use client";
// Picks the portrait to show based on which section the visitor arrived from.
//
// Sloan appears both under Students and in the Fairchild Estate, with different
// artwork in each. Estate cards link through with `?from=estate`, so opening her
// from the estate shows her at home, while opening her from Students shows her
// student portrait. Characters with no estate artwork are unaffected.
//
// Reading the query string is what makes this a client component. The detail
// page renders a plain <CharacterPortrait> as the Suspense fallback, so the
// prerendered HTML still contains the default artwork rather than a skeleton —
// and because grid clicks are client-side navigations, the correct portrait is
// there on first paint.
import { useSearchParams } from "next/navigation";
import CharacterPortrait from "@/components/CharacterPortrait";
import type { Character } from "@/data/characters";
import { ESTATE_QUERY, ESTATE_QUERY_VALUE } from "@/data/estate";

interface Props {
  character: Character;
  // The estate artwork for this character, when they have any.
  estatePortrait2d?: string;
}

export default function CharacterPortraitForSection({
  character,
  estatePortrait2d,
}: Props) {
  const fromEstate =
    useSearchParams().get(ESTATE_QUERY) === ESTATE_QUERY_VALUE;

  return (
    <CharacterPortrait
      character={character}
      portrait2dOverride={fromEstate ? estatePortrait2d : undefined}
    />
  );
}
