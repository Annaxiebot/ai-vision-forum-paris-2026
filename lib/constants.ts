// AI Vision Forum Paris 2026 - Event Constants

export const EVENT_CONFIG = {
  name: "AI Vision Forum Paris 2026",
  tagline: "Architecting Human-AI Synergy",
  guidingQuestion: "As AI reshapes human roles, how do we ensure human core values remain central?",
  date: "2026-05-04", // May 4, 2026 (Monday)
  dateDisplay: "Monday, May 4, 2026",
  location: {
    city: "Paris",
    country: "France",
    venue: "",
    colocated: "GOSIM Paris 2026"
  },
  scale: "100–150 invited participants",
  format: "Invitation-only",
  rule: "Chatham House Rule",
  domain: "paris2026.visionforum.ai"
} as const;

export const TRACKS = [
  {
    id: 1,
    slug: "vibe-coding",
    title: "Agentic AI Systems — Human–AI Symbiosis",
    subtitle: "Building the Agentic Ecosystem",
    icon: "laptop",
    description: "A 360° exploration of building agentic systems ecosystems — from use cases and business value to architectures and collaborative development.",
    color: "secondary" as const,
    keywords: ["Agentic Software Engineering", "Autonomous Workflows", "Open-Source Coordination", "Standards"] as const,
    highlight: true
  },
  {
    id: 2,
    slug: "education",
    title: "Agentic AI in Education",
    subtitle: "Learning, Creativity, and Real-World Use",
    icon: "graduation-cap",
    description: "Showcasing real-world deployments across education, creativity, and knowledge work — from AI-native learning environments to tools that amplify human capability.",
    color: "primary" as const,
    keywords: ["AI4Education", "Embodied AI", "Multimodal Knowledge", "Personalized Learning"] as const,
    highlight: false
  },
  {
    id: 3,
    slug: "governance",
    title: "Trusted Agentic AI",
    subtitle: "Governance, Safety, and Sovereignty",
    icon: "scale",
    description: "Addressing the governance, safety, and sovereignty challenges of increasingly autonomous systems — from evaluation frameworks to regulatory trends.",
    color: "accent" as const,
    keywords: ["Anticipatory Governance", "AI Act Compliance", "Sovereign AI", "Trust Metrics"] as const,
    highlight: false
  },
  {
    id: 4,
    slug: "public-good",
    title: "Open Token & Digital Public Goods",
    subtitle: "Foundations for an Agentic Commons",
    icon: "globe",
    description: "Examining how agentic open-source foundations can function as global public infrastructure through value-driven projects and sustainable funding models.",
    color: "primary" as const,
    keywords: ["Public AI Tokens", "AOSF", "Sustainable Models", "Open-Source Governance"] as const,
    highlight: false
  }
] as const;

// Why Now: From LAMP to Claw
export const WHY_NOW = {
  title: "Why Now: From LAMP to Claw",
  intro: "The AI Vision Forum 2026 arrives at a pivotal moment in computing history. We are witnessing a paradigm shift comparable to the LAMP stack revolution of the 2000s — but this time, the infrastructure serves AI agents, not just humans.",
  shifts: [
    {
      id: 1,
      title: "Era 1 (2000s): LAMP Stack",
      description: "Linux, Apache, MySQL, PHP/Python — open-source technologies that democratized web development. LAMP served humans by enabling websites and applications at scale."
    },
    {
      id: 2,
      title: "Era 2 (2010s): Cloud/SaaS",
      description: "Cloud-native computing, API economy, centralized platforms. Elastic scaling, rapid delivery, global connectivity — but increasingly centralized control."
    },
    {
      id: 3,
      title: "Era 3 (Now): Claw Stack",
      description: "Compute, Language Models, Agents, Workflow — a unified framework for intelligent systems. The Claw Stack marks the arrival of the Agentic Economy: autonomous intelligence, decentralized networks, and open governance."
    }
  ],
  coreInsight: {
    title: "The Core Insight: Who Does Infrastructure Serve?",
    lamp: "LAMP served humans — providing intuitive control and insight for managing complex digital environments.",
    claw: "Claw serves agents — providing infrastructure where AI agents can autonomously make decisions, collaborate on tasks, and execute work.",
    governanceGap: "Just as the LAMP era had the Linux Foundation to coordinate open-source development, the Claw era needs AOSF (Agentic Open Source Foundation) — the Linux Foundation for the agentic stack."
  }
} as const;

// Our Unique Value Proposition
export const VALUE_PROPOSITION = [
  {
    id: 1,
    title: "Two-layer governance",
    description: "We bridge human-level ethics AND agent-level governance."
  },
  {
    id: 2,
    title: "Timing sweet spot",
    description: "Post-MCP Dev Summit (April 2–3 NYC), pre-EU AI Act enforcement (August 2), pre-IAPP Dublin (June). We can set the agenda."
  },
  {
    id: 3,
    title: "Cross-cultural bridge",
    description: "With GOSIM, KAIYUANSHE, and European partners, we are the only forum addressing US/EU/China open-source dynamics together."
  },
  {
    id: 4,
    title: "Durable framing over hype",
    description: "We don't chase what's hot today. We frame enduring structural questions and use current evidence as illustrations."
  }
] as const;

// AOSF Integration — Governance Framework for the Agentic Era
export const AOSF_INFO = {
  name: "Agentic Open Source Foundation",
  tagline: "The Linux Foundation for the Agentic Stack",
  description: "If LAMP made web applications possible, AOSF makes autonomous intelligence trustworthy. AOSF governs what LAMP never needed.",
  url: "https://aosf.ai",
  github: "https://github.com/aosf-org",
  openTokenUrl: "https://open-token.org/",
  governanceAreas: [
    { title: "Intent (意图)", description: "Goal alignment — ensuring AI agents pursue objectives aligned with human values across multi-agent systems." },
    { title: "Agents (代理)", description: "Trust protocols — authentication, capability certification, and identity verification for AI agents." },
    { title: "Economic Coordination (经济协调)", description: "Incentive mechanisms — sustainable funding models and value distribution in agentic ecosystems." }
  ],
  strategicInitiatives: [
    { id: "A", title: "Open Agent Identity", concept: "OAuth for Agents", objective: "Unified authentication ensuring secure mutual trust" },
    { id: "B", title: "Open Spec Standard", concept: "HTML for Intent", objective: "Common intent description language for cross-platform understanding" },
    { id: "C", title: "Orchestration Standard", concept: "Kubernetes for Agents", objective: "Intelligent agent routing and coordination" },
    { id: "D", title: "Open Token", concept: "Public AI Compute", objective: "Fair distribution of AI computing power as public good" },
    { id: "E", title: "Agent Marketplace", concept: "Capability Exchange", objective: "Trading capabilities, not just software" }
  ],
  openToken: {
    description: "Open Token is NOT cryptocurrency — it is a metering and settlement mechanism for AI computing power, analogous to how kilowatt-hours measure electricity.",
    goals: ["Accessibility", "Sustainability", "Growth"]
  }
} as const;

export const REFERENCE_SITES = {
  mainSite: "https://visionforum.ai/",
  hangzhou2025: "https://forum.gosim.org/en/",
  gosimParis: "https://paris2026.gosim.org"
} as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/aivisionforum",
  twitter: "https://twitter.com/aivisionforum",
  linkedin: "https://www.linkedin.com/company/ai-vision-forum"
} as const;


// Expected Outcomes
export const EXPECTED_OUTCOMES = [
  "AI4Humanity White Paper v2 — updated to address agent-level governance alongside human ethics",
  "AIGC Spotlight Awards",
  "Strengthened EU open-source AI ties at the critical pre-AI Act enforcement moment",
  "Concrete position on two-layer governance (human ethics + agent security)",
  "AIGC Spotlight Showcase featuring creative and technical works from the AI community"
] as const;

// Key References
export const KEY_REFERENCES = [
  { title: "Dan Shapiro — L0–L5 Framework", url: "#" },
  { title: "StrongDM Software Factory", url: "#" },
  { title: "Simon Willison — Software Factory Analysis", url: "#" },
  { title: "Stanford Law — Built by Agents, Tested by Agents", url: "#" },
  { title: "OWASP Agentic AI Top 10", url: "#" },
  { title: "AAIF (Agentic AI Foundation)", url: "#" },
  { title: "EU AI Act Full Text", url: "#" }
] as const;

export const COUNTDOWN_TARGET = new Date("2026-05-04T09:00:00+02:00"); // 9 AM CEST

// Draft schedule from PC planning document
export const SCHEDULE_OUTLINE = [
  { time: "08:30–09:00", title: "Registration & Coffee" },
  { time: "09:00–09:15", title: "Opening Remarks" },
  { time: "09:15–10:30", title: "Panel 1: Agentic AI Systems — Human–AI Symbiosis", subtitle: "Building the Agentic Ecosystem", format: "Keynote + Panel" },
  { time: "10:30–10:45", title: "Break" },
  { time: "10:45–12:00", title: "Panel 2: Agentic AI in Education", subtitle: "Learning, Creativity, and Real-World Use", format: "Keynote + Panel" },
  { time: "12:00–13:30", title: "Lunch + AIGC Spotlight Showcase", subtitle: "Creative & technical works from the AI community", format: "Demo showcase" },
  { time: "13:30–14:45", title: "Panel 3: Trusted Agentic AI", subtitle: "Governance, Safety, and Sovereignty", format: "Keynote + Panel" },
  { time: "14:45–15:00", title: "Break" },
  { time: "15:00–16:15", title: "Panel 4: Open Token & Digital Public Goods", subtitle: "Foundations for an Agentic Commons", format: "Keynote + Panel" },
  { time: "16:15–16:45", title: "Synthesis & Closing" },
  { time: "17:00–19:30", title: "Networking Dinner", subtitle: "Themed tables", format: "Networking" }
] as const;

// Paris 2026 Core Topics — Eight key themes framing the forum discussions
export const CORE_TOPICS = [
  { id: 1, topic: "Open Source → Open Intent", concept: "Strategic Shift", implication: "Focus shifts from code availability to purpose alignment" },
  { id: 2, topic: "Who Owns the Agent?", concept: "Ownership & Control", implication: "Defining rights and responsibilities in autonomous systems" },
  { id: 3, topic: "Claw Stack Architecture", concept: "Architecture", implication: "Standardizing modular, interoperable agent components" },
  { id: 4, topic: "Token Governance", concept: "Governance", implication: "Utilizing tokens for decentralized, community-aligned decision making" },
  { id: 5, topic: "Dark Factory & Trust", concept: "Trust & Security", implication: "Ensuring transparency and accountability in automated processes" },
  { id: 6, topic: "AI Factory vs. Open Ecosystem", concept: "Ecosystem Models", implication: "Contrasting centralized production with collaborative networks" },
  { id: 7, topic: "Orchestration Standardization", concept: "Standardization", implication: "Harmonizing how different agents and services interact" },
  { id: 8, topic: "Ethical Frameworks for AI", concept: "Ethics", implication: "Establishing guiding principles for responsible AI behavior" }
] as const;
