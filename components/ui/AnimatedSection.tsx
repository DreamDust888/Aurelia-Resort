"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ElementType, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds */
  delay?: number;
  /** Render as a different element, e.g. "section" | "article" | "li" */
  as?: ElementType;
  id?: string;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  as = "div",
  id,
}: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion(as as ElementType);

  return (
    <MotionTag
      id={id}
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
