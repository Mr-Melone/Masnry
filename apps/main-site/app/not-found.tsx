import Link from "next/link";
import { Button, Container, Section } from "@masnry/ui";

export default function NotFound() {
  return (
    <Section>
      <Container className="text-center">
        <h1 className="font-display text-4xl font-semibold">Page not found</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          This page is not part of the MASNRY system yet.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Return home</Link>
        </Button>
      </Container>
    </Section>
  );
}
