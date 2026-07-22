import type { Metadata } from "next";
import Link from "next/link";
import { skillCategories } from "@/content/skills";
import { getProjectBySlug } from "@/content/projects";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Skills",
  description: "Full skill breakdown by category — Waleed Ali, Full Stack AI Engineer.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return (
    <section className="mx-auto w-full max-w-(--container-content) px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Skills</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Bold badges are core, everyday stack. Hover or focus a badge with a dotted underline
        to see which project uses it.
      </p>

      <div className="mt-10 flex flex-col gap-10">
        {skillCategories.map((category) => (
          <div key={category.name}>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {category.name}
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {category.skills.map((skill) => {
                const projectLinks = skill.usedIn
                  ?.map((slug) => getProjectBySlug(slug))
                  .filter((p): p is NonNullable<typeof p> => Boolean(p));

                const badge = (
                  <Badge
                    variant="neutral"
                    weight={skill.core ? "core" : "default"}
                    className={projectLinks?.length ? "cursor-default underline decoration-dotted underline-offset-4" : undefined}
                    tabIndex={projectLinks?.length ? 0 : undefined}
                  >
                    {skill.name}
                  </Badge>
                );

                if (!projectLinks?.length) return <span key={skill.name}>{badge}</span>;

                return (
                  <Tooltip key={skill.name}>
                    <TooltipTrigger asChild>{badge}</TooltipTrigger>
                    <TooltipContent>
                      Used in:{" "}
                      {projectLinks.map((p, i) => (
                        <span key={p.slug}>
                          {i > 0 && ", "}
                          <Link href={`/projects/${p.slug}`} className="underline">
                            {p.title}
                          </Link>
                        </span>
                      ))}
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
