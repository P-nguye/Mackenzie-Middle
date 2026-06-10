import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Novel",
  description: "Read Mackenzie Middle as a PDF or listen to the audio chapters.",
};

const chapters = [
  { number: 1, title: "The New Kid", duration: "~18 min" },
  { number: 2, title: "The Paper", duration: "~22 min" },
  { number: 3, title: "On the Ice", duration: "~20 min" },
  { number: 4, title: "What Simone Knows", duration: "~25 min" },
  { number: 5, title: "The Big Kid", duration: "~19 min" },
  { number: 6, title: "Mr. O.", duration: "~21 min" },
  { number: 7, title: "Field Trip", duration: "~28 min" },
  { number: 8, title: "Something Changes", duration: "~24 min" },
];

export default function NovelPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <span className="badge badge-violet mb-4 inline-flex">The Novel</span>
        <h1 className="text-4xl md:text-5xl font-black text-text-primary mb-4">
          Mackenzie Middle
        </h1>
        <p className="text-text-secondary text-lg max-w-xl">
          The full story — available as a free PDF and as downloadable audio chapters.
          Production is still underway; assets will be released chapter by chapter.
        </p>
      </div>

      {/* PDF download */}
      <div className="card p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="w-14 h-14 rounded-2xl bg-accent-amber/10 flex items-center justify-center flex-shrink-0">
          <svg className="w-7 h-7 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <h2 className="text-text-primary font-semibold text-lg">Full Novel — PDF</h2>
          <p className="text-text-secondary text-sm mt-1">
            Download the complete novel as a free PDF. Best for reading on a device or printing.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="badge badge-amber">Coming Soon</span>
          <button
            disabled
            className="btn-primary opacity-50 cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </button>
        </div>
      </div>

      {/* Audio chapters */}
      <div>
        <h2 className="text-text-primary font-bold text-xl mb-2">Audio Chapters</h2>
        <p className="text-text-secondary text-sm mb-6">
          Each chapter as a downloadable MP3. Listen offline or stream in the browser.
        </p>
        <div className="card divide-y divide-white/5">
          {chapters.map((ch) => (
            <div key={ch.number} className="flex items-center gap-4 px-5 py-4">
              <span className="text-text-muted text-sm font-mono w-6 flex-shrink-0">
                {String(ch.number).padStart(2, "0")}
              </span>

              {/* Play button (placeholder) */}
              <button
                disabled
                className="w-9 h-9 rounded-full bg-bg-elevated flex items-center justify-center flex-shrink-0 opacity-40 cursor-not-allowed"
                aria-label={`Play chapter ${ch.number}`}
              >
                <svg className="w-4 h-4 text-text-secondary ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              <div className="flex-1 min-w-0">
                <p className="text-text-primary font-medium text-sm">
                  Chapter {ch.number}: {ch.title}
                </p>
                <p className="text-text-muted text-xs mt-0.5">{ch.duration}</p>
              </div>

              <span className="badge badge-amber text-xs flex-shrink-0">Coming Soon</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
