import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroGlow } from "@/components/sections/hero-glow";
import { ResumeDownloadLink } from "@/components/sections/resume-download-link";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative isolate mx-auto flex w-full max-w-(--container-content) flex-col gap-8 overflow-hidden px-6 py-20 sm:flex-row sm:items-center sm:py-28">
      <HeroGlow />

      <div className="flex flex-col gap-6">
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
            <ResumeDownloadLink />
          </Button>
        </div>
      </div>

      <Image
        src={siteConfig.profileImage}
        alt={siteConfig.name}
        width={192}
        height={192}
        priority
        className="h-40 w-40 shrink-0 rounded-full border border-border object-cover sm:h-48 sm:w-48"
      />
    </section>
  );
}
