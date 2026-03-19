"use client";

import { useRef, useEffect } from "react";
import ParallaxImage from "@/components/ui/ParallaxImage";
import SplitText from "@/components/ui/SplitText";
import { PLACEHOLDER } from "@/lib/constants";

export default function EditorialSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let ctx: gsap.Context | undefined;

    import("@/lib/gsapConfig").then(({ gsap }) => {
      ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".editorial-caption").forEach((caption) => {
          gsap.fromTo(
            caption,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: caption,
                start: "top 85%",
                once: true,
              },
            }
          );
        });
      }, el);
    });

    return () => ctx?.revert();
  }, []);

  return (
    <section ref={sectionRef} id="editorial" className="py-20 md:py-40 px-4 md:px-12">
      {/* Editorial headline */}
      <div className="mb-16 md:mb-32">
        <SplitText
          className="text-[8vw] md:text-[6vw] font-[200] text-chiro-black tracking-[0.05em] text-center"
          scrub
        >
          CRAFTED FOR THE COURSE
        </SplitText>
      </div>

      {/* Row 1: Large image left + caption right */}
      <div className="grid grid-cols-12 gap-4 md:gap-6 mb-8 md:mb-16">
        <div className="col-span-12 md:col-span-7">
          <ParallaxImage
            gradient={PLACEHOLDER.editorialImages[0]}
            alt="Editorial lookbook image 1"
            className="aspect-[4/5] md:aspect-[3/4]"
            clipReveal
          />
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col justify-end pb-8">
          <p className="editorial-caption text-xs tracking-[0.3em] text-chiro-gray uppercase mb-2">
            SS 2025
          </p>
          <p className="editorial-caption text-sm md:text-base font-[300] text-chiro-silver leading-relaxed">
            Precision engineered for those who understand that every detail on the course reflects
            a commitment to excellence.
          </p>
        </div>
      </div>

      {/* Row 2: Offset images with overlap */}
      <div className="grid grid-cols-12 gap-4 md:gap-6 mb-8 md:mb-16">
        <div className="col-span-12 md:col-span-5 md:col-start-3 md:mt-16">
          <ParallaxImage
            gradient={PLACEHOLDER.editorialImages[1]}
            alt="Editorial lookbook image 2"
            className="aspect-[4/5]"
            clipReveal
            speed={0.2}
          />
        </div>
        <div className="col-span-8 md:col-span-3 md:col-start-9 md:-mt-24">
          <ParallaxImage
            gradient={PLACEHOLDER.editorialImages[2]}
            alt="Editorial lookbook image 3"
            className="aspect-square"
            clipReveal
            speed={0.15}
          />
        </div>
      </div>

      {/* Row 3: Full-bleed horizontal */}
      <div className="mt-8 md:mt-16">
        <ParallaxImage
          gradient={PLACEHOLDER.editorialImages[3]}
          alt="Editorial lookbook panoramic"
          className="w-full h-[40vh] md:h-[50vh]"
          clipReveal
          speed={0.25}
        />
      </div>
    </section>
  );
}
