import { HeaderContainer, ExplicacaoContainer, FooterContainer } from "./Home.styles";
import { Header } from "../components/Header"
import { Explicacao } from "../components/Explicacao"
import { Footer } from "../components/Footer"

export  function Descobrir() {
  return (
    <div>

    <HeaderContainer>
        <Header/>
    </HeaderContainer>

    <ExplicacaoContainer>
        <Explicacao/>
    </ExplicacaoContainer>

    <FooterContainer>
       <Footer/>
    </FooterContainer>

    </div>
  )
}
