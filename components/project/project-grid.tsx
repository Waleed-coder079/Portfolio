"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./project-card";
import type { Project, ProjectCategory } from "@/types/project";

const filters: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Voice AI", value: "voice-ai" },
  { label: "RAG", value: "rag" },
  { label: "Automation", value: "automation" },
  { label: "Computer Vision", value: "computer-vision" },
];

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const visible = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="flex flex-col gap-8">
      <div role="tablist" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            role="tab"
            aria-selected={active === filter.value}
            onClick={() => setActive(filter.value)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
              active === filter.value
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">
          No projects match this filter yet — check back soon.
        </p>
      )}
    </div>
  );
}
