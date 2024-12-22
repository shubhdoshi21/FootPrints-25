"use client";

import React, { useState, useEffect, useRef } from "react";
import { Ranchers } from "@next/font/google";
import { motion } from "framer-motion";

// Load Ranchers font
const ranchers = Ranchers({ subsets: ["latin"], weight: "400" });

const achievementsData = [
  { title: "Patronage From UNESCO", logo: "/images/Unesco.jpg" },
  { title: "Make In India & Skill India", logo: "/images/makeinIndia.jpg" },
  { title: "SAYEN & CEE", logo: "/images/Sayeen.jpg" },
  { title: "Appreciation From Former Chief Minister", logo: "/images/VijayRupani.jpg" },
  { title: "Accreditation of G20", logo: "/images/G20.jpg" },
  { title: "Appreciation From Home Minister", logo: "/images/HomeMinister.jpg" },
  { title: "Limca Book Of Record", logo: "/images/Limca.jpg" },
  { title: "Guinness Book of World Record", logo: "/images/GBW.jpg" },
  { title: "Young Contributors", logo: "/images/Young.jpg" },
];

const Achievements = () => {
  const [visibleIndices, setVisibleIndices] = useState([]);
  const achievementRefs = useRef([]);

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
        threshold: 0.15, // Trigger animation earlier for a smoother effect
      }
    );

    achievementRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="achievements-section text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={`text-4xl font-bold mb-8 mt-8 text-center ${ranchers.className} tracking-wide`}
      >
        ACHIEVEMENTS
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {achievementsData.map((achievement, index) => (
          <div
            key={index}
            ref={(el) => (achievementRefs.current[index] = el)}
            data-index={index}
            className={`p-4 rounded-lg bg-opacity-85 cursor-pointer transition-all ease-out duration-1000 relative mx-auto 
              ${visibleIndices.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
            style={{
              width: "100%", // Make sure it's responsive on smaller screens
              maxWidth: "280px", // Set max width for larger screens
            }}
          >
            <div className="relative w-full h-40 mb-4">
              <img
                src={achievement.logo}
                alt={`${achievement.title} logo`}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">
              {achievement.title}
            </h3>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Achievements;
