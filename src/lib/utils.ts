import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Product, ProductOption } from "../modals/order";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

interface ValidationResult {
  isValid: boolean;
  message: string;
}

interface PriceTier {
  min: number;
  max: number;
  price: number;
}

export const validationRules: { [key: string]: (product: Product) => ValidationResult } = {
  print: () => {
    return { isValid: true, message: "" };
  },
  spiral: (product: Product) => {
    const validFormats = ["A5", "A4", "A3"];
    const maxPages = 180;
    if (!validFormats.includes(product.format)) {
      return { isValid: false, message: "Invalid format for spiral. Allowed formats: A5, A4, A3." };
    }
    if (product.bwPages + product.colorPages > maxPages) {
      return { isValid: false, message: "Total pages exceed the maximum limit of 180 for spiral." };
    }
    return { isValid: true, message: "" };
  },
  softcover: (product: Product) => {
    const validFormats = ["A5", "A4"];
    const validWeights = ["80g", "100g"];
    const minPages = 20;
    const maxPages = 400;
    if (!validFormats.includes(product.format)) {
      return { isValid: false, message: "Invalid format for softcover. Allowed formats: A5, A4." };
    }
    if (!validWeights.includes(product.weight)) {
      return { isValid: false, message: "Invalid weight for softcover. Allowed weights: 80g, 100g." };
    }
    if (product.bwPages + product.colorPages < minPages) {
      return { isValid: false, message: "Total pages less than the minimum limit of 20 for softcover." };
    }
    if (product.bwPages + product.colorPages > maxPages) {
      return { isValid: false, message: "Total pages exceed the maximum limit of 400 for softcover." };
    }
    return { isValid: true, message: "" };
  },
  hardcover: (product: Product) => {
    const validFormats = ["A4"];
    const validWeights = ["80g", "100g", "120g", "160g", "200g", "250g", "300g"];
    const minPages = 20;
    const maxPages = 200;
    if (!validFormats.includes(product.format)) {
      return { isValid: false, message: "Invalid format for hardcover. Allowed format: A4." };
    }
    if (!validWeights.includes(product.weight)) {
      return { isValid: false, message: "Invalid weight for hardcover. Allowed weights: 80g, 100g, 120g, 160g, 200g, 250g, 300g." };
    }
    if (product.bwPages + product.colorPages < minPages) {
      return { isValid: false, message: "Total pages less than the minimum limit of 20 for hardcover." };
    }
    if (product.bwPages + product.colorPages > maxPages) {
      return { isValid: false, message: "Total pages exceed the maximum limit of 200 for hardcover." };
    }
    return { isValid: true, message: "" };
  },
  booklet: (product: Product) => {
    const validFormats = ["A5", "A4"];
    const validWeights = ["80g", "100g"];
    const minPages = 20;
    const maxPages = 64;
    if (!validFormats.includes(product.format)) {
      return { isValid: false, message: "Invalid format for booklet. Allowed formats: A5, A4." };
    }
    if (!validWeights.includes(product.weight)) {
      return { isValid: false, message: "Invalid weight for booklet. Allowed weights: 80g, 100g." };
    }
    if (product.bwPages + product.colorPages < minPages) {
      return { isValid: false, message: "Total pages less than the minimum limit of 20 for booklet." };
    }
    if (product.bwPages + product.colorPages > maxPages) {
      return { isValid: false, message: "Total pages exceed the maximum limit of 64 for booklet." };
    }
    return { isValid: true, message: "" };
  },
  stitch: (product: Product) => {
    const validFormats = ["A5", "A4", "A3"];
    const validWeights = ["80g", "100g"];
    if (!validFormats.includes(product.format)) {
      return { isValid: false, message: "Invalid format for stitch. Allowed formats: A5, A4, A3." };
    }
    if (!validWeights.includes(product.weight)) {
      return { isValid: false, message: "Invalid weight for stitch. Allowed weights: 80g, 100g." };
    }
    return { isValid: true, message: "" };
  },
  holePunch: (product: Product) => {
    const validFormats = ["A5", "A4", "A3", "A2", "A1", "A0"];
    const validWeights = ["80g", "100g"];
    if (!validFormats.includes(product.format)) {
      return { isValid: false, message: "Invalid format for hole punch. Allowed formats: A5, A4, A3, A2, A1, A0." };
    }
    if (!validWeights.includes(product.weight)) {
      return { isValid: false, message: "Invalid weight for hole punch. Allowed weights: 80g, 100g." };
    }
    return { isValid: true, message: "" };
  },
  lamination: (product: Product) => {
    const validFormats = ["A5", "A4", "A3", "A2", "A1", "A0"];
    if (!validFormats.includes(product.format)) {
      return { isValid: false, message: "Invalid format for lamination. Allowed formats: A5, A4, A3, A2, A1, A0." };
    }
    return { isValid: true, message: "" };
  },
};

export const checkValidity = (tempState: Product): ValidationResult => {
  const tempStateData: Product = JSON.parse(JSON.stringify(tempState));

  const validator = validationRules[tempStateData.option.name];

  return validator(tempStateData);
};

interface PriceTier {
  min: number;
  max: number;
  price: number;
}

const paperPrices: { [key: string]: PriceTier[] } = {
  // A5 Prices
  "A5-80g": [
    { min: 1, max: 100, price: 1 },
    { min: 101, max: 1000, price: 1 },
    { min: 1001, max: 999999999, price: 1 },
  ],
  "A5-100g": [
    { min: 1, max: 100, price: 2 },
    { min: 101, max: 1000, price: 2 },
    { min: 1001, max: 999999999, price: 2 },
  ],
  "A5-120g": [
    { min: 1, max: 100, price: 3 },
    { min: 101, max: 1000, price: 3 },
    { min: 1001, max: 999999999, price: 3 },
  ],
  "A5-160g": [
    { min: 1, max: 100, price: 4 },
    { min: 101, max: 1000, price: 4 },
    { min: 1001, max: 999999999, price: 4 },
  ],
  "A5-200g": [
    { min: 1, max: 100, price: 5 },
    { min: 101, max: 1000, price: 5 },
    { min: 1001, max: 999999999, price: 5 },
  ],
  "A5-250g": [
    { min: 1, max: 100, price: 6 },
    { min: 101, max: 1000, price: 6 },
    { min: 1001, max: 999999999, price: 6 },
  ],
  "A5-300g": [
    { min: 1, max: 100, price: 7 },
    { min: 101, max: 1000, price: 7 },
    { min: 1001, max: 999999999, price: 7 },
  ],

  // A4 Prices
  "A4-80g": [
    { min: 1, max: 100, price: 2 },
    { min: 101, max: 1000, price: 2 },
    { min: 1001, max: 999999999, price: 2 },
  ],
  "A4-100g": [
    { min: 1, max: 100, price: 4 },
    { min: 101, max: 1000, price: 4 },
    { min: 1001, max: 999999999, price: 4 },
  ],
  "A4-120g": [
    { min: 1, max: 100, price: 6 },
    { min: 101, max: 1000, price: 6 },
    { min: 1001, max: 999999999, price: 6 },
  ],
  "A4-160g": [
    { min: 1, max: 100, price: 8 },
    { min: 101, max: 1000, price: 8 },
    { min: 1001, max: 999999999, price: 8 },
  ],
  "A4-200g": [
    { min: 1, max: 100, price: 10 },
    { min: 101, max: 1000, price: 10 },
    { min: 1001, max: 999999999, price: 10 },
  ],
  "A4-250g": [
    { min: 1, max: 100, price: 12 },
    { min: 101, max: 1000, price: 12 },
    { min: 1001, max: 999999999, price: 12 },
  ],
  "A4-300g": [
    { min: 1, max: 100, price: 14 },
    { min: 101, max: 1000, price: 14 },
    { min: 1001, max: 999999999, price: 14 },
  ],

  // A3 Prices
  "A3-80g": [
    { min: 1, max: 100, price: 4 },
    { min: 101, max: 1000, price: 4 },
    { min: 1001, max: 999999999, price: 4 },
  ],
  "A3-100g": [
    { min: 1, max: 100, price: 8 },
    { min: 101, max: 1000, price: 8 },
    { min: 1001, max: 999999999, price: 8 },
  ],
  "A3-120g": [
    { min: 1, max: 100, price: 12 },
    { min: 101, max: 1000, price: 12 },
    { min: 1001, max: 999999999, price: 12 },
  ],
  "A3-160g": [
    { min: 1, max: 100, price: 16 },
    { min: 101, max: 1000, price: 16 },
    { min: 1001, max: 999999999, price: 16 },
  ],
  "A3-200g": [
    { min: 1, max: 100, price: 20 },
    { min: 101, max: 1000, price: 20 },
    { min: 1001, max: 999999999, price: 20 },
  ],
  "A3-250g": [
    { min: 1, max: 100, price: 24 },
    { min: 101, max: 1000, price: 24 },
    { min: 1001, max: 999999999, price: 24 },
  ],
  "A3-300g": [
    { min: 1, max: 100, price: 28 },
    { min: 101, max: 1000, price: 28 },
    { min: 1001, max: 999999999, price: 28 },
  ],
};

const printPrices: { [key: string]: PriceTier[] } = {
  bw: [
    { min: 1, max: 100, price: 3 },
    { min: 101, max: 1000, price: 2 },
    { min: 1001, max: 999999999, price: 1 },
  ],
  color: [
    { min: 1, max: 100, price: 5 },
    { min: 101, max: 1000, price: 4 },
    { min: 1001, max: 999999999, price: 4 },
  ],
};

const nameOptionPrices: { [key: string]: PriceTier[] } = {
  print: [{ min: 1, max: 1000, price: 0 }],
  spiral: [
    { min: 1, max: 10, price: 300 },
    { min: 11, max: 50, price: 250 },
    { min: 51, max: 100, price: 200 },
    { min: 101, max: 1000, price: 150 },
  ],
  softCover: [
    { min: 1, max: 10, price: 500 },
    { min: 11, max: 50, price: 450 },
    { min: 51, max: 100, price: 400 },
    { min: 101, max: 1000, price: 350 },
  ],
  hardCover: [
    { min: 1, max: 10, price: 1000 },
    { min: 11, max: 50, price: 900 },
    { min: 51, max: 100, price: 800 },
    { min: 101, max: 1000, price: 700 },
  ],
  booklet: [
    { min: 1, max: 10, price: 700 },
    { min: 11, max: 50, price: 650 },
    { min: 51, max: 100, price: 600 },
    { min: 101, max: 1000, price: 550 },
  ],
  stitch: [
    { min: 1, max: 10, price: 200 },
    { min: 11, max: 50, price: 150 },
    { min: 51, max: 100, price: 100 },
    { min: 101, max: 1000, price: 50 },
  ],
};

const holePunchPrices: { [key: string]: number } = {
  // Prices per 500 sheets block
  "500": 100, // example: $1.00 per 500 sheets
};

const laminationPrices: { [key: string]: PriceTier[] } = {
  // Example prices for different formats
  A5: [
    { min: 1, max: 10, price: 700 },
    { min: 11, max: 50, price: 650 },
    { min: 51, max: 100, price: 600 },
    { min: 101, max: 1000, price: 550 },
  ],
  A4: [
    { min: 1, max: 10, price: 800 },
    { min: 11, max: 50, price: 750 },
    { min: 51, max: 100, price: 700 },
    { min: 101, max: 1000, price: 650 },
  ],
  A3: [
    { min: 1, max: 10, price: 900 },
    { min: 11, max: 50, price: 850 },
    { min: 51, max: 100, price: 800 },
    { min: 101, max: 1000, price: 750 },
  ],
};

const fixedOptionPrices: { [key: string]: number } = {
  coverPrint: 100,
  isEmbossed: 5000,
};

export const getTieredPrice = (tiers: PriceTier[], quantity: number): number => {
  for (const tier of tiers) {
    if (quantity >= tier.min && quantity <= tier.max) {
      return tier.price;
    }
  }
  return 0;
};

const calculateHolePunchPrice = (quantity: number): number => {
  const blocks = Math.ceil(quantity / 500);
  return blocks * (holePunchPrices["500"] || 0);
};

const calculateLaminationPrice = (format: string, quantity: number): number => {
  const laminationTiers = laminationPrices[format] || [];
  return getTieredPrice(laminationTiers, quantity) * quantity;
};

const calculateNameOptionPrice = (name: string, quantity: number, format: string): number => {
  switch (name) {
    case "print":
      return 0; // No extra cost
    case "holePunch":
      return calculateHolePunchPrice(quantity);
    case "lamination":
      return calculateLaminationPrice(format, quantity);
    default: {
      const tiers = nameOptionPrices[name] || [];
      return getTieredPrice(tiers, quantity);
    }
  }
};

export const calculatePrice = (product: Product): number => {
  const totalPages = product.bwPages + product.colorPages;

  const sheetsPerSet = product.printSetting === "doubleSided" ? Math.ceil(totalPages / 2) : totalPages;
  const totalSheets = sheetsPerSet * product.noOfSets;

  const paperKey = `${product.format}-${product.weight}`;
  const paperTiers = paperPrices[paperKey] || [];
  const paperPrice = getTieredPrice(paperTiers, totalSheets) * totalSheets;

  const totalBwPages = product.bwPages * product.noOfSets;
  const totalColorPages = product.colorPages * product.noOfSets;

  const bwPrintTiers = printPrices.bw || [];
  const colorPrintTiers = printPrices.color || [];

  const bwPrintPrice = getTieredPrice(bwPrintTiers, totalBwPages) * totalBwPages;
  const colorPrintPrice = getTieredPrice(colorPrintTiers, totalColorPages) * totalColorPages;

  const totalPrintPrice = (product.printSetting === "doubleSided" ? 2 : 1) * (bwPrintPrice + colorPrintPrice);

  let productOptionPrice = 0;

  if (product.option.name) {
    productOptionPrice += calculateNameOptionPrice(product.option.name, product.noOfSets, product.format);
  }

  for (const key in product.option) {
    if (key !== "name" && product.option[key as keyof ProductOption]) {
      if (fixedOptionPrices[key] !== undefined) {
        productOptionPrice += fixedOptionPrices[key];
      }
    }
  }

  console.log("ProductOptionPrice: ", productOptionPrice);
  const totalOptionPrice = productOptionPrice * product.noOfSets;

  console.log(paperPrice); // Checked
  console.log(totalPrintPrice); // Checked
  console.log(totalOptionPrice);

  const totalPriceCents = paperPrice + totalPrintPrice + totalOptionPrice;

  return totalPriceCents / 100; // Convert cents to dollars
};

// Example usage
const exampleProduct: Product = {
  format: "A4",
  weight: "80g",
  printSetting: "singleSided",
  flipSetting: null,
  noOfSets: 10,
  bwPages: 20,
  colorPages: 30,
  file: "example.pdf",
  option: {
    name: "softCover",
    coverPrint: true,
    flipSide: "longSideFlip",
  },
};

const price = calculatePrice(exampleProduct);
console.log(`Total Price: $${price.toFixed(2)}`);
