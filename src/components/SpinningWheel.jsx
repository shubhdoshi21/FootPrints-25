"use client";
import React, { useEffect, useState } from "react";
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showGif, setShowGif] = useState(false); // State to manage GIF visibility
  const [wheelVisible, setWheelVisible] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const selectItem = (index) => {
    setSelectedItem(index);
    // Set carousel data based on the selected item
    setCarouselData(getCarouselDataForItem(items[index]));
    if (items[index] === 25) {
      // If 25 is selected, hide the wheel and show the GIF
      setWheelVisible(false);
      setCarouselData([]);
      setShowCarousel(false);
      setShowGif(true);
    } else {
      setTimeout(() => {
        setShowCarousel(true);
      }, 4000);
    }
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
        "/images/244/image1.jpg",
        "/images/244/image2.jpg",
        "/images/244/image3.jpg",
        //"/images/244/image4.jpg",
        "/images/244/image7.jpg",
        "/images/244/image5.jpg",
        "/images/244/image6.jpg",
        //"/images/244/image7.jpg",
        "/images/244/image8.jpg",
        "/images/244/image9.jpg",
        "/images/244/image10.jpg",
        "/images/244/image11.jpg"
        

      ],
      24: [
        "/images/24/image1.jpg",
        "/images/24/image5.jpg",
        "/images/24/image3.jpg",
        "/images/24/image4.jpg",
        "/images/24/image5.jpg",
        "/images/24/image6.jpg",
        "/images/24/image7.jpg",
      ],
      22: [
        "/images/22/image1.jpg",
        "/images/22/image2.jpg",
        "/images/22/image3.jpg",
        "/images/22/image4.jpg",
        "/images/22/image5.jpg",
        "/images/22/image6.jpg",
        "/images/22/image7.jpg",
      ],

      24: [
        "/images/24/image1.jpg",
        "/images/24/image5.jpg",
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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768, // For screens less than 768px
        settings: {
          slidesToShow: 1, // Show only one slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ paddingTop: "70px" }}>
        {wheelVisible &&<AnimatePresence>
           ( <div className="wheel-container">
            <motion.div
              className={`wheel ${spinning}`}
              style={wheelVars}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }} // Animation for wheel disappearance
            >
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
            </motion.div>
            </div>)
        </AnimatePresence>}
      <div>
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
                    <motion.img
                      src={imagePath}
                      alt={`Image ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity:
                          isMobile && index === currentSlide
                            ? 1
                            : isMobile
                            ? 0.7
                            : index === (currentSlide + 1) % carouselData.length
                            ? 1
                            : 0.7,
                        scale:
                          isMobile && index === currentSlide
                            ? 1
                            : isMobile
                            ? 0.8
                            : index === (currentSlide + 1) % carouselData.length
                            ? 1
                            : 0.8,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                ))}
              </Slider>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {showGif && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="gif-container"
          >
            <img
              src="/images/COMINGSOON10.gif"
              alt="Loading..."
              style={{ width: "100%", height: "auto" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SpinningWheel;
