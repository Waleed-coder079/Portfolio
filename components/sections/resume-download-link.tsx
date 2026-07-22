"use client";

import { forwardRef, type AnchorHTMLAttributes } from "react";
import { track } from "@vercel/analytics";
import { siteConfig } from "@/lib/site-config";

export const ResumeDownloadLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
  function ResumeDownloadLink(props, ref) {
    return (
      <a
        {...props}
        ref={ref}
        href={siteConfig.resumeUrl}
        download
        onClick={() => track("resume_download")}
      >
        Download Résumé
      </a>
    );
  },
);
