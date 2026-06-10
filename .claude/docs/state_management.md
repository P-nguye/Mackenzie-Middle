# State Management

## Firebase Setup

`lib/firebase.ts` initialises a single Firebase app instance (guarded against double-init
via `getApps().length === 0`). It exports three service handles:

```ts
export const auth    // Firebase Authentication
export const db      // Firestore
export const storage // Firebase Storage
```

All env vars are `NEXT_PUBLIC_FIREBASE_*`. Placeholder fallback strings in the file allow
`next build` to complete in CI without real credentials. Never remove those fallbacks.

## Auth Context

`lib/auth-context.tsx` provides a React context consumed via `useAuth()`.

```ts
interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  avatarCharacterId: string;  // references a character slug
}

interface AuthContextValue {
  user: User | null;        // Firebase Auth user object
  profile: UserProfile | null; // Firestore /users/{uid} document
  loading: boolean;         // true until first onAuthStateChanged fires
  logout: () => Promise<void>;
}
```

`loading: true` on mount. Gate all auth-dependent renders behind `if (loading) return`.
`profile` is fetched from Firestore on every auth state change — it is not cached locally.

## Firestore Schema

### Collection: `users/{uid}`

```
{
  uid: string,
  email: string,
  displayName: string,
  avatarCharacterId: string
}
```

Written at signup. Read by `AuthProvider` on each login.

### Collection: `goals/{goalId}`

```
{
  uid: string,           // owner — always index on this field
  title: string,
  startDate: string,     // ISO 8601 date: "YYYY-MM-DD"
  totalDays: number,     // always positive integer; hours converted at input time
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

Security rule: `request.auth.uid == resource.data.uid`.

### Subcollection: `goals/{goalId}/subtasks/{subtaskId}`

```
{
  title: string,
  weight: number,   // raw positive number; NOT normalised to 100
  order: number,    // explicit sort key; 0-indexed
  createdAt: Timestamp
}
```

Ordering: always query `orderBy("order", "asc")`. Never rely on document ID order.

### Collection: `threads/{threadId}` (community board — unrelated to goals)

```
{
  title: string,
  body: string,
  authorUid: string,
  authorName: string,
  createdAt: Timestamp,
  replyCount: number
}
```

### Subcollection: `threads/{threadId}/replies/{replyId}`

```
{
  body: string,
  authorUid: string,
  authorName: string,
  createdAt: Timestamp
}
```

## Real-time Subscription Pattern

Use `onSnapshot` for collections that update live (threads, subtasks during editing).
Use `getDoc` / `getDocs` for one-shot reads (goal metadata, user profile).

```ts
// live subscription — always return the unsubscribe function from useEffect
useEffect(() => {
  const q = query(collection(db, "goals"), where("uid", "==", user.uid), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snap) => {
    setGoals(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Goal, "id">) })));
  });
}, [user.uid]);
```

Always pass `serverTimestamp()` for `createdAt` / `updatedAt` on writes, never `new Date()`.

## Client vs Server State

- **Firestore** is the source of truth for all persisted data.
- **Computed values** (allocated days, subtask start/end dates) live only in React state
  derived at render time. They are never written to Firestore.
- **Form state** is local `useState`. Do not lift form state above the form component.
