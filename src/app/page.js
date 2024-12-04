"use client";
// _app.js
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css'; // Adjust the path to your global styles file

import React, { useRef } from "react";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import SpinningWheel from "@/components/SpinningWheel";
import Segments from "@/components/Segments";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import VideosSection from "@/components/VideosSection";
import FlashbackFridayVideos from "@/components/FlashbackFridayVideos";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";


export default function Home() {
  // Create refs for each section
  const aboutRef = useRef(null);
  const segmentsRef = useRef(null);
  const achievementsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const galleryRef = useRef(null);
  const sponsorsRef = useRef(null);
  const footerRef = useRef(null);

  const sectionRefs = {
    aboutRef,
    segmentsRef,
    achievementsRef,
    testimonialsRef,
    galleryRef,
    sponsorsRef,
    footerRef,
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-black via-red-990 to-red-900  text-white">
      <Navbar refs={sectionRefs} />
      <SpinningWheel / >
      <section ref={aboutRef}><About /></section>
      <section ref={segmentsRef}><Segments /></section>
      <section ref={achievementsRef}><Achievements /></section>
      <section ref={testimonialsRef}><Testimonials /></section>
      <section ref={galleryRef}><Gallery /></section>
      <VideosSection />
      <FlashbackFridayVideos />
      <section ref={sponsorsRef}><SponsorsSection /></section>
      <Footer ref={footerRef} />
     
    </div>
  );
}
