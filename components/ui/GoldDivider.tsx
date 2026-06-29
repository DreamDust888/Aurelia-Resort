interface GoldDividerProps {
  className?: string;
  diamond?: boolean;
  width?: string;
}

export default function GoldDivider({
  className = "",
  diamond = true,
  width = "w-24",
}: GoldDividerProps) {
  return (
    <div
      className={`flex items-center justify-center gap-4 ${className}`}
      role="presentation"
    >
      <span className={`h-px ${width} bg-gold/60`} />
      {diamond && (
        <span
          className="h-2 w-2 rotate-45 border border-gold"
          aria-hidden="true"
        />
      )}
      <span className={`h-px ${width} bg-gold/60`} />
    </div>
  );
}
