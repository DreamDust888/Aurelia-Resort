import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
  className = "",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const titleColor = tone === "light" ? "text-white" : "text-charcoal";
  const subColor = tone === "light" ? "text-white/70" : "text-charcoal/65";

  return (
    <div className={`flex max-w-2xl flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <span className="mb-4 font-inter text-xs font-medium uppercase tracking-widest text-gold">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-cormorant text-4xl font-light leading-tight sm:text-5xl ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 font-inter text-base font-light leading-relaxed ${subColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
