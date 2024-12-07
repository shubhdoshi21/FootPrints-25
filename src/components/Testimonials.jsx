"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import { Ranchers } from "@next/font/google";

// Load Ranchers font
const ranchers = Ranchers({ subsets: ["latin"], weight: "400" });

const testimonialsData = [
  {
    name: "Peter C. Schultz",
    title: "Co-inventor of the fiber optics",
    quote:
      "The organizers for this conference, everybody, everyone had been very friendly and helpful and I found them very enthusiastic to work with FootPrints.",
    photo: "/kaleido/karambirsingh.png",
  },
  {
    name: "Saurabh Jain",
    title: "Ex-Vice President @Paytm",
    quote:
      "I liked the event very much, I am happy that students of this university had organized such a great event and the energy could be seen—the audience was very interactive.",
    photo: "/path/to/saurabh-jain.png",
  },
  {
    name: "Dr. Pawan Aggarwal",
    title: "International Motivational Speaker",
    quote:
      "Today's generation can do great things, all you need is to think beyond your capacity and stamina! Even the name of this college has a blessing in itself.",
    photo: "/path/to/pawan-aggarwal.png",
  },
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

  // Animation Variants
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 }, // Start invisible and below
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
    reverse: { opacity: 0, y: -50, transition: { duration: 0.8 } }, // Reverse for scroll up
  };

  return (
    <motion.div
      className="testimonials-section py-16 px-8 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }} // Trigger animation on entering view
      variants={fadeUpVariant}
    >
      <motion.h2
        className={`text-4xl font-bold mb-8 text-center ${ranchers.className} tracking-wide`}
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }} // Continuous animation on scroll
         
      >
        TESTIMONIALS
      </motion.h2>
      <Slider {...settings} className="max-w-6xl mx-auto">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="px-4"
            initial="hidden"
            whileInView="visible"
            
            viewport={{ once: false, amount: 0.2 }} // Continuous animation on scroll
            variants={fadeUpVariant}
          >
            <div
              className="p-6 rounded-lg bg-opacity-85 cursor-pointer transition-all duration-300 relative transform hover:shadow-lg hover:scale-100 flex flex-col justify-between"
              style={{
                backgroundColor: "rgba(151, 25, 25, 0.2)",
                boxShadow: "0 5px 8px rgba(0, 0, 0, 0.5)", // Black shadow effect
              }}
            >
              <p className="italic text-lg mb-4 flex-grow text-center">{`"${testimonial.quote}"`}</p>
              <div className="flex items-center justify-center mb-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-semibold text-xl text-center">{testimonial.name}</h3>
                <p className="text-sm text-gray-400 text-center">{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default Testimonials;
