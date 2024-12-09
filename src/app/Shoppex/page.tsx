import React from "react";

const Shoppex: React.FC = () => {
  // Array of feature details
  const features = [
    {
      image: "/Shoppex/free-delivery 1.png",
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      image: "/Shoppex/cashback 1.png",
      title: "Fast Delivery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      image: "/Shoppex/premium-quality 1.png",
      title: "Secure Payment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      image: "/Shoppex/24-hours-support 1.png",
      title: "Best Quality",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Upper Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold text-purple-700 mb-10">
          What Shopex Offer!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-md text-center"
            >
              <div className="mb-4">
                {/* Image */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-16 h-16 mx-auto object-cover rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Lower Section */}
      <section className="bg-[#F2F0FF] h-[579px]">
        <div className="ml-[30px] p-[10px] flex flex-wrap md:flex-nowrap items-center gap-0 px-4">
          <div className="flex w-full md:w-1/2">
            {/* Product Image */}
            <img
              src="/Shoppex/sofa image 1.png"
              alt="Product"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="flex-1 w-full md:w-1/2">
            <h3 className="text-xl font-[Josefin Sans] size-35px text-[#151875]">
              Unique Features Of Latest & <br />
              Trending Products
            </h3>
            <ul className="text-gray-700 space-y-2 list-none pl-0">
              <li className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 bg-pink-600 rounded-full"></span>
                <span>All frames constructed with hardwood solids and laminates.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 bg-blue-700 rounded-full"></span>
                <span>Reinforced with double wood dowels, glue, screws, nails at corner blocks, and machine nails.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                <span>Arms, backs, and seats are structurally reinforced.</span>
              </li>
            </ul>
            <div className="mt-8">
              <button className="bg-[#FB2E86] font-[Josefin Sans] text-white py-2 px-6 box shadow-md">
                Add To Cart
              </button>
              <p className="mt-2 text-sm text-gray-500">
                B&B Italian Sofa - $32.00
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shoppex;