import ProductCart from "../../components/cart/ProductCart";


const HomePage = () => {


  // Product data
  // const createProductItem = (id, name = "EX DISPLAY: MSI Pro 16", price = 499.00, freeDelivery = true, warranty = "1 Year Warranty") => ({
  //   id,
  //   name,
  //   price,
  //   freeDelivery,
  //   warranty,
  //   image: "/product-image.jpg" // Replace with actual image path
  // });

  // Create product arrays
  // const newProducts = Array(5).fill().map((_, index) => createProductItem(index + 1));
  // const newArrivalProducts = Array(10).fill().map((_, index) => createProductItem(index + 11));
  // const bestSellingProducts = Array(10).fill().map((_, index) => createProductItem(index + 21));

  // Brand banner data
  const brandBanners = [
    {
      id: 1,
      brand: "Lenovo",
      title: "Lenovo Legion 5 Pro - A powerful gaming laptop for smooth performance and stunning visuals",
      bgColor: "bg-black",
      textColor: "text-white",
      accentColor: "bg-red-600",
      buttonText: "Shop Now",
      image: "https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/5KgavhN0leBERGrv0Hjdf01NcpIDs2fjyzfThnD9.png" // Replace with actual image
    },
    {
      id: 2,
      brand: "ROG",
      title: "Unleash the future with the ultimate gaming experience designed to optimize your workflow and enhance productivity",
      bgColor: "bg-black",
      textColor: "text-white",
      accentColor: "bg-red-600",
      buttonText: "Shop Now",
      image: "https://dlcdnwebimgs.asus.com/files/media/B6E6970A-9728-4F44-A81E-4175939B8925/v1/img/display/strix-g-2022.png" // Replace with actual image
    },
    {
      id: 3,
      brand: "MSI",
      title: "Desktop PCs from MSI - the ultimate in-house desktop experience with the ultimate performance and stunning productivity",
      bgColor: "bg-black",
      textColor: "text-white",
      accentColor: "bg-red-600",
      buttonText: "Shop Now",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0GMmD6EjbI0NI1SIenr5qvLiWQDaK5gHpcA&s" // Replace with actual image
    }
  ];

  // Product card component
  // const ProductCard = ({ product }) => (
  //   <div className="bg-white rounded-lg p-4 flex flex-col">
  //     <div className="bg-gray-100 rounded-lg mb-3 p-4 flex justify-center">
  //       <img 
  //         src={product.image} 
  //         alt={product.name}
  //         className="h-32 object-contain"
  //       />
  //     </div>
  //     <h3 className="font-semibold mb-1 text-sm">{product.name}</h3>
  //     <div className="flex items-center text-xs text-red-500 mb-2">
  //       <span className="mr-2">{product.warranty}</span>
  //       <span>{product.freeDelivery ? 'Free delivery' : ''}</span>
  //     </div>
  //     <div className="mt-auto">
  //       <div className="font-bold text-lg mb-2">${product.price.toFixed(2)}</div>
  //       <button className="w-full bg-purple-600 text-white py-1 text-xs rounded-md hover:bg-purple-700">
  //         ADD TO CART
  //       </button>
  //     </div>
  //   </div>
  // );

  // Brand banner component
  const BrandBanner = ({ banner }) => (
    <div className={`${banner.bgColor} ${banner.textColor} rounded-lg overflow-hidden flex`}>
      <div className="p-6 flex flex-col justify-center w-1/2">
        <h3 className="font-bold text-xl mb-2">{banner.brand}</h3>
        <p className="text-sm mb-4">{banner.title}</p>
        <button className={`${banner.accentColor} text-white py-1 px-4 rounded-md text-sm w-max`}>
          {banner.buttonText}
        </button>
      </div>
      <div className="w-1/2">
        <img 
          src={banner.image}
          alt={`${banner.brand} products`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Hero Section */}
      <div className="container mx-auto max-w-6xl px-4 py-8 mt-8">
        <div className="bg-white rounded-lg p-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <h1 className="text-3xl font-bold mb-2">
              Power meets speed. 
              <br />
              The ultimate gaming laptop of 2025.
            </h1>
            <p className="text-gray-700 mb-6">
              Dominate every game with ultra-fast performance, cutting-edge graphics, and immersive visuals. Built for gamers, creators, and power users.
            </p>
            <button className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700">
              Shop now
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://jarrods.tech/wp-content/uploads/2023/12/asus-rog-zephyrus-m16-2023-gaming-laptop-1024x576.jpg" 
              alt="ROG Gaming Laptop" 
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* New Products Section */}
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">New Products</h2>
        <div className=" gap-4">
        <ProductCart/>
        </div>
      </div>

      {/* New Arrival Products Section */}
      {/* <div className="container mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">New Arrival Products</h2>
        <div className=" gap-4">
        <ProductCart/>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
         <ProductCart/>
        </div>
      </div> */}
      {/* Brand Banners */}
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">New Arrival Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {brandBanners.slice(0, 2).map(banner => (
            <BrandBanner key={banner.id} banner={banner} />
          ))}
        </div>
        {/* <div className="mt-4 h-[300px] ">
          <BrandBanner banner={brandBanners[2]} />
        </div> */}
      </div>

      {/* Best Selling Products */}
     
    </div>
  );
};

export default HomePage;
