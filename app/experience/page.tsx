import type { Metadata } from "next";
import { experience } from "@/content/experience";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience — Entropik Labs and GulzarSoft.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <section className="mx-auto w-full max-w-(--container-content) px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Experience</h1>

      <ol className="mt-10 flex flex-col gap-10 border-l border-border pl-6">
        {experience.map((entry) => (
          <li key={`${entry.company}-${entry.role}`} className="relative">
            <span
              className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            {entry.promoted && (
              <p className="mb-1 text-xs font-medium text-accent">↑ Promoted</p>
            )}
            <p className="text-xs text-muted-foreground">
              {entry.start} – {entry.end} · {entry.location}
            </p>
            <h2 className="mt-1 text-lg font-semibold">
              {entry.role} <span className="text-muted-foreground">· {entry.company}</span>
            </h2>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span aria-hidden="true">–</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {entry.stack.map((tech) => (
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
