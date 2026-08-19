export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur-md">
      <nav className="flex items-center justify-between px-8 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-signal text-ink font-display font-bold text-sm">
            S
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-paper">
            Stillwater
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#product" className="text-sm text-muted hover:text-paper">Sessions</a>
          <a href="#how" className="text-sm text-muted hover:text-paper">How it works</a>
        </div>

        <a href="#cta" className="rounded-full bg-signal px-4 py-2 text-sm font-semibold text-ink hover:scale-105 transition-transform">
          Start a session
        </a>
      </nav>
    </header>
  );
}