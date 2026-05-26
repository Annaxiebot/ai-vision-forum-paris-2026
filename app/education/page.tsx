"use client";

import Link from "next/link";
import { ArrowLeft, GraduationCap, FileText, Brain, MessageCircle, Layers } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

// Stable per-card metadata that doesn't change across locales:
// the report files (Chinese original is the same .html either way) and the icon.
const REPORT_META = [
  {
    file: "/reports/05_commonalities_analysis_en.html",
    fileZh: "/reports/05_commonalities_analysis.html",
    icon: <Brain className="h-7 w-7 text-primary" />,
  },
  {
    file: "/reports/07_ai_transforming_education_en.html",
    fileZh: "/reports/07_ai_transforming_education.html",
    icon: <MessageCircle className="h-7 w-7 text-primary" />,
  },
  {
    file: "/reports/08_openclaw_architecture_paper_en.html",
    fileZh: "/reports/08_openclaw_architecture_paper.html",
    icon: <Layers className="h-7 w-7 text-primary" />,
  },
];

export default function EducationInitiativePage() {
  const { t } = useTranslation();
  const tp = t.educationPage;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative px-4 pt-32 pb-12 overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/10">
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
            <GraduationCap className="h-14 w-14 text-primary" />
          </div>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-gradient-primary">{tp.heroTitle}</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            {tp.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pt-4 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <p className="mb-6 text-lg text-foreground/90">{tp.introP1}</p>
            <p className="mb-6 text-muted-foreground">{tp.introP2}</p>
            <p className="text-muted-foreground">{tp.introP3}</p>
          </div>
        </div>
      </section>

      {/* Featured Reports */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-2 text-3xl font-bold">{tp.featuredReportsTitle}</h2>
          <p className="mb-10 text-muted-foreground">{tp.featuredReportsSubtitle}</p>

          <div className="space-y-6">
            {tp.reports.map((report, index) => {
              const meta = REPORT_META[index];
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary hover:shadow-2xl"
                >
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-lg bg-primary/10 p-3">
                      {meta.icon}
                    </div>
                    <div className="flex-1">
                      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-accent">
                        {report.label}
                      </p>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors md:text-2xl">
                        {report.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mb-5 text-muted-foreground">{report.summary}</p>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                    <a
                      href={meta.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                    >
                      <FileText className="h-4 w-4" />
                      <span>{tp.readFullReportEn}</span>
                      <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </a>
                    <a
                      href={meta.fileZh}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                      lang="zh"
                    >
                      <span>{tp.chineseOriginalLink}</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10 p-12">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">{tp.closingTitle}</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">{tp.closingText}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
