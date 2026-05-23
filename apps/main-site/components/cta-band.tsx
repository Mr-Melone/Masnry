import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button, Container, Section } from "@masnry/ui";

export function CtaBand() {
  return (
    <Section className="py-16">
      <Container>
        <div className="cinematic-panel noise-panel overflow-hidden rounded-lg p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                Open loop
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-normal sm:text-4xl">
                More projects, experiments, and notes will keep landing here.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button asChild size="lg">
                <Link href="/contact">
                  Say hi <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">Browse archive</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
