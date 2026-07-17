"use client";

import { useState } from "react";
import { characters, getCharacterBySlug } from "@/data/characters";

export default function CharacterChatPage() {
  const [selectedSlug, setSelectedSlug] = useState<string>("");
  const selected = selectedSlug ? getCharacterBySlug(selectedSlug) : undefined;
  const characterName = selected?.name ?? "a character";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="mb-8">
        <span className="badge badge-violet mb-3 inline-flex">Coming Soon</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
          Character Chat
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl">
          Pick a character and have a conversation with them. Ask about the
          story, their friendships, or life at Mackenzie Middle in the early 1980s.
        </p>
      </div>

      {/* Character selector */}
      <div className="mb-6">
        <label
          htmlFor="character-select"
          className="block text-text-secondary text-xs font-semibold uppercase tracking-wider mb-2"
        >
          Choose a character
        </label>
        <div className="relative">
          <select
            id="character-select"
            value={selectedSlug}
            onChange={(e) => setSelectedSlug(e.target.value)}
            className="w-full appearance-none bg-bg-elevated border border-white/10 rounded-xl px-4 py-3 pr-10 text-text-primary text-sm focus:outline-none focus:border-accent-violet/50 transition-colors"
          >
            <option value="">Select a character…</option>
            {characters.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
          <svg
            className="w-4 h-4 text-text-muted absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Chat placeholder */}
      <div className="card border-accent-violet/20 overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-white/5 bg-accent-violet/5">
          <div className="w-8 h-8 rounded-full bg-accent-violet/20 flex items-center justify-center">
            <svg className="w-4 h-4 text-accent-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div>
            <p className="text-text-primary font-semibold text-sm">
              Chat with {characterName}
            </p>
            <p className="text-text-muted text-xs">AI character chat</p>
          </div>
          <span className="badge badge-violet ml-auto">Coming Soon</span>
        </div>

        {/* Mock chat area */}
        <div className="p-4 space-y-3 opacity-40 pointer-events-none select-none">
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full bg-accent-violet/30 flex-shrink-0 mt-0.5" />
            <div className="bg-bg-elevated rounded-2xl rounded-tl-sm px-3 py-2 max-w-xs">
              <p className="text-text-secondary text-xs">Hi! Ask me anything about the story...</p>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <div className="bg-accent-violet/20 rounded-2xl rounded-tr-sm px-3 py-2 max-w-xs">
              <p className="text-text-secondary text-xs">What happened in Episode 3?</p>
            </div>
          </div>
        </div>

        {/* Locked input */}
        <div className="p-4 border-t border-white/5 relative">
          <div className="flex items-center gap-2 bg-bg-elevated rounded-xl px-4 py-3 opacity-50">
            <span className="text-text-muted text-sm flex-1">
              Ask {characterName} a question...
            </span>
            <svg className="w-4 h-4 text-text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <p className="text-center text-text-muted text-xs mt-3">
            AI character chat is in development — check back soon.
          </p>
        </div>
      </div>
    </div>
  );
}
