# Architecture

## App Router Structure

```
app/
├── layout.tsx              # Root layout — AuthProvider, Navbar, Footer wrapping
├── page.tsx                # Dashboard: list of user's goals
├── globals.css             # Tailwind base + custom utility classes
├── goals/
│   ├── new/
│   │   └── page.tsx        # Create goal form (name, startDate, totalDays, unit)
│   └── [id]/
│       ├── page.tsx        # Goal detail: subtask list + timeline view
│       └── edit/
│           └── page.tsx    # Edit goal metadata
components/
├── Navbar.tsx              # Top nav with auth state (login/logout/profile links)
├── Footer.tsx              # Site footer
├── GoalCard.tsx            # Summary card used on dashboard
├── SubtaskList.tsx         # Ordered list of subtasks with weight inputs
├── TimelineView.tsx        # Visual timeline rendering computed date ranges
└── WeightSlider.tsx        # Single subtask weight input (number or drag)
data/                       # Static seed data only — no runtime data here
lib/
├── firebase.ts             # Firebase app init — exports auth, db, storage
├── auth-context.tsx        # AuthProvider + useAuth hook
└── goalLogic.ts            # Pure functions: allocateDays, buildTimeline (no Firebase)
types/
└── index.ts                # Shared TypeScript interfaces (Goal, Subtask)
```

## Routing Conventions

- All goal routes are under `/goals/`. The root `/` is the authenticated dashboard.
- `[id]` is the Firestore document ID of the goal.
- Pages that require auth redirect to `/login` if `useAuth().user` is null.
- `app/layout.tsx` is a Server Component; `AuthProvider` is a Client Component
  imported into it. All pages that call `useAuth()` must be `"use client"`.

## Component Responsibilities

| Component | Owns | Does not own |
|---|---|---|
| `SubtaskList` | Subtask CRUD UI, weight input | Weight calculation |
| `TimelineView` | Rendering date ranges | Computing them |
| `GoalCard` | Display only | Any Firestore reads |
| `goalLogic.ts` | All math (allocateDays, buildTimeline) | Any UI or Firebase calls |

`goalLogic.ts` contains pure functions only. Tests target this file exclusively.
Never import Firebase inside `goalLogic.ts`.

## Styling System

Tailwind CSS with a custom theme defined in `tailwind.config.ts`:

```
bg-bg-primary      #0d0f14   page background
bg-bg-card         #161a23   card surface
bg-bg-elevated     #1e2433   hover / input surface
text-text-primary  #f0f0f0
text-text-secondary #a0a8b8
text-text-muted    #5a6070
accent-amber       #e8a045
accent-violet      #6c63d4
```

Utility classes `btn-primary`, `card`, `badge`, `badge-amber`, `badge-violet`
are defined in `globals.css`. Add new utilities there; do not use inline styles.
