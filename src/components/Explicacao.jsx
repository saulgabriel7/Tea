import quebra from "../assets/quebra.svg"
import mao from "../assets/mao_levantada.svg"
import maos from "../assets/maos.svg"

export function Explicacao() {
  return (
    <section className="section">
        <div className="explicacao-1">
            <div className="textos">
                <h3>Transformando a educação <br /> para crianças autistas</h3>
                <p>É com grande satisfação que apresentamos o TEA Sense, um <br /> projeto inovador em tecnologia educacional, desenvolvido para <br /> acompanhar e apoiar crianças autistas durante as aulas, <br /> promovendo seu desenvolvimento e bem-estar.</p>
                <h3>O que é o TeaSense?</h3>
                <p>O TEA Sense, baseado na plataforma Arduino, é uma  <br />ferramenta tecnológica equipada com quatro botões e uma <br />tela. Ele foi especialmente projetado para facilitar a <br />comunicação e a interação entre crianças autistas de grau 1 e <br /> seus professores, pais e psicólogos, criando um ambiente de <br /> aprendizagem mais inclusivo e adaptado às necessidades <br /> individuais dessas crianças.</p>
            </div>
            <div className="imagem-1">
                <img src={quebra} alt="quebra-cabeça" />
            </div>
        </div>

        <div className="explicacao-2">
            <div className="imagem-2">
                <img src={mao} alt="" />
            </div>

            <div className="textos">
                <h3>Funcionalidade</h3>
                <p>
                Facilitação da Comunicação: O TEA Sense possui uma tela que <br /> exibe cards com desenhos de emoções e possíveis estímulos<br /> que podem incomodar a criança. Quando a criança se sente<br /> incomodada, ela pode pressionar o botão correspondente ao<br /> seu desconforto, enviando uma notificação diretamente para o<br /> celular do professor, permitindo uma intervenção rápida e adequada.
                </p>

                <p>
                Integração com Aplicativo: O TEA Sense é integrado a um<br /> aplicativo acessível por professores, psicólogos e responsáveis <br /> pela criança. Este aplicativo registra como a criança se sentiu ao<br /> longo do dia, fornecendo dados valiosos que auxiliam na terapia<br /> e no desenvolvimento da criança.
                </p>

                <p>
                Suporte Auditivo e Recreativo: Equipado com um fone de ouvido<br /> que toca ruído branco, o TEA Sense ajuda a criança a se <br />acalmar em momentos de sobrecarga sensorial. Além disso, um<br /> jogo interativo com cores, semelhante a um "pop-it", está<br /> disponível para distração. Este jogo, no entanto, só pode ser<br /> ativado com a autorização e desbloqueio do professor,<br /> garantindo que não interfira no aprendizado em sala de aula.
                </p>
            </div>
        </div>

        <div className="maos">
            <img src={maos} alt="" />
        </div>
    </section>
  )
}
