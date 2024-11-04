// src/components/EditProduct.tsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productsApi from "../../apis/product.api"; // Ensure this imports your API methods
import { Product } from "../../types/Product.type";

const AddProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the product ID from URL params
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product>({
    id: 0, // Default ID for new products
    name: "",
    imageURL: "",
    description: "",
    price: 0,
    stock: 0,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await productsApi.getProduct(Number(id)); // Fetch the product by ID
          setProduct(response.data);
        } catch (err) {
          setError("Failed to fetch product");
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    } else {
      setLoading(false); // No ID means we're adding a new product
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) =>
      prevProduct ? { ...prevProduct, [name]: value } : null
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (product) {
      try {
        if (product.id === undefined) return;
        await productsApi.updateProduct(product.id, product); // Assuming you have an update method
        navigate("/admin/products"); // Redirect to product list after updating
      } catch (err) {
        setError("Failed to update product");
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2 className="text-2xl mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description:</label>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Stock:</label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
