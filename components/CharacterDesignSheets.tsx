"use client";
// Cinematic tabbed viewer for a character's design sheets (profile / expressions
// / props / wardrobe). Tabs are an icon segmented-control; only tabs that have an
// image for the character are shown. The active sheet renders in a framed viewer
// with a caption bar, prev/next arrows, and a fullscreen zoom lightbox
// (Esc to close, ← / → to navigate). If no sheets exist, the parent renders nothing.
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { CharacterSheets } from "@/data/characterSheets";

type SheetKey = keyof CharacterSheets;

const TABS: { key: SheetKey; label: string; icon: React.ReactNode }[] = [
  {
    key: "profile",
    label: "Profile",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    ),
  },
  {
    key: "expressions",
    label: "Expressions",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    key: "props",
    label: "Props",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    ),
  },
  {
    key: "wardrobe",
    label: "Wardrobe",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4l-4 3-4-3-5 4 3 3 2-1v10h8V10l2 1 3-3-5-4z" />
    ),
  },
];

interface Props {
  characterName: string;
  sheets: CharacterSheets;
}

export default function CharacterDesignSheets({ characterName, sheets }: Props) {
  // Only the tabs that actually have artwork for this character
  const available = TABS.filter((tab) => sheets[tab.key]);
  const [active, setActive] = useState<SheetKey>(available[0]?.key ?? "profile");
  const [zoomed, setZoomed] = useState(false);

  const activeIndex = available.findIndex((t) => t.key === active);
  const activeTab = available[activeIndex];
  const activeSrc = activeTab ? sheets[activeTab.key] : undefined;

  const goTo = useCallback(
    (dir: number) => {
      if (available.length < 2) return;
      const next = (activeIndex + dir + available.length) % available.length;
      setActive(available[next].key);
    },
    [activeIndex, available]
  );

  // Keyboard nav: arrows switch sheets, Esc closes the lightbox.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(1);
      else if (e.key === "ArrowLeft") goTo(-1);
      else if (e.key === "Escape") setZoomed(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo]);

  // Lock body scroll while the lightbox is open.
  useEffect(() => {
    if (!zoomed) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [zoomed]);

  if (available.length === 0) return null;

  return (
    <section className="border-t border-white/5 pt-10 mt-12">
      <div className="flex items-end justify-between gap-4 flex-wrap mb-6">
        <div>
          <p className="text-accent-amber text-xs font-semibold uppercase tracking-[0.2em] mb-1">
            Reference
          </p>
          <h2 className="font-display text-2xl font-bold text-text-primary">
            Character Design Sheets
          </h2>
        </div>
        <span className="text-text-muted text-xs hidden sm:block">
          {activeIndex + 1} / {available.length} · use ← → to browse
        </span>
      </div>

      {/* Icon segmented control */}
      <div className="inline-flex flex-wrap gap-1 p-1 mb-5 rounded-xl bg-bg-elevated border border-white/10">
        {available.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            aria-pressed={active === tab.key}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
              active === tab.key
                ? "bg-accent-amber text-bg-primary shadow-lg shadow-accent-amber/20"
                : "text-text-muted hover:text-text-primary hover:bg-white/5"
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {tab.icon}
            </svg>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Framed viewer */}
      {activeSrc && (
        <div className="rounded-2xl border border-white/10 bg-bg-card overflow-hidden shadow-2xl shadow-black/40">
          <div className="relative w-full h-[60vh] sm:h-[72vh] bg-gradient-to-b from-bg-elevated to-bg-card group">
            <Image
              key={activeSrc}
              src={activeSrc}
              alt={`${characterName} — ${activeTab.label} sheet`}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-contain p-2 animate-[fadeIn_0.35s_ease]"
            />

            {/* Zoom button */}
            <button
              onClick={() => setZoomed(true)}
              aria-label="View fullscreen"
              className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-primary/70 backdrop-blur border border-white/10 text-text-secondary text-xs font-medium hover:text-text-primary hover:border-accent-amber/40 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              Zoom
            </button>

            {/* Prev / next arrows */}
            {available.length > 1 && (
              <>
                <button
                  onClick={() => goTo(-1)}
                  aria-label="Previous sheet"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bg-primary/70 backdrop-blur border border-white/10 text-text-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 hover:text-accent-amber hover:border-accent-amber/40 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => goTo(1)}
                  aria-label="Next sheet"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bg-primary/70 backdrop-blur border border-white/10 text-text-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 hover:text-accent-amber hover:border-accent-amber/40 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Caption bar */}
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-t border-white/5 bg-bg-card">
            <div className="flex items-center gap-2.5 min-w-0">
              <svg className="w-4 h-4 text-accent-amber flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {activeTab.icon}
              </svg>
              <p className="text-sm text-text-secondary truncate">
                <span className="text-text-primary font-semibold">{activeTab.label}</span>
                <span className="text-text-muted"> · {characterName}</span>
              </p>
            </div>
            {available.length > 1 && (
              <div className="flex items-center gap-1.5 flex-shrink-0">
                {available.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActive(tab.key)}
                    aria-label={`Show ${tab.label}`}
                    className={`h-1.5 rounded-full transition-all ${
                      active === tab.key
                        ? "w-6 bg-accent-amber"
                        : "w-1.5 bg-white/15 hover:bg-white/30"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Fullscreen lightbox */}
      {zoomed && activeSrc && (
        <div
          className="fixed inset-0 z-[100] bg-bg-primary/95 backdrop-blur-sm flex flex-col animate-[fadeIn_0.2s_ease]"
          onClick={() => setZoomed(false)}
        >
          <div className="flex items-center justify-between px-5 py-4 flex-shrink-0">
            <p className="text-sm text-text-secondary">
              <span className="text-text-primary font-semibold">{activeTab.label}</span>
              <span className="text-text-muted"> · {characterName}</span>
            </p>
            <button
              onClick={() => setZoomed(false)}
              aria-label="Close"
              className="w-9 h-9 rounded-full bg-bg-elevated border border-white/10 text-text-secondary flex items-center justify-center hover:text-text-primary hover:border-white/20 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div
            className="relative flex-1 min-h-0 mx-4 mb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={activeSrc}
              src={activeSrc}
              alt={`${characterName} — ${activeTab.label} sheet`}
              fill
              sizes="100vw"
              className="object-contain"
            />

            {available.length > 1 && (
              <>
                <button
                  onClick={() => goTo(-1)}
                  aria-label="Previous sheet"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-bg-elevated/80 border border-white/10 text-text-secondary flex items-center justify-center hover:text-accent-amber transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => goTo(1)}
                  aria-label="Next sheet"
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-bg-elevated/80 border border-white/10 text-text-secondary flex items-center justify-center hover:text-accent-amber transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
