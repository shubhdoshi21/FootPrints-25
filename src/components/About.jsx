"use client";

import React from "react";
import { motion } from "framer-motion";

import { Ranchers } from "@next/font/google";

// Load Ranchers font
const ranchers = Ranchers({ subsets: ["latin"], weight: "400" });

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="about-section text-white py-16 px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`text-4xl font-bold mb-6 ${ranchers.className} tracking-wide`}
        >
          About FootPrints
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          FootPrints is a National Level Technical Fiesta, which was incepted
          in 2001 by Sir C N Murthy. It has been rising in colossal
          proportions from a mere paper presentation comprising of 30
          participants in FootPrints'01 to FootPrints'23 that comprised of
          myriad competitions, workshops, and seminars from the most incurred
          celebrities. FootPrints has strived to nurture and enlighten the
          engineering minds of the country and have thereby earned the
          repute of an avant-garde technical fiesta. It comprises of
          exceptional tech and non-tech events, tantalizing seminars,
          startling techzibitions, and engaging workshops by virtuosos. It
          also works towards the upliftment of society under FootPrints
          Social Responsibility. At FootPrints, we attach a soul, a heart to
          this grandiose event. Right from the precious little smiles of
          children, to engraving history in the Guinness and Limca book of
          world records, FSR has all the benevolence. It has been a thrilling
          journey of Innovation and Experience which is something beyond
          imagination.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
