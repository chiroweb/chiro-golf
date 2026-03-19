"use client";

import { useRef, useEffect } from "react";

interface SplitTextProps {
  children: string;
  className?: string;
  scrub?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export default function SplitText({
  children,
  className = "",
  scrub = false,
  as: Tag = "div",
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let ctx: gsap.Context | undefined;

    import("@/lib/gsapConfig").then(({ gsap }) => {
      ctx = gsap.context(() => {
        const chars = el.querySelectorAll(".split-char");

        if (scrub) {
          gsap.fromTo(
            chars,
            { opacity: 0.15 },
            {
              opacity: 1,
              stagger: 0.05,
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                end: "bottom 40%",
                scrub: 1,
              },
            }
          );
        } else {
          gsap.set(chars, { opacity: 0, y: 30 });
          gsap.to(chars, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.02,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          });
        }
      }, el);
    });

    return () => ctx?.revert();
  }, [scrub]);

  const chars = children.split("").map((char, i) => (
    <span
      key={i}
      className="split-char inline-block"
      style={{ whiteSpace: char === " " ? "pre" : undefined }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <Tag ref={containerRef as React.RefObject<HTMLElement & HTMLDivElement>} className={className}>
      {chars}
    </Tag>
  );
}
