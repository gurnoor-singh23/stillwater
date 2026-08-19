import BreathingCircle from "./BreathingCircle";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="grid items-center gap-16 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-signal mb-4">
            A 3-minute reset
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-paper">
            Breathe.<br />Reset.<br />Continue.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted">
            Stillwater guides you through a short, structured breathing session -
            no app tour, no streaks to protect. Just three minutes, then back to your day.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#cta" className="rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink hover:scale-105 transition-transform">
              Start a session
            </a>
            <a href="#how" className="text-sm text-muted hover:text-paper">
              See how it works -&gt;
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <BreathingCircle />
        </div>
      </div>
    </section>
  );
}


