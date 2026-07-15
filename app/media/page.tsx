import type { Metadata } from "next";
import MediaCard from "@/components/MediaCard";
import SoundtrackPlayer, { type Track } from "@/components/SoundtrackPlayer";

export const metadata: Metadata = {
  title: "Media & Downloads",
  description: "Free wallpapers and the Mackenzie Middle official soundtrack, available to download.",
};

const WALLPAPER_DIR = "/assets/wallpaper";

// Real downloadable wallpapers. `file` is the exact filename in public/assets/wallpaper.
const wallpapers = [
  { title: "Minh Riding His Bike", file: "minh riding bike.png" },
  { title: "Shelley and Her Walkman", file: "Shelley listen to her walkman.png" },
  { title: "Jack Running Track", file: "Jack running track.png" },
  { title: "Tara Skateboarding", file: "tara skateboarding.png" },
  { title: "June's Recital", file: "June recital.png" },
  { title: "Willie Studying", file: "Willie studying.png" },
  { title: "Blake on His Motorcycle", file: "Blake on his motorcycle.png" },
  { title: "Blake with His Red Ferrari", file: "Blake with his red ferrari.png" },
  { title: "Sloan Putting On Earrings", file: "Sloan putting on earrings.png" },
  { title: "Oliver Steals Some Cookies", file: "Oliver sneek into kitchen to steal cookies.png" },
  { title: "The Fairchilds", file: "the Fairchilds.png" },
];

const SOUNDTRACK_DIR = "/assets/soundtracks";

// Each song is a character's favourite (see the folder's favourite-songs doc).
// `file` is the exact filename in public/assets/soundtracks.
const tracks: Track[] = [
  { title: "Summer Never Knew", file: "Summeer Never Knew.mp3", characterSlug: "shelley-morgan" },
  { title: "Friday Countdown", file: "Friday Countdown.mp3", characterSlug: "minh-le" },
  { title: "Finding My Place", file: "Finding My Place.mp3", characterSlug: "june-nakamura" },
  { title: "Stand Together", file: "Stand Together.mp3", characterSlug: "jack-armstrong" },
  { title: "Run Like the Wind", file: "Run Like the Wind.mp3", characterSlug: "tara-bennett" },
  { title: "Perfect on the Outside", file: "Perfect on the Outside.mp3", characterSlug: "sloan-fairchild" },
  { title: "King of the Hallway", file: "King of the Hallway.mp3", characterSlug: "blake-montgomery" },
];

export default function MediaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
          Media & Downloads
        </h1>
        <p className="text-text-secondary text-lg max-w-xl">
          Wallpapers and soundtrack tracks, free for fans to keep. Stream the songs
          right here, or download anything to keep.
        </p>
      </div>

      {/* Wallpapers */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-text-primary font-bold text-2xl">Wallpapers</h2>
          <span className="badge badge-amber">{wallpapers.length} free</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {wallpapers.map((w) => {
            const src = `${WALLPAPER_DIR}/${w.file}`;
            return (
              <MediaCard
                key={w.file}
                title={w.title}
                type="wallpaper"
                isPlaceholder={false}
                image={src}
                downloadHref={src}
                downloadName={`Mackenzie Middle — ${w.title}.png`}
              />
            );
          })}
        </div>
      </section>

      {/* Soundtrack */}
      <section>
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-display text-text-primary font-bold text-2xl">Soundtrack</h2>
          <span className="badge badge-violet">{tracks.length} tracks</span>
        </div>
        <p className="text-text-secondary text-sm mb-6">
          Each song is a character&rsquo;s favourite. Press play to listen, or download the MP3.
        </p>
        <SoundtrackPlayer dir={SOUNDTRACK_DIR} tracks={tracks} />
      </section>
    </div>
  );
}
