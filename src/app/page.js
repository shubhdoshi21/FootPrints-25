"use client";

import React, { useRef, useEffect, useState } from "react";
import Loader from "@/components/Loader";
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
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    // Simulate a delay for loading
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handlePointerMove = (e) => {
      const { currentTarget: el, clientX: x, clientY: y } = e;
      const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
      el.style.setProperty("--posX", x - l - w / 2);
      el.style.setProperty("--posY", y - t - h / 2);
    };

    document.body.addEventListener("pointermove", handlePointerMove);
    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
    
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className="min-h-screen w-full text-white"
          style={{
            height: "100%",
            minHeight: "100vh",
            width: "100%",
            backgroundImage: `
              linear-gradient(115deg, rgb(150 0 0), rgb(100 0 0)),
              radial-gradient(90% 100% at calc(50% + var(--posX, 0) * 1px) calc(0% + var(--posY, 0) * 1px), rgb(200 50 50), rgb(100 0 0)),
              radial-gradient(100% 100% at calc(80% - var(--posX, 0) * 1px) calc(0% - var(--posY, 0) * 1px), rgb(220 40 40), rgb(120 0 0)),
              radial-gradient(150% 210% at calc(100% + var(--posX, 0) * 1px) calc(0% + var(--posY, 0) * 1px), rgb(180 20 20), rgb(100 10 10)),
              radial-gradient(100% 100% at calc(100% - var(--posX, 0) * 1px) calc(30% - var(--posY, 0) * 1px), rgb(240 70 70), rgb(150 20 20)),
              linear-gradient(60deg, rgb(200 30 30), rgb(150 10 10))`,
            backgroundBlendMode: "overlay, overlay, difference, difference, difference, normal",
            overflowX: "hidden",
          }}
        >
          <Navbar refs={sectionRefs} />
          <SpinningWheel />
          <section ref={aboutRef}>
            <About />
          </section>
          <section ref={segmentsRef}>
            <Segments />
          </section>
          <section ref={achievementsRef}>
            <Achievements />
          </section>
          <section ref={testimonialsRef}>
            <Testimonials />
          </section>
          <section ref={galleryRef}>
            <Gallery />
          </section>
          <VideosSection />
          <FlashbackFridayVideos />
          <section ref={sponsorsRef}>
            <SponsorsSection />
          </section>
          <Footer ref={footerRef} />
        </div>
      )}
    </>
  );
}
