import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "neutral" | "accent" | "outline";
type BadgeWeight = "default" | "core";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  weight?: BadgeWeight;
}

const variantClasses: Record<BadgeVariant, string> = {
  neutral: "bg-muted text-foreground",
  accent: "bg-accent text-accent-foreground",
  outline: "border border-border text-muted-foreground",
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "neutral", weight = "default", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-md px-2.5 py-1 text-xs transition-colors",
          weight === "core" ? "font-semibold text-sm" : "font-normal",
          variantClasses[variant],
          className,
        )}
        {...props}
      />
    );
  },
);
Badge.displayName = "Badge";
