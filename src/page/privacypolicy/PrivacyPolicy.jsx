import React from "react";

const HelpSection = () => {
  return (
    <main className="">
      {/* Hero Section */}
      <section
        className="min-h-[70vh] flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('src/assets/image.png')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-opacity-30"></div>

        <div className="text-center max-w-2xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            We're Here To Help!
          </h1>
          <p className="text-xl text-white md:text-3xl text-bla mb-8">
            Need support while you're working, studying, and enjoying leisure at
            home?
          </p>
          <p className="text-lg md:text-xl font-medium text-white">
            Tech 7 is here for you
          </p>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Getting Started With Tech 7
            </h2>
          </header>

          <div className="space-y-8">
            <article className=" p-6 ring-1 ring-gray-300">
              <h3 className="text-xl md:text-2xl font-bold   text-red-600 mb-3">
                1. Browsing & Searching for Product
              </h3>
              <p className=" font-medium">
                Use the search bar to find products or browse through
                categories. We ensure easy navigation for a smooth shopping
                experience.
              </p>
            </article>

            <article className=" p-6 ring-1 ring-gray-300 ">
              <h3 className="text-xl md:text-2xl font-bold   text-red-600 mb-3">
                2. Adding Items to Cart
              </h3>
              <p className=" font-medium">
                Click "Add to Cart" on a product page to save it for checkout.
                Your cart is always accessible at the top of the page.
              </p>
            </article>

            <article className=" p-6 ring-1 ring-gray-300 ">
              <h3 className="text-xl md:text-2xl font-bold   text-red-600 mb-3">
                3. Creating an Account
              </h3>
              <p className=" font-medium">
                Sign up to track orders and save your details for faster
                checkout. We value your privacy and secure your data.
              </p>
            </article>

            <article className=" p-6 ring-1 ring-gray-300 ">
              <h3 className="text-xl md:text-2xl font-bold   text-red-600 mb-3">
                4. Placing an Order & Checkout
              </h3>
              <p className=" font-medium">
                Proceed to checkout, fill in your shipping and payment details.
                We use secure payment gateways to protect your transactions.
              </p>
            </article>

            <article className=" p-6 ring-1 ring-gray-300 ">
              <h3 className="text-xl md:text-2xl font-bold   text-red-600 mb-3">
                5. Tracking Your Order
              </h3>
              <p className=" font-medium">
                Check your order status from the "My Orders" section in your
                profile. You will also receive email updates.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Customer Trust Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold  mb-4">
              To Build Customers Trust
            </h2>
            <p className="text-lg  max-w-2xl mx-auto">
              We prioritize your security, privacy, and satisfaction at every
              step
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-30 gap-y-10">
            <article className=" p-6 ring-1 ring-gray-300 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 mb-4">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                Secure Transactions
              </h3>
              <p className="">
                We use industry-standard encryption to keep your data safe
              </p>
            </article>

            <article className=" p-6 ring-1 ring-gray-300 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 mb-4">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                Reliable Support
              </h3>
              <p className="">
                Our team is available 24/7 to assist you with any concerns
              </p>
            </article>

            <article className=" p-6 ring-1 ring-gray-300 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 mb-4">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                Authentic Reviews
              </h3>
              <p className="">
                We encourage honest customer feedback to help you make informed
                decisions
              </p>
            </article>

            <article className=" p-6 ring-1 ring-gray-300 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 mb-4">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                Customers Privacy
              </h3>
              <p className="">
                Your information is protected with strict privacy policies
              </p>
            </article>

            <article className=" p-6 ring-1 ring-gray-300 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 mb-4">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                Fast & Safe Shipping
              </h3>
              <p className="">
                We ensure timely and secure deliveries for your orders
              </p>
            </article>

            <article className=" p-6 ring-1 ring-gray-300 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 mb-4">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                Transparent Policies
              </h3>
              <p className="">
                Clear return, and warranty policies so you know exactly what to
                expect
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HelpSection;
