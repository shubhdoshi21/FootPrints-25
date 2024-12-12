// components/Gallery.js
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Ranchers } from "@next/font/google";

// Load Ranchers font
const ranchers = Ranchers({ subsets: ["latin"], weight: "400" });

const galleryImages = [
  { src: "/images/244/image1.jpg", alt: "Image 1" },
  { src:  "/images/244/image2.jpg", alt: "Image 2" },
  { src:  "/images/244/image3.jpg" ,alt: "Image 3" },
  { src:  "/images/244/image6.jpg" ,alt: "Image 3" },
  { src:  "/images/244/image5.jpg" ,alt: "Image 3" },
  // Add more image objects here
];

const Gallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="gallery-section  py-16 px-8 text-white text-center">
     <h2
          className={`text-4xl font-bold mb-6 ${ranchers.className} tracking-wide`}
        >
          GALLERY
        </h2>
      <Slider {...settings} className="max-w-5xl mx-auto">
        {galleryImages.map((image, index) => (
          <div key={index} className="px-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
