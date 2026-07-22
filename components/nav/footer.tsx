import Link from "next/link";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social-icons";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-(--container-content) flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold">{siteConfig.name}</p>
          <p className="text-sm text-muted-foreground">{siteConfig.title}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {siteConfig.navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="text-muted-foreground hover:text-foreground"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="border-t border-border px-6 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}
