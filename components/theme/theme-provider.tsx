"use client";

import { createContext, useCallback, useContext, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // The inline ThemeScript already set data-theme on <html> before hydration;
  // read it back via a lazy initializer so client state matches the DOM
  // on mount without an extra render pass.
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof document === "undefined") return "dark";
    return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  });

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage unavailable (private browsing, etc.) — theme just won't persist
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
