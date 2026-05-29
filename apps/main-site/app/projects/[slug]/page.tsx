import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ExternalLink, Smartphone } from "lucide-react";
import { Badge, Button, Card, Container, Section } from "@masnry/ui";
import { CtaBand } from "@/components/cta-band";
import { PageTransition, Reveal } from "@/components/reveal";
import { getProjectBySlug, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects
    .filter(
      (project) =>
        project.slug !== "barber-shop-demo" && project.slug !== "nxt-demo"
    )
    .map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | MASNRY`,
      description: project.summary,
      images: [project.image]
    }
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  const isExternalDemo = project.liveDemoUrl.startsWith("http");

  return (
    <PageTransition>
      <Section className="pb-12">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <Badge className="border-primary/25 bg-primary/10 text-primary">
                {project.status}
              </Badge>
              <h1 className="mt-6 font-display text-4xl font-semibold tracking-normal sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link
                    href={project.liveDemoUrl}
                    target={isExternalDemo ? "_blank" : undefined}
                  >
                    Open work <ExternalLink />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">
                    Say hi <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border border-border bg-card shadow-2xl shadow-primary/10">
              <Image
                src={project.image}
                alt={`${project.title} case study hero image`}
                width={1400}
                height={1050}
                priority
                className="aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-card/35">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Business type", project.businessType],
              ["Role", project.role],
              ["Year", project.year],
              ["Accent", project.accent],
              ["Category", project.category]
            ].map(([label, value]) => (
              <Card key={label} className="bg-background/60 p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {label}
                </p>
                <p className="mt-3 font-display text-xl font-semibold">{value}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full bg-card/80 p-8">
                <h2 className="font-display text-3xl font-semibold">Why it exists</h2>
                <p className="mt-5 leading-8 text-muted-foreground">{project.problem}</p>
              </Card>
            </Reveal>
            <Reveal delay={0.08}>
              <Card className="h-full bg-card/80 p-8">
                <h2 className="font-display text-3xl font-semibold">Shape of it</h2>
                <p className="mt-5 leading-8 text-muted-foreground">
                  {project.solution}
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-card/35">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <Badge>Responsive view</Badge>
              <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
                Built to hold up across screens.
              </h2>
              <p className="mt-4 leading-8 text-muted-foreground">
                The archive needs to feel good on a phone, laptop, and tablet.
                Each project page keeps imagery large, text readable, and actions
                easy to reach.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-[0.7fr_1fr] sm:items-end">
              <Card className="mx-auto w-full max-w-64 overflow-hidden bg-background p-3">
                <div className="rounded-lg border border-border bg-card p-2">
                  <Smartphone className="mx-auto mb-3 size-5 text-primary" />
                  <Image
                    src={project.image}
                    alt={`${project.title} mobile visual`}
                    width={420}
                    height={760}
                    className="aspect-[9/16] rounded-md object-cover"
                  />
                </div>
              </Card>
              <Card className="overflow-hidden bg-background p-3">
                <Image
                  src={project.image}
                  alt={`${project.title} desktop visual`}
                  width={900}
                  height={600}
                  className="aspect-[16/10] rounded-md object-cover"
                />
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Badge>Features</Badge>
          <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
            Notes from the build.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature) => (
              <Card key={feature} className="bg-card/80 p-5">
                <p className="font-medium">{feature}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </PageTransition>
  );
}
