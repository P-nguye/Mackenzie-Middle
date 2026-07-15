"use client";
// Gallery of the Mackenzie Middle location art for the About page. Thumbnails
// open a fullscreen lightbox where the image can be clicked to zoom in and the
// cursor pans across the detail. Esc closes; ← / → move between images.
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface Shot {
  src: string;
  label: string;
}

const SHOTS: Shot[] = [
  { src: "/assets/Mackenzie Middle/Mackenzie Middle school front view (1).png", label: "Front View" },
  { src: "/assets/Mackenzie Middle/parking lot view (1).png", label: "Parking Lot" },
  { src: "/assets/Mackenzie Middle/school interior (1).png", label: "Interior" },
  { src: "/assets/Mackenzie Middle/back of school view (1).png", label: "Back of School" },
  { src: "/assets/Mackenzie Middle/Mackenzie Middle and Surrounding area (1).png", label: "Surrounding Area" },
];

export default function SchoolGallery() {
  const [open, setOpen] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");
  const frameRef = useRef<HTMLDivElement>(null);

  const shot = open !== null ? SHOTS[open] : null;

  const close = useCallback(() => {
    setOpen(null);
    setZoomed(false);
  }, []);

  const go = useCallback((dir: number) => {
    setZoomed(false);
    setOpen((cur) => (cur === null ? cur : (cur + dir + SHOTS.length) % SHOTS.length));
  }, []);

  // Keyboard controls while the lightbox is open.
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, go]);

  // Track the cursor so zoom pans toward whatever detail is under it.
  const handleMove = (e: React.MouseEvent) => {
    if (!zoomed || !frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
  };

  return (
    <>
      {/* Thumbnail grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {SHOTS.map((s, i) => (
          <button
            key={s.src}
            onClick={() => {
              setZoomed(false);
              setOpen(i);
            }}
            className={`group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-bg-elevated focus:outline-none focus:ring-2 focus:ring-accent-amber/60 ${
              // Let the first, wide establishing shot span two columns
              i === 0 ? "col-span-2 sm:col-span-2 aspect-[16/9]" : ""
            }`}
          >
            <Image
              src={s.src}
              alt={s.label}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient + label */}
            <span className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
            <span className="absolute bottom-2 left-3 text-text-primary text-sm font-semibold drop-shadow">
              {s.label}
            </span>
            {/* Zoom hint */}
            <span className="absolute top-2 right-2 w-7 h-7 rounded-full bg-bg-primary/60 backdrop-blur border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-3.5 h-3.5 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {shot && (
        <div
          className="fixed inset-0 z-[100] bg-bg-primary/95 backdrop-blur-sm flex flex-col animate-[fadeIn_0.2s_ease]"
          onClick={close}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-4 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
            <p className="text-sm">
              <span className="text-text-primary font-semibold">{shot.label}</span>
              <span className="text-text-muted"> · {open! + 1} / {SHOTS.length}</span>
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoomed((z) => !z)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-elevated border border-white/10 text-text-secondary text-xs font-medium hover:text-text-primary transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  {zoomed ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10H7" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 7v6m3-3H7" />
                  )}
                </svg>
                {zoomed ? "Zoom out" : "Zoom in"}
              </button>
              <button
                onClick={close}
                aria-label="Close"
                className="w-9 h-9 rounded-full bg-bg-elevated border border-white/10 text-text-secondary flex items-center justify-center hover:text-text-primary hover:border-white/20 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image stage */}
          <div
            ref={frameRef}
            className="relative flex-1 min-h-0 mx-4 mb-4 overflow-hidden"
            onClick={(e) => {
              e.stopPropagation();
              setZoomed((z) => !z);
            }}
            onMouseMove={handleMove}
            onMouseLeave={() => setOrigin("50% 50%")}
            style={{ cursor: zoomed ? "zoom-out" : "zoom-in" }}
          >
            <Image
              key={shot.src}
              src={shot.src}
              alt={shot.label}
              fill
              sizes="100vw"
              priority
              className="object-contain transition-transform duration-300 ease-out"
              style={{
                transform: zoomed ? "scale(2.5)" : "scale(1)",
                transformOrigin: origin,
              }}
            />

            {/* Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); go(-1); }}
              aria-label="Previous"
              className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-bg-elevated/80 border border-white/10 text-text-secondary flex items-center justify-center hover:text-accent-amber transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); go(1); }}
              aria-label="Next"
              className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-bg-elevated/80 border border-white/10 text-text-secondary flex items-center justify-center hover:text-accent-amber transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <p className="text-center text-text-muted text-xs pb-4 flex-shrink-0">
            Click the image to zoom · move your cursor to explore · Esc to close
          </p>
        </div>
      )}
    </>
  );
}
