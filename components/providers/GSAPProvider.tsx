"use client";

import { useEffect } from "react";

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    async function init() {
      const { gsap } = await import("@/lib/gsapConfig");
      gsap.defaults({
        ease: "power3.out",
        duration: 1,
      });
    }
    init();
  }, []);

  return <>{children}</>;
}
