"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  addDoc,
  serverTimestamp,
  doc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/lib/auth-context";

interface Thread {
  id: string;
  title: string;
  body: string;
  authorUid: string;
  authorName: string;
  createdAt: { seconds: number } | null;
  replyCount: number;
}

function timeAgo(seconds: number) {
  const diff = Date.now() / 1000 - seconds;
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

export default function CommunityPage() {
  const { user, profile } = useAuth();
  const [threads, setThreads] = useState<Thread[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posting, setPosting] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, "threads"), orderBy("createdAt", "desc"), limit(50));
    return onSnapshot(q, (snap) => {
      setThreads(
        snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Thread, "id">) }))
      );
    });
  }, []);

  const handlePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !profile || !title.trim()) return;
    setPosting(true);
    try {
      await addDoc(collection(db, "threads"), {
        title: title.trim(),
        body: body.trim(),
        authorUid: user.uid,
        authorName: profile.displayName,
        createdAt: serverTimestamp(),
        replyCount: 0,
      });
      setTitle("");
      setBody("");
      setShowForm(false);
    } finally {
      setPosting(false);
    }
  };

  const handleDelete = async (thread: Thread) => {
    // Only the creator may delete; guard here in addition to the UI gate.
    if (!user || thread.authorUid !== user.uid) return;
    if (!window.confirm(`Delete "${thread.title}"? This can't be undone.`)) return;
    setDeletingId(thread.id);
    try {
      // Remove replies subcollection first so nothing is orphaned.
      const replies = await getDocs(collection(db, "threads", thread.id, "replies"));
      await Promise.all(replies.docs.map((r) => deleteDoc(r.ref)));
      await deleteDoc(doc(db, "threads", thread.id));
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="flex items-end justify-between mb-8 gap-4">
        <div>
          <span className="badge badge-amber mb-3 inline-flex">Community</span>
          <h1 className="text-3xl font-black text-text-primary">Message Board</h1>
          <p className="text-text-secondary text-sm mt-1">
            Discuss episodes, characters, and fan theories.
          </p>
        </div>
        {user ? (
          <button
            onClick={() => setShowForm((v) => !v)}
            className="btn-primary flex-shrink-0"
          >
            {showForm ? "Cancel" : "New thread"}
          </button>
        ) : (
          <Link href="/signup" className="btn-primary flex-shrink-0">
            Join to post
          </Link>
        )}
      </div>

      {/* New thread form */}
      {showForm && user && (
        <form onSubmit={handlePost} className="card p-5 mb-8 space-y-3">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Thread title"
            maxLength={120}
            className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-2.5 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-amber/50"
            required
          />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="What's on your mind? (optional)"
            rows={4}
            className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-2.5 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-amber/50 resize-none"
          />
          <button type="submit" disabled={posting || !title.trim()} className="btn-primary disabled:opacity-50">
            {posting ? "Posting…" : "Post thread"}
          </button>
        </form>
      )}

      {/* Thread list */}
      {threads.length === 0 ? (
        <div className="card p-12 text-center">
          <p className="text-text-muted text-sm">No threads yet. Be the first to start a discussion.</p>
        </div>
      ) : (
        <div className="card divide-y divide-white/5">
          {threads.map((thread) => (
            <div
              key={thread.id}
              className="flex items-start gap-4 p-4 hover:bg-bg-elevated transition-colors"
            >
              <Link href={`/community/${thread.id}`} className="flex-1 min-w-0">
                <h3 className="text-text-primary font-medium text-sm line-clamp-1">{thread.title}</h3>
                {thread.body && (
                  <p className="text-text-muted text-xs mt-0.5 line-clamp-1">{thread.body}</p>
                )}
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-text-muted text-xs">{thread.authorName}</span>
                  <span className="text-text-muted text-xs">·</span>
                  <span className="text-text-muted text-xs">
                    {thread.createdAt ? timeAgo(thread.createdAt.seconds) : "just now"}
                  </span>
                </div>
              </Link>
              <div className="flex items-center gap-3 flex-shrink-0 mt-0.5">
                <div className="flex items-center gap-1 text-text-muted text-xs">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {thread.replyCount}
                </div>
                {user?.uid === thread.authorUid && (
                  <button
                    onClick={() => handleDelete(thread)}
                    disabled={deletingId === thread.id}
                    aria-label="Delete thread"
                    className="text-text-muted hover:text-red-400 transition-colors disabled:opacity-50"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
