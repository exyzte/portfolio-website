"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Terminal, Send, ChevronRight } from "lucide-react";

export default function HeroTerminal() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const fullText = "Translating syntax from Human to Machine...";

  useEffect(() => {
    // Reveal Terminal Animation
    gsap.fromTo(
      terminalRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "expo.out", delay: 0.5 }
    );

    // Typewriter effect using GSAP
    if (textRef.current) {
      let ctx = gsap.context(() => {
        gsap.to(".cursor", {
          opacity: 0,
          repeat: -1,
          duration: 0.5,
          ease: "steps(1)",
        });

        // Initialize with first message
        setTimeout(() => {
          setMessages([
            { role: "agent", content: "Initializing David's OS... [OK]" },
            { role: "agent", content: "Systems check complete. Linguistic patterns synchronized." },
          ]);
        }, 1500);
      });
      return () => ctx.revert();
    }
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-20 overflow-hidden">
      {/* Background Neural Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/10 blur-[120px] rounded-full -z-10 animate-pulse" />

      <div ref={terminalRef} className="glass-card rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-white/5 border-b border-white/5 px-4 py-3 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
          </div>
          <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">SOVEREIGN_AGENT_v1.0.sh</span>
        </div>

        {/* Terminal Body */}
        <div className="p-8 min-h-[400px] font-mono text-sm space-y-4">
          <div className="flex gap-3">
            <span className="text-yellow-400">david.ai ~</span>
            <span ref={textRef} className="text-white">
              {fullText}
              <span className="cursor inline-block w-2 h-4 bg-yellow-400 ml-1 align-middle" />
            </span>
          </div>

          <div className="space-y-4 pt-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 animate-in fade-in slide-in-from-left-2 duration-700 ${msg.role === 'user' ? 'text-yellow-400' : 'text-neutral-400'}`}>
                <span className="opacity-30">{msg.role === 'user' ? '>' : '●'}</span>
                <p className="leading-relaxed">{msg.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interaction Bar */}
        <div className="p-4 bg-black/40 border-t border-white/5 flex gap-4">
          <div className="flex items-center gap-4 text-[10px] text-neutral-500 font-mono uppercase tracking-tighter">
            <span className="hover:text-yellow-400 cursor-pointer transition-colors" data-cursor="VIEW">David -story</span>
            <span className="hover:text-yellow-400 cursor-pointer transition-colors" data-cursor="VIEW">David -projects</span>
            <span className="hover:text-yellow-400 cursor-pointer transition-colors" data-cursor="VIEW">David -tech</span>
          </div>
        </div>
      </div>
    </div>
  );
}
