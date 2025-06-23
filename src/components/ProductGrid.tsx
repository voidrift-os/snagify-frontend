import ProductCard from "./ProductCard";
import { Product } from "@/types/Product";

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product, idx) => (
        <ProductCard key={idx} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
