"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    let ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;

    import("@/lib/gsapConfig").then((mod) => {
      ScrollTrigger = mod.ScrollTrigger;
      ScrollTrigger.defaults({ scroller: undefined });

      lenis.on("scroll", () => {
        ScrollTrigger.update();
      });
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
