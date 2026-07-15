"use client";
// Soundtrack list with inline playback. Each track is a character's favourite
// song; only one plays at a time. Shows the character's avatar, a seekable
// progress bar, the real duration (from audio metadata), and a download link.
import { useState, useRef } from "react";
import Image from "next/image";
import { getCharacterBySlug } from "@/data/characters";

export interface Track {
  title: string;
  file: string;
  characterSlug: string;
}

interface Props {
  dir: string;
  tracks: Track[];
}

function formatTime(s: number) {
  if (!Number.isFinite(s)) return "--:--";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export default function SoundtrackPlayer({ dir, tracks }: Props) {
  const [current, setCurrent] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [durations, setDurations] = useState<Record<number, number>>({});
  const refs = useRef<(HTMLAudioElement | null)[]>([]);

  const toggle = (i: number) => {
    const audio = refs.current[i];
    if (!audio) return;

    // Pause whatever else is playing.
    refs.current.forEach((a, j) => {
      if (a && j !== i) a.pause();
    });

    if (current === i && playing) {
      audio.pause();
      setPlaying(false);
    } else {
      setCurrent(i);
      audio.play();
      setPlaying(true);
    }
  };

  const seek = (i: number, e: React.MouseEvent<HTMLDivElement>) => {
    const audio = refs.current[i];
    const dur = durations[i];
    if (!audio || !dur) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * dur;
    setTime(audio.currentTime);
  };

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {tracks.map((track, i) => {
        const char = getCharacterBySlug(track.characterSlug);
        const isCurrent = current === i;
        const isPlaying = isCurrent && playing;
        const dur = durations[i];
        const pct = isCurrent && dur ? (time / dur) * 100 : 0;
        const src = `${dir}/${track.file}`;

        return (
          <div
            key={track.file}
            className={`card p-4 flex items-center gap-4 transition-colors ${
              isCurrent ? "border-accent-violet/40" : ""
            }`}
          >
            {/* Avatar */}
            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-b from-bg-elevated to-bg-card">
              {char?.portrait2d ? (
                <Image
                  src={char.portrait2d}
                  alt={char.name}
                  fill
                  sizes="96px"
                  className="object-cover scale-[1.8] origin-[50%_15%]"
                />
              ) : null}
            </div>

            {/* Play / pause */}
            <button
              onClick={() => toggle(i)}
              aria-label={isPlaying ? `Pause ${track.title}` : `Play ${track.title}`}
              className="w-10 h-10 rounded-full bg-accent-violet text-bg-primary flex items-center justify-center flex-shrink-0 hover:brightness-110 transition"
            >
              {isPlaying ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Title + progress */}
            <div className="flex-1 min-w-0">
              <p className="text-text-primary text-sm font-semibold truncate">{track.title}</p>
              <p className="text-text-muted text-xs mt-0.5 truncate">
                {char ? `${char.name.split(" ")[0]}’s favourite` : "Soundtrack"}
              </p>

              <div className="flex items-center gap-2 mt-2">
                <div
                  onClick={(e) => seek(i, e)}
                  className="flex-1 h-1.5 rounded-full bg-bg-elevated overflow-hidden cursor-pointer"
                >
                  <div
                    className="h-full bg-accent-violet transition-[width] duration-150"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-text-muted text-[11px] tabular-nums flex-shrink-0 w-10 text-right">
                  {isCurrent ? formatTime(time) : formatTime(dur ?? NaN)}
                </span>
              </div>
            </div>

            {/* Download */}
            <a
              href={src}
              download={`Mackenzie Middle — ${track.title}.mp3`}
              aria-label={`Download ${track.title}`}
              className="w-9 h-9 rounded-full bg-bg-elevated flex items-center justify-center flex-shrink-0 text-text-secondary hover:text-accent-amber transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>

            {/* Hidden audio element (preloads metadata for the duration) */}
            <audio
              ref={(el) => {
                refs.current[i] = el;
              }}
              src={src}
              preload="metadata"
              onLoadedMetadata={(e) =>
                setDurations((d) => ({ ...d, [i]: e.currentTarget.duration }))
              }
              onTimeUpdate={(e) => {
                if (current === i) setTime(e.currentTarget.currentTime);
              }}
              onEnded={() => {
                setPlaying(false);
                setTime(0);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
