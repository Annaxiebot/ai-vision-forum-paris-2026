"use client";

import Link from "next/link";
import { ArrowLeft, Users, BookOpen } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

interface TrackLayoutProps {
  title: string;
  icon: React.ReactNode;
  gradient: string;
  overview: string;
  keyTopics: string[];
  speakers?: { name: string; title: string }[];
  resources?: { title: string; url: string }[];
  children?: React.ReactNode;
}

/**
 * Reusable layout for track detail pages
 */
export function TrackLayout({
  title,
  icon,
  gradient,
  overview,
  keyTopics,
  speakers = [],
  resources = [],
  children,
}: TrackLayoutProps) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className={`relative px-4 py-32 pt-32 overflow-hidden ${gradient}`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <Link
            href="/#tracks"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.trackDetail.backToTracks}
          </Link>

          <div className="mb-6">{icon}</div>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">{overview}</p>
        </div>
      </section>

      {/* Key Topics */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold">{t.trackDetail.keyTopics}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {keyTopics.map((topic, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <p className="text-sm md:text-base">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">{t.trackDetail.featuredSpeakers}</h2>
          </div>

          {speakers.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-lg font-bold text-primary-foreground">
                    {speaker.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="mb-1 text-lg font-semibold">{speaker.name}</h3>
                  <p className="text-sm text-muted-foreground">{speaker.title}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-border bg-card/50 p-12 text-center">
              <p className="text-lg text-muted-foreground">
                {t.trackDetail.speakersComingSoon}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {t.trackDetail.speakersCurating}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Custom Content */}
      {children && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">{children}</div>
        </section>
      )}

      {/* Resources */}
      {resources.length > 0 && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">{t.trackDetail.relatedResources}</h2>
            <div className="space-y-3">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-lg"
                >
                  <BookOpen className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="flex-1 font-medium">{resource.title}</span>
                  <span className="text-xs text-muted-foreground">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-secondary/5 p-12">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              {t.trackDetail.interestedInTrack}
            </h2>
            <p className="mb-6 text-muted-foreground">
              {t.trackDetail.requestInvitationToJoin}
            </p>
            <a
              href="https://register.gosim.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent/30"
            >
              {t.trackDetail.requestInvitation}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
