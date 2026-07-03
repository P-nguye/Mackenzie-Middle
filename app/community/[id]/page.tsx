"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  updateDoc,
  increment,
  deleteDoc,
} from "firebase/firestore";
import Image from "next/image";
import { db } from "@/lib/firebase";
import { useAuth } from "@/lib/auth-context";
import { getCharacterBySlug } from "@/data/characters";

interface Thread {
  title: string;
  body: string;
  authorUid: string;
  authorName: string;
  createdAt: { seconds: number } | null;
}

interface Reply {
  id: string;
  body: string;
  authorUid: string;
  authorName: string;
  avatarCharacterId?: string;
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
  const router = useRouter();
  const { user, profile } = useAuth();
  const [thread, setThread] = useState<Thread | null>(null);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [replyText, setReplyText] = useState("");
  const [posting, setPosting] = useState(false);
  const [deleting, setDeleting] = useState(false);

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
        avatarCharacterId: profile.avatarCharacterId,
        createdAt: serverTimestamp(),
      });
      await updateDoc(doc(db, "threads", id), { replyCount: increment(1) });
      setReplyText("");
    } finally {
      setPosting(false);
    }
  };

  const handleDelete = async () => {
    // Only the thread creator may delete; guard here as well as in the UI.
    if (!user || !thread || thread.authorUid !== user.uid) return;
    if (!window.confirm(`Delete "${thread.title}"? This can't be undone.`)) return;
    setDeleting(true);
    try {
      // Remove replies subcollection first so nothing is orphaned.
      const snap = await getDocs(collection(db, "threads", id, "replies"));
      await Promise.all(snap.docs.map((r) => deleteDoc(r.ref)));
      await deleteDoc(doc(db, "threads", id));
      router.push("/community");
    } catch {
      setDeleting(false);
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
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-xl font-bold text-text-primary mb-2">{thread.title}</h1>
              {user?.uid === thread.authorUid && (
                <button
                  onClick={handleDelete}
                  disabled={deleting}
                  className="inline-flex items-center gap-1.5 text-text-muted text-xs hover:text-red-400 transition-colors flex-shrink-0 disabled:opacity-50"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  {deleting ? "Deleting…" : "Delete"}
                </button>
              )}
            </div>
            {thread.body && (
              <p className="text-text-secondary text-sm leading-relaxed mb-4">{thread.body}</p>
            )}
            <p className="text-text-muted text-xs">
              {thread.authorName}
              {thread.createdAt && ` · ${timeAgo(thread.createdAt.seconds)}`}
            </p>
          </div>

          {/* Replies — styled like the live chat */}
          <div className="card p-4 space-y-3 mb-8">
            {replies.length === 0 ? (
              <p className="text-text-muted text-sm text-center py-6">
                No replies yet. Be the first to respond.
              </p>
            ) : (
              replies.map((reply) => {
                const isMe = reply.authorUid === user?.uid;
                const char = getCharacterBySlug(reply.avatarCharacterId ?? "");
                return (
                  <div key={reply.id} className={`flex gap-2.5 ${isMe ? "flex-row-reverse" : ""}`}>
                    {/* Avatar */}
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-b ${char?.portraitPlaceholder ?? "from-bg-elevated to-bg-card"} flex items-center justify-center flex-shrink-0 overflow-hidden`}
                    >
                      {char?.portrait2d ? (
                        <Image
                          src={char.portrait2d}
                          alt={reply.authorName}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <svg className="w-4 h-4 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                        </svg>
                      )}
                    </div>
                    <div className={`flex flex-col gap-0.5 max-w-xs ${isMe ? "items-end" : ""}`}>
                      <span className="text-text-muted text-xs">
                        {reply.authorName}
                        {reply.createdAt && ` · ${timeAgo(reply.createdAt.seconds)}`}
                      </span>
                      <div
                        className={`px-3.5 py-2 rounded-2xl text-sm ${
                          isMe
                            ? "bg-accent-amber text-bg-primary rounded-tr-sm"
                            : "bg-bg-elevated text-text-secondary rounded-tl-sm"
                        }`}
                      >
                        {reply.body}
                      </div>
                    </div>
                  </div>
                );
              })
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
