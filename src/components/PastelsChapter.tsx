import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow, PrimaryButton, Reveal } from "./ui";
import { VARIANTS, PRICE } from "../lib/data";

export default function PastelsChapter({
  onReserve,
}: {
  onReserve: (variantId: string) => void;
}) {
  const [active, setActive] = useState(0);
  const v = VARIANTS[active];

  return (
    <section id="pastels" className="relative border-t border-pine/15 bg-ivory">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <Eyebrow index="04" title="Chapter — Pastels" />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-6 text-5xl leading-[0.95] font-extrabold tracking-[-0.02em] text-pine uppercase md:text-7xl">
                One cut,
                <br />
                four <span className="text-coral-deep">quiet colours.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-xs text-sm leading-relaxed font-light text-pine-soft">
              All four pastels come off the same loom and share the same dye calendar. Coral is the
              first chord — the other three are its echoes.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* ——— image stage ——— */}
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-pine/15 bg-parchment shadow-[0_40px_90px_-50px_rgba(29,47,40,0.5)]">
              <AnimatePresence initial={false}>
                <motion.img
                  key={v.id}
                  src={v.img}
                  alt={`Loomere polo in ${v.name}`}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.985 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute top-4 left-4 rounded-full bg-ivory/90 px-4 py-2 backdrop-blur-sm">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={v.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="text-[10.5px] font-semibold tracking-[0.22em] text-pine uppercase"
                  >
                    {v.code} · {v.dye}
                  </motion.p>
                </AnimatePresence>
              </div>
              <div className="absolute right-4 bottom-4 rounded-full bg-pine px-4 py-2 font-display text-sm font-bold text-ivory">
                ${PRICE}
              </div>
            </div>

            {/* contact sheet */}
            <div className="no-scrollbar mt-5 flex gap-3 overflow-x-auto pb-1">
              {VARIANTS.map((th, i) => (
                <button
                  key={th.id}
                  onClick={() => setActive(i)}
                  className={`relative h-20 w-16 shrink-0 cursor-pointer overflow-hidden rounded-xl border transition-all duration-300 md:h-24 md:w-[76px] ${
                    i === active
                      ? "border-accent shadow-[0_8px_20px_-6px_rgba(213,55,42,0.45)]"
                      : "border-pine/15 opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`Show ${th.name}`}
                >
                  <img src={th.img} alt="" className="h-full w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </Reveal>

          {/* ——— variant panel ——— */}
          <div className="lg:pt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-4xl font-extrabold tracking-[-0.02em] text-pine md:text-5xl">
                    {v.name}
                  </h3>
                  <span className="font-display text-sm font-bold text-pine/40">{v.hex}</span>
                </div>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed font-light text-pine-soft">
                  {v.note}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* swatches */}
            <div className="mt-8 flex items-center gap-4">
              {VARIANTS.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  aria-label={`Select ${s.name}`}
                  className={`relative h-12 w-12 cursor-pointer rounded-full transition-transform duration-300 hover:scale-110 ${
                    i === active ? "scale-110" : ""
                  }`}
                  style={{ backgroundColor: s.hex }}
                >
                  <span
                    className={`absolute -inset-1.5 rounded-full border-2 transition-all duration-300 ${
                      i === active ? "border-accent opacity-100" : "border-pine/20 opacity-0"
                    }`}
                  />
                  {i === active && (
                    <motion.span
                      layoutId="swatchDot"
                      className="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent"
                    />
                  )}
                </button>
              ))}
              <span className="ml-2 text-[11px] tracking-[0.2em] text-pine/50 uppercase">
                {String(active + 1).padStart(2, "0")} / 04
              </span>
            </div>

            <div className="mt-10 border-t border-pine/15 pt-8">
              <ul className="flex flex-col gap-3 text-[13px] text-pine-soft">
                {[
                  "Garment-dyed as a finished shirt — colour lives in the seams",
                  "Numbered by hand inside the collar, 1 of 350",
                  "Fades a shade softer each year, then holds",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {li}
                  </li>
                ))}
              </ul>
              <PrimaryButton onClick={() => onReserve(v.id)} className="mt-8">
                Pre-order in {v.name} <ArrowUpRight size={16} />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
