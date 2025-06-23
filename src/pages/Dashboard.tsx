import { useEffect, useState } from "react";
import { fetchProducts } from "@/services/products";
import ProductGrid from "@/components/ProductGrid";
import { Product } from "@/types/Product";

const Dashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Snagify Control Dashboard</h1>
      <ProductGrid products={products} />
    </div>
  );
};

export default Dashboard;
