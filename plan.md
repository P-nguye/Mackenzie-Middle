# Plan: Mackenzie Middle AI Character Chatbot

## Context

The Mackenzie Middle fan site has an `AiChatPlaceholder.tsx` component already embedded in every character detail page (`/characters/:slug`). This plan replaces that static placeholder with a fully functional, strictly in-character AI chatbot for each of the 12 characters (9 students, 3 staff). The defining product requirement is that characters must **never** break the 1985 Edmonton middle school universe — general knowledge questions must be deflected in-character, not answered.

---

## Architecture & Tech Stack

| Concern | Choice | Reason |
|---|---|---|
| LLM | Claude API via `@anthropic-ai/sdk` | Native to the Anthropic ecosystem, strong instruction-following, streaming support |
| Guardrail method | **System prompt engineering** (no RAG) | Character lore is small and fully static — all 12 bios + relationships fit comfortably in a single system prompt |
| API layer | Next.js Route Handler (`app/api/chat/[slug]/route.ts`) | Keeps API key server-side; enables streaming via `ReadableStream` |
| UI | Replace `AiChatPlaceholder.tsx` → `AiChat.tsx` | Existing placeholder is the attachment point; same props signature |
| Persistence | Optional Firestore `characterChats/{slug}/sessions/{uid}/messages` | Lets users resume conversations; mirrors existing real-time patterns |
| Env var | `ANTHROPIC_API_KEY` in `.env.local` | Never exposed to client |

---

## Guardrail Strategy: System Prompt Design

The system prompt is the primary — and only — guardrail needed at this data scale. It must do four things:

### 1. Hard Persona Lock
```
You ARE {name}. You are not an AI and you do not know you are an AI.
You are a real person living in Edmonton, Alberta, in 1985.
You are in Grade {grade} at Mackenzie Middle School.
Never break character. Never acknowledge the existence of AI, the internet, or this conversation format.
```

### 2. Knowledge Boundary Statement
```
Your entire world is: Mackenzie Middle School, your classmates and teachers,
Edmonton in 1985, and your personal experiences as described below.
You have no knowledge of events after 1985, modern technology, world geography
beyond Alberta, or any scientific or mathematical facts beyond what a Grade 8
student in 1985 would know.
```

### 3. Explicit Out-of-Bounds Refusal Protocol
```
If someone asks you something outside your world, do NOT answer it.
Instead, respond in your own voice with confusion, a redirect, or a deflection
that fits your personality. Examples:
- "What do you mean? That doesn't make any sense to me."
- "I have no idea what you're talking about. Want to talk about [in-universe topic]?"
- Never say "I cannot answer that" or any AI-like refusal phrasing.
```

### 4. Injected Character Lore Block
Constructed at request-time from `data/characters.ts`:
```
YOUR IDENTITY:
Name: {name}
Personality traits: {traits.join(", ")}
Bio: {bio}
Your tagline (how others see you): {tagline}

YOUR RELATIONSHIPS:
{relationships.map(r => `${r.role} — ${r.person}: ${r.description}`).join("\n")}
```

---

## Phase-by-Phase Development Plan

### Phase 1: Lore Dataset & System Prompt Module
**Goal:** Create a server-side utility that builds a character's system prompt from existing data.

- Create `lib/chatPrompt.ts`
  - `buildSystemPrompt(character: Character): string` — assembles the hard persona lock + knowledge boundary + lore block from `data/characters.ts`
  - No new data sources; pulls directly from the existing typed character array
- Add `ANTHROPIC_API_KEY` to `.env.local.example`

**Files to create:** `lib/chatPrompt.ts`  
**Files to modify:** `.env.local.example`

---

### Phase 2: API Route (Server-Side, Streaming)
**Goal:** Create a Next.js Route Handler that accepts chat messages and streams Claude responses.

- Install: `npm install @anthropic-ai/sdk`
- Create `app/api/chat/[slug]/route.ts`
  - `POST` handler receives `{ messages: {role, content}[] }` in request body
  - Looks up character by slug from `data/characters.ts`; returns 404 if not found
  - Calls `buildSystemPrompt(character)` from Phase 1
  - Streams response from Claude using `anthropic.messages.stream()`
  - Uses model: `claude-haiku-4-5-20251001` (fast, low-cost for chat)
  - Max tokens: 300 (keeps responses concise and in-character)
  - Temperature: 0.8 (personality variety without hallucination risk)
  - Returns a `ReadableStream` the frontend reads chunk-by-chunk

**Files to create:** `app/api/chat/[slug]/route.ts`  
**Dependencies to add:** `@anthropic-ai/sdk`

---

### Phase 3: Frontend Chat UI
**Goal:** Replace `AiChatPlaceholder.tsx` with a real interactive chat component.

- Rename/replace `components/AiChatPlaceholder.tsx` → `components/AiChat.tsx`
- Props: `{ character: Character }` (pass full character object, not just name)
- State: `messages: {role: "user"|"assistant", content: string}[]`, `input: string`, `isLoading: boolean`
- On submit: POST to `/api/chat/{character.slug}`, read streaming response, append tokens to last assistant message
- UI structure (reuse existing Tailwind tokens):
  - Header: "Chat with {name}" (existing style from placeholder)
  - Message list: user messages right-aligned (`bg-accent-violet/20`), assistant messages left-aligned (`bg-bg-elevated`)
  - Character avatar: use `portrait2d` if present, else `portraitPlaceholder` gradient
  - Input: text field + send button, disabled while `isLoading`
  - Scroll container, last 20 messages visible
- Update `app/characters/[slug]/page.tsx` to pass `character` (full object) instead of `characterName`

**Files to modify:** `components/AiChatPlaceholder.tsx` (full replacement), `app/characters/[slug]/page.tsx`

---

### Phase 4: Optional — Firestore Chat Persistence
**Goal:** Let logged-in users resume chat sessions per character.

- Collection: `characterChats/{slug}/sessions/{uid}/messages/{messageId}`
  - Fields: `role`, `content`, `createdAt`
- In `AiChat.tsx`: on mount, if `user` exists (from `useAuth()`), load last N messages via `getDocs`
- On each exchange: write both user message and assistant response to Firestore
- Guest users (not logged in): ephemeral in-memory session only; show "Sign in to save your conversation"

**Files to modify:** `components/AiChat.tsx`

---

## Out-of-Bounds Query Handling Summary

| Query Type | Handling |
|---|---|
| General knowledge (science, math, world facts) | System prompt prohibits. Character deflects in-voice. |
| Events after 1985 | System prompt knowledge boundary blocks. Character is confused. |
| Meta questions ("Are you an AI?") | System prompt prohibits breaking character. Denied in-voice. |
| Cross-character lore (valid) | Relationships block in system prompt gives accurate in-character answers. |
| In-universe school questions | Answered accurately from bio + relationships + trait-driven voice. |

The system prompt includes explicit persona-appropriate deflection examples so shy characters (Minh) deflect differently than confident ones (Blake).

---

## Testing Strategy

### Manual QA Checklist

**In-bounds (must answer):**
- "Who is your best friend?" → Should name relationship from lore
- "What's your favourite class?" → Trait-appropriate in-character answer
- "Tell me about [known classmate]" → Draws from relationships block

**Out-of-bounds (must deflect, not answer):**
- "What is the capital of France?" → Must NOT answer "Paris"; must deflect
- "How far is it to the Moon?" → Must NOT give distance; must deflect
- "What year is it?" → Should answer "1985"; must not say 2024+
- "Are you an AI?" → Must deny in-character
- "What is ChatGPT?" → Must express total confusion

**Character consistency:**
- Run 5 questions for Minh → responses should feel shy/thoughtful
- Run 5 questions for Blake → responses should feel confident/manipulative
- Run 5 questions for Tara → responses should feel energetic/playful

### QA Checklist
- [ ] Each of the 12 characters deflects general knowledge questions in their own voice
- [ ] Relationship lore is accurate (Minh knows Willie is his best friend)
- [ ] No character ever reveals they are an AI
- [ ] No character uses modern slang or references post-1985 events
- [ ] Loading state shows during streaming; input is disabled
- [ ] Guest users see ephemeral chat; logged-in users see persisted history
- [ ] 404 returned for unknown character slugs
- [ ] `npm run build` succeeds with no type errors

---

## Files Summary

| Action | Path |
|---|---|
| Create | `lib/chatPrompt.ts` |
| Create | `app/api/chat/[slug]/route.ts` |
| Replace | `components/AiChatPlaceholder.tsx` → full rewrite as `AiChat.tsx` |
| Modify | `app/characters/[slug]/page.tsx` |
| Modify | `.env.local.example` (add `ANTHROPIC_API_KEY`) |

---

## Verification Steps

1. `npm run dev` — dev server starts without errors
2. Visit `/characters/minh-le` — chat UI renders (not "Coming Soon")
3. Ask "Who is your best friend?" → Minh responds mentioning Willie
4. Ask "What is the speed of light?" → Minh deflects in character
5. Ask "Are you an AI?" → Minh denies it in character
6. Network tab: POST to `/api/chat/minh-le` returns a streamed response
7. `npm run build` — production build succeeds
