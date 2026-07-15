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
              href="#"
              className="text-text-muted text-xs hover:text-accent-amber transition-colors"
              aria-label="YouTube channel"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
