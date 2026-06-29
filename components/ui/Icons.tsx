import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function PoolIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 18c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1" />
      <path d="M6 14V5a2 2 0 0 1 4 0M6 9h4" />
      <path d="M16 14V5a2 2 0 0 1 4 0M16 9h4" />
    </svg>
  );
}

export function SpaIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21c0-4-2-7-6-9 4 0 7 2 8 5 1-3 4-5 8-5-4 2-6 5-6 9" />
      <path d="M12 16c0-3 0-6 2-9-3 1-5 4-5 7" />
    </svg>
  );
}

export function DiningIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3v8a2 2 0 0 0 4 0V3M8 11v10M16 3c-1.5 0-2 1.5-2 4s.5 4 2 4M16 3v18" />
    </svg>
  );
}

export function YogaIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v5M4 20l8-3 8 3M7 13l5-1 5 1" />
    </svg>
  );
}

export function AdventureIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m3 19 6-13 5 9M9 6l6 13M14 12l3-5 4 12" />
    </svg>
  );
}

export function CultureIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21h18M4 21V10l8-5 8 5v11M9 21v-6h6v6M4 10h16" />
    </svg>
  );
}

export function WifiIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12.5a10 10 0 0 1 14 0M8 16a5 5 0 0 1 8 0" />
      <circle cx="12" cy="19" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function AcIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="6" rx="1" />
      <path d="M7 15v1M12 15v3M17 15v1M7 8h.01M10 8h4" />
    </svg>
  );
}

export function ViewIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

export function BreakfastIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8h12v3a6 6 0 0 1-12 0V8ZM16 9h2a2 2 0 0 1 0 4h-2M5 4c0 1 1 1 1 2M9 4c0 1 1 1 1 2M13 4c0 1 1 1 1 2" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 20l1.1-5.4A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M9 9c0 4 2 6 6 6 .8 0 1-.8 1-1.3 0-.3-.2-.5-.5-.6l-1.4-.6c-.3-.1-.6 0-.7.3-.2.4-.5.5-.9.3-1-.5-1.6-1.1-2-2-.2-.4-.1-.7.3-.9.3-.1.4-.4.3-.7l-.6-1.4c-.1-.3-.3-.5-.6-.5C9.8 8 9 8.2 9 9Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M15 4h-2a3 3 0 0 0-3 3v3H8v3h2v8h3v-8h2.5l.5-3H13V7a1 1 0 0 1 1-1h1V4Z" />
    </svg>
  );
}

export function PinterestIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M11 16c-.5 1.5-1 2.5-2 3.5M9 13c-.3-1 .2-3 1.5-4.2C12 7.5 14 7.8 15 9c1.2 1.4.8 4-1 4.8-1 .4-2 0-2.2-.8" />
    </svg>
  );
}

export const amenityIcons: Record<string, (p: IconProps) => JSX.Element> = {
  wifi: WifiIcon,
  ac: AcIcon,
  view: ViewIcon,
  breakfast: BreakfastIcon,
};

export const experienceStripIcons: Record<string, (p: IconProps) => JSX.Element> = {
  pool: PoolIcon,
  spa: SpaIcon,
  dining: DiningIcon,
  yoga: YogaIcon,
};

export const experienceIcons: Record<string, (p: IconProps) => JSX.Element> = {
  spa: SpaIcon,
  adventure: AdventureIcon,
  yoga: YogaIcon,
  culture: CultureIcon,
};

export const amenityLabels: Record<string, string> = {
  wifi: "Wi-Fi",
  ac: "Climate Control",
  view: "Sea View",
  breakfast: "Breakfast",
};
