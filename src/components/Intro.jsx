import React from "react";
import styled from "styled-components";
import introimg1 from "../assets/introimg1.png";
import introimg2 from "../assets/introimg2.png"; // Adicione mais imagens conforme necessário
import introimg3 from "../assets/introimg3.png";
import Carousel from "../components/Corousel"; // Importe o carrossel criado anteriormente

export function Intro() {
  const images = [introimg1, introimg2, introimg3]; // Array com as imagens do carrossel

  return (
    <IntroSection>
      <Carousel images={images} />
    </IntroSection>
  );
}

const IntroSection = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
`;
