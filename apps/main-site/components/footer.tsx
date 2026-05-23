import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Button, Container } from "@masnry/ui";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-background/72 backdrop-blur-xl">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Link href="/" className="font-display text-lg font-semibold">
            MASNRY
          </Link>
          <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
            A personal archive for design, code, web experiments, 3D printing,
            digital notes, and things made for the internet.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex gap-2">
            <Button size="icon" variant="outline" aria-label="Instagram">
              <Instagram />
            </Button>
            <Button size="icon" variant="outline" aria-label="LinkedIn">
              <Linkedin />
            </Button>
            <Button size="icon" variant="outline" aria-label="GitHub">
              <Github />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Copyright {new Date().getFullYear()} MASNRY. Built slowly, shipped cleanly.
          </p>
        </div>
      </Container>
    </footer>
  );
}
