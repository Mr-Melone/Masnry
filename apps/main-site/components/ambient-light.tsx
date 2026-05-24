"use client";

import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { useEffect } from "react";

export function AmbientLight() {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const { scrollYProgress } = useScroll();
  const velocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(velocity, { stiffness: 80, damping: 24 });
  const topDrift = useTransform(scrollYProgress, [0, 1], [-10, 22]);
  const bottomDrift = useTransform(scrollYProgress, [0, 1], [18, -14]);
  const velocityShift = useTransform(smoothVelocity, [-0.02, 0.02], [-8, 8]);
  const cursorGlow = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, hsl(var(--primary) / 0.12), transparent 18rem)`;

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      mouseX.set((event.clientX / window.innerWidth) * 100);
      mouseY.set((event.clientY / window.innerHeight) * 100);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [mouseX, mouseY]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-80"
        style={{ background: cursorGlow }}
      />
      <motion.div
        className="absolute -left-36 -top-32 h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-3xl"
        style={{ y: topDrift, x: velocityShift }}
      />
      <motion.div
        className="absolute -right-44 top-24 h-[38rem] w-[38rem] rounded-full bg-cyan-400/10 blur-3xl"
        style={{ y: velocityShift }}
      />
      <motion.div
        className="absolute -bottom-44 left-1/3 h-[42rem] w-[42rem] rounded-full bg-indigo-500/12 blur-3xl"
        style={{ y: bottomDrift, x: velocityShift }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,hsl(var(--background)/0.72)_100%)]" />
    </div>
  );
}
