# Character System

## Data Source

Characters are defined as a hard-coded typed array in `data/characters.ts`.
**There is no Firestore collection for characters.** Do not add one unless explicitly migrating.

---

## Character Interface

```ts
interface Character {
  slug: string;           // URL-safe identifier: "minh-le", "ms-hand"
  name: string;           // Display name: "Minh Le", "Ms. Hand"
  tagline: string;        // Short descriptor shown on cards
  bio: string;            // Full biography for the detail page
  grade: string;          // "Grade 8" for students; role title for staff
  isStaff: boolean;       // Splits the grid into Students / Staff sections
  traits: string[];       // Personality traits, displayed as badges
  portraitPlaceholder: string;  // Tailwind gradient class (fallback when no artwork)
  portrait2d?: string;    // Path: "/assets/characters/2d/{slug}.webp"
  portrait3d?: string;    // Path: "/assets/characters/3d/{slug}.webp"
  relationships?: {
    role: string;         // e.g., "Best friend", "Teacher"
    person: string;       // Character name
  }[];
}
```

---

## Current Characters (9 total)

**Students (`isStaff: false`)**

| Slug | Name | Traits |
|---|---|---|
| `minh-le` | Minh Le | Thoughtful, Kind, Observant, Shy |
| `willie-niou` | Willie Niou | Intelligent, Honest, Awkward, Straightforward |
| `shelley-smith` | Shelley Smith | Kind, Friendly, Inclusive, Intelligent |
| `june-nakamura` | June Nakamura | Polite, Respectful, Determined, Quiet |
| `jack-armstrong` | Jack Armstrong | Outgoing, Athletic, Adventurous, Charismatic |
| `tara-moon` | Tara Moon | Energetic, Mischievous, Outgoing, Playful |

**Staff (`isStaff: true`)**

| Slug | Name | Role |
|---|---|---|
| `ms-hand` | Ms. Hand | Homeroom Teacher |
| `mr-ron-little` | Mr. Ron Little | Physical Education |
| `principal-sterling` | Principal Charles Sterling | Principal |

---

## Artwork System

### File Naming Convention

```
/public/assets/characters/2d/{slug}.webp   ← flat illustration
/public/assets/characters/3d/{slug}.webp   ← 3D render
```

The slug in the filename must exactly match the character's `slug` field.

**Example:** Minh Le → `slug: "minh-le"` → files at:
- `/public/assets/characters/2d/minh-le.webp`
- `/public/assets/characters/3d/minh-le.webp`

**Format:** `.webp` preferred. Recommended dimensions: 600×800 px (cards), 900×1200 px (detail pages). Aspect ratio: 3:4.

### Activating Artwork

Set the `portrait2d` and/or `portrait3d` fields in the character object:

```ts
// data/characters.ts
{
  slug: "minh-le",
  portrait2d: "/assets/characters/2d/minh-le.webp",
  // portrait3d: undefined — shows placeholder until 3D art is ready
}
```

When a field is `undefined`, the component falls back to the `portraitPlaceholder` gradient class.

### Current Artwork Status

| Character | 2D | 3D |
|---|---|---|
| Minh Le | `/assets/characters/2d/Minh.webp` (in progress — filename needs renaming to `minh-le.webp`) | Pending |
| All others | Pending | Pending |

---

## 2D/3D Toggle

The toggle is **UI state only** — it switches between `portrait2d` and `portrait3d` image sources.
No data is re-fetched when switching modes.

**`CharactersGridToggle`** — owns `designMode: "2d" | "3d"` state for the `/characters` grid.
Passes the current mode as a prop to each `CharacterCard`.

**`CharacterPortrait`** — owns its own local `designMode` state on the character detail page.
Each detail page toggle is independent.

Fallback chain when `designMode === "3d"` but `portrait3d` is undefined:
→ shows `portraitPlaceholder` gradient (not the 2D image).

---

## Slug as Cross-System Key

The `slug` field ties together:
- URL routing: `/characters/{slug}`
- Firestore `users.avatarCharacterId` — the signed-in user's chosen avatar
- Chat message display: `avatarCharacterId` in `chatMessages` documents
- Asset file paths: `/public/assets/characters/{mode}/{slug}.webp`

**Never change a slug after it has been written to Firestore user documents.**
