// src/components/AddToCart.jsx
import { useState, useContext } from "react";
import { useAuth } from "../../context/AuthContext";

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
      const response = await fetch(
        "https://ishop-api.istad.co/api/v1/carts/add-to-cart",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.accessToken}`,
          },
          body: JSON.stringify({
            userUuid: user.user.uuid,
            productUuid: product.uuid,
            quantity,
          }),
        }
      );

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
    <div className="flex gap-2 justify-center items-center">
      <button
        onClick={handleAddToCart}
        disabled={isLoading}
        className=" p-3 text-center bg-black text-white font-medium"
      >
        {isLoading ? "Adding..." : "Add to Cart"}
      </button>
      <div className="flex items-center ">
        <label className="mr-2">Quantity:</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="border p-1 rounded w-16"
        />
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-500 mt-2">Item added to cart!</p>}
    </div>
  );
};

export default AddToCart;
