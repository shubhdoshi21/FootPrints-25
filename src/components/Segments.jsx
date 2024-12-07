"use client";
import React, { useState, useEffect, useRef } from "react";
import { Ranchers } from "@next/font/google";
import { motion } from "framer-motion";

// Load Ranchers font
const ranchers = Ranchers({ subsets: ["latin"], weight: "400" });

const segmentsData = [
  { title: "TECHNOTRON", description: "A hub of technical competitions and challenges.", logo: "images/TT1.png" },
  { title: "KALEIDOSCOPE", description: "A blend of creativity and analytical thinking.", logo: "images/KALEIDO.png" },
  { title: "QUEST", description: "A thrilling treasure hunt through tech and knowledge.", logo: "images/QUEST1.png" },
  { title: "ROLLING SQUARES", description: "Unleash your musical and artistic talents.", logo: "images/RS2.png" },
  { title: "FOOTPRINTS STOCK EXCHANGE", description: "Simulate stock trading and investments.", logo: "images/fse1.png" },
  { title: "VIRTUOSITY", description: "Engage in a world of virtual gaming and fun.", logo: "images/VIRTUO1.png" },
  { title: "FOOTPRINTS SOCIAL RESPONSIBILITY", description: "Promote social responsibility initiatives and projects.", logo: "images/FSR1.png" },
  { title: "SCHITRON", description: "Technical events and knowledge-based activities.", logo: "images/schitron1.png" },
  { title: "MASCOT", description: "Robotics and automation challenges.", logo: "images/mascot1.png" },
];

const Segments = () => {
  const [activeSegment, setActiveSegment] = useState(null);
  const [visibleIndices, setVisibleIndices] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleIndices((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      {
        threshold: 0.15, 
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleCardClick = (index) => {
    setActiveSegment(activeSegment === index ? null : index); // Toggle card
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="segments-section text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -150 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} 
        className={`text-4xl font-bold mb-8 text-center ${ranchers.className} tracking-wide`}
      >
        SEGMENTS
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {segmentsData.map((segment, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            data-index={index}
            onClick={() => handleCardClick(index)}
            className={`p-4 rounded-lg bg-opacity-85 border cursor-pointer transition-all ease-out duration-1000 relative mx-auto ${
              visibleIndices.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{
              width: "280px", // Fixed width for consistent card size
              minHeight: activeSegment === index ? "auto" : "220px", // Smaller initial height
              borderColor: "#a84343",
              borderWidth: "2px",
              boxShadow: "0 0 5px 1px #a84343",
            }}
          >
            <div className="flex justify-center mb-4">
              <img
                src={segment.logo}
                alt={`${segment.title} logo`}
                className="w-24 h-24 sm:w-28 sm:h-28  transform transition-transform duration-300 hover:scale-90" // Scale logo on hover" // Adjusted for smaller screens
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">{segment.title}</h3>
            {activeSegment === index && (
              <p className="text-center text-gray-300 mt-2 text-sm sm:text-base">{segment.description}</p>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Segments;
