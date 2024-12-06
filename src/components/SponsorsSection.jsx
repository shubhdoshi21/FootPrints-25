// components/SponsorsSection.js
"use client";

import React, { useEffect, useRef } from "react";
import { Ranchers } from "@next/font/google";

// Load Ranchers font
const ranchers = Ranchers({ subsets: ["latin"], weight: "400" });


// Placeholder sponsor data (you can replace imageSrc with actual image paths later)
const sponsors = [
  { name: "Media Partner", imageSrc: "/path/to/media-partner.jpg" },
  { name: "Online Media Partner", imageSrc: "/path/to/online-media-partner.jpg" },
  { name: "Cab Partner", imageSrc: "/path/to/cab-partner.jpg" },
  { name: "Virtuosity Sponsor", imageSrc: "/path/to/virtuosity-sponsor.jpg" },
  { name: "Cake Partner", imageSrc: "/path/to/cake-partner.jpg" },
];

const SponsorsSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += scrollStep;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
    }, 20); // Adjust for scroll speed

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="sponsors-section  py-8 text-white text-center">
      <h2 className="text-3xl font-bold mb-4 ${ranchers.className} tracking-wide">SPONSORS</h2>
      <div
        className="sponsor-marquee overflow-hidden whitespace-nowrap max-w-5xl mx-auto"
        ref={scrollRef}
      >
        <div className="flex items-center gap-8">
          {sponsors.concat(sponsors).map((sponsor, index) => (
            <div key={index} className="flex flex-col items-center min-w-[150px]">
              <img
                src={sponsor.imageSrc}
                alt={sponsor.name}
                className="w-32 h-20 object-contain rounded shadow-md"
              />
              <span className="text-sm mt-2">{sponsor.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;
