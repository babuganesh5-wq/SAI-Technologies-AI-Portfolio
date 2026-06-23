import React, { useState } from "react";

interface BookingFormProps {
  lang?: "en" | "ta";
}

export function BookingForm({ lang = "en" }: BookingFormProps) {
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

    const typeLabelsEn: Record<string, string> = {
      "vibe-coding": "🔥 Vibe Coding & AI Automation",
      "generative-ai": "🧠 Generative AI & LLMs",
      "aws-cloud": "☁️ AWS Cloud & AI Services",
      "full-stack": "💻 Full-Stack SaaS Development",
      "ai-automation": "🤖 AI Automation Workflows",
      "career": "🎯 Career Mentorship"
    };

    const typeLabelsTa: Record<string, string> = {
      "vibe-coding": "🔥 வைப்கோடிங் & AI ஆட்டோமேஷன்",
      "generative-ai": "🧠 உருவாக்கும் AI & LLMகள்",
      "aws-cloud": "☁️ AWS கிளவுட் & AI சேவைகள்",
      "full-stack": "💻 முழு-அடுக்கு சாஸ் உருவாக்கம்",
      "ai-automation": "🤖 AI ஆட்டோமேஷன் பணிப்பாய்வுகள்",
      "career": "🎯 தொழில் வழிகாட்டுதல்"
    };

    const sessionLabel = lang === "ta" ? (typeLabelsTa[sessionType] || sessionType) : (typeLabelsEn[sessionType] || sessionType);

    const prefilledText = lang === "ta"
      ? `வணக்கம் கணேஷ்! நான் நேரடி வகுப்பை முன்பதிவு செய்ய விரும்புகிறேன்:
    
👤 பெயர்: ${name}
📧 மின்னஞ்சல்: ${email}
📱 தொலைபேசி: ${phone}
📚 வகுப்பு வகை: ${sessionLabel}
📅 விருப்பமான நாள்: ${preferredDay === "Saturday" ? "சனிக்கிழமை" : "ஞாயிற்றுக்கிழமை"}
⏰ விருப்பமான நேரம்: ${preferredTime}
🎥 சந்திப்பு தளம்: ${preferredPlatform}
💬 செய்தி: ${message || "இல்லை"}

தயவுசெய்து எனது வகுப்பை உறுதிப்படுத்தவும். நன்றி!`
      : `Hi Ganesh! I want to book a live session:
    
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
            {lang === "en" ? "Your Name" : "உங்கள் பெயர்"}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={lang === "en" ? "Enter your full name" : "உங்கள் முழுப் பெயரை உள்ளிடவும்"}
            required
            className="w-full px-4 py-3 bg-[#050508] border border-[rgba(255,255,255,0.06)] rounded-xl text-white text-sm focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
            {lang === "en" ? "Email Address" : "மின்னஞ்சல் முகவரி"}
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
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
            {lang === "en" ? "WhatsApp Phone Number" : "வாட்ஸ்அப் தொலைபேசி எண்"}
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
            {lang === "en" ? "Session Target Strategy" : "பயிலரங்கு இலக்கு உத்தி"}
          </label>
          <select
            value={sessionType}
            onChange={(e) => setSessionType(e.target.value)}
            required
            className="w-full px-4 py-3 bg-[#050508] border border-[rgba(255,255,255,0.06)] rounded-xl text-white text-sm focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all appearance-none cursor-pointer"
          >
            <option value="">{lang === "en" ? "Select a slot option..." : "வகுப்பு விருப்பத்தைத் தேர்ந்தெடுக்கவும்..."}</option>
            <option value="vibe-coding">{lang === "en" ? "🔥 Vibe Coding & AI Automation" : "🔥 வைப்கோடிங் & AI ஆட்டோமேஷன்"}</option>
            <option value="generative-ai">{lang === "en" ? "🧠 Generative AI & LLMs" : "🧠 உருவாக்கும் AI & LLMகள்"}</option>
            <option value="aws-cloud">{lang === "en" ? "☁️ AWS Cloud & AI Services" : "☁️ AWS கிளவுட் & AI சேவைகள்"}</option>
            <option value="full-stack">{lang === "en" ? "💻 Full-Stack SaaS Development" : "💻 முழு-அடுக்கு சாஸ் உருவாக்கம்"}</option>
            <option value="ai-automation">{lang === "en" ? "🤖 AI Automation Workflows" : "🤖 AI ஆட்டோமேஷன் பணிப்பாய்வுகள்"}</option>
            <option value="career">{lang === "en" ? "🎯 Career Mentorship" : "🎯 தொழில் வழிகாட்டுதல்"}</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
            {lang === "en" ? "Preferred Day" : "விருப்பமான நாள்"}
          </label>
          <select
            value={preferredDay}
            onChange={(e) => setPreferredDay(e.target.value)}
            required
            className="w-full px-4 py-3 bg-[#050508] border border-[rgba(255,255,255,0.06)] rounded-xl text-white text-sm focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all appearance-none cursor-pointer"
          >
            <option value="">{lang === "en" ? "Choose day..." : "நாளைத் தேர்ந்தெடுக்கவும்..."}</option>
            <option value="Saturday">{lang === "en" ? "Saturday" : "சனிக்கிழமை"}</option>
            <option value="Sunday">{lang === "en" ? "Sunday" : "ஞாயிற்றுக்கிழமை"}</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
            {lang === "en" ? "Preferred Time Slot" : "விருப்பமான நேர அளவு"}
          </label>
          <select
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            required
            className="w-full px-4 py-3 bg-[#050508] border border-[rgba(255,255,255,0.06)] rounded-xl text-white text-sm focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all appearance-none cursor-pointer"
          >
            <option value="">{lang === "en" ? "Choose time..." : "நேரத்தைத் தேர்ந்தெடுக்கவும்..."}</option>
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
          {lang === "en" ? "Preferred Meeting Platform" : "விருப்பமான சந்திப்பு தளம்"}
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
          {lang === "en" ? "Custom Message (Optional)" : "தனிப்பயன் செய்தி (விருப்பத்திற்குரியது)"}
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={
            lang === "en"
              ? "Share your background, key goals, or what SaaS products you wish to build..."
              : "உங்கள் பின்னணி, முக்கிய இலக்குகள் அல்லது நீங்கள் உருவாக்க விரும்பும் சாஸ் தயாரிப்புகளைப் பகிரவும்..."
          }
          rows={3}
          className="w-full px-4 py-3 bg-[#050508] border border-[rgba(255,255,255,0.06)] rounded-xl text-white text-sm focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-xl text-dark font-semibold text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95 bg-linear-to-r from-[var(--cyan)] to-[var(--teal)] text-slate-950 font-bold"
      >
        <span>{lang === "en" ? "☑ Book Session via WhatsApp" : "☑ வாட்ஸ்அப் மூலம் முன்பதிவு செய்க"}</span>
      </button>
    </form>
  );
}
