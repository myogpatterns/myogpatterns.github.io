import type { Product } from "@/pages/data/allProducts.json";
export type { Product } from "@/pages/data/allProducts.json";

type ProductKeys = keyof Product;

export type ProductFilter = { key: ProductKeys; value: string } | null;

export type ButtonGroup = {
  name?: string;
  key: ProductKeys;
  allLabel?: string;
  values: (
    | {
        label: string;
        value: string;
      }
    | string
  )[];
};
