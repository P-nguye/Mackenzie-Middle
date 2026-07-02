import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { characters, getCharacterBySlug } from "@/data/characters";
import AiChatPlaceholder from "@/components/AiChatPlaceholder";
import CharacterPortrait from "@/components/CharacterPortrait";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return characters.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const character = getCharacterBySlug(slug);
  if (!character) return {};
  return {
    title: character.name,
    description: character.bio,
  };
}

export default async function CharacterProfilePage({ params }: Props) {
  const { slug } = await params;
  const character = getCharacterBySlug(slug);

  if (!character) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      {/* Back */}
      <Link
        href="/characters"
        className="inline-flex items-center gap-1.5 text-text-muted text-sm hover:text-accent-amber transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        All characters
      </Link>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left: portrait with 2D/3D toggle + traits */}
        <div className="lg:col-span-1 space-y-6">
          {/* Portrait — client component handles the toggle */}
          <CharacterPortrait character={character} />

          {/* Traits */}
          <div className="card p-5">
            <h3 className="text-text-secondary text-xs font-semibold uppercase tracking-wider mb-3">
              Personality
            </h3>
            <div className="flex flex-wrap gap-2">
              {character.traits.map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1.5 bg-bg-elevated rounded-lg text-sm text-text-secondary border border-white/5"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Name & tagline */}
          <div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-text-primary mb-3 tracking-tight">
              {character.name}
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed italic">
              &ldquo;{character.tagline}&rdquo;
            </p>
          </div>

          {/* Bio */}
          <p className="text-text-secondary text-base leading-relaxed max-w-[65ch]">
            {character.bio}
          </p>

          {/* Relationships */}
          <div className="border-t border-white/5 pt-8">
            <h2 className="font-display text-2xl font-bold text-text-primary mb-6">
              Relationships
            </h2>
            {character.relationships && character.relationships.length > 0 ? (
              <div className="space-y-6">
                {character.relationships.map(({ role, person, slug: relSlug, description }, i) => (
                  <div key={i}>
                    <div className="flex items-baseline gap-3 flex-wrap">
                      {relSlug ? (
                        <Link
                          href={`/characters/${relSlug}`}
                          className="font-display font-semibold text-text-primary hover:text-accent-amber transition-colors"
                        >
                          {person}
                        </Link>
                      ) : (
                        <span className="font-display font-semibold text-text-primary">
                          {person}
                        </span>
                      )}
                      <span className="text-accent-amber text-xs font-semibold uppercase tracking-wider">
                        {role}
                      </span>
                    </div>
                    {description && (
                      <p className="text-text-muted text-sm leading-relaxed mt-1 max-w-[65ch]">
                        {description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-text-muted text-sm">Character relationship map coming soon.</p>
            )}
          </div>

          {/* AI Chat placeholder */}
          <AiChatPlaceholder characterName={character.name} />
        </div>
      </div>
    </div>
  );
}
