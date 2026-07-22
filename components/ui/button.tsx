import { type ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  asChild?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:opacity-90 focus-visible:ring-accent",
  secondary:
    "border border-border bg-transparent text-foreground hover:bg-muted focus-visible:ring-accent",
  ghost: "bg-transparent text-foreground hover:bg-muted focus-visible:ring-accent",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        disabled={asChild ? undefined : disabled || loading}
        aria-busy={loading || undefined}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:pointer-events-none disabled:opacity-50",
          "hover:scale-[1.02] active:scale-[0.98]",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {loading && (
              <span
                className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                aria-hidden="true"
              />
            )}
            {children}
          </>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";
