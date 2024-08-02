import { HeaderContainer, FooterContainer } from "./Home.styles";
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export  function Sobre() {
  return (
    <div>

    <HeaderContainer>
        <Header/>
    </HeaderContainer>

    <FooterContainer>
       <Footer/>
    </FooterContainer>

    </div>
  )
}
