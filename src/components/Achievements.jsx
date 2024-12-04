"use client";

import React from "react";
import Image from "next/image";


const achievementsData = [
  { title: "Patronage From UNESCO", logo: "/images/Unesco.jpg" },
  { title: "Make In India & Skill India", logo:"/images/makeinIndia.jpg" },
  { title: "SAYEN & CEE", logo: "/images/Sayeen.jpg" },
  { title: "Appreciation From Former Chief Minister", logo: "/images/VijayRupani.jpg" },
  { title: "Accreditation of G20", logo: "/images/G20.jpg"},
  { title: "Appreciation From Home Minister", logo:"/images/HomeMinister.jpg" },
  { title: "Limca Book Of Record", logo: "/images/Limca.jpg"},
  { title: "Guinness Book of World Record", logo: "/images/GBW.jpg"},
  { title: "Young Contributors", logo: "/images/Young.jpg"},
];

const Achievements = () => {
  return (
    <div className="achievements-section  py-16 px-8 text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">ACHIEVEMENTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {achievementsData.map((achievement, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-center"
          >
            <div className="flex justify-center mb-4">
            <Image
  src={achievement.logo}
  alt={`${achievement.title} logo`}
  width={80}
  height={80}
  className="w-20 h-20"
/>

            </div>
            <h3 className="text-xl font-semibold">{achievement.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
