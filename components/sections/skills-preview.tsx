import Link from "next/link";
import { homepageSkillsPreview } from "@/content/skills";
import { Badge } from "@/components/ui/badge";

export function SkillsPreview() {
  return (
    <section className="mx-auto w-full max-w-(--container-content) px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
        <Link href="/skills" className="text-sm text-accent hover:underline">
          Full breakdown →
        </Link>
      </div>
      <div className="flex flex-wrap gap-2">
        {homepageSkillsPreview.map((skill) => (
          <Badge key={skill} variant="neutral">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}
