import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "outline" | "filled" | "ghost";
type Size = "sm" | "md" | "lg";
type Tone = "dark" | "light" | "gold";

const sizeClasses: Record<Size, string> = {
  sm: "px-5 py-2 text-xs",
  md: "px-7 py-3 text-sm",
  lg: "px-9 py-4 text-base",
};

function variantClasses(variant: Variant, tone: Tone): string {
  if (variant === "filled") {
    if (tone === "gold")
      return "bg-gold text-white border border-gold hover:bg-transparent hover:text-gold";
    if (tone === "light")
      return "bg-white text-charcoal border border-white hover:bg-transparent hover:text-white";
    return "bg-charcoal text-white border border-charcoal hover:bg-transparent hover:text-charcoal";
  }
  if (variant === "ghost") {
    if (tone === "light")
      return "border border-transparent text-white hover:text-gold";
    return "border border-transparent text-charcoal hover:text-gold";
  }
  // outline
  if (tone === "gold")
    return "border border-gold text-gold hover:bg-gold hover:text-white";
  if (tone === "light")
    return "border border-white text-white hover:bg-white hover:text-charcoal";
  return "border border-charcoal text-charcoal hover:bg-charcoal hover:text-white";
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-inter uppercase tracking-widest font-medium transition-colors duration-500 ease-smooth focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold disabled:opacity-50 disabled:cursor-not-allowed";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button(props: ButtonProps) {
  const {
    variant = "outline",
    size = "md",
    tone = "dark",
    className = "",
    children,
  } = props;

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses(
    variant,
    tone
  )} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href } = props;
    const isExternal = /^https?:|^mailto:|^tel:/.test(href);
    if (isExternal) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, tone: _t, className: _c, children: _ch, href: _h, ...rest } =
    props as ButtonAsButton;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
