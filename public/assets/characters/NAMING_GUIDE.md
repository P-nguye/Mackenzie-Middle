# Character Asset Naming Guide

This folder holds all character portrait artwork for Mackenzie Middle.
Two design styles are supported: flat 2D illustration and 3D render.

---

## Folder Structure

```
public/assets/characters/
  2d/          ← Flat / illustrated artwork
  3d/          ← 3D rendered artwork
```

---

## File Naming Convention

Files are named by **character slug** — the same slug used in `data/characters.ts`
and in the URL (`/characters/{slug}`).

| Character      | Slug                | 2D file                    | 3D file                    |
|----------------|---------------------|----------------------------|----------------------------|
| Alex Chen      | `alex-chen`         | `2d/alex-chen.webp`        | `3d/alex-chen.webp`        |
| Dana Kowalski  | `dana-kowalski`     | `2d/dana-kowalski.webp`    | `3d/dana-kowalski.webp`    |
| Marco Reyes    | `marco-reyes`       | `2d/marco-reyes.webp`      | `3d/marco-reyes.webp`      |
| Simone Lafleur | `simone-lafleur`    | `2d/simone-lafleur.webp`   | `3d/simone-lafleur.webp`   |
| Terry Bullock  | `terry-bullock`     | `2d/terry-bullock.webp`    | `3d/terry-bullock.webp`    |
| Patrice Okonkwo| `patrice-okonkwo`   | `2d/patrice-okonkwo.webp`  | `3d/patrice-okonkwo.webp`  |

---

## File Format

- **Preferred:** `.webp` — best compression, wide browser support
- **Acceptable:** `.png` — lossless, good for line art with transparency
- **Avoid:** `.jpg` — lossy compression degrades illustration edges

---

## Recommended Dimensions

All portraits use a **3:4 aspect ratio** (portrait orientation).

| Use case          | Minimum size  | Recommended    |
|-------------------|---------------|----------------|
| Character card    | 300 × 400 px  | 600 × 800 px   |
| Detail page       | 450 × 600 px  | 900 × 1200 px  |

The `next/image` component handles responsive scaling automatically.
Provide the highest-resolution version you have — it will be downscaled as needed.

---

## Wiring Up New Artwork

Once a file is placed in the correct folder, update `data/characters.ts`
to point to it. For each character object, set the `portrait2d` and/or
`portrait3d` fields:

```ts
{
  slug: "alex-chen",
  // ... other fields ...
  portrait2d: "/assets/characters/2d/alex-chen.webp",
  portrait3d: "/assets/characters/3d/alex-chen.webp",
}
```

The UI automatically switches between the two when the user clicks the
2D / 3D toggle. If only one field is set, the toggle still appears but
the missing mode shows the gradient placeholder instead.

---

## 2D vs 3D Style Notes

**2D (`2d/` folder)**
- Flat colour illustration or cel-shaded style
- Clean outlines, limited shading
- Think mid-80s animation reference sheets

**3D (`3d/` folder)**
- Rendered from a 3D modelling tool (Blender, Maya, etc.)
- Subsurface scattering, cast shadows, depth-of-field optional
- Export on a transparent or solid dark background
