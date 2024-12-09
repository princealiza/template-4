import React from "react";

export default function DiscountSection() {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-gray-50">
      {/* Main Heading */}
      <h1 className="text-3xl font-[Josefin Sans] text-[#151875] mb-6">
        Discount Items
      </h1>

      {/* Navbar */}
      <div className="flex space-x-8 text-gray-600 mb-10">
        <span className="cursor-pointer hover:underline text-sm font-medium text-[#FB2E86]">
          Wood Chair
        </span>
        <span className="cursor-pointer hover:underline text-sm font-medium">
          Plastic Chair
        </span>
        <span className="cursor-pointer hover:underline text-sm font-medium">
          Sofa Collection
        </span>
      </div>

      {/* Discount Section Content */}
      <div className="relative bg-white shadow-lg rounded-lg flex flex-col lg:flex-row items-center w-full max-w-[1214px] p-6">
        {/* Left Section */}
        <div className="flex-1 p-6 lg:p-12">
          {/* Subheading */}
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-gray-800">
            20% Discount On All Products
          </h2>

          {/* Product Name */}
          <p className="text-[#FB2E86] mb-6">Eams Sofa Compact</p>

          {/* Features */}
          <ul className="flex flex-wrap mb-6 text-gray-700">
            <div className="flex w-full">
              <li className="flex items-center w-1/2">
                <span className="mr-2 text-green-600">✔</span> Material exposed like metals
              </li>
              <li className="flex items-center w-1/2">
                <span className="mr-2 text-green-600">✔</span> Simple neutral colors
              </li>
            </div>
            <div className="flex w-full">
              <li className="flex items-center w-1/2">
                <span className="mr-2 text-green-600">✔</span> Clear lines and geometric figures
              </li>
              <li className="flex items-center w-1/2">
                <span className="mr-2 text-green-600">✔</span> Material opposed like metals
              </li>
            </div>
          </ul>

          {/* Button */}
          <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition duration-300">
            Shop Now
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex items-center justify-center relative mt-6 lg:mt-0">
          {/* Background Circle */}
          <div className="rounded-full bg-pink-100 w-56 h-56 lg:w-72 lg:h-72 absolute"></div>

          {/* Image */}
          <img
            src="/Discount/ds count sofa.png" // Corrected file name
            alt="Eams Sofa Compact"
            className="relative w-56 h-56 lg:w-72 lg:h-72 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}