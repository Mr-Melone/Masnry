"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@masnry/ui";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = resolvedTheme === "dark";

  // next-themes resolves after mount, so the icon waits to avoid hydration drift.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button aria-label="Toggle theme" size="icon" variant="ghost" disabled>
        <Sun className="opacity-0" />
      </Button>
    );
  }

  return (
    <Button
      aria-label="Toggle theme"
      size="icon"
      variant="ghost"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title="Toggle theme"
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}
