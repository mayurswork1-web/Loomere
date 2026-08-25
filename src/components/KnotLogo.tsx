type Props = {
  size?: number;
  withWordmark?: boolean;
  light?: boolean;
};

/**
 * The LOOMERE knot — a single coral thread tied in a vertical figure-eight,
 * bound at the crossing with the one red accent.
 */
export default function KnotLogo({ size = 34, withWordmark = true, light = false }: Props) {
  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
        <path
          d="M20 6.5 C30.5 6.5 32.5 20 20 20 C7.5 20 9.5 33.5 20 33.5 C30.5 33.5 32.5 20 20 20"
          fill="none"
          stroke="#E9664A"
          strokeWidth="3.1"
          strokeLinecap="round"
        />
        <path d="M15.9 23.9 L24.4 15.7" stroke="#D5372A" strokeWidth="3.3" strokeLinecap="round" />
      </svg>
      {withWordmark && (
        <span
          className={`font-display font-extrabold tracking-[-0.02em] leading-none ${
            light ? "text-ivory" : "text-pine"
          }`}
          style={{ fontSize: size * 0.62 }}
        >
          LOOMERE<span className="text-accent">.</span>
        </span>
      )}
    </span>
  );
}

/** Tiny knot glyph used as a separator / bullet. */
export function KnotMark({ className = "", stroke = "#D5372A" }: { className?: string; stroke?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 40 40" aria-hidden="true">
      <path
        d="M20 6.5 C30.5 6.5 32.5 20 20 20 C7.5 20 9.5 33.5 20 33.5 C30.5 33.5 32.5 20 20 20"
        fill="none"
        stroke={stroke}
        strokeWidth="4.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
