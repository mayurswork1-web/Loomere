import { Eyebrow, Reveal, KnotDivider } from "./ui";

const STEPS = [
  { n: "01", name: "Spin", text: "Extra-long pima staples, ring-spun in Arequipa into a 2-ply yarn." },
  { n: "02", name: "Knit", text: "Circular lacoste looms, running slow for a tighter honeycomb." },
  { n: "03", name: "Dye", text: "Cut, sewn — then dyed. Bath Nº4 gives Coral Ember its depth." },
  { n: "04", name: "Cut", text: "The bolt rests 24 hours so tension settles before the knife." },
  { n: "05", name: "Stitch", text: "Single-needle at 14 SPI; corozo buttons shanked by hand." },
  { n: "06", name: "Rest", text: "Washed, line-dried, steamed flat. Numbered. Then, you." },
];

export default function LoomChapter() {
  return (
    <section id="atelier" className="relative bg-pine-deep text-ivory">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow index="05" title="Chapter — Atelier" light />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-6 text-5xl leading-[0.95] font-extrabold tracking-[-0.02em] uppercase md:text-7xl">
                Slow looms,
                <br />
                <span className="text-celadon">warm hands.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-7 max-w-md text-[15.5px] leading-relaxed font-light text-ivory/70">
                Every Loomere object is woven to order in a two-generation atelier outside Porto.
                When the 350th shirt leaves the loom, Lot Nº1 closes — permanently.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-x-8 sm:grid-cols-2">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={0.06 + (i % 2) * 0.08}>
                  <div className="group border-t border-ivory/15 py-6">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-xs font-bold text-accent">{s.n}</span>
                      <span className="font-display text-2xl font-bold tracking-tight">{s.name}</span>
                    </div>
                    <p className="mt-2.5 pl-8 text-[13px] leading-relaxed font-light text-ivory/60">
                      {s.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="relative lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="relative overflow-hidden rounded-[28px] border border-ivory/20">
                <img
                  src="/images/atelier.jpg"
                  alt="Hands weaving coral yarn on a wooden loom"
                  className="h-[420px] w-full object-cover md:h-[600px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="font-display text-sm font-bold">The Vila Nova atelier</p>
                  <p className="text-[10.5px] tracking-[0.22em] text-ivory/60 uppercase">
                    Est. 1979 · 41°8′N 8°6′W
                  </p>
                </div>
                <div className="absolute top-5 right-5 flex h-20 w-20 animate-spin-slow items-center justify-center rounded-full border border-ivory/30 backdrop-blur-[2px]">
                  <span className="font-display text-center text-[9px] leading-tight font-bold tracking-[0.2em] uppercase">
                    Lot
                    <br />
                    Nº1
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 flex items-center justify-between text-[11px] tracking-[0.2em] text-ivory/40 uppercase">
                <span>Fig. 05 — warp & weft, coral No. 4</span>
                <span>one loom runs</span>
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1} className="mt-20">
          <KnotDivider light text="Six pairs of hands touch every shirt. The seventh pair is yours." />
        </Reveal>
      </div>
    </section>
  );
}
