// src/pages/SignUp.jsx
import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    address: {
      addressLine1: "",
      addressLine2: "",
      road: "",
      linkAddress: "",
    },
    email: "",
    password: "",
    confirmPassword: "",
    profile: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [addressField]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Add validation logic in handleSubmit
  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      throw new Error("Passwords do not match");
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      throw new Error("Invalid email format");
    }
    if (formData.password.length < 8) {
      throw new Error("Password must be at least 8 characters");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      validateForm();
  
      const response = await fetch("/api/v1/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) throw new Error("Sign-up failed");
      alert("Check your email to verify your account!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl text-amber-200 font-bold mb-[124px]">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          name="address.addressLine1"
          placeholder="Address Line 1"
          value={formData.address.addressLine1}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          name="address.addressLine2"
          placeholder="Address Line 2"
          value={formData.address.addressLine2}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          name="address.road"
          placeholder="Road"
          value={formData.address.road}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          name="address.linkAddress"
          placeholder="Link Address (Optional)"
          value={formData.address.linkAddress}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="url"
          name="profile"
          placeholder="Profile Picture URL (Optional)"
          value={formData.profile}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Sign Up
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default SignUp;
