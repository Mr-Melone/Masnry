"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  delay = 0,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const show = () => {
      setVisible(true);
      setHasEntered(true);
    };
    const fallback = window.setTimeout(show, 700);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          show();
        } else {
          setVisible(false);
        }
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0.08 }
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
      initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
      animate={
        visible
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : hasEntered
            ? { opacity: 0.68, y: 24, filter: "blur(6px)" }
            : { opacity: 0, y: 34, filter: "blur(12px)" }
      }
      transition={{ duration: 0.82, ease: [0.16, 1, 0.22, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
