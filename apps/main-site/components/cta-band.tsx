import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button, Container, Section } from "@masnry/ui";

export function CtaBand() {
  return (
    <Section className="py-16">
      <Container>
        <div className="overflow-hidden rounded-lg border border-border bg-card p-8 shadow-2xl shadow-primary/10 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                Ready when you are
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-normal sm:text-4xl">
                Give your business a website that feels sharper than the competition.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start a project <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">View work</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
