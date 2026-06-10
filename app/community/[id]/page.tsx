"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import {
  doc,
  getDoc,
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/lib/auth-context";

interface Thread {
  title: string;
  body: string;
  authorName: string;
  createdAt: { seconds: number } | null;
}

interface Reply {
  id: string;
  body: string;
  authorName: string;
  createdAt: { seconds: number } | null;
}

function timeAgo(seconds: number) {
  const diff = Date.now() / 1000 - seconds;
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

export default function ThreadPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { user, profile } = useAuth();
  const [thread, setThread] = useState<Thread | null>(null);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [replyText, setReplyText] = useState("");
  const [posting, setPosting] = useState(false);

  useEffect(() => {
    getDoc(doc(db, "threads", id)).then((snap) => {
      if (snap.exists()) setThread(snap.data() as Thread);
    });
  }, [id]);

  useEffect(() => {
    const q = query(
      collection(db, "threads", id, "replies"),
      orderBy("createdAt", "asc")
    );
    return onSnapshot(q, (snap) => {
      setReplies(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Reply, "id">) })));
    });
  }, [id]);

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !profile || !replyText.trim()) return;
    setPosting(true);
    try {
      await addDoc(collection(db, "threads", id, "replies"), {
        body: replyText.trim(),
        authorUid: user.uid,
        authorName: profile.displayName,
        createdAt: serverTimestamp(),
      });
      await updateDoc(doc(db, "threads", id), { replyCount: increment(1) });
      setReplyText("");
    } finally {
      setPosting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <Link
        href="/community"
        className="inline-flex items-center gap-1.5 text-text-muted text-sm hover:text-accent-amber transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Message Board
      </Link>

      {thread && (
        <>
          {/* Original post */}
          <div className="card p-6 mb-8">
            <h1 className="text-xl font-bold text-text-primary mb-2">{thread.title}</h1>
            {thread.body && (
              <p className="text-text-secondary text-sm leading-relaxed mb-4">{thread.body}</p>
            )}
            <p className="text-text-muted text-xs">
              {thread.authorName}
              {thread.createdAt && ` · ${timeAgo(thread.createdAt.seconds)}`}
            </p>
          </div>

          {/* Replies */}
          <div className="space-y-3 mb-8">
            {replies.map((reply) => (
              <div key={reply.id} className="card p-4">
                <p className="text-text-secondary text-sm leading-relaxed">{reply.body}</p>
                <p className="text-text-muted text-xs mt-2">
                  {reply.authorName}
                  {reply.createdAt && ` · ${timeAgo(reply.createdAt.seconds)}`}
                </p>
              </div>
            ))}
            {replies.length === 0 && (
              <p className="text-text-muted text-sm text-center py-6">
                No replies yet. Be the first to respond.
              </p>
            )}
          </div>

          {/* Reply form */}
          {user ? (
            <form onSubmit={handleReply} className="space-y-3">
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply…"
                rows={4}
                className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-2.5 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-amber/50 resize-none"
                required
              />
              <button
                type="submit"
                disabled={posting || !replyText.trim()}
                className="btn-primary disabled:opacity-50"
              >
                {posting ? "Posting…" : "Post reply"}
              </button>
            </form>
          ) : (
            <div className="card p-5 text-center">
              <p className="text-text-secondary text-sm mb-3">
                <Link href="/login" className="text-accent-amber hover:underline">Sign in</Link>
                {" "}or{" "}
                <Link href="/signup" className="text-accent-amber hover:underline">create an account</Link>
                {" "}to reply.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
