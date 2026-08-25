import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Eyebrow, Reveal, KnotDivider } from "./ui";

const STATS = [
  { value: "240", unit: "gsm", label: "Honeycomb piqué, dense but breathing" },
  { value: "14", unit: "spi", label: "Single-needle stitches per inch" },
  { value: "100", unit: "%", label: "Organic pima, extra-long staple" },
  { value: "2×", unit: "wash", label: "Pre-shrunk before the first wear" },
];

export default function ClothChapter() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="cloth" ref={ref} className="relative border-y border-pine/15 bg-celadon">
      <div className="bg-stitch">
        <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-10">
            {/* ——— macro image, pinned with parallax ——— */}
            <div className="relative order-2 lg:order-1">
              <Reveal className="relative">
                <div className="relative overflow-hidden rounded-[28px] border border-pine/20 shadow-[0_40px_90px_-50px_rgba(19,32,25,0.6)]">
                  <motion.img
                    src="/images/pique-macro.jpg"
                    alt="Macro of the coral honeycomb piqué knit"
                    style={{ y: imgY, scale: 1.18 }}
                    className="h-[420px] w-full object-cover md:h-[560px]"
                    loading="lazy"
                  />
                  <div className="absolute right-4 bottom-4 rounded-full border border-pine/10 bg-ivory/90 px-4 py-2 backdrop-blur-sm">
                    <p className="text-[10px] font-semibold tracking-[0.22em] text-pine uppercase">
                      ×12 magnification
                    </p>
                  </div>
                </div>
                {/* floating thread still */}
                <motion.div
                  initial={{ opacity: 0, y: 30, rotate: -4 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -4 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-8 -left-3 w-44 overflow-hidden rounded-2xl border-4 border-ivory shadow-xl md:-left-8 md:w-56"
                >
                  <img
                    src="/images/thread-still.jpg"
                    alt="A single coral thread unspooling"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </Reveal>
            </div>

            {/* ——— copy + stat grid ——— */}
            <div className="order-1 lg:order-2">
              <Reveal>
                <Eyebrow index="02" title="Chapter — Cloth" />
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display mt-6 text-5xl leading-[0.95] font-extrabold tracking-[-0.02em] text-pine uppercase md:text-7xl">
                  Cloth with
                  <br />a <span className="text-coral-deep">memory.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-7 max-w-lg text-[15.5px] leading-relaxed font-light text-pine/80">
                  Lacoste looms knit extra-long pima staples into a honeycomb with 240 loops per
                  square inch. It holds a collar upright, breathes in July, and — because the
                  colour goes in after the shirt is sewn — fades slowly and beautifully, the way
                  denim does.
                </p>
              </Reveal>

              <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-pine/25 bg-pine/25">
                {STATS.map((s, i) => (
                  <Reveal key={s.label} delay={0.1 + i * 0.07} className="bg-celadon">
                    <div className="group h-full p-6 transition-colors duration-300 hover:bg-ivory md:p-8">
                      <p className="font-display text-4xl font-extrabold tracking-tight text-pine md:text-5xl">
                        {s.value}
                        <span className="text-accent ml-1 align-super text-sm font-bold">
                          {s.unit}
                        </span>
                      </p>
                      <p className="mt-3 text-[11.5px] leading-relaxed tracking-wide text-pine/65">
                        {s.label}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <Reveal delay={0.1} className="mt-20">
            <KnotDivider
              text="Every bolt is rested 24 hours before cutting — tension remembers."
              light={false}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
