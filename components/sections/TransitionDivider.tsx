"use client";

import { useRef, useEffect } from "react";

export default function TransitionDivider() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ctx: gsap.Context | undefined;

    import("@/lib/gsapConfig").then(({ gsap }) => {
      ctx = gsap.context(() => {
        gsap.fromTo(
          el.querySelector(".divider-line"),
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true,
            },
          }
        );
      }, el);
    });

    return () => ctx?.revert();
  }, []);

  return (
    <div ref={ref} className="py-20 md:py-32 flex items-center justify-center px-6 md:px-12">
      <div className="divider-line w-full max-w-[80vw] h-[1px] bg-chiro-charcoal origin-left" />
    </div>
  );
}
