"use client";
// "Complete Profile" button + reader overlay.
//
// The character page shows a short bio and brief relationship blurbs. Readers who
// want everything — full biography, daily routine, skills, fun facts, and the
// long-form relationship write-ups — open this. Content comes from
// data/characterProfiles.ts; characters without an entry never render the button.
import { useState, useEffect } from "react";
import type { CharacterProfile } from "@/data/characterProfiles";

interface Props {
  characterName: string;
  profile: CharacterProfile;
}

export default function CharacterFullProfile({ characterName, profile }: Props) {
  const [open, setOpen] = useState(false);

  // Esc closes the reader.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Lock body scroll while the reader is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-bg-elevated border border-white/10 text-text-primary text-sm font-semibold hover:border-accent-amber/40 hover:text-accent-amber transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
        Complete Profile
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-bg-primary/95 backdrop-blur-sm flex flex-col animate-[fadeIn_0.2s_ease]"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${characterName} — complete profile`}
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-white/5 flex-shrink-0">
            <div className="min-w-0">
              <p className="text-accent-amber text-xs font-semibold uppercase tracking-[0.2em]">
                Complete Profile
              </p>
              <h2 className="font-display text-lg font-bold text-text-primary truncate">
                {characterName}
              </h2>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="w-9 h-9 rounded-full bg-bg-elevated border border-white/10 text-text-secondary flex items-center justify-center hover:text-text-primary hover:border-white/20 transition-colors flex-shrink-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Scrolling body — stop propagation so clicks inside don't close it */}
          <div
            className="flex-1 min-h-0 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-3xl mx-auto px-5 py-8 space-y-10">
              {/* Facts */}
              {profile.facts.length > 0 && (
                <dl className="card p-5 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {profile.facts.map(({ label, value }) => (
                    <div key={label} className="flex flex-col gap-0.5">
                      <dt className="text-text-muted text-xs font-semibold uppercase tracking-wider">
                        {label}
                      </dt>
                      <dd className="text-text-secondary text-sm">{value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              {/* Sections */}
              {profile.sections.map((section) => (
                <section key={section.heading} className="space-y-3">
                  <h3 className="font-display text-xl font-bold text-text-primary">
                    {section.heading}
                  </h3>

                  {section.paragraphs?.map((text, i) => (
                    <p
                      key={i}
                      className="text-text-secondary text-base leading-relaxed max-w-[65ch]"
                    >
                      {text}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 pt-1">
                      {section.bullets.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-text-secondary text-sm leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-amber flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.quote && (
                    <blockquote className="border-l-2 border-accent-amber pl-4 py-1 mt-4">
                      <p className="text-text-primary text-base italic leading-relaxed max-w-[60ch]">
                        &ldquo;{section.quote}&rdquo;
                      </p>
                    </blockquote>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
