import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa"; // Added FaMoon and FaSun
import logo from "../../../public/logo/image copy .png";

function NavbarComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [darkMode, setDarkMode] = useState(false); // New state for dark mode

  useEffect(() => {
    // Client-side only
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      // Check for saved dark mode preference
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode) {
        setDarkMode(savedMode === "true");
        document.documentElement.classList.toggle("dark", savedMode === "true");
      }

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        if (window.innerWidth >= 768) {
          setIsMobileMenuOpen(false);
        }
      };

      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };

      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    document.documentElement.classList.toggle("dark", newMode);
  };

  const isMobile = windowWidth < 768;
  // const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isLaptop = windowWidth >= 1024;

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-neutral-800 shadow-lg "
          : "bg-neutral-800 "
      }`}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="h-10"
            />
          </a>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-white hover:text-red-600 dark:hover:text-red-600 transition-colors"
              >
                All Product
              </a>
              {isLaptop && (
                <>
                  <div className="relative">
                    <button
                      onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                      className="flex items-center text-white hover:text-red-600 dark:hover:text-red-600 transition-colors"
                    >
                      Categories
                      <svg
                        className={`w-4 h-4 ml-1 transition-transform ${
                          isCategoriesOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {isCategoriesOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md py-1 z-50 border border-gray-200 dark:border-gray-700">
                        {[
                          "Laptop",
                          "Monitor",
                          "Desktop",
                          "Smart Phone",
                          "Smart Watch",
                          "Tablet & iPad",
                        ].map((item) => (
                          <a
                            key={item}
                            href="#"
                            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <a
                    href="#"
                    className="text-white hover:text-red-600 dark:hover:text-red-600 transition-colors"
                  >
                    About us
                  </a>
                </>
              )}
            </div>
          )}

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <FaSun className="w-5 h-5" />
              ) : (
                <FaMoon className="w-5 h-5" />
              )}
            </button>

            {/* Auth Buttons */}
            {!isMobile && (
              <div className="flex items-center space-x-2">
                <a
                  href="#"
                  className="text-white hover:text-red-600 dark:hover:text-red-600 px-3 py-1.5 transition-colors"
                >
                  Sign up
                </a>
                <a
                  href="#"
                  className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800 text-white px-4 py-1.5 rounded-md transition-colors"
                >
                  Login
                </a>
              </div>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 focus:outline-none hover:bg-gray-700 dark:hover:bg-gray-600 rounded-full transition-colors"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="w-6 h-6" />
                ) : (
                  <FaBars className="w-6 h-6" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && isMobileMenuOpen && (
          <div className="bg-gray-800 dark:bg-gray-900 mt-2 rounded-lg py-2 px-4 shadow-lg">
            <div className="flex flex-col space-y-2">
              {["Laptop", "Desktop", "Phone", "About us"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white py-2 hover:text-red-600 dark:hover:text-red-600 transition-colors"
                >
                  {item}
                </a>
              ))}

              <div className="pt-2 border-t border-gray-700 dark:border-gray-600">
                <button
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className="flex items-center justify-between w-full text-white py-2 hover:text-red-600 dark:hover:text-red-600 transition-colors"
                >
                  Categories
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform ${
                      isCategoriesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isCategoriesOpen && (
                  <div className="pl-4 mt-1 space-y-2">
                    {[
                      "Laptop",
                      "Monitor",
                      "Desktop",
                      "Smart Phone",
                      "Smart Watch",
                      "Tablet & iPad",
                    ].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block text-gray-300 dark:text-gray-400 py-1 hover:text-white dark:hover:text-gray-200 transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-gray-700 dark:border-gray-600">
                <a
                  href="#"
                  className="block text-white py-2 hover:text-red-600 dark:hover:text-red-600 transition-colors"
                >
                  Sign up
                </a>
                <a
                  href="#"
                  className="block text-center bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800 text-white py-2 rounded-md transition-colors"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default NavbarComponent;
