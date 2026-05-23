/**
 * Post-event report data for AI Vision Forum Paris 2026.
 * Single source of truth for the convictions, findings, panel summaries,
 * and downloads rendered on /report and across track pages.
 *
 * Content is in English (the report's source language); not translated
 * because direct quotes are reproduced verbatim under Chatham House Rule.
 */

export type Conviction = {
  heading: string;
  body: string;
  example?: string;
};

export type Finding = {
  n: number;
  bold: string;
  body: string;
};

export type PanelSummary = {
  slug: "vibe-coding" | "education" | "governance" | "public-good";
  num: 1 | 2 | 3 | 4;
  title: string;
  subtitle: string;
  time: string;
  tldr: string;
  infographic: string;
  recommendationsInfographic: string;
};

export type DownloadItem = {
  label: string;
  href: string;
  meta: string;
};

export const CONVICTIONS: Conviction[] = [
  {
    heading: "The stack has changed — and openness has to reach the bottom of it.",
    body:
      "The agentic transition is not a software-only event. Open weights are nearly commodity; the remaining frontier is the open compute substrate beneath them — compiler, kernel language (e.g. Triton), operator library, and cross-vendor enablement (the FlagOS-class porting that brought a flagship open-weight model to more than ten AI chipsets in two or three days). Open source must extend across the four layers of what we call the CLAW stack — Compute, LLMs, Agents, Workflow — or sovereignty over AI will be impossible regardless of which flag flies over the data center.",
  },
  {
    heading: "Trust is engineered, not declared.",
    body:
      "“We are no longer managing just hallucination. We are managing trust.” Agents already outnumber humans, by the panel's measure, “exponentially.” Verifiability has to move from logging to tamper-resistant, machine-to-machine evidence at every boundary. Sovereign-AI claims without cryptographic verification are incomplete: “we never talk about sovereign AI again without talking about verification in the same sentence.”",
    example:
      "Imagine a bank's AI agent denies a mortgage. Six months later a regulator audits the decision. Today, the bank shows logs the bank itself wrote — an honour system. In an engineered-trust model, the agent emits cryptographically signed traces at every step (its identity, the model version, the chip it ran on, the data it touched, the output it produced) to a tamper-evident ledger. The regulator can replay and verify the decision without trusting the bank.",
  },
  {
    heading: "Education has to lead, not follow.",
    body:
      "“Ninety-five percent of different experiments have failed, or only maybe from five to ten” in the recent enterprise AI wave — not because the models are weak, but because the cognitive design around them is missing. The classroom is the place where AI either widens the gap between top and median learners or finally closes it. “Whatever you use a tool for, you are going to get worse in that skill” — productive struggle has to be designed in.",
  },
  {
    heading: "Tokens are infrastructure.",
    body:
      "“In the AI coding bureau, code is cheap. Show me the data.” The unit of strategic resource is shifting from code to tokens. Open-source maintainers are under pressure from AI-generated contributions; corporate sponsorship alone is not the answer. “It doesn't matter how many tokens you give me. My community will still think that I'm the grinch that stole Christmas because it will never be enough to redistribute fairly to absolutely everyone.”",
  },
  {
    heading: "Human–AI synergy is a contract.",
    body:
      "“Synergy” was repeatedly reframed throughout the day as something to be engineered: explicit roles, verifiable identities, auditable behaviour, and friction by design where learning, judgement, and meaning are at stake.",
  },
];

export const FINDINGS: Finding[] = [
  {
    n: 1,
    bold: "The “Seven Pillars of Open”",
    body:
      "— open science, open data, open standards, open source, open weights, open platform, and open hardware — must all be defended together. Open weights alone do not produce open AI.",
  },
  {
    n: 2,
    bold: "Agents break existing licenses and existing regulations.",
    body:
      "Open-source licenses regulate code use, modification, and distribution; they do not yet regulate behaviour, decision logs, or sub-agent spawning. The EU AI Act's product-safety framing similarly treats AI as a static artefact.",
  },
  {
    n: 3,
    bold: "Open weights are nearly commodity in the last 8–12 months.",
    body:
      "The remaining gap is measured in minutes per task, not years. Build the open-compute substrate now — compiler, kernel language (e.g. Triton), operator library, FlagOS-style cross-vendor enablement — so frontier open-weight models run on heterogeneous and prior-generation silicon, not only the newest chips.",
  },
  {
    n: 4,
    bold: "The junior-developer pipeline is in crisis.",
    body:
      "In some markets, top graduates command €150K salaries while the median graduate cannot find a programming role at all. Curricula must pivot from teaching syntax to teaching specification.",
  },
  {
    n: 5,
    bold: "The verifiability gap is widening.",
    body:
      "Compute is getting cheaper; verifying what an AI did, with what data, on which chip, under which policy, is getting more expensive. A deterministic control plane is the technical artefact most urgently missing. The EU AI Act's high-risk obligations may be postponed to December 2027.",
  },
  {
    n: 6,
    bold: "Open Token must not be confused with free token.",
    body:
      "“Free” is a marketing funnel that monetises data and lock-in. Open means governed, transparent, provenance-verifiable, with environmental cost made visible.",
  },
  {
    n: 7,
    bold: "Standards and policy must decouple.",
    body:
      "Regulation will remain national and regional; technical standards for identity, traceability, and verification must be global — or “sovereign AI” will collapse into vendor lock-in.",
  },
];

export const PANELS: PanelSummary[] = [
  {
    slug: "vibe-coding",
    num: 1,
    title: "Agentic AI Systems",
    subtitle: "Human–AI Symbiosis",
    time: "09:45 – 11:15",
    tldr:
      "The CLAW stack succeeds LAMP. Seven pillars of open. Open weights nearly commodity (8–12 months) — next frontier is the open compute substrate (Triton, FlagOS). The shift from engineer-as-excavator to agent-herder.",
    infographic: "/images/infographics/panel-1.png",
    recommendationsInfographic: "/images/infographics/panel-1-recs.png",
  },
  {
    slug: "education",
    num: 2,
    title: "Agentic AI in Education",
    subtitle: "Learning & Creativity",
    time: "11:30 – 13:00",
    tldr:
      "~95% of enterprise AI pilots fail. Cognitive design is the missing layer. The calculator effect. 2–3M RMB (~€150K) vs no role for new graduates. How to keep AI from widening the top/median gap.",
    infographic: "/images/infographics/panel-2.png",
    recommendationsInfographic: "/images/infographics/panel-2-recs.png",
  },
  {
    slug: "governance",
    num: 3,
    title: "Trusted Agentic AI",
    subtitle: "Governance, Safety & Sovereignty",
    time: "14:00 – 15:30",
    tldr:
      "Proof of Control in three tiers. Five dimensions of verification. Sovereign AI paired with cryptographic verification — or not at all. The EU AI Act under agentic stress: high-risk obligations possibly Dec 2027. Verification as the new economic moat.",
    infographic: "/images/infographics/panel-3.png",
    recommendationsInfographic: "/images/infographics/panel-3-recs.png",
  },
  {
    slug: "public-good",
    num: 4,
    title: "Open Token & Digital Public Goods",
    subtitle: "Foundations & Sustainability",
    time: "15:45 – 17:15",
    tldr:
      "Tokens are infrastructure. Three pillars of resourcing: cash + in-kind compute + human capacity. The DPGA's nine indicators — and how few AI systems meet them. The four-point Paris Initiative on Open Token.",
    infographic: "/images/infographics/panel-4.png",
    recommendationsInfographic: "/images/infographics/panel-4-recs.png",
  },
];

export const DOWNLOADS: DownloadItem[] = [
  { label: "Full Report (PDF · English)", href: "/reports/forum-report.pdf", meta: "PDF · 2.4 MB · 30 pp" },
  { label: "完整报告 (PDF · 中文)",      href: "/reports/forum-report-zh.pdf", meta: "PDF · 2.7 MB · 32 页" },
];

/**
 * Companion outputs from Paris 2026 — first-class deliverables beyond the
 * forum report itself. These get their own surfaced section on /report/
 * and are also discoverable via the site nav (/initiative/, /education/).
 */
export type CompanionOutput = {
  kind: "initiative" | "research";
  title: string;
  blurb: string;
  /** Internal page on this site (full context + interactive elements). */
  pageHref: string;
  /** Downloadable PDF in /public/reports/. */
  pdfHref: string;
  /** Optional GitHub repository for community participation. */
  repoHref?: string;
  /** Free-form metadata label rendered next to the title. */
  meta: string;
};

export const COMPANION_OUTPUTS: CompanionOutput[] = [
  {
    kind: "initiative",
    title: "The Paris Initiative",
    blurb:
      "A four-principle consensus statement on open, trusted, and sustainable agentic AI infrastructure. Signable on GitHub — every signature is a public pull request.",
    pageHref: "/initiative/",
    pdfHref: "/reports/paris-initiative.pdf",
    repoHref: "https://github.com/aivisionforum/paris-2026-initiative",
    meta: "Consensus statement · CC BY 4.0 · Signable",
  },
  {
    kind: "research",
    title: "Commonalities of Feynman, Socrates, and Piaget",
    blurb:
      "A structural analysis of three pedagogical traditions across two and a half millennia, identifying nine shared commitments — the theoretical floor for the Education track.",
    pageHref: "/education/",
    pdfHref: "/reports/05_commonalities_analysis_en.pdf",
    meta: "Education Research · Paper 1 of 3",
  },
  {
    kind: "research",
    title: "How AI Transforms Educational Implementation",
    blurb:
      "Maps the seven structural barriers that prevented classical pedagogy from scaling onto specific large-language-model capabilities — why AI is the first technology to close the gap.",
    pageHref: "/education/",
    pdfHref: "/reports/07_ai_transforming_education_en.pdf",
    meta: "Education Research · Paper 2 of 3",
  },
  {
    kind: "research",
    title: "From Socrates' Daimon to Digital Daimon",
    blurb:
      "A technical architecture paper. Six properties of a persistent learning agent, mapped to the OpenClaw stack and to each pedagogical theory.",
    pageHref: "/education/",
    pdfHref: "/reports/08_openclaw_architecture_paper_en.pdf",
    meta: "Education Research · Paper 3 of 3",
  },
];

export const FORUM_STATS = {
  duration: "1 day",
  panels: 4,
  participants: "~100",
  organisations: 25,
  pagesOfReport: 34,
};

export const PARIS_INITIATIVE = [
  "The AI era requires new infrastructure beyond code — tokens, compute, governance.",
  "AI compute is critical infrastructure and must be governed accordingly.",
  "Access to that infrastructure must be designed for everyone — students, maintainers, the Global South — not as charity but as ecosystem hygiene.",
  "The work is multi-stakeholder and global by construction; no single jurisdiction, foundation, or company can produce a legitimate result alone.",
];
