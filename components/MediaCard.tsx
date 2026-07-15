import Image from "next/image";

interface MediaCardProps {
  title: string;
  subtitle?: string;
  type: "wallpaper" | "track";
  isPlaceholder?: boolean;
  // Wallpaper artwork + download target (public path). When set, the card shows
  // the real image and a working Download link instead of the placeholder art.
  image?: string;
  downloadHref?: string;
  downloadName?: string;
}

export default function MediaCard({
  title,
  subtitle,
  type,
  isPlaceholder = true,
  image,
  downloadHref,
  downloadName,
}: MediaCardProps) {
  return (
    <div className="card-hover group">
      {type === "wallpaper" ? (
        <div className="aspect-video bg-gradient-to-br from-bg-elevated to-bg-card flex items-center justify-center relative overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <>
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#e8a045,transparent_60%)]" />
              </div>
              <svg className="w-10 h-10 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-4 p-4">
          <div className="w-10 h-10 rounded-lg bg-accent-violet/15 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-accent-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-text-primary text-sm truncate">{title}</p>
            {subtitle && <p className="text-text-muted text-xs mt-0.5">{subtitle}</p>}
          </div>
        </div>
      )}

      <div className={`${type === "wallpaper" ? "p-3 border-t border-white/5" : "px-4 pb-4"} flex items-center justify-between gap-2`}>
        {type === "wallpaper" && (
          <p className="text-text-secondary text-sm font-medium truncate">{title}</p>
        )}
        {/* Live download link when a file is provided; otherwise nothing (section badge covers placeholders) */}
        {downloadHref ? (
          <a
            href={downloadHref}
            download={downloadName ?? true}
            className="btn-outline text-xs px-3 py-1.5 ml-auto flex-shrink-0"
          >
            Download
          </a>
        ) : (
          !isPlaceholder && (
            <button className="btn-outline text-xs px-3 py-1.5 ml-auto flex-shrink-0">
              Download
            </button>
          )
        )}
      </div>
    </div>
  );
}
