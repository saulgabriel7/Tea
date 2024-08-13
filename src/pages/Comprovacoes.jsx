import { HeaderContainer, FooterContainer, EvidenciasContainer } from "./Home.styles";
import { Header } from "../components/Header"
import { Evidencias } from "../components/Evidencias"
import { Footer } from "../components/Footer"

export  function Comprovacoes() {
  return (
    <div>

    <HeaderContainer>
        <Header/>
    </HeaderContainer>

    <EvidenciasContainer>
        <Evidencias/>
    </EvidenciasContainer>


    <FooterContainer>
       <Footer/>
    </FooterContainer>

    </div>
  )
}
