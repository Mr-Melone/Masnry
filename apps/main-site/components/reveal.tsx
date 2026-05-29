"use client";

import {
  motion,
  useScroll,
  useTransform,
  type HTMLMotionProps
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  delay = 0,
  variant = "lift",
  ...props
}: HTMLMotionProps<"div"> & {
  delay?: number;
  variant?: "lift" | "soft" | "mask" | "scale";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleState, setVisibleState] = useState(false);
  const variants = {
    lift: { opacity: 0, y: 22, filter: "blur(10px)" },
    soft: { opacity: 0, y: 0, filter: "blur(14px)" },
    mask: { opacity: 0, y: 28, clipPath: "inset(0 0 100% 0)" },
    scale: { opacity: 0, y: 18, scale: 0.97, filter: "blur(10px)" }
  };
  const visible = {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    clipPath: "inset(0 0 0% 0)"
  };

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const fallback = window.setTimeout(() => setVisibleState(true), 700);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisibleState(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.1 }
    );

    observer.observe(node);
    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={variants[variant]}
      animate={visibleState ? visible : variants[variant]}
      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxLayer({
  children,
  distance = 48,
  className
}: {
  children: React.ReactNode;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0.5, 1, 1, 0.58]);

  return (
    <motion.div ref={ref} className={className} style={{ y, opacity }}>
      {children}
    </motion.div>
  );
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
