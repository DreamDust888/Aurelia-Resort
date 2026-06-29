import Image from "next/image";
import type { ReactNode } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";

interface SplitFeatureProps {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  reverse?: boolean;
  children?: ReactNode;
}

export default function SplitFeature({
  image,
  imageAlt,
  eyebrow,
  title,
  body,
  reverse = false,
  children,
}: SplitFeatureProps) {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch lg:grid-cols-2">
      <AnimatedSection
        className={`relative min-h-[360px] lg:min-h-[560px] ${
          reverse ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </AnimatedSection>

      <AnimatedSection
        delay={0.15}
        className={`flex flex-col justify-center px-6 py-20 lg:px-16 ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          align="left"
          subtitle={body}
        />
        {children && <div className="mt-10">{children}</div>}
      </AnimatedSection>
    </div>
  );
}
