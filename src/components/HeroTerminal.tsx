"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Terminal, Minus, Square, X } from "lucide-react";

export default function HeroTerminal() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const commandRef = useRef<HTMLSpanElement>(null);
  
  // Junior Tip: We use an array of refs so we can stagger multiple elements cleanly. 
  // This is way more performant than using React state timeouts to loop arrays!
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  // The new tech stack profile we want to print out
  const stackLines = [
    { type: 'system', text: "Loading developer profile..." },
    { type: 'output', text: "Stack   : MERN (MongoDB, Express, React, Node.js)" },
    { type: 'output', text: "Lang    : TypeScript 💙" },
    { type: 'output', text: "Styling : Tailwind CSS ✨" },
    { type: 'action', text: "Status  : Currently specializing in Next.js & AI Tools 🚀" },
  ];

  const commandText = "C:\\Users\\David> node profile.js";

  useEffect(() => {
    // Senior Tip: Always wrap your GSAP inside 'gsap.context()' in React 18+.
    // This allows us to revert all animations cleanly when the component unmounts,
    // avoiding rogue background animations and memory leaks.
    let ctx = gsap.context(() => {
      
      // 1. Reveal Terminal Window
      gsap.fromTo(
        terminalRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" } // power3 ease feels snappy and native
      );

      // 2. Animate the blinking cursor indefinitely
      gsap.to(".cursor", {
        opacity: 0,
        repeat: -1,
        duration: 0.6,
        ease: "steps(1)", // Senior Tip: 'steps(1)' creates a true binary ON/OFF blink instead of a smooth fade
        delay: 0.1
      });

      // 3. Create a Timeline sequence for typing out the command and staggering the responses
      // Using a timeline ensures events happen exactly in sequence.
      const tl = gsap.timeline({ delay: 0.5 });
      
      // Set the bottom prompt to be hidden initially
      gsap.set('.bottom-prompt', { opacity: 0 });

      // Start queuing animation steps!
      tl.fromTo(
        commandRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.1 }
      )
      // Staggering the tech stack lines
      // Instead of multiple SetTimeouts updating React state (which causes re-renders),
      // we map the DOM nodes and tell GSAP to stagger them in natively.
      .fromTo(
        linesRef.current,
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.5, ease: "power2.out" },
        "+=0.4" // A 0.4s pause before the outputs start spitting out
      )
      // Reveal the prompt at the bottom once everything finishes
      .to('.bottom-prompt', { opacity: 1, duration: 0.2 }, "+=0.2");

    });

    return () => ctx.revert(); // Crucial cleanup step
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-20 overflow-hidden">
      {/* Background Neural Glow - Adjusted color to be a bit more "cold" (blue) for Windows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full -z-10 animate-pulse" />

      {/* Windows UI Terminal Wrap */}
      <div ref={terminalRef} className="rounded-xl border border-white/10 overflow-hidden shadow-2xl bg-[#0c0c0c] font-sans">
        
        {/* Terminal Header - Windows Style */}
        {/* Senior Tip: Notice we swap rounded colorful dots for flex right-aligned icons */}
        <div className="bg-[#1e1e1e] border-b border-white/10 px-4 py-3 flex items-center justify-between select-none">
          <div className="flex items-center gap-3">
            <Terminal size={14} className="text-white/60" />
            <span className="text-xs text-white/60 tracking-wider">Command Prompt</span>
          </div>
          {/* Windows Window Controls */}
          <div className="flex gap-4 items-center">
             <Minus size={15} className="text-white/60 hover:text-white cursor-pointer transition-colors" />
             <Square size={13} className="text-white/60 hover:text-white cursor-pointer transition-colors" />
             <X size={17} className="text-white/60 hover:text-red-500 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-8 min-h-[350px] font-mono text-sm space-y-3">
          <div className="flex gap-3 items-center">
            <span ref={commandRef} className="text-gray-300">
              {commandText}
            </span>
          </div>

          <div className="space-y-3 pt-2">
            {stackLines.map((line, i) => (
              <div 
                key={i} 
                className="flex gap-3"
                ref={(el) => { linesRef.current[i] = el; }} // Assigning elements to our ref array
              >
                <span className={`leading-relaxed ${
                  line.type === 'system' ? 'text-gray-500' : 
                  line.type === 'action' ? 'text-yellow-400 font-bold' : 
                  'text-blue-300'
                }`}>
                  {line.text}
                </span>
              </div>
            ))}
            
            {/* The blinking cursor at the bottom (animated with GSAP later) */}
            <div className="pt-2 bottom-prompt">
               <span className="text-gray-300">C:\Users\David&gt;</span>
               <span className="cursor inline-block w-2 h-4 bg-gray-300 ml-1 align-middle" />
            </div>
          </div>
        </div>

        {/* Interaction Bar */}
        <div className="p-4 bg-black/40 border-t border-white/5 flex gap-4">
          <div className="flex items-center gap-4 text-[10px] text-gray-500 font-mono uppercase tracking-tighter">
            <span onClick={() => window.open("/projects", "_blank")} className="hover:text-blue-400 cursor-pointer transition-colors" data-cursor="VIEW">View Projects</span>
            <span onClick={() => window.open("https://github.com/exyzte", "_blank")} className="hover:text-blue-400 cursor-pointer transition-colors" data-cursor="VIEW">GitHub</span>
          </div>
        </div>
      </div>
    </div>
  );
}
