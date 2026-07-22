import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeScript } from "@/components/theme/theme-script";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/nav/navbar";
import { Footer } from "@/components/nav/footer";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Waleed Ali is a Full Stack AI Engineer specializing in Voice AI, RAG, and production LLM systems — from FastAPI backends to real-time conversational agents.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Waleed Ali | Full Stack AI Engineer",
    template: "%s — Waleed Ali | Full Stack AI Engineer",
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Waleed Ali | Full Stack AI Engineer",
    description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Waleed Ali | Full Stack AI Engineer",
    description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.title,
  url: siteConfig.url,
  email: siteConfig.email,
  address: { "@type": "PostalAddress", addressLocality: siteConfig.location },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <TooltipProvider delayDuration={200}>
            <Navbar />
            <main className="flex flex-1 flex-col">{children}</main>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
