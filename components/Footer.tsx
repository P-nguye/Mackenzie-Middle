import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-card mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-amber to-accent-violet flex items-center justify-center text-bg-primary font-bold text-xs">
                MM
              </div>
              <span className="font-display font-bold text-text-primary">Mackenzie Middle</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              A YouTube series and novel set in 1985 Edmonton. Come for the drama, stay for the characters.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-text-secondary text-xs font-semibold uppercase tracking-wider mb-3">
              Explore
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/characters", label: "Characters" },
                { href: "/media", label: "Media & Downloads" },
                { href: "/about", label: "About the Series" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted text-sm hover:text-accent-amber transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-text-secondary text-xs font-semibold uppercase tracking-wider mb-3">
              Community
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/community", label: "Message Board" },
                { href: "/chat", label: "Live Chat" },
                { href: "/signup", label: "Create Account" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted text-sm hover:text-accent-amber transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs">
            © 2026 Mackenzie Middle. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.youtube.com/@eversparkproductions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text-muted text-xs hover:text-accent-amber transition-colors"
              aria-label="EverSpark Productions on YouTube"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.5 6.2a3.02 3.02 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3.02 3.02 0 002.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 002.12-2.14A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
              </svg>
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
