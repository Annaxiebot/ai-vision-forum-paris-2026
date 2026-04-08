"use client";

import Link from "next/link";
import { GraduationCap, Laptop, Scale, Globe, Mic, Landmark, Handshake, Plane, TowerControl } from "lucide-react";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EVENT_CONFIG } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n";

const TRACK_ICONS: Record<string, React.ReactNode> = {
  "graduation-cap": <GraduationCap className="h-12 w-12 text-primary" />,
  "laptop": <Laptop className="h-12 w-12 text-primary" />,
  "scale": <Scale className="h-12 w-12 text-primary" />,
  "globe": <Globe className="h-12 w-12 text-primary" />,
};

const PANELIST_ORGS = [
  { name: "Google DeepMind", logo: "/images/orgs/google-deepmind.png", url: "https://deepmind.google" },
  { name: "Probabl", logo: "/images/orgs/probabl.png", url: "https://probabl.ai" },
  { name: "ZhipuAI", logo: "/images/orgs/zhipuai.png", url: "https://zhipuai.cn" },
  { name: "Moonshot AI", logo: "/images/orgs/moonshot-ai.png", url: "https://moonshot.cn" },
  { name: "Minimax", logo: "/images/orgs/minimax.png", url: "https://minimaxi.com" },
  { name: "BAAI", logo: "/images/orgs/baai.png", url: "https://baai.ac.cn" },
  { name: "CSDN", logo: "/images/orgs/csdn.png", url: "https://csdn.net" },
  { name: "LF AI & Data", logo: "/images/orgs/lf-ai-data.svg", url: "https://lfaidata.foundation" },
  { name: "Rust Foundation", logo: "/images/orgs/rust-foundation.png", url: "https://rustfoundation.org" },
  { name: "Kaiyuanshe", logo: "/images/orgs/kaiyuanshe.svg", url: "https://kaiyuanshe.cn" },
  { name: "CNRS", logo: "/images/orgs/cnrs.png", url: "https://cnrs.fr" },
  { name: "Fudan University", logo: "/images/orgs/fudan.svg", url: "https://fudan.edu.cn" },
  { name: "Tulane University", logo: "/images/orgs/tulane.png", url: "https://tulane.edu" },
  { name: "McGill University", logo: "/images/orgs/mcgill.png", url: "https://mcgill.ca" },
  { name: "BNBU", logo: "/images/orgs/bnbu.png", url: "https://bnbu.edu.cn" },
  { name: "SOLEIL Synchrotron", logo: "/images/orgs/soleil.png", url: "https://synchrotron-soleil.fr" },
  { name: "United Nations University", logo: "/images/orgs/unu.png", url: "https://unu.edu" },
  { name: "Chinese Academy of Social Sciences", logo: "/images/orgs/cass.png", url: "https://cssn.cn" },
  { name: "China Electronics Standardization Institute", logo: "/images/orgs/cesi.png", url: "https://csa-iot.org/member/china-electronics-standardization-institute/" },
  { name: "Egen AI", logo: "/images/orgs/egen.png", url: "https://egen.ai" },
];

const TRACK_ICON_KEYS = ["laptop", "graduation-cap", "scale", "globe"];
const TRACK_SLUGS = ["vibe-coding", "education", "governance", "public-good"];
const TRACK_HIGHLIGHTS = [true, false, false, false];

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />

      {/* Tracks Section */}
      <section id="tracks" className="py-24 px-4" style={{ background: "linear-gradient(180deg, rgba(93, 132, 168, 0.06) 0%, rgba(93, 132, 168, 0.03) 50%, transparent 100%)" }}>
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              <span className="text-gradient-primary">{t.tracksSection.title}</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
              {t.tracksSection.subtitle}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {t.tracksSection.tracks.map((track, index) => (
              <Link
                key={index}
                href={`/tracks/${TRACK_SLUGS[index]}`}
                className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="mb-6">{TRACK_ICONS[TRACK_ICON_KEYS[index]]}</div>
                <h3 className="mb-2 text-2xl font-bold group-hover:text-primary transition-colors">
                  {track.title}
                </h3>
                <p className="mb-4 text-sm font-medium text-accent">{track.subtitle}</p>
                <p className="text-muted-foreground mb-6">{track.description}</p>

                <div className="flex flex-wrap gap-2">
                  {track.keywords.map((keyword, ki) => (
                    <span key={ki} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {keyword}
                    </span>
                  ))}
                </div>

                {TRACK_HIGHLIGHTS[index] && (
                  <div className="absolute -right-3 -top-3 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-lg">
                    {t.tracksSection.featured}
                  </div>
                )}

                <div className="absolute bottom-8 right-8 text-2xl opacity-0 transition-opacity group-hover:opacity-100">
                  &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              <span className="text-gradient-primary">{t.scheduleSection.title}</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
              {t.scheduleSection.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {t.scheduleSection.items.map((item, index) => (
              <div key={index} className="flex items-start gap-6 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg">
                <div className="flex-shrink-0 rounded-lg bg-primary/10 px-4 py-2">
                  <span className="font-mono text-sm font-bold text-primary">{item.time}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  {item.subtitle && <p className="mt-1 text-sm text-muted-foreground">{item.subtitle}</p>}
                  {item.format && <p className="mt-2 text-xs font-medium text-accent">{item.format}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">{t.scheduleSection.note}</p>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-24 px-4" style={{ background: "linear-gradient(180deg, rgba(202, 124, 129, 0.06) 0%, rgba(202, 124, 129, 0.03) 50%, transparent 100%)" }}>
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-gradient-primary">{t.speakersSection.title}</span>
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-lg text-muted-foreground md:text-xl">
            {t.speakersSection.subtitle}
          </p>

          <div className="rounded-2xl border border-dashed border-border bg-card/50 p-16">
            <div className="mx-auto max-w-2xl">
              <div className="mb-6"><Mic className="mx-auto h-14 w-14 text-primary" /></div>
              <h3 className="mb-4 text-2xl font-bold">{t.speakersSection.comingSoon}</h3>
              <p className="text-muted-foreground">{t.speakersSection.comingSoonDescription}</p>
              <p className="mt-4 text-sm text-muted-foreground">{t.speakersSection.comingSoonNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Panelists Representing Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              <span className="text-gradient-primary">{t.panelistsSection.title}</span>
              <span className="ml-3 align-middle text-lg font-normal text-muted-foreground">(Partial)</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
              {t.panelistsSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:gap-6">
            {PANELIST_ORGS.map((org) => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary"
              >
                <div className="flex h-12 w-full items-center justify-center">
                  <img
                    src={org.logo}
                    alt={org.name}
                    className="h-10 max-w-[120px] object-contain"
                  />
                </div>
                <span className="text-center text-xs font-medium text-muted-foreground leading-tight">
                  {org.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                <span className="text-gradient-primary">{t.venue.title}</span>
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-2xl font-semibold">{EVENT_CONFIG.location.venue}</h3>
                  <p className="text-lg text-muted-foreground">
                    {EVENT_CONFIG.location.city}, {EVENT_CONFIG.location.country}
                  </p>
                </div>

                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-start gap-3">
                    <Landmark className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                    <span>{t.venue.venueDescription}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Handshake className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                    <span>{t.venue.colocatedDescription}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Plane className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                    <span>{t.venue.accessDescription}</span>
                  </p>
                </div>

                <div className="pt-6">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                    {t.venue.viewOnMap}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                <TowerControl className="h-16 w-16 text-muted-foreground" />
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">{t.venue.photosComingSoon}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4" style={{ background: "linear-gradient(180deg, rgba(211, 165, 106, 0.05) 0%, rgba(211, 165, 106, 0.02) 50%, transparent 100%)" }}>
        <div className="container mx-auto max-w-4xl text-center">
          <div className="rounded-3xl border-2 border-accent/50 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10 p-12 md:p-16">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">{t.cta.title}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">{t.cta.description}</p>
            <p className="text-muted-foreground">{t.cta.note}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
