"use client";
import React from "react";

const Navbar = ({ refs }) => {
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
      <div className="text-2xl font-bold">FP</div>
      <ul className="flex gap-8 text-sm">
        <li><button onClick={() => handleScroll(refs.aboutRef)} className="hover:text-gray-400">About</button></li>
        <li><button onClick={() => handleScroll(refs.segmentsRef)} className="hover:text-gray-400">Segments</button></li>
        <li><button onClick={() => handleScroll(refs.achievementsRef)} className="hover:text-gray-400">Achievements</button></li>
        <li><button onClick={() => handleScroll(refs.testimonialsRef)} className="hover:text-gray-400">Testimonials</button></li>
        <li><button onClick={() => handleScroll(refs.galleryRef)} className="hover:text-gray-400">Gallery</button></li>
        <li><button onClick={() => handleScroll(refs.sponsorsRef)} className="hover:text-gray-400">Sponsors</button></li>
        <li><button onClick={() => handleScroll(refs.footerRef)} className="hover:text-gray-400">Contact Us</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
