// components/Gallery.js
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const galleryImages = [
  { src: "/path/to/image1.png", alt: "Image 1" },
  { src: "/path/to/image2.png", alt: "Image 2" },
  { src: "/path/to/image3.png", alt: "Image 3" },
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
    <div className="gallery-section  py-16 px-8 text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">GALLERY</h2>
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
