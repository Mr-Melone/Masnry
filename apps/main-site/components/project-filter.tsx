"use client";

import { useMemo, useState } from "react";
import { Button } from "@masnry/ui";
import { ProjectCard } from "./project-card";
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
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
