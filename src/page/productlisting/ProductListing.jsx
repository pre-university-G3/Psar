import React, { useEffect, useState } from 'react';
import getAllProduct from '../../api/getAllProducts';
import ProductCart from '../../components/cart/ProductCart';
import { Link } from 'react-router';

const ProductListing = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [discountFilter, setDiscountFilter] = useState(false);

  const categories = [
    'Laptop',
    'Monitor',
    'TV',
    'Desktop',
    'iPad / Tablet',
    'Smart Phone',
    'Smart Watch'
  ];

  const brands = [
    'Apple',
    'ASUS',
    'Lenovo',
    'HP',
    'Dell',
    'Samsung',
    'Microsoft',
    'Gigabyte',
    'Acer',
    'Huawei'
  ];

  // const products = Array(18).fill().map((_, index) => ({
  //   id: index + 1,
  //   name: `EX DISPLAY: MSI Pro 16`,
  //   price: 499.00,
  //   freeDelivery: true,
  //   warranty: "1 Year Warranty",
  //   image: "/product-image.jpg" // Replace with actual image path
  // }));

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    );
  };

  const toggleDiscount = () => {
    setDiscountFilter(prev => !prev);
  };
  useEffect(() => {
    getAllProduct().then(data => {
      console.log("fo", data);
    });
  }, []);
  return (
    <div className="pt-16 min-h-screen bg-pink-50">
      {/* Header Banner */}
      <div className="bg-pink-100 p-4 mb-6">
        <div className="container mx-auto max-w-6xl">
          <div className="relative py-8 px-6 rounded-lg bg-white/70 backdrop-blur-sm">
            <h1 className="text-2xl font-bold">
              You're choose the <span className="text-purple-500">Right</span> place to buy your favorite thing!
            </h1>
            <h2 className="text-4xl font-bold text-gray-300">Apple iMac</h2>
            <div className="absolute right-8 top-1/2 -translate-y-1/2">
              <img 
                src="/imac-lineup.png" 
                alt="Apple iMac Lineup" 
                className="h-24"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className="w-full md:w-64 space-y-6">
            {/* Categories */}
            <div>
              <h3 className="text-xl font-bold mb-3">Product Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <input 
                      type="checkbox" 
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="mr-2"
                    />
                    <label htmlFor={`category-${category}`}>{category}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div>
              <h3 className="text-xl font-bold mb-3">Product Brands</h3>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center">
                    <input 
                      type="checkbox" 
                      id={`brand-${brand}`}
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="mr-2"
                    />
                    <label htmlFor={`brand-${brand}`}>{brand}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Discount */}
            <div>
              <h3 className="text-xl font-bold mb-3">Discount Process</h3>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="discount"
                  checked={discountFilter}
                  onChange={toggleDiscount}
                  className="mr-2"
                />
                <label htmlFor="discount">Discount</label>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="">
          
             <ProductCart/>
             
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <div className="mt-12 py-6 bg-pink-100">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-center text-gray-500">Footer</p>
        </div>
      </div> */}
    </div>
  );
};

export default ProductListing;