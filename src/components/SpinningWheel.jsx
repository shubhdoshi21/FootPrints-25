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
  // const selectItem = (index) => {
  //   setSelectedItem(index);
  //   const spinDuration = 4000; // Set spin duration (in milliseconds)
  
  //   // If 25 is selected, hide the wheel and show the GIF after the spin
  //   if (items[index] === 25) {
  //     setTimeout(() => {
  //       setWheelVisible(false);
  //       setShowGif(true);
  //     }, spinDuration); // Wait for the spin to complete
  //   } else {
  //     // For other items, show the carousel after the spin
  //     setTimeout(() => {
  //       setCarouselData(getCarouselDataForItem(items[index]));
  //       setShowCarousel(true);
  //     }, spinDuration); // Wait for the spin to complete
  //   }
  // };

  

  const getCarouselDataForItem = (item) => {
    // Map of items to their respective sets of images
    const imageSets = {
      1: [
        "/images/FP(GEN)/FP(1).jpg",
        "/images/FP(GEN)/FP(2).jpg",
        "/images/FP(GEN)/FP(3).jpg",
        "/images/FP(GEN)/FP(4).jpg",
        "/images/FP(GEN)/FP(5).jpg",
        "/images/FP(GEN)/FP(6).jpg",
        "/images/FP(GEN)/FP(7).jpg",
        "/images/FP(GEN)/FP(8).jpg",
        "/images/FP(GEN)/FP(9).jpg",
        "/images/FP(GEN)/FP(10).jpg"
      ],
      2: [
        "/images/FP(GEN)/FP(1).jpg",
        "/images/FP(GEN)/FP(2).jpg",
        "/images/FP(GEN)/FP(3).jpg",
        "/images/FP(GEN)/FP(4).jpg",
        "/images/FP(GEN)/FP(5).jpg",
        "/images/FP(GEN)/FP(6).jpg",
        "/images/FP(GEN)/FP(7).jpg",
        "/images/FP(GEN)/FP(8).jpg",
        "/images/FP(GEN)/FP(9).jpg",
        "/images/FP(GEN)/FP(10).jpg"
      ],
     
      3: [
        "/images/FP(GEN)/FP(1).jpg",
        "/images/FP(GEN)/FP(2).jpg",
        "/images/FP(GEN)/FP(3).jpg",
        "/images/FP(GEN)/FP(4).jpg",
        "/images/FP(GEN)/FP(5).jpg",
        "/images/FP(GEN)/FP(6).jpg",
        "/images/FP(GEN)/FP(7).jpg",
        "/images/FP(GEN)/FP(8).jpg",
        "/images/FP(GEN)/FP(9).jpg",
        "/images/FP(GEN)/FP(10).jpg"
      ],
      4: [
        "/images/FP(GEN)/FP(1).jpg",
        "/images/FP(GEN)/FP(2).jpg",
        "/images/FP(GEN)/FP(3).jpg",
        "/images/FP(GEN)/FP(4).jpg",
        "/images/FP(GEN)/FP(5).jpg",
        "/images/FP(GEN)/FP(6).jpg",
        "/images/FP(GEN)/FP(7).jpg",
        "/images/FP(GEN)/FP(8).jpg",
        "/images/FP(GEN)/FP(9).jpg",
        "/images/FP(GEN)/FP(10).jpg"
      ],
      5: [
        "/images/FP(GEN)/FP(1).jpg",
        "/images/FP(GEN)/FP(2).jpg",
        "/images/FP(GEN)/FP(3).jpg",
        "/images/FP(GEN)/FP(4).jpg",
        "/images/FP(GEN)/FP(5).jpg",
        "/images/FP(GEN)/FP(6).jpg",
        "/images/FP(GEN)/FP(7).jpg",
        "/images/FP(GEN)/FP(8).jpg",
        "/images/FP(GEN)/FP(9).jpg",
        "/images/FP(GEN)/FP(10).jpg"
      ],
      6: [
        "/images/FP(GEN)/FP(1).jpg",
        "/images/FP(GEN)/FP(2).jpg",
        "/images/FP(GEN)/FP(3).jpg",
        "/images/FP(GEN)/FP(4).jpg",
        "/images/FP(GEN)/FP(5).jpg",
        "/images/FP(GEN)/FP(6).jpg",
        "/images/FP(GEN)/FP(7).jpg",
        "/images/FP(GEN)/FP(8).jpg",
        "/images/FP(GEN)/FP(9).jpg",
        "/images/FP(GEN)/FP(10).jpg"
      ],
      6: [
        "/images/FP(GEN)/FP(1).jpg",
        "/images/FP(GEN)/FP(2).jpg",
        "/images/FP(GEN)/FP(3).jpg",
        "/images/FP(GEN)/FP(4).jpg",
        "/images/FP(GEN)/FP(5).jpg",
        "/images/FP(GEN)/FP(6).jpg",
        "/images/FP(GEN)/FP(7).jpg",
        "/images/FP(GEN)/FP(8).jpg",
        "/images/FP(GEN)/FP(9).jpg",
        "/images/FP(GEN)/FP(10).jpg"
      ],
      7: [
        "/images/FP(GEN)/FP(1).jpg",
        "/images/FP(GEN)/FP(2).jpg",
        "/images/FP(GEN)/FP(3).jpg",
        "/images/FP(GEN)/FP(4).jpg",
        "/images/FP(GEN)/FP(5).jpg",
        "/images/FP(GEN)/FP(6).jpg",
        "/images/FP(GEN)/FP(7).jpg",
        "/images/FP(GEN)/FP(8).jpg",
        "/images/FP(GEN)/FP(9).jpg",
        "/images/FP(GEN)/FP(10).jpg"
      ],
      8: [
        "/images/FP(GEN)/FP(1).jpg",
        "/images/FP(GEN)/FP(2).jpg",
        "/images/FP(GEN)/FP(3).jpg",
        "/images/FP(GEN)/FP(4).jpg",
        "/images/FP(GEN)/FP(5).jpg",
        "/images/FP(GEN)/FP(6).jpg",
        "/images/FP(GEN)/FP(7).jpg",
        "/images/FP(GEN)/FP(8).jpg",
        "/images/FP(GEN)/FP(9).jpg",
        "/images/FP(GEN)/FP(10).jpg"
      ],
      9: [
        "/images/FP(GEN)/FP(1).jpg",
        "/images/FP(GEN)/FP(2).jpg",
        "/images/FP(GEN)/FP(3).jpg",
        "/images/FP(GEN)/FP(4).jpg",
        "/images/FP(GEN)/FP(5).jpg",
        "/images/FP(GEN)/FP(6).jpg",
        "/images/FP(GEN)/FP(7).jpg",
        "/images/FP(GEN)/FP(8).jpg",
        "/images/FP(GEN)/FP(9).jpg",
        "/images/FP(GEN)/FP(10).jpg"
      ],
      10: [
        "/images/FP(GEN)/FP(1).jpg",
        "/images/FP(GEN)/FP(2).jpg",
        "/images/FP(GEN)/FP(3).jpg",
        "/images/FP(GEN)/FP(4).jpg",
        "/images/FP(GEN)/FP(5).jpg",
        "/images/FP(GEN)/FP(6).jpg",
        "/images/FP(GEN)/FP(7).jpg",
        "/images/FP(GEN)/FP(8).jpg",
        "/images/FP(GEN)/FP(9).jpg",
        "/images/FP(GEN)/FP(10).jpg"
      ],
      11: [
        "/images/X1/X1(1).jpg",
        "/images/X1/X1(2).jpg",
        "/images/X1/X1(3).jpg",
        "/images/X1/X1(4).jpg",
        "/images/X1/X1(5).jpg"
      ],
      12: [
        "/images/X2/X2(1).jpg",
        "/images/X2/X2(2).jpg",
        "/images/X2/X2(3).jpg"
      ],
      13: [
        "/images/X3/X3(1).jpg",
        "/images/X3/X3(2).jpg",
        "/images/X3/X3(3).jpg",
        "/images/X3/X3(4).jpg",
        "/images/X3/X3(5).jpg",
        "/images/X3/X3(6).jpg",
        "/images/X3/X3(7).jpg",
        "/images/X3/X3(8).jpg",
        "/images/X3/X3(9).jpg"
      ],
      14: [
        "/images/X4/X4(1).jpg",
        "/images/X4/X4(2).jpg",
        "/images/X4/X4(3).jpg"
      ],
      15: [
        "/images/X5/X5(1).jpg",
        "/images/X4/X4(3).jpg",
        "/images/X3/X3(7).jpg",
        "/images/X4/X4(3).jpg"
      ],
      16: [
        "/images/X6/X6(1).jpg",
        "/images/X6/X6(2).jpg",
        "/images/X3/X3(7).jpg",
        "/images/X6/X6(3).jpg",
        "/images/X7/X7(2).jpg"
      ],
      17: [
        "/images/X7/X7(1).jpg",
        "/images/X7/X7(2).jpg",
        "/images/X7/X7(3).jpg",
        "/images/X7/X7(4).jpg",
        "/images/X7/X7(5).jpg",
        // "/images/X7/X7(6).jpg",
        "/images/X7/X7(7).jpg",
        "/images/X7/X7(8).jpg",
        "/images/X7/X7(9).jpg",
        "/images/X7/X7(10).jpg",
        "/images/X7/X7(11).jpg",
        "/images/X7/X7(12).jpg",
        "/images/X7/X7(13).jpg",
        "/images/X7/X7(14).jpg",
        "/images/X7/X7(15).jpg",
        "/images/X7/X7(16).jpg"
      ],
      18: [
        "/images/X8/X8(1).jpg",
        "/images/X8/X8(2).jpg",
        "/images/X8/X8(3).jpg",
        "/images/X8/X8(4).jpg",
        "/images/X8/X8(5).jpg",
        "/images/X8/X8(6).jpg",
        "/images/X8/X8(7).jpg",
        "/images/X8/X8(8).jpg"
      ],
      19: [
        "/images/X9/X9(1).jpg",
        "/images/X9/X9(2).jpg",
        "/images/X9/X9(3).jpg",
        "/images/X9/X9(4).jpg",
        "/images/X9/X9(5).jpg",
        "/images/X9/X9(6).jpg",
        "/images/X9/X9(7).jpg",
        "/images/X9/X9(8).jpg",
        "/images/X9/X9(9).jpg",
        "/images/X9/X9(10).jpg",
        "/images/X9/X9(11).jpg",
        "/images/X9/X9(12).jpg"
      ],
      20: [
        "/images/X10/X10(2).png",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        "/images/X10/X10(3).png",
        "/images/X10/X10(4).png",
        "/images/X10/X10(5).png"
      ],
      21: [
        "/images/21/21(1).png",
        "/images/21/21(2).png",
        "/images/21/21(3).png",
        "/images/21/21(4).png",
        "/images/21/21(5).png",
        "/images/21/21(6).png",
        "/images/21/21(7).png",
    ],
      22: [
        "/images/22/image1.jpg",
        "/images/22/image2.jpg",
        "/images/22/image6.jpg",
        
        "/images/22/image5.jpg",
        
        
        
      ],
      23: [
        "/images/23/23(1).jpg",
        "/images/23/23(2).jpg",
        "/images/23/23(3).jpg",
        "/images/23/23(4).jpg",
        "/images/23/23(5).jpg",
        "/images/23/23(6).jpg",
    
    ],

      24: [
        "/images/24/image1.jpg",
        "/images/24/image2.jpg",
        "/images/24/image3.jpg",
        "/images/24/image4.jpg",
        "/images/24/image5.jpg",
        "/images/24/image6.jpg",
        "/images/24/image7.jpg",
        "/images/24/image8.jpg",
        "/images/24/image9.jpg",
        "/images/24/image10.jpg",
        "/images/24/image11.jpg",
       
      ],
      // Add mappings for other numbers up to 25...
    };

    // Return images for the selected item or fallback to an empty array
    return imageSets[item] || [];
  };
  const getDisplayText = (item) => {
    // Map items 11-20 to X1, X2, ..., X10
    if (item >= 11 && item <= 20) {
      return `X${item - 10}`;
    }
    return item; // Return the original number for other items
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
    <AnimatePresence>
      {wheelVisible && (
        <motion.div
          className="wheel-container"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          onAnimationComplete={() => {
            // Ensure the GIF only appears after the wheel disappears
            setWheelVisible(false);
            setShowGif(true);
          }}
        >
          <motion.div
            className={`wheel ${spinning}`}
            style={wheelVars}
          >
          {items.map((item, index) => (
  <div
    className="wheel-item"
    key={index}
    style={{ "--item-nb": index }}
    onClick={() => selectItem(index)}
  >
    {getDisplayText(item)} ◉
  </div>
))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  
    <div>
  <AnimatePresence>
    {showCarousel && !showGif && (
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
          <motion.img
            src="/images/COMINGSOON10.gif"
            alt="Loading..."
            style={{ width: "100%", height: "auto" }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          
        </motion.div>
      )}
    </AnimatePresence>

  
    
  </div>
  
  );
};

export default SpinningWheel;
