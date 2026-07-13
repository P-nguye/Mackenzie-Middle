# Architecture

## Directory Structure

```
Mackenzie-Middle/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout — AuthProvider, Navbar, Footer
│   ├── page.tsx                 # Home: hero + featured characters
│   ├── globals.css              # Tailwind base + custom utility classes
│   ├── about/page.tsx
│   ├── characters/
│   │   ├── page.tsx             # Character grid with 2D/3D toggle
│   │   └── [slug]/page.tsx      # Character detail: bio, relationships, AI chat placeholder
│   ├── media/page.tsx           # Wallpapers & soundtrack (assets pending)
│   ├── community/
│   │   ├── page.tsx             # Thread list (real-time)
│   │   └── [id]/page.tsx        # Thread detail + replies (real-time)
│   ├── chat/page.tsx            # Live fan chat (real-time)
│   ├── login/page.tsx           # Email/password sign-in
│   ├── signup/page.tsx          # 2-step: credentials form → avatar selection
│   └── profile/page.tsx         # User dashboard (auth-protected)
├── components/                   # Shared React components (all client-side)
├── data/
│   └── characters.ts            # Hard-coded character data — 9 entries, no Firestore
├── lib/
│   ├── firebase.ts              # Firebase app init (single instance, .env fallbacks)
│   └── auth-context.tsx         # AuthProvider + useAuth() hook
└── public/assets/characters/
    ├── 2d/                      # Flat 2D artwork (.webp)
    ├── 3d/                      # 3D render artwork (.webp, pending)
    └── NAMING_GUIDE.md
```

---

## Route Table

| Route | Auth Required | Notes |
|---|---|---|
| `/` | No | Hero + featured characters |
| `/characters` | No | Grid; student/staff split; 2D/3D toggle |
| `/characters/:slug` | No | Bio, relationships, AI chat placeholder |
| `/about` | No | Series background |
| `/media` | No | Downloads listed; assets are placeholder |
| `/community` | No | Thread list; posting requires auth |
| `/community/:id` | No | Thread + replies; replying requires auth |
| `/chat` | No | View free; sending messages requires auth |
| `/login` | No | Redirects to `/profile` if already signed in |
| `/signup` | No | Redirects to `/profile` on completion |
| `/profile` | **Yes** | `useEffect` redirects to `/login` if `user` is null |

---

## Component Tree

```
app/layout.tsx (Server Component)
└── AuthProvider          ← lib/auth-context.tsx, Client Component
    ├── Navbar            ← fixed header, uses usePathname()
    ├── {children}        ← page slot
    └── Footer
```

**`AuthProvider` must remain at the root level.** All pages calling `useAuth()` must be `"use client"`.

---

## Key Components

**`CharacterCard`** — Reusable card for the `/characters` grid and signup avatar-selection step.
Props: `character`, `href`, `selectable`, `selected`, `onSelect`, `designMode: "2d" | "3d"`.
Renders portrait (image or CSS gradient fallback), grade badge, name, tagline, traits array.

**`CharacterPortrait`** — Client component with local 2D/3D toggle. Used on `/characters/:slug`. 3:4 aspect ratio with mode-switch button overlay.

**`CharactersGridToggle`** — Client component owning design mode state for the `/characters` page. Splits character array into students (`isStaff: false`) and staff (`isStaff: true`), passes `designMode` to all `CharacterCard` children.

**`AiChatPlaceholder`** — Static "Coming Soon" UI on character detail pages. No logic, no props needed.

**`MediaCard`** — Props: `title`, `subtitle`, `type: "wallpaper" | "track"`, `isPlaceholder`. All instances are currently placeholder.

---

## Placeholder vs Live Features

| Feature | Status |
|---|---|
| Character grid + detail pages | Live |
| 2D/3D portrait toggle | Live (2D art partial; 3D pending) |
| Firebase Auth (signup, login, logout) | Live |
| User profile page | Live |
| Message board (threads + replies) | Live |
| Live chat | Live |
| Media downloads | Placeholder — assets not yet available |
| AI character chat | Placeholder component only |
