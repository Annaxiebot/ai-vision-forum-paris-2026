import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText, MapPin, Calendar, Users, FileSignature, GraduationCap, Github, ArrowRight } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/constants";
import {
  PANELS,
  DOWNLOADS,
  FORUM_STATS,
  PARIS_INITIATIVE,
  COMPANION_OUTPUTS,
} from "@/lib/data/paris2026-report";
import { MediaSection } from "@/components/media/MediaSection";
import { ExecutiveSummary } from "@/components/report/ExecutiveSummary";
import { HeadlineFindings } from "@/components/report/HeadlineFindings";
import { PanelGrid } from "@/components/report/PanelGrid";

export const metadata: Metadata = {
  title: `Forum Report — ${EVENT_CONFIG.name}`,
  description:
    "Proceedings, panel findings, multimedia recap, and the Paris Initiative — from the AI Vision Forum Paris 2026.",
  openGraph: {
    title: `Forum Report — ${EVENT_CONFIG.name}`,
    description: `${EVENT_CONFIG.tagline} · Post-event report, audio recap, and downloadable documents.`,
    images: [EVENT_CONFIG.ogImageUrl],
    type: "article",
  },
};

export default function ReportPage() {
  return (
    <main className="bg-background pb-24 pt-28">
      {/* Hero band */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-5xl px-4 py-14">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block h-1 w-10 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Forum Report · Held 4 May 2026
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            <span className="text-primary">Architecting</span>
            <br />
            Human–AI Synergy
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-foreground/75">
            On {EVENT_CONFIG.dateDisplay}, ~{FORUM_STATS.participants} researchers,
            founders, foundation stewards, regulators, and educators met in Paris
            for the AI Vision Forum. This report distills the day's four panels —
            held under the Chatham House Rule — into a single shareable record.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {EVENT_CONFIG.dateDisplay}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> Paris, France · co-located with GOSIM Paris
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-4 w-4" /> {FORUM_STATS.participants} participants · {FORUM_STATS.organisations} orgs
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={EVENT_CONFIG.reportUrl}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
            >
              <Download className="h-4 w-4" />
              Download Full Report (PDF · EN)
            </a>
            <a
              href={EVENT_CONFIG.reportUrlZh}
              className="inline-flex items-center gap-2 rounded-full border border-primary bg-background px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
            >
              <Download className="h-4 w-4" />
              下载完整报告 (PDF · 中文)
            </a>
          </div>
        </div>
      </section>

      {/* Media — both English and Chinese, toggled in-place */}
      <MediaSection />

      {/* Executive Summary */}
      <section className="border-y border-border bg-primary/[0.03]">
        <div className="container mx-auto max-w-5xl px-4 py-14">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Executive Summary</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Five high-conviction claims from the day.
            </p>
          </div>
          <ExecutiveSummary />
        </div>
      </section>

      {/* Headline Findings */}
      <section className="container mx-auto max-w-5xl px-4 py-14">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Headline Findings</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Seven claims the forum committed to in writing.
          </p>
        </div>
        <HeadlineFindings />
      </section>

      {/* Panels */}
      <section className="border-y border-border bg-primary/[0.03]">
        <div className="container mx-auto max-w-5xl px-4 py-14">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">The Four Panels</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Each panel page includes the full discussion, the panel infographic,
              and a separate recommendations infographic.
            </p>
          </div>
          <PanelGrid />
        </div>
      </section>

      {/* Paris Initiative */}
      <section className="container mx-auto max-w-5xl px-4 py-14">
        <div className="rounded-2xl bg-primary p-8 text-primary-foreground sm:p-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/80">
            Closing artefact of the day
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl">The Paris Initiative</h2>
          <p className="mt-2 max-w-3xl text-primary-foreground/85">
            Committed to public publication on GitHub, with a follow-up milestone at the next
            GOSIM gathering in Shenzhen.
          </p>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {PARIS_INITIATIVE.map((line, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary-foreground/15 text-sm font-bold">
                  {i + 1}
                </span>
                <span className="pt-0.5 text-sm text-primary-foreground/95">{line}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Companion Outputs — Initiative + Education Research */}
      <section className="border-t border-border bg-muted/20">
        <div className="container mx-auto max-w-5xl px-4 py-14">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Companion Outputs</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Beyond the Forum Report, Paris 2026 produced two standing artefacts: a signable
              consensus statement on agentic-AI infrastructure, and a three-paper Education
              research series. Each is also available as a dedicated page on this site.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {COMPANION_OUTPUTS.map((c) => {
              const Icon = c.kind === "initiative" ? FileSignature : GraduationCap;
              return (
                <div
                  key={c.title}
                  className="flex flex-col rounded-xl border border-border bg-background p-5 transition hover:border-primary hover:shadow-md"
                >
                  <div className="mb-3 flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-lg bg-primary/10 p-2 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                        {c.meta}
                      </p>
                      <h3 className="mt-0.5 text-base font-semibold text-foreground">{c.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/75 flex-1">{c.blurb}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                    <Link href={c.pageHref} className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
                      Read on site <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <a href={c.pdfHref} className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary">
                      <Download className="h-3.5 w-3.5" /> PDF
                    </a>
                    {c.repoHref && (
                      <a
                        href={c.repoHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary"
                      >
                        <Github className="h-3.5 w-3.5" /> Sign on GitHub
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto max-w-5xl px-4 py-14">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Downloads</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Full report and per-panel write-ups for distribution.
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {DOWNLOADS.map((d) => (
              <a
                key={d.href}
                href={d.href}
                className="group flex items-center justify-between rounded-lg border border-border bg-background p-4 transition hover:border-primary hover:shadow-sm"
              >
                <div>
                  <div className="font-semibold text-foreground group-hover:text-primary">{d.label}</div>
                  <div className="text-xs text-muted-foreground">{d.meta}</div>
                </div>
                <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
              </a>
            ))}
            {COMPANION_OUTPUTS.map((c) => (
              <a
                key={c.pdfHref}
                href={c.pdfHref}
                className="group flex items-center justify-between rounded-lg border border-border bg-background p-4 transition hover:border-primary hover:shadow-sm"
              >
                <div>
                  <div className="font-semibold text-foreground group-hover:text-primary">{c.title} (PDF)</div>
                  <div className="text-xs text-muted-foreground">{c.meta}</div>
                </div>
                <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            All materials published under the Chatham House Rule — no individual attribution.
            Editorial choices belong to the AI Vision Forum Organizing Committee.
          </p>
        </div>
      </section>

      {/* Companion essay */}
      <section className="container mx-auto max-w-5xl px-4 py-10">
        <Link
          href="/blog/double-exponential"
          className="group block rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 p-6 transition hover:border-primary hover:shadow-md"
        >
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-primary">Companion essay</p>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
            Beyond the &ldquo;Double Exponential&rdquo; — 5 Critical Takeaways
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            A short essay distilling the Forum into five plain-language takeaways — for readers
            who want the gist before the 30-page report.
          </p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Read the essay →
          </span>
        </Link>
      </section>

      {/* Per-panel quick links */}
      <section className="container mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-xl border border-border bg-card/50 p-6">
          <h3 className="text-lg font-semibold text-foreground">Explore individual panels</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Each track page includes the panel infographic, the full writeup, and a recommendations infographic.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {PANELS.map((p) => (
              <Link
                key={p.slug}
                href={`/tracks/${p.slug}`}
                className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-foreground/80 transition hover:border-primary hover:text-primary"
              >
                Panel {p.num} · {p.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
