import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { KnotMark } from "./KnotLogo";

/** Scroll-reveal wrapper — fades and rises once when entering the viewport. */
export function Reveal({
  children,
  delay = 0,
  className = "",
  y = 28,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Chapter eyebrow — red index, hairline, title. */
export function Eyebrow({
  index,
  title,
  light = false,
  className = "",
}: {
  index: string;
  title: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="font-display text-[13px] font-bold tracking-tight text-accent">{index}</span>
      <span className={`h-px w-10 ${light ? "bg-ivory/40" : "bg-pine/30"}`} />
      <span
        className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${
          light ? "text-ivory/80" : "text-pine/70"
        }`}
      >
        {title}
      </span>
    </div>
  );
}

/** Primary pine button with the red knot-dot. */
export function PrimaryButton({
  children,
  onClick,
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative inline-flex cursor-pointer items-center gap-3 rounded-full bg-pine px-7 py-4 font-display text-sm font-bold tracking-wide text-ivory transition-all duration-300 hover:bg-pine-deep hover:shadow-[0_14px_40px_-12px_rgba(29,47,40,0.55)] active:scale-[0.98] ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
      {children}
    </button>
  );
}

/** Centered hairline divider with the knot and a quiet line of copy. */
export function KnotDivider({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-5">
      <span className={`h-px flex-1 ${light ? "bg-ivory/25" : "bg-pine/20"}`} />
      <KnotMark />
      <p
        className={`max-w-xs text-center text-[11.5px] leading-relaxed tracking-[0.14em] uppercase ${
          light ? "text-ivory/70" : "text-pine/60"
        }`}
      >
        {text}
      </p>
      <KnotMark className="-scale-x-100" />
      <span className={`h-px flex-1 ${light ? "bg-ivory/25" : "bg-pine/20"}`} />
    </div>
  );
}

/** Ghost button with hairline. */
export function GhostButton({
  children,
  onClick,
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex cursor-pointer items-center gap-2 rounded-full border border-pine/25 px-6 py-4 font-display text-sm font-bold tracking-wide text-pine transition-all duration-300 hover:border-pine hover:bg-pine/5 active:scale-[0.98] ${className}`}
    >
      {children}
    </button>
  );
}
