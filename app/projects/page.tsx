import type { Metadata } from "next";
import { getAllProjects } from "@/content/projects";
import { ProjectGrid } from "@/components/project/project-grid";

export const metadata: Metadata = {
  title: "Projects",
  description: "Voice AI, RAG, automation, and computer vision projects by Waleed Ali.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section className="mx-auto w-full max-w-(--container-content) px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Production AI systems spanning voice agents, RAG pipelines, automation, and computer
        vision.
      </p>
      <div className="mt-10">
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
