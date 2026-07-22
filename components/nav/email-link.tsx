"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { siteConfig } from "@/lib/site-config";

export function EmailLink({ className, showLabel = false }: { className?: string; showLabel?: boolean }) {
  const [copied, setCopied] = useState(false);

  function handleClick() {
    navigator.clipboard?.writeText(siteConfig.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <Tooltip open={copied || undefined}>
      <TooltipTrigger asChild>
        <a href={`mailto:${siteConfig.email}`} aria-label="Email" className={className} onClick={handleClick}>
          <Mail className="h-4 w-4" aria-hidden="true" />
          {showLabel && siteConfig.email}
        </a>
      </TooltipTrigger>
      <TooltipContent>{copied ? "Copied to clipboard" : `Copy ${siteConfig.email}`}</TooltipContent>
    </Tooltip>
  );
}
