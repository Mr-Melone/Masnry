"use client";

import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { useEffect } from "react";

const stars = [
  [7, 18, 0.42], [14, 62, 0.22], [18, 34, 0.5], [24, 78, 0.28],
  [31, 16, 0.32], [36, 54, 0.48], [42, 28, 0.24], [47, 71, 0.36],
  [53, 12, 0.5], [58, 42, 0.22], [63, 83, 0.4], [68, 26, 0.3],
  [74, 58, 0.5], [81, 17, 0.28], [87, 46, 0.36], [92, 75, 0.24],
  [11, 88, 0.34], [28, 46, 0.2], [39, 92, 0.26], [57, 66, 0.46],
  [71, 8, 0.22], [83, 91, 0.32], [96, 31, 0.44], [4, 48, 0.25]
] as const;

export function AmbientLight() {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const { scrollYProgress } = useScroll();
  const velocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(velocity, { stiffness: 80, damping: 24 });
  const topDrift = useTransform(scrollYProgress, [0, 1], [-10, 22]);
  const bottomDrift = useTransform(scrollYProgress, [0, 1], [18, -14]);
  const midDrift = useTransform(scrollYProgress, [0, 1], [38, -42]);
  const galaxyY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const galaxyOpacity = useTransform(scrollYProgress, [0, 0.28, 1], [0.86, 0.52, 0.72]);
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
        className="galaxy-band absolute left-[-22%] top-[16%] h-[26rem] w-[145%] opacity-80"
        style={{ y: galaxyY, opacity: galaxyOpacity }}
      />
      <motion.div
        className="milky-way absolute left-[-28%] top-[20%] h-[24rem] w-[156%] rounded-[999px] opacity-70"
        style={{ y: galaxyY, opacity: galaxyOpacity }}
      />
      <div className="absolute inset-0">
        {stars.map(([left, top, opacity], index) => (
          <span
            key={`${left}-${top}`}
            className="star-speck absolute size-px rounded-full bg-foreground"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              opacity,
              animationDelay: `${index * -0.67}s`,
              animationDuration: `${16 + (index % 7)}s`
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,hsl(var(--background)/0.72)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--background)/0.18),transparent_22%,transparent_76%,hsl(var(--background)/0.32))]" />
    </div>
  );
}
