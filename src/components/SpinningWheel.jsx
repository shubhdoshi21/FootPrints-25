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
    // Return different carousel data based on the selected item
    // This is just an example, you can customize this function as needed
    return [
      { title: `Item ${item} - Slide 1`, description: `Description for item ${item}, slide 1` },
      { title: `Item ${item} - Slide 2`, description: `Description for item ${item}, slide 2` },
      { title: `Item ${item} - Slide 3`, description: `Description for item ${item}, slide 3` },
    ];
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
              {carouselData.map((item, index) => (
                <div key={index} className="carousel-item">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
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