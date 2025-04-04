import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import getProductByuuid from '../../api/getProductByuuid';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  useEffect(() => {
    if (id) {
      getProductByuuid(id).then((data) => {
        console.log("Product detail:", data);
        setProduct(data);
      });
    }
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="w-full m-auto my-12 bg-gray-100 flex flex-col xl:flex-row border rounded">
      {/* Left side - Product images */}
      <article className="w-full xl:w-1/2 p-6">
        <section>
          <figure className="w-4/5 mx-auto p-4 border-2 bg-white">
            <img
              src={product.color[selectedColorIndex].images[0] || "/api/placeholder/400/320"}
              alt={`${product.name} in ${product.color[selectedColorIndex].color}`}
              className="h-64 object-contain mx-auto"
            />
          </figure>
    
          <div className="flex w-4/5 mx-auto gap-2 mt-6">
            {[0, 1, 2].map((i) => (
              <figure key={i} className="w-full p-3 border-2 bg-white">
                <img 
                  src={product.color[selectedColorIndex].images[i+1] || "/api/placeholder/100/80"} 
                  alt="Product thumbnail" 
                  className="h-16 object-contain mx-auto"
                />
              </figure>
            ))}
          </div>
          
          <div className="flex w-4/5 mx-auto gap-2 mt-4">
            <button className="w-1/3 py-3 bg-white border-2 border-black font-medium">
              ${product.priceOut.toFixed(2)}
            </button>
            <button className="w-2/3 py-3 bg-black text-white font-medium">
              Add to cart
            </button>
          </div>
        </section>
      </article>
    
      {/* Right side - Product details */}
      <article className="w-full xl:w-1/2 p-6">
        <h3 className="text-3xl font-bold mb-3">{product.name}</h3>
        <p className="mb-6">{product.description}</p>
        
        <div className="mb-4">
          <h3 className="font-medium mb-2">Select color:</h3>
          <div className="flex flex-wrap gap-2">
            {product.color.map((colorOption, index) => (
              <button 
                key={index}
                onClick={() => setSelectedColorIndex(index)}
                className={`flex items-center gap-2 px-3 py-2 rounded ${
                  selectedColorIndex === index ? 'bg-gray-300' : 'bg-gray-200'
                }`}
              >
                <div 
                  className="w-4 h-4 rounded-full border border-gray-400" 
                  style={{ backgroundColor: colorOption.color.toLowerCase() }}
                />
                <span>{colorOption.color}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="font-medium mb-2">Specifications:</h3>
          <ul className="space-y-2">
            <li>• Brand: {product.brand.name}</li>
            <li>• Category: {product.category.name}</li>
            <li>• Stock Available: {product.stockQuantity} units</li>
            <li>• A18 chip</li>
            <li>• 48MP fusion camera</li>
            <li>• Built for Apple Intelligence</li>
            <li>• Warranty: {product.warranty}</li>
          </ul>
        </div>
      </article>
    </div>
  );
}