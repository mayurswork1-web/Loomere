import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import KnotLogo from "./KnotLogo";
import { CHAPTERS } from "../lib/data";

export default function Footer({ onReserve }: { onReserve: () => void }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const ok = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

  return (
    <footer className="relative overflow-hidden bg-pine-deep text-ivory">
      {/* giant hollow wordmark */}
      <div className="pointer-events-none absolute -bottom-8 left-1/2 w-full -translate-x-1/2 text-center select-none">
        <span className="text-hollow font-display text-[18vw] leading-none font-extrabold tracking-[-0.03em] whitespace-nowrap uppercase">
          LOOMERE
        </span>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 pt-20 pb-14 md:px-10 md:pt-28">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <KnotLogo size={34} light />
            <p className="mt-6 max-w-sm text-sm leading-relaxed font-light text-ivory/60">
              Garments grown from a single thread, woven to order in northern Portugal. Object Nº1
              is a polo; objects Nº2 and Nº3 are already on the loom.
            </p>
            {/* newsletter */}
            <div className="mt-8 max-w-sm">
              <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-ivory/50 uppercase">
                The shuttle — one letter per lot
              </p>
              {sent ? (
                <p className="flex items-center gap-2 text-sm text-celadon">
                  <Check size={15} className="text-accent" strokeWidth={3} /> Tied on. First letter
                  arrives with the dye report.
                </p>
              ) : (
                <form
                  className="flex overflow-hidden rounded-full border border-ivory/25"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (ok) setSent(true);
                  }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@somewhere.com"
                    className="w-full bg-transparent px-5 py-3.5 text-sm text-ivory outline-none placeholder:text-ivory/35"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex cursor-pointer items-center bg-coral px-5 text-pine-deep transition hover:bg-coral-deep hover:text-ivory"
                  >
                    <ArrowRight size={17} strokeWidth={2.5} />
                  </button>
                </form>
              )}
            </div>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-ivory/50 uppercase">
              Chapters
            </p>
            <ul className="flex flex-col gap-3">
              {CHAPTERS.map((c) => (
                <li key={c.id}>
                  <a
                    href={`#${c.id}`}
                    className="weave-link font-display text-lg font-bold text-ivory/85 hover:text-ivory"
                  >
                    <span className="mr-2 text-xs text-accent">{c.n}</span>
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-ivory/50 uppercase">
              The object
            </p>
            <ul className="flex flex-col gap-3 text-sm font-light text-ivory/60">
              <li>Coral Ember polo — ${98}</li>
              <li>Lot Nº1 · 350 numbered shirts</li>
              <li>Woven in Vila Nova, Porto</li>
              <li>Ships worldwide, late April</li>
            </ul>
            <button
              onClick={onReserve}
              className="group mt-7 inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-ivory px-6 py-3.5 font-display text-sm font-bold text-pine transition-all hover:bg-celadon active:scale-95"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform group-hover:scale-150" />
              Reserve Nº1
            </button>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-ivory/15 pt-6 text-[11px] tracking-[0.18em] text-ivory/40 uppercase">
          <span>© 2025 Loomere Atelier — woven, not printed</span>
          <span className="flex items-center gap-2">
            Set in Cabinet Grotesk & Inter Tight
            <span className="h-1 w-1 rounded-full bg-accent" />
          </span>
        </div>
      </div>
    </footer>
  );
}
