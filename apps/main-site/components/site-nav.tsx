"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button, Container, cn } from "@masnry/ui";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all",
        scrolled
          ? "border-b border-white/10 bg-background/72 shadow-2xl shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="group relative rounded-full px-1 py-2 font-display text-lg font-semibold tracking-normal"
        >
          <span className="pointer-events-none absolute inset-[-0.45rem] rounded-full border border-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="absolute inset-0 animate-[spin_2.8s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,transparent_0_64%,hsl(var(--primary)/0.9),transparent_82%)] p-px blur-[0.5px] [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude]" />
            <span className="absolute inset-1 rounded-full shadow-[0_0_28px_hsl(var(--primary)/0.45)]" />
          </span>
          <span className="relative">MASNRY</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                pathname === item.href && "bg-secondary text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button asChild>
            <Link href="/contact">Say hi</Link>
          </Button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            aria-label="Open menu"
            size="icon"
            variant="outline"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </Container>
      {open ? (
        <div className="border-t border-border bg-background/96 backdrop-blur-xl md:hidden">
          <Container className="grid gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-sm text-muted-foreground",
                  pathname === item.href && "bg-secondary text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Say hi
              </Link>
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
