"use client";

import { useEffect, useRef, useState } from "react";

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function StatCounter({
  target,
  suffix = "",
  label,
}: {
  target: number;
  suffix?: string;
  label: string;
}) {
  const [value, setValue] = useState(() => (prefersReducedMotion() ? target : 0));
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 900;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setValue(Math.round(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <span className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {value}
        {suffix}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}
