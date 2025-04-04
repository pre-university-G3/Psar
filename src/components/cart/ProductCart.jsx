import React, { useEffect, useState } from "react";
import getAllProduct from "../../api/getAllProducts";
import { Link } from "react-router";

export default function ProductCart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProduct().then((data) => {
      const fetchedProducts = data.content;
      console.log("Product in cart ", fetchedProducts);
      setProducts(fetchedProducts);
    });
  }, []);

  return (
    
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {products.map((product) => (
        <Link to={`/product-detail/${product.uuid}`} > 
        <div
          key={product.id}
          className="bg-white rounded-lg p-4 flex flex-col shadow hover:shadow-md transition "
        >
         
          <div
            key={product.color[0].images[0]}
            className="bg-gray-100 rounded-lg mb-3 p-4 flex justify-center"
          >
            <img
              src={
                product.color[0].images[0] ||
                "https://atdc.org/wp-content/themes/u-design/assets/images/placeholders/post-placeholder.jpg"
              }
              alt={"Not found"}
              className="h-32 object-contain"
            />
          </div>
          <h3 className="font-semibold mb-1 text-sm">{product.name}</h3>
          <div className="flex items-center text-xs text-red-500 mb-2">
            <span className="mr-2">{product.warranty}</span>
            <span>{product.freeDelivery ? "Free delivery" : ""}</span>
          </div>
          <div className="mt-auto">
            {/* <div className="font-bold text-lg mb-2">${product.price.toFixed(2)}</div> */}
            <button className="w-full bg-purple-600 text-white py-1 text-xs rounded-md hover:bg-purple-700">
              ADD TO CART
            </button>
          </div>
        </div>
        </Link>
      ))}
    </div>
   
  );
}
