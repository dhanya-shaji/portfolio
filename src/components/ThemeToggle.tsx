"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-3 py-1.5 text-sm hover:bg-foreground/5"
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
    >
      <span className="inline-block h-3 w-3 rounded-full"
        style={{ background: theme === "dark" ? "#f5f5f5" : "#111" }}
      />
      {theme === "dark" ? "Light" : "Dark"} mode
    </button>
  );
}


