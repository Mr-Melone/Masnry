import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Terminal } from "lucide-react";
import { Badge, Button, Card, Container, Section } from "@masnry/ui";
import { PageTransition, Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Python & HTML",
  description:
    "A coming-soon MASNRY archive for Python, HTML, interface experiments, and small code projects."
};

export default function PythonHtmlPage() {
  return (
    <PageTransition>
      <Section className="min-h-[calc(100vh-4rem)]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <Reveal>
              <Badge className="border-primary/25 bg-primary/10 text-primary">
                Python & HTML
              </Badge>
              <h1 className="mt-6 font-display text-5xl font-semibold tracking-normal sm:text-7xl">
                Small tools, sketches, and code fragments will live here.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                This category is for experimental code, utility projects,
                interface studies, Python scripts, and HTML builds that are
                worth keeping visible even before they become full products.
              </p>
              <Button asChild className="mt-8" variant="outline">
                <Link href="/projects">
                  Back to archive <ArrowRight />
                </Link>
              </Button>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="cinematic-panel overflow-hidden bg-transparent p-0">
                <div className="border-b border-border/80 bg-background/60 px-5 py-4">
                  <div className="flex gap-2">
                    <span className="size-2.5 rounded-full bg-primary/70" />
                    <span className="size-2.5 rounded-full bg-foreground/25" />
                    <span className="size-2.5 rounded-full bg-foreground/12" />
                  </div>
                </div>
                <div className="space-y-5 p-6 font-mono text-sm text-muted-foreground sm:p-8">
                  <p className="text-primary">
                    <Terminal className="mr-2 inline size-4" />
                    masnry.archive.scan()
                  </p>
                  <p>category = &quot;python-html&quot;</p>
                  <p>status = &quot;coming soon&quot;</p>
                  <p className="flex items-center gap-2 text-foreground">
                    <Code2 className="size-4 text-primary" />
                    collecting experiments...
                  </p>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
}
