import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini LLM client lazily and safely
let ai: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
      ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
  }
  return ai;
}

// System Persona instructions for Babu Ganesh S's Virtual representation
const CHATBOT_PERSONA = `
You are the virtual AI Twin of Babu Ganesh S, a highly skilled Software Development & AI Solutions Engineer specializing in Cloud Systems, AI/ML integrations, and premium full-stack architectures.
Your purpose is to chat with recruiters, system integrators, and visitors on Babu's portfolio website.

Here is Babu's official professional profile:
- Name: Babu Ganesh S
- Role: AI Solutions Architect & Full-Stack Systems Engineer
- Core Strengths: System Integration, Custom LLM Pipelines, AWS Orchestration, Interactive Frontends (React & Tailwind), and automated workflow pipelines.
- GitHub: https://github.com/babuganesh5
- LinkedIn: https://www.linkedin.com/in/babuganesh-s-a7a508b1/
- Technical Stack:
  * Languages: TypeScript, JavaScript, Python, SQL, C++, Bash
  * Frontend: React 19/18, Next.js, Tailwind CSS, GSAP, HTML5 Canvas
  * Cloud & Integration: AWS, Node.js, Express, Fastify, Docker, serverless Lambdas
  * Artificial Intelligence: Gemini API (SDK @google/genai), OpenAI API, Vector Databases (Pinecone)

Tone guidelines:
- Be incredibly tech-savvy, warm, professional, modern, and highly engaging.
- Highlight Babu's real-life skills, solid technical training, and system integration background.
- Keep responses brief and scannable. Use clear Markdown lists or code snippets when explaining technical architectures.
- Do not introduce yourself with long, generic greetings. Focus on proving Babu's domain expertise!
`;

// API Routes
app.post("/api/chat", async (req, res) => {
  const { messages, provider = "gemini" } = req.body;
  
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages structure provided." });
  }

  const lastUserMessage = messages[messages.length - 1]?.content || "Hello";

  // --- OpenAI Provider Integration ---
  if (provider === "openai") {
    const openAiKey = process.env.OPENAI_API_KEY;
    if (openAiKey && openAiKey !== "MY_OPENAI_API_KEY" && openAiKey.trim().length > 0) {
      try {
        const formattedMessages = [
          { role: "system", content: CHATBOT_PERSONA },
          ...messages.map((m: any) => ({
            role: m.role === "assistant" ? "assistant" : "user",
            content: m.content
          }))
        ];

        const openAiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${openAiKey}`
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: formattedMessages,
            temperature: 0.7
          })
        });

        if (openAiResponse.ok) {
          const openAiData = await openAiResponse.json();
          const text = openAiData.choices?.[0]?.message?.content || "I was unable to formulate an OpenAI response.";
          return res.json({ text, provider: "openai" });
        } else {
          const errText = await openAiResponse.text();
          console.warn("OpenAI API call failed, falling back or returning error. Status:", openAiResponse.status, errText);
        }
      } catch (err: any) {
        console.error("OpenAI Endpoint error:", err);
      }
    }

    // Fallback if OpenAI key is not set or failed:
    // Try Gemini if available, otherwise return descriptive mock
    const geminiClient = getGeminiClient();
    if (!geminiClient) {
      const mockResponse = `Hello! I am Babu's AI Twin. You selected OpenAI, but the API Key is not set in Settings > Secrets. Here is an overview: I specialize in Cloud Systems, AI/ML pipelines, custom React structures, and robust System Integrations! Let me know if you want to explore my work or contact me!`;
      return res.json({ text: mockResponse, isFallback: true, provider: "openai-offline" });
    }
  }

  // --- Gemini Provider Integration (Default) ---
  const client = getGeminiClient();

  if (!client) {
    // Graceful fallback when the API key is not configured yet
    let mockResponse = "Hello! I am Babu Ganesh's Virtual AI Twin. It seems my Gemini API Key is not fully active yet. Let me help you anyway! I specialize in full-stack engineering, AWS Cloud systems, and customized Gemini & OpenAI pipelines. Check out my Bento dashboard below!";
    if (lastUserMessage.toLowerCase().includes("project") || lastUserMessage.toLowerCase().includes("work")) {
      mockResponse = "I have several advanced live portfolios such as 'AI Music Academy' and the 'AWS Arch visualizer' right in the bento grid below! Explore them to see real-time updates.";
    } else if (lastUserMessage.toLowerCase().includes("contact") || lastUserMessage.toLowerCase().includes("hire")) {
      mockResponse = "I am always looking forward to exciting new engagements, custom system integration works, or full-time roles. Use the 'Connect' panel or email me at babuganesh5@gmail.com!";
    }
    return res.json({ text: mockResponse, isFallback: true, provider: "gemini-offline" });
  }

  try {
    // Prepare conversation contents format for @google/genai SDK
    const contents = messages.map((m: any) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction: CHATBOT_PERSONA,
        temperature: 0.7,
      },
    });

    const text = response.text || "I was unable to formulate a response. Please ask again!";
    res.json({ text, provider: "gemini" });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Unable to process message stream via Gemini.", details: error.message });
  }
});

// Mock Contact Endpoint for rich interaction
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required contact form fields." });
  }
  // Simulate successful mail dispatch with a customizable professional response
  res.json({
    success: true,
    message: `Thank you for reaching out, ${name}! Your request has been acknowledged. Babu Ganesh S will respond to you at ${email} shortly.`,
  });
});

// Setup Vite Dev server or production static serving
async function initializeServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] Portfolio running on http4://localhost:${PORT}`);
  });
}

initializeServer().catch((err) => {
  console.error("Failed to start fullstack portfolio server:", err);
});
