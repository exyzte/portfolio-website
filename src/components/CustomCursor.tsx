"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const onTouchStart = () => {
      gsap.set(cursor, { opacity: 0 });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchstart", onTouchStart);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchstart", onTouchStart);
    };
  }, []);

  useEffect(() => {
    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverData = target.closest("[data-cursor]");
      
      if (hoverData) {
        setIsHovering(true);
        setCursorText(hoverData.getAttribute("data-cursor") || "");
        gsap.to(cursorRef.current, {
          scale: 4,
          backgroundColor: "#FACC15",
          mixBlendMode: "difference",
          duration: 0.3,
        });
      } else {
        setIsHovering(false);
        setCursorText("");
        gsap.to(cursorRef.current, {
          scale: 1,
          backgroundColor: "#FFFFFF",
          mixBlendMode: "normal",
          duration: 0.3,
        });
      }
    };

    window.addEventListener("mouseover", handleHover);
    return () => window.removeEventListener("mouseover", handleHover);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white pointer-events-none z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 overflow-hidden mix-blend-difference hidden md:flex"
    >
      {isHovering && (
        <span className="text-[2px] font-black uppercase text-black">
          {cursorText}
        </span>
      )}
    </div>
  );
}
