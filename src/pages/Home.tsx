import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import { fetchProducts } from "../services/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const load = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    load();
  }, []);

  const uniqueCategories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = category === "All"
    ? products
    : products.filter(p => p.category === category);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Snagify Products</h1>

      <div className="flex gap-3 mb-6">
        {uniqueCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded ${category === cat ? "bg-black text-white" : "bg-gray-100"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
