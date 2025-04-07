import React, { useState } from "react";
import { NavLink } from "react-router";

const Payment = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [saveInfo, setSaveInfo] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission
    console.log({
      paymentMethod,
      cardDetails,
      saveInfo,
    });
  };

  return (
    <div
      className={`min-h-screen p-4 mt-15 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div
        className={`max-w-2xl mx-auto p-10 rounded-lg shadow-md ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <header className="flex justify-between items-center mb-6">
          <h1
            className={`text-2xl font-bold ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}
          >
            TECH-7 SHOP
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-1 rounded ${
              darkMode
                ? "text-blue-400 hover:bg-gray-700"
                : "text-blue-600 hover:bg-gray-200"
            }`}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </header>

        <div
          className={`flex justify-between mb-6 pb-2 border-b ${
            darkMode ? "border-gray-600" : "border-gray-200"
          }`}
        >
          <div
            className={`px-2 py-1 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            1. Shipping
          </div>
          <div
            className={`px-2 py-1 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            2. Delivery
          </div>
          <div
            className={`px-2 py-1 ${
              darkMode ? "text-blue-400 font-bold" : "text-blue-600 font-bold"
            }`}
          >
            3. Payment
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Credit or debit card</h2>

            <div className="space-y-4">
              <div
                className={`p-4 border rounded-lg ${
                  darkMode
                    ? "border-gray-600 bg-gray-700"
                    : "border-gray-300 bg-white"
                }`}
              >
                <div className="mb-4">
                  <label
                    className={`block mb-1 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Card number
                  </label>
                  <input
                    type="text"
                    name="number"
                    value={cardDetails.number}
                    onChange={handleCardChange}
                    placeholder="1234 5678 9012 3456"
                    className={`w-full p-2 border rounded ${
                      darkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-white border-gray-300"
                    }`}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className={`block mb-1 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      MM/YY
                    </label>
                    <input
                      type="text"
                      name="expiry"
                      value={cardDetails.expiry}
                      onChange={handleCardChange}
                      placeholder="MM/YY"
                      className={`w-full p-2 border rounded ${
                        darkMode
                          ? "bg-gray-700 border-gray-600"
                          : "bg-white border-gray-300"
                      }`}
                    />
                  </div>
                  <div>
                    <label
                      className={`block mb-1 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={cardDetails.cvv}
                      onChange={handleCardChange}
                      placeholder="CVV"
                      className={`w-full p-2 border rounded ${
                        darkMode
                          ? "bg-gray-700 border-gray-600"
                          : "bg-white border-gray-300"
                      }`}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="sameAddress"
                  defaultChecked
                  className={`mr-2 h-5 w-5 rounded ${
                    darkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-white border-gray-300"
                  }`}
                />
                <label htmlFor="sameAddress">
                  Billing Address same as contact
                </label>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-md font-medium mb-3">Other payment methods</h3>
            <div className="space-y-3">
              <div
                className={`p-3 border rounded-lg cursor-pointer ${
                  paymentMethod === "aba"
                    ? darkMode
                      ? "border-blue-400 bg-blue-900/20"
                      : "border-blue-500 bg-blue-50"
                    : darkMode
                    ? "border-gray-600 hover:border-gray-500"
                    : "border-gray-300 hover:border-gray-400"
                }`}
                onClick={() => setPaymentMethod("aba")}
              >
                <p className="font-medium">ABA</p>
              </div>
              <div
                className={`p-3 border rounded-lg cursor-pointer ${
                  paymentMethod === "paypal"
                    ? darkMode
                      ? "border-blue-400 bg-blue-900/20"
                      : "border-blue-500 bg-blue-50"
                    : darkMode
                    ? "border-gray-600 hover:border-gray-500"
                    : "border-gray-300 hover:border-gray-400"
                }`}
                onClick={() => setPaymentMethod("paypal")}
              >
                <p className="font-medium">PayPal</p>
              </div>
            </div>
          </div>

          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="saveInfo"
              checked={saveInfo}
              onChange={(e) => setSaveInfo(e.target.checked)}
              className={`mr-2 h-5 w-5 rounded ${
                darkMode
                  ? "bg-gray-700 border-gray-600"
                  : "bg-white border-gray-300"
              }`}
            />
            <label htmlFor="saveInfo" className="font-medium">
              Save my information and create account
            </label>
          </div>

          <div
            className={`p-4 rounded-lg mb-6 ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">Total</span>
              <span className="text-xl font-bold">$1799.99</span>
            </div>
          </div>

          <NavLink
            to="/shipping"
            type="submit"
            className={`w-full py-3 px-4 rounded font-bold ${
              darkMode
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white transition-colors`}
          >
            Pay $1799.99
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Payment;
