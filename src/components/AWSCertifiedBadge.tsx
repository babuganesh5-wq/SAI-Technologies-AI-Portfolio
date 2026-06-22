import React from "react";
import { Award, Check, ShieldCheck } from "lucide-react";

export function AWSCertifiedBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`relative group/badge select-none ${className}`}>
      {/* Glow Backdrop */}
      <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-xl group-hover/badge:bg-blue-500/20 transition-all duration-500" />
      
      {/* Main Badge Container */}
      <div className="relative bg-slate-900/80 backdrop-blur-md border border-blue-500/20 rounded-2xl p-4 flex flex-col items-center gap-3 hover:border-blue-400/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
        
        {/* Hexagonal Badge SVG Representation */}
        <div className="relative w-28 h-28 transform group-hover/badge:scale-105 transition-all duration-500">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
            <defs>
              <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1a365d" />
                <stop offset="50%" stopColor="#2b6cb0" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
            
            {/* Main Hexagon Path */}
            <path
              d="M 50,5 L 90,28 L 90,72 L 50,95 L 10,72 L 10,28 Z"
              fill="url(#hexGrad)"
              stroke="url(#borderGrad)"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            
            {/* Inner Hexagon Border Line */}
            <path
              d="M 50,9 L 86,30 L 86,70 L 50,91 L 14,70 L 14,30 Z"
              fill="none"
              stroke="#5495ff"
              strokeWidth="0.75"
              opacity="0.6"
            />
            
            {/* AWS Logo text & Check */}
            <text x="35" y="27" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.5">aws</text>
            
            {/* Checkmark indicator orange pill */}
            <rect x="54" y="20" width="10" height="9" rx="2" fill="#ff9900" />
            <path d="M 57,24 L 59,26 L 62,22" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            
            <text x="35" y="34" fill="#a0aec0" fontSize="5" fontWeight="semibold" fontFamily="sans-serif" letterSpacing="0.3">certified</text>
            
            {/* Center Line Splitter */}
            <line x1="28" y1="58" x2="72" y2="58" stroke="#cbd5e0" strokeWidth="0.5" opacity="0.8" />
            
            {/* Solutions Architect Header Text */}
            <text x="50" y="44" fill="#ffffff" fontSize="6.5" fontWeight="black" fontFamily="sans-serif" textAnchor="middle">Solutions</text>
            <text x="50" y="52" fill="#ffffff" fontSize="6.5" fontWeight="black" fontFamily="sans-serif" textAnchor="middle">Architect</text>
            
            {/* Associate Spaced Bottom Label */}
            <text x="50" y="70" fill="#ffffff" fontSize="5" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1.2" textAnchor="middle">ASSOCIATE</text>
          </svg>
        </div>

        {/* Badge Metadata stamp */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-[10px] text-blue-400 font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3 h-3 text-blue-400" />
            <span>ID: AWS-ASA-0704</span>
          </div>
          <p className="text-[10px] text-gray-500 mt-1">Enterprise Cloud Specialist</p>
        </div>
      </div>
    </div>
  );
}
