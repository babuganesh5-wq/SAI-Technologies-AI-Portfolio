import React from "react";
import { motion } from "motion/react";
import {
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Award,
  ChevronRight,
  TrendingUp,
  Brain,
  Workflow,
  Smartphone,
  CheckCircle,
  MessageSquare,
  Calendar,
  Clock,
  Briefcase,
  Terminal,
  Activity,
  Github,
  Linkedin,
  Mail,
  User,
  ExternalLink,
  Laptop,
  ArrowUpRight,
  Crown,
  X
} from "lucide-react";

import { ParticleCanvas } from "./components/ParticleCanvas";
import { BookingForm } from "./components/BookingForm";
import { VirtualAIBot } from "./components/VirtualAIBot";
import { AWSCertifiedBadge } from "./components/AWSCertifiedBadge";
import { SaiLogo } from "./components/SaiLogo";
import { HeroBackground } from "./components/HeroBackground";

import {
  GANESH_HERO_IMAGE,
  GANESH_PROFILE_IMAGE,
  SAI_POSTER_IMAGE1
} from "./assets_base64";

export default function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const customStats = [
    { label: "Years Exp.", value: "8+" },
    { label: "Students Trained", value: "25+" },
    { label: "Technologies", value: "50+" }
  ];

  const categories = [
    { label: "☁️ AWS Cloud", icon: <Layers className="w-4 h-4 text-[#00d4ff]" /> },
    { label: "🧠 Generative AI", icon: <Brain className="w-4 h-4 text-[#8b5cf6]" /> },
    { label: "💻 Vibe Coding", icon: <Code2 className="w-4 h-4 text-[#00b8a9]" /> },
    { label: "🤖 AI Automation", icon: <Workflow className="w-4 h-4 text-[#e11d48]" /> }
  ];

  const featuresList = [
    {
      icon: "🚀",
      title: "SaaS Apps",
      desc: "Build & deploy fast"
    },
    {
      icon: "🤖",
      title: "AI Agents",
      desc: "Automate workflows"
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      desc: "Cross-platform builds"
    },
    {
      icon: "💰",
      title: "Monetize",
      desc: "Scale your income"
    }
  ];

  const careerSteps = [
    {
      date: "2016 — 2017",
      title: "Hardware Engineer",
      role: "Enterprise Infrastructure",
      desc: "Mastered IT operations, networks, data transfers, and hardware assets security."
    },
    {
      date: "2019 — 2022",
      title: "System Administrator",
      role: "Cloud Infrastructure & Compliance",
      desc: "Configured local firewalls, user permission logs, endpoint defense networks, and automated server workflows."
    },
    {
      date: "2023 — Present",
      title: "Lead Engineer & Consultant",
      role: "AWS AI Cloud MNC Projects",
      desc: "Leading server deployments, orchestration pipelines using Terraform (IaC), AWS guardrails, and managed AI pipelines for major multinational workloads."
    },
    {
      date: "Present",
      title: "AI Educator & Trainer",
      role: "Sai Technologies",
      desc: "Training the next generation of engineers in high-performance Vibe Coding techniques, prompt systems, and low-code orchestrations."
    }
  ];

  const stackArsenal = [
    {
      icon: "🧠",
      title: "Generative AI",
      items: ["Gemini / Claude / GPT", "Cursor / Windsurf AI", "LangChain / RAG", "Prompt Tuning & AI Agents"]
    },
    {
      icon: "☁️",
      title: "AWS Cloud Services",
      items: ["Managed Computing (EC2)", "Cloud Databases (RDS)", "VPC Networking & IAM", "AI Native Cloud SDKs"]
    },
    {
      icon: "💻",
      title: "Vibe Coding",
      items: ["TypeScript / React / Next.js", "Server Nodes & API frameworks", "Rapid Visual Prototypes", "Low-Code SaaS Orchestration"]
    },
    {
      icon: "🤖",
      title: "AI Automation",
      items: ["n8n Active Workflows", "Integration APIs", "Make / Zapier Pipes", "Asynchronous Voice Agents"]
    },
    {
      icon: "⚙️",
      title: "Tech Infrastructure",
      items: ["Terraform / IaC", "Docker Containment", "CI/CD Pipelines", "System Observability Logs"]
    },
    {
      icon: "🛡️",
      title: "Security & Audits",
      items: ["ISO 27001 Standards", "Firewalls / Threat Detection", "Credential Hardening", "Endpoint Compliance Logs"]
    }
  ];

  const customPosters = [
    {
      title: "Build, Automate & Scale",
      tech: "AWS & Generative AI Systems",
      desc: "A custom blueprint for engineering low-code visual automation pipelines in teams.",
      img: SAI_POSTER_IMAGE1
    },
    {
      title: "SaaS Vibe Development",
      tech: "Windsurf & React Schema",
      desc: "A comprehensive developer-focused low-code workshop generating real responsive columns.",
      img: SAI_POSTER_IMAGE1
    },
    {
      title: "Enterprise AI Workflows",
      tech: "n8n Pipelines & GuardDuty",
      desc: "Integrating support vectors, categorized slack triggers, and secrets securely.",
      img: SAI_POSTER_IMAGE1
    }
  ];

  return (
    <div className="bg-[#0a0a0f] text-white min-h-screen relative font-sans overflow-x-hidden selection:bg-[#00d4ff] selection:text-[#050508]">
      {/* Background Neural Canvas */}
      <ParticleCanvas />

      {/* Global Assistant ChatTwin */}
      <VirtualAIBot />

      {/* Fullscreen SAI TECHNOLOGIES Hero Landing Layout */}
      <section
        id="home"
        className="relative w-full h-screen overflow-hidden flex flex-col justify-between text-white font-inter"
      >
        {/* Animated Hero Background (replaces external video) */}
        <HeroBackground />

        {/* Global Overlaid Header Navbar */}
        <header className="relative z-25 w-full">
          <nav className="flex justify-between items-center px-6 sm:px-10 lg:px-16 py-5 lg:py-7">
            {/* Left: Brand Name */}
            <a href="#home" className="font-podium text-white font-bold uppercase text-xl sm:text-2xl lg:text-3xl tracking-wider select-none">
              SAI TECHNOLOGIES
            </a>

            {/* Center Links (Hidden below md) */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              <a href="#vibe" className="font-inter text-sm text-white/80 hover:text-white transition-all tracking-widest uppercase">
                Projects
              </a>
              <a href="#about" className="font-inter text-sm text-white/80 hover:text-white transition-all tracking-widest uppercase">
                Studio
              </a>
              <a href="#arsenal" className="font-inter text-sm text-white/80 hover:text-white transition-all tracking-widest uppercase">
                Offerings
              </a>
              <a href="#book" className="font-inter text-sm text-white/80 hover:text-white transition-all tracking-widest uppercase">
                Inquire
              </a>
            </div>

            {/* Right Link (Hidden below md) */}
            <div className="hidden md:block">
              <a
                href="#book"
                className="inline-flex items-center gap-1.5 border border-white/30 hover:border-white/60 px-6 py-3 text-xs tracking-widest uppercase hover:bg-white/10 transition-all font-inter"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Hamburger Menu (Visible below md) */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex flex-col justify-center items-center gap-1.5 cursor-pointer"
              aria-label="Open Menu"
            >
              <span className="block w-6 h-0.5 bg-white rounded-full"></span>
              <span className="block w-6 h-0.5 bg-white rounded-full"></span>
              <span className="block w-4 h-0.5 bg-white rounded-full self-start"></span>
            </button>
          </nav>
        </header>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col justify-between p-6 transition-all duration-500 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          {/* Header row */}
          <div className="flex justify-between items-center py-2 px-2">
            <span className="font-podium text-white font-bold uppercase text-lg sm:text-xl tracking-wider">
              SAI TECHNOLOGIES
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-white hover:text-gray-300 transition-all cursor-pointer"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Centered Vertically */}
          <div className="flex flex-col items-start gap-6 my-auto px-4">
            {[
              { label: "Projects", href: "#vibe" },
              { label: "Studio", href: "#about" },
              { label: "Offerings", href: "#arsenal" },
              { label: "Inquire", href: "#book" }
            ].map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-podium text-3xl sm:text-4xl text-white uppercase hover:text-[#00d4ff] transition-all"
                style={{
                  transitionDelay: `${i * 80 + 100}ms`,
                  transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                  opacity: menuOpen ? 1 : 0,
                  transitionProperty: "transform, opacity",
                  transitionDuration: "500ms"
                }}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#book"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center gap-1.5 border border-white/30 hover:border-white/60 px-6 py-3 text-xs tracking-widest uppercase hover:bg-white/10 transition-all font-inter"
              style={{
                transitionDelay: `${4 * 80 + 100}ms`,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: menuOpen ? 1 : 0,
                transitionProperty: "transform, opacity",
                transitionDuration: "500ms"
              }}
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Footer tag */}
          <div className="text-[10px] text-zinc-600 px-4">
            © 2026 SAI TECHNOLOGIES. All rights reserved.
          </div>
        </div>

        {/* Main Centered Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-center">
          <div className="max-w-2xl text-left select-none">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 mb-6 lg:mb-8 text-white/70 text-xs sm:text-sm font-inter tracking-[0.3em] uppercase animate-fade-up">
              <Crown className="w-4 h-4 text-white/70" />
              <span>World-Class Digital Collective</span>
            </div>

            {/* Heading */}
            <h1 className="font-podium text-white uppercase leading-[0.92] tracking-tight text-[clamp(2.8rem,8vw,7rem)] animate-fade-up-delay-1 mb-6 lg:mb-8">
              Design.<br />
              Disrupt.<br />
              Conquer.
            </h1>

            {/* Subtext */}
            <p className="text-white/70 text-sm sm:text-base font-inter leading-relaxed max-w-md mt-6 lg:mt-8 animate-fade-up-delay-2">
              We build fierce brand identities<br />
              that don't just turn heads -- <strong className="text-white font-bold">they lead.</strong>
            </p>

            {/* CTA Row */}
            <div className="mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6 animate-fade-up-delay-3">
              <a
                href="#vibe"
                className="group inline-flex items-center gap-2 bg-black hover:bg-neutral-900 px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase transition-all"
              >
                <span>SEE OUR WORK</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <div className="hidden sm:flex items-center gap-3">
                <Award className="w-8 h-8 text-white/50" />
                <div className="text-left">
                  <div className="text-white/60 text-xs font-bold tracking-wider uppercase">Top-Rated</div>
                  <div className="text-white/50 text-[10px] tracking-widest uppercase">Brand Studio</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-10 sm:pb-14 lg:pb-16 select-none">
          <div className="flex flex-wrap gap-8 sm:gap-12 lg:gap-16 pt-6 border-t border-white/10 animate-fade-up-delay-4">
            <div>
              <div className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">250+</div>
              <div className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">Brands Transformed</div>
            </div>
            <div>
              <div className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">95%</div>
              <div className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">Client Retention</div>
            </div>
            <div>
              <div className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">10+</div>
              <div className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">Years in the Game</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <section className="relative z-10 py-6 border-y border-[rgba(255,255,255,0.06)] bg-[#050508]/40 overflow-hidden w-full select-none">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {Array(4)
            .fill(null)
            .flatMap(() => categories)
            .map((cat, idx) => (
              <div key={idx} className="inline-flex items-center gap-2 mx-4 text-xs font-bold text-gray-300">
                {cat.icon}
                <span>{cat.label}</span>
              </div>
            ))}
        </div>
      </section>

      {/* Priority 1 - Vibe Coding Section */}
      <section id="vibe" className="relative z-10 py-20 px-4 md:px-8 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-block text-xs font-black text-[#00d4ff] uppercase tracking-[3px] border-b border-[#00d4ff] pb-1">
            Vibe Coding & AI
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Build. <span className="bg-gradient-to-r from-[#00d4ff] to-[#00b8a9] bg-clip-text text-transparent">Automate.</span> Earn More.
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Unleash the supreme combination of <strong className="text-white">vibe coding</strong> — construct multi-modal SaaS sites, custom browser automations, database connections, and mobile apps entirely with autonomous agents. 
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuresList.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#12121a] hover:bg-[#151522] border border-[rgba(255,255,255,0.06)] rounded-2xl p-5 text-center transition-all duration-300 hover:border-[rgba(0,212,255,0.2)] hover:-translate-y-1 block hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)]"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="text-xs sm:text-sm font-bold mb-1">{item.title}</h4>
              <p className="text-[10px] sm:text-xs text-gray-500 leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
          <a
            href="#book"
            className="w-full sm:w-auto py-3 px-6 rounded-full bg-[#00d4ff] text-slate-950 text-sm font-bold text-center tracking-wide hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
          >
            ☑ Start Vibe Coding — Book Now
          </a>
          <a
            href="https://wa.me/917200747726?text=Hi! I am interested in custom Vibe Coding automation courses."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto py-3 px-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold text-center flex items-center justify-center gap-2 transition-all"
          >
            💬 WhatsApp for Vibe Coding
          </a>
        </div>
      </section>

      {/* Poster Grid Segment */}
      <section className="relative z-10 py-16 px-4 md:px-8 max-w-6xl mx-auto space-y-10 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Designed to <span className="bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent">Inspire Developers</span>
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm">Glimpses into AWS deployment schema charts, Terraform orchestrations, and prompt pipelines.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {customPosters.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#12121a] border border-[rgba(255,255,255,0.06)] rounded-2xl overflow-hidden flex flex-col hover:border-[rgba(0,212,255,0.15)] transition-all group"
            >
              <div className="relative overflow-hidden aspect-video border-b border-[rgba(255,255,255,0.04)] bg-slate-950">
                {p.img.includes(".mp4") ? (
                  <video
                    src={p.img}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                ) : (
                  <img
                    src={p.img}
                    alt={p.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                )}
              </div>
              <div className="p-5 text-left flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="text-[10px] text-[#00d4ff] font-bold tracking-widest uppercase">{p.tech}</div>
                  <h4 className="text-sm font-bold text-white leading-tight">{p.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{p.desc}</p>
                </div>
                <a
                  href="#book"
                  className="mt-4 text-[11px] font-bold text-[#00d4ff] flex items-center gap-1 group-hover:text-white transition-all pt-2 border-t border-[rgba(255,255,255,0.03)]"
                >
                  <span>Inquire course syllabus</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-4 md:px-8 max-w-6xl mx-auto space-y-12">
        <div className="inline-block text-xs font-black text-[#00d4ff] uppercase tracking-[3px] border-b border-[#00d4ff] pb-1">
          About Me
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Portrait Card & Badge Column */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-center lg:items-stretch justify-center gap-6">
            
            {/* Portrait Photo Card */}
            <div className="relative group max-w-[270px] w-full flex flex-col">
              <div className="absolute inset-0 bg-[#00d4ff]/10 rounded-[32px] blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-300" />
              <div className="relative flex-1 rounded-3xl overflow-hidden bg-[#12121a] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[1.01] hover:border-[#00d4ff]/30 flex flex-col">
                <div className="relative w-full aspect-square overflow-hidden bg-slate-950">
                  <img
                    src={GANESH_HERO_IMAGE}
                    alt="Ganesh Babu"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02]"
                  />
                  
                  {/* Floating status tag */}
                  <span className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md border border-[#00b8a9]/40 text-[#00b8a9] font-black text-[9px] px-2.5 py-0.5 rounded-full tracking-wider shadow">
                    CEO & FOUNDER • SAI TECH
                  </span>
                </div>
                
                <div className="p-4 bg-slate-900/90 backdrop-blur-md flex-1 flex items-center gap-3 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full border-2 border-[#00d4ff] overflow-hidden relative shadow">
                    <img
                      src={GANESH_PROFILE_IMAGE}
                      alt="Avatar"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">Ganesh Babu</h4>
                    <p className="text-[10px] text-gray-400">CEO & Founder, SAI TECHNOLOGIES</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AWS Interactive Certified Badge */}
            <div className="w-full max-w-[245px] flex flex-col justify-center">
              <AWSCertifiedBadge />
            </div>

          </div>
          
          {/* Text Biography Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight leading-tight">
                Meet <span className="bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent">Ganesh Babu</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed text-left">
                I am an AI Vibe Coder, <strong className="text-[#00d4ff] font-bold">AWS Cloud MNC Consultant</strong>, and Automation Specialist based in India. I help software teams and individuals construct low-code platforms and AI automation pipelines without getting bogged down by traditional programming complexity.<br /><br />
                Over the last 8 years, my trajectory has spanned hardware engineer support networks, firewall administration, system audits, and comprehensive AWS migrations — equipping me with the solid enterprise diagnostics required to architect zero-defect automated workflows on n8n and modern architectures today.<br /><br />
                Currently, I consult on high-performance AWS configurations and Managed AI cloud projects in MNC architectures. Over weekends with <strong className="text-white">Sai Technologies</strong>, I teach individuals how to leverage Windsurf, React schemas, and browser automations. Let's make complex tech look and feel simple.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Telemetry Panel */}
              <div className="bg-[#12121a] border border-[rgba(255,255,255,0.06)] rounded-2xl p-5 space-y-3 text-left">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Quick Telemetry</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs py-1 border-b border-[rgba(255,255,255,0.03)]">
                    <span className="text-gray-500">Industry:</span>
                    <span className="font-semibold">IT & Cloud Systems</span>
                  </div>
                  <div className="flex justify-between text-xs py-1 border-b border-[rgba(255,255,255,0.03)]">
                    <span className="text-gray-500">Live Channels:</span>
                    <span className="font-semibold text-emerald-400">Meet, Zoom, WhatsApp</span>
                  </div>
                  <div className="flex justify-between text-xs py-1">
                    <span className="text-gray-500">Trained:</span>
                    <span className="font-semibold">25+ Students</span>
                  </div>
                </div>
              </div>
              
              {/* Profile Contact Actions */}
              <div className="flex flex-col justify-center gap-3">
                <a
                  href="https://wa.me/917200747726"
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-6 rounded-full bg-emerald-600 hover:bg-emerald-500 font-bold text-xs transition-all flex items-center justify-center gap-1.5 text-center"
                >
                  💬 WhatsApp
                </a>
                <a
                  href="mailto:ganeshbabu0704@gmail.com"
                  className="py-3 px-6 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] font-semibold text-xs text-gray-300 transition-all hover:bg-[rgba(255,255,255,0.06)] text-center"
                >
                  ✉ Email Ganesh
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Career Timeline Section */}
      <section id="career" className="relative z-10 py-16 px-4 md:px-8 max-w-5xl mx-auto space-y-12">
        <div className="space-y-2">
          <div className="inline-block text-xs font-black text-[#00d4ff] uppercase tracking-[3px] border-b border-[#00d4ff] pb-1">
            Career Path
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight leading-tight">
            Career <span className="bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent">Telemetry</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm">A solid journey from local hardware configurations to low-code deployments on AWS Cloud.</p>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-gradient-to-b from-[#00d4ff] to-[#8b5cf6] space-y-10">
          {careerSteps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0a0a0f] border-4 border-[#00d4ff] shadow-[0_0_15px_rgba(0,212,255,0.6)] group-hover:scale-110 transition-all" />
              <div className="bg-[#12121a] border border-[rgba(255,255,255,0.06)] rounded-2xl p-5 sm:p-6 space-y-2 transition-all hover:border-[rgba(0,212,255,0.15)] max-w-3xl">
                <div className="text-[10px] text-[#00d4ff] font-bold uppercase tracking-wider">{step.date}</div>
                <h4 className="text-base font-bold text-white">{step.title}</h4>
                <div className="text-xs text-[#00b8a9] font-medium">{step.role}</div>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed pt-1.5 border-t border-[rgba(255,255,255,0.03)] mx-0">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Arsenal Section */}
      <section id="arsenal" className="relative z-10 py-16 px-4 md:px-8 max-w-5xl mx-auto space-y-10">
        <div className="space-y-2 text-center">
          <div className="inline-block text-xs font-black text-[#00d4ff] uppercase tracking-[3px] border-b border-[#00d4ff] pb-1">
            My Arsenal
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">
            Tools I <span className="bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent">Teach & Use</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto">From cloud containment schemas to fine-tuning pipelines — these are the elements of the automation future.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackArsenal.map((stack, idx) => (
            <div
              key={idx}
              className="bg-[#12121a] border border-[rgba(255,255,255,0.06)] rounded-2xl p-6 space-y-4 hover:border-[rgba(0,212,255,0.15)] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] group-hover:border-[rgba(0,212,255,0.2)] flex items-center justify-center text-2xl transition-all">
                {stack.icon}
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white leading-tight">{stack.title}</h4>
                <ul className="space-y-1.5">
                  {stack.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-xs text-gray-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Sessions Details */}
      <section id="sessions" className="relative z-10 py-16 px-4 md:px-8 max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <div className="inline-block text-xs font-black text-[#00d4ff] uppercase tracking-[3px] border-b border-[#00d4ff] pb-1">
            Live Google Meet, Zoom & Discord Sessions
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">
            How We <span className="bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent">Learn Together</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm">Flexible interactiveness structured around low-code deployment objectives.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#12121a] border border-[rgba(255,255,255,0.06)] rounded-2xl p-5 text-center space-y-2">
            <div className="text-3xl">🎥</div>
            <h4 className="text-xs font-bold text-white">Meet, Zoom & Discord</h4>
            <p className="text-[10px] text-gray-500 leading-tight">Zero latency audio/video screen sharing pipelines</p>
          </div>

          <div className="bg-[#12121a] border border-[rgba(255,255,255,0.06)] rounded-2xl p-5 text-center space-y-2">
            <div className="text-3xl">⏱️</div>
            <h4 className="text-xs font-bold text-white">1 Hour Classes</h4>
            <p className="text-[10px] text-gray-500 leading-tight">Intrinsically packed, focused modular classes</p>
          </div>

          <div className="bg-[#12121a] border border-[rgba(255,255,255,0.06)] rounded-2xl p-5 text-center space-y-2">
            <div className="text-3xl">📅</div>
            <h4 className="text-xs font-bold text-white">Sat & Sun</h4>
            <p className="text-[10px] text-gray-500 leading-tight">Flexible weekend morning & evening timings</p>
          </div>

          <div className="bg-[#12121a] border border-[rgba(255,255,255,0.06)] rounded-2xl p-5 text-center space-y-2">
            <div className="text-3xl">🎯</div>
            <h4 className="text-xs font-bold text-white">Project-Based</h4>
            <p className="text-[10px] text-gray-500 leading-tight">Instructing via building, testing and hosting SaaS apps</p>
          </div>
        </div>
      </section>

      {/* Interactive Booking Slot Section */}
      <section id="book" className="relative z-10 py-16 px-4 md:px-8 max-w-5xl mx-auto space-y-8 text-center">
        <div className="space-y-2">
          <div className="inline-block text-xs font-black text-[#00d4ff] uppercase tracking-[3px] border-b border-[#00d4ff] pb-1">
            Book Slot
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">
            Reserve Your <span className="bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent">Custom Consultation</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm">Flexible 1-on-1 calls. Perfect for developers, students, or managers planning automation workflows.</p>
        </div>

        {/* Modular Reactive Booking Form */}
        <BookingForm />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-16 px-4 md:px-8 max-w-3xl mx-auto text-center space-y-6">
        <div className="space-y-2">
          <div className="inline-block text-xs font-black text-[#00d4ff] uppercase tracking-[3px] border-b border-[#00d4ff] pb-1">
            Get In touch
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">
            Let's <span className="bg-gradient-to-r from-[#00d4ff] to-[#00b8a9] bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm">Ready to integrate SaaS systems, AI agents, or book direct weekly mentorships? Get in touch.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/917200747726"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 py-3 px-6 rounded-full bg-[#12121a] hover:bg-[#151522] border border-[rgba(255,255,255,0.06)] hover:border-[#00d4ff] text-xs font-bold tracking-wide transition-all"
          >
            <span>💬 WhatsApp</span>
          </a>
          <a
            href="tel:+917200747726"
            className="flex items-center gap-2 py-3 px-6 rounded-full bg-[#12121a] hover:bg-[#151522] border border-[rgba(255,255,255,0.06)] hover:border-[#00d4ff] text-xs font-bold tracking-wide transition-all"
          >
            <span>📞 Call direct</span>
          </a>
          <a
            href="mailto:ganeshbabu0704@gmail.com"
            className="flex items-center gap-2 py-3 px-6 rounded-full bg-[#12121a] hover:bg-[#151522] border border-[rgba(255,255,255,0.06)] hover:border-[#00d4ff] text-xs font-bold tracking-wide transition-all"
          >
            <span>✉ Email Support</span>
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 py-3 px-6 rounded-full bg-[#12121a] hover:bg-[#151522] border border-[rgba(255,255,255,0.06)] hover:border-[#00d4ff] text-xs font-bold tracking-wide transition-all"
          >
            <span>👾 Discord Server</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-[rgba(255,255,255,0.06)] bg-[#050508]/60 flex flex-col items-center justify-center space-y-4">
        <SaiLogo className="justify-center" />
        <div className="text-center space-y-1">
          <p className="text-[10px] text-gray-500 max-w-md mx-auto">
            Authorized Vibe Coding and AI automation architectures. Safe-harbor registered & patent-pending protocols apply.
          </p>
          <p className="text-[9px] text-gray-600">
            © 2026 Sai Technologies. All rights reserved. ® and ™ denote registered trademarks.
          </p>
        </div>
      </footer>
    </div>
  );
}
