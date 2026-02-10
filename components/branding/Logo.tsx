"use client";

import Link from "next/link";

interface LogoProps {
  variant?: "full" | "compact";
  className?: string;
}

/**
 * Text-based logo for AI Vision Forum Paris 2026
 * Features modern typography with gradient effects
 */
export function Logo({ variant = "full", className = "" }: LogoProps) {
  if (variant === "compact") {
    return (
      <Link 
        href="/" 
        className={`group flex items-center gap-2 transition-opacity hover:opacity-80 ${className}`}
      >
        <div className="relative">
          <span className="text-2xl font-bold tracking-tighter">
            <span className="text-gradient-primary">AIVF</span>
          </span>
          <span className="ml-1 text-lg font-medium text-secondary">26</span>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      href="/" 
      className={`group flex flex-col transition-opacity hover:opacity-80 ${className}`}
    >
      <div className="flex items-baseline gap-2">
        <span className="text-xl font-bold tracking-tight text-gradient-primary md:text-2xl">
          AI VISION FORUM
        </span>
        <span className="text-sm font-semibold text-accent md:text-base">
          PARIS 2026
        </span>
      </div>
      <div className="mt-0.5 text-[0.6rem] font-medium tracking-widest text-muted-foreground md:text-xs">
        AGENTS SHAPING TOMORROW
      </div>
    </Link>
  );
}

/**
 * Animated logo with glow effect for hero sections
 */
export function AnimatedLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative">
        {/* Glow effect background */}
        <div className="absolute inset-0 animate-pulse-slow blur-2xl opacity-30">
          <span className="text-6xl font-bold text-primary md:text-8xl">
            AIVF 2026
          </span>
        </div>
        
        {/* Main logo */}
        <div className="relative flex flex-col items-center gap-3">
          <h1 className="text-5xl font-bold tracking-tighter text-gradient-primary md:text-7xl lg:text-8xl">
            AI VISION FORUM
          </h1>
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-accent to-transparent" />
            <span className="text-xl font-semibold text-accent md:text-2xl">
              PARIS 2026
            </span>
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>
        </div>
      </div>
      
      <p className="mt-6 text-sm font-medium tracking-widest text-muted-foreground md:text-base">
        AGENTS SHAPING TOMORROW
      </p>
    </div>
  );
}
