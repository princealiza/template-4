import React from "react";

const TopCategories: React.FC = () => {
  const products = [
    {
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/TopCategories/image 1.png", // Replace with the actual image path
    },
    {
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/TopCategories/image 2.png", // Replace with the actual image path
    },
    {
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/TopCategories/image 3.png", // Replace with the actual image path
    },
    {
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/TopCategories/image 4.png", // Replace with the actual image path
    },
  ];

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Top Categories
        </h2>

        {/* View Shop Button */}
        <div className="text-center mb-8"></div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden text-center"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              {/* Product Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-purple-600 text-xl font-bold mt-2">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;