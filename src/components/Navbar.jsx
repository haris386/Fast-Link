"use client";

import { useState } from "react";
import { MdKeyboardArrowRight, MdMenu, MdClose } from "react-icons/md";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["Home", "About", "How It Works", "FAQ", "Call To Action"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-end lg:justify-between px-6 py-4">
        {/* Left Menu Items */}
        <div className="hidden md:flex items-center gap-6 font-sans text-[14px] text-white">
          {menuItems.map((item) => (
            <a key={item} href="#" className="hover:text-gray-600 transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <img
            src="/Logos/FLHeader.png"
            alt="Fast-Link Logo"
            className="object-contain w-[120px] h-[40px]"
          />
        </div>

        {/* Right Pill Button */}
        <div className="hidden md:flex items-center">
          <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-medium text-black hover:bg-gray-100 transition-colors">
            Become a Driver <MdKeyboardArrowRight size={20} />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl ml-auto"
          >
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black w-full">
          <div className="flex flex-col items-center gap-4 py-4 font-sans text-[14px]">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="w-full text-center text-white py-2"
              >
                {item}
              </a>
            ))}
            <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-medium text-black hover:bg-gray-100 transition-colors">
              Become a Driver <MdKeyboardArrowRight size={20} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
