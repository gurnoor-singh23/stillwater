import { motion } from "framer-motion";

export default function BreathingCircle({ className = "" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.div
        className="absolute rounded-full bg-wave/20"
        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.1, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: 220, height: 220 }}
      />
      <motion.div
        className="rounded-full bg-gradient-to-br from-signal to-wave"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: 150, height: 150 }}
      />
      <motion.span
        className="absolute font-mono text-xs text-ink font-medium tracking-wide"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        breathe
      </motion.span>
    </div>
  );
}