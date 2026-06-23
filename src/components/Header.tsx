import React, { useState, useEffect } from "react";
import { X, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { SaiLogo } from "./SaiLogo";

interface HeaderProps {
  lang: "en" | "ta";
  onLanguageChange: (lang: "en" | "ta") => void;
}

export function Header({ lang, onLanguageChange }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [rotationAngle, setRotationAngle] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { label: lang === "en" ? "Home" : "முகப்பு", href: "#home", key: "Home" },
    { label: lang === "en" ? "Vibe Coding" : "வைப்கோடிங்", href: "#services", key: "Vibe Coding" },
    { label: lang === "en" ? "Case Studies" : "பயிலரங்குகள்", href: "#vibe", key: "Case Studies" },
    { label: lang === "en" ? "Featured Projects" : "சிறப்பு திட்டங்கள்", href: "#github-projects", key: "Featured Projects" },
    { label: lang === "en" ? "About Ganesh" : "கணேஷ் பற்றி", href: "#about", key: "About Ganesh" },
    { label: lang === "en" ? "Live Sessions" : "நேரடி வகுப்புகள்", href: "#sessions", key: "Live Sessions" },
    { label: lang === "en" ? "Inquire Slot" : "பதிவு செய்க", href: "#book", key: "Inquire Slot" },
    { label: lang === "en" ? "Contact Info" : "தொடர்புக்கு", href: "#contact", key: "Contact Info" }
  ];

  const itemGradients: Record<string, { color1: string; color2: string }> = {
    "Home": { color1: "#feb47b", color2: "#ff7e5f" }, // Peach
    "Vibe Coding": { color1: "#2575fc", color2: "#6a11cb" }, // Purple Blue
    "Case Studies": { color1: "#b91d73", color2: "#f953c6" }, // Pink Purple
    "Featured Projects": { color1: "#8b5cf6", color2: "#ec4899" }, // Violet Pink
    "About Ganesh": { color1: "#38f9d7", color2: "#43e97b" }, // Green Aqua
    "Live Sessions": { color1: "#fee140", color2: "#fa709a" }, // Pink Yellow
    "Inquire Slot": { color1: "#330867", color2: "#30cfd0" }, // Aqua Blue
    "Contact Info": { color1: "#ff5e62", color2: "#ff9966" } // Light Orange to Red
  };

  const handleHover = (label: string, key: string) => {
    if (activeItem !== label) {
      setActiveItem(label);
      setRotationAngle((prev) => prev + 45);

      const colors = itemGradients[key] || itemGradients["Home"];
      const root = document.documentElement;
      root.style.setProperty("--color-menu-1", colors.color1);
      root.style.setProperty("--color-menu-2", colors.color2);
    }
  };

  // Toggle body scroll blocking
  useEffect(() => {
    if (menuOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  // Monitor window scroll to toggle header background color & height
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Header Row overlay */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 px-6 sm:px-10 py-5 lg:py-6 flex justify-between items-center transition-all duration-300 pointer-events-none select-none ${
          scrolled
            ? "bg-[#020204]/75 backdrop-blur-md border-b border-[#121218] shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3.5 lg:py-4"
            : "bg-transparent"
        }`}
      >
        
        {/* Logo (Interactive Link) */}
        <a href="#home" className="pointer-events-auto hover:opacity-85 transition-all">
          <SaiLogo />
        </a>

        {/* Top-Right corner navigation links */}
        <div className="flex items-center gap-6 sm:gap-8 pointer-events-auto">
          {/* Glowing Amber Language Selector Tab */}
          <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest bg-zinc-900/60 border border-zinc-800/80 rounded-lg p-1">
            <button
              onClick={() => onLanguageChange("en")}
              className={`px-2 py-0.5 rounded transition-all duration-300 font-bold ${
                lang === "en"
                  ? "text-amber-400 bg-amber-500/15 border border-amber-500/30 shadow-[0_0_8px_rgba(245,158,11,0.25)] scale-[1.02]"
                  : "text-zinc-500 hover:text-zinc-300 cursor-pointer"
              }`}
            >
              ENG
            </button>
            <span className="text-zinc-800">|</span>
            <button
              onClick={() => onLanguageChange("ta")}
              className={`px-2 py-0.5 rounded transition-all duration-300 font-bold ${
                lang === "ta"
                  ? "text-amber-400 bg-amber-500/15 border border-amber-500/30 shadow-[0_0_8px_rgba(245,158,11,0.25)] scale-[1.02]"
                  : "text-zinc-500 hover:text-zinc-300 cursor-pointer"
              }`}
            >
              TAM
            </button>
          </div>

          {/* Direct contact link */}
          <a
            href="#book"
            className="hidden md:inline-flex items-center gap-1 text-[10px] font-mono tracking-widest text-gray-400 hover:text-white uppercase transition-all"
          >
            <span>{lang === "en" ? "/ BOOK CONSULT" : "/ ஆலோசனை பெறுக"}</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          {/* Fullscreen hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 rounded-full flex flex-col justify-center items-center gap-1 bg-white/5 hover:bg-white/10 border border-zinc-800/60 active:scale-95 transition-all cursor-pointer z-50 pointer-events-auto"
            aria-label="Open Menu"
          >
            <span className="block w-5 h-[1.5px] bg-white rounded-full transition-all"></span>
            <span className="block w-5 h-[1.5px] bg-white rounded-full transition-all"></span>
            <span className="block w-3.5 h-[1.5px] bg-white rounded-full self-start ml-2.5 transition-all"></span>
          </button>
        </div>

      </nav>

      {/* Screen Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 z-45 bg-[#030305] flex flex-col items-stretch transition-all duration-700 ease-in-out ${
          menuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Fullscreen background radial aura */}
        <div
          className="absolute inset-0 opacity-15 blur-[120px] transition-all duration-1000 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 65% 50%, var(--color-menu-1) 0%, var(--color-menu-2) 40%, transparent 70%)`
          }}
        />

        {/* Diagonal connection lines for circuit node theme */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="#ffffff" strokeWidth="0.5" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="#ffffff" strokeWidth="0.5" />
        </svg>

        {/* Rotating Glass Circle Background Representation */}
        <div className="absolute right-[-10%] top-[10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] aspect-square rounded-full overflow-hidden opacity-30 select-none pointer-events-none hidden lg:block">
          <img
            id="rotating-menu-image"
            src="/Glass_Menu_circle.png"
            alt="Rotating Glass Menu Circle"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out"
            style={{ transform: `rotate(${rotationAngle}deg)` }}
          />
        </div>

        {/* Menu Close Header bar */}
        <div className="flex justify-between items-center px-6 sm:px-10 py-5 lg:py-6 border-b border-[#121218] relative z-10">
          <span className="font-podium text-white uppercase text-sm tracking-widest opacity-60">
            {lang === "en" ? "SAI TECHNOLOGIES DIRECTORY" : "சாய் டெக்னாலஜிஸ் அடைவு"}
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-zinc-800/60 text-white cursor-pointer hover:bg-white/10 active:scale-95 transition-all"
            aria-label="Close Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Columns Grid */}
        <div className="flex-1 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 py-12 overflow-y-auto relative z-10 text-left">
          
          {/* Left Column: Language details and contact telemetry */}
          <div className="flex flex-col justify-between items-start gap-8 self-stretch w-full lg:w-1/3">
            {/* Language dropdown container */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">
                {lang === "en" ? "/ Language Telemetry" : "/ மொழி அமைப்புகள்"}
              </span>
              <div className="flex items-center gap-3 text-sm font-semibold">
                <button
                  onClick={() => {
                    onLanguageChange("en");
                    setMenuOpen(false);
                  }}
                  className={`pb-0.5 transition-all text-left font-bold ${
                    lang === "en"
                      ? "text-amber-400 border-b-2 border-amber-500"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  ENGLISH
                </button>
                <button
                  onClick={() => {
                    onLanguageChange("ta");
                    setMenuOpen(false);
                  }}
                  className={`pb-0.5 transition-all text-left font-bold ${
                    lang === "ta"
                      ? "text-amber-400 border-b-2 border-amber-500"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  TAMIL (தமிழ்)
                </button>
              </div>
            </div>

            {/* In-Focus Case lists */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase block">
                {lang === "en" ? "/ active workshop cases" : "/ செயலில் உள்ள பயிலரங்குகள்"}
              </span>
              <div className="flex flex-col gap-2 font-mono text-xs text-gray-400">
                <a href="#vibe" onClick={() => setMenuOpen(false)} className="hover:text-[#00d4ff] transition-all flex items-center gap-1.5">
                  <span>{lang === "en" ? "• AWS Cloud Orchestration" : "• AWS கிளவுட் ஒருங்கிணைப்பு"}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a href="#vibe" onClick={() => setMenuOpen(false)} className="hover:text-[#00d4ff] transition-all flex items-center gap-1.5">
                  <span>{lang === "en" ? "• React Vibe Prototyping" : "• React வைப் முன்மாதிரிகள்"}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a href="#vibe" onClick={() => setMenuOpen(false)} className="hover:text-[#00d4ff] transition-all flex items-center gap-1.5">
                  <span>{lang === "en" ? "• n8n API Automation" : "• n8n API ஆட்டோமேஷன்"}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Contact quick links */}
            <div className="space-y-3 pt-6 border-t border-white/5 w-full">
              <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase block">
                {lang === "en" ? "/ consulting queries" : "/ ஆலோசனை கேள்விகள்"}
              </span>
              <a
                style={{ color: "white" }}
                href="mailto:ganeshbabu0704@gmail.com"
                className="font-mono text-sm hover:underline block truncate"
              >
                ganeshbabu0704@gmail.com
              </a>
              <div className="flex gap-4 pt-2 text-gray-500">
                <a href="https://github.com/ganeshbabu777" target="_blank" rel="noreferrer" className="hover:text-white transition-all">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="mailto:ganeshbabu0704@gmail.com" className="hover:text-white transition-all">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Rotating Wheel Large Links */}
          <div className="flex-1 flex flex-col items-start lg:items-end w-full lg:w-2/3 h-full justify-center">
            <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-lg lg:text-right">
              {menuItems.map((item, idx) => {
                const isHovered = activeItem === item.label;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    onMouseEnter={() => handleHover(item.label, item.key)}
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    className={`font-ibm-sans font-bold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tighter transition-all duration-300 relative inline-block py-1 hover:scale-[1.02] origin-left lg:origin-right ${
                      isHovered ? "text-white bg-clip-text" : "text-white/20 hover:text-white/50"
                    }`}
                  >
                    {isHovered && (
                      <span className="absolute -left-5 lg:-left-auto lg:-right-5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-linear-to-r from-[var(--color-menu-1)] to-[var(--color-menu-2)] shadow-[0_0_10px_rgba(255,255,255,0.6)] animate-ping" />
                    )}
                    /{item.label}
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Footer status text inside menu */}
        <div className="px-6 sm:px-10 py-5 text-center font-mono text-[9px] text-gray-600 border-t border-white/5 relative z-10 uppercase tracking-widest">
          {lang === "en"
            ? "© 2026 SAI TECHNOLOGIES. CLONE EXPERIENCE POWERED BY THREE.JS & TAILWIND."
            : "© 2026 சாய் டெக்னாலஜிஸ். முப்பரிமாணக் காட்சி & டெயில்விண்ட் கொண்டு உருவாக்கப்பட்டது."}
        </div>
      </div>
    </>
  );
}
