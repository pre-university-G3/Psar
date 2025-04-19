import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

  // Update handleSubmit:
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      validateForm(); // Validate before API call
      // ... existing API call ...
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Log In</h2>
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
          type="password"
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
          Log In
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
