"use client";

import { usePathname } from "next/navigation";
import { AmbientLight } from "./ambient-light";
import { Footer } from "./footer";
import { SiteNav } from "./site-nav";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDemoRoute = pathname.startsWith("/projects/barbershop");

  if (isDemoRoute) {
    return <main>{children}</main>;
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AmbientLight />
      <div className="surface-line pointer-events-none absolute inset-x-0 top-0 z-0 h-[48rem] opacity-30" />
      <SiteNav />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
