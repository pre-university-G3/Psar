import { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router";
import { useAuth } from "../../context/AuthContext";
// import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa"; // Added FaMoon and FaSun

const ShoppingCart = () => {

  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCartItems = async () => {
      if (!user) {
        setError("You must be logged in to view your cart.");
        setIsLoading(false);
        return;
      }
      console.log({ uuid: user.user.uuid, token: user.accessToken });

      try {
        const response = await fetch(
          `https://ishop-api.istad.co/api/v1/carts/get-by-user/${user.user.uuid}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user.accessToken}`, 
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }

        const data = await response.json();
        const cartItemNew = data.cartItems;
        console.log({cartItemNew})
        setCartItems(cartItemNew); 
        setError("");
      } catch (err) {
        setError(err.message || "Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartItems();
  }, [user]);

  const formatPrice = (price) => {
    return (
      "$" +
      parseFloat(price)
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.totalPrice * item.quantity,
      0
    );
  };

  const handleIncrement = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.productUuid === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems(
      cartItems.cartItems.map((item) =>
        item.productUuid === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.productUuid !== id));
  };

  const subtotal = calculateSubtotal() ;
  // const subtotal = 100;
  const discount = subtotal * 0.1; // 10% discount
  const total = subtotal - discount;


  if (isLoading) return <h1>Loading...</h1>

  return (
    <main className="container mx-auto px-4 py-30">
      <header className="mb-8">
        <h1 className="text-center text-2xl md:text-3xl font-semibold">
          My Shopping Cart
        </h1>
      </header>

      <div className="flex flex-col lg:flex-row gap-6 ">
        {/* Cart Items Section */}
        <section className="lg:w-2/3 ">
          <div className=" p-4 rounded-xl shadow-sm ">
            <div className="overflow-x-auto">
              <table className="w-full ">
                <thead>
                  <tr className="border-b border-gray-300 text-gray-500 text-sm font-medium uppercase tracking-wide">
                    <th className="text-left px-2 py-3">Product</th>
                    <th className="px-2 py-3 hidden sm:table-cell">Price</th>
                    <th className="px-2 py-3">Quantity</th>
                    <th className="px-2 py-3 hidden md:table-cell">Subtotal</th>
                    <th className="w-7 px-2 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b border-gray-200">
                      <td className="px-2 py-4 text-left">
                        <div className="flex items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 md:w-20 md:h-20 mr-4 object-cover rounded"
                          />
                          <span className="text-sm md:text-base">
                            {item.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-2 py-4 text-center hidden sm:table-cell">
                        {formatPrice(item.totalPrice)}
                      </td>
                      <td className="px-2 py-4">
                        <div className="flex justify-center">
                          <div className="flex items-center border border-gray-300 rounded-full px-2 py-1 quantity-control">
                            <button
                              onClick={() => handleDecrement(item.productUuid)}
                              className="px-1 decrement-btn rounded-l-full"
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
                            <span className="mx-2 w-8 text-center quantity-value ">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleIncrement(item.productUuid)}
                              className="px-1 increment-btn rounded-r-full"
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
                      <td className="px-2 py-4 text-center hidden md:table-cell subtotal-value">
                        {formatPrice(item.totalPrice * item.quantity)}
                      </td>
                      <td className="px-2 py-4 text-center">
                        <button
                          onClick={() => handleRemove(item.productUuid)}
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
                      <button className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-100 rounded-full text-gray-600 text-sm font-semibold hover:bg-gray-200 transition">
                        Return to shop
                      </button>
                    </td>
                    <td className="px-2 py-4" colSpan="2">
                      <button
                        onClick={() => alert("Cart updated successfully!")}
                        className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-100 rounded-full text-gray-600 text-sm font-semibold hover:bg-gray-200 transition update-cart-btn"
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
          <section className=" mt-6 p-5 rounded-lg border border-gray-200">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <h3 className="text-lg md:text-xl font-medium md:w-1/4">
                Coupon Code
              </h3>
              <div className="w-full flex flex-col sm:flex-row gap-2">
                <input
                  placeholder="Enter code"
                  type="text"
                  className="flex-grow px-4 py-3 border border-gray-200 rounded-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-3 bg-gray-800 rounded-full text-white font-semibold hover:bg-blue-700 transition whitespace-nowrap">
                  Apply Coupon
                </button>
              </div>
            </div>
          </section>
        </section>

        {/* Cart Summary Section */}
        <aside className="lg:w-1/3 w-full mt-6 lg:mt-0 ">
          <div className="flex gap-4 flex-col rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-medium text-red-600 mb-4">Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <span className="text-gray-500">Subtotal:</span>
                <span className="font-semibold">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <span className="text-gray-500">Shipping:</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between items-center pb-3">
                <span className="font-medium">Discount(10%):</span>
                <span className="font-semibold text-lg">
                  {formatPrice(discount)}
                </span>
              </div>
              <div className="flex justify-between items-center pb-3">
                <span className="font-medium">Order Total:</span>
                <span className="font-semibold text-lg">
                  {formatPrice(total)}
                </span>
              </div>
            </div>
            <NavLink
              to="/shipping"
              className="w-full mt-4 px-6 py-4 bg-blue-600 rounded-full text-white text-center font-semibold hover:bg-blue-700 transition"
            >
              Proceed to checkout
            </NavLink>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default ShoppingCart;
