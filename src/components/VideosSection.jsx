// components/VideosSection.js
"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { Ranchers } from "@next/font/google";

// Load Ranchers font
const ranchers = Ranchers({ subsets: ["latin"], weight: "400" });

const videoLinks = [
  { id: "your_video_id_1", title: "Footprints'24 Official Teaser" },
  { id: "your_video_id_2", title: "Kaleidoscope Launch Video" },
  { id: "your_video_id_2", title: "Kaleidoscope Launch Video" },
  { id: "your_video_id_2", title: "Kaleidoscope Launch Video" },
  // Add more video objects here
];

const VideosSection = () => {
  return (
    <div className="videos-section py-16 px-8 text-white text-center">
      <h2
        className={`text-4xl font-bold mb-6 ${ranchers.className} tracking-wide`}
      >
        VIDEOS
      </h2>
      <div className="video-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {videoLinks.map((video, index) => (
          <VideoCard key={index} video={video} index={index} />
        ))}
      </div>
    </div>
  );
};

const VideoCard = ({ video, index }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.1, // Trigger animation when 10% of the video card is in view
    triggerOnce: false, // Allow multiple triggers
  });

  // Determine animation direction based on the index
  const direction = index % 2 === 0 ? "-translate-x-full" : "translate-x-full";

  return (
    <div
      ref={ref}
      className={`transition-transform duration-700 transform ${
        inView
          ? "translate-x-0 opacity-100" // Element fully in view
          : `${direction} opacity-0` // Out of view, slide back
      }`}
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-64"
        ></iframe>
      </div>
    </div>
  );
};

export default VideosSection;
