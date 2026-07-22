"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { siteConfig } from "@/lib/site-config";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-(--container-content) items-center justify-between px-6">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight" onClick={() => setOpen(false)}>
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button asChild variant="secondary" size="sm">
            <a href={siteConfig.resumeUrl} download>
              Résumé
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center justify-between px-2">
            <ThemeToggle />
            <Button asChild variant="secondary" size="sm">
              <a href={siteConfig.resumeUrl} download>
                Résumé
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
