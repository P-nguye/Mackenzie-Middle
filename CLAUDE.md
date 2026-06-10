# GoalStack

## Project Overview

GoalStack is a weighted goal planner where users define a goal with a start date and total duration,
then break it into subtasks with relative effort weights. The system calculates each subtask's
allocated time and renders a sequential timeline with computed start and end dates.

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

Each subtask carries a numeric `weight`. Allocated days are derived from:

```
allocatedDays = (subtask.weight / sumOfAllWeights) × goal.totalDays
```

Result is rounded to **1 decimal place**. Subtask start dates are computed sequentially:
subtask N starts the day after subtask N-1 ends. Goal `startDate` anchors the chain.

Full formula spec and edge-case rules: [`.claude/docs/date_logic.md`](.claude/docs/date_logic.md)

---

## Key Constraints

- **Never recalculate weights server-side on read.** Allocation is computed client-side at
  render time from the raw `weight` values stored in Firestore. Do not cache computed days.
- **`sumOfAllWeights` can be any positive number**, not just 100. The UI may show percentage
  labels but the formula uses raw weights. Do not normalise weights before saving.
- **Goal `totalDays` is always a positive integer.** Hours-based goals are converted to
  fractional days at input time; the stored field is always `totalDays: number`.
- **Subtask order is explicit.** Each subtask has an `order: number` field. Do not sort by
  creation time or Firestore document ID.
- **Do not modify `lib/firebase.ts` placeholder logic.** The fallback strings allow CI builds
  without secrets. Real values come exclusively from `.env.local`.
- **`AuthProvider` wraps the entire app** in `app/layout.tsx`. Never move it below a page
  boundary; doing so breaks `useAuth()` in server components that render before hydration.
- **Branch Management**: Before adding any features or fix bugs, always work on a new git branch. Never commit directly on main. Bug branches must follow naming convention bug/[des], feature branches follow naming convention feature/[des]

---

## Additional Documentation

| Domain | File |
|---|---|
| App architecture, routing, component tree | [`.claude/docs/architecture.md`](.claude/docs/architecture.md) |
| Firestore schema, auth context, real-time patterns | [`.claude/docs/state_management.md`](.claude/docs/state_management.md) |
| Weight formula, timeline derivation, edge cases | [`.claude/docs/date_logic.md`](.claude/docs/date_logic.md) |
