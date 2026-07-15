"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { getCharacterBySlug } from "@/data/characters";

const navLinks = [
  { href: "/characters", label: "Characters" },
  { href: "/media", label: "Media" },
  { href: "/character-chat", label: "Character Chat" },
  { href: "/community", label: "Community" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, profile, loading } = useAuth();

  const avatarChar = profile ? getCharacterBySlug(profile.avatarCharacterId) : undefined;

  const profileLink = (
    <Link
      href="/profile"
      className="flex items-center gap-2 rounded-lg pl-1 pr-2.5 py-1 hover:bg-bg-elevated transition-colors"
    >
      <span
        className={`w-8 h-8 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 bg-gradient-to-b ${
          avatarChar?.portraitPlaceholder ?? "from-bg-elevated to-bg-card"
        }`}
      >
        {avatarChar?.portrait2d ? (
          <Image
            src={avatarChar.portrait2d}
            alt={profile?.displayName ?? "Your avatar"}
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-text-primary text-sm font-bold">
            {(profile?.displayName ?? "?").charAt(0).toUpperCase()}
          </span>
        )}
      </span>
      <span className="text-text-primary text-sm font-medium max-w-[8rem] truncate">
        {profile?.displayName ?? "Profile"}
      </span>
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-bg-primary/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-amber to-accent-violet flex items-center justify-center text-bg-primary font-bold text-sm">
            MM
          </div>
          <span className="font-display font-bold text-text-primary text-lg tracking-tight group-hover:text-accent-amber transition-colors">
            Mackenzie Middle
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-accent-amber bg-accent-amber/10"
                  : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Auth CTAs */}
        <div className="hidden md:flex items-center gap-2">
          {loading ? (
            <div className="w-8 h-8 rounded-full bg-bg-elevated animate-pulse" />
          ) : user && profile ? (
            profileLink
          ) : (
            <>
              <Link href="/login" className="btn-ghost text-sm">
                Sign in
              </Link>
              <Link href="/signup" className="btn-primary text-sm">
                Join
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-text-secondary hover:text-text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-bg-card px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-accent-amber bg-accent-amber/10"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2 border-t border-white/5">
            {loading ? null : user && profile ? (
              <Link
                href="/profile"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-text-primary hover:bg-bg-elevated transition-colors w-full"
              >
                <span
                  className={`w-7 h-7 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 bg-gradient-to-b ${
                    avatarChar?.portraitPlaceholder ?? "from-bg-elevated to-bg-card"
                  }`}
                >
                  {avatarChar?.portrait2d ? (
                    <Image
                      src={avatarChar.portrait2d}
                      alt={profile?.displayName ?? "Your avatar"}
                      width={28}
                      height={28}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-text-primary text-xs font-bold">
                      {(profile?.displayName ?? "?").charAt(0).toUpperCase()}
                    </span>
                  )}
                </span>
                {profile?.displayName ?? "Profile"}
              </Link>
            ) : (
              <>
                <Link href="/login" onClick={() => setMenuOpen(false)} className="btn-ghost flex-1 justify-center">
                  Sign in
                </Link>
                <Link href="/signup" onClick={() => setMenuOpen(false)} className="btn-primary flex-1 justify-center">
                  Join
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
