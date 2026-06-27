import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { characters, getCharacterBySlug } from "@/data/characters";
import AiChatPlaceholder from "@/components/AiChatPlaceholder";

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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        All characters
      </Link>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left: portrait + traits */}
        <div className="lg:col-span-1 space-y-6">
          {/* Portrait */}
          <div
            className={`relative w-full aspect-[3/4] rounded-2xl bg-gradient-to-b ${character.portraitPlaceholder} overflow-hidden`}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-15">
              <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </div>
            <div className="absolute bottom-4 left-4">
              <span className={`badge ${character.grade === "Teacher" || character.grade === "Principal" ? "badge-violet" : "badge-amber"}`}>
                {character.grade}
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white/30 text-xs font-medium">Portrait coming soon</p>
            </div>
          </div>

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
            <h1 className="text-4xl md:text-5xl font-black text-text-primary mb-3 tracking-tight">
              {character.name}
            </h1>
            <p className="text-text-secondary text-xl leading-relaxed italic">
              &ldquo;{character.tagline}&rdquo;
            </p>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-text-secondary text-xs font-semibold uppercase tracking-wider mb-3">
              About
            </h2>
            <p className="text-text-secondary text-base leading-relaxed">{character.bio}</p>
          </div>

          {/* Relationships placeholder */}
          <div className="card p-5">
            <h2 className="text-text-secondary text-xs font-semibold uppercase tracking-wider mb-3">
              Relationships
            </h2>
            <p className="text-text-muted text-sm">
              Character relationship map coming soon.
            </p>
          </div>

          {/* AI Chat placeholder */}
          <AiChatPlaceholder characterName={character.name} />
        </div>
      </div>
    </div>
  );
}
