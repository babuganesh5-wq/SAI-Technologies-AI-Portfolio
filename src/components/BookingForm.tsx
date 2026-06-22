import React, { useState } from "react";

export function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sessionType, setSessionType] = useState("");
  const [preferredDay, setPreferredDay] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [preferredPlatform, setPreferredPlatform] = useState("Google Meet");
  const [message, setMessage] = useState("");

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();

    const typeLabels: Record<string, string> = {
      "vibe-coding": "🔥 Vibe Coding & AI Automation",
      "generative-ai": "🧠 Generative AI & LLMs",
      "aws-cloud": "☁️ AWS Cloud & AI Services",
      "full-stack": "💻 Full-Stack SaaS Development",
      "ai-automation": "🤖 AI Automation Workflows",
      "career": "🎯 Career Mentorship"
    };

    const sessionLabel = typeLabels[sessionType] || sessionType;

    const prefilledText = `Hi Ganesh! I want to book a live session:
    
👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}
📚 Session Type: ${sessionLabel}
📅 Preferred Day: ${preferredDay}
⏰ Preferred Time: ${preferredTime}
🎥 Platform Preference: ${preferredPlatform}
💬 Message: ${message || "N/A"}

Please confirm my slot. Thank you!`;

    const encodedText = encodeURIComponent(prefilledText);
    const whatsappUrl = `https://wa.me/917200747726?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form
      id="booking-form-val"
      onSubmit={handleBooking}
      className="max-w-xl mx-auto bg-[#12121a] border border-[rgba(255,255,255,0.06)] rounded-2xl p-6 sm:p-8 space-y-5 text-left shadow-2xl relative z-10"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Your Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
            className="w-full px-4 py-3 bg-[#050508] border border-[rgba(255,255,255,0.06)] rounded-xl text-white text-sm focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="w-full px-4 py-3 bg-[#050508] border border-[rgba(255,255,255,0.06)] rounded-xl text-white text-sm focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-gray-gray-400 text-gray-400 uppercase tracking-wider">
            WhatsApp Phone Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 XXXXX XXXXX"
            required
            className="w-full px-4 py-3 bg-[#050508] border border-[rgba(255,255,255,0.06)] rounded-xl text-white text-sm focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Session Target Strategy
          </label>
          <select
            value={sessionType}
            onChange={(e) => setSessionType(e.target.value)}
            required
            className="w-full px-4 py-3 bg-[#050508] border border-[rgba(255,255,255,0.06)] rounded-xl text-white text-sm focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all appearance-none cursor-pointer"
          >
            <option value="">Select a slot option...</option>
            <option value="vibe-coding">🔥 Vibe Coding & AI Automation</option>
            <option value="generative-ai">🧠 Generative AI & LLMs</option>
            <option value="aws-cloud">☁️ AWS Cloud & AI Services</option>
            <option value="full-stack">💻 Full-Stack SaaS Development</option>
            <option value="ai-automation">🤖 AI Automation Workflows</option>
            <option value="career">🎯 Career Mentorship</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Preferred Day
          </label>
          <select
            value={preferredDay}
            onChange={(e) => setPreferredDay(e.target.value)}
            required
            className="w-full px-4 py-3 bg-[#050508] border border-[rgba(255,255,255,0.06)] rounded-xl text-white text-sm focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all appearance-none cursor-pointer"
          >
            <option value="">Choose day...</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Preferred Time Slot
          </label>
          <select
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            required
            className="w-full px-4 py-3 bg-[#050508] border border-[rgba(255,255,255,0.06)] rounded-xl text-white text-sm focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all appearance-none cursor-pointer"
          >
            <option value="">Choose time...</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="02:00 PM">02:00 PM</option>
            <option value="03:00 PM">03:00 PM</option>
            <option value="04:00 PM">04:00 PM</option>
            <option value="05:00 PM">05:00 PM</option>
            <option value="06:00 PM">06:00 PM</option>
            <option value="07:00 PM">07:00 PM</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Preferred Meeting Platform
        </label>
        <select
          value={preferredPlatform}
          onChange={(e) => setPreferredPlatform(e.target.value)}
          required
          className="w-full px-4 py-3 bg-[#050508] border border-[rgba(255,255,255,0.06)] rounded-xl text-white text-sm focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all appearance-none cursor-pointer"
        >
          <option value="Google Meet">Google Meet 🎥</option>
          <option value="Zoom">Zoom 📞</option>
          <option value="WhatsApp Call">WhatsApp Call 💬</option>
          <option value="Discord">Discord 👾</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Custom Message (Optional)
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share your background, key goals, or what SaaS products you wish to build..."
          rows={3}
          className="w-full px-4 py-3 bg-[#050508] border border-[rgba(255,255,255,0.06)] rounded-xl text-white text-sm focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-xl text-dark font-semibold text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95 bg-linear-to-r from-[var(--cyan)] to-[var(--teal)] text-slate-950 font-bold"
      >
        <span>☑ Book Session via WhatsApp</span>
      </button>
    </form>
  );
}
