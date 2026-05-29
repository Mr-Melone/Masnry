import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@masnry/ui";
import { CtaBand } from "@/components/cta-band";
import { ProjectFilter } from "@/components/project-filter";
import { PageTransition, Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projectCategoryPages, projects } from "@/content/projects";

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
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {projectCategoryPages.map((category, index) => (
              <Reveal key={category.slug} delay={index * 0.05}>
                <Link
                  href={category.href}
                  className="cinematic-panel group block h-full rounded-lg p-5 transition duration-500 hover:-translate-y-1 hover:border-primary/40"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                    Category
                  </p>
                  <h2 className="mt-4 font-display text-2xl font-semibold">
                    {category.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {category.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Open collection <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <ProjectFilter projects={projects} />
          </div>
        </Container>
      </Section>
      <CtaBand />
    </PageTransition>
  );
}
