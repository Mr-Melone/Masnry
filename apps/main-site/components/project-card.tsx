import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge, Card, cn } from "@masnry/ui";
import type { Project } from "@/content/projects";

export function ProjectCard({
  project,
  className,
  variant = "default"
}: {
  project: Project;
  className?: string;
  variant?: "default" | "feature";
}) {
  if (variant === "feature") {
    return (
      <Link href={project.href} className={cn("group block", className)}>
        <article className="cinematic-panel grid overflow-hidden rounded-lg transition duration-500 group-hover:-translate-y-1 group-hover:shadow-primary/20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-80 overflow-hidden lg:min-h-[34rem]">
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(min-width: 1024px) 56vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/20 to-transparent" />
            <Badge className="absolute left-5 top-5 border-white/20 bg-black/50 text-white">
              {project.status}
            </Badge>
          </div>
          <div className="flex flex-col justify-between gap-10 p-6 sm:p-8 lg:p-10">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                {project.category} / {project.year}
              </p>
              <h3 className="text-balance mt-4 font-display text-3xl font-semibold sm:text-5xl">
                {project.title}
              </h3>
              <p className="mt-5 max-w-xl leading-8 text-muted-foreground">
                {project.summary}
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">
                View project <ArrowUpRight className="size-4" />
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={project.href} className={cn("group block", className)}>
      <Card className="cinematic-panel h-full overflow-hidden bg-transparent transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} website preview`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <Badge className="absolute left-4 top-4 border-white/20 bg-black/50 text-white">
            {project.status}
          </Badge>
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                {project.category} / {project.year}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold">
                {project.title}
              </h3>
            </div>
            <ArrowUpRight className="mt-1 size-5 text-muted-foreground transition-colors group-hover:text-primary" />
          </div>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            {project.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
