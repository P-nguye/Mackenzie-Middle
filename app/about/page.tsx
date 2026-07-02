import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About the Mackenzie Middle series, a YouTube show and novel set in 1980s Edmonton.",
};

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
            school in 1985. It follows a small cast of students, and one teacher, through the
            social dynamics, small dramas, and occasional genuine crises of life at age twelve
            and thirteen.
          </p>
          <p>
            The show is interested in the gap between who people appear to be in the hallway
            and who they actually are. The bully who is afraid. The star athlete who would
            rather be drawing. The sharp editor who is carrying more than she lets on. Edmonton
            in 1985 is the backdrop: the cold, the hockey, the particular feeling of a city
            growing into itself. But the stories are timeless.
          </p>
        </section>

        <section className="border-t border-white/5 pt-14">
          <h2 className="font-display text-text-primary font-bold text-2xl mb-4">The Setting</h2>
          <p>
            Edmonton, Alberta, 1985. The Oilers are in the middle of their dynasty run. The oil
            boom has softened into something more complicated. Winter lasts seven months and
            everyone pretends that is fine. Mackenzie Middle School is a real-feeling fictional
            institution on the north side of the city, the kind of place where everyone knows
            each other a little too well and new kids stick out immediately.
          </p>
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
