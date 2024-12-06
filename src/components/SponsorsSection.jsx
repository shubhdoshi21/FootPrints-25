"use client";

import React, { useEffect, useRef } from "react";

// Update with actual sponsor names and image paths
const sponsors = [
  { name: "Title Sponsor", imageSrc: "/images/Images(sponsor)/ACUMEN.jpg" },
  { name: "Co-Sponsored By", imageSrc: "/images/Images(sponsor)/ACUMEN.jpg" },
  { name: "Associate Sponsor", imageSrc: "/images/Images(sponsor)/ACUMEN.jpg" },
  { name: "Macheanema Sponsor", imageSrc: "/images/Images(sponsor)/ACUMEN.jpg" },
  { name: "Gate Sponsor", imageSrc: "/images/Images(sponsor)/ACUMEN.jpg" },
  { name: "Media Partner", imageSrc: "/images/Images(sponsor)/YouthBarodian.jpg" },
  { name: "Media Partner", imageSrc: "/images/Images(sponsor)/Asgard.jpg" },
  { name: "Media Partner", imageSrc: "/images/Images(sponsor)/Vadodara Mirror.jpg" },
  { name: "Online Media Partner", imageSrc: "/images/Images(sponsor)/online-media-partner.jpg" },
  { name: "Cab Partner", imageSrc: "/images/Images(sponsor)/cab-partner.jpg" },
  { name: "Virtuosity Sponsor", imageSrc: "/images/Images(sponsor)/virtuosity-sponsor.jpg" },
  { name: "Cake Partner", imageSrc: "/images/Images(sponsor)/Goodies Logo.jpg" },
  // Add more sponsors as needed
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
    <div className="sponsors-section py-8 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">SPONSORS</h2>
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
