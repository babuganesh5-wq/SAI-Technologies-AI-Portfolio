import React from "react";
import { Shield, Sparkles } from "lucide-react";

export function SaiLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Patented Holographic Brand Icon */}
      <div className="relative group/logo">
        <div className="absolute -inset-1.5 bg-gradient-to-r from-[#00d4ff] via-[#8b5cf6] to-[#00b8a9] rounded-xl blur-md opacity-75 group-hover/logo:opacity-100 transition-all duration-300 animate-pulse" />
        <div className="relative w-11 h-11 rounded-xl bg-slate-900 border border-white/20 flex flex-col items-center justify-center text-lg font-bold shadow-2xl">
          <span className="text-[17px] leading-none">⚙️</span>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center" title="Registered Brand">
            <span className="text-[7px] text-slate-950 font-black">®</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col select-none">
        <div className="flex items-center gap-1">
          <span className="text-base sm:text-lg font-black tracking-tight text-white hover:text-[#00d4ff] transition-all">
            SAI <span className="text-[#00d4ff]">TECHNOLOGIES</span>
          </span>
          <span className="text-[8px] font-black text-[#00b8a9] bg-[#00b8a9]/10 px-1 py-0.2 rounded border border-[#00b8a9]/20 self-start ml-0.5 tracking-wider">
            PATENTED
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-[8px] text-[#64748b] tracking-[2px] uppercase font-bold leading-none">
            VIBE CODING & SYSTEM AUTOMATION
          </span>
          <div className="text-[7px] text-gray-500 font-medium">
            (Reg. ST-2026-AI)
          </div>
        </div>
      </div>
    </div>
  );
}
