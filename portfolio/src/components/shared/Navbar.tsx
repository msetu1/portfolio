
'use client';

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { id: "banner", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "blogs", label: "Blogs" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white p-6 shadow-md z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => handleScroll("banner")}
        >
          Setu Akther
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map(({ id, label }) => (
            <li
              key={id}
              onClick={() => handleScroll(id)}
              className="cursor-pointer hover:text-[#6C63FF] transition hover:underline hover:underline-offset-4"
            >
              {label}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-center bg-black bg-opacity-90 p-6 rounded">
          {navLinks.map(({ id, label }) => (
            <li
              key={id}
              onClick={() => handleScroll(id)}
              className="cursor-pointer hover:text-[#6C63FF] text-lg font-semibold"
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;


