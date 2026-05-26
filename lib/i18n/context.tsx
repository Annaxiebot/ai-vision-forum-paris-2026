"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import type { Locale, Translations } from "./types";
import { en } from "./en";
import { cn } from "./cn";
import { fr } from "./fr";

const translations: Record<Locale, Translations> = { en, cn, fr };
const STORAGE_KEY = "aivf-locale";
const VALID_LOCALES: readonly Locale[] = ["en", "cn", "fr"];

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  cycleLocale: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // SSR-safe initial state: always render "en" on the server to avoid hydration
  // mismatch; the persisted choice is restored in an effect right after mount.
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved && VALID_LOCALES.includes(saved)) {
        setLocaleState(saved);
        document.documentElement.lang = saved === "cn" ? "zh" : saved;
      }
    } catch {
      // localStorage unavailable (private mode, etc.) — fall back to default.
    }
  }, []);

  const persist = useCallback((next: Locale) => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Quota / private mode — silently skip.
      }
      document.documentElement.lang = next === "cn" ? "zh" : next;
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    persist(newLocale);
  }, [persist]);

  const cycleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const nextIndex = (VALID_LOCALES.indexOf(prev) + 1) % VALID_LOCALES.length;
      const next = VALID_LOCALES[nextIndex];
      persist(next);
      return next;
    });
  }, [persist]);

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, cycleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}

/** Display label for locale switcher */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  cn: "CN",
  fr: "FR",
};
