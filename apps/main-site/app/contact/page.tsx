import type { Metadata } from "next";
import { Calendar, Mail, MessageSquare } from "lucide-react";
import { Card, Container, Section } from "@masnry/ui";
import { ContactForm } from "@/components/contact-form";
import { PageTransition } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a website, demo customization, 3D printing, or technical creative project with MASNRY."
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
                title="Tell me what you want the website to do for the business."
                body="Use the inquiry flow for websites, demo customizations, 3D printing services, or early project ideas. The form is validation-ready and can be connected to email delivery when the business is ready."
              />
              <div className="mt-8 grid gap-4">
                {[
                  ["Email", "hello@masnry.com", Mail],
                  ["Booking", "Calendly placeholder", Calendar],
                  ["Response", "Project-fit reply within 1-2 business days", MessageSquare]
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
