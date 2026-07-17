import type { Metadata } from "next";
import Link from "next/link";
import ZoomGallery, { type GalleryImage } from "@/components/ZoomGallery";

export const metadata: Metadata = {
  title: "Behind the Scenes",
  description:
    "Paint sketches, production art, and the story behind Mackenzie Middle — how we designed the school, the houses, the storyboards, and the soundtrack, plus fun facts from the early 1980s.",
};

const SCHOOL = "/assets/behindTheScene/Designing Mackenzie School and Surrounding Area";
const MINH = "/assets/behindTheScene/Designing Minh_s House";
const SLOAN = "/assets/behindTheScene/Designing Sloan_s House";
const EP2 = "/assets/behindTheScene/Cartoon concepts from Episode 2";

const schoolImages: GalleryImage[] = [
  { src: `${SCHOOL}/Mackenzie Middle and Surrounding area.png`, label: "Surrounding area — final design" },
  { src: `${SCHOOL}/Mackenzie Middle and surrounding area.jpg`, label: "Surrounding area — early sketch" },
  { src: `${SCHOOL}/School interior.png`, label: "School interior — final design" },
  { src: `${SCHOOL}/school interior.jpg`, label: "School interior — early sketch" },
];

const minhImages: GalleryImage[] = [
  { src: `${MINH}/Front_House_Behind_The_Scenes.png`, label: "Front of the house" },
  { src: `${MINH}/Behind_the_Scenes_Side_by_Side.png`, label: "Sketch to final — side by side" },
  { src: `${MINH}/Living room.png`, label: "Living room — final" },
  { src: `${MINH}/living room.jpg`, label: "Living room — sketch" },
  { src: `${MINH}/Kitchen_Behind_The_Scenes.png`, label: "Kitchen" },
  { src: `${MINH}/backyard.png`, label: "Back yard — final" },
  { src: `${MINH}/back yard.jpg`, label: "Back yard — sketch" },
];

const estateImages: GalleryImage[] = [
  { src: `${SLOAN}/Slon_s Mansion.jpg`, label: "Fairchild Estate" },
  { src: `${SLOAN}/Sloan Foyer.jpg`, label: "The foyer" },
];

// Ordered to read like the Episode 2 snow-fight sequence.
const ep2Images: GalleryImage[] = [
  { src: `${EP2}/shovel snow.jpg`, label: "Shovelling snow" },
  { src: `${EP2}/tossing snow out of hockey rink..jpg`, label: "Tossing snow out of the rink" },
  { src: `${EP2}/snow piles up on edge of hockey rink.jpg`, label: "Snow piles up on the rink's edge" },
  { src: `${EP2}/girls arrived at bench.jpg`, label: "The girls arrive at the bench" },
  { src: `${EP2}/girls putting on skates.jpg`, label: "Putting on skates" },
  { src: `${EP2}/girls go for skates.jpg`, label: "Going for a skate" },
  { src: `${EP2}/girls fell to the ice.jpg`, label: "Falling on the ice" },
  { src: `${EP2}/what do you know about hockey.jpg`, label: "“What do you know about hockey?”" },
  { src: `${EP2}/girls throws snowballs at boys..jpg`, label: "Snowballs at the boys" },
  { src: `${EP2}/girls get hit with snow balls.jpg`, label: "The girls get hit back" },
  { src: `${EP2}/what are you girls doing next.jpg`, label: "“What are you girls doing next?”" },
  { src: `${EP2}/girls leaving.jpg`, label: "Heading home" },
];

const funFacts: { icon: string; title: string; body: string }[] = [
  {
    icon: "📺",
    title: "Cable Television",
    body: "Most stations signed off around midnight, and families used rabbit-ear antennas they were forever adjusting for a clear picture. Premium channels like First Choice and SuperChannel were revolutionary — you could watch recent movies at home. On one April Fool's Day, Edmonton's 630 CHED announced that police helicopters could detect homes using pirated cable boxes; the prank was so convincing that people actually lined up at police stations to turn theirs in.",
  },
  {
    icon: "📼",
    title: "VHS — Movie Night at Home",
    body: "Instead of the theatre, families rented VHS tapes from the local video store. So many people forgot to rewind that stores slapped a familiar sticker on every tape: “Be Kind, Rewind.” Wire two players together and you could copy a rented movie onto a blank tape — each analog copy a little fuzzier than the last, but good enough.",
  },
  {
    icon: "📚",
    title: "The Library",
    body: "Before the internet, the library was the entertainment center. The downtown Edmonton Public Library felt enormous — endless books, plus a collection of cassette tapes and vinyl you could borrow. One overdue book came back more than a year late; the librarian just smiled and didn't charge a cent.",
  },
  {
    icon: "📻",
    title: "The Radio",
    body: "The radio sat at the center of everyday life — music, news, weather, and most importantly Edmonton Oilers hockey, with call-in shows before and after every game. Unlike TV's handful of channels, radio stayed on late into the night. It played through breakfast, homework, and chores — like having a friend in the room.",
  },
  {
    icon: "❤️",
    title: "A Simpler Time",
    body: "No smartphones, social media, streaming, or instant messaging. Entertainment came from the community rink, bike rides, trading O-Pee-Chee cards, the radio, the library, and staying outside until the streetlights came on. Many stories in Mackenzie Middle grew from those small moments — the ones that turn out to matter most.",
  },
];

export default function BehindTheScenesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="mb-14">
        <span className="badge badge-violet mb-4 inline-flex">Behind the Scenes</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-5">
          Behind the Scenes
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
          Every great story begins with an idea. Mackenzie Middle is inspired by real memories,
          real places, and a lot of careful world-building. This is a look behind the curtain —
          from the first paint sketches to the final production art.
        </p>
      </div>

      <div className="space-y-16">
        {/* Building the school */}
        <section>
          <h2 className="font-display text-2xl font-bold text-text-primary mb-3">
            Building Mackenzie Middle
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6 max-w-2xl">
            Mackenzie Middle wasn&rsquo;t created overnight. Every hallway, classroom, locker, and
            entrance was carefully planned so the school would feel like a real place students
            could call home. Rather than random backgrounds, we designed an entire neighborhood —
            a surrounding area map, the Duncan Community Centre, baseball diamonds, and the strip
            mall — where the characters live, play hockey, walk to school, and make memories.
          </p>
          <ZoomGallery images={schoolImages} featuredFirst />
        </section>

        {/* Minh's house */}
        <section className="border-t border-white/5 pt-14">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-3">
            Designing Minh&rsquo;s House
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6 max-w-2xl">
            From the front step to the back yard, Minh&rsquo;s home was built room by room. These
            side-by-side sketches and final renders show how a modest 1980s Edmonton house came
            together — the living room, the kitchen where the Oilers newspaper lands on the table,
            and the yard out back.
          </p>
          <ZoomGallery images={minhImages} featuredFirst />
        </section>

        {/* Fairchild Estate */}
        <section className="border-t border-white/5 pt-14">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-3">
            Designing the Fairchild Estate
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6 max-w-2xl">
            The Fairchild estate had to feel like a different world entirely — grand and
            exacting, but never cold. It&rsquo;s magnificent because of its architecture; it
            feels like home because of the people inside it. Here&rsquo;s the mansion and its
            foyer taking shape.
          </p>
          <ZoomGallery images={estateImages} />
        </section>

        {/* Storyboards */}
        <section className="border-t border-white/5 pt-14">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-3">
            Storyboards &amp; Early Animation
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6 max-w-2xl">
            Before animation begins, scenes are visualized through concept art and storyboards.
            These early illustrations from the Episode 2 snow fight help establish timing, emotion,
            and camera angles before the final episode is produced.
          </p>
          <ZoomGallery images={ep2Images} />
        </section>

        {/* Music */}
        <section className="border-t border-white/5 pt-14">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-3">
            Music Begins With the Story
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6 max-w-2xl">
            The songs in Mackenzie Middle aren&rsquo;t written after the episodes — they grow
            directly from the story itself. Many lyrics are inspired by the exact scenes they
            accompany. Take &ldquo;Oilers Forever,&rdquo; drawn straight from this moment in the
            Episode 3 script:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Script excerpt */}
            <div className="card p-6">
              <p className="text-accent-amber text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Episode 3 — O-Pee-Chee · Script
              </p>
              <p className="text-text-secondary text-sm leading-relaxed whitespace-pre-line">
                {`Minh awoke from his sleep. He ran to the front window and stared. The paper boy was out front, pulling a sled of newspapers, and threw the Edmonton Journal onto the step. Minh opened the door; the cold air made him shiver.

He laid the paper on the kitchen table and turned to the Sports section. Of course the Oilers were on the front page — they'd demolished the Nordiques 9 to 2 in Quebec City. Gretzky with a hat trick and two helpers, Kurri with two goals and an assist, Coffey with a goal and three helpers.

Minh took out the scissors, cut out the Oilers article, and ran to his room.`}
              </p>
            </div>

            {/* Lyrics */}
            <div className="card p-6 border-accent-violet/20 bg-accent-violet/[0.04]">
              <p className="text-accent-violet text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Soundtrack · &ldquo;Oilers Forever&rdquo;
              </p>
              <p className="text-text-secondary text-base leading-loose italic whitespace-pre-line">
                {`Morning papers on the table,
Scissors in my hand...
Every headline tells a story,
Of the greatest hockey band...`}
              </p>
            </div>
          </div>
        </section>

        {/* Fun facts */}
        <section className="border-t border-white/5 pt-14">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-3">
            Fun Facts from the Early 1980s
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6 max-w-2xl">
            Mackenzie Middle is inspired by growing up in Edmonton in the early 1980s. If you were
            born after that decade, some of it may seem unusual — rabbit-ear antennas, &ldquo;Be
            Kind, Rewind,&rdquo; O-Pee-Chee cards, endless hours at the community rink. These help
            explain the world our characters lived in, and why those everyday moments meant so much.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {funFacts.map((fact) => (
              <div key={fact.title} className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl" aria-hidden>
                    {fact.icon}
                  </span>
                  <h3 className="font-display text-lg font-bold text-text-primary">{fact.title}</h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{fact.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="border-t border-white/5 pt-12 flex flex-wrap gap-4">
          <Link href="/characters" className="btn-primary">
            Meet the Cast
          </Link>
          <Link href="/about" className="btn-outline">
            About the Series
          </Link>
        </div>
      </div>
    </div>
  );
}
