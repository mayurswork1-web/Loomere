import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import KnotLogo from "./KnotLogo";
import { CHAPTERS } from "../lib/data";

export default function Header({ onReserve }: { onReserve: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-pine/10 bg-ivory/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10">
        <a href="#top" aria-label="Loomere home">
          <KnotLogo size={30} />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {CHAPTERS.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="weave-link group flex items-baseline gap-1.5 text-[12px] font-semibold tracking-[0.14em] text-pine/80 uppercase hover:text-pine"
            >
              <span className="font-display text-[10px] font-bold text-accent">{c.n}</span>
              {c.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onReserve}
            className="group hidden cursor-pointer items-center gap-2.5 rounded-full bg-pine px-5 py-2.5 font-display text-[13px] font-bold text-ivory transition-all duration-300 hover:bg-pine-deep active:scale-95 sm:inline-flex"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
            Reserve — $98
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-pine/20 text-pine lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-pine/10 bg-ivory/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {CHAPTERS.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-3 border-b border-pine/10 py-4 font-display text-xl font-bold text-pine"
                >
                  <span className="text-xs font-bold text-accent">{c.n}</span>
                  {c.title}
                </a>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  onReserve();
                }}
                className="mt-4 mb-2 cursor-pointer rounded-full bg-pine py-4 font-display text-sm font-bold text-ivory"
              >
                Reserve yours — $98
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
