import React, { useState } from "react";

 function CreateAccount() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form
        onSubmit={handleSubmit}
        className=" p-6 rounded-lg shadow-lg max-w-3xl w-full"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Create your account
        </h2>
        <p className="text-gray-600 text-center mb-4">
          Fill in the details below to get started
        </p>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded w-full mt-4"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 rounded w-full mt-4"
          required
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="border p-2 rounded w-full mt-4"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 rounded w-full mt-4"
          required
        />
        <label className="flex items-center mt-4">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <span className="text-sm">
            I agree to the{" "}
            <a href="#" className="text-blue-600">
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600">
              Privacy Policy
            </a>
          </span>
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded w-full mt-4 hover:bg-blue-700"
        >
          Create Account
        </button>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="#" className="text-blue-600">
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
}
export default CreateAccount;