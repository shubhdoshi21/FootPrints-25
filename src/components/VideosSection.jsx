"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { Ranchers } from "@next/font/google";

// Load Ranchers font
const ranchers = Ranchers({ subsets: ["latin"], weight: "400" });

const videoLinks = [
  { id: "V5ROgRVso90?si=9vPShkQzlMgTkN9j", title: "Kaleidoscope Launch Video" },
  {
    id: "-8waHD5yGQE?si=yPKlwCxl8uJbjaNM",
    title: "Footprints'24 Official AfterMovie",
  },
  { id: "PS85aJvTNKM?si=8jgyTRJkf4RSTI8G", title: "Aditya Gadhvi" },
];

const VideosSection = () => {
  return (
    <div className="videos-section py-8 sm:py-16 px-4 sm:px-8 text-white text-center">
      <h2
        className={`text-3xl sm:text-4xl font-bold mb-6 ${ranchers.className} tracking-wide`}
      >
        VIDEOS
      </h2>
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 sm:gap-6 max-w-6xl mx-auto">
        {videoLinks.map((video, index) => (
          <VideoCard
            key={index}
            video={video}
            index={index}
            className={`
              w-full sm:w-[calc(50%-1.5rem)]
              ${index === 2 ? "sm:mx-auto" : ""}
            `}
          />
        ))}
      </div>
    </div>
  );
};

const VideoCard = ({ video, index, className = "" }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Determine animation direction based on the index
  const direction = index % 2 === 0 ? "-translate-x-full" : "translate-x-full";

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 transform p-2
        ${inView ? "translate-x-0 opacity-100" : `${direction} opacity-0`}
        ${className}
        sm:translate-x-0  // Disable translate on small screens
      `}
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full aspect-video"
        ></iframe>
      </div>
    </div>
  );
};

export default VideosSection;
