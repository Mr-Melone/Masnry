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
  const midDrift = useTransform(scrollYProgress, [0, 1], [38, -42]);
  const velocityShift = useTransform(smoothVelocity, [-0.02, 0.02], [-8, 8]);
  const cursorGlow = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, hsl(var(--primary) / 0.13), transparent 18rem)`;

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
        className="absolute inset-0 opacity-80 mix-blend-screen dark:mix-blend-screen"
        style={{ background: cursorGlow }}
      />
      <motion.div
        className="absolute -left-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-primary/20 blur-3xl"
        style={{ y: topDrift, x: velocityShift }}
      />
      <motion.div
        className="absolute -right-44 top-16 h-[40rem] w-[40rem] rounded-full bg-cyan-400/12 blur-3xl"
        style={{ y: velocityShift }}
      />
      <motion.div
        className="absolute -bottom-44 left-1/3 h-[44rem] w-[44rem] rounded-full bg-indigo-500/12 blur-3xl"
        style={{ y: bottomDrift, x: velocityShift }}
      />
      <motion.div
        className="absolute left-[12%] top-[42%] h-[28rem] w-[56rem] -rotate-12 rounded-[999px] bg-[linear-gradient(90deg,hsl(var(--primary)/0.12),transparent_58%,hsl(258_88%_62%/0.1))] blur-3xl"
        style={{ y: midDrift }}
      />
      <motion.div
        className="absolute inset-x-[-10%] top-1/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        style={{ y: midDrift }}
      />
      <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_center,hsl(var(--foreground)/0.5)_0_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,hsl(var(--background)/0.72)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--background)/0.18),transparent_22%,transparent_76%,hsl(var(--background)/0.32))]" />
    </div>
  );
}
