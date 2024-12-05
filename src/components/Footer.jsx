// components/Footer.js
"use client";

import React from "react";
import Link from "next/link"; // Assuming you're using Next.js for navigation

const Footer = () => {
  return (
    <div className="footer  py-12 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8 space-y-8 md:space-y-0">
        
        {/* Newsletter Signup */}
        <div className="newsletter text-center md:text-left flex-1">
          <h2 className="text-2xl font-bold mb-2">NEWSLETTER SIGN-UP</h2>
          <p className="mb-4">By subscribing to our mailing list you will always be updated with the latest news from us.</p>
          <form className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="bg-gray-700 text-white p-2 rounded-l-md w-full md:w-auto"
            />
            <button className="bg-blue-500 text-white p-2 rounded-r-md mt-2 md:mt-0 md:ml-2">Subscribe</button>
          </form>
        </div>

        {/* University Logo */}
        <div className="logo flex-1 flex justify-center md:justify-center">
          <img
            src="images/MSUlogo.png" // Placeholder for university logo
            alt="University Logo"
            className="h-24"
          />
        </div>

        {/* Contact Info */}
        <div className="contact-info text-center md:text-left flex-1">
          <h2 className="text-2xl font-bold mb-2">CONTACT INFO</h2>
          <p>Faculty of Technology & Engineering<br />
            The Maharaja Sayajirao University of Baroda,<br />
            Kalabhavan, Vadodara, Gujarat 390001.
          </p>
          <p className="mt-4">
            <strong>Email:</strong> info@msufp.in | contact@msufp.in<br />
            <strong>Phone:</strong> +91-9265574891 | +91-7874287905
          </p>
          {/* Web Team Button */}
          <Link href="/webteam">
            <button className="bg-blue-500 text-white mt-4 p-2 rounded-md">Web Team</button>
          </Link>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="social-media flex justify-center mt-8 space-x-4 text-2xl">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
