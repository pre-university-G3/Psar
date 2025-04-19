// src/components/AddToCart.jsx
import { useState, useContext } from "react";
import { useAuth } from "../context/AuthContext";

const AddToCart = ({ product }) => {
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleAddToCart = async () => {
    if (!user) {
      setError("You must be logged in to add items to the cart.");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/v1/carts/add-to-cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userUuid: user.uuid, // Assuming user has a `uuid` field
          productUuid: product.uuid,
          quantity,
        }),
      });

      if (!response.ok) throw new Error("Failed to add item to cart");
      setSuccess(true);
      setError("");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <div className="flex items-center mb-4">
        <label className="mr-2">Quantity:</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="border p-1 rounded w-16"
        />
      </div>
      <button
        onClick={handleAddToCart}
        disabled={isLoading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {isLoading ? "Adding..." : "Add to Cart"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-500 mt-2">Item added to cart!</p>}
    </div>
  );
};

export default AddToCart;