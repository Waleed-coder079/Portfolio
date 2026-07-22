import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type CardVariant = "elevated" | "bordered" | "interactive";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "bordered", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg bg-card text-card-foreground",
          variant === "bordered" && "border border-border",
          variant === "elevated" && "elevated",
          variant === "interactive" &&
            "elevated border border-border transition-all duration-200 hover:-translate-y-1 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
          className,
        )}
        {...props}
      />
    );
  },
);
Card.displayName = "Card";
