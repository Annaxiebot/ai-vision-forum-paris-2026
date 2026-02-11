"use client";

import { ChevronDown } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";
import { CountdownTimer } from "./CountdownTimer";
import { TypewriterText } from "./TypewriterText";
import { EVENT_CONFIG } from "@/lib/constants";

/**
 * Enhanced hero section with Three.js particles, countdown, and typewriter effect
 */
export function HeroSection() {
  const handleScrollDown = () => {
    const tracksSection = document.querySelector("#tracks");
    if (tracksSection) {
      tracksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24">
      {/* Three.js Particle Background */}
      <ParticleBackground />

      {/* Paris Silhouette Background */}
      <div 
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[1]"
        style={{
          height: '40%',
          backgroundImage: `url('${process.env.NODE_ENV === 'production' ? '/ai-vision-forum-2026' : ''}/images/paris-skyline.svg')`,
          backgroundPosition: 'center bottom',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          opacity: 0.4,
          color: '#a78bfa'
        }}
      />

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/95 to-secondary/10 z-[2]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {/* Main heading */}
        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
          <span className="text-gradient-primary">
            AI Vision Forum
          </span>
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-accent">
            Paris 2026
          </span>
        </h1>

        {/* Animated tagline */}
        <p className="mb-8 text-xl font-medium text-muted-foreground md:text-2xl lg:text-3xl">
          <TypewriterText text={EVENT_CONFIG.tagline} delay={80} />
        </p>

        {/* Event details */}
        <div className="mb-12 flex flex-col items-center gap-2 text-base text-muted-foreground md:text-lg">
          <p className="flex items-center gap-2">
            <span className="text-2xl">📍</span>
            <span>
              {EVENT_CONFIG.location.venue}, {EVENT_CONFIG.location.city}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-2xl">🤝</span>
            <span>Co-located with {EVENT_CONFIG.location.colocated}</span>
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12">
          <CountdownTimer />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/register"
            className="group relative overflow-hidden rounded-full bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent/30"
          >
            <span className="relative z-10">Request Invitation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              const aboutSection = document.querySelector("#about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="rounded-full border-2 border-primary/50 bg-card/50 backdrop-blur px-8 py-4 text-lg font-semibold transition-all hover:border-primary hover:bg-card hover:shadow-lg"
          >
            Learn More
          </a>
        </div>

        {/* Event badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-muted-foreground md:text-sm">
          <span className="rounded-full border border-border bg-card/50 backdrop-blur px-4 py-2">
            🎯 {EVENT_CONFIG.format}
          </span>
          <span className="rounded-full border border-border bg-card/50 backdrop-blur px-4 py-2">
            👥 {EVENT_CONFIG.scale}
          </span>
          <span className="rounded-full border border-border bg-card/50 backdrop-blur px-4 py-2">
            🔒 {EVENT_CONFIG.rule}
          </span>
        </div>
      </div>

      {/* Scroll down indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
