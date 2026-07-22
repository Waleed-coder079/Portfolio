import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card variant="interactive" className="group flex h-full flex-col gap-3 p-5">
      <Link href={`/projects/${project.slug}`} className="flex h-full flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold">{project.title}</h3>
          <ArrowUpRight
            className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </div>
        <p className="text-sm text-muted-foreground">{project.tagline}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.stack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
          {project.stack.length > 4 && (
            <Badge variant="outline">+{project.stack.length - 4} more</Badge>
          )}
        </div>
      </Link>
    </Card>
  );
}
