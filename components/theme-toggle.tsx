"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function updateTheme(checked: boolean) {
    setDark(checked);
    document.documentElement.classList.toggle("dark", checked);
    localStorage.setItem("kokeb-theme", checked ? "dark" : "light");
  }

  return (
    <label className="theme-toggle" title="Switch light and dark mode">
      <Sun aria-hidden="true" />
      <Switch
        checked={dark}
        onCheckedChange={updateTheme}
        aria-label="Use dark mode"
        className="theme-switch"
      />
      <Moon aria-hidden="true" />
    </label>
  );
}
