import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Product } from "../modals/order";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

const validationRules: { [key: string]: (product: Product) => boolean } = {
  spiral: (product: Product) => {
    const validFormats = ["A5", "A4", "A3"];
    const maxPages = 180;
    return validFormats.includes(product.format) && product.bwPages + product.colorPages <= maxPages;
  },
  softcover: (product: Product) => {
    const validFormats = ["A5", "A4"];
    const validWeights = ["80g", "100g"];
    const minPages = 20;
    const maxPages = 400;
    return (
      validFormats.includes(product.format) &&
      validWeights.includes(product.weight) &&
      product.bwPages + product.colorPages >= minPages &&
      product.bwPages + product.colorPages <= maxPages
    );
  },
  print: () => {
    return true;
  },
};

export const checkValidity = (tempState: Product) => {
  const tempStateData: Product = JSON.parse(JSON.stringify(tempState));

  const validator = validationRules[tempStateData.option.name];

  if (validator) {
    const responseToreturn = validator(tempStateData);
    return responseToreturn;
  }
};
