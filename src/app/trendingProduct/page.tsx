import React from "react";
import Image from "next/image"; // Assuming you're using Next.js for Image optimization
import Link from "next/link";

const TrendingProducts = () => {
  const trendingProducts = [
    {
      name: "Comfort Handy Craft",
      price: "26.00",
      originalPrice: "42.00",
      image: "/trendingproducts/chair1 f0567dbeace7c9dbaa02b7b75570f3bc.png",
    },
    {
      name: "Comfort Handy Craft",
      price: "26.00",
      originalPrice: "42.00",
      image: "/trendingproducts/chair2 dc012e6f46348c947e76cbc241026273.png",
    },
    {
      name: "Comfort Handy Craft",
      price: "26.00",
      originalPrice: "42.00",
      image: "/trendingproducts/chair3 43e865f7def49808ba73dcffe65b6b21.png",
    },
    {
      name: "Comfort Handy Craft",
      price: "26.00",
      originalPrice: "42.00",
      image: "/trendingproducts/chair4 b43127cc352f32aef1be3bab70906d81.png",
    },
  ];

  const executiveProducts = [
    { id: 5, img: "/trendingproducts/image 5.png", name: "clock" },
    { id: 6, img: "/trendingproducts/image 6.png", name: "Drawer" },
    { id: 7, img: "/trendingproducts/chair 7 image.png", name: "Executive Seat Chair", price: "32.00" },
    { id: 8, img: "/trendingproducts/chair 8 image.png", name: "Executive Seat Chair", price: "32.00" },
    { id: 9, img: "/trendingproducts/chair 9 image.png", name: "Executive Seat Chair", price: "32.00" },
  ];

  return (
    <div>
      {/* Trending Products Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-center mb-6">
            Trending Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 text-center border border-gray-200 relative"
              >
                {/* Product Image */}
                <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain h-full"
                  />
                </div>

                {/* Product Info */}
                <h3 className="text-gray-800 font-semibold mb-2">{product.name}</h3>
                <div className="text-gray-500">
                  <span className="text-blue-900 line-through mr-2">${product.originalPrice}</span>
                  <span>${product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Products Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-center mb-6">
            Executive Products
          </h2>

          <div className="flex flex-col space-y-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {executiveProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gray-200 flex items-center p-4 rounded shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Product Image */}
                <Image
                  src={product.img}
                  alt={`Executive Seat Chair - ${product.name}`}
                  width={80}
                  height={80}
                  className="object-contain mr-4 rounded-md"
                />

                {/* Product Info */}
                <div>
                  <h3 className="text-[#3F509E] font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-[#3F509E] font-bold inline-block">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrendingProducts;