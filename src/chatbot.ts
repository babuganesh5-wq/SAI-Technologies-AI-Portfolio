// Ganesh Babu's Virtual Representative & Twin Chatbot Engine (Free Local AI Matcher)

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export const SUGGESTED_PROMPTS = [
  "What is Vibe Coding & AI Automation?",
  "Tell me about Ganesh Babu.",
  "Which courses can I book classes for?",
  "Tell me about your AWS Cloud MNC projects.",
  "How are the live sessions conducted?",
  "What is in your tech arsenal?"
];

// Context-aware replies representing Ganesh's persona
const CHATBOT_REPLIES = [
  {
    keywords: ["vibe", "vibe coding", "vibe code", "automation", "automate"],
    response: "Vibe Coding is the future of development! It's all about using advanced Generative AI tools (like Claude, Gemini, Cursor, Windsurf) to construct fully functional SaaS apps, dynamic websites, and custom mobile apps without getting bogged down by traditional syntax barriers. Code at the speed of thought, streamline workflows via n8n, and focus entirely on creation and scale. I teach this system step-by-step so you can start monetizing your digital products quickly!"
  },
  {
    keywords: ["who is", "who are you", "ganesh", "babu", "about", "expert"],
    response: "I'm Ganesh Babu, an AWS AI Cloud Consultant currently working on production MNC projects, and the founder of Sai Technologies. Over the last 8+ years, I transitioned from hardware engineering and systems administration into cloud architecture and AI automation. Now, I dedicate my weekends to training college students, professionals, and aspiring creators to build SaaS apps and master generative AI of the future!"
  },
  {
    keywords: ["class", "courses", "teach", "learn", "study"],
    response: "At Sai Technologies, I teach actionable, real-world skills: \n\n1. 🔥 Vibe Coding & AI Automation\n2. 🧠 Generative AI, Prompt Engineering & LLM APIs\n3. ☁️ AWS Cloud Core & Managed Services\n4. 💻 Full-Stack SaaS Development (React, Next.js, Node.js)\n5. 🤖 AI Automation Workflows (n8n, Zapier, Make)\n6. 🎯 1-on-1 Career Mentorship\n\nYou can easily reserve a 1-hour slot in my schedule under the 'Book Slot' section!"
  },
  {
    keywords: ["aws", "cloud", "mnc", "project", "infrastructure", "terraform"],
    response: "I architect high-performance, compliant environments on AWS using Infrastructure as Code (Terraform). My MNC projects deal with robust serverless APIs, container orchestrations (Docker/ECS/Kubernetes), secure credential handling, and AWS-managed AI services. I bring these same production-level DevOps and AI cloud architectures straight into our training sessions!"
  },
  {
    keywords: ["live", "session", "meet", "zoom", "class", "schedule", "discord"],
    response: "My live training is highly personalized! Classes are held on Saturdays and Sundays (flexible timings) and conducted recursively in high-definition video over your platform of choice (Google Meet, Zoom, WhatsApp, or Discord). These are 1-hour highly focused, project-based interactive slots. You don't just watch; you build alongside me and deploy real products!"
  },
  {
    keywords: ["book", "booking", "slot", "schedule", "reserve", "register"],
    response: "You can book your personal live session directly via the form on this website! Just scroll to the 'Book Slot' area, enter your credentials/day/time preference, and hit submit. It will prefill a neat template and open WhatsApp directly so we can instantly lock in your class. Try it out!"
  },
  {
    keywords: ["arsenal", "tech", "technology", "stack", "tool"],
    response: "My core arsenal spans:\n• AI: GPT-4, Claude 3.5, Gemini Pro, Midjourney, LangChain\n• Cloud: Comprehensive AWS (EC2, RDS, VPC, IAM), AI Services\n• Coding: React, Next.js, Next.js 15, FastAPI, Node.js, cursor\n• Automation: n8n, Make, browser automations\n• IaC & Infra: Terraform, Docker, CI/CD pipelines\n• Security: ISO 27001, Security auditing, IAM hardening"
  },
  {
    keywords: ["pricing", "cost", "price", "fee", "how much"],
    response: "My live session prices are highly affordable and customized based on your learning goals (single consultative call, comprehensive bootcamps, or weekly project supervision). Reach out directly on WhatsApp (+91 72007 47726) or book a slot so we can craft the best fit within your budget!"
  },
  {
    keywords: ["contact", "whatsapp", "meet", "zoom", "discord", "email", "phone", "number"],
    response: "Let's align your goals! You can reach me through:\n• 💬 WhatsApp: +91 72007 47726\n• 📞 Call: +91 72007 47726\n• ✉ Email: ganeshbabu0704@gmail.com\n• 👾 Discord Server: Live collaboration\n• 🎥 Google Meet or Zoom: Dedicated session link\n\nAll contact metrics are active in the Floating Dock or in the bottom Contact pane!"
  }
];

export function getCustomChatReply(query: string): string {
  const cleanQuery = query.toLowerCase().trim();

  // Search keywords in our list
  for (const reply of CHATBOT_REPLIES) {
    for (const key of reply.keywords) {
      if (cleanQuery.includes(key)) {
        return reply.response;
      }
    }
  }

  // Fallback smart response
  return "That's an interesting question! I am specializing in Vibe Coding, AWS Cloud Solutions, and AI Automation with n8n at Sai Technologies. Can we talk about building SaaS websites, booking a live Google Meet/Zoom/Discord session, or connecting on WhatsApp? Select one of the suggested prompts below, and I'll fill in the details!";
}
