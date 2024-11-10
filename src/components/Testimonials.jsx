// components/Testimonials.js
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div className="testimonials-section bg-gradient-to-b from-gray-900 to-gray-700 py-16 px-8 text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">TESTIMONIALS</h2>
      <Slider {...settings} className="max-w-5xl mx-auto">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="p-6 bg-gray-800 rounded-lg text-center shadow-lg">
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