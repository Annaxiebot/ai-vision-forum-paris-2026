"use client";

import { useEffect, useState } from "react";
import { Github, FileSignature, Users } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const REPO = "aivisionforum/paris-2026-initiative";
const SIGNATORIES_URL = `https://raw.githubusercontent.com/${REPO}/main/SIGNATORIES.md`;
const SIGN_PR_URL = `https://github.com/${REPO}/blob/main/SIGNATORIES.md`;
const SIGN_ISSUE_URL = `https://github.com/${REPO}/issues/new?template=sign.yml`;
const VIEW_ALL_URL = `https://github.com/${REPO}/blob/main/SIGNATORIES.md`;

type Counts = { orgs: number; individuals: number; total: number };

/**
 * Client-side fetch of SIGNATORIES.md from raw.githubusercontent.com, parsing
 * the two list sections to produce a live count. Fails quietly (no count shown)
 * if the repo isn't yet published or the network is unavailable.
 */
function useSignatoryCount(): Counts | null {
  const [counts, setCounts] = useState<Counts | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(SIGNATORIES_URL, { cache: "no-store" })
      .then(r => (r.ok ? r.text() : null))
      .then(text => {
        if (!text || cancelled) return;
        // Split on `## Organizations` and `## Individuals` headings and count `- ` bullets.
        const orgsMatch = text.match(/##\s+Organizations[\s\S]*?(?=\n##\s|\n$)/i);
        const indsMatch = text.match(/##\s+Individuals[\s\S]*?(?=\n##\s|\n$)/i);
        const countBullets = (s: string | undefined) =>
          (s ?? "").split("\n").filter(l => l.trimStart().startsWith("- **")).length;
        const orgs = countBullets(orgsMatch?.[0]);
        const individuals = countBullets(indsMatch?.[0]);
        setCounts({ orgs, individuals, total: orgs + individuals });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return counts;
}

export function SignSection() {
  const counts = useSignatoryCount();
  const { t } = useTranslation();
  const ts = t.signSection;

  return (
    <section id="sign" className="py-16 px-4 scroll-mt-24">
      <div className="container mx-auto max-w-4xl">
        <div className="rounded-2xl border-2 border-accent/40 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10 p-8 md:p-12">
          <div className="mb-6 flex items-center gap-3">
            <FileSignature className="h-7 w-7 text-accent" />
            <h2 className="text-2xl font-bold md:text-3xl">{ts.title}</h2>
          </div>

          <p className="text-muted-foreground md:text-lg">{ts.intro}</p>

          {counts && (
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-background px-5 py-2.5 text-sm font-semibold text-foreground">
              <Users className="h-4 w-4 text-accent" />
              {counts.total === 0 ? (
                <>{ts.beFirst}</>
              ) : (
                <>
                  <span className="text-accent">{counts.total}</span> {ts.signatories}
                  <span className="text-muted-foreground"> · {counts.orgs} {ts.orgs} · {counts.individuals} {ts.individuals}</span>
                </>
              )}
            </div>
          )}

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <a
              href={SIGN_PR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary hover:shadow-md"
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-primary/10 p-2.5 text-primary">
                <Github className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold group-hover:text-primary">{ts.prTitle}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{ts.prDesc}</p>
            </a>

            <a
              href={SIGN_ISSUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary hover:shadow-md"
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-primary/10 p-2.5 text-primary">
                <FileSignature className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold group-hover:text-primary">{ts.issueTitle}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{ts.issueDesc}</p>
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="text-muted-foreground">{ts.repoNote}</p>
            <a
              href={VIEW_ALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <Github className="h-4 w-4" /> {ts.viewAll}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
