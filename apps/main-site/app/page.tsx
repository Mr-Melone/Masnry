import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Code2,
  Layers3,
  PenTool,
  Sparkles
} from "lucide-react";
import { Badge, Button, Card, Container, Section } from "@masnry/ui";
import { CtaBand } from "@/components/cta-band";
import { ProjectCard } from "@/components/project-card";
import { Reveal, PageTransition } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/content/projects";

const services = [
  {
    icon: PenTool,
    title: "Website design",
    body: "Premium, conversion-aware layouts that make local businesses feel current and credible."
  },
  {
    icon: Code2,
    title: "Next.js development",
    body: "Fast, responsive builds with clean architecture, SEO foundations, and Vercel-ready deployment."
  },
  {
    icon: Layers3,
    title: "Demo systems",
    body: "Prototype websites designed to show real businesses what a sharper digital presence could look like."
  }
];

const process = [
  "Position the offer",
  "Design the buying path",
  "Build the site",
  "Launch and refine"
];

export default function HomePage() {
  return (
    <PageTransition>
      <Section className="relative min-h-[calc(100vh-4rem)] overflow-hidden py-16 sm:py-20 lg:py-24">
        <Container className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <Badge className="border-primary/25 bg-primary/10 text-primary">
              Premium websites for local businesses
            </Badge>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
              Modern websites for businesses that want to stand out.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              MASNRY creates polished, high-converting websites and demo systems for
              cafes, barbers, gyms, salons, restaurants, and service businesses ready
              to look as good online as they are in person.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start a project <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">View projects</Link>
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {["Design-led", "Built fast", "Conversion-focused"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BadgeCheck className="size-4 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-lg border border-border bg-card shadow-2xl shadow-primary/10">
                <Image
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1400&q=80"
                  alt="Premium barber website demo preview"
                  width={1100}
                  height={900}
                  priority
                  className="aspect-[4/3] object-cover"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/15 bg-black/72 p-4 text-white backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                        Featured demo
                      </p>
                      <p className="mt-1 font-display text-lg font-semibold">
                        Atlas Barber Studio
                      </p>
                    </div>
                    <Button asChild size="sm">
                      <Link href="/projects/atlas-barber-studio">Open</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-y border-border bg-card/35 py-14">
        <Container>
          <Reveal>
            <p className="max-w-5xl font-display text-2xl font-medium leading-snug sm:text-3xl">
              A sharp website should do more than look polished. It should make the
              offer obvious, build trust quickly, and give customers a clear next move.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Featured work"
              title="Demo websites built like real client launches."
              body="Each prototype is designed as a practical sales tool: polished enough to show a business owner, structured enough to duplicate later."
            />
            <Button asChild variant="outline">
              <Link href="/projects">
                All projects <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-card/35">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Design, development, and technical creativity under one brand."
            body="MASNRY is built to handle modern website builds now, then expand into client projects, 3D printing services, and technical showcases over time."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.06}>
                <Card className="h-full bg-background/60 p-6">
                  <service.icon className="size-6 text-primary" />
                  <h3 className="mt-5 font-display text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {service.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Process"
              title="Simple enough to move quickly. Structured enough to scale."
              body="Every build starts with the commercial goal, then moves into design, implementation, deployment, and handoff."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {process.map((step, index) => (
                <Reveal key={step} delay={index * 0.06}>
                  <Card className="h-full bg-card/80 p-6">
                    <div className="flex size-10 items-center justify-center rounded-full bg-primary/12 text-sm font-semibold text-primary">
                      {index + 1}
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold">{step}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {index === 0 &&
                        "Clarify the audience, offer, positioning, and conversion goal."}
                      {index === 1 &&
                        "Map the sections, proof points, calls to action, and mobile path."}
                      {index === 2 &&
                        "Develop a fast, responsive Next.js site with reusable components."}
                      {index === 3 &&
                        "Deploy on Vercel, connect domains, and tune the site after launch."}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-card/35">
        <Container>
          <SectionHeading
            eyebrow="Proof"
            title="Client results will live here as the business grows."
            body="The testimonial system is ready for quotes from local business owners, early collaborators, and demo review calls."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "The site finally feels like the quality of our shop.",
              "The mobile experience made booking feel effortless.",
              "MASNRY made the entire offer clearer in one week."
            ].map((quote) => (
              <Card key={quote} className="bg-background/60 p-6">
                <Sparkles className="size-5 text-primary" />
                <p className="mt-5 text-sm leading-6 text-muted-foreground">“{quote}”</p>
                <p className="mt-5 text-sm font-medium">Future client</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </PageTransition>
  );
}
