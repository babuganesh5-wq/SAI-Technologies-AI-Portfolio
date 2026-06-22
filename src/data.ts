import { Project, SkillGroup, Testimonial } from "./types";

export const SHOWCASE_PROJECTS: Project[] = [
  {
    id: "ai-music",
    title: "AI Music Academy",
    description: "Interactive synthetic intelligence translating vocal hums and raw melodies into layered orchestration using Gemini music models.",
    longDescription: "A cutting-edge web platform leveraging LLM audio modalities to analyze input sounds, extract pitches, and arrange them into beautiful piano, synth, or classical backings. Built with real-time audio visualization using modern HTML5 Canvas, high-performance Wav audio rendering, and responsive player controls.",
    tech: ["React", "Fastify", "Gemini API", "Web Audio API", "HTML5 Canvas"],
    category: "ai",
    stats: { label: "Syntheses", value: "124K+" },
    features: [
      "Real-time mic frequency pitch mapping and MIDI mapping.",
      "Custom neural synthesizer rendering zero-latency wave charts.",
      "One-click arrangement export to standard MIDI and audio files."
    ]
  },
  {
    id: "aws-architect",
    title: "AWS Architect Portfolio",
    description: "Automated real-time cloud infrastructure diagnostic pipeline and visualizer showcasing interactive node statuses, performance heatmaps, and simulated logs.",
    longDescription: "An immersive graphical simulation of cloud deployment structures. It charts security configurations, live container memory pools, microservice connections, and serverless response latency distributions dynamically to make diagnostic insights visible at a glance.",
    tech: ["Svelte/React", "Node.js", "AWS CloudWatch API", "D3.js", "Docker"],
    category: "cloud",
    stats: { label: "API Latency", value: "14ms" },
    features: [
      "Dynamic auto-layout topological graph connecting clients, API gateways, Lambdas, and DBs.",
      "Live terminal diagnostics logging network throughput, autoscaling triggers, and container metrics.",
      "Simulated load injection controls to trigger mock alarms and scaling thresholds visually."
    ]
  },
  {
    id: "saas-builder",
    title: "SaaS Formify Builder",
    description: "Low-code visual schema constructor generating direct React/Tailwind fields and clean instant persistent SQL columns.",
    longDescription: "An ergonomic form builder crafted for developers. Design complex nested layout questionnaires, multi-page quizzes, or database ingestion fields, and compile them instantly into high-performance TypeScript code or embeddable links.",
    tech: ["React 19", "Tailwind CSS", "Prisma", "PostgreSQL", "Zod Schema"],
    category: "saas",
    stats: { label: "Created Forms", value: "8.4K" },
    features: [
      "Beautiful drag-and-drop node grid with alignment rails and snap-to guidelines.",
      "Instant schema generator with schema visualization and real-time typescript exports.",
      "Embedded script tags supporting client-side validation, dark themes, and rate limits out-of-the-box."
    ]
  },
  {
    id: "ai-agents",
    title: "AI Agents Coordination Hub",
    description: "Multi-agent coordinator orchestrating asynchronous research, web crawls, and layout drafts through atomic task execution lists.",
    longDescription: "An enterprise workflow planner orchestrating teams of specialized agents. Each worker carries custom prompt memories, writes markdown logs, performs actions on mock filesystems, and peer-reviews code snippets automatically before merging.",
    tech: ["Python", "FastAPI", "Gemini Pro", "ChromaDB", "WebSockets"],
    category: "ai",
    stats: { label: "Daily Crawls", value: "480K" },
    features: [
      "Interactive flowcharts charting current coordinator decisions and research branches.",
      "Human-in-the-loop task audit panel to pause, inspect, and redirect agent actions.",
      "Semantic similarity visualizer outlining document vector distribution clusters."
    ]
  },
  {
    id: "n8n-automations",
    title: "n8n Customer Gateway Pipeline",
    description: "Corporate automated workflows integrating CRM, chat, and email with automated AI category routing and response draft generation.",
    longDescription: "An enterprise integration workflow mapping custom webhooks onto customer relationship backends. It screens customer questions, summarizes tickets, flags priority triggers, and drafts email drafts automatically to optimize service desk delivery.",
    tech: ["n8n", "Node.js", "PostgreSQL", "Slack API", "OpenAI"],
    category: "automation",
    stats: { label: "Tickets Saved", value: "32K" },
    features: [
      "Intelligent text classification utilizing embedding distance and vector lookups.",
      "Automatic ticket prioritizing based on customer sentiments and contract tags.",
      "Secure encrypted credential secrets management with live diagnostics logging."
    ]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend & Interface Design",
    skills: [
      { name: "React 19 / Next.js", level: 96 },
      { name: "Tailwind CSS", level: 98 },
      { name: "TypeScript", level: 95 },
      { name: "HTML5 Canvas / SVG Canvas", level: 90 },
      { name: "Framer Motion", level: 92 }
    ]
  },
  {
    category: "Backend & Systems Architecture",
    skills: [
      { name: "Node.js / Express / Fastify", level: 94 },
      { name: "AWS Cloud Infrastructure", level: 90 },
      { name: "PostgreSQL & SQLite", level: 88 },
      { name: "Docker & Container Deployment", level: 85 },
      { name: "Redis Caching Engine", level: 80 }
    ]
  },
  {
    category: "AI & Workflow Automation",
    skills: [
      { name: "Gemini / LLM SDKs", level: 95 },
      { name: "Vector Search (Pinecone)", level: 84 },
      { name: "n8n Active Pipelines", level: 92 },
      { name: "LangChain / AI Agent Systems", level: 88 }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "VP of Product",
    company: "DevStream Interactive",
    content: "Babu has an incredible eye for technical craft. He didn't just write clean, bulletproof Next.js code; he helped design our entire serverless media ingestion pipeline. His Virtual Gemini avatar is a perfect simulation of his active, analytical mind!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120"
  },
  {
    name: "Marcus Vance",
    role: "Engineering Director",
    company: "Stripe Integrations Group",
    content: "Babu and I worked closely on redesigning our checkout dashboard widgets. The speed of his execution and deep familiarity with Tailwind CSS, React transitions, and responsive optimization makes him a premium addition to any top-tier product team.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
  },
  {
    name: "Elena Rostova",
    role: "Principal AI Architect",
    company: "Synapse Labs",
    content: "When we needed high-performance AI agent integrations, Babu built containerized tasks on AWS with low-latency LLM stream endpoints inside a few days. His Bento architecture and interactive visualizer code became our internal standard.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120"
  }
];

export const CHATBOT_SUGGESTED_PROMPTS = [
  "What is Babu's experience with AI platforms?",
  "Tell me about the AI Music Academy showcase.",
  "Is Babu open to remote contract opportunities?",
  "What cloud and AWS architectures does Babu build?"
];
