import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    { n: "01", title: "Press start", body: "One button. No sign-up wall, no settings screen before you begin." },
    { n: "02", title: "Follow the circle", body: "Inhale as it grows, hold, exhale as it shrinks. The pace is set for you." },
    { n: "03", title: "Go back to your day", body: "Three minutes, then the session ends itself. No streaks, no guilt if you skip tomorrow." },
  ];
  return (
    <section id="how" className="mx-auto max-w-6xl px-6 py-24 border-t border-line">
      <p className="font-mono text-xs uppercase tracking-widest text-signal mb-4">How it works</p>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper leading-tight mb-14 max-w-lg">Three steps. Three minutes. That is the whole product.</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div key={s.n} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5, delay: i * 0.12 }}>
            <span className="font-mono text-sm text-wave">{s.n}</span>
            <h3 className="font-display text-xl text-paper mt-3 mb-2">{s.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


