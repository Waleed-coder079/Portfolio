import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-(--container-content) flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">This page took a wrong turn.</h1>
      <p className="text-muted-foreground">Let&apos;s get you back on track.</p>
      <div className="flex gap-3 pt-2">
        <Button asChild variant="primary">
          <Link href="/">Home</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/projects">Projects</Link>
        </Button>
      </div>
    </section>
  );
}
