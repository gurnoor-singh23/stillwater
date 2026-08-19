import { motion } from "framer-motion";

export default function SessionPreview() {
  return (
    <section id="product" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-16 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="rounded-2xl border border-line bg-[#0F1826] p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-signal">Session active</span>
              <span className="font-mono text-xs text-muted">02:14 / 03:00</span>
            </div>
            <div className="flex flex-col items-center py-6">
              <motion.div className="rounded-full bg-gradient-to-br from-signal to-wave" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} style={{ width: 90, height: 90 }} />
              <p className="mt-6 font-display text-2xl text-paper">Breathe out</p>
              <p className="mt-1 text-sm text-muted">Hold for 4 seconds</p>
            </div>
            <div className="mt-8 h-1.5 w-full rounded-full bg-line overflow-hidden">
              <div className="h-full w-[72%] rounded-full bg-signal" />
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <p className="font-mono text-xs uppercase tracking-widest text-signal mb-4">What it looks like</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper leading-tight">One screen. One rhythm. Nothing to configure.</h2>
          <p className="mt-5 max-w-md text-muted">Every session follows the same pattern - inhale, hold, exhale - paced by the circle, not a countdown you have to watch. Press start, and follow along until the three minutes are up.</p>
        </div>
      </div>
    </section>
  );
}


