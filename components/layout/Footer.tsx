"use client";

import { useRef, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    let ctx: gsap.Context | undefined;

    import("@/lib/gsapConfig").then(({ gsap }) => {
      ctx = gsap.context(() => {
        const chars = el.querySelectorAll(".footer-char");
        gsap.fromTo(
          chars,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.03,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          el.querySelectorAll(".footer-link"),
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.6,
            delay: 0.3,
            ease: "power3.out",
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

  const wordmark = "CHIRO";

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative h-[50vh] flex items-center px-6 md:px-12 border-t border-chiro-charcoal"
    >
      <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        {/* Large wordmark */}
        <div className="text-[12vw] md:text-[10vw] font-[200] text-chiro-charcoal tracking-[0.3em] leading-none select-none">
          {wordmark.split("").map((char, i) => (
            <span key={i} className="footer-char inline-block">
              {char}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4 pb-2 md:pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="footer-link text-xs tracking-[0.3em] text-chiro-gray hover:text-chiro-silver transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
          <p className="footer-link text-xs tracking-[0.2em] text-chiro-gray/50 mt-4">
            &copy; 2025 CHIRO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
