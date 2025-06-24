import { Product } from "../types/Product";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="w-full max-w-xs rounded-xl shadow-md bg-white overflow-hidden flex flex-col items-center p-4 transition hover:shadow-xl">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h2 className="text-lg font-bold text-gray-800 text-center">{product.title}</h2>
      <p className="text-gray-600 text-sm mb-2">{product.price}</p>
      <a
        href={product.affiliate_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        View Product
      </a>
    </div>
  );
};

export default ProductCard;
