import { EVENT_CONFIG, TRACKS } from "@/lib/constants";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Placeholder */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        
        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="mb-6 text-6xl font-bold tracking-tight md:text-8xl">
            <span className="text-gradient-primary">
              {EVENT_CONFIG.name}
            </span>
          </h1>
          
          <p className="mb-4 text-2xl font-medium text-muted-foreground md:text-3xl">
            {EVENT_CONFIG.tagline}
          </p>
          
          <div className="mb-8 flex flex-col items-center gap-2 text-lg text-muted-foreground md:text-xl">
            <p>{EVENT_CONFIG.location.city}, {EVENT_CONFIG.location.country}</p>
            <p className="font-semibold text-secondary">{EVENT_CONFIG.dateDisplay}</p>
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/register"
              className="rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 glow-primary"
            >
              Request Invitation
            </a>
            <a
              href="/about"
              className="rounded-full border border-border bg-card/50 backdrop-blur px-8 py-4 font-semibold transition-all hover:bg-card hover:border-primary"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Tracks Overview - Placeholder */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl">
          Four Tracks
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {TRACKS.map((track) => (
            <div
              key={track.id}
              className="group relative rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-4 text-5xl">{track.icon}</div>
              <h3 className="mb-3 text-xl font-semibold">{track.title}</h3>
              <p className="text-muted-foreground">{track.description}</p>
              
              {track.highlight && (
                <div className="absolute -right-2 -top-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Featured
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Temporary Footer */}
      <footer className="border-t border-border py-12 text-center text-sm text-muted-foreground">
        <p>© 2026 AI Vision Forum. All rights reserved.</p>
        <p className="mt-2">Phase 1: Foundation Complete ✅</p>
      </footer>
    </div>
  );
}
