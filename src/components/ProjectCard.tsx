"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  isFeatured?: boolean;
  onClick?: () => void;
}

export default function ProjectCard({ title, description, tags, image, isFeatured, onClick }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const techBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Reveal Animation
    gsap.fromTo(card, 
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        }
      }
    );

    // Magnetic Hover Effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(imageRef.current, {
        x: x * 0.1,
        y: y * 0.1,
        rotationY: x * 0.05,
        rotationX: -y * 0.05,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(contentRef.current, {
        x: x * 0.05,
        y: y * 0.05,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => {
      gsap.to(techBarRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(imageRef.current, {
        scale: 1.1,
        duration: 0.6,
      });
    };

    const handleMouseLeave = () => {
      gsap.to([imageRef.current, contentRef.current], {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(techBarRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.5,
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0a] transition-colors hover:border-white/10 cursor-pointer ${
        isFeatured ? "md:col-span-2 aspect-16/9" : "aspect-7/8 flex flex-col justify-end"
      }`}
      data-cursor="VIEW"
    >
      {/* Background Image Wrapper */}
      <div ref={imageRef} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent z-10" />
        <div className="w-full h-full relative opacity-40 group-hover:opacity-60 transition-opacity transform-gpu">
          <Image src={image} alt={title} fill className="object-cover" />
          <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
             <span className="text-white/10 font-black text-6xl italic">{title[0]}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-20 h-full p-8 flex flex-auto justify-end ">
        <div className="mb-4 mr-5">  
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-yellow-500 mb-1 block">
            {isFeatured ? "Featured Project" : "Secondary Project"}
          </span>
          <h3 className="text-2xl font-black text-white italic -ml-0.5">{title}</h3>
        </div>
        
        <p className="text-white-600 mb-8 text-sm max-w-md min-w-5 line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {description}
        </p>
        <br></br>
        {/* Tech Bar (Slides In) */}
        <div ref={techBarRef} className="absolute inset-x-0 bottom-0 p-6 opacity-0 translate-y-5 mt-10">
           <div className="flex flex-wrap gap-2 p-3 rounded-xl glass-card">
             {tags.map(tag => (
               <span key={tag} className="px-2.5 py-1 text-[7px] uppercase font-bold tracking-widest bg-white/5 border border-white/10 text-white rounded-md">
                 {tag}
               </span>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}
