"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Languages, Code2, Bot } from "lucide-react";
import LineOfGrowth from "./LineOfGrowth";

const ROADMAP_STEPS = [
  {
    period: "2018 - 2023",
    title: "Modern Languages Expert",
    icon: <Languages className="w-6 h-6" />,
    description: "Deep dive into linguistic structures, semantics, and syntax. Developed advanced pattern recognition skills that translate directly to logical thinking.",
    skills: ["Comparative Linguistics", "Syntax Analysis", "Communication Theory", "Digital Design, content & community management"],
    color: "from-blue-500/20 to-transparent"
  },
  {
    period: "2023 - 2025",
    title: "Full Stack Foundations",
    icon: <Code2 className="w-6 h-6" />,
    description: "Mastery of the MERN stack with a focus on building structured, scalable web architectures. IBM Full Stack Developer certified, with a passion for clean code and intuitive UI/UX design.",
    skills: ["MERN Stack", "TypeScript", "UI/UX Design", "Agile Methodologies", "Kubernetes & Cloud Deployment"],
    color: "from-purple-500/20 to-transparent"
  },
  {
    period: "2025 - Present",
    title: "AI Agent Architect",
    icon: <Bot className="w-6 h-6" />,
    description: "Specializing in the development of autonomous agents and LLM-powered interfaces. Creating seamless human-AI interactions. Integrating AI into Full Stack Apps",
    skills: ["AI Agents", "Prompt Engineering", "RAG Systems"],
    color: "from-yellow-500/20 to-transparent"
  }
];

export default function Roadmap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const steps = gsap.utils.toArray(".roadmap-step");
    
    steps.forEach((step: any, i: number) => {
      gsap.fromTo(step, 
        { 
          opacity: 0, 
          x: i % 2 === 0 ? -100 : 100,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="relative w-full max-w-6xl mx-auto px-4 py-32 overflow-hidden">
      <LineOfGrowth />
      
      <div className="text-center mb-24 relative z-10">
        <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter mb-4">
          The <span className="text-yellow-400">Roadmap</span>
        </h2>
        <p className="text-neutral-500 max-w-xl mx-auto font-mono text-sm uppercase tracking-widest">
          Linguistic Precision → Machine Intelligence
        </p>
      </div>

      <div className="space-y-32 relative z-10 py-20">
        {ROADMAP_STEPS.map((step, index) => (
          <div
            key={index}
            className={`roadmap-step flex flex-col md:flex-row items-center gap-12 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Card */}
            <div className="flex-1 w-full">
              <div className={`p-10 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl hover:border-yellow-400/20 transition-colors duration-500 group relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 pointer-events-none`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="p-4 rounded-2xl bg-white/5 text-yellow-500 group-hover:scale-110 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
                      {step.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-yellow-500/50 uppercase tracking-widest">{step.period}</span>
                      <h3 className="text-2xl font-black text-white italic">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-neutral-400 leading-relaxed mb-8 text-sm">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 text-[9px] uppercase font-bold tracking-widest bg-white/5 border border-white/10 text-neutral-300 rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Center Dot */}
            <div className="relative z-20 shrink-0">
               <div className="w-12 h-12 rounded-full border border-white/10 bg-black flex items-center justify-center group-hover:border-yellow-400 transition-colors">
                  <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_20px_#FACC15]" />
               </div>
            </div>

            <div className="flex-1 md:block hidden" />
          </div>
        ))}
      </div>
    </section>
  );
}
