"use client"
import React, { useState } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Ranchers } from "@next/font/google";

// Load Ranchers font
const ranchers = Ranchers({ subsets: ["latin"], weight: "400" });


const SpinningWheel = () => {
  const items = Array.from({ length: 25 }, (_, i) => i + 1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showCarousel, setShowCarousel] = useState(false);
  const [carouselData, setCarouselData] = useState(false);

  const selectItem = (index) => {
    setSelectedItem(index);
    // Set carousel data based on the selected item
    setCarouselData(getCarouselDataForItem(items[index]));
    setTimeout(() => {
      setShowCarousel(true);
    }, 4000);
  };
  
  const getCarouselDataForItem = (item) => {
    // Map of items to their respective sets of images
    const imageSets = {
      1: [
        "/images/1/image1.jpg",
        "/images/1/image2.jpg",
        "/images/1/image3.jpg",
        "/images/1/image4.jpg",
        "/images/1/image5.jpg",
        "/images/1/image6.jpg",
        "/images/1/image7.jpg",
      ],
      2: [
        "/images/2/image1.jpg",
        "/images/2/image2.jpg",
        "/images/2/image3.jpg",
        "/images/2/image4.jpg",
        "/images/2/image5.jpg",
        "/images/2/image6.jpg",
        "/images/2/image7.jpg",
      ],
      24: [
        "/images/24/image1.jpg",
        "/images/24/image2.jpg",
        "/images/24/image3.jpg",
        "/images/24/image4.jpg",
        "/images/24/image5.jpg",
        "/images/24/image6.jpg",
        "/images/24/image7.jpg",
      ],
      3: [
        "/images/3/image1.jpg",
        "/images/3/image2.jpg",
        "/images/3/image3.jpg",
        "/images/3/image4.jpg",
        "/images/3/image5.jpg",
        "/images/3/image6.jpg",
        "/images/3/image7.jpg",
      ],
      4: [
        "/images/4/image1.jpg",
        "/images/4/image2.jpg",
        "/images/4/image3.jpg",
        "/images/4/image4.jpg",
        "/images/4/image5.jpg",
        "/images/24/image6.jpg",
        "/images/24/image7.jpg",
      ],
      24: [
        "/images/24/image1.jpg",
        "/images/24/image2.jpg",
        "/images/24/image3.jpg",
        "/images/24/image4.jpg",
        "/images/24/image5.jpg",
        "/images/24/image6.jpg",
        "/images/24/image7.jpg",
      ],
      24: [
        "/images/24/image1.jpg",
        "/images/24/image2.jpg",
        "/images/24/image3.jpg",
        "/images/24/image4.jpg",
        "/images/24/image5.jpg",
        "/images/24/image6.jpg",
        "/images/24/image7.jpg",
      ],

      24: [
        "/images/24/image1.jpg",
        "/images/24/image2.jpg",
        "/images/24/image3.jpg",
        "/images/24/image4.jpg",
        "/images/24/image5.jpg",
        "/images/24/image6.jpg",
        "/images/24/image7.jpg",
      ],
      // Add mappings for other numbers up to 25...
    };
  
    // Return images for the selected item or fallback to an empty array
    return imageSets[item] || [];
  };
  

  const wheelVars = {
    "--nb-item": items.length,
    "--selected-item": selectedItem !== null ? selectedItem : 0,
  };
  const spinning = selectedItem !== null ? "spinning" : "";

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ paddingTop: '70px' }} >
    <div className="wheel-container" >
      <div className={`wheel ${spinning}`} style={wheelVars}>
        {items.map((item, index) => (
          <div
            className="wheel-item"
            key={index}
            style={{ "--item-nb": index }}
            onClick={() => selectItem(index)}
          >
            {item} ◉
          </div>
        ))}
      </div>
      {/* {selectedItem !== null && (
        <div className="selected-number">Selected: {items[selectedItem]}</div>
      )} */}
      <AnimatePresence>
        {showCarousel && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="carousel-container"
          >
       <Slider {...settings}>
  {carouselData.map((imagePath, index) => (
    <div key={index} className="carousel-item">
      <img src={imagePath} alt={`Image ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
    </div>
  ))}
</Slider>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </div>
  );
};

export default SpinningWheel;