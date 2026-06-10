import type { Metadata } from "next";
import MediaCard from "@/components/MediaCard";

export const metadata: Metadata = {
  title: "Media & Downloads",
  description: "Free wallpapers and the Mackenzie Middle official soundtrack — available to download.",
};

const wallpapers = [
  { title: "Edmonton Winter — Desktop" },
  { title: "Edmonton Winter — Mobile" },
  { title: "Mackenzie Middle Logo" },
  { title: "Cast Ensemble" },
  { title: "The Hallway" },
  { title: "Class of '85" },
];

const tracks = [
  { title: "Main Theme", subtitle: "2:34" },
  { title: "The First Day", subtitle: "3:12" },
  { title: "Lunchroom Blues", subtitle: "2:58" },
  { title: "After School", subtitle: "4:01" },
  { title: "Edmonton Snow", subtitle: "3:44" },
  { title: "Closing Credits", subtitle: "2:21" },
];

export default function MediaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <span className="badge badge-amber mb-4 inline-flex">Free Downloads</span>
        <h1 className="text-4xl md:text-5xl font-black text-text-primary mb-4">
          Media & Downloads
        </h1>
        <p className="text-text-secondary text-lg max-w-xl">
          Wallpapers and soundtrack tracks — free for fans to keep. All assets will be available
          when production wraps.
        </p>
      </div>

      {/* Wallpapers */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-text-primary font-bold text-xl">Wallpapers</h2>
          <span className="badge badge-amber">Coming Soon</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {wallpapers.map((w) => (
            <MediaCard key={w.title} title={w.title} type="wallpaper" isPlaceholder />
          ))}
        </div>
      </section>

      {/* Soundtrack */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-text-primary font-bold text-xl">Soundtrack</h2>
          <span className="badge badge-amber">Coming Soon</span>
        </div>
        <div className="card divide-y divide-white/5">
          {tracks.map((track, i) => (
            <div key={track.title} className="flex items-center gap-4 px-4 py-3">
              <span className="text-text-muted text-sm w-5 text-center">{i + 1}</span>
              <div className="w-8 h-8 rounded-lg bg-accent-violet/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-accent-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-text-primary text-sm font-medium">{track.title}</p>
                <p className="text-text-muted text-xs">{track.subtitle}</p>
              </div>
              <span className="badge badge-amber text-xs">Coming Soon</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
