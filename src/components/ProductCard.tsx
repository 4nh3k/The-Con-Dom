// src/components/ProductCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../types/Product.type";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  console.log(product);
  return (
    <Link
      to={`product/${product.id}`}
      className="bg-white p-4 shadow rounded-lg"
    >
      <img
        src={product.imageURL}
        alt={product.name}
        className="w-full h-80 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">{product.price.toLocaleString()}đ</p>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Buy now
      </button>
    </Link>
  );
};

export default ProductCard;
``;
