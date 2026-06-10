"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { getCharacterBySlug } from "@/data/characters";

export default function ProfilePage() {
  const { user, profile, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-accent-amber/30 border-t-accent-amber rounded-full animate-spin" />
      </div>
    );
  }

  if (!loading && user && !profile) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
        <div className="card p-8 max-w-sm w-full text-center space-y-4">
          <p className="text-text-primary font-semibold">Profile not found</p>
          <p className="text-text-muted text-sm">
            Your account exists but your profile data is missing. Please sign out and create a new account.
          </p>
          <button
            onClick={async () => { await logout(); router.push("/signup"); }}
            className="btn-primary w-full justify-center"
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }

  const avatarChar = getCharacterBySlug(profile.avatarCharacterId);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-black text-text-primary mb-8">Your Profile</h1>

      <div className="card p-6 mb-6 flex items-center gap-5">
        {/* Avatar */}
        <div
          className={`w-20 h-20 rounded-2xl bg-gradient-to-b ${avatarChar?.portraitPlaceholder ?? "from-bg-elevated to-bg-card"} flex items-center justify-center flex-shrink-0 overflow-hidden`}
        >
          <svg className="w-10 h-10 text-white/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
        </div>

        <div className="flex-1 min-w-0">
          <h2 className="text-text-primary font-semibold text-lg truncate">{profile.displayName}</h2>
          <p className="text-text-muted text-sm mt-0.5">{profile.email}</p>
          {avatarChar && (
            <div className="flex items-center gap-1.5 mt-2">
              <span className="text-text-muted text-xs">Avatar:</span>
              <span className="badge badge-amber text-xs">{avatarChar.name}</span>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <Link href="/community" className="btn-outline">
          Message Board
        </Link>
        <Link href="/chat" className="btn-outline">
          Live Chat
        </Link>
      </div>

      <button
        onClick={async () => { await logout(); router.push("/"); }}
        className="text-text-muted text-sm hover:text-red-400 transition-colors"
      >
        Sign out
      </button>
    </div>
  );
}
