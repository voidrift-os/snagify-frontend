import React, { useEffect, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import CategoryFilter from "../components/CategoryFilter";
import { Product } from "../types/Product";
import { fetchProducts } from "../services/products";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const uniqueCategories = ["All", ...Array.from(new Set(products.map(p => p.category)))];
  const filteredProducts = category
