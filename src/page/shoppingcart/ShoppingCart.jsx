import { useState } from 'react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "MacBook Air M1 Color & Price: 256G|8G=$1,059 Offer $699 Falcon Add $20 Apple M1 Chip 8-Core CPU & 7-Core GPU 8GB LPDDR4X",
      image: "https://macfinder.co.uk/wp-content/uploads/2023/08/macbookair-15-sonoma.png",
      price: 1289.00,
      quantity: 1
    },
    {
      id: 2,
      name: "Featuring an AMD® Dragon Range R9 Processer, an NVIDIA GeForce RTX™ 4070 Laptop GPU with NVIDIA Advanced Optimus, and the stunning QHD 240hz display",
      image: "https://dlcdnwebimgs.asus.com/gain/30B02883-1847-4CA8-80AC-393A69BB7CD2/w250",
      price: 2199.00,
      quantity: 2
    }
  ]);

  const formatPrice = (price) => {
    return "$" + parseFloat(price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleIncrement = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, quantity: item.quantity + 1} : item
    ));
  };

  const handleDecrement = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item
    ));
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = calculateSubtotal();
  const discount = subtotal * 0.1; // 10% discount
  const total = subtotal - discount;

  return (
    <main className="container mx-auto px-4 py-30">
      <header className="mb-8">
        <h1 className="text-center dark:text-white text-2xl md:text-3xl font-semibold">
          My Shopping Cart
        </h1>
      </header>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Items Section */}
        <section className="lg:w-2/3">
          <div className="dark:bg-gray-800 p-4 rounded-xl shadow-sm dark:shadow-md dark:shadow-gray-900">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wide">
                    <th className="text-left px-2 py-3">Product</th>
                    <th className="px-2 py-3 hidden sm:table-cell">Price</th>
                    <th className="px-2 py-3">Quantity</th>
                    <th className="px-2 py-3 hidden md:table-cell">Subtotal</th>
                    <th className="w-7 px-2 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-2 py-4 text-left">
                        <div className="flex items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 md:w-20 md:h-20 mr-4 object-cover rounded"
                          />
                          <span className="text-sm md:text-base dark:text-gray-200">
                            {item.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-2 py-4 text-center dark:text-white hidden sm:table-cell">
                        {formatPrice(item.price)}
                      </td>
                      <td className="px-2 py-4">
                        <div className="flex justify-center">
                          <div className="flex items-center border dark:border-gray-600 rounded-full px-2 py-1 quantity-control">
                            <button
                              onClick={() => handleDecrement(item.id)}
                              className="px-1 decrement-btn rounded-l-full text-black dark:text-white"
                            >
                              <svg
                                width="14"
                                height="15"
                                viewBox="0 0 14 15"
                                fill="none"
                              >
                                <path
                                  d="M2.33398 7.5H11.6673"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </button>
                            <span className="mx-2 w-8 text-center quantity-value dark:text-gray-200">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleIncrement(item.id)}
                              className="px-1 increment-btn rounded-r-full dark:text-gray-200"
                            >
                              <svg
                                width="14"
                                height="15"
                                viewBox="0 0 14 15"
                                fill="none"
                              >
                                <path
                                  d="M2.33398 7.49998H11.6673M7.00065 2.83331V12.1666V2.83331Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="px-2 py-4 text-center hidden md:table-cell subtotal-value dark:text-white">
                        {formatPrice(item.price * item.quantity)}
                      </td>
                      <td className="px-2 py-4 text-center">
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-gray-400 hover:text-red-500 remove-btn transition-colors"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 23.5C18.0748 23.5 23 18.5748 23 12.5C23 6.42525 18.0748 1.5 12 1.5C5.92525 1.5 1 6.42525 1 12.5C1 18.5748 5.92525 23.5 12 23.5Z"
                              stroke="currentColor"
                              strokeMiterlimit="10"
                            ></path>
                            <path
                              d="M16 8.5L8 16.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M16 16.5L8 8.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="px-2 py-4" colSpan="3">
                      <button className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                        Return to shop
                      </button>
                    </td>
                    <td className="px-2 py-4" colSpan="2">
                      <button
                        onClick={() => alert("Cart updated successfully!")}
                        className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition update-cart-btn"
                      >
                        Update to Cart
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Coupon Section */}
          <section className="mt-6 p-5 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <h3 className="text-lg md:text-xl font-medium dark:text-white md:w-1/4">
                Coupon Code
              </h3>
              <div className="w-full flex flex-col sm:flex-row gap-2">
                <input
                  placeholder="Enter code"
                  type="text"
                  className="flex-grow px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-full text-gray-500 dark:text-gray-300 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-3 bg-gray-800 dark:bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-700 dark:hover:bg-gray-500 transition whitespace-nowrap">
                  Apply Coupon
                </button>
              </div>
            </div>
          </section>
        </section>

        {/* Cart Summary Section */}
        <aside className="lg:w-1/3 mt-6 lg:mt-0">
          <div className="dark:bg-gray-800 rounded-lg p-6 shadow-sm dark:shadow-md dark:shadow-gray-900">
            <h2 className="text-xl font-medium text-red-600 dark:text-white mb-4">
              Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-500 dark:text-gray-400">Subtotal:</span>
                <span className="font-semibold dark:text-white">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-500 dark:text-gray-400">Shipping:</span>
                <span className="font-medium dark:text-gray-200">Free</span>
              </div>
              <div className="flex justify-between items-center pb-3">
                <span className="dark:text-white font-medium">Discount(10%):</span>
                <span className="font-semibold text-lg dark:text-white">
                  {formatPrice(discount)}
                </span>
              </div>
              <div className="flex justify-between items-center pb-3">
                <span className="dark:text-white font-medium">Order Total:</span>
                <span className="font-semibold text-lg dark:text-white">
                  {formatPrice(total)}
                </span>
              </div>
            </div>
            <button className="w-full mt-6 px-6 py-4 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-700 transition">
              Proceed to checkout
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default ShoppingCart;