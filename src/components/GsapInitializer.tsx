"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

export default function GsapInitializer() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

      // Global GSAP Defaults
      gsap.defaults({
        ease: "power3.out",
        duration: 1,
      });

      // Refresh ScrollTrigger on layout changes
      ScrollTrigger.refresh();
    }
  }, []);

  return null;
}
