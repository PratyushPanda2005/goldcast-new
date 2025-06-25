'use client'
import Image from "next/image";
import React, { useState } from "react";
import GoldcastLogo from "../../../public/logos/GoldcastLogo.svg"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 flex justify-center w-full bg-black">
      <div className="flex w-full max-w-7xl justify-between items-center">
        <div>
          <Image src={GoldcastLogo} alt="Goldcast Logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex text-neutral-500 xl:text-lg">
          <ul className="flex gap-5">
            <li>Platform</li>
            <li>Solutions</li>
            <li>Pricing</li>
            <li>Customers</li>
            <li>Events</li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center text-white">
          <div className="flex gap-4">
            <button className="py-2 px-6 border rounded-3xl">Login</button>
            <button className="py-2 px-6 bg-[#FF4200] rounded-3xl">
              Get a Demo
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-neutral-500 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 shadow-lg bg-white z-50">
          <ul className="flex flex-col items-center py-4 space-y-4 text-neutral-500">
            <li>Platform</li>
            <li>Solutions</li>
            <li>Pricing</li>
            <li>Customers</li>
            <li>Events</li>
            <li>
              <button className="py-2 px-6 border rounded-3xl w-full my-2">
                Login
              </button>
            </li>
            <li>
              <button className="py-2 px-6 bg-[#FF4200] rounded-3xl text-white w-full my-2">
                Get a Demo
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;