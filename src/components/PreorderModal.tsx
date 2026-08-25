import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Minus, Plus, X } from "lucide-react";
import { PRICE, SIZES, VARIANTS } from "../lib/data";

type Props = {
  open: boolean;
  variantId: string;
  onClose: () => void;
};

export default function PreorderModal({ open, variantId, onClose }: Props) {
  const [variant, setVariant] = useState(0);
  const [size, setSize] = useState(2);
  const [qty, setQty] = useState(1);
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [done, setDone] = useState(false);

  const refCode = useMemo(
    () => `LM-${Math.floor(1000 + Math.random() * 9000)}`,
    [done]
  );

  useEffect(() => {
    const idx = VARIANTS.findIndex((v) => v.id === variantId);
    if (idx >= 0) setVariant(idx);
  }, [variantId, open]);

  useEffect(() => {
    if (!open) return;
    setDone(false);
    setTouched(false);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const v = VARIANTS[variant];
  const emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
        >
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute inset-0 cursor-pointer bg-pine-deep/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[92vh] w-full max-w-[540px] overflow-y-auto rounded-t-[28px] border border-pine/20 bg-ivory shadow-2xl sm:rounded-[28px]"
          >
            {/* header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-pine/10 bg-ivory/90 px-6 py-4 backdrop-blur-sm">
              <p className="font-display text-sm font-bold tracking-[0.08em] text-pine uppercase">
                {done ? "Reservation knotted" : "Reserve — Lot Nº1"}
              </p>
              <button
                onClick={onClose}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-pine/15 text-pine transition hover:bg-pine hover:text-ivory"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>

            {!done ? (
              <div className="px-6 py-6">
                {/* selected garment */}
                <div className="flex items-center gap-4">
                  <div className="h-24 w-20 shrink-0 overflow-hidden rounded-xl border border-pine/15">
                    <img src={v.img} alt={v.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-extrabold tracking-tight text-pine">
                      {v.name}
                    </p>
                    <p className="mt-1 text-[11px] tracking-[0.2em] text-pine/55 uppercase">
                      {v.code} · {v.dye}
                    </p>
                    <p className="mt-1 font-display text-lg font-bold text-pine">
                      ${PRICE} <span className="text-xs font-semibold text-pine/40">$0 today</span>
                    </p>
                  </div>
                </div>

                {/* pastel */}
                <p className="mt-7 mb-3 text-[11px] font-semibold tracking-[0.22em] text-pine/60 uppercase">
                  Pastel
                </p>
                <div className="flex gap-3">
                  {VARIANTS.map((s, i) => (
                    <button
                      key={s.id}
                      onClick={() => setVariant(i)}
                      title={s.name}
                      className={`relative h-11 w-11 cursor-pointer rounded-full transition-transform hover:scale-108 ${
                        i === variant ? "scale-108" : ""
                      }`}
                      style={{ backgroundColor: s.hex }}
                    >
                      <span
                        className={`absolute -inset-1.5 rounded-full border-2 transition ${
                          i === variant ? "border-accent" : "border-transparent"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                {/* size */}
                <p className="mt-7 mb-3 flex items-center justify-between text-[11px] font-semibold tracking-[0.22em] text-pine/60 uppercase">
                  Size <span>true to size</span>
                </p>
                <div className="grid grid-cols-6 gap-2">
                  {SIZES.map((s, i) => (
                    <button
                      key={s}
                      onClick={() => setSize(i)}
                      className={`cursor-pointer rounded-xl border py-3 font-display text-sm font-bold transition-all ${
                        i === size
                          ? "border-pine bg-pine text-ivory"
                          : "border-pine/20 text-pine hover:border-pine"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                {/* qty + email */}
                <div className="mt-7 grid gap-4 sm:grid-cols-[140px_1fr]">
                  <div>
                    <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-pine/60 uppercase">
                      Qty
                    </p>
                    <div className="flex items-center justify-between rounded-xl border border-pine/20 px-2 py-2">
                      <button
                        onClick={() => setQty((q) => Math.max(1, q - 1))}
                        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-pine hover:bg-pine/10"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-display text-base font-bold">{qty}</span>
                      <button
                        onClick={() => setQty((q) => Math.min(3, q + 1))}
                        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-pine hover:bg-pine/10"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-pine/60 uppercase">
                      Email for your loom slot
                    </p>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => setTouched(true)}
                      placeholder="you@somewhere.com"
                      className={`w-full rounded-xl border bg-ivory px-4 py-3 text-sm text-pine outline-none transition placeholder:text-pine/35 ${
                        touched && !emailOk
                          ? "border-accent"
                          : "border-pine/20 focus:border-pine"
                      }`}
                    />
                  </div>
                </div>
                {touched && !emailOk && (
                  <p className="mt-2 text-xs font-medium text-accent">
                    That email looks unknotted — one @ and a proper ending, please.
                  </p>
                )}

                {/* foot */}
                <div className="mt-7 rounded-2xl bg-parchment p-4 text-[12.5px] leading-relaxed font-light text-pine-soft">
                  Nothing is charged today. When Lot Nº1 goes on the loom in March, we'll write to
                  confirm; you pay only when your shirt ships in late April.
                </div>
                <button
                  onClick={() => {
                    setTouched(true);
                    if (emailOk) setDone(true);
                  }}
                  className="group mt-5 flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-pine py-4.5 font-display text-base font-bold text-ivory transition-all duration-300 hover:bg-pine-deep active:scale-[0.98]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform group-hover:scale-150" />
                  Knot it — {qty} × {v.name}
                </button>
                <p className="mt-3 flex items-center justify-center gap-2 text-center text-[11px] tracking-[0.14em] text-pine/45 uppercase">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  23 of 350 looms remain this week
                </p>
              </div>
            ) : (
              /* ——— success: the knot ties itself ——— */
              <div className="flex flex-col items-center px-6 py-12 text-center">
                <svg width="90" height="90" viewBox="0 0 40 40">
                  <motion.path
                    d="M20 6.5 C30.5 6.5 32.5 20 20 20 C7.5 20 9.5 33.5 20 33.5 C30.5 33.5 32.5 20 20 20"
                    fill="none"
                    stroke="#E9664A"
                    strokeWidth="3.1"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.1, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M15.9 23.9 L24.4 15.7"
                    stroke="#D5372A"
                    strokeWidth="3.3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
                  />
                </svg>
                <h3 className="font-display mt-6 text-3xl font-extrabold tracking-tight text-pine">
                  Knotted. See you at the loom.
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed font-light text-pine-soft">
                  {qty} × {v.name}, size {SIZES[size]} — reserved under{" "}
                  <span className="font-semibold text-pine">{refCode}</span>. A confirmation is on
                  its way to {email}.
                </p>
                <div className="mt-6 flex items-center gap-2 rounded-full border border-pine/15 px-4 py-2">
                  <Check size={14} className="text-accent" strokeWidth={3} />
                  <span className="text-[11px] tracking-[0.18em] text-pine/60 uppercase">
                    Loom slot held for 14 days
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="mt-8 cursor-pointer rounded-full border border-pine/25 px-8 py-3.5 font-display text-sm font-bold text-pine transition hover:bg-pine hover:text-ivory"
                >
                  Back to the cloth
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
