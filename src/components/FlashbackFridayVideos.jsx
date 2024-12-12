// components/FlashbackFridayVideos.js
"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import { Ranchers } from "@next/font/google";

// Load Ranchers font
const ranchers = Ranchers({ subsets: ["latin"], weight: "400" });

const flashbackVideos = [
  {
    imageSrc: "/path/to/image1.jpg", // Replace with the actual path to the image or thumbnail
    title: "Motorcycle Stunt",
    url: "https://www.instagram.com/reel/C-ccggmSc-L/?igsh=bDI0dWtrMmI4eWR0",
  },
  {
    imageSrc: "/path/to/image2.jpg", // Replace with the actual path to the image or thumbnail
    title: "Music Performance",
    url: "https://www.instagram.com/reel/C8v-l-btSm1/?igsh=dXFqbGk4MDFteXpo",
  },
  {
    imageSrc: "/path/to/image3.jpg", // Replace with the actual path to the image or thumbnail
    title: "Charity Event",
    url: "https://www.instagram.com/reel/DBwGQACteqF/?igsh=MThpdW5za3NreXQ0Zg==",
  },
  // Add more video objects here
];

const FlashbackFridayVideos = () => {
  return (
    <div className="flashback-friday-section py-16 px-8 text-white">
      <motion.h2
        className={`text-4xl font-bold mb-6 ${ranchers.className} tracking-wide text-center`}
        
      >
        FLASHBACK FRIDAY VIDEOS
      </motion.h2>
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
    <motion.div
  ref={ref}
  className={`transition-transform duration-700 transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
  style={{
    backgroundColor: "rgba(151, 25, 25, 0.2)", // Corrected rgba syntax
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)", // Black shadow effect
  }}
  whileHover={{
    scale: 1.05, // Slight zoom effect on hover
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)", // Shadow effect on hover
  }}
  transition={{ duration: 0.3 }}
>


      <a href={video.url} target="_blank" rel="noopener noreferrer">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={video.imageSrc}
            alt={video.title}
            className="w-full h-64 object-cover transition-transform duration-300" // Smooth transition for zoom
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity">
            <span className="text-white text-xl font-semibold">View on Instagram</span>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default FlashbackFridayVideos;
