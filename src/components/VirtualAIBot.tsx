import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, X, Send, Sparkles, MessageCircle } from "lucide-react";
import { SUGGESTED_PROMPTS, getCustomChatReply, ChatMessage } from "../chatbot";

export function VirtualAIBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Load welcome message
  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content: "Hi! I am Ganesh Babu's Virtual AI Twin 🤖. Ask me anything about Vibe Coding, AWS cloud infrastructures, n8n automations, or how to register for live classes at Sai Technologies!",
        timestamp: new Date()
      }
    ]);
  }, []);

  // Auto scroll
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // User message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate thinking interval
    setTimeout(() => {
      const responseText = getCustomChatReply(text);
      const hostMsg: ChatMessage = {
        id: `host-${Date.now()}`,
        role: "assistant",
        content: responseText,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, hostMsg]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <>
      {/* Absolute Floating Bubble */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-linear-to-r from-[#00d4ff] to-[#00b8a9] flex items-center justify-center text-slate-950 shadow-[0_10px_30px_rgba(0,184,169,0.4)] cursor-pointer hover:scale-110 active:scale-95 transition-all outline-hidden border-none"
        title="Consult AI Representative"
      >
        <Bot className="w-6 h-6 animate-pulse" />
      </button>

      {/* Floating AI Dialogue Console */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 left-6 z-50 w-[90%] max-w-[380px] h-[500px] bg-[#12121a] border border-[rgba(255,255,255,0.08)] rounded-2xl flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[rgba(255,255,255,0.02)] border-b border-[rgba(255,255,255,0.06)] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[rgba(0,212,255,0.1)] flex items-center justify-center text-[#00d4ff]">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight flex items-center gap-1">
                    Ganesh's Twin <Sparkles className="w-3 h-3 text-[#00d4ff]" />
                  </h4>
                  <p className="text-[10px] text-emerald-400 font-medium">● Virtual representative</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-[rgba(255,255,255,0.04)] flex items-center justify-center text-gray-400 hover:text-white cursor-pointer transition-all border-none outline-hidden"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                      m.role === "user"
                        ? "bg-[#00d4ff] text-slate-950 font-medium rounded-tr-none"
                        : "bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] text-gray-200 rounded-tl-none whitespace-pre-wrap"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-2xl rounded-tl-none p-3 max-w-[80%] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Preset Suggested Prompts */}
            <div className="px-4 py-2 border-t border-[rgba(255,255,255,0.04)] bg-[rgba(0,0,0,0.2)]">
              <p className="text-[10px] text-gray-500 font-semibold uppercase mb-1 tracking-wider">Suggested Queries</p>
              <div className="flex flex-wrap gap-1 max-h-[80px] overflow-y-auto scrollbar-none">
                {SUGGESTED_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(prompt)}
                    className="text-[10px] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(0,212,255,0.08)] border border-[rgba(255,255,255,0.05)] text-gray-400 hover:text-[#00d4ff] px-2 py-1 rounded-lg text-left cursor-pointer transition-all line-clamp-1 truncate max-w-full inline-block"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 border-t border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.01)] flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about AI Automation, bookings..."
                className="flex-1 px-3 py-2 bg-[#050508] border border-[rgba(255,255,255,0.08)] rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4ff]"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-9 h-9 rounded-xl bg-linear-to-r from-[#00d4ff] to-[#00b8a9] flex items-center justify-center text-slate-950 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-all cursor-pointer border-none outline-hidden"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
