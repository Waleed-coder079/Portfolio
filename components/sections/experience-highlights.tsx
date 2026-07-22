import Link from "next/link";
import { experience } from "@/content/experience";
import { Badge } from "@/components/ui/badge";

export function ExperienceHighlights() {
  const highlights = experience.slice(0, 2);

  return (
    <section className="mx-auto w-full max-w-(--container-content) px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <Link href="/experience" className="text-sm text-accent hover:underline">
          Full timeline →
        </Link>
      </div>
      <ol className="flex flex-col gap-6 border-l border-border pl-6">
        {highlights.map((entry) => (
          <li key={`${entry.company}-${entry.role}`} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
            <p className="text-xs text-muted-foreground">
              {entry.start} – {entry.end}
            </p>
            <h3 className="font-semibold">
              {entry.role} · {entry.company}
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {entry.stack.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
