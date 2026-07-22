import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/content/projects";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

type ProjectPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-16">
      <p className="text-sm text-muted-foreground">{project.tagline}</p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">{project.title}</h1>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Badge key={tech} variant="outline">
            {tech}
          </Badge>
        ))}
      </div>

      {!project.links?.demo && !project.links?.github && (
        <p className="mt-4 text-xs text-muted-foreground">
          Live demo / source links coming soon.
        </p>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Problem</h2>
        <p className="mt-2 text-muted-foreground">{project.problem}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Solution</h2>
        <p className="mt-2 text-muted-foreground">{project.solution}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Tech Stack</h2>
        <ul className="mt-3 flex flex-col gap-2">
          {project.techStack.map((tech) => (
            <li key={tech.name} className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{tech.name}</span> — {tech.why}
            </li>
          ))}
        </ul>
      </section>

      {project.hasScreenshots ? null : (
        <Card variant="bordered" className="mt-8 p-5 text-sm text-muted-foreground">
          Screenshots and a demo walkthrough are coming soon.
        </Card>
      )}

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Challenges</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {project.challenges ?? "Write-up coming soon."}
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Impact</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {project.impact ?? "Metrics coming soon."}
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Lessons Learned</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {project.lessonsLearned ?? "Write-up coming soon."}
        </p>
      </section>
    </article>
  );
}
