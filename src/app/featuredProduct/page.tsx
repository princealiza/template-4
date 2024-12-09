import React from "react";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/white chair 6db0a7630b347e6423288fc09447f1a8.png", // Replace with actual image paths
    },
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/brwn-white 81f40d5069977639c120b46b02efd85d.png",
    },
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/brwn-lght-blu ec2feb66129667973939b2ea5191c695.png",
    },
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/off-white 678776be52471704ed6aa26cd1d28dd8.png",
    },
  ];

  return (
    <section className="bg-purple-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Featured Products
        </h2>
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition duration-300"
              style={{ height: "361px" }} // Optional height for consistent card size
            >
              <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.code}</p>
                <p className="text-lg font-bold text-gray-800 mt-2">
                  {product.price}
                </p>
              </div>
              {/* Optional hover overlay effect */}
              {/* 
              <div className="absolute inset-0 bg-purple-500 text-white opacity-0 hover:opacity-100 flex items-center justify-center rounded-xl transition duration-300">
                <button className="py-2 px-4 bg-white text-purple-500 font-bold rounded-md shadow-md">
                  View Details
                </button>
              </div> 
              */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;