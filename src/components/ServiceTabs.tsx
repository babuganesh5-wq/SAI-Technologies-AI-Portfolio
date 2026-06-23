import React, { useState } from "react";

interface Service {
  id: string;
  caption: string;
  badges: string[];
  desc: string;
  videoMov: string;
  videoWebm: string;
}

interface ServiceTabsProps {
  lang: "en" | "ta";
}

export function ServiceTabs({ lang }: ServiceTabsProps) {
  const [activeTab, setActiveTab] = useState("service1");

  const servicesEn: Service[] = [
    {
      id: "service1",
      caption: "AWS Cloud Systems",
      badges: ["Terraform", "CloudComputing", "EC2 / RDS", "VPC Networking", "IaC", "AWS GuardDuty"],
      desc: "Architect zero-defect cloud configurations and automated resource provisioning pipelines. We consult on high-performance AWS migrations, secure VPC architectures, endpoint compliance networks, identity management (IAM) policies, and container orchestrations using Docker and Terraform.",
      videoMov: "/videos/Tryout10001-0096_WEBM.webm",
      videoWebm: "/videos/Tryout10001-0096_WEBM.webm"
    },
    {
      id: "service2",
      caption: "Generative AI & LLMs",
      badges: ["Gemini API", "Claude 3.5", "GPT-4o", "Prompt Tuning", "LangChain", "RAG Systems"],
      desc: "Supercharge your business with multimodal AI integration. Construct customized prompt templates, configure vector embeddings for semantic retrieval (RAG), and program autonomous AI agents that handle document parsing, search, and complex multi-step reasoning.",
      videoMov: "/videos/Tubes_INtersect0001-0096_WEBM.webm",
      videoWebm: "/videos/Tubes_INtersect0001-0096_WEBM.webm"
    },
    {
      id: "service3",
      caption: "Vibe Coding & Prototypes",
      badges: ["Cursor AI", "Windsurf", "React / Next.js", "API Frameworks", "TypeScript", "TailwindCSS"],
      desc: "Rapidly generate full-stack responsive web apps, interactive custom dashboards, and high-fidelity mockups entirely using AI-assisted coding. Bridge design concept to working production code with minimal delay and maximum developer velocity.",
      videoMov: "/videos/GlassStack720_19200001-0096_WEBM.webm",
      videoWebm: "/videos/GlassStack720_19200001-0096_WEBM.webm"
    },
    {
      id: "service4",
      caption: "No-Code & AI Automation",
      badges: ["n8n Workflows", "Integration APIs", "Zapier Pipes", "Webhook Triggers", "Voice Agents", "Discord Bot API"],
      desc: "Automate manual operations, connect scattered databases, and sync messaging systems (WhatsApp, Slack, Discord). We configure asynchronous background pipelines, event listener triggers, and customized system actions that work 24/7.",
      videoMov: "/videos/Tubes_Rub0001-0096_WEBM.webm",
      videoWebm: "/videos/Tubes_Rub0001-0096_WEBM.webm"
    }
  ];

  const servicesTa: Service[] = [
    {
      id: "service1",
      caption: "AWS கிளவுட் சிஸ்டம்ஸ்",
      badges: ["டெர்ராபார்ம்", "கிளவுட்கம்ப்யூட்டிங்", "EC2 / RDS", "VPC நெட்வொர்க்கிங்", "IaC", "AWS கார்டுடியூட்டி"],
      desc: "பூஜ்ஜிய-குறைபாடு கிளவுட் கட்டமைப்புகள் மற்றும் தானியங்கு வள வழங்கல் பணிப்பாய்வுகளை வடிவமைக்கிறோம். உயர் செயல்திறன் கொண்ட AWS இடம்பெயர்வு, பாதுகாப்பான VPC கட்டமைப்புகள், இறுதிப்புள்ளி இணக்க நெட்வொர்க்குகள், அடையாள மேலாண்மை (IAM) கொள்கைகள் மற்றும் கொள்கலன் கட்டமைப்புகளை (Docker & Terraform) வழங்குகிறோம்.",
      videoMov: "/videos/Tryout10001-0096_WEBM.webm",
      videoWebm: "/videos/Tryout10001-0096_WEBM.webm"
    },
    {
      id: "service2",
      caption: "உருவாக்க AI & LLMகள்",
      badges: ["ஜெமினி API", "கிளாட் 3.5", "GPT-4o", "பிராம்ப்ட் டியூனிங்", "லாங்செயின்", "RAG அமைப்புகள்"],
      desc: "பல்வகைப்பட்ட AI ஒருங்கிணைப்புடன் உங்கள் வணிகத்தை மேம்படுத்துங்கள். தனிப்பயனாக்கப்பட்ட பிராம்ப்ட் வார்ப்புருக்களை உருவாக்குதல், செமண்டிக் மீட்டெடுப்பிற்கான வெக்டர் எம்பெடிங்குகளை (RAG) கட்டமைத்தல் மற்றும் ஆவணப் பகுப்பாய்வு, தேடல் மற்றும் சிக்கலான பல-படி பகுத்தறிவைக் கையாளும் தன்னாட்சி AI முகவர்களை உருவாக்குதல்.",
      videoMov: "/videos/Tubes_INtersect0001-0096_WEBM.webm",
      videoWebm: "/videos/Tubes_INtersect0001-0096_WEBM.webm"
    },
    {
      id: "service3",
      caption: "வைப்கோடிங் & முன்மாதிரிகள்",
      badges: ["கர்சர் AI", "வின்ட்சர்ஃப்", "ரியாக்ட் / நெக்ஸ்ட்.ஜேஎஸ்", "API கட்டமைப்புகள்", "டைப்ஸ்கிரிப்ட்", "டெயில்விண்ட்"],
      desc: "AI-உதவி குறியீட்டு முறையைப் பயன்படுத்தி முழு-அடுக்கு பதிலளிக்கக்கூடிய வலைப் பயன்பாடுகள், ஊடாடும் தனிப்பயன் டாஷ்போர்டுகள் மற்றும் உயர்-நம்பகத்தன்மை கொண்ட போலி மாதிரிகளை விரைவாக உருவாக்குங்கள். குறைந்தபட்ச தாமதம் மற்றும் அதிகபட்ச டெவலப்பர் வேகத்துடன் வடிவமைப்பு கருத்தை செயல்படும் குறியீட்டுடன் இணைக்கவும்.",
      videoMov: "/videos/GlassStack720_19200001-0096_WEBM.webm",
      videoWebm: "/videos/GlassStack720_19200001-0096_WEBM.webm"
    },
    {
      id: "service4",
      caption: "நோ-கோட் & AI ஆட்டோமேஷன்",
      badges: ["n8n பணிப்பாய்வுகள்", "ஒருங்கிணைப்பு APIகள்", "ஜேப்பியர் பைப்ஸ்", "வெப்ஹூக்ஸ்", "குரல் முகவர்கள்", "டிஸ்கார்ட் பாட் API"],
      desc: "கைமுறை செயல்பாடுகளைத் தானியங்குபடுத்துங்கள், சிதறிய தரவுத்தளங்களை இணைக்கவும், மற்றும் செய்தி தொடர்பு அமைப்புகளை (வாட்ஸ்அப், ஸ்லாக், டிஸ்கார்ட்) ஒத்திசைக்கவும். நாங்கள் 24/7 வேலை செய்யும் பின்னணி பணிப்பாய்வுகள் மற்றும் தனிப்பயனாக்கப்பட்ட கணினி செயல்பாடுகளை கட்டமைக்கிறோம்.",
      videoMov: "/videos/Tubes_Rub0001-0096_WEBM.webm",
      videoWebm: "/videos/Tubes_Rub0001-0096_WEBM.webm"
    }
  ];

  const services = lang === "ta" ? servicesTa : servicesEn;

  return (
    <section id="services" className="relative w-full py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto z-10 border-t border-[#121218] select-none">
      
      {/* Title Header */}
      <div className="mb-16 md:mb-20 text-left">
        <h2 className="font-podium text-white uppercase text-[clamp(2rem,6vw,5.5rem)] leading-[0.95] tracking-tight">
          {lang === "en" ? (
            <>OUR CORE<br />OFFERINGS.</>
          ) : (
            <>எங்கள் முக்கிய<br />சேவைகள்.</>
          )}
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm font-mono tracking-widest uppercase mt-4">
          {lang === "en"
            ? "/ CLICK A CAPTION TO UNVEIL THE TELEMETRY"
            : "/ தகவல்களைக் காண ஏதேனும் ஒன்றைத் தேர்ந்தெடுக்கவும்"}
        </p>
      </div>

      {/* Main Services Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch min-h-[450px]">
        
        {/* Left Side: Captions list (Interactive Tabs) */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 sm:space-y-8 order-2 lg:order-1">
          {services.map((service) => {
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onMouseEnter={() => setActiveTab(service.id)}
                onClick={() => setActiveTab(service.id)}
                className={`text-left focus:outline-none transition-all duration-500 group relative ${
                  isActive ? "pl-6 sm:pl-8 text-white scale-[1.02]" : "pl-0 text-gray-500 hover:text-white/80 hover:pl-2"
                }`}
              >
                {/* Active indicator bar */}
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 rounded-full bg-linear-to-r from-[#00d4ff] to-[#8b5cf6] transition-all duration-500 ${
                    isActive ? "h-8 opacity-100" : "h-0 opacity-0"
                  }`}
                />
                
                {/* Text Caption */}
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight uppercase leading-none">
                  {service.caption}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Center/Right Side: Interactive Media & Descriptions */}
        <div className="lg:col-span-7 flex flex-col lg:flex-row gap-6 items-stretch order-1 lg:order-2">
          
          {/* Glass Loop Video Container */}
          <div className="flex-1 min-h-[260px] sm:min-h-[300px] lg:min-h-[400px] rounded-3xl overflow-hidden relative border border-white/10 bg-[#07070a]/60 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-[#00d4ff]/5 rounded-3xl blur-xl opacity-20" />
            
            {(() => {
              const service = services.find((s) => s.id === activeTab) || services[0];
              return (
                <div
                  key={service.id}
                  className="absolute inset-0 w-full h-full animate-scale-in"
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={service.videoMov} type='video/quicktime; codecs="hvc1"' />
                    <source src={service.videoWebm} type="video/webm" />
                  </video>
                </div>
              );
            })()}
          </div>

          {/* Text Description Box */}
          <div className="flex-1 flex flex-col justify-between bg-[#0a0a0f] border border-[#121218] rounded-3xl p-6 sm:p-8 relative shadow-xl overflow-hidden min-h-[220px]">
            {/* Corner visual lines to mimic high-end site */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10 rounded-bl-3xl" />
            
            {(() => {
              const service = services.find((s) => s.id === activeTab) || services[0];
              return (
                <div
                  key={service.id}
                  className="flex flex-col justify-between h-full animate-fade-up"
                >
                  {/* Badges Grid */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full bg-white text-black font-display shadow-sm border border-white/10 hover:scale-105 transition-all"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Body description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-mono text-left pt-2 border-t border-[#121218] flex-1">
                    {service.desc}
                  </p>

                  {/* Booking Link CTA */}
                  <a
                    href="#book"
                    className="mt-6 inline-flex items-center justify-between group py-2.5 px-4 rounded-xl border border-[#00d4ff]/20 hover:border-[#00d4ff]/60 hover:bg-[#00d4ff]/5 transition-all text-xs tracking-wider font-bold text-[#00d4ff] uppercase"
                  >
                    <span>{lang === "en" ? "Inquire this strategy" : "இந்த உத்தியைப் பற்றி கேளுங்கள்"}</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              );
            })()}
          </div>

        </div>

      </div>
    </section>
  );
}
