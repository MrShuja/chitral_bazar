import React from "react";
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
const Header = () => {
    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
            <nav className="container mx-auto flex items-center justify-between px-6 py-4">
                 {/* Left side -- shore Name */}
                 <div className="text-2xl font-bold text-emerald-700 cursor-pointer">
                    <span className="text-amber-600">Chitral</span> Bazar
                 </div>

                  { /* center -- nav items */}

                  <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
                    <li className="hover:text-amber-600 cursor-pointer">Home</li>
                    <li className="hover:text-amber-600 cursor-pointer">Shop</li>
                    <li className="hover:text-amber-600 cursor-pointer">About</li>
                    <li className="hover:text-amber-600 cursor-pointer">Blogs</li>
                    <li className="hover:text-amber-600 cursor-pointer">Contact</li>
                  </ul>

                  {/* right side -- Icons -Desktop */}
                  
                  <div className="hidden md:flex">
                    <FaSearch className="cursor-pointer" />

                  </div>



            </nav>
        </header>
    )
}
export default Header