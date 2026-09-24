/// <reference types="astro/client" />

type ThemePreference = "light" | "dark" | "system";

interface Window {
  __theme: {
    get: () => ThemePreference;
    set: (pref: ThemePreference) => void;
  };
}
