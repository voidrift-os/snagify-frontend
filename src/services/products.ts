import { Product } from "../types/Product";

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("http://127.0.0.1:5000/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};
