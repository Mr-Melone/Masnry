import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, Code2, Monitor, Sparkles } from "lucide-react";
import { Badge, Button, Card, Container, Section } from "@masnry/ui";
import { ProjectCard } from "@/components/project-card";
import { PageTransition, Reveal } from "@/components/reveal";
import { projects } from "@/content/projects";

const featuredProject = projects.find(
  (project) => project.slug === "barbershop"
);

const threads = [
  {
    icon: Code2,
    title: "Code",
    body: "Interfaces, motion, systems, and frontend experiments."
  },
  {
    icon: Monitor,
    title: "Web",
    body: "Demo sites, personal pages, and small digital products."
  },
  {
    icon: Box,
    title: "Objects",
    body: "3D printing notes, practical parts, prototypes, and studies."
  }
];

export default function HomePage() {
  return (
    <PageTransition>
      <Section className="relative min-h-[calc(100vh-4rem)] overflow-hidden py-14 sm:py-20 lg:py-24">
        <Container className="relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <Badge className="border-primary/25 bg-primary/10 text-primary">
              MASNRY / personal studio
            </Badge>
            <h1 className="text-balance mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
              Building things for the internet.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Projects, experiments, design, code, 3D printing, and digital work.
              A place for what I make, what I am learning, and what is next.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/projects">
                  Browse projects <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">About MASNRY</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {["Design", "Code", "3D printing", "Experiments", "Web demos"].map(
                (item) => (
                  <Badge key={item}>{item}</Badge>
                )
              )}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="cinematic-panel noise-panel relative overflow-hidden rounded-lg p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                <Image
                  src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1500&q=80"
                  alt="Abstract dark digital workspace"
                  fill
                  priority
                  className="object-cover opacity-[0.84]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/26 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/10 bg-black/54 p-4 text-white backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/52">
                    Current mode
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold">
                    Interfaces, prototypes, and small experiments.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="py-12">
        <Container>
          <Reveal>
            <div className="cinematic-panel rounded-lg p-6 sm:p-8 lg:p-10">
              <p className="max-w-5xl font-display text-2xl font-medium leading-snug text-foreground/90 sm:text-3xl">
                MASNRY is a curated workspace:
                a place to find and create polished builds, rough innovative ideas, visual systems,
                useful objects, and digital fragments.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {featuredProject ? (
        <Section>
          <Container>
            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <Badge>Featured build</Badge>
                <h2 className="text-balance mt-5 max-w-3xl font-display text-3xl font-semibold tracking-normal sm:text-4xl">
                  One project in focus.
                </h2>
              </div>
              <Button asChild variant="outline">
                <Link href="/projects">
                  Open the archive <ArrowRight />
                </Link>
              </Button>
            </div>
            <Reveal>
              <ProjectCard project={featuredProject} variant="feature" />
            </Reveal>
          </Container>
        </Section>
      ) : null}

      <Section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {threads.map((thread, index) => (
              <Reveal key={thread.title} delay={index * 0.06}>
                <Card className="cinematic-panel h-full bg-transparent p-6">
                  <thread.icon className="size-6 text-primary" />
                  <h3 className="mt-5 font-display text-xl font-semibold">
                    {thread.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {thread.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pb-20 pt-8">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <Badge className="border-primary/25 bg-primary/10 text-primary">
                Archive first
              </Badge>
              <h2 className="text-balance mt-5 font-display text-3xl font-semibold sm:text-5xl">
                The projects page is the center of the site.
              </h2>
            </div>
            <div className="space-y-5">
              <p className="leading-8 text-muted-foreground">
                Website work is still part of MASNRY, but it sits beside the rest
                of the creative output: experiments, systems, prototypes, notes,
                and things that do not need to fit a neat category.
              </p>
              <Button asChild size="lg">
                <Link href="/projects">
                  View projects <Sparkles />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
}
