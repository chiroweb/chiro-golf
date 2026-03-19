"use client";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
  sm: "text-lg tracking-[0.3em]",
  md: "text-2xl tracking-[0.4em]",
  lg: "text-4xl tracking-[0.5em]",
  xl: "text-6xl md:text-8xl tracking-[0.5em]",
};

export default function Logo({ className = "", size = "md" }: LogoProps) {
  return (
    <span
      className={`font-[200] uppercase select-none ${sizeMap[size]} ${className}`}
      style={{ fontFamily: "'General Sans', sans-serif" }}
    >
      CHIRO
    </span>
  );
}
