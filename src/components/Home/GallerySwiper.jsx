import React, { useState, useEffect } from 'react';
import galleryStyles from "../../styles/gallery.module.scss";
import 'animate.css';

import photo1 from "../../images/photo1.png";
import photo2 from "../../images/photo2.png";
import photo3 from "../../images/photo3.png";
import photo4 from "../../images/photo4.png";
import photo5 from "../../images/photo5.png";
import photo6 from "../../images/photo6.png";
import photo7 from "../../images/photo7.png";
import photo8 from "../../images/photo8.png";
import photo9 from "../../images/photo9.png";
import photo10 from "../../images/photo10.png";
import photo11 from "../../images/photo11.png";
import photo12 from "../../images/photo12.png";
import photo13 from "../../images/photo13.png";
import photo14 from "../../images/photo14.png";
import photo15 from "../../images/photo15.png";
import photo16 from "../../images/photo16.png";
import photo17 from "../../images/photo17.png";
import photo18 from "../../images/photo18.png";
import photo19 from "../../images/photo19.png";
import photo20 from "../../images/photo20.png";
import photo21 from "../../images/photo21.png";

const GallerySwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,
    photo16,
    photo17,
    photo18,
    photo19,
    photo20,
    photo21,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered && hoveredIndex !== activeIndex) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % photos.length);
      }
    }, 1200);
  
    return () => clearInterval(timer);
  }, [photos.length, isHovered, hoveredIndex, activeIndex]);
  

  const handleMouseEnter = (index) => {
    setIsHovered(true);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredIndex(null);
  };

  return (
<div className={galleryStyles.gallery}>
    {photos.map((photo, index) => (
      <div
        key={index}
        className={`${galleryStyles.photo} ${!isHovered && index === activeIndex ? `${galleryStyles.active} animate__animated animate__flip` : ''} ${
          index % 3 === 0 ? galleryStyles.blueBorder : index % 3 === 1 ? galleryStyles.greenBorder : galleryStyles.orangeBorder
        }`}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={photo}
          className={`${galleryStyles.pic} ${isHovered && index === hoveredIndex ? galleryStyles.hoverEffect : ''}`}
          alt={`Pic ${index}`}
        />
      </div>
    ))}
  </div>
  );
}

export default GallerySwiper;
