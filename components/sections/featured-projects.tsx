import Link from "next/link";
import { getFeaturedProjects } from "@/content/projects";
import { ProjectCard } from "@/components/project/project-card";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="mx-auto w-full max-w-(--container-content) px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Featured Projects</h2>
        <Link href="/projects" className="text-sm text-accent hover:underline">
          View all projects →
        </Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
