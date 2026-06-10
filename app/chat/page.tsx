"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/lib/auth-context";
import { getCharacterBySlug } from "@/data/characters";

interface ChatMessage {
  id: string;
  text: string;
  authorUid: string;
  displayName: string;
  avatarCharacterId: string;
  createdAt: { seconds: number } | null;
}

export default function ChatPage() {
  const { user, profile } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = query(
      collection(db, "chatMessages"),
      orderBy("createdAt", "asc"),
      limit(100)
    );
    return onSnapshot(q, (snap) => {
      setMessages(
        snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<ChatMessage, "id">) }))
      );
    });
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !profile || !text.trim()) return;
    setSending(true);
    try {
      await addDoc(collection(db, "chatMessages"), {
        text: text.trim(),
        authorUid: user.uid,
        displayName: profile.displayName,
        avatarCharacterId: profile.avatarCharacterId,
        createdAt: serverTimestamp(),
      });
      setText("");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 flex flex-col" style={{ height: "calc(100vh - 4rem)" }}>
      {/* Header */}
      <div className="mb-5 flex-shrink-0">
        <span className="badge badge-amber mb-3 inline-flex">Live</span>
        <h1 className="text-2xl font-black text-text-primary">Fan Chat</h1>
        <p className="text-text-secondary text-sm mt-1">
          Live chat with other fans. {!user && (
            <>
              <Link href="/login" className="text-accent-amber hover:underline">Sign in</Link>
              {" "}to participate.
            </>
          )}
        </p>
      </div>

      {/* Messages */}
      <div className="card flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
        {messages.length === 0 && (
          <div className="h-full flex items-center justify-center">
            <p className="text-text-muted text-sm">No messages yet. Say hi!</p>
          </div>
        )}
        {messages.map((msg) => {
          const isMe = msg.authorUid === user?.uid;
          const char = getCharacterBySlug(msg.avatarCharacterId);
          return (
            <div key={msg.id} className={`flex gap-2.5 ${isMe ? "flex-row-reverse" : ""}`}>
              {/* Avatar */}
              <div
                className={`w-8 h-8 rounded-full bg-gradient-to-b ${char?.portraitPlaceholder ?? "from-bg-elevated to-bg-card"} flex items-center justify-center flex-shrink-0 overflow-hidden`}
              >
                <svg className="w-4 h-4 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
              <div className={`flex flex-col gap-0.5 max-w-xs ${isMe ? "items-end" : ""}`}>
                <span className="text-text-muted text-xs">{msg.displayName}</span>
                <div
                  className={`px-3.5 py-2 rounded-2xl text-sm ${
                    isMe
                      ? "bg-accent-amber text-bg-primary rounded-tr-sm"
                      : "bg-bg-elevated text-text-secondary rounded-tl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="flex-shrink-0 mt-4">
        {user ? (
          <form onSubmit={handleSend} className="flex gap-2">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Say something…"
              maxLength={500}
              disabled={sending}
              className="flex-1 bg-bg-elevated border border-white/10 rounded-xl px-4 py-2.5 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-amber/50 transition-colors"
            />
            <button
              type="submit"
              disabled={sending || !text.trim()}
              className="btn-primary flex-shrink-0 disabled:opacity-50"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        ) : (
          <div className="card p-4 text-center">
            <p className="text-text-muted text-sm">
              <Link href="/login" className="text-accent-amber hover:underline">Sign in</Link> to chat.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
