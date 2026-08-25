export type Variant = {
  id: string;
  name: string;
  code: string;
  hex: string;
  img: string;
  note: string;
  dye: string;
};

export const VARIANTS: Variant[] = [
  {
    id: "coral",
    name: "Coral Ember",
    code: "LS-01",
    hex: "#E9714E",
    img: "/images/polo-coral.jpg",
    note: "The shade that started the loom. Garment-dyed coral, sun-softened at the seams.",
    dye: "Bath Nº4 · coral",
  },
  {
    id: "celadon",
    name: "Celadon Sage",
    code: "LS-02",
    hex: "#B9CDB2",
    img: "/images/polo-celadon.jpg",
    note: "Steeped like green tea. Our quietest colour, cut from the very same bolt.",
    dye: "Bath Nº7 · celadon",
  },
  {
    id: "ivory",
    name: "Warm Ivory",
    code: "LS-03",
    hex: "#F0E7D2",
    img: "/images/polo-ivory.jpg",
    note: "Undyed base cloth, washed once in mountain water and dried in open air.",
    dye: "Bath Nº0 · undyed",
  },
  {
    id: "mist",
    name: "Morning Mist",
    code: "LS-04",
    hex: "#BAC6DA",
    img: "/images/polo-mist.jpg",
    note: "Powder blue, greyed a notch. It wears like early fog over the harbour.",
    dye: "Bath Nº11 · mist",
  },
];

export const CHAPTERS = [
  { id: "thread", n: "01", title: "Thread" },
  { id: "cloth", n: "02", title: "Cloth" },
  { id: "cut", n: "03", title: "Cut" },
  { id: "pastels", n: "04", title: "Pastels" },
  { id: "atelier", n: "05", title: "Atelier" },
  { id: "preorder", n: "06", title: "Preorder" },
];

export const FABRIC_FACTS = [
  "100% organic pima cotton",
  "240 gsm honeycomb piqué",
  "Garment-dyed in small baths",
  "Natural corozo nut buttons",
  "Pre-shrunk — twice",
  "Single-needle seams, 14 SPI",
  "124 cm of thread per seam",
  "Knitted flat — collar never curls",
  "Softens like denim, keeps its shape",
  "Numbered by hand, 1 of 350",
];

export const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

export const PRICE = 98;
export const RETAIL = 128;
export const CLAIMED = 327;
export const TOTAL = 350;
