"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LineOfGrowth() {
  const lineRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    gsap.fromTo(line, 
      { strokeDashoffset: 1000, strokeDasharray: 1000 },
      {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block -translate-x-1/2 overflow-visible">
      <svg className="h-full w-4 -ml-2 overflow-visible">
        <path
          ref={lineRef}
          d="M 2 0 V 10000"
          stroke="#FACC15"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10"
        />
      </svg>
    </div>
  );
}
