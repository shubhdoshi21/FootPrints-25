// components/FlashbackFridayVideos.js
"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { Ranchers } from "@next/font/google";

// Load Ranchers font
const ranchers = Ranchers({ subsets: ["latin"], weight: "400" });


const flashbackVideos = [
  {
    imageSrc: "/path/to/image1.jpg", // Replace with the actual path to the image or thumbnail
    title: "Motorcycle Stunt",
    url: "https://www.instagram.com/reel/CymwsvAqR2U/?igshid=NTc4MTIwNi2YQ==",
  },
  {
    imageSrc: "/path/to/image2.jpg", // Replace with the actual path to the image or thumbnail
    title: "Music Performance",
    url: "https://www.instagram.com/reel/some_other_video_id/",
  },
  {
    imageSrc: "/path/to/image3.jpg", // Replace with the actual path to the image or thumbnail
    title: "Charity Event",
    url: "https://www.instagram.com/reel/another_video_id/",
  },
  // Add more video objects here
];

const FlashbackFridayVideos = () => {
  return (
    <div className="flashback-friday-section  text-white">
      <h2 className="text-4xl font-bold mb-8 text-center ${ranchers.className} tracking-wide">FLASHBACK FRIDAY VIDEOS</h2>
      <div className="video-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {flashbackVideos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

const VideoCard = ({ video }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the image is in view
  });

  return (
    <div
      ref={ref}
      className={`transition-transform duration-700 transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <a href={video.url} target="_blank" rel="noopener noreferrer">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={video.imageSrc}
            alt={video.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity">
            <span className="text-white text-xl font-semibold">View on Instagram</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FlashbackFridayVideos;
