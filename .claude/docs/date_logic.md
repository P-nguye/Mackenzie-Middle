# Date Logic

## Core Weight Formula

```
allocatedDays = (subtask.weight / sumOfAllWeights) × goal.totalDays
```

Rounded to **1 decimal place** using standard rounding (0.5 rounds up).

```ts
// lib/goalLogic.ts
export function allocateDays(weight: number, sumOfWeights: number, totalDays: number): number {
  if (sumOfWeights === 0) return 0;
  return Math.round((weight / sumOfWeights) * totalDays * 10) / 10;
}
```

`sumOfWeights` is computed fresh each call — never cache it between renders.

## Timeline Derivation

Subtasks are processed in ascending `order`. Each subtask's start date is the day after
the previous subtask's end date. The first subtask starts on `goal.startDate`.

```ts
export interface SubtaskWindow {
  subtaskId: string;
  startDate: string;  // "YYYY-MM-DD"
  endDate: string;    // "YYYY-MM-DD"
  allocatedDays: number;
}

export function buildTimeline(
  goalStartDate: string,   // "YYYY-MM-DD"
  totalDays: number,
  subtasks: Array<{ id: string; weight: number; order: number }>
): SubtaskWindow[] {
  const sorted = [...subtasks].sort((a, b) => a.order - b.order);
  const sumOfWeights = sorted.reduce((acc, s) => acc + s.weight, 0);

  let cursor = new Date(goalStartDate);
  return sorted.map((subtask) => {
    const days = allocateDays(subtask.weight, sumOfWeights, totalDays);
    const startDate = toISODate(cursor);
    const endDate = toISODate(addDays(cursor, Math.max(days - 1, 0)));
    cursor = addDays(cursor, Math.ceil(days)); // next subtask starts after ceiling of days
    return { subtaskId: subtask.id, startDate, endDate, allocatedDays: days };
  });
}
```

## Date Arithmetic Rules

- All dates stored and passed as `"YYYY-MM-DD"` strings. Never use locale-dependent formats.
- Parse with `new Date(dateString)` only inside `goalLogic.ts`. Never call `new Date()` elsewhere.
- `addDays(date, n)` adds `n` calendar days — no timezone adjustment. Keep dates in UTC to
  avoid DST boundary bugs: `new Date(Date.UTC(y, m, d))`.
- A subtask with `allocatedDays = 0.0` (zero weight) still occupies one day on the timeline
  (start === end). It cannot collapse to nothing.

## Hours-Based Goals

If the user selects "hours" as the duration unit, convert at input time before saving:

```ts
totalDays = totalHours / 24   // stored as fractional number, e.g. 1.5 for 36 hours
```

The formula operates identically on fractional `totalDays`. The UI is responsible for
rendering sub-day windows as hour ranges if needed.

## Edge Cases

| Condition | Behaviour |
|---|---|
| All weights are 0 | `allocateDays` returns 0 for every subtask; timeline is degenerate (all on startDate). Do not divide. |
| Single subtask | Gets 100% of `totalDays`. |
| `totalDays = 0` | Every subtask gets 0 days. UI should block saving a goal with 0 total duration. |
| Floating-point drift | After rounding, the sum of `allocatedDays` may not equal `totalDays` exactly. This is acceptable — do not redistribute remainders. |
| Reorder subtasks | Rebuilding the timeline from scratch is correct. No incremental patching. |

## Example

Goal: `startDate = "2025-01-01"`, `totalDays = 10`

| Subtask | Weight | allocatedDays | Start | End |
|---|---|---|---|---|
| Research | 2 | 2.0 | 2025-01-01 | 2025-01-02 |
| Design | 3 | 3.0 | 2025-01-03 | 2025-01-05 |
| Build | 5 | 5.0 | 2025-01-06 | 2025-01-10 |

`sumOfWeights = 10`. Each weight / 10 × 10 = weight directly.
