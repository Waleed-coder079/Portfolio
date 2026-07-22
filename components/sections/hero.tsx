import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-(--container-content) flex-col gap-6 px-6 py-20 sm:py-28">
      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
        {siteConfig.availability}
      </span>

      <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">{siteConfig.name}</h1>

      <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
        {siteConfig.title} building production-grade Voice AI, RAG, and conversational
        systems — from model to deployment.
      </p>

      <p className="text-sm text-muted-foreground">
        {siteConfig.location} · Open to Remote
      </p>

      <div className="flex flex-wrap gap-3 pt-2">
        <Button asChild variant="primary">
          <Link href="/projects">View Projects</Link>
        </Button>
        <Button asChild variant="secondary">
          <a href={siteConfig.resumeUrl} download>
            Download Résumé
          </a>
        </Button>
      </div>
    </section>
  );
}
