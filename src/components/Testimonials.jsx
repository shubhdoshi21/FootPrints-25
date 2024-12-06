// components/Testimonials.js
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Ranchers } from "@next/font/google";

// Load Ranchers font
const ranchers = Ranchers({ subsets: ["latin"], weight: "400" });


const testimonialsData = [
  {
    name: "Peter C. Schultz",
    title: "Co-inventor of the fiber optics",
    quote:
      "The organizers for these conference, everybody, everyone had been very friendly and helpful and I found very enthusiastic to work with FootPrints.",
    photo: "/path/to/peter-schultz.png",
  },
  {
    name: "Saurabh Jain",
    title: "Ex-Vice President @Paytm",
    quote:
      "I liked the event very much, I am happy that students of this university had organized such a great event and the energy would be seen-the audience were very interactive.",
    photo: "/path/to/saurabh-jain.png",
  },
  {
    name: "Dr. Pawan Aggarwal",
    title: "International Motivational Speaker",
    quote:
      "Today's generation can do great things, all you need is to think beyond your capacity and stamina! Even the name of this college has a blessing in itself.",
    photo: "/path/to/pawan-aggarwal.png",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className="testimonials-section  py-16 px-8 text-white">
      <h2 className="text-4xl font-bold mb-8 text-center ${ranchers.className} tracking-wide">TESTIMONIALS</h2>
      <Slider {...settings} className="max-w-5xl mx-auto">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="p-6 rounded-lg bg-opacity-85 border cursor-pointer transition-all duration-300 relative transform hover:scale-105 hover:border-glow"
            style={{ borderColor: "#a84343", borderWidth: "1.5px" }}>
              <p className="italic text-lg mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center justify-center mb-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <h3 className="font-semibold text-xl">{testimonial.name}</h3>
              <p className="text-sm text-gray-400">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
