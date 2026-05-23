import type { Metadata } from "next";
import { Calendar, Mail, MessageSquare } from "lucide-react";
import { Card, Container, Section } from "@masnry/ui";
import { ContactForm } from "@/components/contact-form";
import { PageTransition } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact MASNRY about projects, experiments, website ideas, 3D printing, or creative technical work."
};

export default function ContactPage() {
  return (
    <PageTransition>
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Send a note, idea, question, or project brief."
                body="Use the form for website ideas, demo customizations, 3D printing, experiments, collaborations, or anything that feels adjacent to MASNRY."
              />
              <div className="mt-8 grid gap-4">
                {[
                  ["Email", "hello@masnry.com", Mail],
                  ["Booking", "Calendly placeholder", Calendar],
                  ["Response", "I will reply when there is a clear next step", MessageSquare]
                ].map(([label, value, Icon]) => (
                  <Card key={label as string} className="flex items-center gap-4 bg-card/80 p-5">
                    <Icon className="size-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">{label as string}</p>
                      <p className="font-medium">{value as string}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <Card className="bg-card/86 p-5 sm:p-7">
              <ContactForm />
            </Card>
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
}
