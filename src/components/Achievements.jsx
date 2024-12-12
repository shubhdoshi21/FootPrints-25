"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Ranchers } from "@next/font/google";

// Load Ranchers font
const ranchers = Ranchers({ subsets: ["latin"], weight: "400" });

const achievementsData = [
  { title: "Patronage From UNESCO", logo: "/images/Unesco.jpg", animation: "fade-up" },
  { title: "Make In India & Skill India", logo: "/images/makeinIndia.jpg", animation: "fade-up" },
  { title: "SAYEN & CEE", logo: "/images/Sayeen.jpg", animation: "fade-up" },
  { title: "Appreciation From Former Chief Minister", logo: "/images/VijayRupani.jpg", animation: "fade-up" },
  { title: "Accreditation of G20", logo: "/images/G20.jpg", animation: "fade-up" },
  { title: "Appreciation From Home Minister", logo: "/images/HomeMinister.jpg", animation: "fade-up" },
  { title: "Limca Book Of Record", logo: "/images/Limca.jpg", animation: "fade-up" },
  { title: "Guinness Book of World Record", logo: "/images/GBW.jpg", animation: "fade-up" },
  { title: "Young Contributors", logo: "/images/Young.jpg", animation: "fade-up" },
];

const Achievements = () => {
  const [visible, setVisible] = useState([]);
  const achievementRefs = useRef([]);

  // Intersection Observer for detecting visibility
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.dataset.index);
        if (entry.isIntersecting) {
          setVisible((prev) => [...new Set([...prev, index])]);
        } else {
          setVisible((prev) => prev.filter((i) => i !== index));
        }
      });
    }, { threshold: 0.1 }); // Trigger earlier for a smoother transition

    achievementRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Function to handle adding animation classes
  const getAnimationClass = (index) => {
    if (visible.includes(index)) {
      return `animate-${achievementsData[index].animation}`;
    }
    return '';
  };

  return (
    <div className="achievements-section py-16 px-8 text-white">
      <h2 className={`text-4xl font-bold mb-8 text-center ${ranchers.className} tracking-wide`}>
        ACHIEVEMENTS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {achievementsData.map((achievement, index) => (
          <div
            key={index}
            ref={(el) => (achievementRefs.current[index] = el)}
            data-index={index}
            className={`p-6 rounded-lg bg-opacity-85  cursor-pointer transition-all duration-500 ease-out relative transform hover:scale-105 hover:border-glow ${getAnimationClass(index)}`}
            // style={{ borderColor: "#a84343", borderWidth: "1.5px" }}
          >
            <div className="relative w-full h-40 mb-4">
              <Image
                src={achievement.logo}
                alt={`${achievement.title} logo`}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-center">{achievement.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
