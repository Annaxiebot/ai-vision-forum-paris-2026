"use client";

import Link from "next/link";
import { ArrowLeft, ScrollText, Cpu, Globe2, Network, Users2, ListChecks } from "lucide-react";
import { SignSection } from "@/components/initiative/SignSection";
import { useTranslation } from "@/lib/i18n";

// Icons are stable across locales; the rest of the principle content comes
// from i18n.
const PRINCIPLE_ICONS = [
  <Cpu key="i" className="h-7 w-7 text-primary" />,
  <Globe2 key="ii" className="h-7 w-7 text-primary" />,
  <Network key="iii" className="h-7 w-7 text-primary" />,
  <Users2 key="iv" className="h-7 w-7 text-primary" />,
];

const SIGN_LINKS = [
  { label: "aosf.ai", href: "https://aosf.ai" },
  { label: "open-token.org", href: "https://open-token.org" },
  { label: "visionforum.ai", href: "https://visionforum.ai" },
];

export default function ParisInitiativePage() {
  const { t } = useTranslation();
  const tp = t.initiativePage;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative px-4 pt-32 pb-12 overflow-hidden bg-gradient-to-br from-accent/15 via-background to-primary/10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            {tp.backToHome}
          </Link>

          <div className="mb-6 flex justify-center">
            <ScrollText className="h-14 w-14 text-accent" />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {tp.badge}
          </p>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-gradient-primary">{tp.heroTitle}</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            {tp.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Preamble */}
      <section className="pt-4 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-8 md:p-12">
            <p className="text-lg text-foreground/90 md:text-xl">{tp.preamble}</p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {tp.principles.map((p, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-8 md:p-10 transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-primary/10 p-3">
                    {PRINCIPLE_ICONS[index]}
                  </div>
                  <div>
                    <p className="mb-1 font-mono text-sm font-bold text-accent">{p.roman}</p>
                    <h2 className="text-2xl font-bold md:text-3xl">{p.title}</h2>
                  </div>
                </div>
                <p className="text-muted-foreground md:text-lg">{p.body}</p>
                {p.extra && (
                  <p className="mt-4 text-muted-foreground md:text-lg">{p.extra}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <div className="mb-6 flex items-center gap-3">
              <ListChecks className="h-7 w-7 text-primary" />
              <h2 className="text-2xl font-bold md:text-3xl">{tp.nextStepsTitle}</h2>
            </div>
            <p className="mb-8 text-muted-foreground md:text-lg">{tp.nextStepsIntro}</p>
            <ol className="space-y-5">
              {tp.nextSteps.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 font-mono text-sm font-bold text-accent">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-muted-foreground md:text-lg">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Sign the Initiative (live signatory count + 3 signing paths) */}
      <SignSection />

      {/* Stewarding organizations */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border-2 border-accent/40 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10 p-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {tp.stewardedBy}
            </p>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {SIGN_LINKS.map((link, i) => (
                <span key={link.label} className="flex items-center gap-x-6">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-primary hover:underline md:text-lg"
                  >
                    {link.label}
                  </a>
                  {i < SIGN_LINKS.length - 1 && (
                    <span className="text-muted-foreground">|</span>
                  )}
                </span>
              ))}
            </div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {tp.parisDate}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
