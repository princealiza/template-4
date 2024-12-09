import { RxEnvelopeClosed } from "react-icons/rx";
import { PiPhoneCallBold } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

export default function Header() {
    return (
        <div>
            {/* Top Header */}
            <div className="h-[44px] bg-[#7E33E0] flex flex-wrap items-center justify-between px-4 sm:px-8 md:px-12 lg:px-[100px]">
                {/* Left Section */}
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <RxEnvelopeClosed className="w-4 h-4 text-white" />
                        <span className="text-white text-sm sm:text-base font-medium">mhhasanul@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <PiPhoneCallBold className="w-4 h-4 text-white" />
                        <span className="text-white text-sm sm:text-base font-medium">(12345) 67890</span>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-6 hidden md:flex">
                    <div className="flex items-center space-x-1">
                        <span className="text-white text-sm sm:text-base font-medium">English</span>
                        <RiArrowDropDownLine className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex items-center space-x-1">
                        <span className="text-white text-sm sm:text-base font-medium">USD</span>
                        <RiArrowDropDownLine className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <FiUser className="w-4 h-4 text-white" />
                        <span className="text-white text-sm sm:text-base font-medium">Login</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <CiHeart className="w-4 h-4 text-white" />
                        <span className="text-white text-sm sm:text-base font-medium">Wishlist</span>
                    </div>
                    <FiShoppingCart className="w-6 h-6 text-white" />
                </div>
            </div>

            {/* Navbar */}
            <div className="w-full bg-white flex flex-wrap items-center justify-between px-4 sm:px-8 md:px-12 lg:px-[100px] py-2">
                {/* Logo */}
                <div className="text-[#0D0E43] font-bold text-xl sm:text-2xl lg:text-3xl">Hekto</div>

                {/* Navigation Links */}
                <div className="flex items-center space-x-4 sm:space-x-8 mt-4 md:mt-0">
                    <span className="text-[#FB2E86] text-sm sm:text-base font-medium cursor-pointer">Home</span>
                    <span className="text-[#0D0E43] text-sm sm:text-base font-medium cursor-pointer">Pages</span>
                    <span className="text-[#0D0E43] text-sm sm:text-base font-medium cursor-pointer">Products</span>
                    <span className="text-[#0D0E43] text-sm sm:text-base font-medium cursor-pointer">Blog</span>
                    <span className="text-[#0D0E43] text-sm sm:text-base font-medium cursor-pointer">Shop</span>
                    <span className="text-[#0D0E43] text-sm sm:text-base font-medium cursor-pointer">Contact</span>
                </div>

                {/* Search Bar */}
                <div className="flex items-center mt-4 md:mt-0">
                    <input 
                        type="text" 
                        className="w-[150px] sm:w-[200px] lg:w-[300px] h-10 border border-gray-300 px-4 text-sm sm:text-base rounded-l"
                        placeholder="Search..."
                    />
                    <div className="w-10 h-10 bg-[#FB2E86] flex items-center justify-center rounded-r">
                        <CiSearch className="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
}