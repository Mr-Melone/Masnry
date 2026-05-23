import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge, Card, cn } from "@masnry/ui";
import type { Project } from "@/content/projects";

export function ProjectCard({
  project,
  className
}: {
  project: Project;
  className?: string;
}) {
  return (
    <Link href={`/projects/${project.slug}`} className={cn("group block", className)}>
      <Card className="h-full overflow-hidden bg-card/86 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
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
                {project.businessType}
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
