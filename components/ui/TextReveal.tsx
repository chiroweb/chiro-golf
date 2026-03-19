"use client";

import { useRef, useEffect } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let ctx: gsap.Context | undefined;

    import("@/lib/gsapConfig").then(({ gsap, ScrollTrigger }) => {
      ctx = gsap.context(() => {
        const chars = el.querySelectorAll(".char");
        gsap.set(chars, { opacity: 0, y: 20 });

        gsap.to(chars, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.03,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      }, el);
    });

    return () => ctx?.revert();
  }, [delay]);

  const chars = children.split("").map((char, i) => (
    <span key={i} className="char inline-block" style={{ whiteSpace: char === " " ? "pre" : undefined }}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <Tag ref={containerRef as React.RefObject<HTMLElement & HTMLDivElement>} className={className}>
      {chars}
    </Tag>
  );
}
