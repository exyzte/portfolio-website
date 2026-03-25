"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroTerminal from "@/components/HeroTerminal";
import BentoGrid from "@/components/BentoGrid";
import Roadmap from "@/components/Roadmap";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        stagger: 0.2,
        delay: 0.8,
      });

      gsap.from("nav", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#000000]">
      {/* Navigation */}
      <nav className="fixed top-8 z-[100] px-8 py-4 rounded-2xl border border-white/5 bg-black/40 backdrop-blur-2xl flex items-center gap-12 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-[0_0_10px_#FACC15]" />
          <span className="text-[10px] font-mono font-black tracking-[0.2em] uppercase text-white/40">David Cicery</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#projects" className="text-[10px] font-bold text-white/60 hover:text-yellow-400 transition-colors uppercase tracking-[0.2em]" data-cursor="GO">Projects</a>
          <a href="#about" className="text-[10px] font-bold text-white/60 hover:text-yellow-400 transition-colors uppercase tracking-[0.2em]" data-cursor="GO">Roadmap</a>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-5">
            <a href="https://github.com/exyzte" target="_blank"><Github  size={16} className="text-white/40 hover:text-white transition-colors cursor-pointer" data-cursor="VIEW" /></a>
            <a href="https://www.linkedin.com/in/david-cicery-471355229/"><Linkedin size={16} className="text-white/40 hover:text-white transition-colors cursor-pointer" data-cursor="VIEW" /></a>
            <a href="mailto:[davidecicerys@gmail.com]" target="_blank"><Mail size={16} className="text-white/40 hover:text-white transition-colors cursor-pointer" data-cursor="VIEW" /></a>
          </div> 
        </div>
      </nav>

      <section className="relative pt-48 pb-24 w-full text-center px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-yellow-400/5 to-transparent pointer-events-none opacity-50" />

        <div ref={titleRef} className="relative z-10 w-full">
          <h1 className="reveal-text text-5xl md:text-[8rem] font-black leading-[0.85] tracking-tighter text-white italic mb-10">
            FULL STACK<br />
            <span className="bg-linear-to-r from-blue-400 to-yellow-600 bg-clip-text text-transparent pr-2 md:pr-4">DEVELOPER</span>
          </h1>
          <p className="reveal-text max-w-2xl mx-auto md:text-lg font-medium mb-16 px-4">
            Building high-performance full-stack apps with precision and creativity, integrating AI & Automation flows.
          </p>
        </div>
      </section>

      <div className="w-80 h-120 relative px-4">
        <HeroTerminal />
      </div>

      <div id="projects" className="w-full pt-32">
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-yellow-500/50 mb-4 block">Proof of Concept</span>
          <h2 className="text-3xl md:text-8xl font-black text-white italic tracking-tighter">Selected <span className="bg-gradient-to-r from-blue-400 to-yellow-600 bg-clip-text text-transparent italic pr-2 md:pr-4">Works</span></h2>
        </div>
        <BentoGrid />
      </div>

      <div id="about" className="w-full pt-32">
        <Roadmap />
      </div>

      <footer className="w-full py-20 border-t border-white/5 text-center mt-32 bg-black/40">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-neutral-600 text-[10px] font-mono uppercase tracking-widest">
            &copy; 2026 David Cicery. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-mono uppercase tracking-widest text-neutral-500">
            <span className="hover:text-white transition-colors cursor-pointer">Built with Next.js 15</span>
            <span className="hover:text-white transition-colors cursor-pointer">GSAP 3.12</span>
            <span className="hover:text-white transition-colors cursor-pointer">Lenis 1.0</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
