import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Box, Code2, HelpCircle, Rocket, ShieldCheck } from "lucide-react";
import { Badge, Button, Card, Container, Section } from "@masnry/ui";
import { CtaBand } from "@/components/cta-band";
import { PageTransition, Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design, development, 3D printing services, and technical creative support from MASNRY."
};

const services = [
  {
    icon: Code2,
    title: "Website design & development",
    body: "Premium responsive websites for local businesses, personal brands, and service providers.",
    points: ["Strategy-led layout", "Next.js development", "SEO metadata", "Vercel deployment"]
  },
  {
    icon: Box,
    title: "3D printing services",
    body: "A home for future product prototypes, practical prints, custom parts, and technical showcases.",
    points: ["Project gallery", "Quote-ready inquiry flow", "Material notes", "Future ecommerce path"]
  }
];

const faqs = [
  [
    "Can a demo become a real client website?",
    "Yes. The workflow is built around duplicating demos, customizing the brand/content, and deploying a production version."
  ],
  [
    "Do you handle domains and deployment?",
    "Yes. Each app can be connected to Vercel, then mapped to a client domain when the project is ready."
  ],
  [
    "Can the site scale with more projects?",
    "Yes. The portfolio uses reusable components and data-driven project entries so new demos can be added quickly."
  ]
];

export default function ServicesPage() {
  return (
    <PageTransition>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="A practical service platform for websites and technical creativity."
            body="MASNRY starts with premium websites for local businesses and leaves room for 3D printing projects, personal builds, and future client systems."
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
                      Inquire now <ArrowRight />
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
              title="Built to make the next business move easier."
              body="A good website gives a business owner more leverage: better first impressions, clearer offers, and a cleaner path to booking or inquiry."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Premium visual credibility",
                "Better mobile conversion",
                "Reusable launch systems",
                "Clear domain and deployment path"
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
            Clear answers before the first call.
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
