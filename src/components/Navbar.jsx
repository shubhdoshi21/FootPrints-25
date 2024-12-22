"use client";
import React, { useState } from "react";
import { Ranchers } from "@next/font/google";
import Link from 'next/link';

// Load Ranchers font
const ranchers = Ranchers({ subsets: ["latin"], weight: "400" });

const Navbar = ({ refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close menu after selecting an item
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-2 text-white ${ranchers.className}`} style={{ backgroundColor: '#020a08b5' }}>
      {/* Hamburger Menu Button */}
      <button
        className={`text-white md:hidden focus:outline-none ${ranchers.className}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {/* Hamburger icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Logo */}
      <div className="flex items-center justify-end w-full md:w-auto">
        <img src="images/fp_splash.png" alt="FP logo" className="h-10 w-auto object-contain" />
      </div>

      {/* Navigation Items */}
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col items-start absolute top-full left-0 w-full bg-red-900 md:flex md:flex-row md:relative md:w-auto md:bg-transparent gap-4 sm:gap-6 md:gap-8 text-[16px] sm:text-[18px] tracking-wider font-semibold ${ranchers.className}`}
      >
        <li className="flex items-center justify-center">
          <button
            onClick={() => handleScroll(refs.aboutRef)}
            className="hover:text-gray-400 transition-colors duration-300 py-2 px-4 md:px-0"
          >
            About
          </button>
        </li>
        <li className="flex items-center justify-center">
          <button
            onClick={() => handleScroll(refs.segmentsRef)}
            className="hover:text-gray-400 transition-colors duration-300 py-2 px-4 md:px-0"
          >
            Segments
          </button>
        </li>
        <li className="flex items-center justify-center">
          <button
            onClick={() => handleScroll(refs.achievementsRef)}
            className="hover:text-gray-400 transition-colors duration-300 py-2 px-4 md:px-0"
          >
            Achievements
          </button>
        </li>
        <li className="flex items-center justify-center">
          <button
            onClick={() => handleScroll(refs.testimonialsRef)}
            className="hover:text-gray-400 transition-colors duration-300 py-2 px-4 md:px-0"
          >
            Testimonials
          </button>
        </li>
        <li className="flex items-center justify-center">
          <button
            onClick={() => handleScroll(refs.galleryRef)}
            className="hover:text-gray-400 transition-colors duration-300 py-2 px-4 md:px-0"
          >
            Gallery
          </button>
        </li>
        <li className="flex items-center justify-center">
          <button
            onClick={() => handleScroll(refs.sponsorsRef)}
            className="hover:text-gray-400 transition-colors duration-300 py-2 px-4 md:px-0"
          >
            Sponsors
          </button>
        </li>
        <li className="flex items-center justify-center">
          <button
            onClick={() => handleScroll(refs.footerRef)}
            className="hover:text-gray-400 transition-colors duration-300 py-2 px-4 md:px-0"
          >
            Contact Us
          </button>
        </li>
        <li className="flex items-center justify-center">
          <Link
            href="/webteam"
            className="hover:text-gray-400 transition-colors duration-300 py-2 px-4 md:px-0"
          >
            Web Team
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
