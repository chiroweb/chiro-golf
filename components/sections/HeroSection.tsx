"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "@/components/common/Logo";
import { BRAND, PLACEHOLDER } from "@/lib/constants";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const content = contentRef.current;
    if (!section || !video || !content) return;

    let ctx: gsap.Context | undefined;

    import("@/lib/gsapConfig").then(({ gsap }) => {
      ctx = gsap.context(() => {
        gsap.to(video, {
          yPercent: 50,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(content, {
          yPercent: -150,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "60% top",
            scrub: true,
          },
        });
      }, section);
    });

    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[100dvh] overflow-hidden"
    >
      {/* Hero background image */}
      <div
        ref={videoRef}
        className="absolute inset-0 will-change-transform"
        style={{ background: PLACEHOLDER.heroBg }}
      />

      {/* Refined cinematic overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.72) 100%)",
        }}
      />

      {/* Center content */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col items-center justify-center will-change-transform"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={loaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Logo size="xl" className="text-chiro-light" />
        </motion.div>

        <motion.p
          className="mt-6 md:mt-8 text-sm md:text-base font-[300] tracking-[0.3em] text-chiro-silver uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          {BRAND.tagline}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-[10px] tracking-[0.3em] text-chiro-gray uppercase">Scroll</span>
        <motion.div
          className="w-[1px] h-8 bg-chiro-gray"
          animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
