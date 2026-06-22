import React, { useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import { SaiLogo } from "./SaiLogo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Vibe Coding", href: "#vibe" },
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Career", href: "#career" },
    { label: "Arsenal", href: "#arsenal" },
    { label: "Live Sessions", href: "#sessions" },
    { label: "Book Slot", href: "#book" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-45 px-4 sm:px-6 py-4 flex justify-between items-center backdrop-blur-xl bg-[#050508]/85 border-b border-[rgba(255,255,255,0.06)]">
        <SaiLogo />

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-xs font-semibold text-gray-400 hover:text-[#00d4ff] transition-all tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/917200747726"
            target="_blank"
            rel="noreferrer"
            className="md:inline-block hidden py-2.5 px-5 rounded-full bg-linear-to-r from-[#00d4ff] to-[#00b8a9] text-slate-950 font-bold text-xs transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.25)] hover:scale-105 active:scale-95"
          >
            Book Session
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] flex flex-col justify-center items-center gap-1 cursor-pointer transition-all active:scale-95 hover:border-[rgba(0,184,169,0.3)]"
        >
          <span className="block w-5 h-0.5 bg-white rounded-full"></span>
          <span className="block w-5 h-0.5 bg-white rounded-full"></span>
          <span className="block w-5 h-0.5 bg-white rounded-full"></span>
        </button>
      </nav>

      {/* Screen Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 w-full h-screen bg-[#050508] z-50 flex flex-col overflow-y-auto px-6 py-6 animate-fade-in">
          <div className="flex justify-between items-center pb-6 border-b border-[rgba(255,255,255,0.06)]">
            <SaiLogo />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] flex items-center justify-center text-white cursor-pointer hover:border-[rgba(0,184,169,0.3)] transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-4 py-8">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-gray-400 hover:text-[#00d4ff] transition-all tracking-wide py-1.5 border-b border-[rgba(255,255,255,0.03)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[rgba(255,255,255,0.06)] flex flex-col gap-3">
            <a
              href="https://wa.me/917200747726"
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 rounded-full bg-[#00d4ff] text-slate-950 font-bold text-center text-sm shadow-xl tracking-wide cursor-pointer hover:shadow-cyan-400/20 active:scale-95 transition-all text-slate-950"
            >
              Book Session
            </a>
          </div>
        </div>
      )}
    </>
  );
}
