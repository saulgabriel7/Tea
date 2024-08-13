import React, { useState } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const ImagesWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translate}px);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  flex-shrink: 0;
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  opacity: 0.5;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
    color: rgba(255, 255, 255, 1);
  }

  ${(props) => (props.direction === "left" ? "left: 10px;" : "right: 10px;")}

  @media (max-width: 768px) {
    font-size: 1.5rem;
    ${(props) => (props.direction === "left" ? "left: 5px;" : "right: 5px;")}
  }
`;

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const screenWidth = window.innerWidth;
  const translate = -currentIndex * screenWidth;

  return (
    <CarouselContainer>
      <ImagesWrapper translate={translate}>
        {images.map((src, index) => (
          <Image key={index} src={src} alt={`Slide ${index + 1}`} />
        ))}
      </ImagesWrapper>
      <Arrow direction="left" onClick={handlePrev}>
        &#9664;
      </Arrow>
      <Arrow direction="right" onClick={handleNext}>
        &#9654;
      </Arrow>
    </CarouselContainer>
  );
};

export default Carousel;
