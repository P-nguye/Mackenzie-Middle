import Link from "next/link";
import Image from "next/image";
import CharacterCard from "@/components/CharacterCard";
import { characters } from "@/data/characters";

export default function Home() {
  const featuredCharacters = characters.slice(0, 4);
  // Hero collage — center portrait gets priority (LCP)
  const heroTrio = ["shelley-morgan", "minh-le", "jack-armstrong"]
    .map((slug) => characters.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c?.portrait2d));

  return (
    <div>
      {/* Hero — split: copy left, cast collage right */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(108,99,212,0.12),transparent_55%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20 lg:pt-24 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Copy */}
            <div>
              <span className="badge badge-amber mb-6 inline-flex rise">Edmonton, 1985</span>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.02] tracking-tight mb-6 rise rise-1">
                Mackenzie Middle<span className="text-accent-amber">.</span>
              </h1>
              <p className="text-text-secondary text-lg sm:text-xl leading-relaxed mb-8 max-w-xl rise rise-2">
                A YouTube series and companion novel following eleven students and
                teachers through one unforgettable school year.
              </p>
              <div className="flex flex-wrap gap-3 rise rise-3">
                <Link href="/characters" className="btn-primary">
                  Meet the Cast
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/about" className="btn-outline">
                  About the Series
                </Link>
              </div>
            </div>

            {/* Cast collage — real 2D portraits, framed like class photos */}
            <div className="relative flex items-end justify-center rise rise-2">
              {heroTrio.map((char, i) => {
                const center = i === 1;
                return (
                  <div
                    key={char.slug}
                    className={`relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 ${
                      center
                        ? "w-[44%] max-w-[250px] z-10"
                        : `w-[36%] max-w-[200px] ${
                            i === 0 ? "-rotate-3 -mr-6" : "rotate-3 -ml-6"
                          } translate-y-5 opacity-90`
                    }`}
                  >
                    <Image
                      src={char.portrait2d!}
                      alt={char.name}
                      fill
                      priority={center}
                      className="object-cover"
                      sizes="(max-width: 1024px) 45vw, 25vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
                    {/* Side cards tuck under the center card, so keep labels on the outer edge */}
                    <p
                      className={`absolute bottom-3 font-display font-semibold text-sm text-text-primary ${
                        i === 2 ? "right-4" : "left-4"
                      }`}
                    >
                      {char.name.split(" ")[0]}
                    </p>
                  </div>
                );
              })}
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
            All 11 characters
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
              designMode="2d"
            />
          ))}
        </div>
      </section>

      {/* Follow the project — asymmetric grid */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/5">
        <h2 className="section-title mb-8">Follow the Project</h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Community — avatar cell */}
          <div className="md:col-span-12 card relative overflow-hidden p-8 flex flex-col justify-between min-h-[260px]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(232,160,69,0.10),transparent_60%)]" />
            <div className="relative">
              <div className="flex -space-x-3 mb-5">
                {characters
                  .filter((c) => c.portrait2d)
                  .slice(0, 5)
                  .map((c) => (
                    <div
                      key={c.slug}
                      className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-bg-card"
                    >
                      {/* Portraits are full-body shots — zoom toward the face for avatar crops */}
                      <Image
                        src={c.portrait2d!}
                        alt={c.name}
                        fill
                        className="object-cover scale-[2] origin-[50%_18%]"
                        sizes="88px"
                      />
                    </div>
                  ))}
              </div>
              <h3 className="font-display text-2xl font-bold text-text-primary mb-2">
                Join the Community
              </h3>
              <p className="text-text-secondary text-base leading-relaxed">
                Pick a character avatar, post on the message board, and talk with
                other fans in live chat.
              </p>
            </div>
            <Link href="/signup" className="relative btn-primary mt-6 self-start">
              Create an Account
            </Link>
          </div>

          {/* Media — full-width strip */}
          <div className="md:col-span-12 card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-accent-amber/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg font-bold text-text-primary">
                Media & Downloads
              </h3>
              <p className="text-text-secondary text-sm mt-0.5">
                Free wallpapers and the official soundtrack, released as production wraps.
              </p>
            </div>
            <Link href="/media" className="btn-ghost flex-shrink-0 self-start sm:self-center">
              Browse Downloads
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
