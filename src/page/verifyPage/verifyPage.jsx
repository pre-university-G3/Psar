import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`https://ishop-api.istad.co/api/v1/users/verify-email?token=${token}`, {
        method: "POST",
      });

      if (!response.ok) throw new Error("Invalid or expired token");

      alert("Email verified successfully!");
      navigate("/login"); // Redirect to login page
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Verify Your Email</h2>
      <p className="mb-4">Enter the token sent to your email:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Verification Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          {isLoading ? "Verifying..." : "Verify Email"}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default VerifyEmail;