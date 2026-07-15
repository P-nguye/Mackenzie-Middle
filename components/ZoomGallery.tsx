"use client";
// Reusable image gallery with a zoomable fullscreen lightbox. Thumbnails open a
// fullscreen viewer where the image can be clicked to zoom in and the cursor pans
// across the detail. Esc closes; ← / → move between images. Used across the
// Behind the Scenes page for each section's artwork.
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

export interface GalleryImage {
  src: string;
  label: string;
}

interface Props {
  images: GalleryImage[];
  // When true, the first image spans the full width as an establishing shot.
  featuredFirst?: boolean;
}

export default function ZoomGallery({ images, featuredFirst = false }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");
  const frameRef = useRef<HTMLDivElement>(null);

  const shot = open !== null ? images[open] : null;

  const close = useCallback(() => {
    setOpen(null);
    setZoomed(false);
  }, []);

  const go = useCallback(
    (dir: number) => {
      setZoomed(false);
      setOpen((cur) => (cur === null ? cur : (cur + dir + images.length) % images.length));
    },
    [images.length]
  );

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

  const handleMove = (e: React.MouseEvent) => {
    if (!zoomed || !frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((s, i) => (
          <button
            key={s.src}
            onClick={() => {
              setZoomed(false);
              setOpen(i);
            }}
            className={`group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-bg-elevated focus:outline-none focus:ring-2 focus:ring-accent-amber/60 ${
              featuredFirst && i === 0 ? "col-span-2 sm:col-span-3 aspect-[16/9]" : ""
            }`}
          >
            <Image
              src={s.src}
              alt={s.label}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
            <span className="absolute bottom-2 left-3 right-3 text-text-primary text-sm font-semibold drop-shadow line-clamp-1">
              {s.label}
            </span>
            <span className="absolute top-2 right-2 w-7 h-7 rounded-full bg-bg-primary/60 backdrop-blur border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-3.5 h-3.5 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      {shot && (
        <div
          className="fixed inset-0 z-[100] bg-bg-primary/95 backdrop-blur-sm flex flex-col animate-[fadeIn_0.2s_ease]"
          onClick={close}
        >
          <div className="flex items-center justify-between px-5 py-4 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
            <p className="text-sm min-w-0 truncate">
              <span className="text-text-primary font-semibold">{shot.label}</span>
              <span className="text-text-muted"> · {open! + 1} / {images.length}</span>
            </p>
            <div className="flex items-center gap-2 flex-shrink-0">
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
              style={{ transform: zoomed ? "scale(2.5)" : "scale(1)", transformOrigin: origin }}
            />

            {images.length > 1 && (
              <>
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
              </>
            )}
          </div>

          <p className="text-center text-text-muted text-xs pb-4 flex-shrink-0">
            Click the image to zoom · move your cursor to explore · Esc to close
          </p>
        </div>
      )}
    </>
  );
}
