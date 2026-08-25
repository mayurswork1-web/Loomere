import { useCallback, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import ThreadChapter from "./components/ThreadChapter";
import ClothChapter from "./components/ClothChapter";
import CutChapter from "./components/CutChapter";
import PastelsChapter from "./components/PastelsChapter";
import LoomChapter from "./components/LoomChapter";
import PreorderChapter from "./components/PreorderChapter";
import PreorderModal from "./components/PreorderModal";
import Footer from "./components/Footer";

const FOOT_FACTS = [
  "Lot Nº1 closes at 350",
  "Woven to order — never restocked",
  "Reserve now, pay when it ships",
  "Free re-hemming for life",
  "Porto · 41°8′N 8°6′W",
];

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [variantId, setVariantId] = useState("coral");

  const openReserve = useCallback((id?: string) => {
    if (id) setVariantId(id);
    setModalOpen(true);
  }, []);

  const { scrollYProgress } = useScroll();
  const thread = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  return (
    <div className="grain bg-ivory font-body text-pine">
      {/* the coral scroll-thread, tracing the page */}
      <motion.div
        className="scroll-thread fixed inset-x-0 top-0 z-[70] h-[3px] bg-coral"
        style={{ scaleX: thread }}
      />
      <Header onReserve={() => openReserve()} />
      <main>
        <Hero onReserve={() => openReserve()} />
        <Marquee />
        <ThreadChapter />
        <ClothChapter />
        <CutChapter />
        <PastelsChapter onReserve={openReserve} />
        <LoomChapter />
        <Marquee tone="celadon" reverse items={FOOT_FACTS} />
        <PreorderChapter onReserve={() => openReserve()} />
      </main>
      <Footer onReserve={() => openReserve()} />
      <PreorderModal
        open={modalOpen}
        variantId={variantId}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
