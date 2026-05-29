import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Box, Sparkles } from "lucide-react";
import { Badge, Button, Card, Container, Section } from "@masnry/ui";
import { PageTransition, Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "3D Printing",
  description:
    "A coming-soon MASNRY archive for 3D printing projects, prototypes, useful parts, and physical experiments."
};

export default function ThreeDPrintingPage() {
  return (
    <PageTransition>
      <Section className="min-h-[calc(100vh-4rem)]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <Badge className="border-primary/25 bg-primary/10 text-primary">
                3D Printing
              </Badge>
              <h1 className="mt-6 font-display text-5xl font-semibold tracking-normal sm:text-7xl">
                Physical projects are warming up.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                This collection will hold printed objects, prototypes, material
                tests, small tools, and useful things that start on the desk
                before they become a polished case study.
              </p>
              <Button asChild className="mt-8" variant="outline">
                <Link href="/projects">
                  Back to archive <ArrowRight />
                </Link>
              </Button>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="cinematic-panel relative overflow-hidden bg-transparent p-6 sm:p-8">
                <div className="absolute -right-16 -top-16 size-56 rounded-full bg-primary/14 blur-3xl" />
                <div className="relative grid gap-4">
                  {["Prototype queue", "Material notes", "Object studies"].map(
                    (label, index) => (
                      <div
                        key={label}
                        className="flex items-center justify-between rounded-lg border border-border/80 bg-background/50 p-5"
                      >
                        <div className="flex items-center gap-4">
                          {index === 1 ? (
                            <Sparkles className="size-5 text-primary" />
                          ) : (
                            <Box className="size-5 text-primary" />
                          )}
                          <span className="font-medium">{label}</span>
                        </div>
                        <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          Soon
                        </span>
                      </div>
                    )
                  )}
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
}
