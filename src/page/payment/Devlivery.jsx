import React, { useState } from 'react';

const Delivery = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedShipping, setSelectedShipping] = useState('standard');
  const [emailUpdates, setEmailUpdates] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      shippingMethod: selectedShipping,
      emailUpdates
    });
  };

  return (
    <div className={`min-h-screen p-4 mt-15 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-800'}`}>
      <div className={`max-w-2xl mx-auto p-10 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <header className="flex justify-between items-center mb-6">
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>TECH-7 SHOP</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-1 rounded ${darkMode ? 'text-blue-400 hover:bg-gray-700' : 'text-blue-600 hover:bg-gray-200'}`}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </header>

        <div className={`flex justify-between mb-6 pb-2 border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
          <div className={`px-2 py-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>1. Shipping</div>
          <div className={`px-2 py-1 ${darkMode ? 'text-blue-400 font-bold' : 'text-blue-600 font-bold'}`}>2. Delivery</div>
          <div className={`px-2 py-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>3. Payment</div>
        </div>

        <div className={`mb-6 p-4 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <p className="font-medium mb-1">Ship to click to lane, 94104</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mb-6">
            <h2 className="text-lg font-semibold">Shipping options</h2>
            
            <div 
              className={`p-4 border rounded-lg cursor-pointer ${selectedShipping === 'standard' ? (darkMode ? 'border-blue-400 bg-blue-900/20' : 'border-blue-500 bg-blue-50') : (darkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400')}`}
              onClick={() => setSelectedShipping('standard')}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Standard</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>5-7 business days</p>
                </div>
                <p className="font-medium">Free</p>
              </div>
            </div>

            <div 
              className={`p-4 border rounded-lg cursor-pointer ${selectedShipping === 'priority' ? (darkMode ? 'border-blue-400 bg-blue-900/20' : 'border-blue-500 bg-blue-50') : (darkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400')}`}
              onClick={() => setSelectedShipping('priority')}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Priority</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>2-5 business days</p>
                </div>
                <p className="font-medium">+$8</p>
              </div>
            </div>

            <div 
              className={`p-4 border rounded-lg cursor-pointer ${selectedShipping === 'two-day' ? (darkMode ? 'border-blue-400 bg-blue-900/20' : 'border-blue-500 bg-blue-50') : (darkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400')}`}
              onClick={() => setSelectedShipping('two-day')}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Two-day shipping</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>2 business days</p>
                </div>
                <p className="font-medium">+$16</p>
              </div>
            </div>

            <div 
              className={`p-4 border rounded-lg cursor-pointer ${selectedShipping === 'pickup' ? (darkMode ? 'border-blue-400 bg-blue-900/20' : 'border-blue-500 bg-blue-50') : (darkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400')}`}
              onClick={() => setSelectedShipping('pickup')}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Pick up in store</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>0.5 miles away</p>
                </div>
                <p className="font-medium">Free</p>
              </div>
            </div>
          </div>

          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="emailUpdates"
              checked={emailUpdates}
              onChange={(e) => setEmailUpdates(e.target.checked)}
              className={`mr-2 h-5 w-5 rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
            />
            <label htmlFor="emailUpdates">Send me email updates about my order</label>
          </div>

          <button
            type="submit"
            className={`w-full py-3 px-4 rounded font-bold ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Delivery;