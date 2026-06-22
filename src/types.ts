export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: "ai" | "cloud" | "saas" | "automation";
  github?: string;
  demo?: string;
  stats?: { label: string; value: string };
  longDescription?: string;
  features?: string[];
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number }[];
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}
