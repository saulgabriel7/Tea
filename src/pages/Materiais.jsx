import { HeaderContainer, FooterContainer, MateriaisContainer } from "./Home.styles";
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Componentes } from "../components/Componentes"


export  function Materiais() {
  return (
    <div>

    <HeaderContainer>
        <Header/>
    </HeaderContainer>

    <MateriaisContainer>
        <Componentes/>
    </MateriaisContainer>

    <FooterContainer>
       <Footer/>
    </FooterContainer>

    </div>
  )
}