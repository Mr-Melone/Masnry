"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingIntro() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("masnry-intro-seen") === "true";
    if (hasSeenIntro) return;

    sessionStorage.setItem("masnry-intro-seen", "true");
    const startTimer = window.setTimeout(() => setVisible(true), 0);
    const endTimer = window.setTimeout(() => setVisible(false), 1150);
    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(endTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-background text-foreground"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(14px)" }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,hsl(var(--primary)/0.2),transparent_28rem),linear-gradient(180deg,hsl(var(--background)),hsl(var(--background)/0.92))]" />
          <div className="absolute inset-0 opacity-[0.14] [background-image:repeating-linear-gradient(0deg,hsl(var(--foreground)/0.16)_0_1px,transparent_1px_4px)]" />
          <motion.div
            className="relative text-center"
            initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.42em] text-primary">
              initializing archive
            </p>
            <motion.p
              className="mt-4 font-display text-5xl font-semibold tracking-normal sm:text-7xl"
              animate={{ opacity: [0.72, 1, 0.86, 1] }}
              transition={{ duration: 0.8, times: [0, 0.35, 0.58, 1] }}
            >
              MASNRY
            </motion.p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
