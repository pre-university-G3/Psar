import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
// Make sure this path is correct - adjust according to your project structure
import logo from "../../../public/logo/logo.png";
 function NavbarComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0); // Initialize with 0 to avoid SSR issues

  useEffect(() => {
    // Only run on client side
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Initialize dark mode
    const savedMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedMode === 'true' || (!savedMode && systemPrefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  const isMobile = windowWidth < 768;
  // const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isLaptop = windowWidth >= 1024;

  return (
    <header className={`fixed top-0 w-full z-50 ${isScrolled ? "bg-neutral-800 shadow-lg" : "bg-neutral-800"}`}>
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="logo" className="h-8" /> {/* Adjust size as needed */}
          </a>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white hover:text-red-500">All Product</a>
              {isLaptop && (
                <>
              <div className="relative">
                <button 
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className="flex items-center text-white hover:text-red-500"
                >
                  Categories
                  <svg className={`w-4 h-4 ml-1 transition-transform ${isCategoriesOpen ? "rotate-180" : ""}`} 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isCategoriesOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md py-1 z-50">
                    {['Laptop', 'Monitor', 'Desktop', 'Smart Phone', 'Smart Watch', 'Tablet & iPad'].map((item) => (
                      <a key={item} href="#" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
                  <a href="#" className="text-white hover:text-red-500">About us</a>
                </>
              )}
              
            </div>
          )}

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-white hover:bg-gray-700"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>

            {/* Auth Buttons */}
            {!isMobile && (
              <div className="flex items-center space-x-2">
                <a href="#" className="text-white hover:text-red-500 px-3 py-1.5">Sign up</a>
                <a href="#" className="bg-indigo-600 text-white px-4 py-1.5 rounded-md hover:bg-indigo-700">Login</a>
              </div>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 focus:outline-none"
              >
                {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && isMobileMenuOpen && (
          <div className="bg-gray-800 mt-2 rounded-lg py-2 px-4">
            <div className="flex flex-col space-y-2">
              {['Laptop', 'Desktop', 'Phone', 'About us'].map((item) => (
                <a key={item} href="#" className="text-white py-2 hover:text-red-500">
                  {item}
                </a>
              ))}
              
              <div className="pt-2 border-t border-gray-700">
                <button 
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className="flex items-center justify-between w-full text-white py-2"
                >
                  Categories
                  <svg className={`w-4 h-4 ml-1 transition-transform ${isCategoriesOpen ? "rotate-180" : ""}`} 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isCategoriesOpen && (
                  <div className="pl-4 mt-1 space-y-2">
                    {['Laptop', 'Monitor', 'Desktop', 'Smart Phone', 'Smart Watch', 'Tablet & iPad'].map((item) => (
                      <a key={item} href="#" className="block text-gray-300 py-1 hover:text-white">
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="pt-2 border-t border-gray-700">
                <a href="#" className="block text-white py-2">Sign up</a>
                <a href="#" className="block text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">Login</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
export default NavbarComponent; 