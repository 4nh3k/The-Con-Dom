import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import productsApi from "../../apis/product.api";
import { Product } from "../../types/Product.type";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Create a navigate instance

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productsApi.getProducts();
        setProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleEdit = (id?: number) => {
    if (!id) return;
    navigate(`/admin/products/edit/${id}`); // Navigate to edit page
  };

  const handleDelete = async (id?: number) => {
    if (!id) return;

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      try {
        await productsApi.deleteProduct(id); // Assuming you have a delete method in your API
        setProducts(products.filter((product) => product.id !== id)); // Update the state to remove the deleted product
      } catch (err) {
        setError("Failed to delete product");
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2 className="text-2xl mb-4">Product List</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Description</th>
            <th className="border border-gray-300 p-2">Price</th>
            <th className="border border-gray-300 p-2">Stock</th>
            <th className="border border-gray-300 p-2">Image</th>
            <th className="border border-gray-300 p-2">Actions</th>{" "}
            {/* New column for actions */}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border border-gray-300 p-2">{product.id}</td>
              <td className="border border-gray-300 p-2">{product.name}</td>
              <td className="border border-gray-300 p-2">
                {product.description}
              </td>
              <td className="border border-gray-300 p-2">
                {product.price.toLocaleString()}đ
              </td>
              <td className="border border-gray-300 p-2">{product.stock}</td>
              <td className="border border-gray-300 p-2">
                <img
                  src={product.imageURL}
                  alt={product.name}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => handleEdit(product.id)}
                  className="bg-yellow-500 text-white p-1 mr-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 text-white p-1 rounded"
                >
                  Delete
                </button>
              </td>{" "}
              {/* Action buttons */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
