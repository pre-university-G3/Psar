import React, { useState } from 'react';
import { NavLink } from 'react-router';

const Shipping = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    streetAddress: '',
    country: '',
    apartment: '',
    city: '',
    stateProvince: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className={`min-h-screen p-5 mt-15 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-800'}`}>
      <div className={`max-w-2xl mx-auto mt-10 p-10 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <header className="flex justify-between items-center mb-8">
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>TECH-7 SHOP</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-1 rounded ${darkMode ? 'text-blue-400 hover:bg-gray-700' : 'text-blue-600 hover:bg-gray-200'}`}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </header>

        <div className={`flex justify-between mb-8 pb-2 border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
          <div className={`px-3 py-1 ${darkMode ? 'text-blue-400 font-bold' : 'text-blue-600 font-bold'}`}>1. Shipping</div>
          <div className={`px-3 py-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>2. Delivery</div>
          <div className={`px-3 py-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>3. Payment</div>
        </div>

        <form onSubmit={handleSubmit}>
          <section className="mb-8 pb-6 border-b">
            <h2 className="text-xl font-semibold mb-4">Your contact info</h2>
            <div className="mb-4">
              <label className="block mb-1 font-medium">First Name<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-500'}`}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Last Name<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-500'}`}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Email<span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-500'}`}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Phone Number<span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-500'}`}
              />
            </div>
          </section>

          <section className="mb-8 pb-6 border-b">
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Street Address<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-500'}`}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Country<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-500'}`}
              />
            </div>
          </section>

          <section className="mb-8 pb-6 border-b">
            <h2 className="text-xl font-semibold mb-4">Apartment, Building, Floor</h2>
            <div className="mb-4">
              <label className="block mb-1 font-medium">ZIP<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="apartment"
                value={formData.apartment}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-500'}`}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">City<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-500'}`}
              />
            </div>
          </section>

          <section className="mb-8">
            <div className="mb-4">
              <label className="block mb-1 font-medium">State / Province<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="stateProvince"
                value={formData.stateProvince}
                onChange={handleChange}
                required
                className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-500'}`}
              />
            </div>
          </section>

          <NavLink
          to="/devlivery"
            className={`w-full py-3 px-4 rounded font-bold ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}
          >
            Continue
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Shipping;