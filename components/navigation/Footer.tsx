"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Logo } from "@/components/branding/Logo";
import { EVENT_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

/**
 * Professional footer with branding, links, and social media
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Branding */}
          <div className="space-y-4">
            <Logo variant="full" />
            <p className="text-sm text-muted-foreground">
              {EVENT_CONFIG.tagline}
            </p>
            <p className="text-xs text-muted-foreground">
              {EVENT_CONFIG.location.city}, {EVENT_CONFIG.location.country} • {EVENT_CONFIG.dateDisplay}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#about"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#tracks"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Tracks
                </Link>
              </li>
              <li>
                <Link
                  href="/#schedule"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/#speakers"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Speakers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
              <li>
                <span className="text-xs text-muted-foreground">
                  Under Chatham House Rule
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Partnership */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Connect</h3>
            <div className="flex gap-3 mb-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card p-2 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card p-2 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card p-2 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Co-located with{" "}
              <a
                href="https://paris2026.gosim.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-secondary hover:underline"
              >
                GOSIM Paris 2026
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          <p>© {currentYear} AI Vision Forum. All rights reserved.</p>
          <p className="mt-1">
            Organized by the AI Vision Forum community • Invitation-only event
          </p>
        </div>
      </div>
    </footer>
  );
}
