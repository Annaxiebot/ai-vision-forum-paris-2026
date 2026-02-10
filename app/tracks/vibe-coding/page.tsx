import { TrackLayout } from "@/components/tracks/TrackLayout";

export default function VibeCodingTrack() {
  return (
    <TrackLayout
      title="Vibe Coding & Agentic Open-Source Development"
      icon="💻"
      gradient="bg-gradient-to-br from-secondary/20 via-background to-accent/10"
      overview="Featuring the Cello project: autonomous coding agents, Rust rewrites, and the future of software development where humans and AI collaborate seamlessly."
      keyTopics={[
        "The Cello project: AI-driven Rust development",
        "Autonomous coding agents and their capabilities",
        "Vibe-based programming: intuitive human-AI interfaces",
        "Open-source sustainability with AI contributors",
        "Code review and quality assurance by AI",
        "Pair programming with AI: best practices",
        "Rust ecosystem and AI tooling",
        "Licensing and attribution in AI-generated code",
      ]}
      resources={[
        {
          title: "Cello Project GitHub",
          url: "https://github.com/cello-project",
        },
        {
          title: "The State of Agentic Development (Report)",
          url: "#",
        },
      ]}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Spotlight: The Cello Project</h2>
        <p className="text-muted-foreground">
          Cello is an experimental autonomous development framework that rewrites legacy codebases into modern Rust. It represents the cutting edge of agentic coding: AI agents that understand context, make architectural decisions, and produce production-ready code.
        </p>
        
        <div className="mt-6 p-6 rounded-lg border border-accent/30 bg-accent/5">
          <h3 className="text-lg font-bold mb-2 text-accent">Featured Session</h3>
          <p className="text-sm text-muted-foreground">
            Live demo: Watch an AI agent refactor a Python project to Rust in real-time, with commentary from the Cello maintainers on design decisions, challenges, and the future roadmap.
          </p>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4">What You'll Learn</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>How to integrate AI coding assistants into your workflow</li>
          <li>Designing prompts and specifications for autonomous agents</li>
          <li>Evaluating AI-generated code for security and performance</li>
          <li>Building multi-agent systems for complex projects</li>
        </ul>
      </div>
    </TrackLayout>
  );
}
