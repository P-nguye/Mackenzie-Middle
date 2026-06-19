# Mackenzie Middle

## Project Overview

Mackenzie Middle is a fan site and community platform for a fictional 1985 Edmonton-set YouTube series and companion novel. Users browse character profiles (students and staff), read novel chapters, download media, post on a message board, and chat live. Accounts use Firebase Auth; each user selects a character avatar during signup, which persists across community features.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | ^15.3.3 |
| Language | TypeScript | ^5 |
| UI | React | ^19 |
| Styling | Tailwind CSS | ^3.4.1 |
| Auth | Firebase Authentication | ^10.14.1 |
| Database | Firebase Firestore | ^10.14.1 |
| Storage | Firebase Storage | ^10.14.1 |
| Font | Inter (Google Fonts via next/font) | — |

---

## Dev Commands

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Serve production build locally
npm start

# Lint
npm run lint
```

**Required before first run:** copy `.env.local.example` → `.env.local` and fill in all
`NEXT_PUBLIC_FIREBASE_*` values from your Firebase project console.
Without real credentials the app boots (placeholder fallbacks allow `next build` to succeed)
but auth and Firestore writes will fail silently.

---

## Core Logic Summary

Character data is hard-coded in `data/characters.ts` as a typed array — not sourced from Firestore. Each character has optional `portrait2d` and `portrait3d` fields pointing to `/public/assets/characters/{mode}/{slug}.webp`. The 2D/3D toggle is UI-only state; switching modes re-renders components with a different image source, falling back to a CSS gradient when no artwork is present.

Community features (threads, replies, chat) use Firestore `onSnapshot` for real-time updates. Auth state is global React Context that must wrap the entire app.

---

## Key Constraints

- **Never move `AuthProvider`.** It lives in `app/layout.tsx` and wraps the entire app. Moving it below a page boundary breaks `useAuth()` in all child components.
- **Character data is static.** `data/characters.ts` is the single source of truth. Do not fetch characters from Firestore unless explicitly implementing that migration.
- **Do not modify `lib/firebase.ts` placeholder logic.** Fallback strings allow CI builds without secrets. Real values come from `.env.local` only.
- **Asset naming is slug-based.** Character artwork must be placed at `/public/assets/characters/{2d|3d}/{slug}.webp`. Full convention in `.claude/docs/character_system.md`.
- **Firestore rules are temporary.** Current rules allow all reads/writes until 2026-07-10. Any production deploy requires per-collection rules.
- **Dark theme only.** No light mode exists. All styling uses custom Tailwind color tokens defined in `tailwind.config.ts`.
- **Branch management.** Always branch before changes. Never commit directly to `main`. Use `feature/[desc]` for features, `bug/[desc]` for fixes.

---

## Additional Documentation

| Domain | File |
|---|---|
| App architecture, routing, component tree | [`.claude/docs/architecture.md`](.claude/docs/architecture.md) |
| Firestore schema, auth context, real-time patterns | [`.claude/docs/state_management.md`](.claude/docs/state_management.md) |
| Character data model, artwork naming, 2D/3D system | [`.claude/docs/character_system.md`](.claude/docs/character_system.md) |
| Tailwind theme, color tokens, custom utility classes | [`.claude/docs/styling.md`](.claude/docs/styling.md) |
