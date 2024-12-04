// components/VideosSection.js
"use client";

import React from "react";
import { useInView } from "react-intersection-observer";

const videoLinks = [
  { id: "your_video_id_1", title: "Footprints'24 Official Teaser" },
  { id: "your_video_id_2", title: "Kaleidoscope Launch Video" },
  // Add more video objects here
];

const VideosSection = () => {
  return (
    <div className="videos-section  py-16 px-8 text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">VIDEOS</h2>
      <div className="video-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {videoLinks.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

const VideoCard = ({ video }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the video is in view
  });

  return (
    <div
      ref={ref}
      className={`transition-transform duration-700 transform ${
        inView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-64"
        ></iframe>
      </div>
    </div>
  );
};

export default VideosSection;
