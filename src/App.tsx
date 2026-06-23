import React, { useRef, useState, useEffect } from "react";
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
  X,
  ShieldCheck,
  Send
} from "lucide-react";

import { ParticleCanvas } from "./components/ParticleCanvas";
import { BookingForm } from "./components/BookingForm";
import { VirtualAIBot } from "./components/VirtualAIBot";
import { AWSCertifiedBadge } from "./components/AWSCertifiedBadge";
import { SaiLogo } from "./components/SaiLogo";
import { Header } from "./components/Header";
import { ThreeHeroMesh } from "./components/ThreeHeroMesh";
import { ThreeFooterMesh } from "./components/ThreeFooterMesh";
import { ServiceTabs } from "./components/ServiceTabs";

// GSAP Import
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  GANESH_HERO_IMAGE,
  GANESH_PROFILE_IMAGE,
  SAI_POSTER_IMAGE1
} from "./assets_base64";

export default function App() {
  const [lang, setLang] = useState<"en" | "ta">("en");
  const [slideX, setSlideX] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);

  const customStats = [
    { label: lang === "en" ? "Years Exp." : "ஆண்டுகள் அனுபவம்", value: "8+" },
    { label: lang === "en" ? "Students Trained" : "மாணவர்கள் பயிற்சி", value: "25+" },
    { label: lang === "en" ? "Technologies" : "தொழில்நுட்பங்கள்", value: "50+" }
  ];

  const categoriesEn = [
    { label: "AWS CLOUD", icon: "☁️" },
    { label: "GENERATIVE AI", icon: "🧠" },
    { label: "VIBE CODING", icon: "💻" },
    { label: "AI AUTOMATION", icon: "🤖" }
  ];

  const categoriesTa = [
    { label: "AWS கிளவுட்", icon: "☁️" },
    { label: "உருவாக்க AI", icon: "🧠" },
    { label: "வைப்கோடிங்", icon: "💻" },
    { label: "AI ஆட்டோமேஷன்", icon: "🤖" }
  ];

  const categories = lang === "ta" ? categoriesTa : categoriesEn;

  const careerStepsEn = [
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
      date: "2024 — Present",
      title: "AI Educator & Trainer",
      role: "Sai Technologies",
      desc: "Training the next generation of engineers in high-performance Vibe Coding techniques, prompt systems, and low-code orchestrations."
    }
  ];

  const careerStepsTa = [
    {
      date: "2016 — 2017",
      title: "வன்பொருள் பொறியாளர்",
      role: "நிறுவன உள்கட்டமைப்பு",
      desc: "தகவல் தொழில்நுட்ப செயல்பாடுகள், நெட்வொர்க்குகள், தரவு இடமாற்றங்கள் மற்றும் வன்பொருள் சொத்துக்களின் பாதுகாப்பு ஆகியவற்றில் தேர்ச்சி பெற்றேன்."
    },
    {
      date: "2019 — 2022",
      title: "கணினி நிர்வாகி",
      role: "கிளவுட் உள்கட்டமைப்பு & இணக்கம்",
      desc: "உள்ளூர் ஃபயர்வால்கள், பயனர் அனுமதி பதிவுகள், இறுதிப்புள்ளி பாதுகாப்பு நெட்வொர்க்குகள் மற்றும் தானியங்கு சேவையக பணிப்பாய்வுகளை கட்டமைத்தேன்."
    },
    {
      date: "2023 — தற்போது வரை",
      title: "முதன்மை பொறியாளர் & ஆலோசகர்",
      role: "AWS AI கிளவுட் MNC திட்டங்கள்",
      desc: "டெர்ராபார்ம் (IaC), AWS பாதுகாப்பு விதிகள் மற்றும் பெரிய பன்னாட்டு நிறுவன பணிச்சுமைகளுக்கான நிர்வகிக்கப்பட்ட AI குழாய்களைப் பயன்படுத்தி கிளவுட் வரிசைப்படுத்தல்களை வழிநடத்துகிறேன்."
    },
    {
      date: "2024 — தற்போது வரை",
      title: "AI கல்வியாளர் & பயிற்றுவிப்பாளர்",
      role: "சாய் டெக்னாலஜிஸ்",
      desc: "அடுத்த தலைமுறை பொறியாளர்களுக்கு உயர் செயல்திறன் கொண்ட வைப்கோடிங் நுட்பங்கள், பிராம்ப்ட் அமைப்புகள் மற்றும் குறைந்த குறியீட்டு கட்டமைப்புகள் ஆகியவற்றில் பயிற்சி அளிக்கிறேன்."
    }
  ];

  const careerSteps = lang === "ta" ? careerStepsTa : careerStepsEn;

  const stackArsenalEn = [
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

  const stackArsenalTa = [
    {
      icon: "🧠",
      title: "உருவாக்கும் AI",
      items: ["ஜெமினி / கிளாட் / ஜிபிடி", "கர்சர் / வின்ட்சர்ஃப் AI", "லாங்செயின் / RAG", "பிராம்ப்ட் டியூனிங் & AI முகவர்கள்"]
    },
    {
      icon: "☁️",
      title: "AWS கிளவுட் சேவைகள்",
      items: ["நிர்வகிக்கப்பட்ட கணினி (EC2)", "கிளவுட் தரவுத்தளங்கள் (RDS)", "VPC நெட்வொர்க்கிங் & IAM", "AI நேட்டிவ் கிளவுட் SDKகள்"]
    },
    {
      icon: "💻",
      title: "வைப்கோடிங்",
      items: ["டைப்ஸ்கிரிப்ட் / ரியாக்ட் / நெக்ஸ்ட்.ஜேஎஸ்", "சர்வர் நோட்ஸ் & API கட்டமைப்புகள்", "விரைவான காட்சி முன்மாதிரிகள்", "குறைந்த-குறியீடு சாஸ் ஒருங்கிணைப்பு"]
    },
    {
      icon: "🤖",
      title: "AI ஆட்டோமேஷன்",
      items: ["n8n செயலில் உள்ள பணிப்பாய்வுகள்", "ஒருங்கிணைப்பு APIகள்", "மேக் / ஜேப்பியர் குழாய்கள்", "ஒத்திசைவற்ற குரல் முகவர்கள்"]
    },
    {
      icon: "⚙️",
      title: "தொழில்நுட்ப உள்கட்டமைப்பு",
      items: ["டெர்ராபார்ம் / IaC", "டாக்கர் கொள்கலன்", "CI/CD குழாய்கள்", "கணினி கண்காணிப்பு பதிவுகள்"]
    },
    {
      icon: "🛡️",
      title: "பாதுகாப்பு & தணிக்கைகள்",
      items: ["ISO 27001 தரநிலைகள்", "ஃபயர்வால்கள் / அச்சுறுத்தல் கண்டறிதல்", "சான்றுகளின் பாதுகாப்பு", "இறுதிப்புள்ளி இணக்க பதிவுகள்"]
    }
  ];

  const stackArsenal = lang === "ta" ? stackArsenalTa : stackArsenalEn;

  const customPostersEn = [
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

  const customPostersTa = [
    {
      title: "உருவாக்கு, தானியங்குபடுத்து & பெருக்கு",
      tech: "AWS & உருவாக்க AI அமைப்புகள்",
      desc: "குழுக்களில் குறைந்த குறியீட்டு காட்சி ஆட்டோமேஷன் குழாய்களை வடிவமைப்பதற்கான தனிப்பயன் திட்டம்.",
      img: SAI_POSTER_IMAGE1
    },
    {
      title: "SaaS வைப் உருவாக்கம்",
      tech: "வின்ட்சர்ஃப் & ரியாக்ட் திட்டம்",
      desc: "உண்மையான பதிலளிக்கக்கூடிய நிரல்களை உருவாக்கும் விரிவான டெவலப்பர் சார்ந்த பயிலரங்கு.",
      img: SAI_POSTER_IMAGE1
    },
    {
      title: "நிறுவன AI பணிப்பாய்வுகள்",
      tech: "n8n குழாய்கள் & GuardDuty",
      desc: "ஆதரவு வெக்டர்கள், வகைப்படுத்தப்பட்ட ஸ்லாக் தூண்டுதல்கள் மற்றும் ரகசியங்களை பாதுகாப்பாக ஒருங்கிணைத்தல்.",
      img: SAI_POSTER_IMAGE1
    }
  ];

  const customPosters = lang === "ta" ? customPostersTa : customPostersEn;

  // GSAP ScrollTrigger timelines setup
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Hero text reveal on load
      gsap.fromTo(
        ".hero-animate",
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1.1, stagger: 0.18, ease: "power3.out" }
      );

      // 2. Cases grid entries on scroll
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#vibe",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // 2b. GitHub Featured Projects grid entries on scroll
      gsap.fromTo(
        ".github-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#github-projects",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // 3. Biography blur entries on scroll
      gsap.fromTo(
        ".bio-card",
        { opacity: 0, scale: 0.96, filter: "blur(10px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#about",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // 4. Timeline list entries on scroll
      gsap.fromTo(
        ".timeline-card",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#career",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // 5. Arsenal cards 3D rotate-Y scroll entries
      gsap.fromTo(
        ".arsenal-card",
        { opacity: 0, y: 50, rotationY: 25 },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#arsenal",
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );
    }, mainRef);

    // Refresh ScrollTrigger after a short delay for accurate layout calculation
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 600);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, [lang]);


  // Drag-to-unlock logic
  const handleStart = (clientX: number) => {
    setIsSliding(true);
  };

  const handleMove = (clientX: number) => {
    if (!isSliding || !containerRef.current || !sliderRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const sliderWidth = sliderRef.current.offsetWidth;
    const maxDistance = containerWidth - sliderWidth;
    const containerRect = containerRef.current.getBoundingClientRect();
    
    let currentX = clientX - containerRect.left - sliderWidth / 2;
    if (currentX < 0) currentX = 0;
    if (currentX > maxDistance) currentX = maxDistance;
    
    setSlideX(currentX);

    // If reached 95% of maximum width, trigger redirect/scroll
    if (currentX >= maxDistance * 0.95) {
      setIsSliding(false);
      setSlideX(maxDistance);
      
      const bookSection = document.getElementById("book");
      if (bookSection) {
        bookSection.scrollIntoView({ behavior: "smooth" });
      }
      
      // Reset position after short delay
      setTimeout(() => {
        setSlideX(0);
      }, 800);
    }
  };

  const handleEnd = () => {
    if (!isSliding || !containerRef.current || !sliderRef.current) return;
    setIsSliding(false);
    
    const containerWidth = containerRef.current.offsetWidth;
    const sliderWidth = sliderRef.current.offsetWidth;
    const maxDistance = containerWidth - sliderWidth;
    
    if (slideX < maxDistance * 0.95) {
      // Snap back to left
      setSlideX(0);
    }
  };

  return (
    <div ref={mainRef} className="bg-[#020204] text-white min-h-screen relative font-sans overflow-x-hidden selection:bg-[#00d4ff]/30 selection:text-white">
      {/* Background Neural Canvas */}
      <ParticleCanvas />

      {/* Global Assistant ChatTwin */}
      <VirtualAIBot />

      {/* Global Header */}
      <Header lang={lang} onLanguageChange={setLang} />

      {/* Hero Section */}
      <section
        id="home"
        className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between pt-24 pb-12 lg:pt-32"
      >
        {/* Visual network paths representing extended-developments background grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-net-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#ffffff" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-net-grid)" />
          </svg>
        </div>

        {/* Hero Content Column & 3D space */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto min-h-[50vh]">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left select-none max-w-xl mx-auto lg:mx-0">
            {/* Holographic tagline */}
            <div className="hero-animate opacity-0 inline-flex items-center gap-2 mb-6 text-white/50 text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase justify-center lg:justify-start">
              <Crown className="w-4 h-4 text-[#00d4ff]" />
              <span>{lang === "en" ? "World-Class AI Platform" : "உலகத்தரம் வாய்ந்த AI தளம்"}</span>
            </div>

            {/* Headline using oversized Podium Extended Typography */}
            <h1 className="hero-animate opacity-0 font-podium text-white uppercase leading-[0.92] tracking-tight text-[clamp(2.8rem,7vw,6.5rem)] mb-6 text-center lg:text-left radial-text-gradient">
              {lang === "en" ? (
                <>DESIGN.<br />DISRUPT.<br />CONQUER.</>
              ) : (
                <>வடிவமை.<br />மாற்று.<br />வெற்றி கொள்.</>
              )}
            </h1>

            {/* Subtext */}
            <p className="hero-animate opacity-0 text-gray-400 text-sm sm:text-base font-mono leading-relaxed text-center lg:text-left max-w-md mb-8">
              {lang === "en" ? (
                <>
                  We build fierce brand identities and high-performance cloud pipelines that don't just turn heads — <strong className="text-white">they lead.</strong>
                </>
              ) : (
                <>
                  நாங்கள் சிறந்த பிராண்ட் அடையாளங்கள் மற்றும் அதிவேக கிளவுட் கட்டமைப்புகளை உருவாக்குகிறோம். இவை வெறும் கவனத்தை ஈர்ப்பது மட்டுமல்லாமல், <strong className="text-white">வழிநடத்துகின்றன.</strong>
                </>
              )}
            </p>

            {/* Desktop Slide-To-Unlock CTA representation */}
            <div className="hero-animate opacity-0 w-full max-w-xs md:max-w-md hidden sm:block mx-auto lg:mx-0">
              <div
                ref={containerRef}
                className="relative h-14 bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-full flex items-center p-1.5 overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.03)]"
              >
                <div
                  ref={sliderRef}
                  onMouseDown={() => handleStart(0)}
                  onTouchStart={(e) => handleStart(e.touches[0].clientX)}
                  onMouseMove={(e) => isSliding && handleMove(e.clientX)}
                  onTouchMove={(e) => isSliding && handleMove(e.touches[0].clientX)}
                  onMouseUp={handleEnd}
                  onTouchEnd={handleEnd}
                  onMouseLeave={handleEnd}
                  className="w-11 h-11 rounded-full bg-white flex items-center justify-center cursor-grab active:cursor-grabbing hover:bg-gray-100 transition-colors shadow-lg relative z-20 select-none"
                  style={{
                    transform: `translateX(${slideX}px)`,
                    transition: isSliding ? "none" : "transform 0.4s ease-out"
                  }}
                >
                  <span className="text-black font-black text-xs">→</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10">
                  <span className="text-[10px] sm:text-xs font-mono tracking-widest text-white/50 uppercase ED-Shimmer">
                    {lang === "en" ? "UNLOCK YOUR UPGRADE →" : "உங்களது மேம்பாட்டைத் திறக்கவும் →"}
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Fallback Tap CTA */}
            <a
              href="#book"
              className="hero-animate opacity-0 sm:hidden w-full max-w-xs py-4 text-center rounded-xl bg-white text-black font-display font-bold text-xs uppercase tracking-widest shadow-md hover:bg-gray-100 transition-all mx-auto"
            >
              {lang === "en" ? "Unlock Your Upgrade" : "உங்களது மேம்பாட்டைத் திறக்கவும்"}
            </a>
          </div>

          {/* Right Side Centerpiece: ThreeJS 3D space with proper proportions */}
          <div className="lg:col-span-5 w-full flex items-center justify-center relative select-none">
            <div className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px] aspect-square relative z-10">
              {/* Background 3D status badge */}
              <div className="absolute top-2 right-2 bg-white/5 border border-white/10 backdrop-blur-md text-[8px] font-mono tracking-widest text-[#00d4ff] px-2.5 py-0.5 rounded-full z-10 animate-pulse">
                {lang === "en" ? "/ THREE.JS REALTIME" : "/ முப்பரிமாணக் காட்சி"}
              </div>
              
              <ThreeHeroMesh />
            </div>
            
            {/* Soft decorative visual grid/aura behind the 3D model for premium depth */}
            <div className="absolute w-[80%] h-[80%] bg-[#00d4ff]/5 rounded-full blur-[100px] pointer-events-none z-0" />
          </div>

        </div>

        {/* Stats Row overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 select-none">
          <div className="flex flex-wrap gap-8 sm:gap-12 lg:gap-16 pt-6 border-t border-[#121218]">
            {customStats.map((stat, idx) => (
              <div key={idx} className="text-left">
                <div className="font-display text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-[9px] sm:text-xs font-mono tracking-widest uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infinite Scrolling Ticker (Section Divider) */}
      <section className="relative z-10 py-6 border-y border-[#121218] bg-[#050508]/40 overflow-hidden w-full select-none">
        <div className="flex gap-8 whitespace-nowrap animate-marquee">
          {Array(8)
            .fill(null)
            .flatMap(() => categories)
            .map((cat, idx) => (
              <div key={idx} className="inline-flex items-center gap-2 mx-8 text-xs font-bold font-mono text-white/50 tracking-widest">
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                <span className="ml-2 text-[#00d4ff]">·</span>
              </div>
            ))}
        </div>
      </section>

      {/* Core Offerings - Services Visual Tabs */}
      <ServiceTabs lang={lang} />

      {/* Projects / Case Studies Segment (Grid-based layout with hover effects) */}
      <section id="vibe" className="relative z-10 py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-[#121218] select-none">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-left">
          <h2 className="font-podium text-white uppercase text-[clamp(2rem,6vw,5.5rem)] leading-[0.95] tracking-tight">
            {lang === "en" ? (
              <>SELECTED<br />CASE WORKSHOPS.</>
            ) : (
              <>தேர்ந்தெடுக்கப்பட்ட<br />பயிலரங்குகள்.</>
            )}
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-mono tracking-widest uppercase mt-4">
            {lang === "en" ? "/ SECURE PIPELINES & SAAS ARCHITECTURES" : "/ பாதுகாப்பு கிளவுட் & சாஸ் அமைப்புகள்"}
          </p>
        </div>

        {/* Clean Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customPosters.map((p, idx) => (
            <div
              key={idx}
              className="project-card bg-[#07070a] border border-[#121218] rounded-3xl overflow-hidden flex flex-col hover:border-[#00d4ff]/20 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,212,255,0.06)] transition-all duration-500 group relative shadow-2xl opacity-0"
            >
              {/* Image box with overlay reveal on hover */}
              <div className="relative overflow-hidden aspect-video border-b border-[#121218] bg-slate-950">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Visual glass sheen overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020204] via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Card content */}
              <div className="p-6 text-left flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-[10px] text-[#00d4ff] font-mono tracking-widest uppercase font-bold">
                    // {p.tech}
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight uppercase">
                    {p.title}
                  </h4>
                  <p className="text-xs text-gray-500 font-mono leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <a
                  href="#book"
                  className="mt-6 text-[10px] font-mono font-bold text-[#00b8a9] flex items-center gap-1 group-hover:text-white transition-all pt-3 border-t border-[#121218] uppercase tracking-widest"
                >
                  <span>{lang === "en" ? "Inquire syllabus details" : "பாடத்திட்ட விவரங்களைக் கேட்கவும்"}</span>
                  <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured GitHub Repositories Section */}
      <section id="github-projects" className="relative z-10 py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-[#121218] select-none">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-left">
          <h2 className="font-podium text-white uppercase text-[clamp(2rem,6vw,5.5rem)] leading-[0.95] tracking-tight">
            {lang === "en" ? (
              <>FEATURED<br />REPOSITORIES.</>
            ) : (
              <>சிறப்பு<br />களஞ்சியங்கள்.</>
            )}
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-mono tracking-widest uppercase mt-4">
            {lang === "en"
              ? "/ SOURCE CODE & CSS ARCHITECTURE"
              : "/ மூல குறியீடு & சிஎஸ்எஸ் கட்டமைப்பு"}
          </p>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* NoteFlow Piano Card */}
          <div className="github-card bg-[#07070a] border border-[#121218] rounded-3xl p-6 sm:p-8 space-y-6 hover:border-amber-500/20 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(245,158,11,0.04)] transition-all duration-500 group shadow-xl relative overflow-hidden opacity-0">
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#121218] rounded-tr-3xl" />
            
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl transition-transform group-hover:scale-105 duration-500">
                🎹
              </div>
              <a
                href="https://github.com/ganeshbabu777/noteflow-piano"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[10px] font-mono tracking-widest text-[#00d4ff] hover:text-white uppercase transition-all bg-white/5 px-3 py-1 rounded-full border border-white/5 hover:border-white/10"
              >
                <Github className="w-3.5 h-3.5" />
                <span>/ VIEW REPO</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-4 text-left">
              <h4 className="text-xl font-bold text-white uppercase tracking-tight font-display">
                NoteFlow Piano Visualizer
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 font-mono leading-relaxed">
                {lang === "en"
                  ? "Interactive web-based MIDI piano visualizer allowing users to connect MIDI keyboards, customize falling note visualizers, and view key presses in real-time."
                  : "பயனர்கள் தங்களின் MIDI விசைப்பலகைகளை இணைக்கவும், கீழே விழும் குறிப்புகளைத் தனிப்பயனாக்கவும் மற்றும் நிகழ்நேரத்தில் விசை அழுத்தங்களைக் காணவும் அனுமதிக்கும் ஊடாடும் இணைய விசுவலைசர்."}
              </p>
              
              <div className="pt-4 border-t border-[#121218] space-y-2">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">
                  {lang === "en" ? "/ STYLING & CSS STACK" : "/ சிஎஸ்எஸ் தொழில்நுட்பங்கள்"}
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-900 text-[#00d4ff] border border-zinc-800">
                    Tailwind CSS v4
                  </span>
                  <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-900 text-amber-400 border border-zinc-800">
                    Glassmorphism
                  </span>
                  <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-900 text-purple-400 border border-zinc-800">
                    Keyframe Animations
                  </span>
                  <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-900 text-emerald-400 border border-zinc-800">
                    Displacement Filter
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* SAI Technologies AI Portfolio Card */}
          <div className="github-card bg-[#07070a] border border-[#121218] rounded-3xl p-6 sm:p-8 space-y-6 hover:border-amber-500/20 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(245,158,11,0.04)] transition-all duration-500 group shadow-xl relative overflow-hidden opacity-0">
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#121218] rounded-tr-3xl" />
            
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl transition-transform group-hover:scale-105 duration-500">
                🚀
              </div>
              <a
                href="https://github.com/babuganesh5-wq/SAI-Technologies-AI-Portfolio"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[10px] font-mono tracking-widest text-[#00d4ff] hover:text-white uppercase transition-all bg-white/5 px-3 py-1 rounded-full border border-white/5 hover:border-white/10"
              >
                <Github className="w-3.5 h-3.5" />
                <span>/ VIEW REPO</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-4 text-left">
              <h4 className="text-xl font-bold text-white uppercase tracking-tight font-display">
                SAI Technologies AI Portfolio
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 font-mono leading-relaxed">
                {lang === "en"
                  ? "Real-time 3D interactive portfolio & digital agency hub using Three.js / Spline centerpieces, real-time particle canvasses, and custom GSAP scroll-driven timeline transitions."
                  : "Three.js/Spline முப்பரிமாண வடிவமைப்பு, நிகழ்நேர துகள் பரப்பு மற்றும் தனிப்பயன் GSAP அனிமேஷன்கள் மூலம் இயங்கும் நிகழ்நேர முப்பரிமாண ஊடாடும் போர்ட்ஃபோலியோ & டிஜிட்டல் முகமை மையம்."}
              </p>
              
              <div className="pt-4 border-t border-[#121218] space-y-2">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">
                  {lang === "en" ? "/ STYLING & CSS STACK" : "/ சிஎஸ்எஸ் தொழில்நுட்பங்கள்"}
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-900 text-[#00d4ff] border border-zinc-800">
                    Tailwind CSS v4
                  </span>
                  <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-900 text-amber-400 border border-zinc-800">
                    Vanilla CSS Variables
                  </span>
                  <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-900 text-purple-400 border border-zinc-800">
                    Backdrop-blur Saturates
                  </span>
                  <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-900 text-pink-400 border border-zinc-800">
                    Liquid Glass Distortion
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Status Matrix & Repository Directory */}
      <section id="github-matrix" className="relative z-10 py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-[#121218] select-none">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-left">
          <h2 className="font-podium text-white uppercase text-[clamp(2rem,6vw,5.5rem)] leading-[0.95] tracking-tight">
            {lang === "en" ? (
              <>PROJECTS STATUS<br />MATRIX DIRECTORY.</>
            ) : (
              <>திட்டங்கள் &<br />உள்கட்டமைப்பு நிலை.</>
            )}
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-mono tracking-widest uppercase mt-4">
            {lang === "en" 
              ? "/ ONGOING DEVELOPMENTS (CRMS, MULTI-AGENTS, SEO PIPELINES)" 
              : "/ தற்போதைய தயாரிப்புகள் (CRM, மல்டி-ஏஜென்ட்கள், எஸ்சிஓ அமைப்புகள்)"}
          </p>
        </div>

        {/* Matrix Columns by Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Category 1: AI, LLMs & Multi-Agent Systems */}
          <div className="bg-[#07070a] border border-[#121218] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#121218] rounded-tr-3xl" />
            <h3 className="font-display text-lg font-bold text-[#00d4ff] uppercase tracking-wider border-b border-[#121218] pb-3 flex items-center gap-2">
              <span>🧠</span>
              <span>{lang === "en" ? "AI & Multi-Agent Systems" : "செயற்கை நுண்ணறிவு & தன்னாட்சி முகவர்கள்"}</span>
            </h3>
            
            <div className="space-y-4">
              {[
                { name: "Mini-Agent", status: lang === "en" ? "Ongoing" : "செயலில் உள்ளது", css: "Tailwind CSS v4" },
                { name: "airllm", status: lang === "en" ? "Stable" : "சீராக உள்ளது", css: "Utility CSS" },
                { name: "free-claude-code", status: lang === "en" ? "Stable" : "சீராக உள்ளது", css: "Custom CSS Modules" },
                { name: "Open-Generative-AI", status: lang === "en" ? "Stable" : "சீராக உள்ளது", css: "Inline Style CSS" },
                { name: "OpenClaude-Portable", status: lang === "en" ? "Lab Work" : "ஆராய்ச்சி நிலை", css: "Tailwind CSS v4" },
                { name: "antigravity-awesome-skills", status: lang === "en" ? "Lab Work" : "ஆராய்ச்சி நிலை", css: "Markdown Typography" },
                { name: "awesome-claude-skills", status: lang === "en" ? "Stable" : "சீராக உள்ளது", css: "CSS Flexbox / Grid" }
              ].map((repo, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-[#121218]/40 text-xs font-mono">
                  <span className="text-white hover:text-[#00d4ff] transition-all font-bold font-mono">{repo.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">{repo.css}</span>
                    <span className={`w-2 h-2 rounded-full ${repo.status.includes("Ongoing") || repo.status.includes("செயலில்") ? "bg-amber-400 shadow-[0_0_8px_#f59e0b]" : repo.status.includes("Stable") || repo.status.includes("சீராக") ? "bg-emerald-500 shadow-[0_0_8px_#10b981]" : "bg-purple-500 shadow-[0_0_8px_#a855f7]"}`} />
                    <span className="text-[10px] text-gray-500 font-bold uppercase">{repo.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category 2: Automation, CRM & Data Scrapers */}
          <div className="bg-[#07070a] border border-[#121218] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#121218] rounded-tr-3xl" />
            <h3 className="font-display text-lg font-bold text-amber-400 uppercase tracking-wider border-b border-[#121218] pb-3 flex items-center gap-2">
              <span>🤖</span>
              <span>{lang === "en" ? "Automation, CRM & SEO" : "தானியக்கம், CRM & தேடல் உத்திகள்"}</span>
            </h3>
            
            <div className="space-y-4">
              {[
                { name: "twenty", status: lang === "en" ? "Ongoing (CRM)" : "செயலில் உள்ள CRM", css: "Tailwind CSS v4, Glass" },
                { name: "n8n-mcp", status: lang === "en" ? "Ongoing (Agents)" : "செயலில் உள்ள ஏஜென்ட்", css: "Tailwind Modules" },
                { name: "n8n-workflows", status: lang === "en" ? "Ongoing" : "செயலில் உள்ளது", css: "Custom Node CSS" },
                { name: "firecrawl", status: lang === "en" ? "Stable (SEO)" : "சீராக உள்ளது (SEO)", css: "Tailwind / Custom variables" },
                { name: "free-llm-api-keys", status: lang === "en" ? "Stable" : "சீராக உள்ளது", css: "Minimal Dashboard CSS" },
                { name: "OmniRoute", status: lang === "en" ? "Lab Work" : "ஆராய்ச்சி நிலை", css: "Tailwind CSS v4" },
                { name: "turbovec", status: lang === "en" ? "Stable" : "சீராக உள்ளது", css: "Custom CSS Grid" }
              ].map((repo, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-[#121218]/40 text-xs font-mono">
                  <span className="text-white hover:text-amber-400 transition-all font-bold font-mono">{repo.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">{repo.css}</span>
                    <span className={`w-2 h-2 rounded-full ${repo.status.includes("Ongoing") || repo.status.includes("செயலில்") ? "bg-amber-400 shadow-[0_0_8px_#f59e0b]" : repo.status.includes("Stable") || repo.status.includes("சீராக") ? "bg-emerald-500 shadow-[0_0_8px_#10b981]" : "bg-purple-500 shadow-[0_0_8px_#a855f7]"}`} />
                    <span className="text-[10px] text-gray-500 font-bold uppercase">{repo.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category 3: Cloud Orchestration & DevOps Pipelines */}
          <div className="bg-[#07070a] border border-[#121218] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#121218] rounded-tr-3xl" />
            <h3 className="font-display text-lg font-bold text-purple-400 uppercase tracking-wider border-b border-[#121218] pb-3 flex items-center gap-2">
              <span>☁️</span>
              <span>{lang === "en" ? "Cloud Systems & DevOps" : "கிளவுட் சிஸ்டம்ஸ் & டெவ்ஆப்ஸ்"}</span>
            </h3>
            
            <div className="space-y-4">
              {[
                { name: "argo-rollouts-manager", status: lang === "en" ? "Stable" : "சீராக உள்ளது", css: "Tailwind CSS" },
                { name: "argocd-operator", status: lang === "en" ? "Production" : "உற்பத்தி நிலை", css: "Custom System CSS" },
                { name: "aws-canary-deploy-lab", status: lang === "en" ? "Lab Work" : "ஆராய்ச்சி நிலை", css: "Minimal CSS" },
                { name: "aws-devops-zero-to-hero", status: lang === "en" ? "Production" : "உற்பத்தி நிலை", css: "Bootstrap UI" },
                { name: "DevSecOps-Zero-to-Hero", status: lang === "en" ? "Production" : "உற்பத்தி நிலை", css: "Custom Themes CSS" },
                { name: "Docker-Zero-to-Hero", status: lang === "en" ? "Stable" : "சீராக உள்ளது", css: "Monospace Console CSS" },
                { name: "Jenkins-Zero-To-Hero", status: lang === "en" ? "Production" : "உற்பத்தி நிலை", css: "Plain CSS variables" },
                { name: "Kubernetes-Zero-to-Hero", status: lang === "en" ? "Production" : "உற்பத்தி நிலை", css: "Responsive System CSS" },
                { name: "kubernetes-the-hard-way", status: lang === "en" ? "Lab Work" : "ஆராய்ச்சி நிலை", css: "Terminal Monospace" },
                { name: "terraform-zero-to-hero", status: lang === "en" ? "Production" : "உற்பத்தி நிலை", css: "Custom variables" }
              ].map((repo, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-[#121218]/40 text-xs font-mono">
                  <span className="text-white hover:text-purple-400 transition-all font-bold font-mono">{repo.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">{repo.css}</span>
                    <span className={`w-2 h-2 rounded-full ${repo.status.includes("Ongoing") || repo.status.includes("செயலில்") ? "bg-amber-400 shadow-[0_0_8px_#f59e0b]" : repo.status.includes("Stable") || repo.status.includes("சீராக") ? "bg-emerald-500 shadow-[0_0_8px_#10b981]" : "bg-purple-500 shadow-[0_0_8px_#a855f7]"}`} />
                    <span className="text-[10px] text-gray-500 font-bold uppercase">{repo.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category 4: Web UI, Music & Interactive Visualizers */}
          <div className="bg-[#07070a] border border-[#121218] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#121218] rounded-tr-3xl" />
            <h3 className="font-display text-lg font-bold text-emerald-400 uppercase tracking-wider border-b border-[#121218] pb-3 flex items-center gap-2">
              <span>💻</span>
              <span>{lang === "en" ? "Full-Stack UI & Visualizers" : "முழு-அடுக்கு மற்றும் ஊடாடும் மென்பொருட்கள்"}</span>
            </h3>
            
            <div className="space-y-4">
              {[
                { name: "SAI-Technologies-AI-Portfolio", status: lang === "en" ? "Production" : "உற்பத்தி நிலை", css: "Tailwind CSS v4, Vanilla variables" },
                { name: "Music-visualiser", status: lang === "en" ? "Stable" : "சீராக உள்ளது", css: "Custom Glassmorphism, Tailwind" },
                { name: "saimusicacademy", status: lang === "en" ? "Production" : "உற்பத்தி நிலை", css: "Bootstrap CSS, CSS Modules" },
                { name: "sai-music-academy-public-mobile-app", status: lang === "en" ? "Stable" : "சீராக உள்ளது", css: "Tailwind Mobile CSS" },
                { name: "Piano-roll-mobile-app-", status: lang === "en" ? "Ongoing" : "செயலில் உள்ளது", css: "Custom Mobile CSS" },
                { name: "three-tier-architecture-demo", status: lang === "en" ? "Stable" : "சீராக உள்ளது", css: "Custom Variables CSS" },
                { name: "WEB-UI", status: lang === "en" ? "Stable" : "சீராக உள்ளது", css: "Pure Vanilla CSS" }
              ].map((repo, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-[#121218]/40 text-xs font-mono">
                  <span className="text-white hover:text-emerald-400 transition-all font-bold font-mono">{repo.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">{repo.css}</span>
                    <span className={`w-2 h-2 rounded-full ${repo.status.includes("Ongoing") || repo.status.includes("செயலில்") ? "bg-amber-400 shadow-[0_0_8px_#f59e0b]" : repo.status.includes("Stable") || repo.status.includes("சீராக") ? "bg-emerald-500 shadow-[0_0_8px_#10b981]" : "bg-purple-500 shadow-[0_0_8px_#a855f7]"}`} />
                    <span className="text-[10px] text-gray-500 font-bold uppercase">{repo.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* About Section - Structured grid aligned with staff members */}
      <section id="about" className="relative z-10 py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-[#121218] select-none">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-left">
          <h2 className="font-podium text-white uppercase text-[clamp(2rem,6vw,5.5rem)] leading-[0.95] tracking-tight">
            {lang === "en" ? (
              <>LEAD MENTOR<br />& CONSULTANT.</>
            ) : (
              <>முதன்மை ஆலோசகர்<br />& வழிகாட்டி.</>
            )}
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-mono tracking-widest uppercase mt-4">
            {lang === "en" ? "/ EXPERT SYSTEMS INTEGRATOR" : "/ நிபுணத்துவ அமைப்புகளின் ஒருங்கிணைப்பாளர்"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Portrait photo & Interactive AWS Badge */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-center lg:items-stretch justify-center gap-6">
            
            {/* Portrait Card */}
            <div className="bio-card relative group max-w-[280px] w-full flex flex-col opacity-0">
              <div className="absolute inset-0 bg-[#00d4ff]/5 rounded-[32px] blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-500" />
              <div className="relative flex-1 rounded-3xl overflow-hidden bg-[#07070a] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[#00d4ff]/20 flex flex-col">
                <div className="relative w-full aspect-square overflow-hidden bg-slate-950">
                  <img
                    src={GANESH_HERO_IMAGE}
                    alt="Ganesh Babu"
                    className="w-full h-full object-cover object-top contrast-[1.03] brightness-[1.01]"
                  />
                  <span className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md border border-[#00b8a9]/40 text-[#00b8a9] font-mono text-[9px] px-3 py-1 rounded-full tracking-widest uppercase">
                    {lang === "en" ? "CEO • FOUNDER" : "தலைமை அதிகாரி • நிறுவனர்"}
                  </span>
                </div>
                
                <div className="p-4 bg-slate-900/40 backdrop-blur-md flex-1 flex items-center gap-3 border-t border-[#121218]">
                  <div className="w-10 h-10 rounded-full border border-[#00d4ff]/60 overflow-hidden relative shadow">
                    <img
                      src={GANESH_PROFILE_IMAGE}
                      alt="Ganesh avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-white tracking-wide uppercase">Ganesh Babu</h4>
                    <p className="text-[10px] text-gray-500 font-mono">Sai Technologies</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AWS solutions architect certified badge */}
            <div className="bio-card w-full max-w-[250px] flex flex-col justify-center opacity-0">
              <AWSCertifiedBadge />
            </div>

          </div>

          {/* Right Column: Bio Telemetry & details */}
          <div className="bio-card lg:col-span-7 flex flex-col justify-between gap-8 text-left opacity-0">
            <div className="space-y-6">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold uppercase text-white tracking-tight">
                {lang === "en" ? "About " : ""}
                <span className="bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent">Ganesh Babu</span>
                {lang === "ta" ? " பற்றி" : ""}
              </h3>
              
              <p className="text-gray-400 text-xs sm:text-sm font-mono leading-relaxed space-y-4">
                {lang === "en" ? (
                  <>
                    I am an AI Vibe Coder, <strong className="text-[#00d4ff]">AWS Cloud MNC Consultant</strong>, and Automation Specialist based in India. I help software teams and individuals construct low-code platforms and AI automation pipelines without getting bogged down by traditional programming complexity.
                    <br /><br />
                    Over the last 8 years, my trajectory has spanned hardware engineer support networks, firewall administration, system audits, and comprehensive AWS migrations — equipping me with the solid enterprise diagnostics required to architect zero-defect automated workflows on n8n and modern architectures today.
                    <br /><br />
                    Currently, I consult on high-performance AWS configurations and Managed AI cloud projects in MNC architectures. Over weekends with <strong className="text-white">Sai Technologies</strong>, I teach individuals how to leverage Windsurf, React schemas, and browser automations. Let's make complex tech look and feel simple.
                  </>
                ) : (
                  <>
                    நான் இந்தியாவில் இருக்கும் ஒரு AI வைப் கோடர், <strong className="text-[#00d4ff]">AWS கிளவுட் MNC ஆலோசகர்</strong>, மற்றும் ஆட்டோமேஷன் நிபுணர் ஆவேன். மென்பொருள் குழுக்கள் மற்றும் தனிநபர்கள் பாரம்பரிய நிரலாக்க சிக்கல்களில் சிக்காமல் குறைந்த குறியீட்டு தளங்கள் மற்றும் AI ஆட்டோமேஷன் குழாய்களை உருவாக்க நான் உதவுகிறேன்.
                    <br /><br />
                    கடந்த 8 ஆண்டுகளில், வன்பொருள் பொறியாளர் ஆதரவு நெட்வொர்க்குகள், ஃபயர்வால் நிர்வாகம், கணினி தணிக்கைகள் மற்றும் விரிவான AWS கிளவுட் இடம்பெயர்வுகள் வரை எனது பணிப்பயணம் நீண்டுள்ளது. இது இன்று n8n மற்றும் நவீன கட்டமைப்புகளில் பூஜ்ஜிய-குறைபாடு கொண்ட தானியங்கு பணிப்பாய்வுகளை வடிவமைக்க தேவையான திடமான நிறுவன கண்டறிதல் திறன்களை எனக்கு வழங்கியுள்ளது.
                    <br /><br />
                    தற்போது, நான் பன்னாட்டு நிறுவன கட்டமைப்புகளில் உயர் செயல்திறன் கொண்ட AWS உள்ளமைவுகள் மற்றும் நிர்வகிக்கப்பட்ட AI கிளவுட் திட்டங்களில் ஆலோசனை வழங்குகிறேன். வார இறுதி நாட்களில் <strong className="text-white">சாய் டெக்னாலஜிஸ்</strong> மூலம், தனிநபர்களுக்கு வின்ட்சர்ஃப், ரியாக்ட் திட்டங்கள் மற்றும் உலாவி ஆட்டோமேஷன்களை எவ்வாறு பயன்படுத்துவது என்று கற்றுக்கொடுக்கிறேன். சிக்கலான தொழில்நுட்பத்தை எளிமையாக மாற்றுவோம்.
                  </>
                )}
              </p>
            </div>

            {/* Biography Quick Telemetry panel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full pt-6 border-t border-[#121218]">
              <div className="bg-[#07070a] border border-[#121218] hover:border-white/10 hover:shadow-xl rounded-2xl p-5 space-y-3 font-mono text-left transition-all duration-500">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                  {lang === "en" ? "/ Quick Telemetry" : "/ விரைவான விவரங்கள்"}
                </span>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#121218]">
                    <span className="text-gray-500">{lang === "en" ? "Industry:" : "துறை:"}</span>
                    <span className="text-white font-semibold">{lang === "en" ? "IT & Cloud Systems" : "ஐடி & கிளவுட் சிஸ்டம்ஸ்"}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#121218]">
                    <span className="text-gray-500">{lang === "en" ? "Channels:" : "ஊடகங்கள்:"}</span>
                    <span className="text-emerald-400 font-semibold">Meet, Zoom, Discord</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-500">{lang === "en" ? "Trained:" : "பயிற்சி பெற்றோர்:"}</span>
                    <span className="text-white font-semibold">{lang === "en" ? "25+ Students" : "25+ மாணவர்கள்"}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-3">
                <a
                  href="https://wa.me/917200747726"
                  target="_blank"
                  rel="noreferrer"
                  className="py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs text-center uppercase tracking-widest transition-all"
                >
                  {lang === "en" ? "💬 WhatsApp Ganesh" : "💬 வாட்ஸ்அப் செய்க"}
                </a>
                <a
                  href="mailto:ganeshbabu0704@gmail.com"
                  className="py-3.5 px-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-display font-bold text-xs text-center uppercase tracking-widest transition-all"
                >
                  {lang === "en" ? "✉ Email Ganesh" : "✉ மின்னஞ்சல் செய்க"}
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Timeline Section */}
      <section id="career" className="relative z-10 py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-[#121218] select-none">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-left">
          <h2 className="font-podium text-white uppercase text-[clamp(2rem,6vw,5.5rem)] leading-[0.95] tracking-tight">
            {lang === "en" ? (
              <>CAREER PATH<br />TELEMETRY.</>
            ) : (
              <>தொழில்முறை பயண<br />விவரங்கள்.</>
            )}
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-mono tracking-widest uppercase mt-4">
            {lang === "en" ? "/ ROADMAP TO CLOUD INTEGRATION" : "/ கிளவுட் ஒருங்கிணைப்புக்கான வழித்தடம்"}
          </p>
        </div>

        {/* Timeline path list */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12 max-w-4xl text-left">
          {careerSteps.map((step, idx) => (
            <div key={idx} className="timeline-card relative group opacity-0">
              {/* Dot marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-2.5 w-4 h-4 rounded-full bg-[#020204] border-2 border-[#00d4ff] shadow-[0_0_10px_rgba(0,212,255,0.4)] group-hover:scale-110 transition-transform" />
              
              <div className="bg-[#07070a] border border-[#121218] rounded-3xl p-6 sm:p-8 space-y-3 transition-all duration-500 hover:border-white/12 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.45)] relative shadow-xl overflow-hidden">
                {/* Visual grid accent inside timeline card */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#121218] rounded-tr-3xl" />
                
                <div className="text-[10px] text-[#00d4ff] font-mono tracking-widest uppercase font-bold">
                  {step.date}
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight uppercase">
                  {step.title}
                </h4>
                <div className="text-xs text-[#00b8a9] font-mono uppercase tracking-wider">
                  {step.role}
                </div>
                <p className="text-xs sm:text-sm text-gray-500 font-mono leading-relaxed pt-3 border-t border-[#121218]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Arsenal Grid Section */}
      <section id="arsenal" className="relative z-10 py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-[#121218] select-none">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="font-podium text-white uppercase text-[clamp(2rem,6vw,5.5rem)] leading-[0.95] tracking-tight">
            {lang === "en" ? "MY ARSENAL." : "எனது திறன்கள்."}
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-mono tracking-widest uppercase mt-4">
            {lang === "en" ? "/ STACK TECHNOLOGY MATRIX" : "/ தொழில்நுட்ப அடுக்கு மேட்ரிக்ஸ்"}
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 perspective-[1000px]">
          {stackArsenal.map((stack, idx) => (
            <div
              key={idx}
              className="arsenal-card bg-[#07070a] border border-[#121218] rounded-3xl p-6 sm:p-8 space-y-6 hover:border-[#8b5cf6]/20 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(139,92,246,0.04)] transition-all duration-500 group shadow-xl relative overflow-hidden opacity-0"
            >
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#121218] rounded-tr-3xl" />
              
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl transition-transform group-hover:scale-105 duration-500">
                {stack.icon}
              </div>

              <div className="space-y-4 text-left">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
                  {stack.title}
                </h4>
                <ul className="space-y-2">
                  {stack.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-xs text-gray-500 font-mono flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]/80" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Sessions Details Grid */}
      <section id="sessions" className="relative z-10 py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-[#121218] select-none">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="font-podium text-white uppercase text-[clamp(2rem,6vw,5.5rem)] leading-[0.95] tracking-tight">
            {lang === "en" ? "LEARNING FLOW." : "கற்றல் முறை."}
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-mono tracking-widest uppercase mt-4">
            {lang === "en" ? "/ CLASSROOM METRICS" : "/ வகுப்பறை விவரங்கள்"}
          </p>
        </div>

        {/* Sessions metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {(lang === "ta" ? [
            { icon: "🎥", title: "மீட், ஜூம் & டிஸ்கார்ட்", desc: "பூஜ்ஜிய தாமத ஆடியோ/வீடியோ திரை பகிர்வு குழாய்கள்" },
            { icon: "⏱️", title: "1 மணிநேர வகுப்புகள்", desc: "அடர்த்தியாக தொகுக்கப்பட்ட, செறிவூட்டப்பட்ட வகுப்புகள்" },
            { icon: "📅", title: "சனி & ஞாயிறு", desc: "நெகிழ்வான வார இறுதி காலை மற்றும் மாலை நேரங்கள்" },
            { icon: "🎯", title: "திட்டம் சார்ந்தது", desc: "சாஸ் பயன்பாடுகளை உருவாக்குதல், சோதித்தல் மற்றும் ஹோஸ்ட் செய்தல் மூலம் கற்பித்தல்" }
          ] : [
            { icon: "🎥", title: "Meet, Zoom & Discord", desc: "Zero-latency audio/video screen sharing pipelines" },
            { icon: "⏱️", title: "1 Hour Classes", desc: "Intrinsically packed, focused modular classes" },
            { icon: "📅", title: "Sat & Sun", desc: "Flexible weekend morning & evening timings" },
            { icon: "🎯", title: "Project-Based", desc: "Instructing via building, testing and hosting SaaS apps" }
          ]).map((item, idx) => (
            <div
              key={idx}
              className="bg-[#07070a] border border-[#121218] hover:border-[#00d4ff]/20 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,212,255,0.03)] rounded-3xl p-5 sm:p-6 text-center space-y-3 shadow-lg relative overflow-hidden transition-all duration-500 group"
            >
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#121218] rounded-tr-3xl" />
              <div className="text-3xl">{item.icon}</div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
                {item.title}
              </h4>
              <p className="text-[10px] sm:text-xs text-gray-500 font-mono leading-relaxed pt-1.5 border-t border-[#121218]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Booking Slot Section - Replicating Minimalist input field container */}
      <section id="book" className="relative z-10 py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-[#121218] select-none">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="font-podium text-white uppercase text-[clamp(2.2rem,6vw,5.5rem)] leading-[0.95] tracking-tight">
            {lang === "en" ? "DROP US A LINE." : "எங்களைத் தொடர்புகொள்ளுங்கள்."}
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-mono tracking-widest uppercase mt-4">
            {lang === "en" ? "/ RESERVE YOUR CONSULTATION STRATEGY" : "/ உங்கள் ஆலோசனையை முன்பதிவு செய்யுங்கள்"}
          </p>
        </div>

        {/* Booking Form Card wrapped in styled container */}
        <div className="max-w-2xl mx-auto">
          <BookingForm lang={lang} />
        </div>
      </section>

      {/* Contact Quick Access Links */}
      <section id="contact" className="relative z-10 py-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto text-center border-t border-[#121218] select-none pb-24">
        <div className="flex flex-wrap justify-center gap-3">
          {(lang === "ta" ? [
            { label: "💬 வாட்ஸ்அப்", href: "https://wa.me/917200747726" },
            { label: "📞 நேரடி அழைப்பு", href: "tel:+917200747726" },
            { label: "✉ மின்னஞ்சல் ஆதரவு", href: "mailto:ganeshbabu0704@gmail.com" },
            { label: "👾 டிஸ்கார்ட் சர்வர்", href: "https://discord.com" }
          ] : [
            { label: "💬 WhatsApp", href: "https://wa.me/917200747726" },
            { label: "📞 Call direct", href: "tel:+917200747726" },
            { label: "✉ Email Support", href: "mailto:ganeshbabu0704@gmail.com" },
            { label: "👾 Discord Server", href: "https://discord.com" }
          ]).map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-2 py-3 px-6 rounded-xl bg-[#07070a] hover:bg-[#0c0c12] hover:-translate-y-1 hover:shadow-lg border border-[#121218] hover:border-[#00d4ff]/20 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300"
            >
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Footer rendering the keyframed ASCII wireframe cube */}
      <footer className="relative z-10 py-16 border-t border-[#121218] bg-[#030305] flex flex-col items-center justify-center overflow-hidden min-h-[50vh]">
        <div className="absolute inset-0 bg-[#00d4ff]/5 rounded-t-full blur-3xl opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: ASCII Container */}
          <div className="lg:col-span-6 w-full flex items-center justify-center min-h-[300px]">
            <ThreeFooterMesh />
          </div>

          {/* Right Column: Links and Copyright */}
          <div className="lg:col-span-6 flex flex-col items-start lg:items-end justify-center space-y-8 lg:text-right">
            <div className="flex flex-wrap gap-6 lg:justify-end text-sm font-mono tracking-widest text-gray-500 uppercase">
              <a href="#home" className="hover:text-white transition-all">{lang === "en" ? "/Home" : "/முகப்பு"}</a>
              <a href="#services" className="hover:text-white transition-all">{lang === "en" ? "/Offerings" : "/சேவைகள்"}</a>
              <a href="#vibe" className="hover:text-white transition-all">{lang === "en" ? "/Cases" : "/பயிலரங்குகள்"}</a>
              <a href="#about" className="hover:text-white transition-all">{lang === "en" ? "/Biography" : "/வழிகாட்டி"}</a>
              <a href="#book" className="hover:text-white transition-all">{lang === "en" ? "/Inquire" : "/முன்பதிவு"}</a>
            </div>
            
            <div className="space-y-3 max-w-md">
              <p className="text-[10px] text-gray-500 leading-relaxed font-mono">
                {lang === "en"
                  ? "Authorized Vibe Coding and AI automation architectures. Safe-harbor registered & patent-pending protocols apply."
                  : "அங்கீகரிக்கப்பட்ட வைப்கோடிங் மற்றும் AI ஆட்டோமேஷன் கட்டமைப்புகள். காப்புரிமை பெற்ற நெறிமுறைகள் பொருந்தும்."}
              </p>
              <p className="text-[9px] text-gray-600 font-mono">
                {lang === "en"
                  ? "© 2026 Sai Technologies. All rights reserved. ® and ™ denote registered trademarks."
                  : "© 2026 சாய் டெக்னாலஜிஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."}
              </p>
            </div>
          </div>

        </div>
      </footer>

      {/* Hidden SVG containing the displacement filter for Liquid Glass distortion */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <defs>
          <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.003 0.003" numOctaves="3" seed="45" result="noise" />
            <feGaussianBlur in="noise" stdDeviation="0.08" result="blurred" />
            <feDisplacementMap in="SourceGraphic" in2="blurred" scale="40" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
