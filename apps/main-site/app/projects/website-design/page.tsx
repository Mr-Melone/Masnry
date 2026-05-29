import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge, Button, Container, Section } from "@masnry/ui";
import { ProjectCard } from "@/components/project-card";
import { PageTransition, Reveal } from "@/components/reveal";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Website Design",
  description:
    "Website demos, product concepts, and polished web builds in the MASNRY project archive."
};

export default function WebsiteDesignPage() {
  const websiteProjects = projects.filter(
    (project) =>
      project.categorySlug === "website-design" &&
      ["barber-shop-demo", "nxt-demo"].includes(project.slug)
  );

  return (
    <PageTransition>
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <Badge className="border-primary/25 bg-primary/10 text-primary">
                Website Design
              </Badge>
              <h1 className="mt-6 font-display text-5xl font-semibold tracking-normal sm:text-7xl">
                Demo websites with their own atmosphere.
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              Polished website concepts live here first. They can stay as MASNRY
              demos, become client previews, or be duplicated into independent
              deployable apps when a business wants its own version.
            </p>
          </div>

          <div className="mt-12 grid auto-rows-fr gap-6 lg:grid-cols-6">
            {websiteProjects.map((project, index) => (
              <Reveal
                key={project.slug}
                className={index === 0 ? "lg:col-span-4" : "lg:col-span-2"}
                delay={index * 0.07}
              >
                <ProjectCard
                  project={project}
                  variant={index === 0 ? "feature" : "default"}
                />
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button asChild variant="outline">
              <Link href="/projects">
                Back to full archive <ArrowRight />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
}
