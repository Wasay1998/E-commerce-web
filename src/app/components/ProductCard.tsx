import { Product } from "@/types/types";
import React from "react";
import Image from "next/image";

interface ProductCardProps extends Product {
  onAddToCard: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  onAddToCard,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl border border-gray-200">
      <Image
        src={image}
        alt={name}
        width={1000}
        height={100}
        className="h-56 object-cover rounded-lg mb-4 transform transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <h3 className="text-2xl font-bold mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-300">
        {name}
      </h3>
      <p className="text-lg text-gray-700 mb-4 font-medium">${price}</p>

      <button
        onClick={() => onAddToCard({ id, name, price, image })}
        className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-110"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
