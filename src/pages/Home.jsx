import { HeaderContainer, IntroContainer, SobreContainer, ConteudoContainer, ImagensContainer, FooterContainer} from "./Home.styles";
import React from 'react'
import { Header } from "../components/Header"
import { Intro } from "../components/Intro"
import { Sobre } from "../components/Sobre"
import { Conteudo } from "../components/Conteudo"
import { Imagens } from "../components/Imagens"
import { Footer } from "../components/Footer"

export function Home() {
  return (
    <div>

      <HeaderContainer>
        <Header/>
      </HeaderContainer>

      <IntroContainer>
        <Intro/>
      </IntroContainer>
      
      <SobreContainer>
        <Sobre/>
      </SobreContainer>

      <ConteudoContainer>
        <Conteudo/>
      </ConteudoContainer>

      <ImagensContainer>
       <Imagens/>
      </ImagensContainer>

      <FooterContainer>
       <Footer/>
      </FooterContainer>
    </div>
  );
}


