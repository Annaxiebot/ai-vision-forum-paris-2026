import { TrackLayout } from "@/components/tracks/TrackLayout";

export default function PublicGoodTrack() {
  return (
    <TrackLayout
      title="Agentic Open Source Foundations & AI as Global Public Good"
      icon="🌍"
      gradient="bg-gradient-to-br from-primary/20 via-background to-accent/10"
      overview="Multi-stakeholder collaboration, digital public goods, and ensuring AI benefits humanity through open-source foundations and equitable access."
      keyTopics={[
        "Open-source AI models and datasets as public goods",
        "Foundation model governance and stewardship",
        "Multi-stakeholder initiatives (OpenSustain.tech, DPGA)",
        "Bridging the global AI divide",
        "Funding models for sustainable open-source AI",
        "Community-driven AI development",
        "Open standards and interoperability",
        "AI for social impact and the SDGs",
      ]}
      resources={[
        {
          title: "Digital Public Goods Alliance",
          url: "https://digitalpublicgoods.net/",
        },
        {
          title: "OpenSustain.tech",
          url: "https://opensustain.tech/",
        },
        {
          title: "Linux Foundation AI & Data",
          url: "https://lfaidata.foundation/",
        },
      ]}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">AI for Humanity</h2>
        <p className="text-muted-foreground">
          Proprietary AI risks concentrating power in the hands of a few corporations. Open-source AI, governed as a digital public good, democratizes access and ensures diverse voices shape its development. This track explores how foundations, governments, and communities can collaborate to build AI infrastructure that serves everyone.
        </p>
        
        <div className="mt-6 p-6 rounded-lg border border-secondary/30 bg-secondary/5">
          <h3 className="text-lg font-bold mb-2 text-secondary">Spotlight Initiative</h3>
          <p className="text-sm text-muted-foreground">
            <strong>KAIYUANSHE Partnership:</strong> Learn about the open-source community's efforts in China to build AI tools for education, healthcare, and environmental sustainability. Emily Chen (Board of Advisors) will share case studies and lessons learned.
          </p>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4">Collaborative Projects</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>Designing governance models for open-source AI foundations</li>
          <li>Hackathon: Build AI tools for climate action or public health</li>
          <li>Discuss equitable compute access for researchers in the Global South</li>
          <li>Create a roadmap for AI contributions to the UN SDGs</li>
        </ul>
      </div>
    </TrackLayout>
  );
}
