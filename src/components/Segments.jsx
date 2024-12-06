// components/Segments.js
"use client";

import React, { useState } from "react";

import { Ranchers } from "@next/font/google";

// Load Ranchers font
const ranchers = Ranchers({ subsets: ["latin"], weight: "400" });

const segmentsData = [
  { title: "TECHNOTRON", description: "A hub of technical competitions and challenges.", logo: "images/TT.png" },
  { title: "KALEIDOSCOPE", description: "A blend of creativity and analytical thinking.", logo: "images/KALEIDO.png"
   },
  { title: "QUEST", description: "A thrilling treasure hunt through tech and knowledge.", logo: "images/QUEST1.png" },
  { title: "ROLLING SQUARES", description: "Unleash your musical and artistic talents.", logo: "images/RS2.png" },
  { title: "FOOTPRINTS STOCK EXCHANGE", description: "Simulate stock trading and investments.", logo: "images/FSE1.png" },
  { title: "VIRTUOSITY", description: "Engage in a world of virtual gaming and fun.", logo: "images/VIRTUO1.png" },
  { title: "FOOTPRINTS SOCIAL RESPONSIBILITY", description: "Promote social responsibility initiatives and projects.", logo: "images/FSR1.png" },
  { title: "SCHITRON", description: "Technical events and knowledge-based activities.", logo: "images/Schitron1.png" },
  { title: "MASCOT", description: "Robotics and automation challenges.", logo: "images/mascott.png" },
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
          className="p-6 rounded-lg bg-opacity-85 border cursor-pointer transition-all duration-300 relative"
          style={{ borderColor: '#a84343', borderWidth: '1.5px' }} 
        >
        
        
            <div className="flex justify-center mb-4">
              <img src={segment.logo} alt={`${segment.title} logo`} className="w-15 h-14" /> {/* Adjust size as needed */}
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
