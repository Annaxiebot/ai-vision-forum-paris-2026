import { TrackLayout } from "@/components/tracks/TrackLayout";

export default function GovernanceTrack() {
  return (
    <TrackLayout
      title="Anticipatory Governance for Agentic AI"
      icon="⚖️"
      gradient="bg-gradient-to-br from-accent/20 via-background to-primary/10"
      overview="AI Act implementation, autonomous agent ethics, and governance frameworks for responsible AI development in an agentic future."
      keyTopics={[
        "EU AI Act: compliance and implementation strategies",
        "Ethical frameworks for autonomous AI agents",
        "Accountability in multi-agent systems",
        "Transparency and explainability requirements",
        "Risk assessment methodologies for agentic AI",
        "International cooperation on AI governance",
        "Public participation in AI policy-making",
        "Adaptive regulation for rapidly evolving technology",
      ]}
      resources={[
        {
          title: "EU AI Act Official Text",
          url: "https://artificialintelligenceact.eu/",
        },
        {
          title: "OECD AI Principles",
          url: "https://www.oecd.org/digital/artificial-intelligence/",
        },
        {
          title: "Partnership on AI - Resources",
          url: "https://partnershiponai.org/",
        },
      ]}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Anticipatory Governance Approach</h2>
        <p className="text-muted-foreground">
          Rather than reactive regulation, anticipatory governance proactively shapes AI development through multi-stakeholder dialogue, scenario planning, and adaptive frameworks. This track brings together policymakers, technologists, and civil society to co-create governance models that balance innovation with safety.
        </p>
        
        <div className="mt-6 p-6 rounded-lg border border-primary/30 bg-primary/5">
          <h3 className="text-lg font-bold mb-2 text-primary">Key Discussion</h3>
          <p className="text-sm text-muted-foreground">
            <strong>Governing Autonomous Agents:</strong> When AI agents make decisions independently, who is responsible? How do we audit their behavior? What rights should they have (if any)? Join a facilitated debate with legal scholars, AI researchers, and ethicists.
          </p>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4">Practical Outcomes</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>Draft policy recommendations for agentic AI oversight</li>
          <li>Case study analysis of AI governance successes and failures</li>
          <li>Toolkit for organizations implementing AI ethics boards</li>
          <li>Network with regulators and compliance experts</li>
        </ul>
      </div>
    </TrackLayout>
  );
}
