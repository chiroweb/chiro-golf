"use client";

import { useRef, useEffect } from "react";

interface ParallaxImageProps {
  gradient: string;
  alt: string;
  className?: string;
  speed?: number;
  clipReveal?: boolean;
}

export default function ParallaxImage({
  gradient,
  alt,
  className = "",
  speed = 0.3,
  clipReveal = false,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) return;

    let ctx: gsap.Context | undefined;

    import("@/lib/gsapConfig").then(({ gsap }) => {
      ctx = gsap.context(() => {
        if (clipReveal) {
          gsap.fromTo(
            container,
            { clipPath: "inset(100% 0% 0% 0%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.2,
              ease: "power4.inOut",
              scrollTrigger: {
                trigger: container,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        gsap.fromTo(
          inner,
          { scale: 1.15, y: 0 },
          {
            scale: 1.0,
            y: -speed * 100,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }, container);
    });

    return () => ctx?.revert();
  }, [speed, clipReveal]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`} role="img" aria-label={alt}>
      <div
        ref={innerRef}
        className="w-full h-full will-change-transform"
        style={{ background: gradient, minHeight: "100%" }}
      />
    </div>
  );
}
