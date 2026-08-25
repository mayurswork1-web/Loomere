import { Eyebrow, Reveal } from "./ui";
import { Plus } from "lucide-react";

const SPECS = [
  {
    part: "Collar",
    spec: "Knitted flat, never fused",
    detail: "Ribbed on the same loom as the body — it stands without stays and refuses to curl.",
  },
  {
    part: "Placket",
    spec: "Three corozo buttons",
    detail: "Nuts from the tagua palm, hand-shanked and locked with a coral cross-stitch.",
  },
  {
    part: "Seams",
    spec: "Single-needle, 14 SPI",
    detail: "Shoulders taped with self-fabric. No overlock ridges anywhere your skin goes.",
  },
  {
    part: "Hem",
    spec: "Side vents, bar-tacked",
    detail: "Two-inch vents with a bar-tack at the apex, so the tail drapes instead of flaring.",
  },
  {
    part: "Fit",
    spec: "Tailored straight",
    detail: "True to size with room at the shoulder. Size down for slim, up for drape.",
  },
];

export default function CutChapter() {
  return (
    <section id="cut" className="bg-ruled relative">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* ——— detail photograph ——— */}
          <div className="relative lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="relative overflow-hidden rounded-[28px] border border-pine/15 shadow-[0_40px_90px_-50px_rgba(29,47,40,0.5)]">
                <img
                  src="/images/collar-detail.jpg"
                  alt="Coral polo collar with corozo buttons"
                  className="h-[460px] w-full object-cover md:h-[600px]"
                  loading="lazy"
                />
                {/* anno markers */}
                <div className="absolute top-[22%] left-[8%] flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-ivory">
                    <Plus size={13} strokeWidth={3} />
                  </span>
                  <span className="rounded-full bg-ivory/90 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-pine uppercase backdrop-blur-sm">
                    Flat-knit collar
                  </span>
                </div>
                <div className="absolute top-[52%] right-[10%] flex items-center gap-2">
                  <span className="rounded-full bg-ivory/90 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-pine uppercase backdrop-blur-sm">
                    Corozo, hand-shanked
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-ivory">
                    <Plus size={13} strokeWidth={3} />
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 flex items-center justify-between text-[11px] tracking-[0.2em] text-pine/50 uppercase">
                <span>Fig. 03 — collar & placket</span>
                <span>scale 1:1</span>
              </p>
            </Reveal>
          </div>

          {/* ——— spec sheet ——— */}
          <div>
            <Reveal>
              <Eyebrow index="03" title="Chapter — Cut" />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-6 text-5xl leading-[0.95] font-extrabold tracking-[-0.02em] text-pine uppercase md:text-7xl">
                Nothing
                <br />
                to hide <span className="text-coral-deep">inside.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-7 max-w-md text-[15.5px] leading-relaxed font-light text-pine-soft">
                A polo lives or dies at the collar. So we audited every seam you'll never see and
                wrote it down — a spec sheet you can hold us to, for as long as you own the shirt.
              </p>
            </Reveal>

            <div className="mt-12 border-t border-pine/20">
              {SPECS.map((s, i) => (
                <Reveal key={s.part} delay={0.06 + i * 0.05}>
                  <div className="group grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-pine/20 py-6 transition-colors duration-300 hover:bg-parchment/60 md:grid-cols-[70px_130px_1fr] md:gap-8 md:px-4">
                    <span className="font-display text-xs font-bold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl font-bold tracking-tight text-pine">
                      {s.part}
                    </span>
                    <div className="col-span-2 md:col-span-1">
                      <p className="text-sm font-semibold text-pine">{s.spec}</p>
                      <p className="mt-1.5 max-w-sm text-[13px] leading-relaxed font-light text-pine-soft">
                        {s.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <p className="mt-8 flex items-center gap-3 text-[11px] tracking-[0.2em] text-pine/50 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Guaranteed: free re-hemming for the life of the shirt
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
