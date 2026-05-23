import type { Metadata } from "next";
import { BadgeCheck, Compass, Gem, Hammer } from "lucide-react";
import { Badge, Card, Container, Section } from "@masnry/ui";
import { CtaBand } from "@/components/cta-band";
import { PageTransition, Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about MASNRY, a premium independent web design and development brand for modern local businesses."
};

const values = [
  {
    icon: Gem,
    title: "Premium restraint",
    body: "Design should feel confident without shouting. Every section earns its place."
  },
  {
    icon: Compass,
    title: "Commercial clarity",
    body: "A website is judged by how quickly it helps a customer understand, trust, and act."
  },
  {
    icon: Hammer,
    title: "Built properly",
    body: "Clean components, responsive systems, SEO basics, and deployment paths matter from day one."
  }
];

export default function AboutPage() {
  return (
    <PageTransition>
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <Badge>About MASNRY</Badge>
              <h1 className="mt-6 font-display text-4xl font-semibold tracking-normal sm:text-6xl">
                Independent web design with a studio-level standard.
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                MASNRY is a personal brand and service platform for modern websites,
                polished demo projects, and technical creativity. The goal is simple:
                help local businesses look sharper, communicate faster, and convert
                more of the people already paying attention.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-lg border border-border bg-card p-8 shadow-2xl shadow-primary/10">
                <div className="aspect-[4/5] rounded-lg border border-border bg-[radial-gradient(circle_at_30%_15%,hsl(var(--primary)/0.35),transparent_18rem),linear-gradient(135deg,hsl(var(--secondary)),hsl(var(--background)))]" />
                <div className="absolute bottom-12 left-12 right-12 rounded-lg border border-white/10 bg-black/70 p-5 text-white backdrop-blur-xl">
                  <p className="font-display text-xl font-semibold">Portrait placeholder</p>
                  <p className="mt-2 text-sm leading-6 text-white/68">
                    Replace with a clean, modern portrait when ready.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-card/35">
        <Container>
          <SectionHeading
            eyebrow="Why this exists"
            title="Local businesses deserve better than stale templates."
            body="A lot of great businesses have weak websites because the process feels expensive, confusing, or disconnected from what actually wins customers. MASNRY is built to close that gap with polished demos, fast delivery, and clear systems."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Philosophy"
              title="Make the business feel like the best version of itself."
              body="The work sits between brand, interface, and sales. It should look premium, load quickly, and guide a real visitor toward a real action."
            />
            <div className="grid gap-5">
              {[
                "Strong typography before decoration",
                "Mobile-first decisions before desktop polish",
                "Clear offers before clever language",
                "Reusable systems before one-off pages"
              ].map((item) => (
                <Card key={item} className="flex items-center gap-4 bg-card/80 p-5">
                  <BadgeCheck className="size-5 shrink-0 text-primary" />
                  <p className="font-medium">{item}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-card/35">
        <Container>
          <SectionHeading
            eyebrow="Values"
            title="The standard behind the work."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <Card className="h-full bg-background/60 p-6">
                  <value.icon className="size-6 text-primary" />
                  <h3 className="mt-5 font-display text-xl font-semibold">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {value.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </PageTransition>
  );
}
