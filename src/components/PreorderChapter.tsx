import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";
import KnotLogo from "./KnotLogo";
import { CLAIMED, TOTAL, PRICE, RETAIL, VARIANTS } from "../lib/data";

function useCounter(target: number, run: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / 1800);
      setVal(Math.round(target * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target]);
  return val;
}

export default function PreorderChapter({ onReserve }: { onReserve: () => void }) {
  const barRef = useRef<HTMLDivElement>(null);
  const inView = useInView(barRef, { once: true, margin: "-80px" });
  const claimed = useCounter(CLAIMED, inView);

  return (
    <section id="preorder" className="bg-ruled relative">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow index="06" title="Chapter — Preorder" />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-6 text-[13vw] leading-[0.92] font-extrabold tracking-[-0.03em] text-pine uppercase sm:text-[10vw] lg:text-[5.4vw]">
                Claim yours
                <br />
                before the loom
                <br />
                <span className="text-coral-deep">rests.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-10 flex flex-col gap-0 border-t border-pine/20">
                {[
                  ["Reserve", "Pick a pastel and a size. Nothing is charged today."],
                  ["We weave", "Lot Nº1 goes on the loom in March, in order of reservation."],
                  ["It ships", "Late April. You pay only when your shirt leaves the atelier."],
                ].map(([t, d], i) => (
                  <div key={t} className="grid grid-cols-[36px_150px_1fr] items-baseline gap-4 border-b border-pine/20 py-5">
                    <span className="font-display text-xs font-bold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg font-bold text-pine">{t}</span>
                    <span className="text-[13px] font-light text-pine-soft">{d}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ——— price card ——— */}
          <Reveal delay={0.1}>
            <div className="relative rounded-[28px] border border-pine/20 bg-celadon p-8 shadow-[0_50px_100px_-60px_rgba(19,32,25,0.7)] md:p-10">
              <div className="absolute -top-4 right-8 rotate-3 rounded-xl bg-accent px-4 py-2 font-display text-xs font-bold tracking-[0.12em] text-ivory uppercase shadow-lg">
                $0 today
              </div>
              <div className="flex items-center justify-between">
                <KnotLogo size={30} withWordmark={false} />
                <p className="text-[10.5px] font-semibold tracking-[0.24em] text-pine/60 uppercase">
                  Lot Nº1 · SS'25
                </p>
              </div>
              <div className="mt-8 flex items-baseline gap-4">
                <p className="font-display text-7xl font-extrabold tracking-tight text-pine">
                  ${PRICE}
                </p>
                <p className="font-display text-xl font-bold text-pine/40 line-through">
                  ${RETAIL}
                </p>
                <p className="text-[10.5px] tracking-[0.2em] text-pine/50 uppercase">preorder price</p>
              </div>

              <div ref={barRef} className="mt-8">
                <div className="flex items-baseline justify-between text-[11px] font-semibold tracking-[0.18em] text-pine/70 uppercase">
                  <span>{claimed} / {TOTAL} claimed</span>
                  <span className="text-accent">{TOTAL - CLAIMED} left</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-pine/15">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${(CLAIMED / TOTAL) * 100}%` } : {}}
                    transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative h-full rounded-full bg-coral"
                  >
                    <span className="absolute -top-0.5 right-0 h-3 w-[3px] bg-accent" />
                  </motion.div>
                </div>
              </div>

              <div className="mt-7 flex gap-2">
                {VARIANTS.map((s) => (
                  <span
                    key={s.id}
                    title={s.name}
                    className="h-7 w-7 rounded-full border border-pine/25"
                    style={{ backgroundColor: s.hex }}
                  />
                ))}
                <span className="ml-2 self-center text-[11px] tracking-[0.18em] text-pine/55 uppercase">
                  all four pastels
                </span>
              </div>

              <ul className="mt-7 flex flex-col gap-2.5 text-[13px] font-light text-pine/80">
                {[
                  "Free size exchanges, forever re-hemming",
                  "Numbered inside the collar — 1 of 350",
                  "Ships worldwide, carbon-balanced",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <Check size={14} className="text-accent" strokeWidth={3} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={onReserve}
                className="group mt-9 flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-pine py-5 font-display text-base font-bold text-ivory transition-all duration-300 hover:bg-pine-deep active:scale-[0.98]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
                Open the preorder
                <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <p className="mt-4 text-center text-[11px] tracking-[0.16em] text-pine/50 uppercase">
                When 350 are claimed, the loom rests
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
