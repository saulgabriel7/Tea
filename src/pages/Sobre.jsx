import { HeaderContainer, FooterContainer, ManualContainer } from "./Home.styles";
import { Header } from "../components/Header"
import { Manual } from "../components/Manual"
import { Footer } from "../components/Footer"

export  function Sobre() {
  return (
    <div>

    <HeaderContainer>
        <Header/>
    </HeaderContainer>

    <ManualContainer>
        <Manual/>
    </ManualContainer>

    <FooterContainer>
       <Footer/>
    </FooterContainer>

    </div>
  )
}
