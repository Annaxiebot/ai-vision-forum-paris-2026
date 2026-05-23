import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText, Quote } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Beyond the "Double Exponential" — 5 Critical Takeaways · ${EVENT_CONFIG.name}`,
  description:
    "Companion essay distilling the AI Vision Forum Paris 2026 into five critical takeaways: the CLAW stack, sovereign AI as branding, the junior developer crisis, friction as a feature, and tokens as the new digital public good.",
  openGraph: {
    title: `Beyond the "Double Exponential" — 5 Critical Takeaways`,
    description: "Companion essay from the AI Vision Forum Paris 2026.",
    images: [EVENT_CONFIG.ogImageUrl],
    type: "article",
  },
};

export default function DoubleExponentialBlog() {
  return (
    <main className="bg-background pb-24 pt-28">
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-3xl px-4 py-14">
          <Link
            href="/report"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to the Forum Report
          </Link>
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block h-1 w-10 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Companion essay · May 2026
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Beyond the &ldquo;Double Exponential&rdquo;
          </h1>
          <p className="mt-2 text-xl text-foreground/75">
            5 Critical Takeaways from the 2026 AI Vision Forum
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Published by the AI Vision Forum Organizing Committee — a companion essay to the full Forum Report.
          </p>
        </div>
      </section>

      <article className="container mx-auto max-w-3xl px-4 py-14 text-foreground/85">
        <header className="mb-10">
          <h2 className="mb-3 text-xl font-bold text-foreground">Introduction: The End of &ldquo;AI as Software&rdquo;</h2>
          <p className="mb-4">
            The pace of technological change has officially outrun our ability to forecast it, leading to a profound &ldquo;forecast error&rdquo; that has shaken the industry to its core. In 2017, a McKinsey survey of experts projected that certain AI capability benchmarks wouldn&rsquo;t be reached until 2040 or 2050. Those same benchmarks were met or exceeded by 2023 — a three-decade miscalculation in just six years.
          </p>
          <p>
            This is the &ldquo;double exponential&rdquo;: the compounding effect of Moore&rsquo;s Law, a data deluge, and accelerating algorithmic capabilities breaking every existing model of progress. At the AI Vision Forum Paris 2026 — a closed-door gathering of researchers and regulators held under the Chatham House Rule to foster <em>Engineered Trust</em> — the consensus was clear: the era of &ldquo;AI as software&rdquo; is dead. We are now entering an <strong>agentic economy</strong> where autonomous systems act, spawn sub-agents, and contribute to their own learning, moving beyond mere tools into the realm of active participants.
          </p>
        </header>

        <section className="mb-10 border-t border-border pt-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">Takeaway 1</p>
          <h2 className="mb-4 text-2xl font-bold text-foreground">The LAMP Stack is Dead, Long Live the &ldquo;CLAW&rdquo;</h2>
          <p className="mb-4">
            For twenty years, the LAMP stack (Linux, Apache, MySQL, PHP/Python) provided the architectural foundation of the internet. That foundation has been superseded by the <strong>CLAW stack: Compute, LLMs, Agents, and Workflow</strong>.
          </p>
          <p className="mb-4">
            While the &ldquo;open weights&rdquo; movement has made significant strides, the forum participants warned that weights alone are insufficient for true sovereignty. Sovereignty is a hollow victory if a model only speaks the dialect of the latest proprietary silicon. For instance, a flagship open-weights model released just days before the forum required specific precision found only on &ldquo;Blackwell-class&rdquo; chips, effectively stranding the world&rsquo;s existing &ldquo;Hopper-class&rdquo; inference capacity. It took a dedicated open-stack team three days to port that model across ten different chipsets using a cross-vendor substrate — a feat that highlights why we must defend the <strong>Seven Pillars of Open</strong>:
          </p>
          <ul className="mb-4 space-y-1 pl-6 marker:text-primary [&>li]:list-disc">
            <li><strong>Open Science</strong> — Published methods and reproducible results.</li>
            <li><strong>Open Data</strong> — Transparent training corpora and provenance.</li>
            <li><strong>Open Standards</strong> — Interoperable, royalty-free protocols.</li>
            <li><strong>Open Source</strong> — Code under recognized licenses.</li>
            <li><strong>Open Weights</strong> — Permissive model parameters.</li>
            <li><strong>Open Platform</strong> — Tooling and orchestration available to all.</li>
            <li><strong>Open Hardware</strong> — Specifications for silicon and accelerators.</li>
          </ul>
          <blockquote className="border-l-4 border-primary bg-primary/5 p-4 italic text-foreground/85">
            &ldquo;Open weights without an open compute substrate is a hollow victory.&rdquo;
          </blockquote>
        </section>

        <section className="mb-10 border-t border-border pt-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">Takeaway 2</p>
          <h2 className="mb-4 text-2xl font-bold text-foreground">&ldquo;Sovereign AI&rdquo; is Just Branding Without Cryptography</h2>
          <p className="mb-4">
            As compute costs continue their precipitous decline, the strategic &ldquo;moat&rdquo; is shifting. The value no longer accrues to those who serve the cheapest token, but to those who own the verification layer.
          </p>
          <p className="mb-4">
            The <strong>verifiability gap</strong> is widening: it is getting cheaper to run an AI, but increasingly expensive to prove what that AI actually did, what data it touched, and which chip processed the request. To bridge this gap, the forum proposed a three-tier model of verification:
          </p>
          <ol className="mb-4 space-y-1 pl-6 marker:font-bold marker:text-primary [&>li]:list-decimal">
            <li><strong>Self-verifiable</strong> — The model justifies its own output.</li>
            <li><strong>Independently verifiable</strong> — A third-party observer confirms the action.</li>
            <li><strong>Cryptographically verifiable</strong> — Tamper-resistant, contemporaneous evidence captured at hardware boundaries.</li>
          </ol>
          <blockquote className="border-l-4 border-primary bg-primary/5 p-4 italic text-foreground/85">
            &ldquo;Sovereign AI without cryptographic verification is just branding.&rdquo;
          </blockquote>
          <p className="mt-4">
            The most urgent technical requirement today is a <strong>deterministic control plane</strong>. We need binary-auditable evidence of an agent&rsquo;s behavior — captured at the moment of action — to replace model-vendor promises with mathematical certainty.
          </p>
        </section>

        <section className="mb-10 border-t border-border pt-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">Takeaway 3</p>
          <h2 className="mb-4 text-2xl font-bold text-foreground">The Junior Developer Pipeline is in Crisis</h2>
          <p className="mb-4">
            The job market is undergoing a radical bifurcation. While elite graduates command salaries of €150,000, the median graduate is struggling to find entry-level work. This isn&rsquo;t because models are failing; it&rsquo;s because our <em>cognitive design</em> is failing.
          </p>
          <p className="mb-4">
            <strong>Cognitive design</strong> is the discipline of fitting algorithmic tools to the way humans actually work. Currently, roughly <strong>19 out of 20</strong> enterprise AI pilots fail because they create a <em>Cognitive Black Hole</em> — a state where an organization&rsquo;s data is absorbed by an AI that never feeds insight back to the collective. The machine gets smarter, but the organization atrophies. To survive, education must shift from &ldquo;syntax&rdquo; to &ldquo;specification.&rdquo;
          </p>
          <div className="my-6 overflow-hidden rounded-lg border border-border">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="p-3 text-left font-bold">Old Role: The Excavator</th>
                  <th className="p-3 text-left font-bold">New Role: The Agent Herder</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-3 align-top"><strong>Focus:</strong> Syntax and syntactic fluency</td>
                  <td className="p-3 align-top"><strong>Focus:</strong> Specification and judgment</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 align-top"><strong>Task:</strong> Writing code from scratch</td>
                  <td className="p-3 align-top"><strong>Task:</strong> Orchestrating and evaluating agent output</td>
                </tr>
                <tr>
                  <td className="p-3 align-top"><strong>Skill:</strong> Solving isolated problems</td>
                  <td className="p-3 align-top"><strong>Skill:</strong> System-engineering and drift detection</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 border-t border-border pt-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">Takeaway 4</p>
          <h2 className="mb-4 text-2xl font-bold text-foreground">Friction is a Feature, Not a Bug</h2>
          <p className="mb-4">
            In the rush to make AI &ldquo;frictionless,&rdquo; we risk destroying the pedagogical basis of learning. The forum argued for <strong>friction-by-design</strong> — the intentional reintroduction of &ldquo;productive struggle&rdquo; into workflows.
          </p>
          <p className="mb-4">
            When AI removes all effort, we encounter the <em>calculator effect</em>, where essential human skills — writing, reasoning, and social negotiation — atrophy. This is particularly dangerous in adolescence, where using AI as a &ldquo;social substitute&rdquo; during identity formation can displace the critical practice of human conflict and negotiation.
          </p>
          <blockquote className="border-l-4 border-primary bg-primary/5 p-4 italic text-foreground/85">
            &ldquo;Training and learning cannot be easy. It can be fun, but not easy.&rdquo;
          </blockquote>
          <p className="mt-4">
            AI cannot yet replicate a teacher&rsquo;s <em>silent know-how</em> — the tacit craft of judging a hypothesis or sensing when a proof &ldquo;feels&rdquo; right. We must design systems that protect the struggle, ensuring the machine doesn&rsquo;t become a substitute for human growth.
          </p>
        </section>

        <section className="mb-10 border-t border-border pt-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">Takeaway 5</p>
          <h2 className="mb-4 text-2xl font-bold text-foreground">Tokens are the New Digital Public Good</h2>
          <p className="mb-4">
            Compute, expressed as &ldquo;tokens,&rdquo; is now a strategic resource equivalent to the electric grid. However, we must distinguish between <em>Free Tokens</em> — marketing funnels that monetize user data — and <em>Open Tokens</em> which are governed, transparent, and provenance-verifiable.
          </p>
          <p className="mb-4">
            The open-source ecosystem, currently &ldquo;held together with dental floss and gum,&rdquo; is under siege. AI-assisted code contributions have surged dramatically in just six months, burying human maintainers under an avalanche of unreviewed pull requests. To sustain this substrate, the <strong>Paris Initiative</strong> was established — a four-point commitment published on GitHub, covering:
          </p>
          <ol className="mb-4 space-y-1 pl-6 marker:font-bold marker:text-primary [&>li]:list-decimal">
            <li><strong>Tokens</strong> — Establishing neutrally-governed token pools.</li>
            <li><strong>Compute</strong> — Providing &ldquo;in-kind compute&rdquo; to students and the Global South.</li>
            <li><strong>Governance</strong> — Creating standards for environmental and provenance disclosure.</li>
            <li><strong>Global Access</strong> — Ensuring the digital substrate remains a public resource, not a corporate monopoly.</li>
          </ol>
        </section>

        <section className="border-t border-border pt-10">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Conclusion: Replacing Implicit Trust with Engineered Trust</h2>
          <p className="mb-4">
            The <strong>Paris Synthesis</strong> posits that human–AI synergy is a contract, not a feeling. We cannot rely on implicit trust or the hope that autonomous systems will align with our values by default. Synergy requires explicit roles, verifiable identities, and auditable behavior.
          </p>
          <p className="mb-6">
            As we navigate the &ldquo;double exponential,&rdquo; we must build the open compute substrate and the deterministic control plane <em>now</em>. If we wait for parity between open and closed models, we will find ourselves trapped in a world where the human element has been optimized into obsolescence.
          </p>
          <div className="rounded-lg border-2 border-primary/30 bg-primary/5 p-6">
            <div className="mb-2 flex items-center gap-2 text-primary">
              <Quote className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-[0.18em]">Final ponderable</span>
            </div>
            <p className="text-base italic text-foreground/90">
              As AI becomes more autonomous, are we designing systems that help us grow, or are we simply building a &ldquo;cognitive black hole&rdquo; where the machine gets smarter while we disappear?
            </p>
          </div>
        </section>

        <nav className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-sm">
          <Link
            href="/report"
            className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
          >
            <FileText className="h-4 w-4" /> Read the full Forum Report
          </Link>
          <Link
            href="/initiative"
            className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
          >
            Sign the Paris Initiative <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </article>
    </main>
  );
}
