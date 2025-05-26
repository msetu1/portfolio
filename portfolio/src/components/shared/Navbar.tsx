"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Home",
    "About Me",
    "Skills",
    "Education",
    "Projects",
    "Blogs",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white p-8 shadow-md z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Setu Akther</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li
              key={link}
              className="hover:text-[#6C63FF] cursor-pointer transition hover:underline hover:underline-offset-4"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-center bg-black bg-opacity-90 p-4 rounded">
          {navLinks.map((link) => (
            <li
              key={link}
              className="hover:text-[#6C63FF] cursor-pointer transition"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
