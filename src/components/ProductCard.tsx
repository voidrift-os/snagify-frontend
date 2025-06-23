import React from "react";
import { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border p-4 rounded-md shadow-md hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2 rounded" />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-500 mb-2">{product.description}</p>
      <p className="font-bold text-purple-700 mb-2">{product.price}</p>
      <a href={product.affiliate_url} target="_blank" rel="noopener noreferrer">
        <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 w-full">
          View Product
        </button>
      </a>
    </div>
  );
};

export default ProductCard;
