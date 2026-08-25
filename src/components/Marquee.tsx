import { KnotMark } from "./KnotLogo";
import { FABRIC_FACTS } from "../lib/data";

type Props = {
  tone?: "pine" | "celadon";
  reverse?: boolean;
  items?: string[];
};

/** Infinite fabric-facts marquee. Content is duplicated 2× for a seamless loop. */
export default function Marquee({ tone = "pine", reverse = false, items = FABRIC_FACTS }: Props) {
  const pine = tone === "pine";
  return (
    <div
      className={`relative z-10 overflow-hidden border-y py-4 ${
        pine ? "border-pine bg-pine text-ivory" : "border-pine/20 bg-celadon text-pine"
      }`}
    >
      <div
        className={`flex w-max items-center gap-10 pr-10 whitespace-nowrap ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        } hover:[animation-play-state:paused]`}
      >
        {[...items, ...items].map((fact, i) => (
          <span key={i} className="flex items-center gap-10" aria-hidden={i >= items.length}>
            <span className="font-display text-sm font-medium tracking-[0.22em] uppercase">
              {fact}
            </span>
            <KnotMark stroke={pine ? "#D5372A" : "#CD4F30"} />
          </span>
        ))}
      </div>
    </div>
  );
}
