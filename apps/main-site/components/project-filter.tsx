"use client";

import { useMemo, useState } from "react";
import { Button } from "@masnry/ui";
import { ProjectCard } from "./project-card";
import { Reveal } from "./reveal";
import { projectCategories, type Project } from "@/content/projects";

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All");
  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.category === active),
    [active, projects]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {projectCategories.map((category) => (
          <Button
            key={category}
            variant={active === category ? "default" : "outline"}
            size="sm"
            onClick={() => setActive(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">
        {filtered.length} {filtered.length === 1 ? "piece" : "pieces"} in view
      </div>
      <div className="mt-8 grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-6">
        {filtered.map((project, index) => (
          <Reveal
            key={project.slug}
            className={index === 0 ? "md:col-span-2 xl:col-span-4" : "xl:col-span-2"}
            delay={index * 0.08}
            variant={index === 0 ? "scale" : "lift"}
          >
            <ProjectCard
              project={project}
              variant={index === 0 ? "feature" : "default"}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
