import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Coffee,
  MapPin,
  Scissors,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Trophy
} from "lucide-react";
import { Badge, Button, Card, Container, Section } from "@masnry/ui";
import { ProjectCard } from "@/components/project-card";
import { PageTransition, ParallaxLayer, Reveal } from "@/components/reveal";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "MASNRY | Web Designer And Creative Developer In Brisbane",
  description:
    "MASNRY is a Brisbane-based creative development portfolio for custom websites, digital products, 3D printing projects, and internet experiments.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "MASNRY | Web Designer And Creative Developer In Brisbane",
    description:
      "A personal creative workshop for websites, digital products, experiments, and things built with care.",
    url: "https://masnry.com"
  }
};

const featuredProject = projects.find(
  (project) => project.slug === "barber-shop-demo"
);

const pathways = [
  {
    icon: Coffee,
    title: "Websites for cafes",
    body: "Menus, location details, opening hours, and the nice little reasons people choose your place."
  },
  {
    icon: Scissors,
    title: "Websites for barbers",
    body: "Pricing, bookings, reviews, gallery shots, and a shop vibe that does not feel copied from 2017."
  },
  {
    icon: Trophy,
    title: "Websites for sports brands",
    body: "Product-led pages, launch demos, waitlists, and clean storytelling around something people can buy."
  }
];

const credibilityNotes = [
  ["Stack", "Next.js, TypeScript, Tailwind, Framer Motion, Vercel"],
  ["Build habit", "Mobile-first, SEO-aware, documented, and ready to hand over"],
  ["Local angle", "Brisbane-based, useful for small businesses that need a sharper web presence"]
];

export default function HomePage() {
  return (
    <PageTransition>
      <section className="relative mb-[-7rem] grid min-h-[calc(100vh-4rem)] place-items-center overflow-hidden px-4 pb-44 pt-16">
        <div className="milky-way absolute left-[-40%] top-[18%] h-[28rem] w-[180%] rounded-[999px] opacity-80" />
        <div className="galaxy-band absolute left-[-34%] top-[18%] h-[30rem] w-[168%] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_52%_45%,hsl(var(--primary)/0.2),transparent_28rem),radial-gradient(ellipse_at_78%_36%,hsl(258_88%_62%/0.1),transparent_24rem)]" />
        <div className="relative inline-block">
          <p className="absolute left-1 top-1 font-mono text-xs uppercase tracking-[0.34em] text-primary sm:left-3 sm:top-2 sm:text-sm">
            welcome to
          </p>
          <h1 className="pt-8 font-display text-7xl font-semibold leading-none tracking-normal text-foreground sm:text-9xl lg:text-[12rem] xl:text-[15rem]">
            MASNRY
          </h1>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-b from-transparent via-background/72 to-background" />
      </section>

      <Section className="section-veil relative pt-36">
        <Container>
          <Reveal variant="mask">
            <div className="max-w-5xl">
              <Badge className="border-primary/25 bg-primary/10 text-primary">
                Brisbane / digital workshop
              </Badge>
              <h2 className="mt-6 text-balance font-display text-4xl font-semibold leading-tight sm:text-6xl">
                I build websites, digital products, 3D printed projects, and
                whatever else seems like a good idea at the time.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                MASNRY is part portfolio, part workshop, part tidy shelf for
                experiments. The websites are the useful bit for businesses; the
                rest is proof I enjoy making things properly.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} variant="scale">
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact me <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">
                  Browse projects <Sparkles />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">About</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="section-veil py-12">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <Reveal>
              <div>
                <Badge>Useful paths</Badge>
                <h2 className="mt-5 max-w-xl font-display text-3xl font-semibold sm:text-5xl">
                  Start where it sounds like your thing.
                </h2>
                <p className="mt-5 leading-8 text-muted-foreground">
                  Not a funnel. Just a few doors with signs on them.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {pathways.map((pathway, index) => (
                <Reveal key={pathway.title} delay={index * 0.09} variant="scale">
                  <Card className="cinematic-panel h-full bg-transparent p-5 transition duration-500 hover:-translate-y-1 hover:border-primary/40">
                    <pathway.icon className="size-6 text-primary" />
                    <h3 className="mt-5 font-display text-xl font-semibold">
                      {pathway.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {pathway.body}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary"
                    >
                      Ask about this <ArrowRight className="size-4" />
                    </Link>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {featuredProject ? (
        <Section className="section-veil">
          <Container>
            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <Badge>Featured build</Badge>
                <h2 className="text-balance mt-5 max-w-3xl font-display text-3xl font-semibold tracking-normal sm:text-5xl">
                  A barber shop demo, built like a real business could use it.
                </h2>
              </div>
              <Button asChild variant="outline">
                <Link href="/contact">
                  Get a free website audit <SearchCheck />
                </Link>
              </Button>
            </div>
            <Reveal variant="scale">
              <ParallaxLayer distance={26}>
                <ProjectCard project={featuredProject} variant="feature" />
              </ParallaxLayer>
            </Reveal>
          </Container>
        </Section>
      ) : null}

      <Section className="section-veil pb-20 pt-8">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <div>
                <Badge>Build notes</Badge>
                <h2 className="mt-5 font-display text-3xl font-semibold sm:text-5xl">
                  Quiet credibility. Less chest-beating, more receipts.
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
                  I make websites that hopefully work harder than I do. The
                  boring details still matter: responsive layouts, fast pages,
                  clean deployment, and enough structure for the next version.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-4">
              {credibilityNotes.map(([label, value], index) => (
                <Reveal key={label} delay={index * 0.08}>
                  <Card className="cinematic-panel grid gap-4 bg-transparent p-5 sm:grid-cols-[10rem_1fr] sm:items-center">
                    <div className="flex items-center gap-3 text-primary">
                      {index === 2 ? (
                        <MapPin className="size-5" />
                      ) : (
                        <ShieldCheck className="size-5" />
                      )}
                      <p className="text-xs font-medium uppercase tracking-[0.18em]">
                        {label}
                      </p>
                    </div>
                    <p className="leading-7 text-muted-foreground">{value}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal variant="scale">
            <div className="mt-12 rounded-lg border border-primary/20 bg-primary/10 p-6 sm:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-display text-2xl font-semibold">
                    Have a website that feels a bit tired?
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Send it over. I will tell you what I would improve first.
                  </p>
                </div>
                <Button asChild size="lg">
                  <Link href="/contact">
                    Request a website redesign <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </PageTransition>
  );
}
