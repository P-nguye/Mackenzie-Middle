"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { characters } from "@/data/characters";
import CharacterCard from "@/components/CharacterCard";

export default function SignupPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [selectedAvatar, setSelectedAvatar] = useState<string>("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.displayName.trim()) return setError("Please enter a display name.");
    if (!form.email.trim()) return setError("Please enter your email.");
    if (form.password.length < 6) return setError("Password must be at least 6 characters.");
    if (form.password !== form.confirmPassword) return setError("Passwords do not match.");
    setStep(2);
  };

  const handleSignup = async () => {
    if (!selectedAvatar) return setError("Please choose a character avatar.");
    setLoading(true);
    setError("");
    try {
      const { user } = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await updateProfile(user, { displayName: form.displayName });
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: form.displayName,
        email: form.email,
        avatarCharacterId: selectedAvatar,
        createdAt: serverTimestamp(),
      });
      router.push("/profile");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setError(msg.replace("Firebase: ", "").replace(/\(auth\/[^)]+\)\.?/, "").trim());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-start justify-center py-16 px-4">
      <div className="w-full max-w-lg">
        {/* Step 1: Account details */}
        {step === 1 && (
          <div className="card p-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-text-primary">Create your account</h1>
              <p className="text-text-secondary text-sm mt-1">
                Already have one?{" "}
                <Link href="/login" className="text-accent-amber hover:underline">
                  Sign in
                </Link>
              </p>
            </div>

            <form onSubmit={handleStep1} className="space-y-4">
              <div>
                <label className="block text-text-secondary text-sm font-medium mb-1.5">
                  Display name
                </label>
                <input
                  name="displayName"
                  type="text"
                  value={form.displayName}
                  onChange={handleFieldChange}
                  placeholder="How you'll appear to others"
                  className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-2.5 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-amber/50 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-text-secondary text-sm font-medium mb-1.5">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleFieldChange}
                  placeholder="you@example.com"
                  className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-2.5 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-amber/50 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-text-secondary text-sm font-medium mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={handleFieldChange}
                    placeholder="At least 6 characters"
                    className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-2.5 pr-11 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-amber/50 transition-colors"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-accent-amber transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-text-secondary text-sm font-medium mb-1.5">
                  Confirm password
                </label>
                <div className="relative">
                  <input
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={form.confirmPassword}
                    onChange={handleFieldChange}
                    placeholder="Repeat your password"
                    className="w-full bg-bg-elevated border border-white/10 rounded-lg px-4 py-2.5 pr-11 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-amber/50 transition-colors"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-accent-amber transition-colors"
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    {showConfirmPassword ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2.5">
                  {error}
                </p>
              )}

              <button type="submit" className="btn-primary w-full justify-center mt-2">
                Continue to Avatar
              </button>
            </form>
          </div>
        )}

        {/* Step 2: Avatar selection */}
        {step === 2 && (
          <div>
            <div className="mb-6">
              <button
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1.5 text-text-muted text-sm hover:text-accent-amber transition-colors mb-4"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back
              </button>
              <h1 className="text-2xl font-bold text-text-primary">Pick your character</h1>
              <p className="text-text-secondary text-sm mt-1">
                This will be your avatar on the message board and live chat.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {characters.map((char) => (
                <CharacterCard
                  key={char.slug}
                  character={char}
                  selectable
                  selected={selectedAvatar === char.slug}
                  onSelect={setSelectedAvatar}
                  designMode="2d"
                />
              ))}
            </div>

            {error && (
              <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2.5 mb-4">
                {error}
              </p>
            )}

            <button
              onClick={handleSignup}
              disabled={loading || !selectedAvatar}
              className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating account…" : "Create account"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
