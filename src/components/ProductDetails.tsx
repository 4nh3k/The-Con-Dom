// src/components/ProductDetails.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsApi from "../apis/product.api";
import { Product } from "../types/Product.type";
const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the product ID from URL params
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await productsApi.getProduct(Number(id)); // Fetch the product by ID
        setProduct(response.data);
      } catch (err) {
        setError("Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
      <img
        src={product.imageURL}
        alt={product.name}
        className="w-full h-auto mb-4"
      />
      <p className="mb-4">
        <strong>Description:</strong> {product.description}
      </p>
      <p className="mb-4">
        <strong>Price:</strong> ${product.price.toFixed(2)}
      </p>
      <p className="mb-4">
        <strong>Stock:</strong> {product.stock}
      </p>
      <button className="bg-blue-500 text-white p-2 rounded">Buy now</button>
    </div>
  );
};

export default ProductDetails;
