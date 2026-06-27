# Styling

## Framework

Tailwind CSS 3.4.1. Dark theme only — no light mode. All color usage must go through
the custom token system defined in `tailwind.config.ts`. Do not use raw hex values inline.

---

## Color Tokens (`tailwind.config.ts`)

```ts
colors: {
  bg: {
    primary:  "#0d0f14",  // page background
    card:     "#161a23",  // card surface
    elevated: "#1e2433",  // hover state, input backgrounds
  },
  accent: {
    amber:  "#e8a045",    // primary CTA, active states, highlights
    violet: "#6c63d4",    // secondary accent, badge variant
  },
  text: {
    primary:   "#f0f0f0", // body copy, headings
    secondary: "#a0a8b8", // supporting text, metadata
    muted:     "#5a6070", // placeholders, disabled states
  },
}
```

Usage in JSX: `bg-bg-primary`, `text-text-secondary`, `text-accent-amber`, etc.

---

## Custom Utility Classes (`app/globals.css`)

These are defined with `@layer utilities` and should be used instead of long `className` strings.

| Class | Description |
|---|---|
| `.btn-primary` | Amber fill button; hover scale animation |
| `.btn-outline` | Border-only button |
| `.btn-ghost` | Text-only button with hover background |
| `.card` | `bg-bg-card` surface with border and rounded corners |
| `.card-hover` | `.card` + hover lift effect (use for interactive cards) |
| `.section-title` | Large heading; `text-text-primary` |
| `.section-subtitle` | Supporting paragraph; `text-text-secondary` |
| `.badge` | Small pill label; base neutral style |
| `.badge-amber` | `.badge` with amber accent |
| `.badge-violet` | `.badge` with violet accent |

Add new reusable utilities to `globals.css`. Do not use inline styles.

---

## Layout Conventions

- **Navbar is fixed.** All page `<main>` elements must include `pt-16` (or `pt-20` on mobile) to clear it.
- **Mobile-first.** Use Tailwind responsive prefixes `sm:`, `md:`, `lg:` to progressively enhance. Default styles target mobile viewports.
- **Grids.** Character grid: `grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4` with `gap-6`.
- **Max width.** Page content is constrained with `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.

---

## Typography

Font: Inter, loaded via `next/font/google` in `app/layout.tsx`. Applied globally via `font-sans`.

Use `text-text-primary` for readable body copy.
Use `text-text-secondary` for metadata (dates, counts, captions).
Use `text-text-muted` for disabled states and placeholders only.
Use `text-accent-amber` sparingly for emphasis — not for blocks of text.
