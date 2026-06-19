# State Management

## Firebase Setup

`lib/firebase.ts` initialises a single Firebase app instance (guarded against double-init
via `getApps().length === 0`). Exports:

```ts
export const auth     // Firebase Authentication
export const db       // Firestore
export const storage  // Firebase Storage
```

All env vars are `NEXT_PUBLIC_FIREBASE_*`. Placeholder fallback strings allow `next build`
to complete in CI without real credentials. **Never remove those fallbacks.**

---

## Auth Context

`lib/auth-context.tsx` — React Context consumed via `useAuth()`.

```ts
interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  avatarCharacterId: string;  // character slug, e.g. "minh-le"
}

interface AuthContextValue {
  user: User | null;           // Firebase Auth user object
  profile: UserProfile | null; // Firestore /users/{uid} document
  loading: boolean;            // true until first onAuthStateChanged fires
  logout: () => Promise<void>;
}
```

`loading` is `true` on mount. Gate all auth-dependent renders behind `if (loading) return`.
`profile` is re-fetched from Firestore on every auth state change — it is not cached.

---

## Firestore Collections

### `users/{uid}`

```ts
{
  uid: string;
  email: string;
  displayName: string;
  avatarCharacterId: string;  // character slug selected at signup
}
```

Written once at signup. Read by `AuthProvider` on every login.

### `threads/{threadId}`

```ts
{
  title: string;
  body: string;
  authorUid: string;
  authorName: string;
  createdAt: Timestamp;
  replyCount: number;
}
```

### `threads/{threadId}/replies/{replyId}`

```ts
{
  body: string;
  authorUid: string;
  authorName: string;
  createdAt: Timestamp;
}
```

### `chatMessages/{messageId}`

```ts
{
  text: string;
  authorUid: string;
  displayName: string;
  avatarCharacterId: string;  // used to display character avatar in chat
  createdAt: Timestamp;
}
```

Chat page live-subscribes and auto-scrolls to the latest message.

---

## Real-Time Subscription Pattern

Use `onSnapshot` for collections that update live (threads list, thread replies, chat messages).
Use `getDoc` for one-shot reads (user profile, single thread metadata).

```ts
useEffect(() => {
  const q = query(
    collection(db, "threads"),
    orderBy("createdAt", "desc"),
    limit(50)
  );
  return onSnapshot(q, (snap) => {
    setThreads(snap.docs.map((d) => ({ id: d.id, ...(d.data() as ThreadData) })));
  });
}, []);
```

Always return the unsubscribe function from `useEffect`. Always pass `serverTimestamp()`
for `createdAt` on writes — never `new Date()`.

---

## Firestore Security Rules

Current rule in `firestore.rules`:

```
allow read, write: if request.time < timestamp.date(2026, 7, 10);
```

**These rules are temporary and expire 2026-07-10.** Before any production deploy, replace
with per-collection rules that check `request.auth.uid` against document ownership fields.

---

## State Layers

| Layer | Tool | Notes |
|---|---|---|
| Auth state | React Context (`useAuth()`) | Global; never duplicated in local state |
| Real-time Firestore data | `onSnapshot` + `useState` | Per-page subscription |
| One-shot Firestore reads | `getDoc` in `useEffect` | Thread detail, user profile |
| Form state | Local `useState` | Not lifted above the form component |
| UI toggle state (2D/3D) | Local `useState` | Owned by `CharactersGridToggle` or `CharacterPortrait` |

Character data is **not** in Firestore — see `.claude/docs/character_system.md`.
