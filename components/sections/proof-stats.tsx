import { StatCounter } from "./stat-counter";

export function ProofStats() {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto grid w-full max-w-(--container-content) grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4">
        <StatCounter target={8} suffix="+" label="Production AI projects shipped" />
        <StatCounter target={2} label="Companies" />
        <StatCounter target={5} suffix="+" label="Voice AI platforms integrated" />
        <div className="flex flex-col gap-1">
          <span className="text-3xl font-semibold tracking-tight sm:text-4xl">BSCS</span>
          <span className="text-sm text-muted-foreground">University of Gujrat</span>
        </div>
      </div>
    </section>
  );
}
