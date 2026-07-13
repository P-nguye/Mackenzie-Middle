import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "About the Mackenzie Middle series, a YouTube show and novel set in 1980s Edmonton.",
};

// School photos in /public/assets/Mackenzie MIddle
const schoolPhotos = [
  {
    src: "/assets/Mackenzie MIddle/back of school view.png",
    caption: "Back of the school",
  },
  {
    src: "/assets/Mackenzie MIddle/parking lot view.png",
    caption: "The parking lot",
  },
  {
    src: "/assets/Mackenzie MIddle/school interior.png",
    caption: "Inside the school",
  },
  {
    src: "/assets/Mackenzie MIddle/MacKenzie Middle and surrounding area.png",
    caption: "Mackenzie Middle and the surrounding area",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-14">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
          About Mackenzie Middle
        </h1>
      </div>

      <div className="space-y-14 text-text-secondary text-base leading-relaxed">
        <section>
          <h2 className="font-display text-text-primary font-bold text-2xl mb-4">The Series</h2>
          <p className="mb-4">
            Mackenzie Middle is a YouTube series and companion novel set in an Edmonton middle
            school in 1980s. It follows a small cast of students, and one teacher, through the
            social dynamics, small dramas, and occasional genuine crises of life at age twelve
            and thirteen.
          </p>
          <p>
            The show is interested in the gap between who people appear to be in the hallway
            and who they actually are. The bully who is afraid. The star athlete who would
            rather be drawing. The sharp editor who is carrying more than she lets on. Edmonton
            in 1980s is the backdrop: the cold, the hockey, the particular feeling of a city
            growing into itself. But the stories are timeless.
          </p>
        </section>

        <section className="border-t border-white/5 pt-14">
          <h2 className="font-display text-text-primary font-bold text-2xl mb-4">The Setting</h2>
          <p className="mb-8">
            Edmonton, Alberta, 1980s. The Oilers are in the middle of their dynasty run. The oil
            boom has softened into something more complicated. Winter lasts seven months and
            everyone pretends that is fine. Mackenzie Middle School is a real-feeling fictional
            institution on the north side of the city, the kind of place where everyone knows
            each other a little too well and new kids stick out immediately.
          </p>

          {/* School photos */}
          <figure className="mb-6">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/assets/Mackenzie MIddle/Mackenzie Middle school front view.png"
                alt="Front view of Mackenzie Middle School"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="text-text-muted text-sm mt-2 text-center">
              Mackenzie Middle School — front view
            </figcaption>
          </figure>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {schoolPhotos.map((photo) => (
              <figure key={photo.src}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, 380px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-text-muted text-sm mt-2 text-center">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="border-t border-white/5 pt-14">
          <h2 className="font-display text-text-primary font-bold text-2xl mb-4">
            Production Status
          </h2>
          <p className="mb-4">
            The series is currently in pre-production. Character design, scripting, and the
            novel manuscript are all underway. This website is a home base for the project as
            it develops: a place to follow along, get to know the characters, and connect with
            other fans before the first episode drops.
          </p>
          <p>
            Media assets (wallpapers, soundtrack, novel PDF, and audio chapters) will be
            released progressively as they are completed.
          </p>
        </section>

        <div className="border-t border-white/5 pt-10 flex flex-wrap gap-4">
          <Link href="/characters" className="btn-primary">
            Meet the Cast
          </Link>
          <Link href="/community" className="btn-outline">
            Join the Community
          </Link>
        </div>
      </div>
    </div>
  );
}
