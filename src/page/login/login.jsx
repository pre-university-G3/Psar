import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Add validation for email format and password length
  const validateForm = () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      throw new Error("Invalid email format");
    }
    if (password.length < 8) {
      throw new Error("Password must be at least 8 characters");
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      validateForm();
      const response = await fetch(
        "https://ishop-api.istad.co/api/v1/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );
      if (!response.ok) throw new Error("Invalid email or password");

      const userData = await response.json();
      login(userData); // Update auth state
      navigate("/product-listing");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  1;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mt-16 mb-4">Log In Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          {isLoading ? "Logging In..." : "Log In"}
        </button>
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className="mt-4 text-center">
          <Link to="/forgot-password" className="text-blue-500">
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
