// components/Segments.js
"use client";

import React, { useState } from "react";
import { Ranchers } from "@next/font/google";

// Load Ranchers font
const ranchers = Ranchers({ subsets: ["latin"], weight: "400" });


const segmentsData = [
  { title: "TECHNOTRON", description: "A hub of technical competitions and challenges.", logo: "images/Technotron.png" },
  { title: "KALEIDOSCOPE", description: "A blend of creativity and analytical thinking.", logo: "images/Kaleidoscope.png" },
  { title: "QUEST", description: "A thrilling treasure hunt through tech and knowledge.", logo: "images/Quest.png" },
  { title: "ROLLING SQUARES", description: "Unleash your musical and artistic talents.", logo: "images/RS.png" },
  { title: "FOOTPRINTS STOCK EXCHANGE", description: "Simulate stock trading and investments.", logo: "images/FSE.png" },
  { title: "VIRTUOSITY", description: "Engage in a world of virtual gaming and fun.", logo: "images/Virtuosity.png" },
  { title: "FOOTPRINTS SOCIAL RESPONSIBILITY", description: "Promote social responsibility initiatives and projects.", logo: "images/FSR.png" },
  { title: "SCHITRON", description: "Technical events and knowledge-based activities.", logo: "images/Scitron.png" },
  { title: "MASCOT", description: "Robotics and automation challenges.", logo: "images/Mascot.png" },
];

const Segments = () => {
  const [activeSegment, setActiveSegment] = useState(null);

  const handleCardClick = (index) => {
    setActiveSegment(activeSegment === index ? null : index); // Toggle card
  };

  return (
    <div className="segments-section  py-16 px-8 text-white">
      <h2 className="text-4xl font-bold mb-8 text-center ${ranchers.className} tracking-wide">SEGMENTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {segmentsData.map((segment, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 cursor-pointer transition-all duration-300 relative"
          >
            <div className="flex justify-center mb-4">
              <img src={segment.logo} alt={`${segment.title} logo`} className="w-12 h-12" /> {/* Adjust size as needed */}
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
