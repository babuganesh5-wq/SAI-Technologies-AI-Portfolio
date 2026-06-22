import React from "react";

/**
 * HeroBackground — A premium animated background that replaces
 * the external loop video. Uses CSS gradients, floating orbs,
 * grid lines, and circuit-node patterns to evoke AI / Cloud / Code.
 */
export function HeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {/* Base gradient layer */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 20% 60%, rgba(0,212,255,0.12) 0%, transparent 55%), " +
            "radial-gradient(ellipse 100% 70% at 80% 30%, rgba(139,92,246,0.10) 0%, transparent 55%), " +
            "radial-gradient(ellipse 90% 90% at 50% 80%, rgba(0,184,169,0.08) 0%, transparent 50%), " +
            "linear-gradient(165deg, #050508 0%, #0a0a14 30%, #0d0d1a 60%, #050508 100%)"
        }}
      />

      {/* Animated grid mesh */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
      >
        <defs>
          <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00d4ff" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* Floating gradient orbs — animated */}
      <div
        className="absolute rounded-full blur-[120px] opacity-30"
        style={{
          width: "500px",
          height: "500px",
          top: "10%",
          left: "-5%",
          background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)",
          animation: "hero-orb-float 18s ease-in-out infinite alternate"
        }}
      />
      <div
        className="absolute rounded-full blur-[100px] opacity-20"
        style={{
          width: "400px",
          height: "400px",
          top: "50%",
          right: "-8%",
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          animation: "hero-orb-float 22s ease-in-out infinite alternate-reverse"
        }}
      />
      <div
        className="absolute rounded-full blur-[80px] opacity-15"
        style={{
          width: "300px",
          height: "300px",
          bottom: "5%",
          left: "30%",
          background: "radial-gradient(circle, #00b8a9 0%, transparent 70%)",
          animation: "hero-orb-float 15s ease-in-out 3s infinite alternate"
        }}
      />

      {/* Circuit / connection nodes */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
      >
        {/* Horizontal connection lines */}
        <line x1="10%" y1="25%" x2="45%" y2="25%" stroke="#00d4ff" strokeWidth="0.5" strokeDasharray="8 12">
          <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="4s" repeatCount="indefinite" />
        </line>
        <line x1="55%" y1="70%" x2="92%" y2="70%" stroke="#8b5cf6" strokeWidth="0.5" strokeDasharray="6 14">
          <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="5s" repeatCount="indefinite" />
        </line>
        <line x1="20%" y1="85%" x2="70%" y2="85%" stroke="#00b8a9" strokeWidth="0.4" strokeDasharray="4 16">
          <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="6s" repeatCount="indefinite" />
        </line>

        {/* Diagonal paths */}
        <line x1="65%" y1="15%" x2="90%" y2="45%" stroke="#00d4ff" strokeWidth="0.4" strokeDasharray="6 10">
          <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="5s" repeatCount="indefinite" />
        </line>
        <line x1="5%" y1="55%" x2="35%" y2="40%" stroke="#8b5cf6" strokeWidth="0.3" strokeDasharray="5 12">
          <animate attributeName="stroke-dashoffset" from="0" to="-34" dur="7s" repeatCount="indefinite" />
        </line>

        {/* Node circles at intersection points */}
        <circle cx="10%" cy="25%" r="3" fill="#00d4ff" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="45%" cy="25%" r="2.5" fill="#00d4ff" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="92%" cy="70%" r="3" fill="#8b5cf6" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="55%" cy="70%" r="2" fill="#8b5cf6" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="65%" cy="15%" r="2.5" fill="#00d4ff" opacity="0.5">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="90%" cy="45%" r="3" fill="#00d4ff" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="35%" cy="40%" r="2" fill="#8b5cf6" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.7;0.4" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle cx="20%" cy="85%" r="2" fill="#00b8a9" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="70%" cy="85%" r="2.5" fill="#00b8a9" opacity="0.5">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Outer ring connectors — like network topology */}
        <circle cx="50%" cy="50%" r="28%" fill="none" stroke="#00d4ff" strokeWidth="0.3" strokeDasharray="10 20" opacity="0.15">
          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="120s" repeatCount="indefinite" />
        </circle>
        <circle cx="50%" cy="50%" r="38%" fill="none" stroke="#8b5cf6" strokeWidth="0.3" strokeDasharray="8 25" opacity="0.08">
          <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="150s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Animated scan line (subtle) */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent"
        style={{
          animation: "hero-scanline 8s ease-in-out infinite"
        }}
      />

      {/* Bottom vignette fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background: "linear-gradient(to top, #0a0a0f 0%, transparent 100%)"
        }}
      />

      {/* Top subtle vignette */}
      <div
        className="absolute top-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, rgba(5,5,8,0.6) 0%, transparent 100%)"
        }}
      />

      {/* Inline keyframes for the orb float and scanline */}
      <style>{`
        @keyframes hero-orb-float {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 15px) scale(0.95); }
          100% { transform: translate(10px, -10px) scale(1.02); }
        }
        @keyframes hero-scanline {
          0%, 100% { top: 15%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          50% { top: 85%; }
        }
      `}</style>
    </div>
  );
}
