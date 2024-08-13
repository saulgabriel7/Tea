import { HeaderContainer, IntegrantesContainer } from "./Home.styles";
import { Header } from "../components/Header"
import { Integrantes } from "../components/Integrantes"

export function Participantes () {
  return (
    <div>
    <HeaderContainer>
        <Header/>
    </HeaderContainer>

    <IntegrantesContainer>
        <Integrantes/>
    </IntegrantesContainer>

    </div>
  )
}
