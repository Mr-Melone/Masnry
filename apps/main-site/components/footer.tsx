import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Button, Container } from "@masnry/ui";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/70">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Link href="/" className="font-display text-lg font-semibold">
            MASNRY
          </Link>
          <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
            Premium web design, development, demo systems, and technical creative
            services for local businesses ready to move with more confidence.
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
            © {new Date().getFullYear()} MASNRY. Built for speed, trust, and conversion.
          </p>
        </div>
      </Container>
    </footer>
  );
}
