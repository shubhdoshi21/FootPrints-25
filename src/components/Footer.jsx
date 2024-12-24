import React, { forwardRef } from "react";
import Link from "next/link";
import { Ranchers } from "@next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ranchers = Ranchers({ subsets: ["latin"], weight: "400" });

const Footer = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="footer py-12 text-white bg-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8 space-y-8 md:space-y-0">
        {/* Newsletter Signup */}
        <div className="newsletter text-center md:text-left flex-1">
          <h2 className={`text-2xl font-bold mb-2 ${ranchers.className} tracking-wider`}>
            NEWSLETTER SIGN-UP
          </h2>
          <p className="mb-4">
            By subscribing to our mailing list you will always be updated with the latest news from us.
          </p>
          <form className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="bg-gray-700 text-white p-2 rounded-l-md w-full md:w-auto"
            />
            <button className="bg-blue-500 text-white p-2 rounded-r-md mt-2 md:mt-0 md:ml-2 hover:bg-blue-400">
              Subscribe
            </button>
          </form>
        </div>

        {/* University Logo */}
        <div className="logo flex-1 flex justify-center md:justify-center">
          <img
            src="/images/MSUlogowhite.png"
            alt="University Logo"
            className="h-24 transition-transform transform hover:scale-110"
          />
        </div>

        {/* Contact Info */}
        <div className="contact-info text-center md:text-left flex-1">
          <h2 className={`text-2xl font-bold mb-2 ${ranchers.className} tracking-wider`}>
            CONTACT INFO
          </h2>
          <p>
            Faculty of Technology & Engineering<br />
            The Maharaja Sayajirao University of Baroda,<br />
            Kalabhavan, Vadodara, Gujarat 390001.
          </p>
          <p className="mt-4">
            <strong>Email:</strong> <a href="mailto:management.fp25@gmail.com" className="no-underline">management.fp25@gmail.com</a><br />
            <strong>Phone:</strong> <a href="tel:9428316967">+91-94283 16967</a>
          </p>
          <Link href="/webteam">
            <button className="bg-transparent border border-blue-500 text-white mt-4 p-2 rounded-md hover:bg-blue-400">
              Web Team
            </button>
          </Link>
        </div>
      </div>

      {/* Social Media Links - Fixed for mobile */}
      <div className="flex flex-row justify-center mt-8 px-4">
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.instagram.com/footprints.msu?igsh=d3RrcGtlb2FvczFk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com/msufp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-500"
          >
            <i className="fab fa-facebook"></i>
          </a>

          <a
            href="https://youtube.com/@footprintsmsu?si=gKrsuL31CHE8OLxi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-red-500"
          >
            <i className="fab fa-youtube"></i>
          </a>

          <a
            href="https://www.linkedin.com/company/msufp/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
});

Footer.displayName = "Footer";
export default Footer;