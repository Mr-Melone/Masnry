import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Box, Code2, HelpCircle, Rocket, ShieldCheck } from "lucide-react";
import { Badge, Button, Card, Container, Section } from "@masnry/ui";
import { CtaBand } from "@/components/cta-band";
import { PageTransition, Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Services | Website Design And Creative Development",
  description:
    "Website design, website redesign, creative development, prototypes, and 3D printing services from MASNRY in Brisbane."
};

const services = [
  {
    icon: Code2,
    title: "Website design & development",
    body: "Small, polished websites and prototypes when the fit is right.",
    points: ["Visual direction", "Next.js development", "Responsive UI", "Vercel deployment"]
  },
  {
    icon: Box,
    title: "3D printing services",
    body: "Practical prints, objects, parts, tests, and physical experiments.",
    points: ["Prototype notes", "Material thinking", "Object archive", "Future quote flow"]
  }
];

const faqs = [
  [
    "Can a demo become a real website?",
    "Yes. A polished demo can be duplicated, customized, connected to a domain, and deployed as its own production site."
  ],
  [
    "Do you handle domains and deployment?",
    "Yes. Each app can be connected to Vercel, then mapped to a client domain when the project is ready."
  ],
  [
    "Can the archive keep growing?",
    "Yes. Projects are data-driven, so new builds, experiments, and notes can be added without redesigning the page."
  ]
];

export default function ServicesPage() {
  return (
    <PageTransition>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="A few ways this work can become useful."
            body="MASNRY is a personal archive first. Services sit inside that world: websites, prototypes, 3D printing, and technical creative help when a project makes sense."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <Card className="h-full bg-card/82 p-7">
                  <service.icon className="size-7 text-primary" />
                  <h2 className="mt-5 font-display text-2xl font-semibold">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-7 text-muted-foreground">{service.body}</p>
                  <div className="mt-6 grid gap-3">
                    {service.points.map((point) => (
                      <div key={point} className="flex items-center gap-3">
                        <ShieldCheck className="size-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="mt-7">
                    <Link href="/contact">
                      Ask about it <ArrowRight />
                    </Link>
                  </Button>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-card/35">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Benefits"
              title="Useful without becoming too corporate."
              body="The goal is still practical: make clean things, document them well, and keep the structure ready for real use."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Premium visual direction",
                "Mobile-first interfaces",
                "Reusable launch systems",
                "Clean domain and deployment path"
              ].map((benefit) => (
                <Card key={benefit} className="bg-background/60 p-5">
                  <Rocket className="size-5 text-primary" />
                  <p className="mt-4 font-medium">{benefit}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Badge>FAQ</Badge>
          <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
            A few practical notes.
          </h2>
          <div className="mt-10 grid gap-4">
            {faqs.map(([question, answer]) => (
              <Card key={question} className="bg-card/80 p-6">
                <div className="flex gap-4">
                  <HelpCircle className="mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-display text-xl font-semibold">{question}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground">{answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </PageTransition>
  );
}
