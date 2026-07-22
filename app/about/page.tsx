import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}, ${siteConfig.title} based in ${siteConfig.location}.`,
};

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-(--container-content) px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">About</h1>

      <div className="mt-8 flex max-w-2xl flex-col gap-5 text-muted-foreground">
        <p>
          I&apos;m {siteConfig.name}, a {siteConfig.title} based in {siteConfig.location},
          open to remote work. I build production-grade Generative AI systems — RAG
          pipelines, voice AI agents, real-time conversational platforms, and intelligent
          automation workflows — using FastAPI, PostgreSQL, WebSockets, and cloud
          infrastructure.
        </p>
        <p>
          I started as an AI Engineer Intern at GulzarSoft in June 2025, working on machine
          learning models and early LangChain-based RAG prototypes. Within three months I
          was promoted to AI Engineer, building agent-based architectures and automation
          workflows for client-facing applications. I&apos;m currently a Full Stack AI
          Engineer at Entropik Labs, where I build and deploy voice AI agents and
          conversational assistants on GPU infrastructure.
        </p>
        <p>
          Along the way I&apos;ve shipped voice AI products spanning multiple stacks —
          LiveKit, Vapi, OpenAI&apos;s Realtime API, ElevenLabs, and Deepgram — plus RAG
          pipelines, automation agents, and computer vision systems. What I care about is
          taking an idea all the way from model selection to a working, deployed product.
        </p>
        <p>
          I hold a BSCS from University of Gujrat (2021–2025). My final year project applied
          transformer models to video summarization and personalized study recommendations.
        </p>
      </div>
    </section>
  );
}
