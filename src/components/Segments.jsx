"use client";
// import AOS from "aos";
import React, { useState } from "react";

import { Ranchers } from "@next/font/google";

// import "aos/dist/aos.css";

// Load Ranchers font
const ranchers = Ranchers({ subsets: ["latin"], weight: "400" });

const segmentsData = [
  { title: "TECHNOTRON", description: "A hub of technical competitions and challenges.", logo: "images/TT1.png", animation: "fade-up" },
  { title: "KALEIDOSCOPE", description: "A blend of creativity and analytical thinking.", logo: "images/KALEIDO.png", animation: "fade-up" },
  { title: "QUEST", description: "A thrilling treasure hunt through tech and knowledge.", logo: "images/QUEST1.png", animation: "fade-up" },
  { title: "ROLLING SQUARES", description: "Unleash your musical and artistic talents.", logo: "images/RS2.png", animation: "fade-up" },
  { title: "FOOTPRINTS STOCK EXCHANGE", description: "Simulate stock trading and investments.", logo: "images/fse1.png", animation: "fade-up" },
  { title: "VIRTUOSITY", description: "Engage in a world of virtual gaming and fun.", logo: "images/VIRTUO1.png", animation: "fade-up" },
  { title: "FOOTPRINTS SOCIAL RESPONSIBILITY", description: "Promote social responsibility initiatives and projects.", logo: "images/FSR1.png", animation: "fade-up" },
  { title: "SCHITRON", description: "Technical events and knowledge-based activities.", logo: "images/schitron1.png", animation: "fade-up" },
  { title: "MASCOT", description: "Robotics and automation challenges.", logo: "images/mascot1.png", animation: "fade-up" },
];

const Segments = () => {
  const [activeSegment, setActiveSegment] = useState(null);

  const handleCardClick = (index) => {
    setActiveSegment(activeSegment === index ? null : index); // Toggle card
  };

  return (

    <div className="segments-section  py-16 px-8 text-white text-center">
      <h2
          className={`text-4xl font-bold mb-6 ${ranchers.className} tracking-wide`}
        >
          SEGMENTS
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {segmentsData.map((segment, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className="p-8 rounded-lg bg-opacity-85 border cursor-pointer transition-all duration-300 relative"
            style={{
              borderColor: "#a84343",
              borderWidth: "2px",
              width: "300px", // Increased card size
              height: "300px", // Increased card size
              boxShadow: "0 0 5px 1px #a84343",
            }}
            data-aos={segment.animation}
          >
            <div className="flex justify-center mb-6">
            <img
            src={segment.logo}
            alt={`${segment.title} logo`}
            className="w-32 h-30"
            />

            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">{segment.title}</h3>
            {activeSegment === index && (
              <p className="text-center text-gray-300 mt-4">{segment.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Segments;