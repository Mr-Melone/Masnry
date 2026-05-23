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
    "Browse the MASNRY archive of projects, experiments, demos, concepts, 3D printing, and digital work."
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <Section className="pb-12">
        <Container>
          <SectionHeading
            eyebrow="Projects archive"
            title="Things I have made, tested, sketched, or want to keep visible."
            body="A visual archive for demo websites, interface experiments, systems, 3D printing notes, concepts, and future personal builds. Some are polished. Some are seeds."
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
