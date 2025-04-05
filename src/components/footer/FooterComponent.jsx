import Logo from '../../../public/logo/logo.png';
import School from '../../../public/logo/image.png';

const FooterComponent = () => {
    return (
      <footer className="bg-neutral-800 py-10 px-4 sm:px-6 lg:px-8 text-white mt-35">
        <div className="max-w-8xl mx-auto">
          {/* Main footer content - responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {/* Logo section - full width on mobile, then normal flow */}
            <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start">
              <img 
                src={Logo} 
                alt="TechSeven Logo" 
                className="w-40 md:w-48 lg:w-56 mb-4"
              />
            </div>

            {/* Organize by section - full width on mobile, then normal flow */}
            <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start">
              <h3 className="font-bold text-lg mb-4">Organize by</h3>
              <img 
                src={School} 
                alt="School Logo" 
                className="w-32 md:w-40 lg:w-48"
              />
            </div>

            {/* Quick Links section */}
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['All Products', 'Categories', 'Brand', 'Discount', 'About us', 'FAQs'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-red-500 transition-colors block text-sm sm:text-base"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal section */}
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                {['Term of service', 'Privacy policy', 'Refunds policy'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-red-500 transition-colors block text-sm sm:text-base"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact section - full width on mobile, then normal flow */}
            <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <address className="not-italic text-gray-300 space-y-2 text-sm sm:text-base">
                <p className="break-words">Address 1234 Street, Phnom Penh City</p>
                <p>Phone: (00) 1234-6078</p>
                <p>E-mail: techseven@email.com</p>
              </address>
            </div>
          </div>

          {/* Copyright - always full width */}
          <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm sm:text-base">
            <p>© {new Date().getFullYear()} TechSeven. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
};

export default FooterComponent;