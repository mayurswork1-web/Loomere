import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Eyebrow, PrimaryButton, GhostButton } from "./ui";
import KnotLogo from "./KnotLogo";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Spinning circular badge with the knot at its centre. */
function OrbitBadge() {
  return (
    <div className="relative h-28 w-28 md:h-32 md:w-32">
      <svg viewBox="0 0 120 120" className="animate-spin-slow absolute inset-0 h-full w-full">
        <defs>
          <path id="orbit" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <text className="fill-pine font-display text-[10.5px] font-semibold tracking-[0.24em] uppercase">
          <textPath href="#orbit">
            Pre-order open · Lot Nº1 · only 350 woven ·
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-coral shadow-[0_10px_30px_-8px_rgba(233,102,74,0.6)] md:h-[72px] md:w-[72px]">
          <KnotLogo size={34} withWordmark={false} />
        </div>
      </div>
    </div>
  );
}

export default function Hero({ onReserve }: { onReserve: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} id="top" className="bg-ruled relative overflow-hidden pt-28 md:pt-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid items-center gap-12 pb-16 md:pb-24 lg:grid-cols-[1.15fr_1fr] lg:gap-6">
          {/* ——— left: typographic statement ——— */}
          <motion.div style={{ opacity: fade }} className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <Eyebrow index="Nº1" title="Loomere · First Object · SS'25" />
            </motion.div>

            <h1 className="font-display mt-7 text-[13.5vw] leading-[0.92] font-extrabold tracking-[-0.03em] text-pine uppercase sm:text-[11vw] lg:text-[6.6vw]">
              {["From a", "single thread,"].map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.12 + i * 0.09, ease: EASE }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: EASE }}
                >
                  a <span className="text-coral relative inline-block">
                    polo.
                    <motion.svg
                      viewBox="0 0 220 14"
                      className="absolute -bottom-2 left-0 w-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.15, duration: 0.4 }}
                    >
                      <motion.path
                        d="M4,10 C60,2 150,2 216,8"
                        fill="none"
                        stroke="#D5372A"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 1.15, duration: 0.7, ease: "easeOut" }}
                      />
                    </motion.svg>
                  </span>
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
              className="mt-8 max-w-md text-[15.5px] leading-relaxed font-light text-pine-soft"
            >
              One continuous coral yarn, knitted into 240 gsm piqué and garment-dyed in small
              baths. The Coral Ember polo is Loomere's first object — woven to order, numbered by
              hand, never restocked.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <PrimaryButton onClick={onReserve}>Reserve yours — $98</PrimaryButton>
              <GhostButton onClick={() => document.getElementById("thread")?.scrollIntoView({ behavior: "smooth" })}>
                Read the six chapters <ArrowDown size={15} />
              </GhostButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.95 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-medium tracking-[0.18em] text-pine/50 uppercase"
            >
              <span>100% pima piqué</span>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span>Garment-dyed</span>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span>Corozo buttons</span>
            </motion.div>
          </motion.div>

          {/* ——— right: hero product card ——— */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: EASE }}
            className="relative mx-auto w-full max-w-[440px]"
          >
            {/* celadon offset panel */}
            <div className="absolute -top-5 -right-5 h-full w-full rounded-t-[190px] border border-pine/15 bg-celadon" />
            <motion.div style={{ y: imgY }} className="relative">
              <div className="relative overflow-hidden rounded-t-[190px] rounded-b-[28px] border border-pine/10 shadow-[0_40px_80px_-40px_rgba(29,47,40,0.45)]">
                <img
                  src="/images/polo-coral.jpg"
                  alt="The Loomere Coral Ember polo, flat-laid"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between rounded-2xl border border-pine/10 bg-ivory/85 px-4 py-3 backdrop-blur-sm">
                  <div>
                    <p className="font-display text-sm font-bold text-pine">Coral Ember</p>
                    <p className="text-[10.5px] tracking-[0.2em] text-pine/60 uppercase">LS-01 · Bath Nº4</p>
                  </div>
                  <p className="font-display text-lg font-extrabold text-pine">
                    $98
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="animate-drift absolute -bottom-8 -left-6 md:-left-12">
              <OrbitBadge />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
