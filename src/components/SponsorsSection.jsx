"use client";

import React, { useEffect, useRef } from "react";
import { Ranchers } from "@next/font/google";

// Load Ranchers font
const ranchers = Ranchers({ subsets: ["latin"], weight: "400" });


// Update with actual sponsor names and image paths
const sponsors = [
  { name: "Title Sponsor", imageSrc: "/images/Images(sponsor)/Matrix ComSec LOGO_Registered Trademark (2).jpg" },
  { name: "Co-Sponsored By", imageSrc: "/images/Images(sponsor)/Layer 1.jpg" },
  { name: "Associate Sponsor", imageSrc: "/images/Images(sponsor)/thldnfmlyf23h6dji26g (1).png" },
  { name: "Macheanema Sponsor", imageSrc: "/images/Images(sponsor)/Axtel.jpg" },
  { name: "Hydrex & Ballista Sponsor", imageSrc: "/images/Images(sponsor)/SEE_.jpg" },
  { name: "Cybernetics Sponsor", imageSrc: "/images/Images(sponsor)/Odyssens.jpg" },
  { name: "Sanganikee Sponsor", imageSrc: "/images/Images(sponsor)/Cosmos.jpg" },
  { name: "Rasayanam Sponsor", imageSrc: "/images/Images(sponsor)/Kats.jpg" },
  { name: "Rolling Squares Sponsor", imageSrc: "/images/Images(sponsor)/Layer 2.jpg" },
  { name: "Energy Sponsor", imageSrc: "/images/Images(sponsor)/Energy.jpg" },
  { name: "FSE Sponsor", imageSrc: "/images/Images(sponsor)/Varni Digital.jpg" },
  { name: "CAT Sponsor", imageSrc: "/images/Images(sponsor)/IMS.jpg" },
  { name: "Watch partner", imageSrc: "/images/Images(sponsor)/Dalson.jpg" },
  { name: "Gate Sponsor", imageSrc: "/images/Images(sponsor)/ACUMEN.jpg" },
  { name: "Production Partner", imageSrc: "/images/Images(sponsor)/Layer 3.jpg" },
  { name: "hackprints partner", imageSrc: "/images/Images(sponsor)/Devfolio.jpg" },
  { name: "Whatsapp partner", imageSrc: "/images/Images(sponsor)/Chikoo.jpg" },
  { name: "Media Partner", imageSrc: "/images/Images(sponsor)/VTM.jpg" },
  { name: "Optical Partner", imageSrc: "/images/Images(sponsor)/Vishnu Opticals.jpg" },
  { name: "Online Media Partner", imageSrc: "/images/Images(sponsor)/YouthBarodian.jpg" },
  { name: "Online Media Partner", imageSrc: "/images/Images(sponsor)/Asgard.jpg" },
  { name: "Online Media Partner", imageSrc: "/images/Images(sponsor)/Vadodara Mirror.jpg" },
  { name: "Youth partner", imageSrc: "/images/Images(sponsor)TPOV.jpg" },
  { name: "Youth Partner", imageSrc: "/images/Images(sponsor)/Yellow-360-Logo-Final.jpg" },
  { name: "Advertisement Partner", imageSrc: "/images/Images(sponsor)/advertising-agency-in-ahmedabad-logo.jpg" },
  { name: "Flora Partner", imageSrc: "/images/Images(sponsor)/malhar florist.jpg" },
  { name: "Security Partner", imageSrc: "/images/Images(sponsor)/Layer 4.jpg" },
  { name: "Schitron Partner", imageSrc: "/images/Images(sponsor)/Robowala.jpg" },
  { name: "Health Care Partner", imageSrc: "/images/Images(sponsor)/Gopinathji.jpg" },
  { name: "Mascot Sponsor", imageSrc: "/images/Images(sponsor)/MIR.jpg" },
  { name: "Powered By", imageSrc: "/images/Images(sponsor)/Prapti.jpg" },
  { name: "Supported By", imageSrc: "/images/Images(sponsor)/Arkel.jpg" },
  { name: "Hospitality Partner", imageSrc: "/imges/Images(sponsor)/Layer 5.jpg" },
  { name: "Printing Partner", imageSrc: "/images/Images(sponsor)/jay printers.jpg" },
  { name: "Jewellery Partner", imageSrc: "/images/Images(sponsor)/Joyalukkas.jpg" },
  { name: "Cake & Celebration Partner", imageSrc: "/images/Images(sponsor)/Goodies Logo.jpg" },
  { name: "Travel Partner", imageSrc: "/images/Images(sponsor)/hta logo.jpg" },
  { name: "Drone Partner", imageSrc: "/images/Images(sponsor)/Robotskull.jpg" },
  { name: "Paint Partner", imageSrc: "/images/Images(sponsor)/omkar.jpg" },
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
    <div className="sponsors-section py-8 text-center">
      <h2 className="text-3xl font-bold mb-4" style={{ color: "black" }}>SPONSORS</h2>
      <div
        className="sponsor-marquee overflow-hidden whitespace-nowrap max-w-5xl mx-auto"
        ref={scrollRef}
      >
        <div className="flex items-center gap-8">
          {sponsors.concat(sponsors).map((sponsor, index) => (
            <div key={index} className="flex flex-col items-center min-w-[200px] max-w-[200px]">
              <div
                style={{
                  backgroundColor: "#ffffff", // Adjust this color as needed
                  borderRadius: "8px",
                  padding: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0)",
                  display: "flex", 
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "190px", // Ensure uniform width
                  height: "190px", // Reduced height
                }}
              >
                <img
                  src={sponsor.imageSrc}
                  alt={sponsor.name}
                  className="w-32 h-32 object-contain rounded shadow-md"
                  style={{
                    maxWidth: "70%",  // Keep the image within the box size
                    maxHeight: "70%", // Keep the image within the box size
                  }}
                />
              <span className="text-sm mt-2 text-black">{sponsor.name}</span>


              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;
