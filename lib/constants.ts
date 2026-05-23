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
  domain: "paris2026.visionforum.ai",
  // Lifecycle state. Drives countdown vs. archive rendering across the site.
  // Switch to 'completed' after the forum concludes.
  status: "completed" as "upcoming" | "completed",
  // Post-event archive assets (self-hosted under public/).
  // PDF only — Word/.docx versions retired per Organizing Committee decision.
  reportUrl: "/reports/forum-report.pdf",
  reportUrlZh: "/reports/forum-report-zh.pdf",
  recapPosterUrl: "/images/infographics/panel-1.png",
  ogImageUrl: "/images/infographics/panel-1.png",
  media: {
    en: {
      videos: [
        {
          url: "/media/paris-2026-overview-en.mp4",
          title: "Human–AI Synergy: 2026 Vision",
          duration: "9:24",
          size: "45 MB",
          description: "Visual summary of the day's four panels and the Paris Initiative.",
          featured: true,
        },
        {
          url: "/media/paris-2026-trailer-en.mp4",
          title: "AI Vision Forum 2026 — Short Trailer",
          duration: "1:38",
          size: "10 MB",
          description: "Ninety-second teaser of the forum's headline themes.",
        },
      ],
      audios: [
        {
          url: "/media/paris-2026-trust-en.m4a",
          title: "Engineered Trust in the Agentic Era",
          duration: "22:05",
          size: "41 MB",
          description: "Long-form audio deep dive on verification, trust, and the deterministic control plane.",
          featured: true,
        },
        {
          url: "/media/paris-2026-economy-en.m4a",
          title: "The Paris 2026 Agentic Economy",
          duration: "23:44",
          size: "44 MB",
          description: "Deep dive on the Token-as-infrastructure thesis and the closing Paris Initiative.",
        },
        {
          url: "/media/paris-2026-shift-en.m4a",
          title: "The Shift to the Agentic Economy",
          duration: "19:35",
          size: "36 MB",
          description: "A twenty-minute take on the CLAW stack and the move beyond LAMP.",
        },
      ],
    },
    zh: {
      videos: [
        {
          url: "/media/paris-2026-overview-zh.mp4",
          title: "2026 巴黎 AI 愿景论坛:构建人机协同",
          duration: "9:54",
          size: "63 MB",
          description: "全天四个分论坛与《巴黎倡议》的视觉概览。",
          featured: true,
        },
        {
          url: "/media/paris-2026-policy-brief-zh.mp4",
          title: "架构人机协同:战略政策简报",
          duration: "6:54",
          size: "34 MB",
          description: "面向决策者的简要政策版本。",
        },
      ],
      audios: [
        {
          url: "/media/paris-2026-verification-zh.m4a",
          title: "加密验证与认知摩擦",
          duration: "2:09",
          size: "4 MB",
          description: "关于验证、可信与认知摩擦的短片。",
          featured: true,
        },
        {
          url: "/media/paris-2026-verification-short-zh.m4a",
          title: "硬核验证与认知阻力",
          duration: "1:18",
          size: "2 MB",
          description: "验证主题的更短版本。",
        },
      ],
    },
  },
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
    keywords: ["Public AI Tokens", "Public Goods", "Sustainable Models", "Open-Source Governance"] as const,
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
    governanceGap: "Just as the LAMP era had the Linux Foundation to coordinate open-source development, the Claw era needs neutral, community-driven foundations to coordinate the agentic stack."
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
