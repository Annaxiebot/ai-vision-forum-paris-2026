"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { Logo } from "@/components/branding/Logo";

const NAV_ITEMS = [
  { label: "Home", href: "/", highlight: false },
  { label: "Tracks", href: "/#tracks", highlight: false },
  { label: "Cello", href: "/tracks/vibe-coding", highlight: false },
  { label: "Schedule", href: "/#schedule", highlight: false },
  { label: "Speakers", href: "/#speakers", highlight: false },
  { label: "Venue", href: "/#venue", highlight: false },
  { label: "Register", href: "/register", highlight: true },
] as const;

/**
 * Sticky header navigation with mobile hamburger menu
 * Features smooth scroll, dark mode toggle, and language switcher
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Handle smooth scroll for anchor links
    if (href.startsWith("/#")) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo variant="compact" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("/#")) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  item.highlight
                    ? "rounded-full bg-accent px-4 py-2 text-accent-foreground hover:bg-accent/90"
                    : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <button
              onClick={() => {
                const langs = ["EN", "CN", "FR"];
                const currentIndex = langs.indexOf(currentLang);
                const nextLang = langs[(currentIndex + 1) % langs.length];
                setCurrentLang(nextLang);
              }}
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              title="Switch language (placeholder)"
            >
              <Globe className="h-4 w-4" />
              <span>{currentLang}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith("/#")) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    } else {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className={`text-base font-medium transition-colors ${
                    item.highlight
                      ? "rounded-full bg-accent px-4 py-2 text-center text-accent-foreground"
                      : "text-foreground/80 hover:text-primary px-4 py-2"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Language Switcher Mobile */}
              <button
                onClick={() => {
                  const langs = ["EN", "CN", "FR"];
                  const currentIndex = langs.indexOf(currentLang);
                  const nextLang = langs[(currentIndex + 1) % langs.length];
                  setCurrentLang(nextLang);
                }}
                className="flex items-center justify-center gap-2 px-4 py-2 text-base font-medium text-muted-foreground"
              >
                <Globe className="h-5 w-5" />
                <span>Language: {currentLang}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
