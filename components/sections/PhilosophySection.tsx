"use client";

import { useRef, useEffect } from "react";
import { PHILOSOPHY_LINES } from "@/lib/constants";

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let ctx: gsap.Context | undefined;

    import("@/lib/gsapConfig").then(({ gsap }) => {
      ctx = gsap.context(() => {
        const lines = el.querySelectorAll<HTMLElement>(".philosophy-line");
        const dividers = el.querySelectorAll<HTMLElement>(".philosophy-divider");

        lines.forEach((line, i) => {
          const direction = PHILOSOPHY_LINES[i]?.direction;
          const xStart = direction === "left" ? -100 : 100;

          gsap.fromTo(
            line,
            { x: xStart, opacity: 0.2 },
            {
              x: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: `${15 + i * 20}% center`,
                end: `${35 + i * 20}% center`,
                scrub: 1,
              },
            }
          );
        });

        dividers.forEach((divider, i) => {
          gsap.fromTo(
            divider,
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: `${25 + i * 20}% center`,
                end: `${35 + i * 20}% center`,
                scrub: 1,
              },
            }
          );
        });
      }, el);
    });

    return () => ctx?.revert();
  }, []);

  return (
    <section ref={sectionRef} id="philosophy" className="relative h-[200vh]">
      <div className="sticky top-0 h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-6">
        {PHILOSOPHY_LINES.map((line, i) => (
          <div key={i} className="w-full flex flex-col items-center">
            <div
              className="philosophy-line whitespace-nowrap text-chiro-black text-center"
              style={{
                fontSize: `clamp(1.5rem, ${line.size}, 8rem)`,
                fontWeight: line.weight,
              }}
            >
              {line.text}
            </div>
            {i < PHILOSOPHY_LINES.length - 1 && (
              <div className="philosophy-divider w-[60%] max-w-[600px] h-[1px] bg-chiro-silver/30 my-4 md:my-6 origin-left" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
