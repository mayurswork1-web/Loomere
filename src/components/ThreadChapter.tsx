import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Eyebrow } from "./ui";

/* The squiggle — loose thread leaving the spool, ending at the left collar tip. */
const SQUIGGLE =
  "M92,580 C150,552 96,498 152,466 S222,424 172,384 S90,330 152,290 S270,244 216,204 S288,138 205,120";

/* The polo flat — one continuous outline beginning where the squiggle ends. */
const OUTLINE =
  "M205,120 L150,148 L72,238 L98,296 L168,258 L170,520 L330,520 L332,258 L402,296 L428,238 L350,148 L275,120 L240,158 Z";

export default function ThreadChapter() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 26, mass: 0.6 });

  const threadLen = useTransform(p, [0, 0.22], [0, 1]);
  const outlineLen = useTransform(p, [0.2, 0.5], [0, 1]);
  const squiggleOp = useTransform(p, [0.24, 0.42], [1, 0.1]);
  const fillOp = useTransform(p, [0.48, 0.62], [0, 1]);
  const fillScale = useTransform(p, [0.48, 0.74], [1.14, 1]);
  const detailsOp = useTransform(p, [0.56, 0.68], [0, 1]);
  const outlineDim = useTransform(p, [0.58, 0.7], [1, 0.45]);
  const spoolOp = useTransform(p, [0, 0.04], [0.4, 1]);
  const capOp = useTransform(p, [0.74, 0.88], [0, 1]);
  const capY = useTransform(p, [0.74, 0.88], [26, 0]);
  const ghostOp = useTransform(p, [0, 0.02, 0.14], [0, 0.28, 0.1]);

  return (
    <section id="thread" ref={ref} className="relative h-[340vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-8 px-5 md:px-10 lg:grid-cols-[1fr_auto_1fr]">
          {/* ——— left copy ——— */}
          <div className="hidden max-w-sm flex-col gap-5 self-center lg:flex">
            <Eyebrow index="01" title="Chapter — Thread" />
            <h2 className="font-display text-5xl leading-[0.95] font-extrabold tracking-[-0.02em] text-pine uppercase xl:text-6xl">
              One thread.
              <br />
              <span className="text-pine/40">1,240 metres</span>
              <br />
              in every shirt.
            </h2>
            <p className="text-sm leading-relaxed font-light text-pine-soft">
              Keep scrolling and watch it happen: a single coral yarn unwinds off the spool,
              loops itself into honeycomb piqué, and settles into the outline of the polo.
            </p>
          </div>

          {/* ——— the loom stage ——— */}
          <div className="relative mx-auto flex justify-center">
            <motion.svg
              viewBox="0 0 480 640"
              className="h-[62vh] max-h-[640px] w-auto md:h-[74vh]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <defs>
                <clipPath id="poloClip">
                  <path d={OUTLINE} />
                </clipPath>
              </defs>

              {/* ghost guide — the pattern underneath it all */}
              <motion.path
                d={OUTLINE}
                fill="none"
                stroke="#1D2F28"
                strokeWidth="1"
                strokeDasharray="3 7"
                style={{ opacity: ghostOp }}
              />

              {/* spool */}
              <motion.g style={{ opacity: spoolOp }}>
                <path
                  d="M38,566 L38,606 C38,612 50,617 64,617 C78,617 90,612 90,606 L90,566"
                  fill="none"
                  stroke="#1D2F28"
                  strokeWidth="2"
                />
                <ellipse cx="64" cy="566" rx="26" ry="8" fill="#F7F1E3" stroke="#1D2F28" strokeWidth="2" />
                <path d="M42,572 L86,572 M41,579 L87,579 M40,586 L88,586 M41,593 L87,593" stroke="#E9664A" strokeWidth="2.4" strokeLinecap="round" />
                <circle cx="64" cy="622" r="2.5" fill="#D5372A" />
              </motion.g>

              {/* woven cloth appearing inside the outline */}
              <motion.g clipPath="url(#poloClip)" style={{ opacity: fillOp, scale: fillScale }}>
                <rect x="60" y="88" width="376" height="444" fill="#F0E7D2" />
                <image
                  href="/images/pique-macro.jpg"
                  x="52"
                  y="84"
                  width="388"
                  height="452"
                  preserveAspectRatio="xMidYMid slice"
                />
              </motion.g>

              {/* the coral thread squiggle */}
              <motion.path
                d={SQUIGGLE}
                fill="none"
                stroke="#E9664A"
                strokeWidth="2.6"
                strokeLinecap="round"
                style={{ pathLength: threadLen, opacity: squiggleOp }}
              />

              {/* the thread becoming the polo outline */}
              <motion.path
                d={OUTLINE}
                fill="none"
                stroke="#CD4F30"
                strokeWidth="3"
                strokeLinejoin="round"
                strokeLinecap="round"
                style={{ pathLength: outlineLen, opacity: outlineDim }}
              />

              {/* stitch details — collar, placket, buttons, cuffs, hem */}
              <motion.g
                style={{ opacity: detailsOp }}
                fill="none"
                stroke="#1D2F28"
                strokeWidth="1.6"
                strokeLinecap="round"
              >
                <path d="M205,120 C225,96 255,96 275,120" />
                <path d="M216,128 C230,114 250,114 264,128" strokeDasharray="2 5" />
                <path d="M232,162 L232,230 M248,162 L248,230 M232,230 L248,230" />
                <circle cx="240" cy="176" r="3" />
                <circle cx="240" cy="198" r="3" />
                <circle cx="240" cy="220" r="3" />
                <path d="M84,244 L110,288" strokeDasharray="3 5" />
                <path d="M416,244 L390,288" strokeDasharray="3 5" />
                <path d="M182,506 L318,506" strokeDasharray="3 5" />
                {/* the tie — the one red accent, knotted at the collar */}
                <circle cx="240" cy="158" r="3.4" fill="#D5372A" stroke="none" />
              </motion.g>
            </motion.svg>

            {/* stage caption */}
            <motion.div
              style={{ opacity: capOp, y: capY }}
              className="absolute -bottom-2 left-1/2 w-max -translate-x-1/2 text-center lg:hidden"
            >
              <p className="font-display text-sm font-bold text-pine">Coral Ember — LS-01</p>
              <p className="text-[10px] tracking-[0.24em] text-pine/50 uppercase">Thread, become cloth</p>
            </motion.div>
          </div>

          {/* ——— right rail: stats + late caption ——— */}
          <div className="hidden max-w-xs flex-col gap-8 justify-self-end lg:flex">
            <motion.div style={{ opacity: capOp }} className="flex flex-col gap-6">
              <div className="border-l-2 border-accent pl-5">
                <p className="font-display text-4xl font-extrabold text-pine">240</p>
                <p className="mt-1 text-[11px] tracking-[0.22em] text-pine/60 uppercase">
                  loops per square inch
                </p>
              </div>
              <div className="border-l-2 border-coral pl-5">
                <p className="font-display text-4xl font-extrabold text-pine">Nº4</p>
                <p className="mt-1 text-[11px] tracking-[0.22em] text-pine/60 uppercase">
                  dye bath — coral ember
                </p>
              </div>
              <div className="border-l-2 border-celadon-deep pl-5">
                <p className="font-display text-4xl font-extrabold text-pine">01</p>
                <p className="mt-1 text-[11px] tracking-[0.22em] text-pine/60 uppercase">
                  thread, never broken
                </p>
              </div>
            </motion.div>
            <motion.p style={{ opacity: capOp, y: capY }} className="text-sm leading-relaxed font-light text-pine-soft">
              The same yarn you watched unwind is now woven flat — collar, placket, cuffs. Next:
              the cloth itself.
            </motion.p>
          </div>

          {/* mobile heading */}
          <div className="absolute top-20 left-5 lg:hidden">
            <Eyebrow index="01" title="Chapter — Thread" />
          </div>
        </div>
      </div>
    </section>
  );
}
