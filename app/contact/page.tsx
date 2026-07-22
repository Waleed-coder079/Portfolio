import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social-icons";
import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} — ${siteConfig.availability.toLowerCase()}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid w-full max-w-(--container-content) gap-12 px-6 py-16 sm:grid-cols-2">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s build something.</h1>
        <p className="mt-4 max-w-md text-muted-foreground">{siteConfig.availability}</p>

        <div className="mt-8 flex flex-col gap-3 text-sm">
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <Mail className="h-4 w-4" aria-hidden="true" />
            {siteConfig.email}
          </a>
          <p className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {siteConfig.location} · Open to Remote
          </p>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>

      <ContactForm />
    </section>
  );
}
