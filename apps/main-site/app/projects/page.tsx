import type { Metadata } from "next";
import { Container, Section } from "@masnry/ui";
import { CtaBand } from "@/components/cta-band";
import { ProjectFilter } from "@/components/project-filter";
import { PageTransition } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore MASNRY demo websites, prototypes, technical projects, and future client work."
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <Section className="pb-12">
        <Container>
          <SectionHeading
            eyebrow="Projects"
            title="A growing library of demo sites and client-ready prototypes."
            body="The first demo is a premium barber shop website. Future demos can be added to the same content system and deployed as separate Vercel projects."
          />
          <div className="mt-10">
            <ProjectFilter projects={projects} />
          </div>
        </Container>
      </Section>
      <CtaBand />
    </PageTransition>
  );
}
