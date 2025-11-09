import React from "react";
import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
const Header = () => {
  const [isOpen, setisOpen] = useState(false);
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
                  
                  <div className="hidden md:flex space-x-6 text-gray-700 text-xl">
                    <FaSearch className="cursor-pointer hover:text-amber-600" />
                    <FaUser className="cursor-pointer hover:text-amber-600" />
                    <FaShoppingCart className="cursor-pointer hover:text-amber-600" />

                  </div>
                  {/* Mobile burger Menu */}

                  <button className="md:hidden text-2xl"
                    onClick={()=> setisOpen(!isOpen)}>
                      {isOpen ? <FaTimes/> : <FaBars />}
                  </button>

            </nav>

            {/* Mobile Menu Items */}
                  {isOpen && (
                    <div className="md:hidden bg-white shadow-lg transition-colors duration-200">
                      <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
                      <li className="hover:text-amber-600">Home</li>
                      <li className="hover:text-amber-600">Shop</li>
                      <li className="hover:text-amber-600">About</li>
                      <li className="hover:text-amber-600">Blogs</li>
                      <li className="hover:text-amber-600">Contact</li>

                      <div className="flex space-x-8 text-xl pt-3 border-t w-full justify-center">
                        <FaSearch className="hover:text-amber-600 " />
                        <FaShoppingCart className="hover:text-amber-600" />
                      </div>
                      <div className="flex space-x-6 test-xl pt-3 border-t w-full justify-center">
                        <FaUser className="hover:text-amber-600" />
                        <span className="cursor-pointer hover:text-amber-600">Login/signup</span>
                      </div>
                    </ul>
                    </div>
                  )}
        </header>
    )
}
export default Header