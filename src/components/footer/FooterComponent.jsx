import Logo from '../../../public/logo/logo.png';
import School from '../../../public/logo/image.png';

const FooterComponent = () => {
    return (
      <footer className="bg-neutral-800 py-10 px-4 md:px-8 text-white mt-35">
        {/* Centered Logo */}
  
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Organize by section */}
          <div className="flex flex-col items-center md:items-start">
            <img src={Logo} alt="School" className="w-[70%] max-w-xs" />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg mb-4">Organize by</h3>
            <img src={School} alt="School" className="w-3/4 max-w-xs" />
          </div>
  
          {/* Quick Links section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  All Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  Brand 
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  Discount
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                   About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
  
          {/* Legal section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  Term of service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  Refunds policy
                </a>
              </li>
            </ul>
          </div>
  
          {/* Contact section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Address 1234 Street, Phnom Penh City</p>
              <p>Phone: (00) 1234-6078</p>
              <p>E-mail: techseven@email.com</p>
            </address>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} TechSeven. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default FooterComponent;