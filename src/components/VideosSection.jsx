"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Ranchers } from "@next/font/google";

const ranchers = Ranchers({ subsets: ["latin"], weight: "400" });

const videoLinks = [
  { id: "V5ROgRVso90?si=9vPShkQzlMgTkN9j", title: "Kaleidoscope Launch Video" },
  { id: "PS85aJvTNKM?si=8jgyTRJkf4RSTI8G", title: "Aditya Gadhvi" },
  { id: "-8waHD5yGQE?si=yPKlwCxl8uJbjaNM", title: "Footprints'24 Official AfterMovie" },
  { id: "nw49b7oyOqM?si=_bpyxYWcUJL4iiG", title: "tunein tuesday" },
];

const VideosSection = () => {
  const [isMobile, setIsMobile] = useState(true); // Default to mobile to prevent flicker

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // Check immediately
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="videos-section py-8 sm:py-16 px-4 sm:px-8 text-white text-center">
      <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${ranchers.className} tracking-wide`}>
        VIDEOS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {videoLinks.map((video, index) => (
          <VideoCard 
            key={index} 
            video={video} 
            index={index} 
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
};

const VideoCard = ({ video, index, isMobile }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Skip animations on mobile
  const animationClass = isMobile 
    ? 'translate-x-0 opacity-100' 
    : `${inView ? 'translate-x-0 opacity-100' : (index % 2 === 0 ? '-translate-x-full' : 'translate-x-full') + ' opacity-0'}`;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform p-2 ${animationClass}`}
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="w-full aspect-video"
        ></iframe>
      </div>
    </div>
  );
};

export default VideosSection;