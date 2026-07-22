import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";

export function ContactTeaser() {
  return (
    <section className="mx-auto w-full max-w-(--container-content) px-6 py-16">
      <Card variant="elevated" className="flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">Have a project in mind, or hiring for a role like this?</h2>
          <p className="mt-1 text-sm text-muted-foreground">{siteConfig.availability}</p>
        </div>
        <Button asChild variant="primary">
          <Link href="/contact">Let&apos;s talk</Link>
        </Button>
      </Card>
    </section>
  );
}
