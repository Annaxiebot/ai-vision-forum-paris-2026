// AI Vision Forum Paris 2026 - Event Constants

export const EVENT_CONFIG = {
  name: "AI Vision Forum Paris 2026",
  tagline: "Architecting Human-AI Synergy",
  date: "2026-05-05", // May 5, 2026
  dateDisplay: "May 5, 2026",
  location: {
    city: "Paris",
    country: "France",
    venue: "Vacielle Palace",
    colocated: "GOSIM Paris 2026"
  },
  scale: "100-150 participants",
  format: "Invitation-only",
  rule: "Chatham House Rule",
  domain: "paris2026.visionforum.ai"
} as const;

export const TRACKS = [
  {
    id: 1,
    title: "AI for Education & Creativity",
    icon: "🎓",
    description: "Reshaping education through generative AI and creative learning experiences",
    color: "primary" as const,
    keywords: ["Education", "Creative Learning", "AI Pedagogy"] as const,
    highlight: false
  },
  {
    id: 2,
    title: "Vibe Coding & Agentic Open-Source Development",
    icon: "💻",
    description: "Featuring Cello project: autonomous coding agents, Rust rewrites, and the future of development",
    color: "secondary" as const,
    keywords: ["Cello", "Autonomous Agents", "Open Source", "Rust"] as const,
    highlight: true // Featured track
  },
  {
    id: 3,
    title: "Governing Autonomous AI",
    icon: "⚖️",
    description: "AI Act implementation, autonomous agent ethics, and governance frameworks",
    color: "accent" as const,
    keywords: ["Governance", "Ethics", "AI Act", "Policy"] as const,
    highlight: false
  },
  {
    id: 4,
    title: "Agentic Open Source Foundations & AI as Global Public Good",
    icon: "🌍",
    description: "Multi-stakeholder collaboration, digital public goods, and AI for humanity",
    color: "primary" as const,
    keywords: ["Open Source", "Public Good", "Collaboration", "Foundation Models"] as const,
    highlight: false
  }
] as const;

export const ORGANIZERS = {
  boardOfAdvisors: [
    {
      name: "Jesse McCrosky",
      affiliation: "Egen",
      role: "Board of Advisors"
    },
    {
      name: "Emily Chen",
      affiliation: "KAIYUANSHE",
      role: "Board of Advisors"
    }
  ],
  programCommittee: [] // TBA - recruiting from Hangzhou 2025 alumni
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

export const WORKING_GROUPS = [
  {
    id: 1,
    name: "AI for Education",
    description: "Exploring AI's role in transforming learning and creative pedagogy"
  },
  {
    id: 2,
    name: "Open Source AI",
    description: "Building sustainable open-source AI ecosystems"
  },
  {
    id: 3,
    name: "AI Governance",
    description: "Developing frameworks for responsible AI development"
  },
  {
    id: 4,
    name: "AI for Public Good",
    description: "Advancing AI as a global digital public good"
  },
  {
    id: 5,
    name: "Agentic Development",
    description: "Pioneering autonomous coding and development tools"
  },
  {
    id: 6,
    name: "AI Safety & Ethics",
    description: "Ensuring safe and ethical AI deployment"
  }
] as const;

export const COUNTDOWN_TARGET = new Date("2026-05-05T09:00:00+02:00"); // 9 AM CEST

// Placeholder schedule (to be finalized)
export const SCHEDULE_OUTLINE = [
  { time: "09:00", title: "Registration & Welcome Coffee" },
  { time: "09:30", title: "Opening Remarks" },
  { time: "10:00", title: "Keynote: The Agentic Future" },
  { time: "11:00", title: "Track Sessions Begin" },
  { time: "12:30", title: "Lunch & AIGC Spotlight" },
  { time: "14:00", title: "Afternoon Track Sessions" },
  { time: "16:00", title: "Panel Discussion: Agents & Humanity" },
  { time: "17:30", title: "Closing Remarks" },
  { time: "18:30", title: "Networking Dinner" }
] as const;
