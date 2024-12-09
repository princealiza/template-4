import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full h-auto mt-[12px] bg-[#F2F0FF]">
      <div className="relative flex flex-col md:flex-row items-center justify-start space-y-6 md:space-x-6 md:space-y-0 md:px-12 sm:px-6 px-4">
        {/* Image Section */}
        <div className="w-full sm:w-[387px] h-[387px] flex justify-center sm:justify-start">
          <img
            src="bell906d2aaf430d5bb6b86d462a9e91a8af.png"
            alt="Bell Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Container */}
        <div className="w-full sm:w-[644px] h-auto sm:mt-5 md:mt-0">
          {/* Text 1 */}
          <p className="text-[#FB2E86] font-lato font-bold text-[18px] sm:text-[22px] md:text-[24px] mb-3">
            Best Furniture For Your Castle....
          </p>

          {/* Text 2 */}
          <div className="text-[#000000] font-[Josefin Sans] text-[32px] sm:text-[42px] md:text-[53px] leading-[1.1] tracking-[1.5%] mb-5">
            <p>
              New Furniture Collection<br />
              Trends in 2020
            </p>
          </div>

          {/* Text 3 */}
          <div className="text-[#8A8FB9] font-lato font-bold text-[14px] sm:text-[16px] md:text-[18px] mb-5 sm:mb-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
              <br />
              in phasellus non in justo.
            </p>
          </div>

          {/* Shop Now Button */}
          <div className="mt-4 sm:mt-8">
            <button className="w-[163px] h-[50px] bg-[#FB2E86] rounded-[2px] text-white font-[Josefin Sans] text-[16px] font-bold">
              Shop Now
            </button>
          </div>
        </div>

        {/* 50% off Badge */}
        <div className="absolute top-[20%] sm:top-[15%] left-[50%] transform -translate-x-1/2 bg-blue-500 text-white text-sm font-bold w-20 h-20 rounded-full flex items-center justify-center">
          50% off
        </div>

        {/* Additional Image */}
        <div className="ml-0 sm:ml-[50px] mt-8 sm:mt-0">
          <img
            src="pinksofa 61ecc67b127029400b09a70cf2e9e973.png"
            alt="Furniture"
            className="w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] object-cover rounded-md"
          />
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-10 space-x-2">
        <img src="Rectangle 96.png" alt="Image 1" className="w-3 h-3 object-cover rounded-full" />
        <img src="Rectangle 96.png" alt="Image 2" className="w-3 h-3 object-cover rounded-full" />
        <img src="Rectangle 96.png" alt="Image 3" className="w-3 h-3 object-cover rounded-full" />
      </div>
    </section>
  );
};

export default HeroSection;