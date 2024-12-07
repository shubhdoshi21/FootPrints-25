"use client";

import React from "react";
import Image from "next/image";
import { Ranchers } from "@next/font/google";

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
  return (
    <div className="achievements-section py-16 px-8 text-white">
      <h2 className={`text-4xl font-bold mb-8 text-center ${ranchers.className} tracking-wide`}>ACHIEVEMENTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {achievementsData.map((achievement, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-opacity-85 border cursor-pointer transition-all duration-300 relative transform hover:scale-105 hover:border-glow"
            style={{ borderColor: "#a84343", borderWidth: "1.5px" }}
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
