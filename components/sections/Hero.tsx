"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronDownIcon } from "@/components/ui/Icons";

interface HeroProps {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** "full" = 100vh home hero, "short" = ~55vh inner-page hero */
  size?: "full" | "short";
  overlay?: number;
  parallax?: boolean;
  scrollIndicator?: boolean;
  children?: ReactNode;
  priority?: boolean;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero({
  image,
  imageAlt,
  eyebrow,
  title,
  subtitle,
  size = "full",
  overlay = 0.35,
  parallax = false,
  scrollIndicator = false,
  children,
  priority = true,
}: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const useParallax = parallax && !reduceMotion;

  const heightClass =
    size === "full" ? "h-[100svh] min-h-[600px]" : "h-[55vh] min-h-[380px]";

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.18, delayChildren: 0.1 },
    },
  };
  const item = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease },
    },
  };

  return (
    <section ref={ref} className={`relative ${heightClass} w-full overflow-hidden`}>
      {/* Background image (optionally parallax) */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={useParallax ? { y, scale: 1.15 } : undefined}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Dark overlay for legibility */}
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: `rgba(26,26,26,${overlay})` }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center"
      >
        {eyebrow && (
          <motion.span
            variants={item}
            className="mb-5 font-inter text-xs font-medium uppercase tracking-widest text-gold sm:text-sm"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          variants={item}
          className="font-cormorant font-light leading-[1.05] text-white text-balance"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={item}
            className="mt-6 max-w-xl font-inter text-base font-light text-white/80 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            {children}
          </motion.div>
        )}
      </motion.div>

      {/* Scroll indicator */}
      {scrollIndicator && (
        <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
          <ChevronDownIcon
            className="h-8 w-8 text-gold motion-safe:animate-bounce-slow"
            aria-hidden="true"
          />
        </div>
      )}
    </section>
  );
}
