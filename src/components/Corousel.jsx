import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// Container principal do carrossel
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

// Wrapper para as imagens do carrossel
const ImagesWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translate}px);
`;

// Estilo das imagens do carrossel
const Image = styled.img`
  width: 100%;
  height: auto;
  flex-shrink: 0;
`;

// Estilo dos botões de navegação (setas)
const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;

  &:hover {
    opacity: 0.5;
  }

  ${(props) => (props.direction === "left" ? "left: 10px;" : "right: 10px;")}

  @media (max-width: 768px) {
    font-size: 1.5rem;
    ${(props) => (props.direction === "left" ? "left: 5px;" : "right: 5px;")}
  }
`;

// Botão posicionado sobre o carrossel, com diferentes posições para cada slide
const PositionedButton = styled(Link)`
  position: absolute;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 15px 25px;
  border-radius: 20px;
  cursor: pointer;
  z-index: 15;
  font-size: 1rem;
  text-decoration: none;
  text-align: center;
  transition: opacity 0.3s ease;

  ${({ currentIndex }) =>
    currentIndex === 1
      ? css`
          top: 72%;
          left: 54%;
          transform: translateX(-50%);
        `
      : css`
          top: 65%;
          left: 12%;
          transform: translateX(-50%);
        `}

  &:hover {
    opacity: 1;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    ${({ currentIndex }) =>
      currentIndex === 1
        ? css`
            top: 75%;
            left: 57%;
            padding: 8px 16px;
          `
        : css`
            top: 65%;
            left: 15%;
            padding: 8px 16px;
          `}
  }

  @media (max-width: 480px) {
    ${({ currentIndex }) =>
      currentIndex === 1
        ? css`
            top: 72%;
            left: 57%;
            padding: 7.5px 10px;
            font-size: 0.55rem;
          `
        : css`
            top: 65%;
            left: 16%;
            padding: 7.5px 10px;
            font-size: 0.55rem;
          `}
  }
`;

// Componente principal do carrossel
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
      <PositionedButton currentIndex={currentIndex} to="/Comprovacoes">
        Descubra!
      </PositionedButton>
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
