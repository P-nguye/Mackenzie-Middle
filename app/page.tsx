import Link from "next/link";
import CharacterCard from "@/components/CharacterCard";
import { characters } from "@/data/characters";

export default function Home() {
  const featuredCharacters = characters.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(108,99,212,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(232,160,69,0.08),transparent_50%)]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24">
          <div className="max-w-2xl">
            <span className="badge badge-amber mb-6 inline-flex">Edmonton, 1985</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-text-primary leading-[1.05] tracking-tight mb-6">
              Mackenzie{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-amber to-accent-violet">
                Middle
              </span>
            </h1>
            <p className="text-text-secondary text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
              A YouTube series and novel following the students of Mackenzie Middle School
              through the drama, friendship, and confusion of growing up in 1980s Edmonton.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/characters" className="btn-primary">
                Meet the Cast
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/novel" className="btn-outline">
                Read the Novel
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Characters strip */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="section-title">The Cast</h2>
            <p className="section-subtitle">The students and teachers of Mackenzie Middle.</p>
          </div>
          <Link href="/characters" className="btn-ghost flex-shrink-0">
            View all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredCharacters.map((char) => (
            <CharacterCard
              key={char.slug}
              character={char}
              href={`/characters/${char.slug}`}
            />
          ))}
        </div>
      </section>

      {/* Content teasers */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Media */}
          <div className="card p-6 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent-amber/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-text-primary font-semibold text-lg">Media Downloads</h3>
              <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                Free wallpapers and the official soundtrack — available to download.
              </p>
            </div>
            <Link href="/media" className="btn-outline mt-auto self-start">
              Browse Media
            </Link>
          </div>

          {/* Novel */}
          <div className="card p-6 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent-violet/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-accent-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h3 className="text-text-primary font-semibold text-lg">The Novel</h3>
              <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                Read the full story as a PDF or listen to the audio chapters.
              </p>
            </div>
            <Link href="/novel" className="btn-outline mt-auto self-start">
              Read Now
            </Link>
          </div>

          {/* Community */}
          <div className="card p-6 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-text-primary font-semibold text-lg">Join the Community</h3>
              <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                Create an account, pick your character avatar, and join the conversation.
              </p>
            </div>
            <Link href="/signup" className="btn-primary mt-auto self-start">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
