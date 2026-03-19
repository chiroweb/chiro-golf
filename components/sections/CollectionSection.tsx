"use client";

import { useRef, useEffect } from "react";
import { COLLECTIONS, PLACEHOLDER } from "@/lib/constants";
import { useIsMobile } from "@/hooks/useMediaQuery";

export default function CollectionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let ctx: gsap.Context | undefined;

    import("@/lib/gsapConfig").then(({ gsap }) => {
      ctx = gsap.context(() => {
        const totalScroll = track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${totalScroll}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        const cards = track.querySelectorAll<HTMLElement>(".collection-card");
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { rotateY: 5, opacity: 0.7 },
            {
              rotateY: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                containerAnimation: gsap.getById?.("horizontalScroll") || undefined,
                start: "left 80%",
                end: "left 50%",
                scrub: 1,
                horizontal: true,
              },
            }
          );
        });
      }, section);
    });

    return () => ctx?.revert();
  }, [isMobile]);

  if (isMobile) {
    return (
      <section id="collection" className="py-20 px-4">
        <h2 className="text-xs tracking-[0.3em] text-chiro-gray uppercase mb-12 text-center">
          Collections
        </h2>
        <div className="flex flex-col gap-8">
          {COLLECTIONS.map((col, i) => (
            <div key={col.name} className="w-[85vw] mx-auto">
              <div
                className="aspect-[3/4] mb-4"
                style={{ background: PLACEHOLDER.collectionImages[i] }}
              />
              <p className="text-xs tracking-[0.3em] text-chiro-gray uppercase mb-1">
                {col.subtitle}
              </p>
              <h3 className="text-2xl font-[500] text-chiro-black tracking-[0.1em] uppercase">
                {col.name}
              </h3>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="collection" className="relative overflow-hidden">
      <div ref={trackRef} className="flex items-center h-[100dvh] gap-8 pl-[10vw] pr-[10vw]" style={{ width: "fit-content" }}>
        {/* Section label */}
        <div className="flex-shrink-0 w-[20vw] flex flex-col justify-center">
          <p className="text-xs tracking-[0.3em] text-chiro-gray uppercase mb-4">Collections</p>
          <h2 className="text-4xl font-[200] text-chiro-black tracking-[0.1em]">
            Explore<br />Our Lines
          </h2>
        </div>

        {COLLECTIONS.map((col, i) => (
          <div
            key={col.name}
            className="collection-card flex-shrink-0 w-[40vw] perspective-[1000px]"
          >
            <div
              className="aspect-[3/4] mb-6"
              style={{ background: PLACEHOLDER.collectionImages[i] }}
            />
            <p className="text-xs tracking-[0.3em] text-chiro-gray uppercase mb-1">
              {col.subtitle}
            </p>
            <h3 className="text-xl font-[500] text-chiro-black tracking-[0.1em] uppercase">
              {col.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
